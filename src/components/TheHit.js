import React from "react";

const TheHit = ({chartPos, title, artist, image}) => {

  return(
    <>
      <p className="the-para"><img src={image}></img> Chart Position {chartPos}: {title} By {artist}.</p>
    </>
  )

}

export default TheHit;