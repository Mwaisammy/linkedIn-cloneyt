
import Feed from './Feed.js';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import { selectUser } from './features/userSlice.js';
import Login from './Login.js';
import { useSelector } from 'react-redux';
import Widgets from './Widgets.js';

function App() {


  const user = useSelector(selectUser)
  return (
    <div className="app">


     {/* Header */}
     <Header />

      {!user ? (<Login />) : (

      // {/* App body */}
     <div className="app__body">
      <Sidebar  />
      <Feed />
      <Widgets />
     </div>

// {/* Side bar */}
// {/* Widjets */}
      )}
      

    </div>
  );
}

export default App;
