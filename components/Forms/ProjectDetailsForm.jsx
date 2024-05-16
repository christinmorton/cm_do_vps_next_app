import React from 'react'

// Step 2: Project Details 
const ProjectDetailsForm = () => {
  return (
<div id="step2" class="form-step" style="display:none;">
    <h2>Step 2: Project Details</h2>
    <form id="form-step2">
        <label for="projectType">Type of Project:</label>
        <select id="projectType" name="projectType" required>
            <option value="newWebsite">New Website</option>
            <option value="websiteRedesign">Website Redesign</option>
            <option value="other">Other</option>
        </select>

        <label for="projectGoals">Project Goals:</label>
        <textarea id="projectGoals" name="projectGoals" required></textarea>

        <label for="features">Desired Features, select all that apply:</label>
        <div>
            <input type="checkbox" id="feature1" name="features" value="landing" />
            <label for="feature1">Landing page</label>
        </div>
        <div>
            <input type="checkbox" id="feature1" name="features" value="ecommerce" />
            <label for="feature1">E-commerce</label>
        </div>
        <div>
            <input type="checkbox" id="feature2" name="features" value="blog" />
            <label for="feature2">Blog</label>
        </div>
        <div>
            <input type="checkbox" id="feature3" name="features" value="portfolio" />
            <label for="feature3">Portfolio</label>
        </div>
        <div>
            <input type="checkbox" id="feature4" name="features" value="contactForm" />
            <label for="feature4">Contact Form</label>
        </div>
        <div>
            <input type="checkbox" id="feature5" name="features" value="emaillist" />
            <label for="feature5">Email List building</label>
        </div>

        <button type="button" onclick="goToStep(1)">Back</button>
        <button type="button" onclick="goToStep(3)">Next</button>
    </form>
</div>

  )
}

export default ProjectDetailsForm