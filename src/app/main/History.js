import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import Img from "../../assests/images/dummywomen.jpg"


const History = () => {
    const [images, setiImages] = React.useState([
        { id: 1, image: "/assests/images/dummywomen.jpg", name: "nik Jonus" },
        { id: 2, image: "../../assests/images/dummywomen.jpg", name: "nik 2" },
        { id: 3, image: "../../assests/images/dummywomen.jpg", name: "nik Jonus 3" },
        { id: 4, image: "../../assests/images/dummywomen.jpg", name: "nik Jonus" },

    ])
    return (
        <div>
            <Card className="history_bx_main">
                <CardContent className='d-flex'>
                    {
                        images.map((item) => (
                            <div className="history_bx" key={item.id}>
                                <figure>
                                    <img src={Img} alt="" className='history_image' />
                                </figure>
                                <figcaption >Nik {item.name}</figcaption>
                            </div>
                        ))
                    }

                </CardContent>
            </Card>
        </div>
    )
}

export default History