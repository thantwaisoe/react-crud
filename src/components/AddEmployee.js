import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import{useState} from 'react'
import axios from '../api/axios';
import { useNavigate } from 'react-router-dom';

function AddEmploye() {
  const history = useNavigate();
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")

  const addEmploye = async(name, email, phone) =>{
     return await  axios.post('/employee',{name, email, phone});

  }
  
  const handleAdd = (e) => {
    e.preventDefault();
    addEmploye(name, email, phone)
    .then(() =>
       history('/')
    )
    .catch((err) => console.log(err))
  
  }
  return (
    <div style={{width: '300px', margin: '100px 40% 0 40%'}}>
       <h2>Add Employee</h2>
      <Form>
        {/* Name */}
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" onChange={(e) => setName(e.target.value)} />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
        {/* Email */}
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        {/* phone */}
        <Form.Group className="mb-3" controlId="formPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="text" placeholder="Phone" onChange={(e) => setPhone(e.target.value)}/>
        </Form.Group>
        <Button onClick={(e) => handleAdd(e)} variant="primary" type="submit">
          ADD
        </Button>
      </Form>
    </div>
  );
}

export default AddEmploye;
