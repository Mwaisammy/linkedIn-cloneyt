import React, {forwardRef }from 'react';
import './Post.css';
import { Avatar } from '@mui/material';
import { ChatOutlined, SendOutlined, ShareOutlined, ThumbUp } from '@mui/icons-material';
import InputOption from './InputOption';

const Post = forwardRef ( ({ post: { name, description, message, photoUrl }}, ref) => {

  console.log(name)
  console.log(photoUrl)
  return (
    <div ref={ref} className="post">
      <div className="post__header">
        <Avatar src={photoUrl || ''}>
          {(name ? name[0] : '')}
        </Avatar>
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>
      <div className="post__buttons">
        <InputOption Icon={ThumbUp} title="Like" color="#B6B6B6" />
        <InputOption Icon={ChatOutlined} title="Chat" color="#B6B6B6" />
        <InputOption Icon={ShareOutlined} title="Share" color="#B6B6B6" />
        <InputOption Icon={SendOutlined} title="Send" color="#B6B6B6" />
      </div>
    </div>
  );
})

export default Post;
