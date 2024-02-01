FROM node:16.20.2-alpine as build

WORKDIR /build

COPY package.json /build/
COPY yarn.lock /build/
COPY patches /build/

RUN pnpm install

COPY app /build/app/
COPY esbuild-overrides.js /build/
COPY esbuild-plugin-babel.js /build/
COPY remix.config.js /build/
COPY remix.env.d.ts /build/
COPY starknet.env.d.ts /build/
COPY tsconfig.json /build/

RUN pnpm build

FROM node:16.20.2-alpine as app

WORKDIR /app

COPY package.json /app/
COPY yarn.lock /app/
COPY patches /app/

RUN pnpm install --prod

COPY --from=build /build/build /app/build/
COPY --from=build /build/public /app/public/

CMD ["./node_modules/.bin/remix-serve", "build"]
