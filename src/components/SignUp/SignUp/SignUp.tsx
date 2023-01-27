import React from "react";
import {Form} from "../Form/Form";
import './SignUp.scss'
import cinema from '../../../img/cinema.jpg'

export const SignUp: React.FC = () => {
    return <>
        <div className='container'>
            <Form />
            <img src={cinema} alt='cinema'/>
        </div>
    </>
}