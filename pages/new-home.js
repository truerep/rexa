import React from 'react'
import Head from 'next/head'

import { NewHome } from '@/components'

const homePage = () => {
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