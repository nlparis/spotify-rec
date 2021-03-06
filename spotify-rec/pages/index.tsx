import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {loginUrl, getTokenFromUrl } from './api/spotify'
import SpotifyWebApi from 'spotify-web-api-js'
import { useEffect, useState } from 'react'

const spotify = new SpotifyWebApi()

const Home: NextPage = () => {
  const [spotifyToken, setSpotifyToken] = useState("")
    
  useEffect(() => {
    console.log('token: ', getTokenFromUrl())
    const _token = getTokenFromUrl().access_token
    window.location.hash = "";
    console.log(_token)

    if (_token){
      setSpotifyToken(_token)
      spotify.setAccessToken(_token)
      spotify.getMe().then((user) => {
        console.log("username: ", user)
      })
    }
  })
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <a href={loginUrl} id="signIn">Sign in with Spotify!</a>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
