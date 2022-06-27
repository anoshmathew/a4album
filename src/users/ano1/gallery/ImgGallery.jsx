import Modal  from './globalgallery/Modal';
import React,{useState,useEffect} from 'react'
import GalleryThumb from './globalgallery/GalleryThumb';

function ImgGallery() {
  const imagelist = {
    "hd":[
      {
        location: require('../img/gallery/wed(1).jpg'),
        no:1
    },
    {
      location: require('../img/gallery/wed (2).jpg'),
      no:2
    },
    {
      location: require('../img/gallery/wed (3).jpg'),
      no:3
    },  
    {
      location: require('../img/gallery/wed (4).jpg'),
      no:4
    },  
    {
      location: require('../img/gallery/wed (5).jpg'),
      no:5
    },  
    {
      location: require('../img/gallery/wed (6).jpg'),
      no:6
    }, 
    {
      location: require('../img/gallery/wed (7).jpg'),
      no:7
    },
    {
      location: require('../img/gallery/wed (8).jpg'),
      no:8
    },
    {
      location: require('../img/gallery/wed (11).jpg'),
      no:9
    },
    {
      location: require('../img/gallery/wed (10).jpg'),
      no:10
    },
    {
      location: require('../img/gallery/wed (11).jpg'),
      no:11
    }, 
    ]
  }
  const [selectedImg, setSelectedImg] = useState(null);

  
  return (
    <div className='gallery-body'>
      <GalleryThumb setSelectedImg={setSelectedImg} imagelist={imagelist} />
      { selectedImg && (
        <Modal imagelist={imagelist} selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default ImgGallery