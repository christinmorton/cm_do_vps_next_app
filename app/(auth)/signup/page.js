'use client'

import Link from 'next/link'

import React from 'react'

import AuthForm from '@/components/Forms/AuthForm'

const Signup = () => {

  const handleSubmit = async (e, firstName, lastName, email, password) => {
    e.preventDefault()

    console.log('firstName', firstName)
    console.log('lastName', lastName)
    console.log('email', email)
    console.log('password', password)
}

  return (
    <main>
        <h1>Signup</h1>

        <AuthForm handleSubmit={handleSubmit} firstNameFlag={true} lastNameFlag={true}  />

        <Link href='/login'>Already have an account yet? Login here!</Link>
    </main>
    
  )
}

export default Signup