import { faker } from '@faker-js/faker'
import { Button, CardContent, Container, Grid, Paper } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { usercontext } from '../context/context'
import "./profile.css"


const ProfilePage = () => {
  const { user, profile, setProfile } = useContext(usercontext)
  const username = user.displayName;
  const [suggestionsList, setSuggestionsList] = useState([])


  const handleUpload = (e) => {
    setProfile(URL.createObjectURL(e.target.files[0]));
  }
  useEffect(() => {
    const suggestions = [...Array(10)].map((_, i) => ({
      userId: faker.datatype.uuid(),
      avatar: faker.image.avatar(),
      id: i,
    }));
    setSuggestionsList(suggestions);
  }, []);

  return (
    <>

      <div className="profile-card">
        <Container maxWidth="md">
          <Paper elevation={3} >
            <CardContent>
              <div className='profile-head'>
                <Grid container spacing={2}>
                  <Grid item xs={3}>
                    <div className="profile">
                      <img src={profile} alt="profile" className='profile-image' />
                    </div>
                  </Grid>
                  <Grid item xs={6}>
                    <div className='profile-name'>
                      <h2>{username}</h2>
                      <label htmlFor="profile">
                        <div className='update-button'>
                          Update Profile
                        </div>
                        <input type="file" name="profile" id="profile" onChange={(e) => handleUpload(e)} hidden />
                      </label>
                    </div>
                    <div className="followers">
                      <p><b>1244</b>Posts</p>
                      <p><b>1244</b>Followers</p>
                      <p><b>1244</b>Followings</p>
                    </div>
                    <p><b>#Don’t follow to #unfollow😡</b></p>
                  </Grid>
                  <Grid item xs={3}>
                    <div style={{ float: "right" }}>
                      <Link to="/home">
                        Back
                      </Link>
                    </div>
                  </Grid>
                </Grid>
                <div className="image-gallerysection">
                  <Grid container spacing={2}>
                    {
                      suggestionsList.map((item) => (
                        <Grid item xs={4}>
                          <img src={item.avatar} alt={item.avatar} className='profile-Dimage' />
                        </Grid>
                      ))
                    }

                  </Grid>
                </div>
              </div>
            </CardContent>
          </Paper>
        </Container>
      </div>
    </>
  )
}

export default ProfilePage