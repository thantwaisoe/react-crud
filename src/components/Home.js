import React, { useState, useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import Employee from './Employee';
import axios from '../api/axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Home() {
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    const allEmployee = async () => {
      const employee = await getAllEmployee();
      if (employee) setEmployee(employee);
    };
    allEmployee();
  }, []);

  const handleDelete = (id) => {};
  //get all Employee
  const getAllEmployee = async () => {
    const res = await axios.get('/employee');
    return res.data;
  };
  return (
    <>
      <div style={{ margin: '10rem' }}>
        <h1 style={{display: 'inline'}}>Employee List</h1>
        <div>
          <Link to="/add-employee">
            <Button variant="primary">ADD</Button>
          </Link>
        </div>
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
                        <Button onClick={() => alert(item.id)}>Edit</Button>
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
