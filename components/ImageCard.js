import React, { useEffect, useState } from "react";

const ImageCard = ({image}) =>{
    const {decription , urls} = image;
    const [span, setSpan] = useState(0);
    const imageRef = React.useRef();

    useEffect(()=>{
        imageRef.current.addEventListener('load', setSpanImg);
    });

   const setSpanImg = () => {
        const height = imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10); // 10 is coming from gridRowEnd from ImageList.css

        setSpan(spans);
        console.log(imageRef.current.clientHeight);
    }
    return(
        <div style={{ gridRowEnd: `span ${span}` }}>
            <img ref={imageRef} alt={decription} src={urls.regular} />
        </div>
    );
}

export default ImageCard;