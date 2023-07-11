import React from 'react';
import "./Widgets.css";
// import Info from '@mui/icons-material/Info';
// import FiberManualRecord from '@mui/icons-material/FiberManualRecord';
import { FiberManualRecordRounded, InfoRounded } from '@mui/icons-material';

function Widgets() {

    const newsArticle=(heading,subtitle)=>(
        <div className="widget_article">
            <div className="widget_left">
                <FiberManualRecordRounded/>
                
                </div>

                <div className="widget_right">

                   <span className='one'>{heading } <br/></span> 
                    {subtitle}
                    
                    
                    </div>
            </div>
    )
  return (
    <div className='widgets'>
        <div className="widgets_header">
            <h2> Linkedin News</h2>
            
            <InfoRounded />
            </div>
            {newsArticle("Pakistan Cricket is Back", "Top news of 2022")}
            {newsArticle(" PMLN & PPP joins Hands to demolish IK", "Source Geo News")}
      
            {newsArticle("Elon musk launching another missile", "Elon musk shining star")}
      
            {newsArticle("Immigration process gets halted due to covid rise", "Top news of 2022")}
      
            {newsArticle("Man killed his daughter over dispute", "Bahawalpur ")}
      
       
      
       
      
      
    </div>
  )
}

export default Widgets