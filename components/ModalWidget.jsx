
"use client";

import { useSearchParams, usePathname } from "next/navigation";
import Link from "next/link";

const ModalWidget = ({children, queryParam}) => {
  const searchParams = useSearchParams();
  const modal = searchParams.get(queryParam);
  const pathname = usePathname();
  return (
    <>
      {modal && (
        <dialog
        className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center">
        <div className="m-auto p-8">
            <div className="flex flex-col items-center">
                <h3>Modal content</h3>
                <br/>
                <Link href={pathname}>
                  <button type="button" className="bg-red-500 text-white p-2 ">Close Modal</button>
                </Link>
            </div>
        </div>
    </dialog>
      )}
    </>
  )
}

export default ModalWidget