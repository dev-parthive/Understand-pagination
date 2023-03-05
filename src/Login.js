import React, { useContext, useState } from 'react'

const Login = () => {
    // for store userEmail for ResetPassword
    const handleSubmit = (event) =>{
        event.preventDefault()
        const email = event.target.email.value
        const password= event.target.password.value
        console.log(email, password)
        if(email || password){
            const user = {email, password}
            console.log(user)
            fetch('http://localhost:5000/login', {
                method: 'POST', 
                headers: {
                   "content-type": "application/json"
                },
                body: JSON.stringify(user)
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data)
                if(data?.status === "success"){
                    alert("User successfully login")
                    localStorage.setItem("token", data?.token)
                    alert("token set in localstorage")
                }else if(data?.status === "error"){
                    alert(`${data?.message}`)
                }
            })
            .catch(err => console.log(err))
        }

    }
    

    
    return (
       <div className='flex justify-center items-center pt-8 '>
        <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
        <div className='mb-8 text-center'>
            <h1 className='my-3 text-4xl font-bold'>Log in</h1>
            <p className='text-sm text-gray-400s'>Login in to access your account</p>

        </div>
        <form action=""
        noValidate=''
        className='space-y-6 ng-untouched ng-pritine ng-valid'
        onSubmit={handleSubmit}
        >
            <div className='space-y-4'>
                <div>
                    <label htmlFor='email'>Email address</label>
                    <input type="email" 
                    name='email'
                    id='email'
                    required
                    placeholder='Enter your Enail Here'
                    className='w-full px-3 py-2 border rounded-md border-gray-300 '
                    />
                </div>
               <div>
               <div className='flex justify-between '>
                    <label htmlFor="password">
                        Password
                    </label>
                </div>
                <input type="password" name="password" id="password"
                required 
                placeholder='********'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900'
                />
               </div>
            </div>
            <div>
                <button className='px-6 py-2 bg-orange-600 rounded-lg text-white'
                >Login</button>
            </div>
        </form>
        <div className='space-y-1'>
            

        </div>
        <div className='flex items-center pt-4 space-x-1'>
                <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                <p className='px-3 text-sm dark:bg-gray-400 '>
                    Login with social accounts
                </p>
                <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
        </div>
        </div>

       </div>
    );
};

export default Login;