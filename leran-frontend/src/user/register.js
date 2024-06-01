import React, { useState } from 'react'
import axios from 'axios'
const intialValue = {
    firstName: "",
    email: "",
    mobileNumber: "",
    profileImage: {},
}
function Register() {
    const [formValue, setformValue] = useState(intialValue);
    const [changeImage, setchangeImage] = useState('');

    const { firstName, email, mobileNumber, profileImage } = formValue
    const handleChange = (e) => {
        const { name, value } = e.target
        // let formvalue = { ...formValue, ...{ [name]: value } }
        setformValue({ ...formValue, ...{ [name]: value } })
    }
    const handleChangeFile = (e) => {
        const imageFile = e.target.files[0];
        setformValue({ ...formValue, ...{ profileImage: imageFile } })
        setchangeImage(URL.createObjectURL(e.target.files[0]));



    }
    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            console.log('...formvalue', formValue);
            const formData = new FormData()
            formData.append('firstName', firstName)
            formData.append('email', email)
            formData.append('mobileNumber', mobileNumber)
            formData.append('profileImage', profileImage)

            const resData = await axios({
                method: "post",
                url: 'http://localhost:2001/authApi/register',
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                data: formData
            })
            console.log(resData.data)
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <form onSubmit={handleSubmit}>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control" name='email' id="email" aria-describedby="emailHelp" placeholder="Enter email"
                                onChange={handleChange}
                                value={email}
                            />
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                            <label for="firstName">First Name</label>
                            <input type="text" class="form-control" id="firstName" name='firstName' placeholder="FirstName"
                                onChange={handleChange}
                                value={firstName}
                            />
                        </div>
                        <div class="form-group">
                            <label for="mobileNumber">MobileNumber</label>
                            <input type="text" class="form-control" id="mobileNumber" name='mobileNumber' placeholder="mobileNumber"
                                onChange={handleChange}
                                value={mobileNumber}
                            />
                        </div>
                        <div class="form-group">
                            <label for="profileImage">Example file input</label>
                            <input type="file" class="form-control-file" id="profileImage" name="profileImage" onChange={handleChangeFile} />
                        </div>
                        {
                            Object.keys(formValue.profileImage).length > 0 &&
                            <div class="form-group">
                                <img src={changeImage} height={100} width={100} />
                            </div>
                        }

                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register
