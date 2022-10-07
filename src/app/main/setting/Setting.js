import styled from '@emotion/styled';
import { CardContent, Container, Divider, FormControlLabel, Paper, Switch } from '@mui/material'
import React from 'react'
import "./setting.css"



const Setting = () => {


    return (
        <>
            <div className="profile-card">
                <Container maxWidth="md">
                    <Paper elevation={3} style={{ marginBottom: "1rem" }}>
                        <CardContent>
                            <h1 style={{ marginBottom: "5px" }}>Setting</h1>
                            <span>Change account setting,connect social accounnts and contact us of support.</span>
                        </CardContent>
                    </Paper>
                    <Paper elevation={3} >
                        <CardContent>
                            <div className="account" divider>
                                <h2 style={{ marginBottom: "5px" }}>Account</h2>
                                <div className="chk-box">
                                    <p>Push Notification</p>
                                    <Switch color="warning" />
                                </div>
                                <div className="chk-box">
                                    <p>Edit Profile</p>
                                </div>
                                <div className="chk-box">
                                    <p>Change Password</p>
                                </div>
                            </div>
                            <Divider />
                            <div className="account" divider>
                                <h2 style={{ marginBottom: "5px" }}>Social Accounts</h2>
                                <div className="chk-box">
                                    <p>Facebook</p>
                                    <Switch defaultChecked color="warning" />
                                </div>
                                <div className="chk-box">
                                    <p>Twitter</p>
                                    <Switch defaultChecked color="warning" />
                                </div>
                                <div className="chk-box">
                                    <p>Google</p>
                                    <Switch defaultChecked color="warning" />
                                </div>
                                <div className="chk-box">
                                    <p>Instagram</p>
                                    <Switch defaultChecked color="warning" />
                                </div>
                            </div>

                            <div className="account">
                                <h2 style={{ marginBottom: "5px" }}>Support</h2>
                                <div className="chk-box">
                                    <p>Call Us</p>
                                </div>
                                <div className="chk-box">
                                    <p>Feedback</p>
                                </div>
                                <div className="chk-box">
                                    <p>Privacy Policy</p>
                                </div>
                            </div>
                        </CardContent>
                    </Paper>
                </Container>
            </div>
        </>
    )
}

export default Setting