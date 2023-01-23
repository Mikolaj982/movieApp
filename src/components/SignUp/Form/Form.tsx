import React, {useState} from "react";
export const Form: React.FC = () => {
    const [signUpData, setSignUpData] = useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
    })
    const onSubmit = (e: any) => {
        e.preventDefault()
        console.log(signUpData)
    }
    const handleSignUpData = (e: any) => {
        setSignUpData({
            ...signUpData,
            [e.target.name]: e.target.value,
        })
    }
    return <>
        <div className='formContainer'>
            <p>start for free</p>
            <h1>Create your account</h1>
            <div className='linkContainer'><p>Already a member?</p><a>Log in</a></div>
        <form onSubmit={onSubmit}>
            <div>
                <div>
                    <label htmlFor='firstName'>First Name</label>
                    <input
                        name='firstName'
                        id='firstName'
                        onChange={handleSignUpData}
                    />
                </div>
                <div>
                    <label htmlFor='lastName'>Last Name</label>
                    <input name='lastName'
                        id='lastName'
                        onChange={handleSignUpData}
                    />
                </div>
            </div>
            <label htmlFor='email'>Email</label>
            <input name='email'
                   id='email'
                   onChange={handleSignUpData}
            />
            <label htmlFor='password'>Password</label>
            <input name='password'
                   id='password'
                   onChange={handleSignUpData}
            />
            <button>Create account</button>
        </form>
        </div>
    </>
}