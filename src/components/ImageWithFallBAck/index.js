import React, { useState } from "react";
import defaultitem from "../../assets/images/defaultItem.svg";

const ImageWithFallback = ({ src, alt, styling }) => {
  const [imgSrc, setImgSrc] = useState(src);

  const handleError = () => {
    setImgSrc(defaultitem);
  };

  return (
    <img src={imgSrc} alt={alt} onError={handleError} className={styling} />
  );
};

export default ImageWithFallback;
