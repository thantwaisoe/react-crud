import React, { useState, useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import axios from '../api/axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';

function Home() {
  const history = useNavigate()
  const [employee, setEmployee] = useState(null);
  useEffect(() => {
    getAllEmployee()
    .then((res) => setEmployee(res))
    .catch((err) => console.log(err))
  }, []);

  const handleDelete = (id) => {
    deleteEmployee(id)
    .then(() => window.location.reload(false))
  };
  // delete Employee with id
  const deleteEmployee = async(id) => {
    return await axios.delete('/employee/' + id)
  };
  //get all Employee
  const getAllEmployee = async () => {
    const res = await axios.get('/employee');
    return res.data;
  };
  return (
    <>
      <div style={{ margin: '10rem' }}>
        <h1 style={{ display: 'inline', margin: '0 30px 0 0' }}>Employee List</h1>
        <Link to="/add-employee">
          <Button variant="primary" style={{margin: '30px'}}>ADD</Button>
        </Link>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employee && employee.length > 0
              ? employee.map((item, i) => {
                  return (
                    <tr key={i}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.phone}</td>
                      <td>
                        <Button onClick={() => handleDelete(item.id)}>
                          Delete
                        </Button>{' '}
                        &nbsp;
                        <Button onClick={() =>{ history('edit-employee/'+ item.id)}}>Edit</Button>
                      </td>
                    </tr>
                  );
                })
              : 'No data to Display'}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default Home;
