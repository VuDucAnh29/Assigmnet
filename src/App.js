// import logo from "./logo.svg";
import "./App.css";
import React from "react";

import { DISHES } from "./data/dishes";
import Main from "./components/Main";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "./redux/configureStore";
// function App() {
//    return (
//       <div className="App">
//          <Navbar dark color="primary">
//             <div className="container">
//                <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
//             </div>
//          </Navbar>
//       </div>
//    );
// }
const store = configureStore();
class App extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         dishes: DISHES,
      };
   }
   render() {
      return (
         <Provider store={store}>
            <BrowserRouter>
               <div className="App">
                  <Main />
               </div>
            </BrowserRouter>
         </Provider>
      );
   }
}

export default App;
