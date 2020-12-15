import { useState, useEffect } from "react";

const { default: TopTwentyDetails } = require("../components/TopTwentyDetails")


const TopTwentyContainer = () => {

    const [topTwenty, setTopTwenty] = useState(null);

    // Get the data from website
    const getTopTwenty = () => {
        fetch(`https://itunes.apple.com/gb/rss/topsongs/limit=20/json`).then((res) => {
            return res.json().then((data) => {
                setTopTwenty(data);
            });
        });
    }

    useEffect(() => {
        getTopTwenty();
    }, []) // The empty array will ensure that this will only run once

    return (
        <>
            <h1>This is the T20 Container</h1>
            <TopTwentyDetails topTwenty={topTwenty}/>
        </>

    )
}

export default TopTwentyContainer;