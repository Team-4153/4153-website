import SiteHeader from "../components/Header";
import SiteFooter from "../components/Footer";
import SiteCalendar from "../components/Calendar";


export default function Calendar(args: { gKey: any; }){
  return(
    <div>
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