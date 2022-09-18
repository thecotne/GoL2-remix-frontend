import DropdownMenu from '../../../DropDownMenu/DropDownMenu'
import {
  HiChevronDown,
  HiOutlineClipboardCopy,
  HiOutlineDocumentSearch,
  HiOutlineLogout,
  HiOutlinePlusCircle,
} from 'react-icons/hi'
import useCopyToClipboard from '../../../../hooks/useCopyToClipboard'
import { CgProfile } from 'react-icons/cg'
import { getShortChecksumAddress } from '~/helpers/starknet'
import { ContractAddress } from '~/hooks/useGameContract'
import golTokenIcon from '~/assets/images/gol-token-icon.png'
import { useStarknet } from '@starknet-react/core'
import { useEffect, useState } from 'react'
import { getChecksumAddress } from 'starknet4'

const UserDropdownMenu = ({ account, disconnect }) => {
  const [copyToClipboard, { success }] = useCopyToClipboard()
  const { connectors } = useStarknet()
  const [wallet, setWallet] = useState<{ id: string; name: string }>()

  useEffect(() => {
    ;(async () => {
      for (const connector of connectors) {
        const accountObj = await connector.account()
        if (accountObj != null) {
          if (getChecksumAddress(accountObj.address) === getChecksumAddress(account)) {
            setWallet({
              id: connector.id(),
              name: connector.name(),
            })
          }
        }
      }
    })()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account])

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <CgProfile size={15} />
        {getShortChecksumAddress(account)}
        <HiChevronDown size={24} />
      </DropdownMenu.Trigger>
      <DropdownMenu.Content align="end" sideOffset={5}>
        <DropdownMenu.Label>
          Connected to <strong>{wallet?.name ?? 'Argent X'}</strong>
          {' via '} <strong>Starknet</strong>
        </DropdownMenu.Label>

        {/* // TODO show this only if a user has not added gol token to wallet */}
        <DropdownMenu.Item
          onClick={() => {
            if (wallet?.id === 'argentX') {
              if (window.starknet != null) {
                window.starknet.request({
                  type: 'wallet_watchAsset',
                  params: {
                    type: 'ERC20',
                    options: {
                      address: ContractAddress,
                      name: 'Game of Life Token',
                      symbol: 'GOL',
                      decimals: '0',
                      network: 'goerli-alpha',
                      image: golTokenIcon,
                    },
                  },
                })
              }
            }

            if (wallet?.id === 'braavos') {
              if (window.starknet_braavos != null) {
                window.starknet_braavos.request({
                  type: 'wallet_watchAsset',
                  params: {
                    type: 'ERC20',
                    options: {
                      address: ContractAddress,
                      name: 'Game of Life Token',
                      symbol: 'GOL',
                      decimals: '0',
                      network: 'goerli-alpha',
                      image: golTokenIcon,
                    },
                  },
                })
              }
            }
          }}
        >
          <HiOutlinePlusCircle size={24} />
          Add GOL token to wallet
        </DropdownMenu.Item>
        <DropdownMenu.Item
          onClick={(e) => {
            e.preventDefault()
            copyToClipboard(account)
          }}
        >
          <HiOutlineClipboardCopy size={24} />
          {success ? 'Copied' : ' Copy Address'}
        </DropdownMenu.Item>
        <DropdownMenu.Item onClick={() => window.open(`https://voyager.online/contract/${account}`, '_blank')}>
          <HiOutlineDocumentSearch size={24} />
          View on Explorer
        </DropdownMenu.Item>
        <DropdownMenu.Item
          onClick={() => {
            console.info('disconnect', disconnect())
          }}
        >
          <HiOutlineLogout size={24} />
          Disconnect
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}

export default UserDropdownMenu
