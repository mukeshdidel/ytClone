import '../styles/playVideo.css'

import video1 from '../assets/video.mp4'
import like from '../assets/like.png'
import dislike from '../assets/dislike.png'
import share from '../assets/share.png'
import save from '../assets/save.png'
import jack from '../assets/jack.png'
import userProfile from '../assets/user_profile.jpg'


export default function PlayVideo(){
    return (
        <div className="play-video">
            <video src={video1} controls autoPlay muted/>
            <h3>video</h3>
            <div className='play-video-info'>
                <p>15k views &bull; 2 days ago</p>
                <div>
                    <span><img src={like} alt="" /> 125</span>
                    <span><img src={dislike} alt="" /> 12</span>
                    <span><img src={share} alt="" /> share</span>
                    <span><img src={save} alt="" /> save</span>
                </div>
            </div>
            <hr />
            <div className="publisher">
                <img src={jack} alt="" />
                <div>
                    <p>mukesh</p>
                    <span>1M subscribers</span>
                </div>
                <button>Subscribe</button>
            </div>
            <div className="video-description">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quisquam itaque nostrum debitis provident perferendis officiis excepturi? Sed nihil adipisci saepe aliquid similique dolores molestiae officiis, ad laudantium! Fuga, distinctio.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quisquam itaque nostrum debitis provident perferendis officiis excepturi? Sed nihil adipisci saepe aliquid similique dolores molestiae officiis, ad laudantium! Fuga, distinctio.</p>
                <hr />
                <h4>130 Comments</h4>
                <div class='comment'>
                    <img src={userProfile} alt="" />
                    <h3>yash <span>1 day ago</span></h3>
                    <p>this was a shit video</p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>244</span>
                        <img src={dislike} alt="" />
                        
                    </div>
                </div>
                <div class='comment'>
                    <img src={userProfile} alt="" />
                    <h3>yash <span>1 day ago</span></h3>
                    <p>this was a shit video</p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>244</span>
                        <img src={dislike} alt="" />
                        
                    </div>
                </div>
                <div class='comment'>
                    <img src={userProfile} alt="" />
                    <h3>yash <span>1 day ago</span></h3>
                    <p>this was a shit video</p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>244</span>
                        <img src={dislike} alt="" />
                        
                    </div>
                </div>
                <div class='comment'>
                    <img src={userProfile} alt="" />
                    <h3>yash <span>1 day ago</span></h3>
                    <p>this was a shit video</p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>244</span>
                        <img src={dislike} alt="" />
                        
                    </div>
                </div>
                <div class='comment'>
                    <img src={userProfile} alt="" />
                    <h3>yash <span>1 day ago</span></h3>
                    <p>this was a shit video</p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>244</span>
                        <img src={dislike} alt="" />
                        
                    </div>
                </div>
            </div>
        </div>
    );
}