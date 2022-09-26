const handlesubmit = (e) => {
    e.preventDefault();
    const uploadTask = storage.ref(`images/${image.name}`).put(image);

    uploadTask.on(
        "state_changed",
        // "state_changed" , this is firebase inbuilt event 
        (snapshot) => {
            //progress function ...
            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            setProgress(progress);
            console.log(progress)
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
                .child(image.name)
                .getDownloadURL()
                .then((url) => {
                    // have posted the Images and caption/title inside db.
                    db.collection("posts").add({
                        caption: caption,
                        image: url,
                    });

                    setProgress(0);
                    setCaption("");
                    setImage(null);
                });
        }
    );
};