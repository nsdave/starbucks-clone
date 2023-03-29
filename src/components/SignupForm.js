import React, { useState } from 'react'
import '../styles/SignupForm.css'
import { useForm, Controller } from 'react-hook-form'
import { TextField } from '@mui/material'

import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ReportProblemRoundedIcon from '@mui/icons-material/ReportProblemRounded';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import FormSubmit from './FormSubmit';



//CHECK IMPORT TO SEE IF THEIR STILL VALID

// import { auth } from "../firebase";
// import { useDispatch } from "react-redux";
// import { login } from "../features/userSlice";
// import { useHistory } from "react-router-dom";


const SignupForm = () => {
  const { handleSubmit, control, formState : { errors } } = useForm()
  const [passwordShown, setPasswordShown] = useState(false)

  // const dispatch = useDispatch();
  // const history = useHistory();

  const onSubmit = ({ fName, lName, email, password }) => {
    // auth
    //   .createUserWithEmailAndPassword(email, password)
    //   .then((userAuth) => {
    //     userAuth.user
    //       .updateProfile({
    //         displayName: fName,
    //       })
    //       .then(() => {
    //         dispatch(
    //           login({
    //             email: userAuth.user.email,
    //             uid: userAuth.user.uid,
    //             displayName: fName,
    //           })
    //         );
    //         history.replace("/menu");
    //       });
    //   })
    //   .catch((error) => alert(error.message));
  };

  return (
    <div className='signupForm' >
      <div className='signupForm__container' >
        <form className='signupForm__form' onSubmit={handleSubmit(onSubmit)} >

          <h4 className='signupForm__section' >Personal Information</h4>

          <div className='signupForm__inputContainer' >
          <Controller 
                    name='fName'
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                        <TextField 
                        {...field}
                        name='fName' 
                        type={'text'} 
                        label="First Name" 
                        variant="standard" 
                        InputLabelProps={{ style: { color: "rgba(0,0,0, .56)" } }}
                        InputProps={{ style: { fontWeight: "600"} }}
                        className="signupForm__input"
                        />
                    )}
                    />
                    { errors.fName && (
                        <div className='signupForm__error' >
                            <CloseRoundedIcon 
                            fontSize='small'
                            sx={{ color: '#e75b52' }} 
                            />
                            <span>Enter your full name</span>
                            <ReportProblemRoundedIcon 
                                fontSize='small'
                                sx={{ color: '#e75b52' }}
                                className='signupForm__reportIcon'
                            />
                        </div>
                    ) }
          </div>

          <div className='signupForm__inputContainer' >
          <Controller 
                    name='lName'
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                        <TextField 
                        {...field}
                        name='lName' 
                        type={'text'} 
                        label="Last Name" 
                        variant="standard" 
                        InputLabelProps={{ style: { color: "rgba(0,0,0, .56)" } }}
                        InputProps={{ style: { fontWeight: "600"} }}
                        className="signupForm__input"
                        />
                    )}
                    />
                    { errors.lName && (
                        <div className='signupForm__error' >
                            <CloseRoundedIcon 
                            fontSize='small'
                            sx={{ color: '#e75b52' }} 
                            />
                            <span>Enter your last name</span>
                            <ReportProblemRoundedIcon 
                                fontSize='small'
                                sx={{ color: '#e75b52' }}
                                className='signupForm__reportIcon'
                            />
                        </div>
                    ) }
          </div>

          <h4 className='signupForm__section' >Account Security</h4>

          <div className='signupForm__inputContainer' >
          <Controller 
                    name='email'
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                        <TextField 
                        {...field}
                        name='email' 
                        type={'email'} 
                        label="Email Address" 
                        variant="standard" 
                        InputLabelProps={{ style: { color: "rgba(0,0,0, .56)" } }}
                        InputProps={{ style: { fontWeight: "600"} }}
                        className="signupForm__input"
                        />
                    )}
                    />
                    { errors.email && (
                        <div className='signupForm__error' >
                            <CloseRoundedIcon 
                            fontSize='small'
                            sx={{ color: '#e75b52' }} 
                            />
                            <span>Enter an email</span>
                            <ReportProblemRoundedIcon 
                                fontSize='small'
                                sx={{ color: '#e75b52' }}
                                className='signupForm__reportIcon'
                            />
                        </div>
                    ) }
          </div>

          <div className='signupForm__inputContainer' >
                    <Controller 
                    name='password'
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                        <TextField 
                        {...field}
                        name='password' 
                        type={ passwordShown ? 'text' : 'password' } 
                        label="Password" 
                        variant="standard" 
                        InputLabelProps={{ style: { color: "rgba(0,0,0, .56)" } }}
                        InputProps={{ style: { fontWeight: "600"} }}
                        className="signupForm__input"
                        />
                    )}
                    />
                    { passwordShown ? (
                        <VisibilityOffIcon 
                        onClick={() => setPasswordShown(!passwordShown)}
                        className='signupForm__visibilityIcon'
                        />
                    ) : (
                        <VisibilityIcon 
                        onClick={() => setPasswordShown(!passwordShown) }
                        className='signupForm__visibilityIcon'
                        />
                    ) }
                    { errors.password && (
                        <div className='signupForm__error' >
                            <CloseRoundedIcon 
                            fontSize='small'
                            sx={{ color: '#e75b52' }} 
                            />
                            <span>Enter a password</span>
                            <ReportProblemRoundedIcon 
                                fontSize='small'
                                className='signupForm__reportIcon'
                                sx={{ color: '#e75b52' }}
                            />
                        </div>
                    ) }
                </div>

                <h4 className='signupForm__rewards' >
                  COLLECT MORE STARS & EARN REWARDS
                </h4>
                <span className='signupForm__span' >
                  Email is a great way to know about offers and what's new 
                  from Starbucks
                </span>
                <FormSubmit name={'Create account'} type="submit" />
        </form>
      </div>
    </div>
  )
}

export default SignupForm