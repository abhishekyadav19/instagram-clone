import { Button, Card, CardContent, Grid, TextField, Link } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import GooglePlayIMG from "../../../assests/images/google-play-logo.jpg"
import AppstoreSvg from "../../../assests/images/appstore.svg"
import MobileImg from "../../../assests/images/mobile.jpg"
import { useNavigate } from 'react-router-dom'
import { auth } from "../../../utils/firebase/firebase.config";
import "./login.css"
import { usercontext } from '../../main/context/context'



const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { username } = useContext(usercontext)

  console.log(username);

  // const handleSignIn = (e) => {
  //   console.log("handling sign in");
  //   e.preventDefault();

  //   auth.signInWithEmailAndPassword(email, password)
  //     .catch((error) => {
  //       alert(error.message);
  //     });
  //   if (email && password !== "") {
  //     navigate("/home")
  //   }

  // };

  const { login } = useContext(usercontext)

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <form>
        <div className="wrapper">
          <div className="login">
            <Card variant="outlined" className='main_bx'>
              <CardContent className='left_bx'>
                <div className='login_content'>
                  <h1 style={{ textAlign: "center", fontFamily: `'Grand Hotel', cursive` }}>Instagram</h1>
                  <Grid container spacing={2}>
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
                    <Button type='submit' variant='outlined' onClick={handleSignIn} >Login</Button>
                  </div>
                  <div style={{ textAlign: "center", marginBottom: "1rem", cursor: "pointer" }}> <Link to="#" >Forget Password ?</Link></div>
                  <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
                    <span style={{ marginRight: "5px" }}>Dont have an account</span>
                    <Link onClick={() => navigate("/ragister")} style={{ cursor: "pointer" }}>Sign Up</Link>
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

export default Login