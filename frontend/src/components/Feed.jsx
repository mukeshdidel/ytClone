import '../styles/feed.css';
import { Link } from 'react-router-dom';


import thumbnail1 from '../assets/thumbnail1.png'
import thumbnail2 from '../assets/thumbnail2.png'
import thumbnail3 from '../assets/thumbnail3.png'
import thumbnail4 from '../assets/thumbnail4.png'
import thumbnail5 from '../assets/thumbnail5.png'
import thumbnail6 from '../assets/thumbnail6.png'
import thumbnail7 from '../assets/thumbnail7.png'
import thumbnail8 from '../assets/thumbnail8.png'


export default function Feed(){
    return (
        <div className="feed">
            <Link to={`video/20/4521`} className='card'>
                <img src={thumbnail1} alt="" />
                <h2>video 1</h2>
                <h3>channel 1</h3>
                <p>15k views &bull; 2 days ago</p>
            </Link>
            <div className='card'>
                <img src={thumbnail2} alt="" />
                <h2>video 2</h2>
                <h3>channel 2</h3>
                <p>15k views &bull; 2 days ago</p>
            </div>
            <div className='card'>
                <img src={thumbnail3} alt="" />
                <h2>video 3</h2>
                <h3>channel 3</h3>
                <p>15k views &bull; 2 days ago</p>
            </div>
            <div className='card'>
                <img src={thumbnail4} alt="" />
                <h2>video 4</h2>
                <h3>channel 4</h3>
                <p>15k views &bull; 2 days ago</p>
            </div>
            <div className='card'>
                <img src={thumbnail5} alt="" />
                <h2>video 5</h2>
                <h3>channel 5</h3>
                <p>15k views &bull; 2 days ago</p>
            </div>
            <div className='card'>
                <img src={thumbnail6} alt="" />
                <h2>video 6</h2>
                <h3>channel 6</h3>
                <p>15k views &bull; 2 days ago</p>
            </div>
            <div className='card'>
                <img src={thumbnail7} alt="" />
                <h2>video 7</h2>
                <h3>channel </h3>
                <p>15k views &bull; 2 days ago</p>
            </div>
            <div className='card'>
                <img src={thumbnail8} alt="" />
                <h2>video 8</h2>
                <h3>channel 8</h3>
                <p>15k views &bull; 2 days ago</p>
            </div>
            <div className='card'>
                <img src={thumbnail1} alt="" />
                <h2>video 1</h2>
                <h3>channel 1</h3>
                <p>15k views &bull; 2 days ago</p>
            </div>
            <div className='card'>
                <img src={thumbnail2} alt="" />
                <h2>video 2</h2>
                <h3>channel 2</h3>
                <p>15k views &bull; 2 days ago</p>
            </div>
            <div className='card'>
                <img src={thumbnail3} alt="" />
                <h2>video 3</h2>
                <h3>channel 3</h3>
                <p>15k views &bull; 2 days ago</p>
            </div>
            <div className='card'>
                <img src={thumbnail4} alt="" />
                <h2>video 4</h2>
                <h3>channel 4</h3>
                <p>15k views &bull; 2 days ago</p>
            </div>
            <div className='card'>
                <img src={thumbnail5} alt="" />
                <h2>video 5</h2>
                <h3>channel 5</h3>
                <p>15k views &bull; 2 days ago</p>
            </div>
            <div className='card'>
                <img src={thumbnail6} alt="" />
                <h2>video 6</h2>
                <h3>channel 6</h3>
                <p>15k views &bull; 2 days ago</p>
            </div>
            <div className='card'>
                <img src={thumbnail7} alt="" />
                <h2>video 7</h2>
                <h3>channel </h3>
                <p>15k views &bull; 2 days ago</p>
            </div>
            <div className='card'>
                <img src={thumbnail8} alt="" />
                <h2>video 8</h2>
                <h3>channel 8</h3>
                <p>15k views &bull; 2 days ago</p>
            </div>
        </div>

    );
}