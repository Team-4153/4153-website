import React from 'react';
import Link from "next/link";
import {Atom, Heart} from "tabler-icons-react";


export default function SiteFooter() {
  return (
   <footer>
       <div className="w-full max-w-container mx-auto py-10 text-center text-sm text-gray-500 sm:flex sm:items-center sm:justify-center">
           <p>
               Copyright &copy; {new Date().getFullYear()} FIRST&reg; Team 4153 Project Y
           </p>
           <p className="mt-2 sm:mt-0 sm:ml-3 sm:border-l sm:border-gray-200 sm:pl-3">
               Designed with
           </p>
         <div className="w-0.5"/>
         <Atom size="15"/>
         <div className="w-0.5"/>
         <p>
           and built with
         </p>
         <div className="w-0.5"/>
         <Heart size="15"/>
         <div className="w-0.5"/>
         <p> by Minhtet Htoon</p>
           <p className="mt-2 sm:mt-0 sm:ml-3 sm:border-l sm:border-gray-200 sm:pl-3">
               Licensed Under the <Link rel="noopener noreferrer" href="https://choosealicense.com/licenses/mit/" ><a target="_blank" className="hover:text-primary inline underline">MIT License</a></Link>
           </p>
       </div>
   </footer>
  );
}