import React, { useState } from 'react';
import '../cart.gif';

const About = () => {
  const [showDetails, setShowDetails] = useState({});
  const [cartItems, setCartItems] = useState([]);

  const toggleDetails = (index) => {
    setShowDetails((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const addToCart = (item) => {
    // Check if the item is already in the cart
    const isItemInCart = cartItems.some((cartItem) => cartItem.id === item.id);

    if (isItemInCart) {
      console.log('Item is already in the cart');
      return;
    }

    // Add the item to the cart
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const images = [
    {
      id: 1,
      title: 'Canadian hotel',
      url:
        'https://www.travelandleisure.com/thmb/zC_z-UrTT78BpN0tkntgXnjTtqs=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/capella-bangkok-004-TOPHOTELSWB21-fc4a3afc3272422799a46f5d08c0be4e.jpg',
      price: '$200 per night',
      types: 'Single, Double, Suite',
    },
    {
      id: 2,
      title: 'Canadian hotel',
      url:
        'https://www.travelandleisure.com/thmb/zC_z-UrTT78BpN0tkntgXnjTtqs=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/capella-bangkok-004-TOPHOTELSWB21-fc4a3afc3272422799a46f5d08c0be4e.jpg',
      price: '$500 per night',
      types: 'Single, Double, Suite',
    },
    {
      id: 3,
      title: 'Canadian hotel',
      url:
        'https://www.travelandleisure.com/thmb/zC_z-UrTT78BpN0tkntgXnjTtqs=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/capella-bangkok-004-TOPHOTELSWB21-fc4a3afc3272422799a46f5d08c0be4e.jpg',
      price: '$500 per night',
      types: 'Single, Double, Suite',
    },
  ];

  return (
    <div>
      <h1 className="flex items-center justify-center text-4xl">
        Recommended products
      </h1>
      <div>
        <img src="../cart.gif" alt="" />
        {cartItems.length === 0 ? (
          <p>No items in the cart</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.title} - {item.price}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="flex items-center flex-wrap justify-center gap-6 m-3">
        {images.map((image) => {
          const isItemInCart = cartItems.some(
            (cartItem) => cartItem.id === image.id
          );

          return (
            <div key={image.id} className="image">
              <img
                src={image.url}
                alt={image.title}
                className="rounded-md h-72 w-96"
              />
              <button
                onClick={() => toggleDetails(image.id)}
                className="rounded-lg p-3 mt-4 bg-red-500"
              >
                Check Details
              </button>
              {showDetails[image.id] && (
                <div className="">
                  <div className="bg-white p-5 rounded-lg">
                    <h3 className="text-2xl mb-2">{image.title}</h3>
                    <p className="text-gray-800">{image.price}</p>
                    <p className="text-gray-800">{image.types}</p>
                    <button
                      onClick={() => toggleDetails(image.id)}
                      className="rounded-lg p-3 m-4 bg-red-500"
                    >
                      Close
                    </button>
                    {!isItemInCart && (
                      <button
                        onClick={() => addToCart(image)}
                        className="rounded-lg p-3 mt-4 bg-blue-500"
                      >
                        Add to Cart
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
