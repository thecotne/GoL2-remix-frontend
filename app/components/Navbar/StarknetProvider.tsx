import { useLoaderData } from '@remix-run/react'
import { goerli, mainnet } from '@starknet-react/chains'
import {
  StarknetConfig,
  publicProvider,
  argent,
  braavos,
  useInjectedConnectors,
  infuraProvider,
} from '@starknet-react/core'

export function StarknetProvider({ children }: { children: React.ReactNode }) {
  const { connectors } = useInjectedConnectors({
    // Show these connectors if the user has no connector installed.
    recommended: [argent(), braavos()],
    // Hide recommended connectors if the user has any connector installed.
    includeRecommended: 'onlyIfNoConnectors',
    // Randomize the order of the connectors.
    order: 'random',
  })
  const { env } = useLoaderData()
  const provider = env.INFURA_API_KEY != null ? infuraProvider({ apiKey: env.INFURA_API_KEY }) : publicProvider()

  return (
    <StarknetConfig chains={[mainnet, goerli]} provider={provider} connectors={connectors}>
      {children}
    </StarknetConfig>
  )
}
