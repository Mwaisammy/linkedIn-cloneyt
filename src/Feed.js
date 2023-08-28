import "./Feed.css";
import { CalendarViewDay, Create, EventNote, Image, Subscriptions } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import InputOption from "./InputOption";
import Post from "./Post";
import { db }from "./firebase";
import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp } from 'firebase/firestore';
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";


function Feed() {

  const user = useSelector(selectUser);
const[input, setInput] = useState('');
const[posts, setPosts] = useState([]);


useEffect(() => {
  const colRef = collection(db, 'posts');
  return onSnapshot(query(colRef, orderBy('timestamp', 'desc')),
      snapshot => setPosts(snapshot.docs)
  )
},[]);





const sendPost = async(e) => {
e.preventDefault();
const inputToSend = input;


const colRef = collection(db, 'posts');
await addDoc(colRef, {
  name: user.name || "Unknown User",
  description: user.email || "No email available",
  message: inputToSend || "",
  photoUrl: user.photoUrl || "",
  timestamp: serverTimestamp()
});
// setInput('');
console.log(user)
console.log("user.name:", user.name);
console.log("user.email:", user.email);
console.log("inputToSend:", inputToSend);

};
  return (
    <div className="feed">
      <div className='feed__inputContainer'>
        <div className='feed__input'>
          <Create />
          <form>
            <input value={input} onChange={(e)=> setInput(e.target.value)} type="text" />
            <button onClick={sendPost} type='submit'>Send</button>
          </form>
        </div>
        <div className="feed__inputOption">
          <InputOption Icon={Image} title="photo" color="#70B5F9" />
          <InputOption Icon={Subscriptions} title="video" color="#70B5F9" />
          <InputOption Icon={EventNote} title="Event" color="#70B5F9" />
          <InputOption Icon={CalendarViewDay} title="Write article" color="#70B5F9" />
        </div>
      </div>
 
      {posts?.map((post, idx) => (
        <Post key={idx} post = {post.data()}/>
      ))}
      
   

      {/* <Post name={'Mwai Sam'} description={'This is a test'} message={'Message goes'}/>  */}
    </div>
  ); 
}
export default Feed