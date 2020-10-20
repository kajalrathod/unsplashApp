import React from "react";
import ImageCard from './ImageCard';
import styles from "../styles/imageList.module.css";


const ImageList = ({images}) =>{
   const imgs = images.map((img)=>{
          return <ImageCard key={img.id} image={img}/>;         
   });
    return <div className={styles.imagelist}>{imgs}</div>
}

export default ImageList;