import Modal  from './globalgallery/Modal';
import React,{useState} from 'react'
import GalleryThumb from './globalgallery/GalleryThumb';


function ImgGallery() {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div className='gallery-body'>
      <GalleryThumb setSelectedImg={setSelectedImg}/>
      { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default ImgGallery