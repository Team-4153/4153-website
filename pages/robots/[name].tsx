import {robots} from "../../components/robots";
import SiteHeader from "../../components/Header";


// @ts-ignore
export default function robotPage({ robot }){
  return(
    <div>
      <h1>{robot.name}</h1>
    </div>
  )
}
// @ts-ignore
export async function getStaticProps({ params }){
  const robot = robots.find(robot => {
    return robot.name === params.name
  })
  return{
    props:{
      robot
    }
  }
}
export async function getStaticPaths(){
  const paths = robots.map(robot => {
    return {params: {name: robot.name}}
  })
  return{
    paths,
    fallback:false
  }
}