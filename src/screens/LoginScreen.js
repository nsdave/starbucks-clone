import React, { useState } from 'react'
import '../styles/LoginScreen.css'
import { Link } from 'react-router-dom' 
import { TextField } from '@mui/material'
import { useForm, Controller } from 'react-hook-form'

import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ReportProblemRoundedIcon from '@mui/icons-material/ReportProblemRounded';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import FormSubmit from '../components/FormSubmit'
import FooterSecondary from '../components/FooterSecondary'
// import { useDispatch } from 'react-redux'
// import { auth } from '../firebase'
// import { login } from '../features/userSlice'

const LoginScreen = () => {
    const { handleSubmit, control, formState : { errors } } = useForm()
    const [passwordShown, setPasswordShown] = useState(false)
    // const dispatch = useDispatch()

    // FIREBASE AUTH
    const onSubmit = ({ email, password }) => {
        // auth
        //   .signInWithEmailAndPassword(email, password)
        //   .then((userAuth) => {
        //     dispatch(
        //       login({
        //         email: userAuth.user.email,
        //         uid: userAuth.user.uid,
        //         displayName: userAuth.user.displayName,
        //       })
        //     );
        //   })
        //   .catch((error) => alert(error.message));
      };

  return (
    <div className='loginScreen' >
        <div className='loginScreen__left' >
            <Link to={'/'} >
                <img src='https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png' alt='' />
            </Link>
            <div className='loginScreen__info' >
                <h1>Sign in or create an account</h1>
            </div>
        </div>

        <div className='loginScreen__right' >
            <form onSubmit={handleSubmit(onSubmit)} >
                <div className='loginScreen__inputContainer' >
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
                        className="loginScreen__input"
                        // {...register({ required: true })}
                        />
                    )}
                    />
                    { errors.email && (
                        <div className='loginScreen__error' >
                            <CloseRoundedIcon 
                            fontSize='small'
                            sx={{ color: '#e75b52' }} 
                            />
                            <span>Enter an email</span>
                            <ReportProblemRoundedIcon 
                                fontSize='small'
                                sx={{ color: '#e75b52' }}
                                className='loginScreen__reportIcon'
                            />
                        </div>
                    ) }
                </div>

                <div className='loginScreen__inputContainer' >
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
                        className="loginScreen__input"
                        />
                    )}
                    />
                    { passwordShown ? (
                        <VisibilityOffIcon 
                        onClick={() => setPasswordShown(!passwordShown)}
                        className='loginScreen__visibilityIcon'
                        />
                    ) : (
                        <VisibilityIcon 
                        onClick={() => setPasswordShown(!passwordShown) }
                        className='loginScreen__visibilityIcon'
                        />
                    ) }
                    { errors.password && (
                        <div className='loginScreen__error' >
                            <CloseRoundedIcon 
                            fontSize='small'
                            sx={{ color: '#e75b52' }} 
                            />
                            <span>Enter a password</span>
                            <ReportProblemRoundedIcon 
                                fontSize='small'
                                className='loginScreen__reportIcon'
                                sx={{ color: '#e75b52' }}
                            />
                        </div>
                    ) }
                </div>

                <div className='loginScreen__resetLinks' >
                    <Link>Forgot your username?</Link>
                    <Link>Forgot your password?</Link>
                </div>
                <FormSubmit name="Sign in" type="submit" />
            </form>

            <div className='loginScreen__rewards' >
                <h4>JOIN STARBUCKS REWARDS</h4>
            </div>
            <div className='loginScreen__joinNow' >
                <div className='loginScreen__joinNowContainer' >
                    <Link to={'/account/create'} >Join now</Link>
                    <h4>Create an account and bring on the Rewards!</h4>
                    <p>
                        Join Starbucks Rewards to earn free food and drinks, 
                        get refills, pay and order with your phone, and more.
                    </p>
                </div>
            </div>

            <FooterSecondary paddingLeft={30} flexDirection="column" />
        </div>
    </div>
  )
}

export default LoginScreen