import '../styles/home.css'
import Feed from './Feed';
import Sidebar from './Sidebar';

export default function Home({sidebar}){
    return (
        <>
            <Sidebar sidebar={sidebar}/>
            <div className={`container ${sidebar ? "" : 'large-container'}`}>
                <Feed/>
            </div>
        </>
    );
}