import '../styles/playVideo.css'

import video1 from '../assets/video.mp4'
import like from '../assets/like.png'
import dislike from '../assets/dislike.png'
import share from '../assets/share.png'
import save from '../assets/save.png'
import jack from '../assets/jack.png'
import userProfile from '../assets/user_profile.jpg'
import yash from '../assets/yash.jpg'
import { useEffect, useState } from 'react'
import {API_KEY, valueConverter} from '../data'
import moment from 'moment'
import { useParams } from 'react-router-dom'


export default function PlayVideo({categoryId}){

    const {videoId} = useParams();
    
    const [apiData, setApiData] = useState(null)
    const [channelData, setChannelData] = useState(null)
    const [comments, setComments] = useState([]);

    useEffect(()=>{
        async function fetchData(){
            const videoDetailsUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
            const response = await fetch(videoDetailsUrl)
            const data = await response.json();
            setApiData(data.items[0])

        }
        fetchData();

    },[videoId])

    useEffect(()=>{
        async function fectchOtherData(){
            const ChannelDataUrl = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData?.snippet?.channelId}&key=${API_KEY}`
            const response = await fetch(ChannelDataUrl)
            const data = await response.json();
            setChannelData(data?.items?.[0])

            const commentUrl = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`
            const response1 = await fetch(commentUrl)
            const data1 = await response1.json();
            setComments(data1?.items)

        }   
        fectchOtherData()
    },[apiData])



    return (
        <div className="play-video">
{/*             <video src={video1} controls autoPlay muted/> */}
            <iframe  src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <h3>{apiData?.snippet?.title}</h3>
            <div className='play-video-info'>
                <p>{apiData && valueConverter(apiData?.statistics.viewCount)} &bull; { moment(apiData?.snippet?.publishedAt).fromNow()}</p>
                <div>
                    <span><img src={like} alt="" />{valueConverter(apiData?.statistics?.likeCount)}</span>
                    <span><img src={dislike} alt="" /></span>
                    <span><img src={share} alt="" /> share</span>
                    <span><img src={save} alt="" /> save</span>
                </div>
            </div>
            <hr />
            <div className="publisher">
                <img src={channelData?.snippet?.thumbnails?.default?.url} alt="" />
                <div>
                    <p>{apiData?.snippet?.channelTitle}</p>
                    <span>{valueConverter(channelData?.statistics?.subscriberCount)}</span>
                </div>
                <button>Subscribe</button>
            </div>
            <div className="video-description">
                <p>{apiData?.snippet?.description.slice(1,250)}</p>
                <hr />
                <h4>{valueConverter(apiData?.statistics?.commentCount)}</h4>
                
                {comments.map((comment, index)=>{
                    return (
                        <div className='comment' key={index}>
                            <img src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
                            <div>
                                <h3>{comment.snippet.topLevelComment.snippet.authorDisplayName}<span>1 day ago</span></h3>
                                <p>{comment.snippet.topLevelComment.snippet.textDisplay}</p>
                                <div className="comment-action">
                                    <img src={like} alt="" />
                                    <span>{valueConverter(comment.snippet.topLevelComment.snippet.likeCount)}</span>
                                    <img src={dislike} alt="" />
                                </div>
                            </div>
                        </div>
                    );
                })}

            </div>
        </div>
    );
}