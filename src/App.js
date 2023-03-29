import React from 'react';

import './App.css';
import Header from './components/Header'
import HomeScreen from './screens/HomeScreen'
import { Footer } from './components/Footer'
import { Fade } from 'react-awesome-reveal';
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import LoginScreen from './screens/LoginScreen';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import SignupScreen from './screens/SignupScreen';
import MenuScreen from './screens/MenuScreen';
import FeaturedScreen from './screens/FeaturedScreen';

function App() {
  const user = useSelector(selectUser)

  // useEffect(() => {
  //   auth.onAuthStateChanged((userAuth) => {
  //     if (userAuth) {
  //       // User is signed in
  //       dispatch(
  //         login({
  //           email: userAuth.email,
  //           uid: userAuth.uid,
  //           displayName: userAuth.displayName,
  //         })
  //       );
  //     } else {
  //       // User is signed out
  //       dispatch(logout());
  //     }
  //   });
  // }, [dispatch]);


  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
            <Route 
            path='/'
            element={
              <div>
                <Header />
                <HomeScreen />
                <Fade>
                  <Footer />
                </Fade>
              </div>
            }
            />

            <Route 
            path='/account/signin'
            element={ user ? <Navigate to={'/menu'} />  : <LoginScreen /> }
            />
            <Route 
            path='/account/create'
            element={ user ? <Navigate to={'/menu'} />  : <SignupScreen /> }
            />

            {/* <Route 
            path='/menu'
            element={ !user ? <Navigate to={'/account/signin'} />  : 
            <>
              <Header menuPage />
              <MenuScreen />
            </> }
            /> */}

            <Route 
            path='/menu'
            element={
              <>
                <Header menuPage />
                <MenuScreen />
              </>
            }
            />

            <Route 
            path='/menu/featured'
            element={
              <>
                <Header />
                <FeaturedScreen />
                <Fade>
                  <Footer />
                </Fade>
              </>
            }
            />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
