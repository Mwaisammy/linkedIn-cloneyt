import React from 'react'
import "./HeaderOption.css"
import { Avatar } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice';


function HeaderOption({ avatar, Icon, title, onClick }) {
  const user = useSelector(selectUser);
  console.log(user)
  return (
      <div onClick={onClick}className='headerOption'>
        {Icon && <Icon className="headerOption__icon" />}
        { avatar && ( 
       <Avatar
       alt={user?.email[0]}
       src={user?.photoUrl}
       className="headerOption__icon" 
       
       />

        )}

        <h3 className='headerOption__title'>{title}</h3>
      </div>  
  )
}

export default HeaderOption












// import React from 'react'
// import './HeaderOption.css'
// import { Avatar } from '@mui/material';


// function HeaderOption({ avatar, Icon, title }) {
//     return (
//       <div className='HeaderOption'>
//         {Icon && <Icon className="HeaderOption__icon" />}
//         {avatar && <Avatar className="HeaderOption__icon" src={avatar} />}

//         <h3 className='HeaderOption__title'>{title}</h3>
//       </div>
//     );
//   }
// export default HeaderOption;