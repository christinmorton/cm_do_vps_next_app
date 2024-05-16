'use client'

import { useState } from "react"

const AuthForm = ({handleSubmit, firstNameFlag, lastNameFlag}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

  return (
    <form onSubmit={(e) => {
        e.preventDefault()
        if(firstNameFlag === true && lastNameFlag === true) {
            handleSubmit(e, firstName, lastName, email, password)
        } else {
            handleSubmit(e, email, password)
        }
    }}>
        {firstNameFlag && (
            <div>
                <label htmlFor="firstName">
                    <span>First Name:</span>
                    <input type="text" id="firstName" name="firstName" required value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </label>
            </div>
        )}
        
        {lastNameFlag && (
            <div>
                <label htmlFor="lastName">
                    <span>Last Name:</span>
                    <input type="text" id="lastName" name="lastName" required value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </label>
            </div>
        )}
        
        <div>
            <label htmlFor="email">
                <span>Email:</span>
                <input type="email" id="email" name="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
        </div>
        <div>
            <label htmlFor="password">
                <span>Password:</span>
                <input type="password" id="password" name="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
        </div>
        <div>
            <button type="submit">Submit</button>
        </div>
    </form>
  )
}

export default AuthForm