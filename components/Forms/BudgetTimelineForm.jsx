'use client'

import { useState } from "react"

// Step 3: Budget and Timeline
const BudgetTimelineForm = ({goToNextStep, goToPreviousStep, handleSubmit}) => {
    const [budget, setBudget] = useState('')
    const [timeline, setTimeline] = useState('')

  return (
<div id="step3" class="form-step">
    <h2>Step 3: Budget and Timeline</h2>
    <form id="form-step3" onSubmit={(e) => {
        e.preventDefault()

        handleSubmit(e, budget, timeline);
        goToNextStep();
    }}>
        <label for="budget">Budget Range:</label>
        <select id="budget" name="budget" required>
            <option value="under $1000">Under $1,000</option>
            <option value="$1000 - $5000">$1,000 - $5,000</option>
            <option value="$5000 - $10,000">$5,000 - $10,000</option>
            <option value="over $10,000">Over $10,000</option>
        </select>

        <h2>Desired Timeline</h2>
        <label for="timeline">Start date:</label>
        <input type="date" id="timeline-start" name="timeline-start" required />

        <label for="timeline">End date:</label>
        <input type="date" id="timeline-end" name="timeline-end" required />

        <div className="flex flex-row items-center justify-around">
            <button type="button" onClick={goToPreviousStep}>Back</button>
            <button type="submit">Save</button>
            <button type="button" onClick={goToNextStep}>Next</button>
        </div>
    </form>
</div>

  )
}

export default BudgetTimelineForm