import React, { useState } from 'react'
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
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ImgSvg from "../../assests/images/dummywomen.jpg";

const Post = () => {
    const [wishlisht, setWishlisht] = useState(false)


    const handleFavorite = () => {
        setWishlisht(!wishlisht)

    }
    return (
        <div>
            <Card sx={{ maxWidth: 845 }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            A
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016"
                />
                <div className="d-flex">
                    <CardMedia
                        component="img"
                        height="194"
                        image={ImgSvg}
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            This impressive paella is a perfect party dish and a fun meal to cook
                            together with your guests. Add 1 cup of frozen peas along with the mussels,
                            if you like.
                        </Typography>
                    </CardContent>
                </div>
                <CardActions className='icon_bottom'>
                    <div className="left">
                        <IconButton aria-label="add to favorites" onClick={handleFavorite}>
                            <FavoriteIcon style={{ fill: wishlisht ? "red" : "" }} />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                    </div>
                    <div className="right">
                        <IconButton aria-label="share">
                            <ExpandMoreIcon />
                        </IconButton>
                    </div>
                </CardActions>

            </Card>
        </div>
    )
}

export default Post