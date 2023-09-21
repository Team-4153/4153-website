/* This example requires Tailwind CSS v2.0+ */
import React, {Fragment, useState} from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  BookmarkAltIcon,
  CursorClickIcon,
  MenuIcon,
  XIcon,
  SpeakerphoneIcon, UserGroupIcon, NewspaperIcon, QuestionMarkCircleIcon
} from '@heroicons/react/outline'
import {School, Users, AlertTriangle, Code} from "tabler-icons-react";
import { ChevronDownIcon } from '@heroicons/react/solid'
import Link from "next/link";
import Image from "next/image";
import GithubCorner from "react-github-corner";
import Head from "next/head";


const solutions = [
  {
    name: 'Team',
    description: "Read about our team and program",
    href: '/about',
    icon: UserGroupIcon
  },
  {
    name: 'Past Robots',
    description: 'See our previous and current robots',
    href: '/robots',
    icon: CursorClickIcon,
  },
  // {
  //   name: 'Outreach Programs',
  //   description: "Learn about what we're doing to expand STEM in new Mexico",
  //   href: '/outreach',
  //   icon: SpeakerphoneIcon,
  // },
]
const resources = [
  // {
  //   name: 'Guides & Reference',
  //   description: "Need something? It\'s probably here",
  //   href: 'https://docs.mintyh.me',
  //   icon: BookmarkAltIcon,
  // },
  {
    name: 'Safety',
    description: 'Machine Training Videos, Forms and Waivers',
    href: '/safety',
    icon: AlertTriangle
  },
  {
    name: 'Code',
    description: 'Access code for our robots',
    href: '/code',
    icon: Code
  },
  { name: 'Press Kit',
    description: 'Want to write about us, click here',
    href: '/press', 
    icon: NewspaperIcon
  },
  {
    name:"FAQs",
    description: "Questions about our team, FRC and FIRST",
    href: "/faq",
    icon: QuestionMarkCircleIcon
  },
  {
    name: "For Students",
    description: "Information for students",
    href:'/students',
    icon:School
  },
  // {
  //   name:"For Parents",
  //   description: "Information for parents",
  //   href:'/not-ready',
  //   icon:Users
  // }
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export interface IHeaderProps {
  title:string,
  description:string
}


export default function SiteHeader(props:IHeaderProps) {
  const [bannerVis, setBannerVis] = useState(new Date(2023, 1, 7, 17, 0, 0).getTime() > new Date().getTime());
  // @ts-ignore
  return (
    <div className="">
      <Head>
        <title>Project Y - {props.title}</title>
        <meta name="description" content={props.description} />
        <link rel="icon" href="/favicon.png" />
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
      <Popover className="shadow-md relative bg-opacity-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start y-0 lg:w-0 lg:flex-1">
              <Link href="/">
                <div>
                  <a href="">
                    <Image src="/favicon.png" alt="team logo" height={64} width={64}/>
                  </a>
                </div>
              </Link>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <Popover.Button className="bg-transparent rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-400">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Group as="nav" className="hidden md:flex space-x-10">
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-gray-900' : 'text-gray-500',
                        'group bg-transparent rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-400'
                      )}
                    >
                      <span>About</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? 'text-gray-600' : 'text-gray-400',
                          'ml-2 h-5 w-5 group-hover:text-gray-500'
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>
                
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                          <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                            {solutions.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                              >
                                <item.icon className="flex-shrink-0 h-6 w-6 text-primary-400" aria-hidden="true" />
                                <div className="ml-4">
                                  <p className="text-base font-medium text-gray-900">{item.name}</p>
                                  <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                </div>
                              </a>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
              <Link href="/calendar"><a className="text-base font-medium text-gray-500 hover:text-gray-900">Calendar</a></Link>              
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-gray-900' : 'text-gray-500',
                        'group bg-transparent rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-400'
                      )}
                    >
                      <span>Resources</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? 'text-gray-600' : 'text-gray-400',
                          'ml-2 h-5 w-5 group-hover:text-gray-500'
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>
                
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                          <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                            {resources.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                              >
                                <item.icon className="flex-shrink-0 h-6 w-6 text-primary-400" aria-hidden="true" />
                                <div className="ml-4">
                                  <p className="text-base font-medium text-gray-900">{item.name}</p>
                                  <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                </div>
                              </a>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
              <Link href="https://www.firstinspires.org/robotics/frc"><a className="text-base font-medium text-gray-500 hover:text-gray-900" target="_blank">FIRST Website</a></Link>
            </Popover.Group>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            </div>
          </div>
        </div>
    /*
        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div>
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/workflow-mark-sky-400.svg"
                      alt="Workflow"
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-400">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    {solutions.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                      >
                        <item.icon className="flex-shrink-0 h-6 w-6 text-primary-400" aria-hidden="true" />
                        <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
              <div className="py-6 px-5 space-y-6">
                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                  <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                    Pricing
                  </a>
              
                  <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                    Docs
                  </a>
                  {resources.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div>
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary-400 hover:bg-indigo-700"
                  >
                    Sign up
                  </a>
                  <p className="mt-6 text-center text-base font-medium text-gray-500">
                    Existing customer?{' '}
                    <a href="#" className="text-primary-400 hover:text-primary-500">
                      Sign in
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
        <GithubCorner
          bannerColor="12233f"
          octoColor="fff"
          size="120"
          href="https://github.com/Team-4153"
          target="_blank"
        />*/
      </Popover>
      {bannerVis ?
        <div className="bg-gradient-to-r from-cyan-500 to-primary-500 relative">
          <div className="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-between">
              <div className="flex w-0 flex-1 items-center">
        <span className="flex rounded-lg bg-indigo-800 p-2">
          <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
               strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46"/>
          </svg>
        </span>
                <p className="ml-3 truncate font-medium text-white">
                  <span className="hidden md:inline">Get Ready for Kickoff! Kickoff for the 22-23 season is around the corner at 10:00 AM MST on Jan. 7, 2023</span>
                </p>
              </div>
              <div className="order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
                <Link href={"https://www.firstinspires.org/robotics/frc/game-and-season"}>
                  <a target="_blank"
                     className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-indigo-600 shadow-sm hover:bg-indigo-50">Learn
                    more</a>
                </Link>
              </div>
              <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
                <button type="button"
                        className="-mr-1 flex rounded-md p-2 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2" onClick={() => setBannerVis(false)}>
                  <span className="sr-only">Dismiss</span>
                  <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                       strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>:null
      }
    </div>
  )
}
