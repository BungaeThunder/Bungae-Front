import type { NextPage } from 'next';
import {useEffect, useState} from 'react';
import Api from "lib/utils";


export type User = {
    email: string;
    name: string;
    birthday: Date;
};


const API_TEST: NextPage = () => {

    const [users, setUsers] = useState<User[]>([])

    useEffect(() => {
        Api.get('users')
            .then(response => {
                setUsers(response.data)
                console.log("users : ", response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);


    return (
        <div>
            <p>API 테스트를 위한 공간</p>
            <div>
                {users.map((user, index) => (
                    <p key={index}>User {index + 1}: {user.name}</p>
                ))}
            </div>
        </div>
    );
};

export default API_TEST;
