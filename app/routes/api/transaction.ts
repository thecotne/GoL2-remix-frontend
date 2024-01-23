import type { ActionArgs } from '@remix-run/node'
import { num } from 'starknet'
import { sql } from '~/db.server'
const hexToDecimalString = num.hexToDecimalString

export async function action({ request }: ActionArgs) {
  const body = await request.formData()
  console.log(body.get('hash'))
  console.log(Object.fromEntries(body.entries()))

  const tx = await sql`
    INSERT INTO transaction (
      "hash",
      "finalityStatus",
      "functionName",
      "functionCaller",
      "functionInputCellIndex",
      "functionInputGameState",
      "functionInputGameId"
    )
    VALUES (
      ${body.get('hash')},
      ${body.get('finalityStatus')},
      ${body.get('functionName')},
      ${hexToDecimalString(body.get('functionCaller') as string)},
      ${body.get('functionInputCellIndex')},
      ${body.get('functionInputGameState')},
      ${body.get('functionInputGameId')}
    )
    RETURNING *;
  `

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return tx.rows[0]
}
