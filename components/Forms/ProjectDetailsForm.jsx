'use client'

import { useState } from "react"

// Step 2: Project Details 
const ProjectDetailsForm = ({goToNextStep, goToPreviousStep, handleSubmit}) => {
    const [projectType, setProjectType] = useState('')
    const [projectGoals, setProjectGoals] = useState('')
    const [features, setFeatures] = useState('')
    const [feature1, setFeature1] = useState('')
    const [feature2, setFeature2] = useState('')
    const [feature3, setFeature3] = useState('')
    const [feature4, setFeature4] = useState('')
    const [feature5, setFeature5] = useState('')
    const [feature6, setFeature6] = useState('')
    const [feature7, setFeature7] = useState('')

  return (
<div id="step2" class="form-step">
    <h2>Step 2: Project Details</h2>
    <form id="form-step2" onSubmit={(e) => {
        e.preventDefault()

        handleSubmit(e, projectType, projectGoals, features, feature1, feature2, feature3, feature4, feature5, feature6, feature7);
    }}>
        <label for="projectType">Type of Project:</label>
        <select id="projectType" name="projectType" required >
            <option value="newWebsite">New Website</option>
            <option value="websiteRedesign">Website Redesign</option>
            <option value="other">Other</option>
        </select>

        <label for="projectGoals">Project Goals:</label>
        <textarea id="projectGoals" name="projectGoals" required></textarea>

        <label for="features">Desired Features, select all that apply:</label>
        <div>
            <input type="checkbox" id="feature1" name="features1" value="landing" />
            <label for="feature1">Landing page</label>
        </div>
        <div>
            <input type="checkbox" id="feature2" name="features2" value="ecommerce" />
            <label for="feature1">E-commerce</label>
        </div>
        <div>
            <input type="checkbox" id="feature3" name="features3" value="blog" />
            <label for="feature2">Blog</label>
        </div>
        <div>
            <input type="checkbox" id="feature4" name="features4" value="portfolio" />
            <label for="feature3">Portfolio</label>
        </div>
        <div>
            <input type="checkbox" id="feature5" name="features5" value="contactForm" />
            <label for="feature4">Contact Form</label>
        </div>
        <div>
            <input type="checkbox" id="feature6" name="features6" value="emaillist" />
            <label for="feature5">Email List building</label>
        </div>

        <div className="flex flex-row items-center justify-around">
            <button type="button" onClick={goToPreviousStep}>Back</button>
            <button type="submit">Save</button>
            <button type="button" onClick={goToNextStep}>Next</button>
        </div>
    </form>
</div>

  )
}

export default ProjectDetailsForm