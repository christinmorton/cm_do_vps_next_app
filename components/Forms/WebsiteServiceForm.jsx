'use client'

import {useState} from 'react'

import ClientInformationForm from './ClientInformationForm'
import ProjectDetailsForm from './ProjectDetailsForm'
import BudgetTimelineForm from './BudgetTimelineForm'
import ReviewPaymentForm from './ReviewPaymentForm'

const WebsiteServiceForm = () => {
  const [currentStep, setCurrentStep] = useState(1); 
  // const [nexStep, setNextStep] = useState(1);
  // const [prevStep, setPrevStep] = useState(0);

  const maxSteps = 4;

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [website, setWebsite] = useState('')
  const [projectType, setProjectType] = useState('')
  const [projectGoals, setProjectGoals] = useState('')
  const [features, setFeatures] = useState('')
  const [budget, setBudget] = useState('')
  const [payment, setPayment] = useState('')
  const [timelineStart, setTimelineStart] = useState('')
  const [timelineEnd, setTimelineEnd] = useState('')

  const goToNextStep = () => {
    if (currentStep < maxSteps) {
      setCurrentStep(currentStep + 1)
    }
  }
  const goToPreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleClientSubmit = (e, name, email, company, website) => {
    e.preventDefault()
    setName(name)
    setEmail(email)
    setCompany(company)
    setWebsite(website)
    goToNextStep(1)
  } 

  const handleProjectSubmit = (e, projectType, projectGoals, features) => {
    e.preventDefault()
    setProjectType(projectType)
    setProjectGoals(projectGoals)
    setFeatures(features)
    goToNextStep(2)
  }

  const handleBudgetSubmit = (e, budget, timelineStart, timelineEnd) => {
    e.preventDefault()
    setBudget(budget)
    setTimelineStart(timelineStart)
    setTimelineEnd(timelineEnd)
    goToNextStep(3)
  }

  const handlePaymentSubmit = (e, amountPaid) => {
    e.preventDefault()
    setPayment(amountPaid)
    alert(`Thank you, ${name}! Your are now moving to the checkout page to complete the process.`)
  }

  return (
    <div className='bg-blue-400 flex flex-col items-center'>
      {currentStep === 1 && <ClientInformationForm goToNextStep={goToNextStep} handleSubmit={handleClientSubmit} />}
      {currentStep === 2 && <ProjectDetailsForm goToNextStep={goToNextStep} goToPreviousStep={goToPreviousStep} handleSubmit={handleProjectSubmit} />}
      {currentStep === 3 && <BudgetTimelineForm goToNextStep={goToNextStep} goToPreviousStep={goToPreviousStep} handleSubmit={handleBudgetSubmit} />}
      {currentStep === 4 && <ReviewPaymentForm goToPreviousStep={goToPreviousStep} handleSubmit={handlePaymentSubmit} name={name} email={email} company={company} website={website} projectType={projectType} projectGoals={projectGoals} features={features} budget={budget} timelineStart={timelineStart} timelineEnd={timelineEnd} />} 
    </div>
  )
}

export default WebsiteServiceForm