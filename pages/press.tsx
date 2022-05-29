import Head from "next/head";
import SiteCalendar from "../components/Calendar";
import SiteHeader from "../components/Header";
import SiteFooter from "../components/Footer";

export default function Outreach() {
  return(
    <div>
      <Head>
        <title>Project Y - Press Kit</title>
        <meta name="description" content="Project Y Press Kit" />
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
      <div className="sticky z-50 top-0">
        <SiteHeader/>
      </div>
      <div className="w-full bottom-2 flex flex-col justify-center items-center">
        <div className="lg:text-center py-6">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Press Kit PDF
          </p>
          
        </div>
      </div>
      <SiteFooter/>
    </div>
  )
}