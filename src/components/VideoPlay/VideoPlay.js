import React from 'react'
import Youtube from 'react-youtube'
import Style from './VideoPlay.module.scss'
/* import Iframe from 'react-iframe' */
const VideoPlay = ({id}) => {
  return (
    <div className={Style.wrap}>
      <Youtube className={Style.video} videoId={id} />
      {/* <Iframe id='page1' url={`https://youtube.com/watch?v=${id}`} /> */}
      </div>
  )
}

export default VideoPlay
