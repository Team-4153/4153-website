import SiteHeader from "../components/Header";
import SiteFooter from "../components/Footer";
import Head from "next/head";

export default function About() {
  return (
    <div>
      <Head>
        <title>Project Y - About</title>
        <meta name="description" content="FIRST Team 4153 Project Y" />
        <link rel="icon" href="/globe_notext.png" />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-YYB5P642PC}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YYB5P642PC', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
      </Head>
      <SiteHeader/>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores culpa deserunt eius laboriosam officiis? Facilis ipsam odit quibusdam voluptas. Alias animi, consequatur consequuntur ex fuga obcaecati odio ratione suscipit voluptas.</p>
      <SiteFooter/>
    </div>
  )
}