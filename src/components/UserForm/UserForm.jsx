import React, { useState } from 'react';
import "./UserForm.css"

const UserForm = () => {
    const [formData, setFormData] = useState({
        userId: "",
        name: "",
        email: "",
        city: ""
    })
    const [storeData, setSoreData] = useState([])
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const newObj = {
            ...formData,
            userId: Date.now()
        };
        setSoreData([...storeData, newObj])
        setFormData({
            name: "",
            email: "",
            city: ""
        })
    }
    return (
        <div className='form-container'>
            <form className='form' onSubmit={handleSubmit}>
                <div>
                    <input placeholder='enter name' name='name' onChange={handleChange} value={formData.name} />
                </div>
                <div>
                    <input placeholder='enter email' name='email' onChange={handleChange} value={formData.email} />
                </div>
                <div>
                    <input placeholder='enter city' name='city' onChange={handleChange} value={formData.city} />
                </div>
                <div><button type="submit">Submit</button></div>
            </form>
            <div>
                <div className='card-container'>
                    {
                        storeData.map((ele) => (
                            <div key={ele.index} className='card'>
                                <div>{ele.name}</div>
                                <div>{ele.email}</div>
                                <div>{ele.city}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default UserForm
