import { faker } from '@faker-js/faker';
import { CardContent, Container, Paper } from '@mui/material'
import React, { useEffect, useState } from 'react'
import "./activity.css"

const Activity = () => {
    const [suggestionsList, setSuggestionsList] = useState([])

    useEffect(() => {
        const suggestions = [...Array(10)].map((_, i) => ({
            userId: faker.datatype.uuid(),
            paragraph: faker.lorem.paragraph(1),
            avatar: faker.image.avatar(),
            id: i,
        }));
        setSuggestionsList(suggestions);
    }, []);
    return (
        <>
            <div className="profile-card">
                <Container maxWidth="md">
                    <Paper elevation={3} style={{ marginBottom: "1rem" }}>
                        <CardContent>
                            <h2 style={{ marginBottom: "5px" }}>Welcome user we are glad you are here !</h2>
                        </CardContent>
                    </Paper>
                    <Paper elevation={3} >
                        <CardContent>
                            {
                                suggestionsList.map((item, i) => (
                                    <div className="main_bxx" key={item.userId}>
                                        <div className="flex-space">
                                            <div className="image-bx">
                                                <img src={item.avatar} alt={item.avatar} />
                                            </div>
                                            <div className="center-content">
                                                <p>{item.paragraph}</p>
                                            </div>
                                        </div>
                                        <div className="time">
                                            <p>2 days ago</p>
                                        </div>
                                    </div>
                                ))
                            }


                        </CardContent>
                    </Paper>
                </Container>
            </div>
        </>
    )
}

export default Activity