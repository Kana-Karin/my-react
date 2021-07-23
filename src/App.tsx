import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Import pages
import Home from './pages/home';
import About from './pages/about';
import Works from './pages/works';
import Contact from './pages/contact';
import MDnav from './components/mdnav';
import Footer from './components/footer';

import './App.css';

//Import components
import Navi from './components/navi';

function App() {

  return (
    <div className="App">
        <Router>
          <Switch>
          <div>
            <MDnav />
            <Route exact path='/' component={Home} />
            <Route exact path='/About' component={About} />
            <Route exact path='/Works' component={Works} />
            <Route exact path='/Contact' component={Contact} />
          </div>
          </Switch>
          <Footer />
        </Router>
      </div>
  );
}

export default App;
