import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import BasicExample from './components/TestTable';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import AddEmploye from './components/AddEmployee';
import EditEmployee from './components/EditEmployee';

function App() {
  return (
    <div className="App">
       <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/add-employee' element={<AddEmploye/>} />
          <Route path='/edit-employee/:id' element={<EditEmployee/>} />
        </Routes>
       </Router>
    </div>
  );
}

export default App;
