import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import firebase from 'firebase/compat/app';
import { db, storage } from "../../utils/firebase/config"
import { getStorage, ref, uploadBytesResumable } from "firebase/storage";


const Addpost = () => {
    const [caption, setCaption] = useState("")
    const [image, setImage] = useState("")
    const [imgUrl, setImgUrl] = useState(null);
    const [progress, setProgress] = useState(0);

    const handlesubmit = (e) => {
        e.preventDefault()
        const storage = getStorage();
        const storageRef = ref(storage, `images/${image.name}`);

        const uploadTask = uploadBytesResumable(storageRef, image);
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                //progress function ...
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                console.log(progress)
                setProgress(progress);
            },
            (error) => {
                // Error Function gives Error Message
                console.log(error);
                alert(error.message);
            },

            () => {
                // complete function ...
                storage
                    .ref("images")
                    .child(`${image.name}`)
                    .getDownloadURL()
                    .then((url) => {
                        // post the Images inside db.
                        console.log(url);


                        setProgress(0);
                        setCaption("");
                        setImage(null);
                    });
            }
        );
    };
    return (
        <>
            <form onSubmit={handlesubmit}>
                <div className="addpost">
                    <Card sx={{ maxWidth: 845 }}>
                        <CardContent>
                            <progress value={progress} />
                            <h2 style={{ marginTop: "0" }}>Create a post</h2>
                            <TextField
                                id="outlined-multiline-static"
                                label="New post"
                                rows={2}
                                multiline
                                fullWidth
                                value={caption}
                                onChange={(e) => setCaption(e.target.value)}
                            />
                            <div className="postIcon">
                                <label htmlFor="upload-image">
                                    <AddAPhotoIcon fontSize="large" />
                                </label>
                                <input type="file" name="upload-image" id="upload-image" hidden onChange={(e) => setImage(e.target.files[0])} />
                                <Button type='submit' variant="contained">Create</Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </form>
        </>
    )
}

export default Addpost