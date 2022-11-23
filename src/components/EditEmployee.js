import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from '../api/axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function EditEmployee() {
  const { id } = useParams();
//   const [employee, setEmployee] = useState(null);
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const history = useNavigate()
   useEffect(() => {
    axios.get('/employee/' + id).then((res) => {
        setName(res.data.name);
        setEmail(res.data.email);
        setPhone(res.data.phone);
    });
  }, [id]);
  const handleEdit = (e) => {
    e.preventDefault();
    // console.log(name);
    // console.log(email);
    // console.log(phone);
    axios.put('/employee/' + id, {name, email, phone})
    .then(() => history('/'))
  };
  return (
    <div style={{width: '300px', margin: '100px 40% 0 40%'}}>
      <h1>Edit Employee</h1>
      <Form>
        {/* Name */}
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
        {/* Email */}
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        {/* phone */}
        <Form.Group className="mb-3" controlId="formPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)}/>
        </Form.Group>
        <Button onClick={(e) => handleEdit(e)} variant="primary" type="submit">
          Edit
        </Button>
      </Form>
    </div>
  );
}

export default EditEmployee;
