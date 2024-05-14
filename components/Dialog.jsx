'use client'

import { useSearchParams } from "next/navigation"
import { useRef, useEffect } from "react"

const Dialog = ({title, onClose, onOkay, children}) => {
    const [searchParams, setSearchParams] = useSearchParams()
    const dialogRef = useRef(new HTMLDialogElement)
    console.log(searchParams)
    const showDialog = searchParams.get('showWebsiteDialog')

    useEffect(() => {
        if(showDialog === 'y') {
            dialogRef.current?.showModal()
        } else {
            dialogRef.current?.close()
         }
    }, [showDialog])

    const closeDialog = () => { 
        dialogRef.current?.close()
        onClose()
    }

    const clickOkay = () => {
        onOkay()
        closeDialog()
    }

    const dialog = () => {
        if(showDialog === 'y') {
            return (
                <dialog ref={dialogRef}>
                    <h1>{title}</h1>
                    {children}
                    <button onClick={closeDialog}>Close</button>
                    <button onClick={clickOkay}>Okay</button>
                </dialog>
            )
        }
    }

  return dialog()
}

export default Dialog