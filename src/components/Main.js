import { NavLink, BrowserRouter } from "react-router-dom";

const Main = () => {
  return (
    <BrowserRouter>
      <div className="main">

        
        <img src="https://www.shutterstock.com/image-vector/shopping-cart-isolated-on-white-vector-1936903765"alt=""/>

        <div className="flex flex-wrap justify-start gap-6 m-3">
          <NavLink to="/About" className="btn btn-primary">
            Home
          </NavLink>

          <NavLink to="/About" className="btn btn-primary">
            Shop
          </NavLink>

          <NavLink to="/About" className="btn btn-primary">
            features
          </NavLink>

          <NavLink to="/About" className="btn btn-primary">
           Recommended 
          </NavLink>
          
            <input type="text" placeholder="Search"
            className=" rounded-md p-1 bg-green-300"
            />
            
        </div>

        <div className=" flex flex-row gap-6">
            <div className=" flex flex-col bg-slate-200 ">
            <h className=" mt-10 text-4xl">See everything with Clarity<br/>We never <br/>disappoint</h>
            <button className=" text-2xl  rounded-md mt-10">Buy</button>
            </div>
            <img src="https://salinaka-ecommerce.web.app/images/banner-girl.789f1fa6f451ad26c5039fcbc049ace7.png" 
            alt="" 
            className="w-1/2 h-1/2"
            />
            </div>

        <div className="flex items-center justify-center text-3xl m-4 flex-row gap-6">
            <h1> Most Featured youtube videos</h1>

            </div>
      </div>
    </BrowserRouter>
  );
};

export default Main;
