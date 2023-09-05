import React from 'react';
import "./style.css";
import {useNavigate} from 'react-router-dom';

function SignupPage() {
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
      e.preventDefault();
      alert("Registered Successfully!!"); 
      navigate('/new');
      }
return(
  <body>
        <div className="card text-white bg-danger" style={{maxWidth: "800px", margin:"100px auto"}}>
                <div className="row no-gutters">
                    <div className="col-md-6">
                       <img src="https://www.missafir.com/wp-content/uploads/2018/12/airbnb-yasal-mi-1.jpg" className="card-img" alt="card-img" style={{height:"350px", margin:"120px 25px"}}/>
                    </div>
                   <div className="col-md-6">
                      <div className="card-body">
                        <h2 className="card-title" style={{textAlign: "center"}}>Welcome to Airbnb !</h2>
                        <form onSubmit={handleSubmit}>
                          <div className="mb-4"style={{marginTop:"20px", textAlign: "center"}}>

                            <label for="name" className="name mb-3"><b>Name</b></label><br/>
                            <input type="name" className="name mb-3" placeholder="Enter Name"/><br/>

                            <label for="mobileNumber" className="mobileNumber mb-3"><b>Mobile Number</b></label><br/>
                            <input type="mobileNumber" className="mobileNumber mb-3" placeholder="Mobile Number" /><br/>

                            <label for="email" className="email mb-3"><b>Email Address</b></label><br/>
                            <input type="email" className="email mb-3" placeholder="name@example.com" /><br/>
                                                                  
                            <label for="password" className="password mb-3"><b>Password</b></label><br/>
                            <input type="password" className="password mb-3" placeholder="Password"/><br/>

                            <label for="Password" className="confirmPassword mb-3"><b>Confirm Password</b></label><br/>
                            <input type="Password" className="confirmPassword mb-3" placeholder="confirmPassword"/><br/>

                            <button  type="SignUp" className="btn btn-primary mb-3" style={{marginLeft:"20px"}}>Sign Up</button><br/>
                          </div>
                        </form>  
                      </div>
                   </div>
                </div>
        </div>
  </body>   
);
}
export default SignupPage;
