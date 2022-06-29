import React from 'react';
import Link from "next/link";;


export default function SiteFooter() {
  return (
   <footer className="w-full max-w-container mx-auto border-t border-gray-400 py-10 text-center text-sm text-gray-500 sm:flex sm:items-center sm:justify-center">
     <p>
       &copy;{new Date().getFullYear()} Minhtet Htoon, Project Y, and Contributors
     </p>
     <p className="mt-2 sm:mt-0 sm:ml-3 sm:border-l sm:border-gray-200 sm:pl-3">
       <Link className="hover:text-teal-600" target="_blank" rel="noopener noreferrer" href="https://choosealicense.com/licenses/mit/" >MIT License</Link>
     </p>
   </footer>
  );
}