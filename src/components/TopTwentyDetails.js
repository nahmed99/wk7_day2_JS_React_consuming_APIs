import TheHit from './TheHit';

const TopTwentyDetails = ({topTwenty}) => {

    // Don't render TopTwentyDetails unless 'toptwenty' actually contains data
    if (!topTwenty) {
        return null;
    }


    let chartPos = 0;
    const topTwentyNodes = topTwenty.map(theHit => {
        chartPos += 1;

        return (
          <TheHit 
            chartPos={chartPos}
            title={theHit["im:name"].label}
            artist={theHit["im:artist"].label}
            image={theHit["im:image"][0].label}
            >
          </TheHit>
        );
      });


    //   chart position, title and artist. 

    //   <p>{topTwenty.category} This category!!!</p>
    return (
        <>
            
            <h3>T20 Details:</h3>
            {topTwentyNodes}

        </>
    )
}

export default TopTwentyDetails;