import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";
import Topbar from '../Topbar';
import Footer from '../Footer';
var products = require('../AdaptedComponent/Adaptedproducts.json');

function AdaptedPage() {
return (
<>
 <Topbar/>
   <div style={{margin:"50px"}} className="row row-cols-1 row-cols-md-3 g-3" >
   {products.map((row) => (
    <div style={{marginBottom:"30px"}} key={row.id}>
    <div className="col">
    <div className="card h-70">
      <SimpleImageSlider
        width={550}
        height={400}
        images={row.images}
        showBullets={true}
        showNavs={true}
        navSize={40}
      />
      <div className="card-body">
      <a style={{fontSize:"20px",marginLeft:"15px"}}href={row.link} target="_blank" rel="noreferrer" ><b>{row.Name}</b></a><br />
        <p style={{marginLeft:"15px"}} className="text-muted">{row.update}</p>
        <p style={{marginLeft:"15px"}} className="text-muted">{row.available}</p>
        <p style={{marginLeft:"15px"}}><b>{row.amount}</b></p>
      </div>
    </div>
  </div>
  </div> 
  ))}
  </div>
 <Footer/>
</>
);
}
export default AdaptedPage;