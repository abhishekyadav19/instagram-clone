import { faker } from '@faker-js/faker';
import React, { useContext, useEffect, useState } from 'react'
import "../main/index.css"
import { usercontext } from './context/context';

const Suggestions = () => {
    const [suggestionsList, setSuggestionsList] = useState([])
    const { user } = useContext(usercontext)
    const username = user.displayName;

    const followChange = (e, userId) => {
        e.preventDefault()
        setSuggestionsList(
            suggestionsList.map((item) => {
                if (item.userId === userId) {
                    item.followed = !item.followed;
                }
                return item;
            })
        );
    };

    useEffect(() => {
        const suggestions = [...Array(10)].map((_, i) => ({
            userId: faker.datatype.uuid(),
            username: faker.internet.userName(),
            // email: faker.internet.email(),
            avatar: faker.image.avatar(),
            // password: faker.internet.password(),
            // birthdate: faker.date.birthdate(),
            // registeredAt: faker.date.past(),
            id: i,
            followed: false
        }));
        setSuggestionsList(suggestions);
    }, []);

    return (
        <div className="sidebar-suggestion">
            <div className="sidebar__user">
                <div className="sidebar__user-avator">A</div>
                <div className="sidebar__user-name">{username}</div>
            </div>

            <div className="sidebar__list">
                <h3>Suggestions for you</h3>
                {suggestionsList.map((user, i) => (
                    <div className="sidebar__list-user" key={user.userId}>
                        <div className="sidebar__list-a">
                            <div className="sidebar__list-a-img">
                                <img src={user.avatar} alt={user.avatar} />
                            </div>
                            <div className="sidebar__list-a-name">{user.username}</div>
                        </div>
                        <div className="sidebar__list-b" onClick={(e) => followChange(e, user.userId)}
                        >
                            <a href="">{user.followed ? "Followed" : "Follow"}</a>
                        </div>
                    </div>
                ))}
            </div>

        </div >
    )
}

export default Suggestions