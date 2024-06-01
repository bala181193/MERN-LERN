"use client"
import React, { useState } from "react";

const ContactUs = () => {

    const [input, setInput] = useState({})
    const [alertMessage, setAlertMessage] = useState('')
    const handleChange = (e) => {
        setInput((state) => { return { ...state, [e.target.name]: e.target.value } })
    }
    const handleSubmit = (e) => {
        try {
            e.preventDefault();
            fetch(`${process.env.NEXT_PUBLIC_API_HOST_URL}/enquiry`,
                {
                    method: "POST",
                    body: JSON.stringify(input)
                }
            ).then(response => response.json())
                .then(json => { console.log("..json", json); setInput({}), setAlertMessage(json.message) })
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <>
            <main className="container mx-auto px-4 py-6">
                <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
                <htmlForm className="w-full max-w-lg">
                    <div className="flex items-center mb-4">
                        <label htmlFor="name" className="w-1/4">Name:</label>
                        <input name="name" onChange={handleChange} value={input.name ?? ""} type="text" id="name" className="border rounded px-2 py-1 w-3/4" />
                    </div>
                    <div className="flex items-center mb-4">
                        <label htmlFor="email" className="w-1/4">Email:</label>
                        <input type="email" name="email" onChange={handleChange} value={input.email ?? ""} id="email" className="border rounded px-2 py-1 w-3/4" />
                    </div>
                    <div className="flex items-center mb-4">
                        <label htmlFor="message" className="w-1/4">Message:</label>
                        <textarea id="message" name="message" onChange={handleChange} value={input.message ?? ""} className="border rounded px-2 py-1 w-3/4" rows="4"></textarea>
                    </div>
                    <button type="button" onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Submit</button>
                </htmlForm>
                <p>{alertMessage ?? ""}</p>
            </main>
        </>
    )
}
export default ContactUs