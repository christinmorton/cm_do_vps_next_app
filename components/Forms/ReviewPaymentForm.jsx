'use client'

import { useState } from "react"

// Step 4: Review and Payment
const ReviewPaymentForm = ({ handleSubmit, goToPreviousStep, name, email, company, website, projectType, projectGoals, features, budget, timeline }) => {
    const [payment, setPayment] = useState(500)

    const paymentValidation = (payment) => {
        if (payment < 500) {
            alert('Payment must be at least $500')
            return false
        } else {
            return true
        }
    }

  return (
<div id="step4" class="form-step">
    <h2>Step 4: Review and Payment</h2>
    <form id="form-step4" onsubmit="processPayment(event)" onSubmit={(e) => {
        e.preventDefault()

        handleSubmit(e, payment);
    }}>
        <div id="reviewSection">
            {/* Summary of all the collected information  */}
            <p><strong>Name:</strong> <span id="reviewName">{name}</span></p>
            <p><strong>Email:</strong> <span id="reviewEmail">{email}</span></p>
            <p><strong>Company:</strong> <span id="reviewCompany">{company}</span></p>
            <p><strong>Current Website:</strong> <span id="reviewWebsite">{website}</span></p>
            <p><strong>Project Type:</strong> <span id="reviewProjectType">{projectType}</span></p>
            <p><strong>Project Goals:</strong> <span id="reviewProjectGoals">{projectGoals}</span></p>
            
            <p><strong>Desired Features:</strong> <span id="reviewFeatures">{
                features
                // features.map((feature, index) => {
                //     if (index === features.length - 1) {
                //         return feature
                //     } else {
                //         return `${feature}, `
                //     }
                // })
            }</span></p>
            
            <p><strong>Budget:</strong> <span id="reviewBudget">{budget}</span></p>
            <p><strong>Timeline:</strong> <span id="reviewTimeline">{timeline}</span></p>
        </div>

        <label for="payment">Non-Refundable Down Payment (e.g., $500):</label>
        <input type="number" id="payment" name="payment" value="500" readonly />

        <div className="flex flex-row items-center justify-between">
            <button type="button" onClick={goToPreviousStep}>Back</button>
            <button type="submit">Pay & Confirm</button>
        </div>
    </form>
</div>

  )
}

export default ReviewPaymentForm