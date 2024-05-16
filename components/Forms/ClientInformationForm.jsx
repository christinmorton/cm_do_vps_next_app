'use client'

import { useState } from "react"

//Step 1: Basic Information 
const ClientInformationForm = ({goToNextStep, handleSubmit}) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [company, setCompany] = useState('')
    const [website, setWebsite] = useState('')

    // const [step, setStep] = useState(1)

    const goToStep = (step) => {
        console.log('Step:', step)
        console.log('Name:', name)
        console.log('Email:', email)
        console.log('Company:', company)
        console.log('Website:', website)
        goToNextStep(1)
    }

  return (
    <div>
        <form id="form-step1" onSubmit={(e) => {
            e.preventDefault()
        
            handleSubmit(e, name, email, company, website)
        }}
        className="flex flex-col items-center justify-around"
        >
            <label htmlFor="name">Your Name:</label>
            <input type="text" id="name" name="name" required value={name} onChange={(e) => setName(e.target.value)} />

            <label htmlFor="email">Your Email:</label>
            <input type="email" id="email" name="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
            
            <label htmlFor="company">Company Name:</label>
            <input type="text" id="company" name="company" required value={company} onChange={(e) => setCompany(e.target.value)} />
            
            <label htmlFor="website">Current Website, if any:</label>
            <input type="url" id="website" name="website" value={website} onChange={(e) => setWebsite(e.target.value)} />
            
            <div className="flex flex-row items-center justify-between">
                <button type="button" onClick={goToStep}>Next</button>
                <button type="submit">Save</button>
            </div>
        </form>
    </div>
  )
}

export default ClientInformationForm