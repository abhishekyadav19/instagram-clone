import SettingsIcon from '@mui/icons-material/Settings';
import StarsIcon from '@mui/icons-material/Stars';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import MessageIcon from '@mui/icons-material/Message';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import PostAddIcon from '@mui/icons-material/PostAdd';
import { useContext } from 'react'


const handleShow = () => {
    // addref?.current?.focus()
}

const _nav = [
    {
        _tag: 'Post',
        name: 'Post',
        to: '/home',
        icon: <PostAddIcon />,
        fn: handleShow,
    },
    {
        _tag: 'profile',
        name: 'Profile',
        to: '/profile-page',
        icon: <AdminPanelSettingsIcon />,
        fn: null,
    },
    {
        _tag: 'message',
        name: 'Direct Message',
        to: '/message',
        icon: <MessageIcon />,
        fn: null,

    },
    {
        _tag: 'activities',
        name: 'Activities',
        to: '/activity',
        icon: <AccessibilityIcon />,
        fn: null,

    },
    {
        _tag: 'saved',
        name: 'Saved',
        to: '/saved',
        icon: <StarsIcon />,
        fn: null,

    },
    {
        _tag: 'setting',
        name: 'Setting',
        to: '/setting',
        icon: <SettingsIcon />,
        fn: null,

    }
];

export default _nav;
