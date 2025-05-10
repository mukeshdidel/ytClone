import { useState } from 'react';
import '../styles/home.css'
import Feed from './Feed';
import Sidebar from './Sidebar';

export default function Home({sidebar}){

    const [category, setCategory] = useState(0);

    return (
        <>
            <Sidebar sidebar={sidebar} category={category} setCategory={setCategory} />
            <div className={`container ${sidebar ? "" : 'large-container'}`}>
                <Feed category={category}/>
            </div>
        </>
    );
}