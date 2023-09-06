import React from 'react'
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
import Axios from 'axios'
import { useState } from 'react';
import './styles.css'
import { toast } from 'react-toastify';

function FormComponent() {

    const [name, setName] = useState('')
    const [phone,setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const userDetails = {
            name:name,
            phone:phone,
            email:email,
            message:message
        }
        Axios.post('https://portfolio-backend-4dtr.onrender.com/user/sendProposal',userDetails)
            .then((res)=>{
                toast.success(res.data.message)
                setTimeout(() => {
                    window.location.href = '/'
                },2000)
            })
            .catch((err)=>{
                toast.error(err.response.data.data)
            })
    }

    return (
        <div>
            <form className='portfolio-form' onSubmit={handleSubmit}>
                <input type='text' onChange={(e)=>setName(e.target.value)} value={name} required placeholder='Enter Your Name' id='name' />
                <div className='portfolio-form-tel'>
                    <input type='number' onChange={(e)=>setPhone(e.target.value)} value={phone} placeholder='Enter Your Phone Number' id='phone' />
                    <p>(optional)</p>
                </div>
                <input type='email' onChange={(e)=>setEmail(e.target.value)} value={email} required placeholder='Enter Your Email' id='email' />
                <textarea id="msg" onChange={(e)=>setMessage(e.target.value)} value={message} placeholder='Enter Your Message Here:' required />
                <button type='submit'>Send</button>
            </form>
        </div>
    )
}

export default FormComponent
