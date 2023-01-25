
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Layout from './Layout';

import logo from '../images/logo.png'




export default function Login () {

    const [inputType, setInputType] = useState("password");
    const [isChecked, setChecked] = useState(true);

    const handleCheckboxClick = () => {
        setChecked(!isChecked);
      }
      

return (

<div className="signup-container min-h-screen flex items-center justify-center py-12 px-4 lg:px-8">
		<div className="max-w-md w-full space-y-8 border border-black">
			<div>
				<Image className="mx-auto h-12 w-auto" src={logo} alt="Workflow" />
				<h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
					Sign in
				</h2>
				<p className="mt-2 text-center text-sm light-text">
					Or
					<Link href="/signup" className="light-link font-medium"> sign up here</Link>
				</p>   
			</div>

			<form className="mt-8 space-y-6" action='/api/signup' method="post">
				<input type="hidden" name="remember" value="True" />
				<div className="py-2 rounded-md shadow-sm -space-y-px">
                
                <div className="group w-full mb-5">
                    <input required name="email" type="text" className="input light-text appearance-none rounded-none block w-full px-3 py-2 border border-gray-300 rounded-t-md" />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label htmlFor='email'>Email</label>
                </div>

                <div className="group w-full">
                  
                        <input required name="password" type={inputType} className="input light-text appearance-none rounded-none block w-full px-3 py-2 border border-gray-300 rounded-t-md" />
                      
                 
                    <span className="highlight">
                        <span 
                            className="custom-span flex justify-end"
                            onClick={() => setInputType(inputType === "password" ? "text" : "password")}>
                                {inputType === "password" ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}
                        </span>
                    </span>
                    <span className="bar"></span>

                  
                    <label htmlFor='password'>Password</label>
                 
                    
                </div> 
                
			
			</div>

			<div className="custom-link-container flex items-center justify-between">
				
                <div className="flex items-center">
                    <button type="button" onClick={handleCheckboxClick} >
                        <label htmlFor="remember_me" className="custom-checkbox-label custom-container pb-3">
                            <input type="checkbox" name="remember_me" checked={isChecked} defaultChecked/>
                            <div className="checkmark"></div>
                        </label>
                    </button>
                    <p className="pl-3 font-medium">Remember me?</p>
					{/* <input id="remember_me" name="remember_me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
					<label htmlFor="remember_me" className="relative pb-5 ml-2 block text-sm text-gray-900">
						Remember me
					</label> */}
				</div>

				<div className="text-sm">
					<Link href="/reset-password" className="light-link font-medium">
                    Forgot your password?
					</Link>
				</div>
			</div>

			<div>
            <button type="submit" className="light-submit-button mx-auto">
                    <div className="box">R</div>
                    <div className="box">E</div>
                    <div className="box">A</div>
                    <div className="box">D</div>
                    <div className="box">Y</div>
            </button>
				{/* <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                            
                        <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="True">
                            <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                        </svg>

                    </span>
                    Sign in
                </button> */}
            </div>
</form>
</div>
</div> 

)
}