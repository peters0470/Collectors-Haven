import React, { useState } from "react";


import linkedinIcons from '../../assets/icons/linkedin.png'
import githubIcons from '../../assets/icons/github.png'

import photo0 from '../../assets/dev-img/0.jpg'
import photo1 from '../../assets/dev-img/1.jpg'
import photo2 from '../../assets/dev-img/2.jpg'
import photo3 from '../../assets/dev-img/3.JPG'
import photo4 from '../../assets/dev-img/4.jpg'
import photo5 from '../../assets/dev-img/5.jpeg'

const Footer = (props) => {
  
 const {developers}=props;
  
 const photos = [photo0,photo1,photo2,photo3,photo4,photo5]

  
  return (
    <footer>
     <div className='dev-container'>
       <h1>
         
       </h1>
       {developers.map(( developer, i)=>(   
   <div className='dev-info-container'>
       
      <div className='dev-image-container'>
      
      <h1 className='dev-name'>{developer.name}</h1>
      <img src={photos[i]} alt={developer.name} className='dev-img' key={developer.id} />
      </div>
      <a href={developer.linkedin} alt='linkedin' target='_blank'><img src={linkedinIcons}  key={developer.id} alt='linkedin' className='linkedin-icon'/></a>
      <a href={developer.github} alt='github' target='_blank'><img src={githubIcons} alt='github' key={developer.id} className='linkedin-icon'/></a>
     
   </div>
     
     ))}
     
     </div>
     <p style={{ fontFamily: 'Quicksand' }}>&copy; 2021 Collectors Haven, Inc.</p>
    </footer>
  );
};

export default Footer;















