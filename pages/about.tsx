import SiteHeader from "../components/Header";
import SiteFooter from "../components/Footer";
import Head from "next/head";

export default function About() {
  return (
    <div>
      <div className="sticky z-50 top-0">
        <SiteHeader title="About" description="FRC Team 4153 Project Y"/>
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores culpa deserunt eius laboriosam officiis? Facilis ipsam odit quibusdam voluptas. Alias animi, consequatur consequuntur ex fuga obcaecati odio ratione suscipit voluptas.</p>
      <SiteFooter/>
    </div>
  )
}