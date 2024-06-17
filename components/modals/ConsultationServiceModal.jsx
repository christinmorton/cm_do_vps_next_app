
"use client";

import { useSearchParams, usePathname } from "next/navigation";
import Link from "next/link";

import WebsiteServiceForm from "../Forms/WebsiteServiceForm";

const ConsultationServiceModal = () => {
  const searchParams = useSearchParams();
  const modal = searchParams.get("consultation-service-modal");
  const pathname = usePathname();
  return (
    <>
      {modal && (
        <dialog
        className="fixed left-0 top-0 w-full h-full flex flex-col items-center bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center">
        <div className="bg-white m-auto p-8 ">
            <div className="min-w-[250px] flex flex-row items-center justify-between">
                <h3>Modal content</h3>
                <br/>
                <Link href={pathname}>
                  <button type="button" className="bg-red-500 text-white p-2 ">Close Modal</button>
                </Link>
            </div>
        </div>
        <div className="w-[300px] h-[400px] p-8">
          <h1>Consultation Form goes here...</h1>
        </div>
    </dialog>
      )}
    </>
  )
}

export default ConsultationServiceModal