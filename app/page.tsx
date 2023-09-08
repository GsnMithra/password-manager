"use client"

import { useEffect, useState } from 'react'
import stylesPage from './page.module.css'
import { Raleway } from 'next/font/google'
import Link from 'next/link'
const merri = Raleway ({
  weight: ['600', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

export default function Home () {
  const [loadedPage, setLoadedPage] = useState (false)
  useEffect (() => {
    setLoadedPage (true)
  }, [])

  return (
    <main className={stylesPage.main}>
      <div className={stylesPage.container}>
        <div className={stylesPage.headingText}>
          <h1 className={merri.className}>Password Manager</h1>
        </div>
        <div className={stylesPage.operations}>
          <Link href='/signup'>
            <div className={stylesPage.button}>
              <span className={merri.className}>Sign Up</span>
            </div>
          </Link>
          <Link href='/login'>
            <div className={stylesPage.button}>
              <span className={merri.className}>Log In</span>
            </div>
          </Link>
        </div>
      </div>
    </main>
  )
}
