
import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';


export default function Posts() {

    const [ posts, setPosts ] = useState();

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos")
        .then(res => {
            console.log(res.data);
        })
    },[]);


    return (
        <div>
            posts
        </div>
    )
}
