
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Form from './Form.jsx'; 
import MyForm from './MyForm.jsx'; 
import Uncontrolled from './Uncontrolled'; 
import LoginForm from './LoginForm'; 
import ApiExample from './API/ApiExample.jsx'; 
import ApiManager from './API/ApiManager.jsx'; 

function Home() {
  return <h1>Trang chủ</h1>;
}
function App() {
  return (
    <div className="App">
       <Router>
      <nav>
        <Link to="/">Trang chủ</Link> |{"    "}
        <Link to="/form"> Form</Link>|{"    "}
        <Link to="/myform">My Form</Link>|{"    "}
        <Link to="/uncontrolled">Uncontrolled Form</Link>|{"    "}
        <Link to="/LoginForm">Login Form</Link>|{"    "}
        <Link to="/ApiExample">countries</Link>|{"    "}
        <Link to="/ApiManager">Api Manager</Link>
        
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/myform" element={<MyForm />} />
        <Route path="/uncontrolled" element={<Uncontrolled />} />
        <Route path="/LoginForm" element={<LoginForm />} />
        <Route path="/ApiExample" element={<ApiExample />} />
        <Route path="/ApiManager" element={<ApiManager />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
