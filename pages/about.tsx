import SiteHeader from "../components/Header";
import SiteFooter from "../components/Footer";

export default function About() {
  return (
    <div>
      <SiteHeader links={[{link:'/about',label:'About'}, {link:'/calendar',label:'events'}]}/>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores culpa deserunt eius laboriosam officiis? Facilis ipsam odit quibusdam voluptas. Alias animi, consequatur consequuntur ex fuga obcaecati odio ratione suscipit voluptas.</p>
      <SiteFooter/>
    </div>
  )
}