import SiteHeader from "../components/Header";
import SiteFooter from "../components/Footer";
import SiteCalendar from "../components/Calendar";
import Head from "next/head";
import {StatsGroup} from "./outreach";
import React from "react";


export default function Calendar(args: { gKey: any; }){
  return(
    <div className="bg-gradient-to-br min-h-screen from-white to-sky-50">
      <div className="sticky z-50 top-0">
        <SiteHeader title="Calendar" description="Team 4153's event calendar"/>
      </div>
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center pb-6">
            <h2 className="text-base text-sky-600 font-semibold tracking-wide uppercase">Events</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              What We Have Planned
            </p>
          </div>
          <div className="w-full flex justify-center items-center">
            <div className="w-[60%] object-center"><SiteCalendar gKey={args.gKey}/></div>
          </div>
        </div>
      </div>
      <SiteFooter/>
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