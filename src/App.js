import './App.css';
import {
  BrowserRouter as Router,
  Switch, 
  Route
} from 'react-router-dom'
// import NavBar from './components/NavBar'
// import Home from './pages/Home'
// import Reports from './pages/Reports'
// import Products from './pages/Products';
// import Team from './pages/Team';
// import Messages from './pages/Messages';
// import Support from './pages/Support';
import Sidebar from './components/Sidebar'

function App() {
  return (
    <Router>
    <>
      {/* <NavBar /> 
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/reports" component={Reports}/>
          <Route path="/products" component={Products} />
          <Route path="/team" component={Team} />
          <Route path="/messages" component={Messages} />
          <Route path="/support" component={Support} />
        </Switch>   */}
        <Sidebar />
    </>
    </Router>
  );
}

export default App;
