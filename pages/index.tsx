import Head from 'next/head'
import '../styles/Home.module.css'
import SiteHeader from '../components/Header'
import SiteFooter from "../components/Footer";
import Landing from "../components/Landing";
import SiteCalendar from "../components/Calendar";
import Sponsors from "../components/Sponsors";
import React from "react";
import {StatsGroup} from "./outreach";

export default function Home(args: { gKey: any; }) {
console.log(args.gKey)
  return (
    <div className="bg-gradient-to-bl from-white to-blue-100 via-sky-50">
      <main className="divide-y divide-gray-400">
        <div className="sticky z-50 top-0">
          <SiteHeader title='Home' description="FRC Team 4153 Project Y Home Page"/>
        </div>
        <Landing/>
        <div className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center pb-6">
              <h2 className="text-base text-sky-600 font-semibold tracking-wide uppercase">Who we are</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Our Team by the Numbers
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
                accusamus quisquam.
              </p>
            </div>
            <StatsGroup
              data=
                {
                  [
                    {
                      stats:"10",
                      title:"Years of bringing STEM to NM",
                      description:""
                    },
                    {
                      stats:"11",
                      title:"Generations of Students",
                      description:""
                    },
                    {
                      stats:"500+",
                      title:"Lives Changed",
                      description:""
                    }
                  ]
                }
            />
          </div>
        </div>
        <div className="w-full">
          <Sponsors/>
        </div>
      </main>
      <div className="top-4 text-center">
        <SiteFooter/>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const gKey = process.env.KEY
  
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      gKey,
    },
  }
}

