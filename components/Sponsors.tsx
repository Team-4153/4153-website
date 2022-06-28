import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'
import Image from "next/image";
import React from "react";

const features = [
  {
    name: 'Company 1',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: GlobeAltIcon,
    logo:"https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640"
  },
  {
    name: 'Company 2',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: ScaleIcon,
    logo:"https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640"
  },
  {
    name: 'Org 1',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: LightningBoltIcon,
    logo:"https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640"
  },
  {
    name: 'Org 2',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: AnnotationIcon,
    logo:"https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640"
  },
]

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
          <img className="bg-blue-400 rounded-2xl basis-1/4 h-full object-cover" src="/placeholder.png"/>
          <img className="bg-blue-400 rounded-2xl basis-1/3 h-full object-cover" src="/placeholder.png"/>
          <img className="bg-blue-400 rounded-2xl basis-6/12 h-full object-cover" src="/placeholder.png"/>
        </div>
        <div className="flex h-60 gap-4 w-[80%] flex-row-reverse">
          <img className="bg-blue-400 rounded-2xl basis-1/4 h-full object-cover" src="/placeholder.png"/>
          <img className="bg-blue-400 rounded-2xl basis-1/3 h-full object-cover" src="/placeholder.png"/>
          <img className="bg-blue-400 rounded-2xl basis-6/12 h-full object-cover" src="/placeholder.png"/>
        </div>
        <div className="flex h-60 gap-4 w-[80%] flex-row-reverse">
          <img className="bg-blue-400 rounded-2xl basis-[44.444444444%] h-full object-cover" src="/placeholder.png"/>
          <img className="bg-blue-400 rounded-2xl basis-1/3 h-full object-cover" src="/placeholder.png"/>
          <img className="bg-blue-400 rounded-2xl basis-[22.222222222%] h-full object-cover" src="/placeholder.png"/>
        </div>
      </div>
    </div>
  )
}