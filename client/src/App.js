
import React, {Component} from 'react';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import home from "./components/Pages/home"
// import searchForm from "./components/Form/searchForm"
import MapContainer from './containers/MapContainer';

import 'antd/dist/antd.css';
import './App.css';

// function App() {
//   return (
//     <div className="App">
      
//       <div className="App-header">
//         <h2>I can SHOW you the WORLD!...</h2>
//       </div>
//       <Router>
//       <div>
//         <Route exact path="/" component={searchForm} />
//         {/* <Route exact path="/search" component={signup} />
//         <Route exact path="/search" component={savedProfile} />
//         <Route exact path="/search" component={searchResult} /> */}
//       </div>
//     </Router>
   
//     </div>
//   );
// }


// export default App;

class App extends Component {
    render() {
      return (
        <div className="App">
          <header className="App-header">
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
          </header>
          <div className="container h-100">
            <MapContainer />
          </div>
        </div>
      );
    }
  }
  
  export default App;