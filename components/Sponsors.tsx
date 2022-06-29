import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'
import Image from "next/image";
import React from "react";


export default function Sponsors() {
  return (
    <div className="py-12 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <div className="lg:text-center">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Our Sponsors
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Businesses and groups that kindly provide us with the funds we need to compete and operate
          </p>
        </div>
      </div>
      <div className="w-full bottom-2 flex flex-col gap-4 justify-center items-center py-6">
        <div className="flex h-60 gap-4 w-[80%] flex-row">
          <div className="bg-blue-400 rounded-2xl basis-1/4 h-full object-cover justify-items-center align-middle flex">
            <img className='align-middle items-center object-contain' src="/N3B.png"/>
          </div>
          <div className="bg-blue-400 rounded-2xl basis-1/3 h-full object-cover justify-items-center align-middle flex">
            <img className='align-middle items-center object-contain' src="/merrick.png"/>
          </div>
          <div className="bg-blue-400 rounded-2xl basis-6/12 h-full justify-items-center align-middle flex">
            <img className='align-middle items-center object-contain' src="/EBT.png"/>
          </div>
        </div>
        <div className="flex h-60 gap-4 w-[80%] flex-row-reverse">
          <div className="bg-blue-400 rounded-2xl basis-1/4 h-full object-cover justify-items-center align-middle flex">
            <img className='align-middle items-center object-contain' src="/laps.png"/>
          </div>
          <div className="bg-blue-400 rounded-2xl basis-1/3 h-full object-cover justify-items-center align-middle flex">
            <img className='align-middle items-center object-contain' src="/asme.png"/>
          </div>
          <div className="bg-blue-400 rounded-2xl basis-6/12 h-full justify-items-center align-middle flex">
            <img className='align-middle items-center object-contain' src="/CENT.png"/>
          </div>
        </div>
        <div className="flex h-60 gap-4 w-[80%] flex-row-reverse">
        <div className="bg-blue-400 rounded-2xl basis-[44.44444444%] h-full object-cover justify-items-center align-middle flex">
            <img className='align-middle items-center object-contain' src="/DSS.png"/>
          </div>
          <div className="bg-blue-400 rounded-2xl basis-1/3 h-full object-cover justify-items-center align-middle flex">
            <img className='align-middle items-center object-contain' src="/HPM.png"/>
          </div>
          <div className="bg-blue-400 rounded-2xl basis-6/12 h-full justify-center align-middle flex">
            <img className='align-middle items-center object-contain' src="/LAPSF.png"/>
          </div>
        </div>
      </div>
    </div>
  )
}