import React, { useState } from 'react';
import './Login.css';
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { auth } from './firebase';
import { login } from './features/userSlice';
function Login() {
  // const emailRef = useRef(null);
  // const passwordRef = useRef(null); 
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [profilePic, setProfilePic] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const register = () => {
    if (!name) {
      return alert('Please enter a full name!');
    }

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
        updateProfile(user, {
          displayName: name,
          photoURL: profilePic,
        })
          .then(() => {
            dispatch(login({
              payload: {
                email: email,
                uid: user.uid,
                displayName: user.name,
                photoURL: profilePic,
              },
            }));
          })
          .catch((err) => {
            console.error('Error updating user profile:', err);
          });
      })
      .catch((err) => alert(err.message));
  };

  const loginToApp = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
    .then((userAuth)=>{
      dispatch(login({
        email: userAuth.user.email,
        displayName: userAuth.user.displayName,
        profilePic: userAuth.user.photoURL
      }))
    }
    )
    .catch((err) => alert(err.message));
  //  const email = emailRef.current.value;
  //  const password= passwordRef.current.value;

  //  signInWithEmailAndPassword(auth, email, password)
  //  .then((userCredential) =>{
  //   const user = userCredential.user;
  //   console.log('user signed in', user)
  //  })

       
    // Add your login logic here
  };

  return (
    <div className="login">
      <img src="https://ceohangout.com/wp-content/uploads/2015/07/logo-linkedin2.png" alt="" />

      <form>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full name (required if registering)"
          type="text"
        />
        <input
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
          placeholder="Profile pic URL (Optional)"
          type="text"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="text"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
        />

        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>
      <p>
        Not a member?
        <span className="login__register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;

