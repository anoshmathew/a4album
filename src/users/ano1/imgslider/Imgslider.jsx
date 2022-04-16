import React,{useRef,useState} from 'react'
import { Routes, Route, Link,useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';

function Imgslider({imgName,setimgName}) {
  const location = useLocation();
const data = location.state;

  return (
    <div>
      ImgsliderRoutes
      {data}
    </div>
  )
}

export default Imgslider