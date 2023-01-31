import React,{useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import jwt from 'jsonwebtoken';
function TopPayment3() {
 
  const [productList, setProductList] = useState({
    phonenumber: "",
    cardname:"",
    cardnumber:"",
    cvvnumber:"",
    expirydate:"" 
  });
  const navigate = useNavigate();
  const token = localStorage.getItem("token")

  const handlecontinue = async (e) =>{
      var decodedToken = jwt.decode(token);
      if(decodedToken.exp * 1000 < Date.now() ){
          navigate('/');
      } else {
          var response = await axios.get('https://airbnb-backend21.onrender.com/product/get', {
              headers: {
                  "access-token": token
              }
          });
          setProductList(response.data);
          console.log(response.data);
      }
      
  };
return (
<>
    <nav className="navbar navbar-light bg-secondary">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png" width="150" height="45" className="d-inline-block align-top" alt="" style={{marginLeft:"40px",margin:"15px"}}/>
        <div style={{fontSize:"35px", color:"red", marginRight:"50px"}}><b>Explore Your Place To Stay</b></div>
    </nav>
    <h1 style={{ margin:"40px 0px 10px 100px"}}>Request to book</h1>
    <div style={{border: "1px solid black", boxShadow:" 10px 10px 5px #aaaaaa", position:"absolute",top:"180px",right:"50px",width:"500px",left:"750px",height:"450px", padding: "20px", borderRadius: "15px"}} id="sticky">
      <h4 style={{ margin:"40px 10px"}}>Your booking is protected by AirCover</h4>
      <hr style={{ margin:"15px"}} className="col-10"/>
      <div className="container">
         <div className="row">
      <div style={{display: "flex", flexDirection: "column",marginTop:"20px"}} className="col">
         <h6>₹899 x 5 nights</h6></div>
      <div style={{display: "flex",marginTop:"20px",paddingLeft:"120px"}} className="col" >
            <p >₹4,495</p></div>     
    </div> 
    <div className="row">
      <div style={{display: "flex", flexDirection: "column",marginTop:"20px"}} className="col">
         <h6> Cleaning fee</h6></div>
      <div style={{display: "flex",marginTop:"20px",paddingLeft:"120px"}} className="col" >
            <p >₹0</p></div>    
    </div> 
    <div className="row">
      <div style={{display: "flex", flexDirection: "column",marginTop:"20px"}} className="col">
         <h6>Service fee</h6></div>
      <div style={{display: "flex",marginTop:"20px",paddingLeft:"120px"}} className="col" >
            <p >₹0</p></div>     
    </div> 
    <hr style={{ margin:"5px"}} className="col-10"/>
    <div className="row">
      <div style={{display: "flex", flexDirection: "column",marginTop:"20px"}} className="col">
         <h6> Total before taxes</h6></div>
      <div style={{display: "flex",marginTop:"20px",paddingLeft:"120px"}} className="col" >
            <p >₹4,495</p></div>     
    </div> 
   </div>
   </div>

   
   <div style={{width:"550px", margin: "30px 100px"}}  className="container">
    <div className="row">
    <div style={{border: "1px solid black",padding: "15px", borderRadius: "10px"}} className="col-12">
        <label>Country/Region</label><br/>
        <select name="country" style={{border:"0px",width:"500px"}}>
            <option value="">India(+91)</option>
            <option value="">Afghanistan (+93)</option>
            <option value="">Albania (+355)</option>
            <option value="">Algeria (+213)</option>
            <option value="">American Samoa (+1)</option>
            <option value="">Bahamas (+1)</option>
            <option value="">Bahrain (+973)</option>
            <option value="">Bhutan (+975)</option>
            <option value="">Cambodia (+855)</option>
            <option value="">Canada (+1)</option>
            <option value="">Colombia (+57)</option>
            <option value="">Ethiopia (+251)</option>
            <option value="">France (+33)</option>
            <option value="">Georgia (+995)</option>
            <option value="">Greece (+30)</option>
            <option value="">Haiti (+509)</option>
            <option value="">India(+91)</option>
            <option value="">Iceland (+354)</option>
            <option value="">Ireland (+353)</option>
            <option value="">Kenya (+254)</option>
            <option value="">Malaysia (+60)</option>
            <option value="">Monaco (+377)</option>
            <option value="">Morocco (+212)</option>
            <option value="">Northern Mariana Islands (+1)</option>
            <option value="">Panama (+507)</option>
            <option value="">Philippines (+63)</option>
            <option value="">Russia (+7)</option>
            <option value="">Samoa (+685)</option>
            <option value="">Singapore (+65)</option>
            <option value="">South Africa (+27)</option>
            <option value="">Tonga (+676)</option>
            <option value="">Turkmenistan (+993)</option>
            <option value="">Uruguay (+598)</option>
            <option value="">Vietnam (+84)</option>
            <option value="">Western Sahara (+212)</option>
            <option value="">Yemen (+967)</option>
            <option value="">Zambia (+260)</option>
            <option value="">Zimbabwe (+263)</option>
        </select>
    </div>
    <div style={{border: "1px solid black", padding: "15px", borderRadius: "10px"}} className="col-12">
    <input style={{border:"0px",width:"500px"}} type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder="Phone Number" />
    </div>
  </div>
  <p style={{fontSize:"13px"}}>We’ll call or text you to confirm your number. Standard message and data rates apply.</p>
</div>

<h4 style={{ margin:"40px 0px 15px 100px"}}>Payment Details</h4>
<div class="jhh" style={{ display:"flex",flexDirection:"row", margin:"50px 0px"}}>
  <img style={{ marginLeft:"100px"}} src="https://newsroom.mastercard.com/wp-content/uploads/2016/09/paypal-logo.png" className="cardimg" alt="card-img" width="80" height="40"/>
  <img style={{ marginLeft:"30px"}}src="https://d6xcmfyh68wv8.cloudfront.net/blog-content/uploads/2021/12/logo-blog-770x515.png" className="cardimg" alt="card-img" width="80" height="40"/>
  <img style={{ marginLeft:"30px"}}src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Visa.svg/1200px-Visa.svg.png" className="cardimg" alt="card-img" width="80" height="40"/>
  <img style={{ marginLeft:"30px"}}src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9VZnb9Orp1McpUUJLXlBbUEqDqYoGH_0Vgw&usqp=CAU" className="cardimg" alt="card-img" width="100" height="50"/>
  <img style={{ marginLeft:"30px"}}src="https://trak.in/wp-content/uploads/2022/09/Rupay-Cards-Big.jpeg" className="cardimg" alt="card-img" width="80" height="50"/>
</div>

<form  style={{width:"550px", margin: "30px 100px"}} onSubmit={handlecontinue} >
   <div class="form-group">
    <label><b>Name on Card</b></label>
    <input type="text" class="form-control" placeholder="Enter Card Name" value={productList.cardname} onChange={(e) => setProductList({...productList, cardname:e.target.value})}/>
  </div>
  <div class="form-group">
    <label><b>Card Number</b></label>
    <input type="text" class="form-control" placeholder="0000-0000-0000-0000" value={productList.cardnumber} onChange={(e) => setProductList({...productList, cardnumber:e.target.value})}/>
  </div>
  <div class="form-group">
    <label><b>CVV</b></label>
    <input type="text" class="form-control" placeholder="" value={productList.cvvnumber} onChange={(e) => setProductList({...productList, cvvnumber:e.target.value})}/>
  </div>
  <div class="form-group">
    <label><b>Expiry Date</b></label>
    <input type="text" class="form-control" placeholder="MM/YY" value={productList.expirydate} onChange={(e) => setProductList({...productList, expirydate:e.target.value})}/>
  </div>
  <button style={{width:"550px", margin:"15px 2px"}} type="button" className="btn btn-danger">Confirm Payment</button>
</form>

{/* Footer */}

<footer className="bg-secondary text-center">
  <div className="container p-2 pb-0">
    <section className="text-white mb-0">    
      <a className="btn text-white btn-floating m-1" style={{backgroundColor: "blue"}} 
         href="https://www.facebook.com" role="button"><i className="fa fa-facebook-official" aria-hidden="true"></i>
      </a>
     
      <a className="btn text-white btn-floating m-1" style={{backgroundColor: "skyblue"}}  
         href="https://twitter.com" role="button"><i className="fa fa-twitter" aria-hidden="true"></i>
      </a>
      
      <a className="btn text-white btn-floating m-1" style={{backgroundColor: "red"}} 
        href="https://www.google.co.in" role="button"><i className="fa fa-google" aria-hidden="true"></i>
      </a>

      <a className="btn text-white btn-floating m-1" style={{backgroundColor: "violet"}} 
        href="https://www.instagram.com" role="button"><i className="fa fa-instagram" aria-hidden="true"></i>
      </a>
    </section>
  </div>
  <div className="text-white text-center p-2" >© 2022 Airbnb, Inc.</div>
</footer>
</>
);
}
export default TopPayment3;