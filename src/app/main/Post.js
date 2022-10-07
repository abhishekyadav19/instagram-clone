import React, { useContext, useState } from 'react'
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
import { usercontext } from './context/context';
import Comments from './Comments';


const Post = () => {
    const [wishlisht, setWishlisht] = useState(false)
    const { posts } = React.useContext(usercontext);
    const { username, profile, setProfile } = useContext(usercontext)


    const handleFavorite = () => {
        setWishlisht(!wishlisht)
    }
    return (
        <>
            {console.log(posts, "posts")}
            {
                posts.map((post, index) => (

                    <Card sx={{ marginBottom: "1.5rem" }} className="width-section" key={post.id}>
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: red[500] }} src={profile} alt={profile} />

                            }
                            action={
                                <IconButton aria-label="settings">
                                    <MoreVertIcon />
                                </IconButton>
                            }
                            title={post.username}
                            subheader={post.today}
                        />
                        <div>
                            {
                                (post.fileype == "image/jpeg") ?
                                    <CardMedia
                                        component="img"
                                        height="450"
                                        src={post.files}
                                        alt="name"
                                    /> : (
                                        <video width="100%" height="500" controls >
                                            <source src={post.files} type="video/mp4" />
                                        </video>
                                    )
                            }

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
                        <CardContent>
                            <p># {post.caption}</p>
                        </CardContent>
                        <CardContent>
                            <Comments id={post.id} />
                        </CardContent>
                    </Card>
                ))
            }
        </>

    )
}

export default Post

