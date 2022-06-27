import React from 'react'
import './gallerythumb.scss'

function GalleryThumb({ setSelectedImg ,imagelist}) {
  
  return (
    <div className='gallery-body'>
      <div className='gallery-main'>
      {
        imagelist.hd.map((item,i) => (
        <div className='image-container' key={i}>
          <a className='aa' onClick={() => setSelectedImg(item)}>
            <img className='image'src={item.location} alt="Book" />
          </a>
        </div>
        ))
      }
    </div>
    </div>
    
  );
}

export default GalleryThumb