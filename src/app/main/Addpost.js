import React, { useContext, useEffect, useRef, useState } from 'react'
import TextField from '@mui/material/TextField';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import { usercontext } from './context/context';


const Addpost = (props) => {
    const [title, setTitle] = useState("");
    const { addref, image, setImage, progress, setProgress, create } = useContext(usercontext)

    useEffect(() => {
        addref?.current?.focus()
    }, [])

    // console.log("xyz");
    console.log(props, "addpost props");
    const handleUpload = (e) => {
        e.preventDefault();
        create({ title, image });
        setTitle("");
        setImage("");
    };
    const handleChangeImage = (e) => {
        setImage(e.target.files[0])
    }

    return (
        <>
            <form >
                <div className="addpost">
                    <Card className='width-section'>
                        <CardContent>
                            {/* <progress value={progress} /> */}
                            <h2 style={{ marginTop: "0" }}>Create a post</h2>
                            <TextField
                                id="outlined-multiline-static"
                                label="New post"
                                rows={2}
                                multiline
                                fullWidth
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            <div className="postIcon">
                                <label htmlFor="upload-image" name="upload-image" className='camera-icon'>
                                    <AddAPhotoIcon fontSize="large" />
                                </label>
                                <input ref={addref} type="file" name="upload-image" id="upload-image" hidden onChange={handleChangeImage} autoFocus />
                                <Button variant="contained" onClick={handleUpload}>Create</Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </form>

        </>
    )
}

export default Addpost