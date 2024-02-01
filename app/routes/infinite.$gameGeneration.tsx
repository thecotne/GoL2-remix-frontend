import { V2_MetaFunction } from '@remix-run/react'
import type { RootLoaderData } from '~/hooks/useRootLoaderData'

export { default, loader } from './infinite'

export const meta: V2_MetaFunction = () => {
  return [
    {
      title: 'CREATE GAMES. GIVE LIFE. EVOLVE.',
      description:
        'GoL2 a fun and interactive way to introduce new users and developers to smart contracts written in Cairo. With Starknet. Game of Life...',
      'twitter:card': 'summary_large_image',
      'twitter:title': 'CREATE GAMES. GIVE LIFE. EVOLVE.',
      // 'og:image': `${rootData.env.BASE_URL!}/api/images/infinite/${params.gameGeneration!}.png`,
      'og:image:type': 'image/png',
      'og:image:width': String(514 * 4),
      'og:image:height': String(293 * 4),
    },
  ]
}
