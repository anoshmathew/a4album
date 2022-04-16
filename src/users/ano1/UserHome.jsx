import React,{useRef,useState} from 'react'
import { Routes, Route, Link,useNavigate } from "react-router-dom";
import Admin from '../UserAdmin';
import ImgGallery from './gallery/ImgGallery';



import Imgslider from './imgslider/Imgslider';
import UserHome2 from './UserHome2';

    
function Ano1() {
  const [imgName, setimgName] = useState("")
  return (
    <div>
      <Routes>
            <Route path="view" element={<UserHome2  imgName={imgName} setimgName={setimgName}/>} />
            <Route path="useradmin" element={<Admin/>} />
            <Route path="imgslider" element={<Imgslider imgName={imgName} setimgName={setimgName}/>} />
            <Route path="imggallery" element={<ImgGallery/>}/>
      </Routes>
    </div>
  )};
  


export default Ano1