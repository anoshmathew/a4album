import React from 'react';
import { motion } from 'framer-motion';

const Modal = ({ setSelectedImg, selectedImg }) => {

  const handleClick = (e) => {
    if (e.target.classList.contains('backdrop') ||e.target.classList.contains('closebutton')) {
      setSelectedImg(null);
    }
  }

  return (
    <div className='modal-main'>
        
        <div>
            <motion.div className="backdrop" onClick={handleClick}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
            <div className='top-icons-main'>
                <div className='closebutton' onClick={handleClick}>
                    <i class="fa-solid fa-xmark fa-2x"></i>
                </div>
            
                
            </div>
            <motion.img className="enlimage"src={selectedImg} alt="enlarged pic" 
                initial={{ y: "-100vh" }}
                animate={{ y: 0 }}
            />
            </motion.div>
        </div>
        
      </div>
   
  )
}

export default Modal;