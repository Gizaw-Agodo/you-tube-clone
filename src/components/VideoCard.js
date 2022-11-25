import { CheckCircleOutline } from '@mui/icons-material';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';

function VideoCard({video:{id:{videoId},snippet}}) {

  return (
    <Card >
      <Link to ={`/video/${videoId}`}>
      <CardMedia image = {snippet?.thumbnails?.high?.url} sx = {{
        width:"340px",height : 180,
      }}/>
      </Link>
      <CardContent sx = {{backgroundColor:"#1e1e1e" , height : "106px"}}>
        <Link to  = {`/video/${videoId}`}>
          <Typography variant='subtitle1' fontWeight="bold" color  = "#fff" width = "307px">
            {snippet?.title?.slice(0,60)}
          </Typography>
        </Link>
        <Link to  = {`/channel/${snippet?.channelId}`} style = {{display :"flex",alignItems:"center"}}>
          <Typography variant='subtitle1' fontWeight="bold" color  = "gray" width = "307px">
            {snippet?.channelTitle?.slice(0,60)}
            <CheckCircleOutline sx  ={{fontSize:15,color:"gray",ml:"5px" }}/>
          </Typography>
        </Link>
      </CardContent>
    </Card>
  )
}

export default VideoCard