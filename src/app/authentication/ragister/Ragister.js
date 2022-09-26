import { Button, Card, CardContent, Grid, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import '../login/login.css'
import { ragisterusernew } from '../../store/actions/ragisterAction'
import { toast } from 'react-toastify'
import { validation } from '../../../utils/validation'

const Ragister = () => {
  const dispatch = useDispatch()
  const [error, setError] = useState({})
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const handlechange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value })
    setError(validation(formData))

  }
  const handlesubmit = (e) => {
    e.preventDefault()
    console.log(formData);
    dispatch(ragisterusernew(formData))

  }
  return (
    <>
      <form onSubmit={handlesubmit}>
        <div className="wrapper">
          <div className="login">
            <Card variant="outlined">
              <CardContent>
                <h1>Ragister </h1>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth name='email' value={formData.email} onChange={handlechange} />
                    {error.email && <div className='error'>{error.email}</div> }
                  </Grid>
                  <Grid item xs={12}>
                    <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth name='password' value={formData.password} onChange={handlechange} />
                    {error.password && <div className='error'>{error.password}</div> }
                  </Grid>
                </Grid>
                <div className='button-login'>
                  <Button type='submit' variant='outlined'  >Signup</Button>
                </div>
             </CardContent>
            </Card>
          </div>
        </div>
      </form>
    </>
  )
}

export default Ragister