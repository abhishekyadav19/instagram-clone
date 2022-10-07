import * as React from 'react';
import History from './History';
import Addpost from './Addpost';
import Post from './Post';
import Suggestions from './Suggestions';
import ProfilePage from './profile/ProfilePage';
import { useLocation } from 'react-router-dom';


export default function Homepage() {
    const location = useLocation();

    return (
        <>
            <History />
            <Addpost />
            <Post />
            <Suggestions />
        </>
    );
}
