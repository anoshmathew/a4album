import React from 'react'
import './gallerythumb.scss'

function GalleryThumb({ setSelectedImg }) {
    const imagelist = {
      "hd":[
        {
          location: require('../../img/gallery/wed(1).jpg')
          
      },
      {
        location: require('../../img/gallery/wed (2).jpg')
      },
      {
        location: require('../../img/gallery/wed (3).jpg')
      },  
      {
        location: require('../../img/gallery/wed (4).jpg')
      },  
      {
        location: require('../../img/gallery/wed (5).jpg')
      },  
      {
        location: require('../../img/gallery/wed (7).jpg')
      }, 
      {
        location: require('../../img/gallery/wed (8).jpg')
      },
      {
        location: require('../../img/gallery/wed (9).jpg')
      },
      {
        location: require('../../img/gallery/wed (10).jpg')
      },
      {
        location: require('../../img/gallery/wed (11).jpg')
      },
      {
        location: require('../../img/gallery/wed (12).jpg')
      }, 

      ]
    }
  return (
    <div className='gallery-body'>
      <div className='gallery-main'>
      {
        imagelist.hd.map((item,i) => (
        <div className='image-container' key={i}>
          <a className='aa' onClick={() => setSelectedImg(item.location)}>
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