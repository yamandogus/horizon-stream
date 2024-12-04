import React from 'react'
import AuthForm from '@/components/auth/AuthForm'
import Slider from '@/components/auth/Slider'

const LoginPage = () => {
    return (
        <div className='bg-custom-purple h-screen'>
            <div className="container bg-red-500 mx-auto flex flex-row">
                <div className="basis-3/6">
                    <div className="container   mx-auto h-[70vh]">
                        <div className="h-full flex items-center justify-center">
                            <div className="w-[50%] h-[100%]">
                                <Slider />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="basis-3/6">
                <div className="container mx-auto h-[70vh]">
                        <div className="h-full flex items-center justify-center">
                            <div className="w-[50%] h-[100%]">
                            <AuthForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default LoginPage