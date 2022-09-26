import * as React from 'react';
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../utils/firebase/config";


import History from './History';
import Addpost from './Addpost';
import { useState } from 'react';
import { useEffect } from 'react';
import Post from './Post';



export default function UserCard() {
    const [posts, setPosts] = useState("")



    // useEffect(() => {
    //     db.collection("posts")
    //         .orderBy("timestamp", "desc")
    //         .onSnapshot((snapshot) => {
    //             setPosts(
    //                 snapshot.docs.map((doc) => ({
    //                     id: doc.id,
    //                     post: doc.data(),
    //                 }))
    //             );
    //         });
    // }, [db]);

    return (
        <>
            <History />
            <Addpost />
            {/* { */}
            {/* // posts.map((post, id) => ( */}
            <Post
            // key={id}
            // postId={id}
            // username={username}
            // caption={caption}
            // imageUrl={imageUrl}
            />
            {/* // )) */}
            {/* // } */}

        </>
    );
}
