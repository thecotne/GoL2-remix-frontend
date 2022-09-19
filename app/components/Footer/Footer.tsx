import styled from '@emotion/styled'
import Typography from '../Typography/Typography'
import StarknetLogoLink from './Links/StarknetLogo'
import YukiLogoLink from './Links/YukiLogo'

const StyledFooter = styled.footer`
  height: 72px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  position: relative;
  z-index: 10;
  background-color: ${(props) => props.theme.colors.headerBackground};
  background: linear-gradient(
    90deg,
    ${(props) => props.theme.colors.headerGradientStart} 1.01%,
    ${(props) => props.theme.colors.headerGradientEnd} 96.42%
  );
  border-top: 1px solid ${(props) => props.theme.colors.headerBorder};
`
const StyledFooterInner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 24px;
`
const StyledStarkware = styled.div`
  display: flex;
  flex: 1;
  margin-left: auto;
  color: ${(props) => props.theme.colors.text200};
`
const StyledYuki = styled.div`
  display: flex;
  margin-left: auto;

  color: ${(props) => props.theme.colors.text200};
  & a {
    color: white;
    text-decoration: none;
  }
`
const StyledCredits = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 32px;
  margin-left: auto;
`

const StyledLinks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`
const Link = styled.a`
  display: block;

  &:hover {
    opacity: 0.4;
  }
`

const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterInner>
        <StyledLinks>
          <Link rel="noreferrer" href="https://twitter.com/GoL2io" title="Go to GOL2 Twitter" target="_blank">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M22.46 6C21.69 6.35 20.86 6.58 20 6.69C20.88 6.16 21.56 5.32 21.88 4.31C21.05 4.81 20.13 5.16 19.16 5.36C18.37 4.5 17.26 4 16 4C13.65 4 11.73 5.92 11.73 8.29C11.73 8.63 11.77 8.96 11.84 9.27C8.28004 9.09 5.11004 7.38 3.00004 4.79C2.63004 5.42 2.42004 6.16 2.42004 6.94C2.42004 8.43 3.17004 9.75 4.33004 10.5C3.62004 10.5 2.96004 10.3 2.38004 10V10.03C2.38004 12.11 3.86004 13.85 5.82004 14.24C5.19077 14.4122 4.53013 14.4362 3.89004 14.31C4.16165 15.1625 4.69358 15.9084 5.41106 16.4429C6.12854 16.9775 6.99549 17.2737 7.89004 17.29C6.37367 18.4904 4.49404 19.1393 2.56004 19.13C2.22004 19.13 1.88004 19.11 1.54004 19.07C3.44004 20.29 5.70004 21 8.12004 21C16 21 20.33 14.46 20.33 8.79C20.33 8.6 20.33 8.42 20.32 8.23C21.16 7.63 21.88 6.87 22.46 6Z"
                fill="#57637B"
              />
            </svg>
          </Link>
        </StyledLinks>
        <StyledCredits>
          <StyledYuki>
            <Typography.XL1Semibold>
              Created by{' '}
              <a href="https://yuki.wtf" title="Go to Yūki">
                <YukiLogoLink />
              </a>
            </Typography.XL1Semibold>
          </StyledYuki>
          <StyledStarkware>
            Powered by <StarknetLogoLink />
          </StyledStarkware>
        </StyledCredits>
      </StyledFooterInner>
    </StyledFooter>
  )
}

export default Footer
