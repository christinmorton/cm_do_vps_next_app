import React from 'react'

// Step 3: Budget and Timeline
const BudgetTimelineForm = () => {
  return (
<div id="step3" class="form-step" style="display:none;">
    <h2>Step 3: Budget and Timeline</h2>
    <form id="form-step3">
        <label for="budget">Budget Range:</label>
        <select id="budget" name="budget" required>
            <option value="under1000">Under $1,000</option>
            <option value="1000-5000">$1,000 - $5,000</option>
            <option value="5000-10000">$5,000 - $10,000</option>
            <option value="over10000">Over $10,000</option>
        </select>

        <label for="timeline">Desired Timeline:</label>
        <input type="date" id="timeline" name="timeline" required />

        <button type="button" onclick="goToStep(2)">Back</button>
        <button type="button" onclick="goToStep(4)">Next</button>
    </form>
</div>

  )
}

export default BudgetTimelineForm