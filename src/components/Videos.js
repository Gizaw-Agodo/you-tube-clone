import { Box, Stack } from "@mui/material";
import React from "react";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";

function Videos({ videos }) {
  return (
    <Stack
      direction="row"
      gap={2}
      flexWrap="wrap"
      justifyContent="center"
    >
      {videos?.map((video, index) => (
        <Box key={index}>
          {video.id.videoId && <VideoCard video={video} />}
          {video.id.channelId && <ChannelCard channelDetail={video} />}
        </Box>
      ))}
    </Stack>
  );
}

export default Videos;
