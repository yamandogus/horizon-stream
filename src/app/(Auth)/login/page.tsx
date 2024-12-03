import React from 'react'
import AuthForm from '@/components/auth/AuthForm'
import Slider from '@/components/auth/Slider'

const LoginPage = () => {
    return (
        <div className='bg-custom-purple h-screen'>
            <div className="container mx-auto flex flex-row">
                <div className="basis-3/6">
                    <h1 className="text-4xl font-bold text-white">Giriş Yap</h1>
                    <Slider />
                </div>
                <div className="basis-3/6">
                    <AuthForm />
                </div>
            </div>
        </div>
    )
}

export default LoginPage