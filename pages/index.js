import { Features, NewHome } from '@/components'
import { useAos } from '@/hooks';
import Head from 'next/head'
import React from 'react'

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
      <Features />
    </>
  )
}

export default homePage