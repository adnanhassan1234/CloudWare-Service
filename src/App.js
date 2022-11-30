
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Pages/Home';
import Footer from './Pages/Footer';
import Navbar from './Components/Navbar';


const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
      <Footer />
    </>
  )
}

export default App;
