import { useParams } from 'react-router-dom';
import '../styles/video.css';
import PlayVideo from './PlayVideo';
import Recommanded from './Recommanded';

export default function Video(){

    const {videoId, categoryId} = useParams();

    return (
        <div className="play-container">
            <PlayVideo videoId={videoId} categoryId={categoryId}/>
            <Recommanded categoryId={categoryId}/>
        </div>
    );
}