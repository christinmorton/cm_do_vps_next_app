'use client'

import React from 'react'

import {SendContactMessage} from '../../data/actions/generalActions'

const ContactForm = async () => {
    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = e.target
        const formData = new FormData(form)

        SendContactMessage({
          name: formData.get('name'), 
          email: formData.get('email'), 
          subject: formData.get('subject'),
          message: formData.get('message')
        })

        form.reset()
        alert('Thanks for your message! We will get back to you soon.')
    }
  return (
    <div className=' bg-blue-400'>
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit} className='flex flex-col items-center justify-start m-auto p-16'>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="subject">Subject:</label>
            <input type="subject" id="subject" name="subject" required />
            <label htmlFor="message">Message:</label>
            <textarea id="message" cols={30} rows={5} name="message" required />
            <button type="submit">Send</button>
        </form>
    </div>
  )


}

// action={SendContactMessage}

export default ContactForm