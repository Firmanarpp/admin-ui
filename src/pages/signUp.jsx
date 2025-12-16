import React from 'react'
import AuthLayout from "../components/Layouts/AuthLayout";
import FormSignup from "../components/Fragments/FormSignUp";


function SignUp({ onToggle }) {
  return (
    <AuthLayout>
        <FormSignup onToggle={onToggle} />
    </AuthLayout>
    )
}

export default SignUp