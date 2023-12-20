import React from 'react';
import "./Under.css";
// import Rectangle from "../../src/assets/Rectangle.png";
import barchart2 from "../../src/assets/barchart2.jpg";
import lineChart from "../assets/lineChart.jpg";
import bar from "../assets/bar.jpg";
import Groupp from "../assets/Groupp.jpg";
import Rectangle53 from "../assets/Rectangle53.jpg"

const Under = () => {
  return (
    <div className='dash'>
      <p>Dashboard</p>
      <p className='happy'> Welcome back, Adegoke Happy </p>
      <br></br>
      <div className='bars'>
        <div className='im'><div className='bam'><img src={barchart2} alt="worker"/></div></div>  <div className='im'><div className='bam'><img src={lineChart} alt="worker"/></div> </div> <div className='im'><div className='bam'><img src={bar} alt="worker"/></div> </div> <div className='im'><div className='bamlast'><img src={Groupp} alt="worker"/> </div></div>  
      </div>
      <p>Inventory items:</p>
      <div className='camera'><img src={Rectangle53} alt="worker"/></div>
      <p>Movie Projector 1</p>
      <div className='hr'><hr></hr></div>

      </div>
  )
}

export default Under