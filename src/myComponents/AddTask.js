import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { useForm } from "react-hook-form";


export default function AddTask(props) { 

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

    const submitForm = (data) => {
        props.add(data)
    }
    return (
        <>
        <h2 style={{textAlign: "center"}}>Add Task</h2>
        <Container className='w-50'>
        <Form onSubmit={handleSubmit(submitForm)}>
        <Form.Group className="mb-3">
          <Form.Label>Task Title</Form.Label>
          <Form.Control {...register("title", { required: "Title is required" })} type="text" placeholder="Enter Title"/>
          {errors.title && <p>{errors.title.message}</p>}

        </Form.Group>
  
        <Form.Group className="mb-3">
          <Form.Label>Task Description</Form.Label>
          <Form.Control {...register("desc", { required: "Description is required" })} type="text" placeholder="Enter Description"/>
          {errors.desc && <p>{errors.desc.message}</p>}

        </Form.Group>
        
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </Container>
      </>
    )
}
