
"use client";

import { useSearchParams, usePathname } from "next/navigation";
import Link from "next/link";

import ContactForm from "../Forms/ContactForm";

const ContactFormModal = ({children}) => {
  const searchParams = useSearchParams();
  const modal = searchParams.get('contact-form-modal');
  const pathname = usePathname();
  return (
    <>
      {modal && (
        <dialog
        className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center">
        <div className="m-auto p-8">
            <div className="bg-blue-400 flex flex-row items-center justify-between">
                <h3>Modal content</h3>
                
                <Link href={pathname}>
                  <button type="button" className="bg-red-500 text-white p-2 ">Close Modal</button>
                </Link>
            </div>
            <div className="flex flex-col items-center">
                <ContactForm />
            </div>
        </div>
    </dialog>
      )}
    </>
  )
}

export default ContactFormModal