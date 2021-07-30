import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// components
import Navbar from './Components/Navbar/NavBar';
import Home from './Components/Home/Home';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
