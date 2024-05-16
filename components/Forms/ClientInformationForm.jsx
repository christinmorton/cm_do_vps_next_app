import React from 'react'

//Step 1: Basic Information 
const ClientInformationForm = () => {
  return (
    <div>
        <form id="form-step1">
            <label htmlFor="name">Your Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Your Email:</label>
            <input type="email" id="email" name="email" required />
            
            <label htmlFor="company">Company Name:</label>
            <input type="text" id="company" name="company" required />
            
            <label htmlFor="website">Current Website, if any:</label>
            <input type="url" id="website" name="website" />
            
            <button type="button" onclick="goToStep(2)">Next</button>
        </form>
    </div>
  )
}

export default ClientInformationForm