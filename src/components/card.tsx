import React from "react";
import axios from 'axios';
import { useState, useEffect, useCallback } from 'react';
import { toast } from 'react-toastify';

import { emptyUser } from "../models/cardmodel";

type CardProps = {
    username: string
};

const apipath = 'https://api.github.com/users/';

const emitWarn = (msg: string) => toast.error(msg, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
});
const load = (parameter: string, setUser: Function) => {
    let isSubscribed = true;

    const fetchData = async () => {
        const json = await axios.get(apipath.concat(parameter)).then(r => r.data);
        if (isSubscribed) {
            setUser(json);
        }
    }
    fetchData().catch(err => emitWarn(`Can't load data for '${parameter}'!`));

    return () => { isSubscribed = false };
}

export default function Card({ username }: CardProps) {
    const [user, setUser] = useState(emptyUser);
    useEffect(() => load(username, setUser), [username]);

    return (
        <div className="card text-center">
            <div className="background-image">
                <img src={user.avatar_url} alt="Card's background image" />
            </div>
            <div className="container">
                <a target="_blank" href={user.html_url}>
                    <img className="avatar" src={user.avatar_url} alt="User's image" />
                </a>
                <h5>
                    <a target="_blank" href={user.html_url}>
                        {
                            user.name === null
                                ? <span>{user.login}<i className="ml-2 fa-solid fa-arrow-up-right-from-square"></i></span>
                                : user.name
                        }
                    </a>
                </h5>
                <h6 className="gray">
                    <a target="_blank" href={user.html_url}>
                        {
                            user.name === null
                                ? ''
                                : <span>{user.login}<i className="ml-2 fa-solid fa-arrow-up-right-from-square"></i></span>
                        }
                    </a>
                </h6>
                <span className="gray mt-4 space-x-3 md:mt-6">
                    {user.bio}
                </span>
                <div className="stats">
                    <span className="font-bold"><a target="_blank" href={user.html_url + '?tab=followers'}>{user.followers}</a></span>
                    <span className="font-bold"><a target="_blank" href={user.html_url + '?tab=following'}>{user.following}</a></span>
                    <span className="font-bold"><a target="_blank" href={user.html_url + '?tab=repositories'}>{user.public_repos}</a></span>
                    <span><a target="_blank" href={user.html_url + '?tab=followers'}>Followers</a></span>
                    <span><a target="_blank" href={user.html_url + '?tab=following'}>Following</a></span>
                    <span><a target="_blank" href={user.html_url + '?tab=repositories'}>Repositories</a></span>
                </div>
            </div>
        </div>

    );
}