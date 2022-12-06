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
        <div className="card mb-3" style={{maxWidth: "800px", margin:"100px auto",border:"20px solid rgb(252, 89, 89)"}}>
                <div className="row no-gutters" style={{margin:"30px"}}>
                    <div className="col-md-6" style={{marginTop:"170px"}}>
                       <img src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2014/07/Symbol.jpg?auto=format&q=60&fit=max&w=930" className="card-img" alt="card-img"/>
                    </div>
                   <div className="col-md-6">
                      <div className="card-body">
                        <h2 className="card-title" style={{textAlign: "center"}}>Welcome to Airbnb</h2>
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
