import {Analytics} from "@vercel/analytics/react";

import { ChakraProvider } from '@chakra-ui/react'

import { SessionProvider } from "next-auth/react"

import theme from "@/theme";

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
      <SessionProvider
        session={pageProps.session}
      >
          <ChakraProvider
              theme={theme}
          >
              <Analytics />
              <Component {...pageProps} />
          </ChakraProvider>
      </SessionProvider>
  )
}
