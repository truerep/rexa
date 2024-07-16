import React from 'react'
import Head from 'next/head'

import { useAos } from '@/hooks';

import { NewHome } from '@/components'

const homePage = () => {
  useAos({
    offset: 200
  });

  return (
    <>
      <Head>
        <title>Resume Builder | AICVPro - Powered by AI</title>
      </Head>
      <NewHome />
    </>
  )
}

export default homePage