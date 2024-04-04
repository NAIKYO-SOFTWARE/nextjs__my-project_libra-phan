'use client'

import "../../css/login.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';
import { Field, Form, Formik } from 'formik';
import ButtonClick from '@/app/component/ButtonClick';
import InputForm from "@/app/component/InputForm";
import "../../css/firtsView.css"

interface IFormInput {
  email:string;
  password:string;
}


function LoginForm() {
    const [isMobileOrTablet, setIsMoileOrTablet] = useState(false);
    


    const handleLogin = (value : IFormInput) => {
      
      
    }
    

    return(
        <>
            <h4 style={{color:"#a67be0"}} className=" text-center">Log in to HabitHUB</h4>
            <p className=" text-center">Welcome back! Sign in using your social account or email to continue us</p>
            <div className="socialIcons text-center">
                <FontAwesomeIcon icon={faGoogle} />
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faApple} />
            </div>
            <div className="decorativeLine">
            <div className="line"></div>
            <span className="orText">OR</span>
            <div className="line"></div>
         </div>

            {/* <div>
                <InputForm content='Email' />
            </div>
            <div style={{marginTop:'10px'}}>
                <InputForm content='Password' />
            </div> */}

    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={(values) => {
        console.log(values);
        handleLogin(values);
      }}
    >
      <Form>
        <div>
            <div className=" text-center">
                {/* <Field name="email" placeholder="Email" content="Email"  /> */}
                <InputForm />
            </div>
            <div className=" text-center mt-5">
                {/* <Field name="password" placeholder="Password" content="Password"  /> */}
                <InputForm />

            </div>
          {/* Thêm các trường field khác nếu cần */}
        </div>
        {isMobileOrTablet ? (
            <div style={{ position: 'fixed', bottom: '13%', left: '50%', transform: 'translateX(-50%)', zIndex: '999' }}>
                <ButtonClick />
            </div>
                ) 
            :
                (
            <div style={{margin:'50px 0 0 0'}}>
                <ButtonClick />
            </div>
                )
         }   
      </Form>
    </Formik>


           
        </>
    )
}

export default LoginForm;