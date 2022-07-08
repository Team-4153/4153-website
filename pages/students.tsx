import React from "react";
import {Container, SimpleGrid} from "@mantine/core";
import {Feature, FeatureProps} from "./about";
import {Browser, BuildingCommunity, Plane, School, Tool, Users} from "tabler-icons-react";
import Link from "next/link";

const benefits:FeatureProps[]=[
  {
    icon:School,
    title:"Learn",
    description:"A comprehensive set of skills that prepare you for the unique engineering challenges of today and tomorrow."
  },
  {
    icon:Users,
    title:"Belong",
    description:"To a global community of engineers, entrepreneurs, scientists, and leaders"
  },
  {
    icon:Plane,
    title:"Travel & Compete",
    description:"With a world-class team for numerous state and international titles while forming connections"
  }
]
const activities:FeatureProps[]=[
  {
    icon:BuildingCommunity,
    title:"Serve",
    description:"Team 4153 exists to serve its students and community. We not only teach but also raise awareness and expand access."
  },
  {
    icon:Browser,
    title:"Teach",
    description:"We serve as a vehicle to teach students technical skills like machining, engineering and design in an environment that also teaches life skills like leadership and teamwork"
  },
  {
    icon:Users,
    title:"Lead",
    description:"Team members are leaders in the community and schools. We work hard to lead not only our own teams but also in NM and at school."
  },
  {
    icon: Tool,
    title: "Build",
    description:"In the words of FIRST founder Dean Kamen, \"We Don't use kids to use robots but use robots to build kids\". FIRST builds skills that are always in demand making them next-gen problem solvers."
  }
]

export default function Students() {
  return(
    <div>
      <div className="divide-y-2">
        <div className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center pb-6">
              <h2 className="text-base text-primary-500 font-semibold tracking-wide uppercase">Question</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Why FIRST&reg;?
              </p>
            </div>
            <Container mt={30} mb={30} size="lg">
              <SimpleGrid cols={3} breakpoints={[{ maxWidth: 'sm', cols: 1 }]} spacing={50}>
                {benefits.map((item) => <Feature {...item} key={item.title} />)}
              </SimpleGrid>
            </Container>
          </div>
        </div>
        <div className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center pb-6">
              <h2 className="text-base text-primary-500 font-semibold tracking-wide uppercase">More than Robots</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                What We Do
              </p>
            </div>
            <div className="mt-10">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                {activities.map((program) => (
                  <div key={program.title} className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                        <program.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{program.title}</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">{program.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
        <div className="bg-transparent">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              <span className="block">Ready to Join?</span>
              <span className="block text-primary-400">Come and talk with us</span>
            </h2>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <Link
                  href="/calendar"
                >
                  <a className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-400 hover:bg-primary-500">
                    Find a Meeting
                  </a>
                </Link>
              </div>
              <div className="ml-3 inline-flex rounded-md shadow">
                <Link
                  href="/about"
                >
                  <a className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary-400 bg-white hover:bg-primary-50">
                    Learn more
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}