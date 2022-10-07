import * as React from 'react';
import { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css"
import { faker } from "@faker-js/faker";


const History = () => {
    const [suggestions, setSuggestions] = useState([]);

    const settings = {
        infinite: false,
        speed: 2000,
        slidesToShow: 5,
        swipeToSlide: true,
        slidesToScroll: 5,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1364,
                settings: {
                    infinite: false,
                    speed: 2000,
                    slidesToShow: 4,
                    swipeToSlide: true,
                    slidesToScroll: 6,
                    autoplaySpeed: 2000,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    infinite: false,
                    speed: 2000,
                    slidesToShow: 3,
                    swipeToSlide: true,
                    slidesToScroll: 3,
                    autoplaySpeed: 2000,
                }
            },
            {
                breakpoint: 600,
                setting: {
                    infinite: false,
                    speed: 2000,
                    slidesToShow: 2,
                    swipeToSlide: true,
                    slidesToScroll: 2,
                    autoplaySpeed: 2000,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    useEffect(() => {
        const suggestions = [...Array(20)].map((_, i) => ({
            userId: faker.datatype.uuid(),
            username: faker.internet.userName(),
            // email: faker.internet.email(),
            avatar: faker.image.avatar(),
            // password: faker.internet.password(),
            // birthdate: faker.date.birthdate(),
            // registeredAt: faker.date.past(),
            id: i,
        }));
        setSuggestions(suggestions);
    }, []);
    return (
        <div>
            <Card className="history_bx_main width-section"  >
                <CardContent className='-flex'>
                    <Slider {...settings}>

                        {
                            suggestions.map((item) => (

                                <div className="history_bx" key={item.userId}>
                                    <figure>
                                        <img src={item.avatar} alt="item.avatar" className='history_image' />
                                    </figure>
                                    <figcaption >{item.username}</figcaption>
                                </div>

                            ))
                        }
                    </Slider>

                </CardContent>
            </Card>
        </div >
    )
}

export default History