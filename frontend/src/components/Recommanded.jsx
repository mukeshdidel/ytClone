import '../styles/recommanded.css'

import thumbnail1 from '../assets/thumbnail1.png'
import thumbnail2 from '../assets/thumbnail2.png'
import thumbnail3 from '../assets/thumbnail3.png'
import thumbnail4 from '../assets/thumbnail4.png'
import thumbnail5 from '../assets/thumbnail5.png'
import thumbnail6 from '../assets/thumbnail6.png'
import thumbnail7 from '../assets/thumbnail7.png'
import thumbnail8 from '../assets/thumbnail8.png'
import { useEffect, useState } from 'react'
import { API_KEY, valueConverter } from '../data'
import {Link} from 'react-router-dom';
export default function Recommanded({categoryId}){


    const [data, setData] = useState([]);

    useEffect(()=>{
        async function fetchData(){
            const recommmandedUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`
            const response = await fetch(recommmandedUrl)
            const data = await response.json();
            setData(data.items);
        }
        fetchData()
    },[])

    return (
        <div className='recommanded'>

            {data?.map((item, index)=>{
                return (
                    <Link to={`http://localhost:5173/video/${item.snippet.categoryId}/${item.id}`} className="side-video-list" key={index}>
                        <img src={item.snippet.thumbnails.medium.url} alt="" />
                        <div className='video-info'>
                            <h4>{item.snippet.title}</h4>
                            <p>{item.snippet.channelTitle}</p>
                            <p>{valueConverter(item.statistics.viewCount)}</p>
                        </div>
                    </Link>
                );
            })}

        </div>
        
    );
}