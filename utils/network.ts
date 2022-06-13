export const InfiniteAddressByNetwork = {
  'goerli-alpha': '0x0791e75345b4836755f2a7c2fa99d4b627b34d162a96973df45842b7bb9a7bd9',
  'mainnet-alpha': '0x0791e75345b4836755f2a7c2fa99d4b627b34d162a96973df45842b7bb9a7bd9',
}
export const CreatorAddressByNetwork = {
  'goerli-alpha': '0x021720286a97c4cb4504de696a28f60a421af77a21f5da9df717d071756d9734',
  'mainnet-alpha': '0x021720286a97c4cb4504de696a28f60a421af77a21f5da9df717d071756d9734',
}
export const getInfiniteAddress = (network) => InfiniteAddressByNetwork[network]
export const getCreatorAddress = (network) => InfiniteAddressByNetwork[network]
