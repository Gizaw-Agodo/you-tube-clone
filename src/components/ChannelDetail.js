import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromApi } from "../api";
import ChannelCard from "./ChannelCard";
import Videos from "./Videos"

function ChannelDetail() {
  const [channel, setChannel] = useState({});
  const [videos, setVideos] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetchFromApi(`channels?part=snippet&id=${id}`).then((data) =>
      setChannel(data?.items)
    );
  }, [id]);

   useEffect(() => {
     fetchFromApi(`search?channelId=${id}&part=snippet%2Cid&order=date`).then(
       (data) => setVideos(data?.items)
     );
   }, [id]);

   console.log(channel);
  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            height: "300px",
            background:
              "linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)",
            zIndex: 10,
          }}
        />
        <ChannelCard channelDetail={channel} marginTop="-93px" />
      </Box>
      <Box p={2} display="flex">
        <Box sx={{ mr: { sm: "100px" } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
}

export default ChannelDetail;
