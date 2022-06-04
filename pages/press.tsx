import Head from "next/head";
import SiteCalendar from "../components/Calendar";
import SiteHeader from "../components/Header";
import SiteFooter from "../components/Footer";

export default function Outreach() {
  return(
    <div>
      <div className="w-full bottom-2 flex flex-col justify-center items-center">
        <div className="lg:text-center py-6">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Press Kit PDF
          </p>
          
        </div>
      </div>
    </div>
  )
}