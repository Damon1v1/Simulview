import './App.css';
import background from './images/background.jpg'
import { Navigation } from 'react';
import { Link } from 'react-router-dom';
import Header from './components/header/title'
import Footer from './components/footer/footer'


function App() {
  return (
    <div
      class='bg_image'
        style={{
          backgroundImage: 'url('+background+')',
          backgroundSize: 'cover',
          height: '100vh',
          marginTop: '-25px'
        }}
    >
      <Header style={{color:'white'}} className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">Simulview</Link>}>
          <Navigation>
              <Link to="/loginPage">Login</Link>
              <Link to="/profile">Profile</Link>
          </Navigation>
      </Header>
      <Footer />
    </div>
  );
}

export default App;
