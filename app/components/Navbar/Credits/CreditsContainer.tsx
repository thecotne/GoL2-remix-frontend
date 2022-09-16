import styled from '@emotion/styled'
import T from '../../Typography/Typography'
import GolToken from '~/components/Logos/Token/GolToken'
import { useUser } from '~/hooks/useUser'
import Button from '~/components/Button/Button'
import { useLocation } from 'react-router-dom'
import { HiPlus } from 'react-icons/hi'
import Highlight from '~/components/Highlight/Highlight'
import { useHelpMessage } from '~/hooks/HelpMessage'
import { useEffect } from 'react'

const StyledContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  gap: 32px;
  justify-content: center;
  align-items: center;
  position: relative;
`
const StyledIconWrapper = styled.div`
  color: ${(props) => props.theme.colors.infinitePrimary};
`
const StyledTextWrapper = styled.div`
  line-height: 12px;
  @media (max-width: 750px) {
    > h4 {
      line-height: 18px;
      text-align: left;
    }
  }
`
const StyledTokenIconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  gap: 8px;
  height: 27px;
  &:before {
    content: '';
    width: 1px;
    height: 36px;
    background-color: black;
    position: absolute;
    top: -5px;
    right: -16px;
  }
  color: ${(props) => props.theme.colors.creatorPrimary};
  @media (max-width: 750px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    > div > h4 {
      line-height: 0px;
      padding: 0;
      margin: 0;
      text-align: left;
      margin-top: 12px;
    }
  }
`
const StyledButtonWrapper = styled.div`
  margin-left: 16px;
`
const TestContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  gap: 32px;
  justify-content: center;
  align-items: center;
  position: relative;
`

export default function CreditsContainer() {
  const user = useUser()
  const balance = user?.balance ?? 0
  const location = useLocation()
  const [helpMessage, setHelpMessage] = useHelpMessage()

  useEffect(() => {
    let timer
    if (helpMessage === 'balanceMessage') {
      timer = setTimeout(() => {
        setHelpMessage(null)
      }, 3000)
      return () => {
        clearTimeout(timer)
      }
    }
  }, [helpMessage, setHelpMessage])

  return (
    <StyledContainer>
      <Highlight
        style={{ height: 38, lineHeight: 38, alignItems: 'center', paddingLeft: 24, paddingRight: 24 }}
        highlightRadius={100}
        title="Not enough Tokens"
        desc="1 GOL token = 1 Give Life to a cell "
        active={helpMessage === 'balanceMessage'}
        sideOffset={5}
        onClose={() => setHelpMessage(null)}
      >
        <TestContainer>
          <StyledTokenIconWrapper>
            <StyledTextWrapper>
              <T.H4SemiBold
                style={{
                  fontSize: 20,
                  fontWeight: 500,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundImage: 'linear-gradient(180deg, #79FFF7 0%, #79EDA1 100%)',
                }}
              >
                {' '}
                {balance}{' '}
              </T.H4SemiBold>
            </StyledTextWrapper>
            <StyledIconWrapper>
              <GolToken />
            </StyledIconWrapper>
          </StyledTokenIconWrapper>

          <StyledTextWrapper>
            <T.H4SemiBold color="#EBEBEB">Gol Tokens</T.H4SemiBold>
          </StyledTextWrapper>
        </TestContainer>
      </Highlight>
      {/^\/creator(\/|$)/.test(location.pathname) && (
        <StyledButtonWrapper>
          <Button to="/creator/create" icon={<HiPlus size={24} />} label="new game" secondary disabled={balance < 10} />
        </StyledButtonWrapper>
      )}
    </StyledContainer>
  )
}
