const TopTwentyDetails = ({topTwenty}) => {

    // Don't render TopTwentyDetails unless 'toptwenty' actually contains data
    if (!topTwenty) {
        return null;
    }

    return (
        <h1>These are the T20 Details</h1>
    )
}

export default TopTwentyDetails;