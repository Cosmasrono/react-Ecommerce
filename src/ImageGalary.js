import React, { useState } from "react";

const ImageGalary = () => {
  const [showDetails, setShowDetails] = useState({});

  const toggleDetails = (index) => {
    setShowDetails((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const images = [
    {
      id: 1,
      title: "Canadian hotel",
      url: "https://www.travelandleisure.com/thmb/zC_z-UrTT78BpN0tkntgXnjTtqs=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/capella-bangkok-004-TOPHOTELSWB21-fc4a3afc3272422799a46f5d08c0be4e.jpg",
      price: "$200 per night",
      types: "Single, Double, Suite",
    },
    {
      id: 2,
      title: "Canadian hotel",
      url: "https://www.travelandleisure.com/thmb/zC_z-UrTT78BpN0tkntgXnjTtqs=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/capella-bangkok-004-TOPHOTELSWB21-fc4a3afc3272422799a46f5d08c0be4e.jpg",
      price: "$200 per night",
      types: "Single, Double, Suite",
    },
    {
      id: 3,
      title: "Canadian hotel",
      url: "https://www.travelandleisure.com/thmb/zC_z-UrTT78BpN0tkntgXnjTtqs=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/capella-bangkok-004-TOPHOTELSWB21-fc4a3afc3272422799a46f5d08c0be4e.jpg",
      price: "$200 per night",
      types: "Single, Double, Suite",
    },
    {
      id: 4,
      title: "Canadian hotel",
      url: "https://www.travelandleisure.com/thmb/zC_z-UrTT78BpN0tkntgXnjTtqs=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/capella-bangkok-004-TOPHOTELSWB21-fc4a3afc3272422799a46f5d08c0be4e.jpg",
      price: "$200 per night",
      types: "Single, Double, Suite",
    },
    {
      id: 5,
      title: "Canadian hotel",
      url: "https://www.travelandleisure.com/thmb/zC_z-UrTT78BpN0tkntgXnjTtqs=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/capella-bangkok-004-TOPHOTELSWB21-fc4a3afc3272422799a46f5d08c0be4e.jpg",
      price: "$200 per night",
      types: "Single, Double, Suite",
    },
    {
      id: 6,
      title: "Canadian hotel",
      url: "https://www.travelandleisure.com/thmb/zC_z-UrTT78BpN0tkntgXnjTtqs=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/capella-bangkok-004-TOPHOTELSWB21-fc4a3afc3272422799a46f5d08c0be4e.jpg",
      price: "$200 per night",
      types: "Single, Double, Suite",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 m-3">
      {images.map((image) => (
        <div className="flex flex-col items-center" key={image.id}>
          <p className="text-center">{image.title}</p>
          <img src={image.url} alt="gif" className="rounded-md h-72 w-96" />
          <button
            onClick={() => toggleDetails(image.id)}
            className="rounded-lg p-3 mt-4 bg-red-500"
          >
            Check Details
          </button>
          {showDetails[image.id] && (
            <div className="mt-4">
              <p>{image.price}</p>
              <p>{image.types}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ImageGalary;
