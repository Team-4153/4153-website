import '../styles/globals.css'
import '../styles/index.css'
import type { AppProps } from 'next/app'
import SiteHeader from "../components/Header";
import SiteFooter from "../components/Footer";
import React from "react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className="bg-gradient-to-bl from-white divide-y divide-gray-400 min-h-screen to-primary-50">
      <div className="sticky z-50 top-0">
        <SiteHeader title='Home' description="FRC Team 4153 Project Y Home Page"/>
      </div>
      <Component {...pageProps} />
      <SiteFooter/>
    </main>
  )
}

export default MyApp
