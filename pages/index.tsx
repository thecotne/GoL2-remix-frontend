import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import styles from '../styles/LandingScreen.module.css'
import { useRouter } from 'next/router'
import { AutomataGrid, conwaysGameOfLifePreset, generateSoup } from 'cellular-automata-react'
import { motion } from 'framer-motion'
import NavContainer from '../components/Layout/NavContainer'
const active = {
  hidden: {
    opacity: 0,
    transition: {
      ease: 'easeInOut',
    },
  },
  visible: {
    opacity: 0.4,
    transition: {
      ease: 'easeInOut',
    },
  },
}
const visible = {
  hide: {
    opacity: 0,
    transition: {
      ease: 'easeInOut',
    },
  },
  show: {
    opacity: 1,
    transition: {
      ease: 'easeInOut',
      duration: 6,
      delay: 0,
    },
  },
}

const LandingScreen = () => {
  const [gameActive, setGameActive] = useState(false)
  const [gameVisible, setGameVisible] = useState(false)
  const logoRef = useRef(null)
  const taglineRef = useRef(null)
  const taglineRef2 = useRef(null)
  const continueRef = useRef(null)
  const router = useRouter()
  useEffect(() => {
    window.onkeypress = function (e) {
      router.push('/menu')
    }

    setTimeout(() => {
      setGameActive(true)
    }, 1000)
  }, [router])
  useEffect(() => {
    if (gameActive) {
      setGameVisible(true)
    }
  }, [gameActive])
  useEffect(() => {
    const tl = gsap.timeline({
      delay: 0.8,
    })
    tl.fromTo(
      logoRef.current,
      {
        autoAlpha: 0,
        y: 30,
      },
      {
        duration: 0.75,
        autoAlpha: 1,
        y: 0,
        ease: 'expo.EaseInOut',
      }
    )
      .fromTo(
        taglineRef.current,
        {
          autoAlpha: 0,
          y: 10,
        },
        {
          duration: 0.75,
          autoAlpha: 1,
          y: 0,
          ease: 'expo.EaseInOut',
        },
        '>-0.65'
      )
      .fromTo(
        taglineRef2.current,
        {
          autoAlpha: 0,
          y: 10,
        },
        {
          duration: 0.75,
          autoAlpha: 1,
          y: 0,
          ease: 'expo.EaseInOut',
        },
        '>-0.65'
      )
      .fromTo(
        continueRef.current,
        {
          autoAlpha: 0,
          y: 10,
        },
        {
          duration: 0.75,
          autoAlpha: 1,
          y: 0,
          ease: 'expo.EaseInOut',
        },
        '>-0.65'
      )
  }, [])
  return (
    <NavContainer>
      <motion.div
        initial="hidden"
        variants={active}
        animate={gameActive ? 'visible' : 'hidden'}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          overflow: 'hidden',
        }}
      >
        <motion.div variants={visible} initial="hide" animate={gameVisible ? 'show' : 'hide'}>
          {/* <AutomataGrid
           className={"golGrid"}
           pixelStyles={{
             activeColor: "var( --color-neutral-neutral-100)",
             inactiveColor: "transparent",
             width: 100,
             height: 100,
             border: 1,
             borderColor: "black",
           }}
           pixelsActive={generateSoup(16)}
           iterationTimeInMs={1000}
           size={25}
           rules={conwaysGameOfLifePreset}
          /> */}
        </motion.div>
      </motion.div>

      <div
        className={styles.landingContainer}
        style={{
          position: 'relative',
          zIndex: 1,
          paddingTop: 150,
        }}
      >
        {/* <img
         ref={logoRef}
         src="./assets/logo/GoL2.svg"
         className={styles.logo}
        /> */}
        <svg
          ref={logoRef}
          className={styles.logo}
          width="582"
          viewBox="0 0 328 87"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.79809e-07 54.4183L0 19.2914C0 14.6988 2.44176 10.4553 6.40491 8.16042L18.0567 1.41339C21.31 -0.470434 25.3169 -0.471175 28.5708 1.41144L43.0459 9.78614L57.4255 1.42857C60.6852 -0.466004 64.7051 -0.467382 67.9661 1.42495L79.6054 8.17917C83.5627 10.4756 86 14.7158 86 19.3042V54.427C86 58.9978 83.5811 63.2246 79.6476 65.5274L46.0696 85.1842C44.2142 86.2704 41.9205 86.272 40.0636 85.1886L6.36831 65.5279C2.42579 63.2275 8.79809e-07 58.9957 8.79809e-07 54.4183Z"
            fill="#FF7979"
          />
          <path
            d="M9.16722 17.3764C5.99631 15.5388 5.99631 12.5594 9.16722 10.7217L19.3256 4.83462C21.4395 3.60953 24.8669 3.60953 26.9809 4.83462L42.8807 14.0491L23.1532 25.4818L9.16722 17.3764Z"
            fill="#E16969"
          />
          <path
            d="M23.1533 25.4816L42.8808 14.0489L62.6082 25.4816L44.7946 35.8051C43.7376 36.4177 42.0239 36.4177 40.967 35.8051L23.1533 25.4816Z"
            fill="#D76464"
          />
          <path
            d="M42.8804 14.0491L58.7802 4.83462C60.8941 3.60953 64.3215 3.60953 66.4355 4.83462L76.5938 10.7217C79.7648 12.5594 79.7648 15.5388 76.5938 17.3764L62.6078 25.4818L42.8804 14.0491Z"
            fill="#B95454"
          />
          <path
            d="M9.16722 63.1267C5.99631 61.289 5.99631 58.3096 9.16722 56.472L19.3256 50.5849C21.4395 49.3598 24.8669 49.3598 26.9809 50.5849L42.8807 59.7993L23.1532 71.232L9.16722 63.1267Z"
            fill="#F07171"
          />
          <path
            d="M23.1533 71.2321L42.8808 59.7994L62.6082 71.2321L44.7946 81.5556C43.7376 82.1682 42.0239 82.1682 40.967 81.5556L23.1533 71.2321Z"
            fill="#EB6E6E"
          />
          <path
            d="M42.8804 59.7993L58.7802 50.5849C60.8941 49.3598 64.3215 49.3598 66.4355 50.5849L76.5938 56.472C79.7648 58.3096 79.7648 61.289 76.5938 63.1267L62.6078 71.232L42.8804 59.7993Z"
            fill="#DC6666"
          />
          <path
            opacity="0.3"
            d="M45.4424 44.512C45.4424 43.2902 46.2994 41.8032 47.3565 41.1907L75.4477 24.9159C78.6182 23.079 81.1882 24.5605 81.1882 28.225L81.1882 52.9804C81.1882 55.4228 79.4758 58.3955 77.3626 59.6214L47.3572 77.0285C46.2998 77.6419 45.4424 77.1483 45.4424 75.9262L45.4424 44.512Z"
            fill="#FFADAD"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M225.095 4.68213V67.7761H269.946V40.0023H263.067V60.8974H231.974V4.68213H225.095ZM228.004 7.59113H229.065V7.59119H228.004V64.8671H228.004V7.59113ZM267.037 42.9114V42.9113H265.976V63.8064H229.065V63.8065H265.976V42.9114H267.037ZM289.026 63.8064V63.8065H325.088V63.8064H289.026ZM288.071 64.8671H288.071V48.3207C288.071 45.7112 288.493 43.8051 289.337 42.6024L289.344 42.5931L289.357 42.5733C290.208 41.31 291.724 40.3267 293.905 39.6233L318.618 31.4561L318.624 31.4539C318.654 31.4422 318.685 31.4303 318.714 31.4181C319.589 31.0626 320.3 30.5096 320.846 29.7591L320.871 29.7198C320.881 29.7058 320.89 29.6917 320.899 29.6775C321.429 28.8407 321.694 27.7718 321.694 26.471V16.8189C321.694 13.7266 320.863 11.6249 319.202 10.5137L319.179 10.4989C319.1 10.4467 319.019 10.3967 318.936 10.3489C318.937 10.3489 318.937 10.3489 318.937 10.3489C320.775 11.4096 321.694 13.5663 321.694 16.819V26.4711C321.694 27.8146 321.412 28.9106 320.846 29.7591C320.28 30.5369 319.538 31.1026 318.618 31.4562L293.905 39.6233C291.713 40.3304 290.193 41.3204 289.344 42.5932C288.496 43.7953 288.071 45.7045 288.071 48.3208V64.8671ZM290.087 8.6518V7.59119H311.406C311.62 7.59119 311.831 7.5935 312.039 7.59823C311.831 7.5935 311.62 7.59113 311.406 7.59113H290.086V8.6518H290.087ZM285.162 48.3207C285.162 45.5298 285.589 42.8908 286.945 40.9477C288.301 38.9341 290.504 37.6652 293.002 36.858L293.012 36.8547L317.627 28.72C317.985 28.5732 318.244 28.3722 318.454 28.0999C318.609 27.8456 318.785 27.3633 318.785 26.471V16.8189C318.785 14.0093 318.002 13.1682 317.483 12.8686L317.447 12.848L317.412 12.8263C316.2 12.0806 314.289 11.5608 311.406 11.5608H287.177V4.68213H311.406C315.303 4.68213 318.744 5.3964 321.389 7.17954C324.542 9.22542 325.664 12.836 325.664 16.8189V26.471C325.664 28.4614 325.239 30.4168 324.045 32.0033C323.074 33.3821 321.759 34.3974 320.209 35.0758L320.084 35.1302L295.276 43.3285C293.566 43.9437 292.821 44.5641 292.538 44.9498L292.51 44.9888L292.48 45.0268C292.335 45.2114 291.935 46.0584 291.935 48.3207V60.8974H327.997V67.7761H285.162V48.3207Z"
            fill="white"
          />
          <path
            d="M118.018 63.354L118.036 63.3682L118.054 63.3818C119.7 64.6163 121.872 65.4573 124.475 65.978C127.08 66.4989 130.367 66.7487 134.306 66.7487H155.414H156.868V65.2942V43.9748V42.5203H155.414H154.353H152.898V43.9748V62.779H134.306C130.792 62.779 127.906 62.5434 125.627 62.0909C123.337 61.6362 121.765 60.9829 120.778 60.2243C118.871 58.7052 117.73 55.9845 117.73 51.6116V21.9129C117.73 17.4165 118.793 14.6484 120.518 13.1455L120.528 13.1369L120.538 13.1281C121.387 12.3614 122.728 11.7002 124.696 11.2372C126.654 10.7764 129.141 10.5334 132.185 10.5334H150.535H151.989V9.07886V8.01819V6.56369H150.535H132.185C128.725 6.56369 125.777 6.833 123.368 7.39756C120.971 7.95922 119.001 8.8381 117.614 10.1391C114.919 12.6652 113.76 16.7309 113.76 21.9129V51.6116C113.76 54.1762 114.016 56.4368 114.556 58.3678L114.566 58.4019L114.577 58.4355C115.232 60.4021 116.388 62.0498 118.018 63.354ZM204.642 63.2665L204.649 63.2602L204.657 63.2539C207.159 61.0421 208.41 58.1595 208.41 54.7299V32.3519C208.41 28.925 207.161 26.0616 204.649 23.8972C202.042 21.5991 197.511 20.6566 191.556 20.6566C185.608 20.6566 181.088 21.5966 178.526 23.9085C176.069 26.0767 174.854 28.937 174.854 32.3519V54.7299C174.854 58.1477 176.07 61.0271 178.519 63.2425L178.526 63.249L178.533 63.2554C179.84 64.4062 181.629 65.1866 183.774 65.6857C185.927 66.1869 188.53 66.4252 191.556 66.4252C197.512 66.4252 202.038 65.5072 204.642 63.2665ZM204.742 54.7299C204.742 57.1514 203.881 59.0391 202.15 60.5197C200.5 61.8825 197.127 62.7576 191.556 62.7576C188.815 62.7576 186.572 62.5469 184.802 62.1484C183.028 61.7489 181.819 61.1807 181.051 60.5313C179.368 59.0549 178.522 57.1642 178.522 54.7299V32.3519C178.522 29.9141 179.37 28.0557 181.044 26.6329L181.052 26.6262L181.059 26.6193C181.827 25.9476 183.036 25.3618 184.811 24.9503C186.577 24.541 188.817 24.3241 191.556 24.3241C197.13 24.3241 200.497 25.2263 202.142 26.6309L202.15 26.6377L202.158 26.6443C203.879 28.0715 204.742 29.9272 204.742 32.3519V54.7299Z"
            fill="#FF7979"
            stroke="#FF7979"
            strokeWidth="2.909"
          />
        </svg>

        <div ref={taglineRef} className={styles.tagline}>
          <div
            style={{
              position: 'absolute',
              right: -120,
              top: -190,
              fontSize: 12,
              backgroundColor: '#ff7979',
              color: '#1d202c',
              padding: 4,
              borderRadius: 3,
              letterSpacing: 0.3,
            }}
          >
            Alpha
          </div>
          <span>Create games </span>
          <span>Give life </span>
          <span className={styles.last}>Evolve</span>
        </div>
        <div
          ref={taglineRef2}
          style={{
            marginBottom: 105,
            fontSize: 18,
          }}
        >
          <span> A layer 2 gaming experience.</span>
        </div>

        <Link
          href="/menu"
          style={{
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          <a
            style={{
              cursor: 'pointer',
            }}
            ref={continueRef}
            className={styles.message}
          >
            Press any key to continue
          </a>
        </Link>
        {/* <button onClick={() => handleRead()}>Read</button>
        <button onClick={() => handleWrite()}>Write</button> */}
      </div>
    </NavContainer>
  )
}

export default LandingScreen
