import React, { useState,forwardRef } from 'react'
import { Avatar } from '@mui/material'
import './post.css'
import InputOption from './InputOption'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';

const Post = forwardRef( ({name,description,message,photoUrl},ref) => {

 

  return (
    <div  ref={ref} className='post'>
        <div className="post__header">
            <Avatar>{photoUrl}</Avatar>
        <div className="post__info">
            
            <h2>{name}</h2>
            <p>{description}</p>
            </div>
         

            </div>
            <div className="post__body">
            <p>{message}</p>    
            </div>

            <div className="post__buttons">
                <InputOption title="Like" Icon={ThumbUpOffAltIcon} color="grey" />
                <InputOption title="Comment" Icon={CommentIcon} color="Comment" />
                <InputOption title="Like" Icon={ShareIcon} color="Share" />
                <InputOption title="Send" Icon={SendIcon} color="Send" />
            </div>
    </div>
  )
})

export default Post