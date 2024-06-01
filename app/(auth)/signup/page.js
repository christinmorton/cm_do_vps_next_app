'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

import { createClient } from '@/utils/supabaseClient'
import AuthForm from '@/components/Forms/AuthForm'

// const supabaseOrgURL = 'https://hoaddcyjiooummmjhtza.supabase.co'

const Signup = () => {
  const router = useRouter()
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e, firstName, lastName, email, password) => {
    e.preventDefault()

    // console.log('firstName', firstName)
    // console.log('lastName', lastName)
    // console.log('email', email)
    // console.log('password', password)

    const supabase = createClient()
    const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
        emailRedirectTo: {
          location: `localhost:3000/api/auth/callback`
        }
    })

    if(error){
      setErrorMessage(error.message);
    }

    if(!error){
      router.push('/verify')
      console.log('data', data)
    }
}

  return (
    <main>
        <h1>Signup</h1>

        <AuthForm handleSubmit={handleSubmit} firstNameFlag={true} lastNameFlag={true}  />

        {errorMessage && (
            <div className='error-box'>
                <p className='error'>{errorMessage}</p>
            </div>
        )}

        <Link href='/login'>Already have an account yet? Login here!</Link>
    </main>
    
  )
}

export default Signup