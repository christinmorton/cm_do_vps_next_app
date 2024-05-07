'use client';

import { supabase } from "@/utils/supabaseClient";
import { useState } from "react";

const LoginForm = () => {
    const [loading, setLoading] = useState(false);

    const handleLogin = async () => {
        setLoading(true);

        const randEmail = `${Math.random().toString(36).substring(7)}@example.com`
        const password = 'Password63484';

        const {data, error } = await supabase.auth.signUp({
            email: randEmail,
            password: 'Password63484'
        });

        if(error) {
            console.log('error', error);
        } else {
            console.log("User created and logged in: ", data);
        }

        setLoading(false);
    }
  return (
    <button>
        {loading ? 'Signing up...' : 'Sign up with random email and password'}
    </button>
  )
}

export default LoginForm