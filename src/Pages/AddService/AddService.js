import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css';

const AddService = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/services', data)
            .then(res => {
                console.log(res);
            })
    };
    return (
        <div className='add-service'>
            <h2>Add a service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("Name", { required: true, maxLength: 20 })} placeholder='name' />
                <textarea {...register("Description")} placeholder='description' />
                <input type="number" {...register("Price")} placeholder="price" />
                <input {...register("img")} placeholder="image url" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;