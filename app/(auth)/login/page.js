'use client'

import Link from 'next/link'
// import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

import AuthForm from '@/components/Forms/AuthForm'

const Login = () => {

    const handleSubmit = async (e, email, password) => {
        e.preventDefault()

        console.log('email', email)
        console.log('password', password)
    }

  return (
    <main>
        <h1>Login</h1>

        <AuthForm handleSubmit={handleSubmit} />

        <Link href='/signup'>Don't have an account yet? Signup here!</Link>
    </main>
  )
}

export default Login