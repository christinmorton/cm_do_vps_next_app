import React from 'react'

// Step 4: Review and Payment
const ReviewPaymentForm = () => {
  return (
<div id="step4" class="form-step" style="display:none;">
    <h2>Step 4: Review and Payment</h2>
    <form id="form-step4" onsubmit="processPayment(event)">
        <div id="reviewSection">
            {/* Summary of all the collected information  */}
            <p><strong>Name:</strong> <span id="reviewName"></span></p>
            <p><strong>Email:</strong> <span id="reviewEmail"></span></p>
            <p><strong>Company:</strong> <span id="reviewCompany"></span></p>
            <p><strong>Current Website:</strong> <span id="reviewWebsite"></span></p>
            <p><strong>Project Type:</strong> <span id="reviewProjectType"></span></p>
            <p><strong>Project Goals:</strong> <span id="reviewProjectGoals"></span></p>
            <p><strong>Desired Features:</strong> <span id="reviewFeatures"></span></p>
            <p><strong>Budget:</strong> <span id="reviewBudget"></span></p>
            <p><strong>Timeline:</strong> <span id="reviewTimeline"></span></p>
        </div>

        <label for="payment">Non-Refundable Down Payment (e.g., $500):</label>
        <input type="number" id="payment" name="payment" value="500" readonly />

        <button type="button" onclick="goToStep(3)">Back</button>
        <button type="submit">Pay & Confirm</button>
    </form>
</div>

  )
}

export default ReviewPaymentForm