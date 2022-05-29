import SiteHeader from "../components/Header";
import SiteFooter from "../components/Footer";
import SiteCalendar from "../components/Calendar";
import Head from "next/head";


export default function Calendar(args: { gKey: any; }){
  return(
    <div>
      <Head>
        <title>Project Y - Calendar</title>
        <meta name="description" content="Project Y Event Calendar" />
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
      <div className="w-full flex justify-center items-center">
        <div className="w-[60%] object-center"><SiteCalendar gKey={args.gKey}/></div>
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