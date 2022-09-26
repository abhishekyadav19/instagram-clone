import { Button, Card, CardContent, FormControl, Grid, TextField, Link } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import Spinner from '../../../utils/loader/Spinner'
import { getToken } from '../../../utils/token'
import { loginusernew } from '../../store/actions/loginActions'
import './login.css'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import GooglePlayIMG from "../../../assests/images/google-play-logo.jpg"
import AppstoreSvg from "../../../assests/images/appstore.svg"
import MobileImg from "../../../assests/images/mobile.jpg"

const Login = () => {
  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup
        .string()
        .required('Please Enter your password')
      // .matches(
      //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      //   "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      // ),
    }),
    onSubmit: values => {
      dispatch(loginusernew(values))

    },
  });
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const { loading, error } = useSelector(state => state.loginReducer)

  if (error) {
    return <div>Error! {error.message}</div>;
  }

  // if (loading) {
  //   return <Spinner/>;
  // }

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="wrapper">
          <div className="login">
            <Card variant="outlined" className='main_bx'>
              <CardContent className='left_bx'>
                <div className='login_content'>
                  <h1 style={{ textAlign: "center", fontFamily: `'Grand Hotel', cursive` }}>Instagram</h1>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField size="small" id="email" label="eve.holt@reqres.in" variant="outlined" fullWidth name='email' {...formik.getFieldProps('email')} />
                      {formik.touched.email && formik.errors.email ? (
                        <div className='error'>{formik.errors.email}</div>
                      ) : null}
                    </Grid>
                    <Grid item xs={12}>
                      <TextField size="small" id="opassword" label="cityslicka" variant="outlined" fullWidth name='password' {...formik.getFieldProps('password')} />
                      {formik.touched.password && formik.errors.password ? (
                        <div className='error'>{formik.errors.password}</div>
                      ) : null}
                    </Grid>
                  </Grid>
                  <div className='button-login'>
                    <Button type='submit' variant='outlined'  >Login</Button>
                  </div>
                  <div style={{ textAlign: "center", marginBottom: "1rem", cursor: "pointer" }}> <Link to="/" >Forget Password ?</Link></div>
                  <div style={{ textAlign: "center", marginBottom: "1.5rem" }}> <span style={{ marginRight: "5px" }}>Dont have an account</span><Link to="/" style={{ cursor: "pointer" }}>Sign Up</Link></div>
                  <div className="icon-group">
                    <img src={GooglePlayIMG} alt="" />
                    <img src={AppstoreSvg} alt="" />
                  </div>
                </div>
              </CardContent>
              <img src={MobileImg} alt="image" className='login_image' />
            </Card>
          </div>
        </div>
      </form>
    </>
  )
}

export default Login