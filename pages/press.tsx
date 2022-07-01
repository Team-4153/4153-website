import Link from "next/link";

export default function Outreach() {
  return(
    <div>
      <div className="w-full bottom-2 flex flex-col justify-center items-center">
        <div className="lg:text-center py-6">
          <p className="text-primary uppercase font-light text-2xl">Want to run a story? </p>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Download the Project Y Press Kit Here
          </p>
            <br/>
            <Link  href="/presskit.pdf"><a className="hover:text-primary inline underline">Download as PDF</a></Link>
            <br/>
            <Link  href="/presskit.docx"><a className="hover:text-primary inline underline">Download as DOCX</a></Link>
            <br/>
            <Link  href="https://docs.google.com/document/d/1IPhR3Mdrkqa81vsTV8C_8-DC15Ycwz6ADGzQgF0J8WE/edit"><a className="hover:text-primary inline underline">View on Google Docs</a></Link>
        </div>
      </div>
    </div>
  )
}