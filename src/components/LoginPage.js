import React,{useState} from 'react';
import "./style.css";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

function LoginPage() {
    const navigate = useNavigate();
    const[formData, setFormData] =useState({
        email: "",
        password: ""
    }); 
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.post('https://airbnb-backend21.onrender.com/register/signin', {...formData });
            console.log(response);
            if(response.data) {
                await localStorage.setItem("token", response.data);
                navigate('/new');
            }
            } catch(err) {
            console.log(err);
            }
    };
    const handleSignup = async (e) => {
       navigate('/signup');
    };
return(
    <body>
          <div className="card text-white bg-danger" style={{maxWidth: "600px", margin:"250px auto",textAlign: "center",padding:"25px"}}><b><h1>Welcome to Airbnb !</h1></b>
                  <div className="row no-gutters" >
                      <div className="col-md-6" >
                         <img src="https://www.missafir.com/wp-content/uploads/2018/12/airbnb-yasal-mi-1.jpg" className="card-img" alt="card-img" style={{height:"280px", margin:"20px 10px"}}/>
                      </div>
                     <div className="col-md-6">
                        <div className="card-body">
                          <form onSubmit={handleSubmit}>
                              <label for="email" className="email mb-3"><b>Email</b></label><br/>
                              <input type="email" className="email mb-3" placeholder="name@example.com" 
                                  value={formData.email} onChange={(e) => setFormData({...formData, email:e.target.value})}  /><br/>
  
                              <label for="password" className="password mb-3"><b>Password</b></label><br/>
                              <input type="password" className="password mb-3" placeholder="Password" 
                                 value={formData.password} onChange={(e) => setFormData({...formData, password:e.target.value})}   /><br/>
  
                              <button  type="Login" className="btn btn-primary mb-3" style={{marginLeft:"20px"}} >Login</button><br/>
                          </form>  
                          <div style={{textAlign: "center"}}>Don’t have an account?<button type="button" class="btn btn-link" onClick={handleSignup}>Sign up</button></div> 
                        </div>
                     </div>
                  </div>
          </div>
    </body>   
);
}
export default LoginPage;
