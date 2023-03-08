import shopsList from "../Config"
import { useState} from "react";

//  SHOPS CARD
const ShopsCard = ({
    name,

    address,

    distance,

    rating,
  
    items,
  }) => {
    return (
      <div className="card">
        <img
          src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"  
            
          }
        />
  
        <h2>{name}</h2>
  
        <h3>{items.join(", ")}</h3>
  
        <h4>{distance} km </h4>
      </div>
    );
  };

// BODY
const Body = () => {

    const [searchText, setSearchText] = useState("");
    const [shops, setShops] = useState(shopsList);

    return (      
      <>

        {/* SEARCH BAR */}


        <div className="search-container">

            <input

            type="text"

            className="search-input"

            placeholder="Search"

           value={searchText}

           onChange={(e) => {

          setSearchText(e.target.value);

         }}

            />

       <button

         className="search-btn"

          onClick={() => {

            //need to filter the data

            // const data = filterData(searchText, restaurantList);

            // update the state - shops

            setShops(shopsList);


          }}

        >

          Search

        </button>

        </div>
        <div className="shops-list">
          {shops.map((shops) => {
            return (
              <ShopsCard {...shops.data} key={shops.data.id} />
            );
          })}
        </div>
      </>
    );
  };

  

 export default Body;
  