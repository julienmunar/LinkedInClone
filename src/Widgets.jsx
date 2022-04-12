import React from 'react'
import './widgets.css'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const Widgets = () => {
    const newsArticle=(heading, subtitle)=>(
    <div className='widgets_article'>
        <div className='widgets__articleLeft'>
            <FiberManualRecordIcon/>    
        </div>

        <div className='widgets__articleRight'>
           <h4>{heading}</h4>
           <p>{subtitle}</p>    
        </div>


    </div>)
  return (
    <div className='widgets'>
        <div className="widgets__headers">
            <h2>LinkedIn News</h2>
            <InfoIcon/>
            </div>
        {newsArticle("Papap Reacct is back","Top News -9099 readers")}
        {newsArticle("Coronavirus: UK Updates","Top News -905 readers")}
        {newsArticle("Tesla is back","Top News -9099 readers")}
        {newsArticle("Bitcoins Bracks $22 dollars ","Top News -11K readers")}
        {newsArticle("Julo is back","Top News -1.1M readers")}
        </div>
  )
}

export default Widgets