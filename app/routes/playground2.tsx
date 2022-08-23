import type { LoaderArgs } from '@remix-run/node'
import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { useStarknet } from '@starknet-react/core'
import { sql } from '~/db.server'
import ContainerInner from '../components/Layout/ContainerInner'

export async function loader(args: LoaderArgs) {
  return json(await sql`select * from infinite`)
}

export default function Playground2() {
  const { account } = useStarknet()
  const data = useLoaderData<typeof loader>()

  console.log(data)

  return <ContainerInner>{account}</ContainerInner>
}
