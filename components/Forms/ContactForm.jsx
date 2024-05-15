'use client'

import React from 'react'



const ContactForm = async () => {
    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = e.target
        // const form = e.currentTarget
        const formData = new FormData(form)

        console.log('formData', formData)
        console.log('formData:name', formData.get('name'))
        console.log('formData:email', formData.get('email'))
        console.log('formData:message', formData.get('message'))
        // const response = await fetch('/api/contact', {
        // method: 'POST',
        // body: formData
        // })
        // if (response.ok) {
        // form.reset()
        alert('Thanks for your message! We will get back to you soon.')
        // }
    }
  return (
    <div className=' bg-blue-400'>
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit} className='flex flex-col items-center justify-start m-auto p-16'>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="message">Message:</label>
            <textarea id="message" cols={30} rows={5} name="message" required />
            <button type="submit">Send</button>
        </form>
    </div>
  )


}

export default ContactForm