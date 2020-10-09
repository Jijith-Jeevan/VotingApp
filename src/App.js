import React from 'react';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom';
import Mainpage from './Pages/MainPage';
import VotePage from './Pages/VotePage';
import AddSubPage from './Pages/AddSubPage';

function App() {
  return (
    <Router>
     <Route exact path="/" component={Mainpage}/>
     <Route exact path="/VotePage" component={VotePage}/>
     <Route exact path="/AddSubPage" component={AddSubPage}/>
    </Router>
  );
}

export default App;
