
import Feed from './Feed.js';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import { login, logout, selectUser } from './features/userSlice.js';
import Login from './Login.js';
import { useDispatch, useSelector } from 'react-redux';
import Widgets from './Widgets.js';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase.js';

function App() {

const dispatch = useDispatch();

  const user = useSelector(selectUser);
   
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged ( auth, (user) => {
      if (user) {
        const uid = user.id;
        const email = user.email;
        const name = user.displayName;
        const photoUrl = user.photoURL;

        dispatch((login({
            uid: user.id,
            email:email,
            name:name,
            photoUrl:photoUrl
            

       
        })))

        console.log(photoUrl)
      }else{
        dispatch(logout())
      }


     } ) 

     return unsubscribe;
  }, [dispatch])
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
