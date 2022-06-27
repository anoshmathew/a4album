import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Modal = ({ imagelist, setSelectedImg, selectedImg}) => {

  const handleClick = (e) => {
    if (e.target.classList.contains('backdrop') || e.target.classList.contains('closebutton') || e.target.classList.contains('fa-xmark') ) {
      setSelectedImg(null);
    } 
  }
  function handleNext(){
    var a = imagelist.hd.filter(item => item.no === selectedImg.no+1);
    //console.log(a[0])
    //console.log(selectedImg)
    setSelectedImg(a[0])
    }
  
    function handlePrev(){
        var a = imagelist.hd.filter(item => item.no === selectedImg.no-1);
        //console.log(a[0])
        //console.log(selectedImg)
        
        setSelectedImg(a[0])
        }
        
    
  

  return (
    <div className='modal-main'>
        
        <div>
            <motion.div className="backdrop" onClick={handleClick}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
            <div className='gallery-icons-main'>
                <div className="closebutton" onClick={handleClick}>
                    <i className="fa-solid fa-xmark fa-2x"></i>
                </div>
                <div className="nextbutton" onClick={handleNext}>
                    <i className="fa-solid fa-angle-right fa-2x" onClick={handleNext}></i>
                </div>
                <div className="prevbutton" onClick={handlePrev}>
                    <i className="fa-solid fa-angle-left fa-2x" onClick={handlePrev}></i>
                </div>
                
            
                
            </div>
            <motion.img className="enlimage"src={selectedImg.location} alt="enlarged pic" 
                initial={{ y: "-100vh" }}
                animate={{ y: 0 }}
            />
            </motion.div>
        </div>
        
      </div>
   
  )
}

export default Modal;