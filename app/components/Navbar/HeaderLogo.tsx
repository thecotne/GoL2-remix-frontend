import { useLocation } from '@remix-run/react'
import styled from '@emotion/styled'
import PageLogoTitle from '~/components/PageLogoTitle'

const LogoWrapper = styled.div`
  position: relative;
  top: 3px;
`

export default function HeaderLogo() {
  const loc = useLocation()

  return (
    <LogoWrapper>
      {loc.pathname.startsWith('/infinite') ? (
        <PageLogoTitle variant="infinite" text="Infinite" />
      ) : loc.pathname.startsWith('/creator') ? (
        <PageLogoTitle variant="creator" text="Creator" />
      ) : loc.pathname.startsWith('/snapshots') ? (
        <PageLogoTitle variant="snapshots" text="Snapshots" />
      ) : loc.pathname.startsWith('/howitworks') ? (
        <PageLogoTitle variant="howitworks" text="How it works" />
      ) : loc.pathname.startsWith('/about') ? (
        <PageLogoTitle variant="about" text="About" />
      ) : (
        <PageLogoTitle variant="default" />
      )}
    </LogoWrapper>
  )
}
