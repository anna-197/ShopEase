import logo from "./logo.svg";
import "./App.css";

import Header from "./components/Header"
import Footer from "./components/Footer";
// import Body from "./components/Body"

/**

      Header

         - Logo(Title)

         - Nav Items(Right Side)

         - Cart

      Body 

         - Search bar

         - ItemList

           - ItemCards (many cards)

               - Image

               - Name of Shop

               - Quantity

               - Distance

      Footer

       - Map

       - Play and Earn

     

     */

//  RENDERING HEADER, BODY AND FOOTER
function App() {
  return (
    <>
      { <Header /> }

      {/* <Body /> */}

      { <Footer /> } 
    </>
  );
}

export default App;
