import { Button, Card, CardContent, Grid, TextField } from '@mui/material'
import React, { useState, useContext } from 'react'
import GooglePlayIMG from "../../../assests/images/google-play-logo.jpg"
import AppstoreSvg from "../../../assests/images/appstore.svg"
import MobileImg from "../../../assests/images/mobile.jpg"
import { usercontext } from '../../main/context/context'
import "../login/login.css"
import { firebase, db, storage, auth } from "../../../utils/firebase/firebase.config"
import { useNavigate } from 'react-router-dom'



const Ragister = () => {

  const { signup, username, setUsername, email,
    password, setPassword, setEmail } = useContext(usercontext)

  let navigate = useNavigate();
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await signup(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <form onSubmit={handleSignUp}>
        <div className="wrapper">
          <div className="login">
            <Card variant="outlined" className='main_bx'>
              <CardContent className='left_bx'>
                <div className='login_content'>
                  <h1 style={{ textAlign: "center", fontFamily: `'Grand Hotel', cursive` }}>Instagram</h1>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField size="small" id="username" label="Username" variant="outlined"
                        fullWidth name='username' value={username} onChange={(e) => setUsername(e.target.value)} />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField size="small" id="email" label="Email" variant="outlined"
                        fullWidth name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField size="small" type={password} id="password" label="Password" variant="outlined"
                        fullWidth name='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    </Grid>
                  </Grid>
                  <div className='button-login'>
                    <Button type='submit' variant='outlined'  >Ragister</Button>
                  </div>
                  <div className="icon-group">
                    <img src={GooglePlayIMG} alt="" />
                    <img src={AppstoreSvg} alt="" />
                  </div>
                </div>
              </CardContent>
              <img src={MobileImg} alt="name" className='login_image' />
            </Card>
          </div>
        </div>
      </form>
    </>
  )
}

export default Ragister