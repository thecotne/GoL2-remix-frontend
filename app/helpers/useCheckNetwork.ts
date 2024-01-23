import { useNetwork } from '@starknet-react/core'
import { useRootLoaderData } from '~/hooks/useRootLoaderData'

export const useCheckNetwork = () => {
  const { env } = useRootLoaderData()
  const { chain } = useNetwork()
  const useTestnet = !env.USE_MAINNET

  return {
    isCorrectNetwork: chain.testnet === useTestnet,
  }
}
