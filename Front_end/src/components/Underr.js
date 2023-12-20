import React from 'react';
import "./Underr.css";
import barchart2 from "../assets/barchart2.jpg";
import lineChart from "../assets/lineChart.jpg";
import bar from "../assets/bar.jpg";
import Groupp from "../assets/Groupp.jpg";


const Underr = () => {
  return (
    <div className='dashs'>
      <p>Dashboard</p>
      <p className='happys'> Welcome back, Adegoke Happy </p>
      <br></br>
      <div className='barss'>
        <div className='ims'><div className='bams'><img src={barchart2} alt="worker"/></div></div>  <div className='ims'><div className='bam'><img src={lineChart} alt="worker"/></div> </div> <div className='ims'><div className='bam'><img src={bar} alt="worker"/></div> </div> <div className='ims'><div className='bamlasts'><img src={Groupp} alt="worker"/> </div></div>  
      </div>
      <p>Inventory items:</p>
      <p className='happys'><i>No product has been uploaded</i></p>

      </div>
    
  )
}

export default Underr