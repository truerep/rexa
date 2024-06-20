import { NewHome } from '@/components'
import Head from 'next/head'
import React from 'react'

const homePage = () => {
  return (
    <>
        <Head>
					<title>Resume Builder | Powered By AI</title>
        </Head>
				<NewHome />
    </>
  )
}

export default homePage