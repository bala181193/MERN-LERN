'use client'
import React, { useState, useEffect } from "react";

const Post = ({ params }) => {
    const [postDetails, setpostDetails] = useState([]);

    const fetchData = async () => {
        try {
            let fetchDet = await fetch(`${process.env.NEXT_PUBLIC_API_HOST_URL}/post/${params.id}`)
            let jsonData = await fetchDet.json();
            setpostDetails(jsonData)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <>
            <main class="container mx-auto px-4 py-6">
                <h2 className="text-4xl font-bold mb-4">{postDetails.title}</h2>
                <p className="text-gray-500">{postDetails.changeDate}</p>
                <img src={postDetails.image} alt="Post Image" className="my-4" />
                <p>{postDetails.description}</p>
            </main>
        </>
    )
}
export default Post