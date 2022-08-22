import styled from '@emotion/styled'

const StyledContainer = styled.div`
  display: inline-flex;
  flex-direction: row;
  height: 20px;
  align-items: center;
  gap: 16px;
`
const StyledLogo = styled.a`
  max-width: 78px;
  svg {
    filter: grayscale(1);
  }
  &:hover {
    svg {
      filter: grayscale(0);
    }
  }
  &:active {
    svg {
      filter: grayscale(0.5);
    }
  }
`

const StarknetLogoLink = (props) => {
  return (
    <StyledContainer>
      <StyledLogo href="https://starkware.co/">
        <svg width={126.48} height={25} viewBox="0 0 490 106" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
          <path
            d="M100.096 53c0 26.51-21.511 48-48.048 48C25.513 101 4 79.51 4 53S25.513 5 52.048 5c26.537 0 48.048 21.49 48.048 48z"
            fill="#29296E"
          />
          <path
            d="M74.407 40.166l-1.222-3.771a2.464 2.464 0 00-1.625-1.6l-3.793-1.165c-.525-.16-.53-.9-.008-1.069l3.775-1.22a2.47 2.47 0 001.601-1.623l1.165-3.79c.16-.523.901-.529 1.07-.007l1.222 3.771a2.47 2.47 0 001.625 1.6l3.793 1.163c.525.162.53.9.008 1.07l-3.776 1.22a2.472 2.472 0 00-1.6 1.624l-1.165 3.788c-.16.525-.901.53-1.07.009z"
            fill="#FAFAFA"
          />
          <path
            d="M8.37 52.24c1.142-2.236 3.4-3.92 5.748-4.985a23.49 23.49 0 017.538-1.91c5.168-.466 10.203.398 14.79 1.89 2.362.703 4.476 1.68 6.66 2.667 1.061.51 2.06 1.089 3.087 1.647l2.838 1.643c3.116 1.908 6.137 3.598 8.975 4.91 2.845 1.302 5.416 2.183 7.84 2.632 2.424.455 4.887.45 7.917-.245 3.005-.68 6.387-2.144 9.922-4.022 3.556-1.88 7.203-4.185 11.363-6.438-.417 4.708-1.75 9.123-3.834 13.386-2.134 4.212-5.103 8.32-9.43 11.647-4.247 3.354-10.077 5.692-16.013 6.044-5.939.4-11.588-.906-16.394-2.873-4.825-1.994-8.994-4.615-12.69-7.509a70.672 70.672 0 01-2.32-1.89l-2.105-1.841c-1.418-1.109-2.791-2.434-4.195-3.533-2.8-2.337-5.57-4.68-8.606-6.71-1.531-1.032-3.11-1.989-4.902-2.836-.89-.41-1.834-.791-2.85-1.092a11.747 11.747 0 00-3.34-.583z"
            fill="#FF4F0A"
          />
          <path
            d="M8.37 52.24c.583-4.845 2.843-9.388 6.466-13.255 3.604-3.83 9.235-6.784 15.483-7.175a27.539 27.539 0 019.092.934 35.8 35.8 0 017.97 3.313c1.208.685 2.34 1.433 3.466 2.189l3.003 2.271 4.687 3.694c3.042 2.42 5.945 4.659 8.629 6.507 2.709 1.852 5.016 3.204 7.22 3.997 2.184.864 4.942 1.086 8.59.17 1.81-.417 3.699-1.178 5.714-2.003 2.003-.845 4.084-1.853 6.358-2.853-.273 2.436-.769 4.861-1.71 7.128-.903 2.298-2.094 4.547-3.758 6.643-.852 1.021-1.764 2.047-2.829 2.995a24.176 24.176 0 01-3.546 2.571c-2.598 1.504-5.68 2.603-8.842 2.994-3.162.397-6.336.199-9.226-.414-2.907-.595-5.554-1.555-7.985-2.664-4.845-2.25-8.898-5.08-12.48-8.076a77.894 77.894 0 01-5.085-4.644l-1.888-1.893a57.19 57.19 0 00-1.712-1.604c-2.293-2.026-4.422-3.574-6.766-4.54-2.327-1.01-5.306-1.426-8.96-.742-3.64.676-7.633 2.248-11.891 4.456zM27.572 77.22a2.597 2.597 0 01-5.195 0 2.597 2.597 0 015.195 0z"
            fill="#FAFAFA"
          />
          <path d="M27.572 77.22a2.597 2.597 0 01-5.195 0 2.597 2.597 0 015.195 0z" fill="#FAFAFA" />
          <path
            d="M171.73 54.31c-1.748-1.139-4.921-2.575-9.519-4.308-4.599-1.734-7.79-3.29-9.577-4.67-1.785-1.38-2.679-3.285-2.679-5.715 0-2.43.905-4.346 2.717-5.751 1.811-1.405 4.199-2.107 7.164-2.107 2.964 0 5.376.804 7.238 2.41 1.863 1.608 2.794 3.892 2.794 6.853h7.259c0-5.086-1.686-9.067-5.055-11.94-3.37-2.871-7.429-4.307-12.18-4.307-4.749 0-8.785 1.334-12.102 4.005-3.32 2.67-4.978 6.257-4.978 10.762 0 3.493.859 6.263 2.584 8.315.911 1.087 1.785 2.006 2.621 2.751.837.748 2.596 1.772 5.283 3.075 2.684 1.304 4.965 2.183 6.839 2.639 3.609 1.548 6.568 2.81 8.456 4.176 1.886 1.367 2.831 3.246 2.831 5.638 0 2.391-.982 4.322-2.946 5.79-1.962 1.467-4.672 2.201-8.131 2.201-3.458 0-6.277-.866-8.456-2.6-2.179-1.734-3.268-4.207-3.268-7.423h-7.22c0 5.392 1.855 9.594 5.567 12.605 3.711 3.012 8.189 4.518 13.434 4.518 5.243 0 9.601-1.38 13.072-4.139 3.471-2.758 5.187-6.516 5.15-11.275-.038-4.758-2.337-8.593-6.898-11.503zM219.771 25.114h-35.657v6.81h14.271v47.133h7.041V31.923h14.345v-6.809zM237.684 25.114l-19.741 53.943h7.575s1.924-6.002 3.485-8.456c6.782-10.655 18.057-11.954 21.681-11.856l7.226 20.312h7.576l-19.778-53.943h-8.024zm-4.303 31.846l8.334-23.42 6.53 18.351c-3.724.276-9.152 1.405-14.864 5.069zM358.903 25.114h-8.829l-22.563 24.45v-24.45h-7.168v53.943h7.168v-25.88l23.356 25.88h8.79L335.02 51.41l23.883-26.295zM394.9 58.405l-20.831-33.29h-8.012v53.942h10.546V45.691l20.757 33.366h8.011V25.114H394.9v33.291zM423.34 56.788h19.05v-9.93h-19.05v-11.55h20.969V25.114h-31.623v53.943h32V68.901H423.34V56.788zM449.257 25.114V35.31h12.942v43.747h10.612V35.31h13.018V25.114h-36.572zM300.289 59.638a31.02 31.02 0 00-3.372-2.653c3.552-.514 7.38-2.415 9.844-5.502 2.247-2.813 3.228-6.094 3.228-9.63 0-4.64-1.678-8.589-5.033-11.849-3.355-3.26-7.389-4.89-12.102-4.89H272.8v53.943h7.299V58.714c3.992.091 9.927 1.077 15.383 6.014 5.232 4.74 8.847 10.63 10.708 14.326h7.753c-1.605-4.082-6.205-12.672-13.654-19.416zm-7.435-27.791c2.715 0 5.033.973 6.954 2.915 1.922 1.944 2.881 4.301 2.881 7.072 0 2.772-.93 5.177-2.881 7.129-3.478 3.48-11.517 2.787-19.493 2.823l-.216-.006V31.847h12.755z"
            fill="#FAFAF5"
          />
        </svg>
      </StyledLogo>
    </StyledContainer>
  )
}

export default StarknetLogoLink
