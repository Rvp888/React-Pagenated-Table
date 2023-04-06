
import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';


export default function Posts() {

    const [ posts, setPosts ] = useState();

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos")
        .then(res => {
            console.log(res.data);
            setPosts(res.data);
        })
    },[]);


    return (
        <div>
            {
                !posts ? ("No data found") : (
                    <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>User Id</th>
                                <th>Title</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody></tbody>
                    </table>
                )
            }
        </div>
    )
}
