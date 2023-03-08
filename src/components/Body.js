import shopsList from "../Config"
import { useState} from "react";

//   FILTER DATA FUNCTION

function filterData(searchText, shopsList) {

    const filterData = shopsList.filter((shop) =>
   
       shop.data.name.includes(searchText)
   
     );
   
   
     return filterData;
   
}



//  SHOPS CARD
const ShopsCard = ({

    img,

    name,

    address,

    distance,

    rating,
  
    items,
  }
    
  ) => {
    return (
      <div className="card">
        <img
          src={
            img  
            
          }
        />
  
        <h2>{name}</h2>

        <h5>{address}</h5>
       
  
        <h4>{items.map((items) => 
                             <div>{items.name} :  {items.quantity}</div>
                           )}</h4>

        <h5>{rating} stars </h5>
  
        <h5>{distance} km </h5>
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

            const data = filterData(searchText, shopsList);

            // update the state - shops

            setShops(data);


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
  