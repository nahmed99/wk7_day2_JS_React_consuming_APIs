import { useState, useEffect } from "react";
import TopTwentyDetails from '../components/TopTwentyDetails';
import '../App.css';


const TopTwentyContainer = () => {

    const [topTwenty, setTopTwenty] = useState(null);

    // Get the data from website - then extract the entries array from 
    // the object that has been returned. Pass that array to be interogated
    // by the TopTwentyDetails component.
    const getTopTwenty = () => {
        fetch(`https://itunes.apple.com/gb/rss/topsongs/limit=20/json`).then((res) => {
            return res.json().then((data) => {
                setTopTwenty(data.feed.entry);
            });
        });
    }




    useEffect(() => {
        getTopTwenty();
    }, []) // The empty array will ensure that this will only run once

    return (
        <div className="main">
            <h1>UK Top Twenty Are</h1>
            <TopTwentyDetails topTwenty={topTwenty}/>
        </div>

    )
}

export default TopTwentyContainer;