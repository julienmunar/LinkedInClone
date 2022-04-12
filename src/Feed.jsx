import React, { useEffect, useState } from 'react'
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';
import { db } from './firebase';
import { getFirestore, auth, getDocs } from 'firebase/firestore/lite';
import { collection, addDoc, Timestamp, query, orderBy, onSnapshot, QuerySnapshot } from 'firebase/firestore'
import { selectUser } from './features/counter/userSlice';
import {useSelector} from 'react-redux'
import FlipMove from 'react-flip-move'
const Feed = () => {
    const [posts, setPosts] = useState([])
    const [input,setInput]=useState("")
    const user = useSelector(selectUser)
    useEffect(() => {
        const q = query(collection(db, 'posts'), orderBy('timestamp','desc'))
        onSnapshot(q, (QuerySnapshot) => {
            setPosts(QuerySnapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
        })

    }, [])

    console.log(posts)

    const handleOnchange=(e)=>{
        setInput(e.target.value)
    
    }
    console.log(input)
    const sendPost = async (e) => {
        e.preventDefault()
        try {
            await addDoc(collection(db, 'posts'), {
                name: user.email,
                description: user.email,
                message: input,
                photoURL:user?.email[0],
                timestamp: Timestamp.now()
            })
        
        }
        catch (error) {
            alert(error)
        }
        setInput("")
    }

    return (
        <div className='feed'>
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form action="">
                        <input onChange={handleOnchange} value={input} type="text" />
                        <button onClick={sendPost} type="submit">send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption title='photo' Icon={ImageIcon} color="#70B5F9" />
                    <InputOption title='video' Icon={SubscriptionsIcon} color="#E7A33E" />
                    <InputOption title='event' Icon={EventNoteIcon} color="#C0CBCD" />
                    <InputOption title='Write Article' Icon={CalendarViewDayIcon} color="#7FC15E" />
                </div>

            </div>
            <FlipMove>
            {posts.map((post)=>(
            
            <Post key={post.id} name={post.data.name} description={post.data.description} message={post.data.message} photoUrl={post.data.photoURL}/>
        ))}
            </FlipMove>
    
            {/* <Post name="Julien Munar" description="This is a test" message="wow this worked" /> */}
        </div>
    )
}

export default Feed