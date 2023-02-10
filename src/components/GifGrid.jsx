import React, { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  const getImages = async() => {
    const newImages = await getGifs(category)
    setImages(newImages)
    setIsLoading(false)
  }

  useEffect(() => {
    getImages()
  }, []);

  const GifItem = ({ id, title, url }) => {
    console.log(image);
  };

  return (
    <>
      <h3>{category}</h3>

      {/* images.map */}
      <div className="card-grid">
        {images.map(({ title, url, id }) => (
          <div className="card">
            <img src={url} alt={title} />
            <p>{title}</p>
          </div>
        ))}
      </div>
    </>
  );
};
