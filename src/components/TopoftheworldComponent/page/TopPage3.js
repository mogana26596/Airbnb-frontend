import React, { useState } from 'react';
import SimpleImageSlider from "react-simple-image-slider";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function TopPage3() {

 const [date, setDate] = useState([new Date(2023, 11, 6),
 new Date(2023, 11, 11)] );
 const images =[
   { "url": "https://a0.muscache.com/im/pictures/2e59c7d2-3766-42cb-ba86-9958cbe307bc.jpg?im_w=1200" },
   { "url": "https://a0.muscache.com/im/pictures/20c47e50-644f-4a3e-9193-80d11b5b1904.jpg?im_w=720" },
   { "url": "https://a0.muscache.com/im/pictures/b385cedf-ab3a-4037-afc1-40b33da9fab1.jpg?im_w=1200" },
   { "url": "https://a0.muscache.com/im/pictures/effa45d0-9d5a-4d9b-a7f9-96f068fab14c.jpg?im_w=720" },
   { "url": "https://a0.muscache.com/im/pictures/5acb1ab1-0f2c-4eed-a367-5356ac0172fe.jpg?im_w=1200" },
   { "url": "https://a0.muscache.com/im/pictures/a6efc32e-9fae-408a-b675-31b2cd13e552.jpg?im_w=720" },
   { "url": "https://a0.muscache.com/im/pictures/e40b0c42-83a8-4ce1-8de9-b1a16550b36a.jpg?im_w=1200" },
   { "url": "https://a0.muscache.com/im/pictures/84a218a9-551a-4bea-b1ce-6ab063731b93.jpg?im_w=720" },
   { "url": "https://a0.muscache.com/im/pictures/03103742-2132-40cb-aadd-766b91c30189.jpg?im_w=1200" },
   { "url": "https://a0.muscache.com/im/pictures/1357150e-10f9-424b-83f5-5377b640dcd4.jpg?im_w=720" },
   { "url": "https://a0.muscache.com/im/pictures/ddaefb58-4ba8-4573-8f71-e570087113d4.jpg?im_w=1200" }
 ]
     const [counter, setCounter] = useState(1);
     const incrementCounter = () => { 
      if(counter<10) {
         setCounter(counter + 1);
      }
   };
     let decrementCounter = () => { 
      if(counter>1) {
         setCounter(counter - 1);
      }
   };
   const [counter1, setCounter1] = useState(0);
   const AddCounter = () => { 
    if(counter1<9) {
       setCounter1(counter1 + 1);
    }
 };
   let MinusCounter = () => { 
    if(counter1>0) {
       setCounter1(counter1 - 1);
    }
 };
 const [count, setCount] = useState(0);
 const AddCount = () => { 
  if(count<5) {
     setCount(count + 1);
  }
};
 let MinusCount = () => { 
  if(count>0) {
     setCount(count - 1);
  }
};

 const handlesubmit=(e)=>{
    e.preventDefault();
    var options={
        key:"rzp_test_7Ufao8ZnpRzVZq",
        key_secret:"L7kmIC11vJcDVttHDMimF7zm",
        amount:"4495"*100,
        currency:"INR",
        name:"Your booking is protected by Airbnb",
        description:"For testing purpose",
        handler:function(response){
          alert(response.razorpay_payment_id);
        },
        prefill:{
          name:"aababab",
          email:"aaa@gmail.com",
          contact:"7878666787"
        },
        roles:{
          address:"Razorpay corporate office"
        },
        theme:{
          color:"red"
        }
      };
      var pay=new window.Razorpay(options);
      pay.open();
    }
  

return (
<>
    <nav className="navbar navbar-light bg-secondary">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png" width="150" height="45" className="d-inline-block align-top" alt="" style={{marginLeft:"40px",margin:"15px"}}/>
        <div style={{fontSize:"35px", color:"red", marginRight:"50px"}}><b>Explore Your Place To Stay</b></div>
    </nav>
    <h3 style={{ margin:"40px 0px 10px 100px"}}>Zostel Sissu | Bed in 6 Bed Mixed Dorm</h3>
    <div style={{ color: "orange", marginLeft:"100px"}}>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span> <b>5.0</b>
    </div>
    <div style={{ margin:"40px 0px 20px 100px"}}>
       <SimpleImageSlider
        width={1200}
        height={600}
        images={images}
        showBullets={true}
        showNavs={true}
        navSize={40}
        autoPlay={true}
        />
    </div>
   
   
   <div style={{display: "flex"}} class="col2">
   <div class="col2fdd">
     <h4 style={{ margin:"40px 0px 15px 100px"}}>Shared room in hostel hosted by Dharamveer Singh</h4>
    <ul style={{ marginLeft:"80px",display:"flex",columnGap:"20px"}}>
    <li>1 guests</li>
        <li>1 bedrooms</li>
        <li>2 beds</li>
        <li>1 bathrooms</li>
    </ul>
    <hr style={{ marginLeft:"100px"}} class="col-8"/>
    <div class="row">
       <div style={{ marginLeft:"115px"}} class="col-sm-0">
         <i class="fa fa-certificate fa-2x" aria-hidden="true"></i>
       </div>
       <div class="col-8">
       <p><b>Dharamveer Singh is a Superhost</b></p>
        <p>Superhosts are experienced, highly rated hosts who are committed to providing great stays for their guests.</p>
       </div>
    </div>
    <div class="row">
       <div style={{ marginLeft:"115px"}} class="col-sm-0">
       <i class="fa fa-key fa-2x" aria-hidden="true"></i>
       </div>
       <div class="col-8">
        <p><b>Great check-in experience</b></p>
        <p>100% of recent guests gave the check-in process a 5-star rating.</p>
       </div>
    </div>
    <div class="row">
       <div style={{ marginLeft:"115px"}} class="col-sm-0">
       <i class="fa fa-calendar-check-o fa-2x" aria-hidden="true"></i>
       </div>
       <div class="col-8">
        <p>Free cancellation for 48 hours.</p>
       </div>
    </div>
    <hr style={{ marginLeft:"100px"}} class="col-8"/>

    {/* aircover */}
    <img src="https://a0.muscache.com/im/pictures/54e427bb-9cb7-4a81-94cf-78f19156faad.jpg" alt="aircover" width="130" height="28" style={{ marginLeft:"100px"}}/>
    <div style={{ marginLeft:"85px",marginTop:"15px",marginBottom:"15px"}} class="col-8">Every booking includes free protection from Host cancellations, listing inaccuracies, and other issues like trouble checking in.</div>
    <div class="row">
      <div class="col-sm-4" style={{ marginLeft:"100px"}}>
        <p><b>Booking Protection Guarantee</b></p>
        <p style={{ textAlign: "justify"}}>In the unlikely event that a Host needs to cancel your booking within 30 days of check-in, we’ll find you a similar or better home or we’ll refund you.</p>
      </div>
      <div class="col-sm-4" style={{ marginLeft:"50px"}}>
        <p><b>Check-In Guarantee</b></p>
        <p style={{ textAlign: "justify"}}>If you can’t check into your home and the Host cannot resolve the issue, we’ll find you a similar or better home for the length of your original stay or we’ll refund you.</p>
      </div>
    </div>
    <div class="row">
       <div class="col-8 col-sm-4" style={{ marginLeft:"100px"}}>
        <p><b>Get-What-You-Booked Guarantee</b></p>
        <p style={{ textAlign: "justify"}}>If at any time during your stay you find your listing isn't as advertised – for example, the refrigerator stops working and your Host can’t easily fix it, or it has fewer bedrooms than listed – you'll have three days to report it and we’ll find you a similar or better home, or we’ll refund you.</p>     
       </div>
       <div class="col-8 col-sm-4" style={{ marginLeft:"50px"}}>
        <p><b>24-hour Safety Line</b></p>
        <p style={{ textAlign: "justify"}}>If you ever feel unsafe, you’ll get priority access to specially trained safety agents, day or night.</p>
       </div>
    </div>
    <hr style={{ marginLeft:"100px"}} class="col-8"/>

    {/* About the space */}
    <div class="col-9" style={{ marginLeft:"90px"}}>
    <h4>About the space</h4>
    <p>Relax with the whole family at this peaceful 5 Bedroom Villa overlooking Hout Bay Beach</p>
    <p>** LOADSHEDDING BACK UP FROM DEC ONWARDS *</p>
    <p>5 BEDROOMS – 3 BATHROOMS</p>
    <p>This spacious modern family home boasting 5 bedrooms. The main bedroom ( en-suite) has a king-size bed, the remaining four bedrooms have queen-sized beds.</p>
    <p>Open plan kitchen and lounge area with fire place overlooking the mountains.</p>
    <p>The kitchen is fully equipped.</p>
    <p><b>The space</b></p>
    <p>There is an outdoor pizza oven, BBQ grill, large garden and swimming pool.</p>
    <p>Main Bedroom - King size bed (ensuite)</p>
    <p>Remaining 4 Bedrooms do have Queen size beds and share 2 bathrooms</p>
    <p>Housekeeping included from Monday to Friday</p>
    </div>
    <hr style={{ marginLeft:"100px"}} class="col-8"/>

    {/* What this place offers */}
    <h4 style={{ marginLeft:"100px"}}>What this place offers</h4>
    <div class="row">
       <div class="col-6 col-sm-3" style={{ marginLeft:"100px"}}>
        <p><i class="fa fa-picture-o" aria-hidden="true"></i>   Bay view</p>
       </div>
       <div class="col-6 col-sm-3" style={{ marginLeft:"100px"}}>
        <p><i class="fa fa-sun-o" aria-hidden="true"></i> Beach view</p>
       </div>
    </div>
    <div class="row">
       <div class="col-6 col-sm-3" style={{ marginLeft:"100px"}}>
        <p><i class="fa fa-cutlery" aria-hidden="true"></i> Kitchen</p>
       </div>
       <div class="col-6 col-sm-3" style={{ marginLeft:"100px"}}>
        <p><i class="fa fa-wifi" aria-hidden="true"></i> Wifi</p>
       </div>
    </div>
    <div class="row">
       <div class="col-6 col-sm-3" style={{ marginLeft:"100px"}}>
        <p><i class="fa fa-car" aria-hidden="true"></i> Free parking on premises</p>
       </div>
       <div class="col-6 col-sm-3" style={{ marginLeft:"100px"}}>
        <p><i class="fa fa-map" aria-hidden="true"></i> Pool</p>
       </div>
    </div>
    <div class="row">
       <div class="col-6 col-sm-3" style={{ marginLeft:"100px"}}>
        <p><i class="fa fa-television" aria-hidden="true"></i> HDTV</p>
       </div>
       <div class="col-6 col-sm-3" style={{ marginLeft:"100px"}}>
        <p><i class="fa fa-shower" aria-hidden="true"></i> Outdoor shower</p>
       </div>
    </div>
    <hr style={{ marginLeft:"100px"}} class="col-6"/>

    {/* Select checkout date */}
    <h4 style={{ marginLeft:"100px"}}>Select checkout date</h4>
    <p style={{ marginLeft:"100px"}}>Minimum stay: 5 nights</p>
    
    <div style={{ marginLeft:"100px"}}>
     <Calendar onChange={setDate} value={date} showDoubleView={true} selectRange={true}/>
     {date.length > 0 ? (
   <p><br/>
   <span><b>CHECK-IN:</b></span>{' '} {date[0].toDateString()}
   <br/><br/>
   <span><b>CHECK-OUT:</b></span> {date[1].toDateString()}
 </p> ): (
         <p></p>
         )}
   </div>
   </div>   


   <div style={{border: "1px solid black", backgroundColor: "white", boxShadow:" 10px 10px 5px #aaaaaa",position:"sticky",top:"50px",right:"100px",width:"375px",left:"800px",height:"600px", padding: "20px", borderRadius: "15px"}} id="col1">
      <h4 style={{padding: "12px 10px"}}>₹899 night</h4>
    <div class="container">
      <div class="row">
         <div style={{border: "1px solid black",width:"350px",height:"60px"}} class="col-11">
         {date.length > 0 ? (
   <p style={{padding: "5px 10px"}}>
     <span><b>CHECK-IN:</b></span>{' '} {date[0].toDateString()}
     <br/>
     <span><b>CHECK-OUT:</b></span> {date[1].toDateString()}
   </p> ): (
        <p></p>
         )}
            </div>
      </div>
      <div class="row">
         <div style={{border: "1px solid black",height:"230px",padding:"15px 25px"}} class="col-11">
          <div class="row">
           <div style={{display: "flex", flexDirection: "column"}} class="col">
            <h5>Adults</h5>
            <p >Age 13+</p></div>
            <div style={{display: "flex"}} class="col" >
            <button style={{height:"30px",width:"30px",padding:"2px"}} type="button" class="btn btn-outline-primary" onClick={incrementCounter}>+</button>  
            <div style={{margin: "0px 10px"}}>{counter}  </div>
            <button style={{height:"30px",width:"30px",padding:"2px"}} type="button" class="btn btn-outline-primary" onClick={decrementCounter}>-</button>
            </div>
            </div> 
            <div class="row">
           <div style={{display: "flex", flexDirection: "column"}} class="col">
            <h5>Children</h5>
            <p >Ages 2–12</p></div>
            <div style={{display: "flex"}} class="col" >
            <button style={{height:"30px",width:"30px",padding:"2px"}} type="button" class="btn btn-outline-primary" onClick={AddCounter}>+</button>  
            <div style={{margin: "0px 10px"}}>{counter1}  </div>
            <button style={{height:"30px",width:"30px",padding:"2px"}} type="button" class="btn btn-outline-primary" onClick={MinusCounter}>-</button>
            </div>
            </div> 
            <div class="row">
           <div style={{display: "flex", flexDirection: "column"}} class="col">
            <h5>Infants</h5>
            <p >Under 2</p></div>
            <div style={{display: "flex"}} class="col" >
            <button style={{height:"30px",width:"30px",padding:"2px"}} type="button" class="btn btn-outline-primary" onClick={AddCount}>+</button>  
            <div style={{margin: "0px 10px"}}>{count}  </div>
            <button style={{height:"30px",width:"30px",padding:"2px"}} type="button" class="btn btn-outline-primary" onClick={MinusCount}>-</button>
            </div>
            </div> 
           </div>
      </div>
    </div>
    <button style={{width:"320px", margin:"15px 3px"}} type="button" class="btn btn-danger" onClick={handlesubmit}>Reserve</button>
    <div class="row">
      <div style={{display: "flex", flexDirection: "column", padding:"3px 30px"}} class="col">
         <h6>₹899 x 5 nights</h6></div>
      <div style={{display: "flex"}} class="col" >
            <p >₹4,495</p></div>     
    </div> 
    <div class="row">
      <div style={{display: "flex", flexDirection: "column", padding:"3px 30px"}} class="col">
         <h6> Cleaning fee</h6></div>
      <div style={{display: "flex"}} class="col" >
            <p >₹0</p></div>    
    </div> 
    <div class="row">
      <div style={{display: "flex", flexDirection: "column", padding:"3px 30px"}} class="col">
         <h6>Service fee</h6></div>
      <div style={{display: "flex"}} class="col" >
            <p >₹0</p></div>     
    </div> 
    <hr style={{ margin:"0px"}} class="col-10"/>
    <div class="row">
      <div style={{display: "flex", flexDirection: "column", padding:"3px 30px"}} class="col">
         <h6> Total before taxes</h6></div>
      <div style={{display: "flex"}} class="col" >
            <p >₹4,495</p></div>     
    </div> 
   </div>
</div>


{/* Review */}
<hr style={{ marginLeft:"100px"}} class="col-10"/>
<div style={{marginLeft:"100px", display:"flex",columnGap:"10px", fontSize:"20px"}}>
        <span class="fa fa-star checked"></span>
        <b>5.0</b><ul ><li >5 reviews</li></ul>
</div>
   <div class="row">
       <div style={{ marginLeft:"100px"}} class="col-2">Cleanliness</div>
       <div class="col-2" style={{marginRight:"60px"}}>
         <progress  style={{ margin:"10px"}} id="file" max="100" value="100"></progress>
       </div>
       <div class="col-1">5.0</div>
       <div class="col-2">Accuracy</div>
       <div class="col-2" style={{marginRight:"60px"}}>
         <progress  style={{ margin:"10px"}} id="file" max="100" value="100"></progress>
       </div>
       <div class="col-1">5.0</div>
   </div>

   <div class="row">
       <div style={{ marginLeft:"100px"}} class="col-2">Communication</div>
       <div class="col-2" style={{marginRight:"60px"}}>
         <progress  style={{ margin:"10px"}} id="file" max="100" value="100"></progress>
       </div>
       <div class="col-1">5.0</div>
       <div class="col-2">Location</div>
       <div class="col-2" style={{marginRight:"60px"}}>
         <progress  style={{ margin:"10px"}} id="file" max="100" value="100"></progress>
       </div>
       <div class="col-1">4.4</div>
   </div>

   <div class="row">
       <div style={{ marginLeft:"100px"}} class="col-2">Check-in</div>
       <div class="col-2" style={{marginRight:"60px"}}>
         <progress  style={{ margin:"10px"}} id="file" max="100" value="100"></progress>
       </div>
       <div class="col-1">5.0</div>
       <div class="col-2">Value</div>
       <div class="col-2"style={{marginRight:"60px"}}>
         <progress  style={{ margin:"10px"}} id="file" max="100" value="100"></progress>
       </div>
       <div class="col-1">5.0</div>
   </div>

   <div class="row">
      <div style={{ marginLeft:"100px", textAlign: "justify",marginRight:"60px", marginTop:"30px"}} class="col-5">
         <h5>Lydia</h5>
         <p>Jen was a wonderfully responsive and helpful host and Thandi, who did housekeeping was a marvel. We tried to be respectful and do most of own cleaning but for such w big group having help made our lives a lot easier. I would highly recommend this place.</p>
      </div>
      <div style={{ textAlign: "justify",marginRight:"50px", marginTop:"30px"}} class="col-5">
         <h5>Zimkitha</h5>
         <p>The pictures don't do any justice to how beautiful the villa is.Jen welcomed us with such warm hands even though we were late.There was also complimentary wine on arrival and pizza as well.The house was fully equipped.</p>
         <p>Absolutely beautiful stay, thank you Jen for being such a great host❤️. </p>
      </div>
   </div>

   <div class="row">
      <div style={{ marginLeft:"100px", textAlign: "justify",marginRight:"50px"}} class="col-5">
         <h5>Thokozani</h5>
         <p>Beautiful place, tranquil and Jenny is a great host. Really enjoyed our group stay.</p>
      </div>
      <div style={{ textAlign: "justify",marginRight:"50px"}} class="col-5">
         <h5>Craig</h5>
         <p>Greta value, great spot, well kept and great value for money. The VIEW is INCREDIBLE - !</p>
      </div>
   </div>

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
export default TopPage3;