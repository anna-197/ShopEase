import shopsList from "../Config"
import { useState} from "react";

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
        {/* <div className="restaurant-list">
          {restaurants.map((restaurant) => {
            return (
              <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
            );
          })}
        </div> */}
      </>
    );
  };

  

 export default Body;
  