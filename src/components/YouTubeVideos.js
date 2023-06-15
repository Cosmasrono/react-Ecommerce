import React, { useState, useEffect } from "react";

const API = 'AIzaSyC_81z946hXm9kEe63f8wisgocxCCy1wAE';
const channelId = 'UCXgGY0wkgOzynnHvSEVmE3A';

const fetchUrl = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelId}&part=snippet,id&order=date&maxResults=20`;

const YouTubeVideos = () => {
  const [allVideos, setAllVideos] = useState([]);

  useEffect(() => {
    fetch(fetchUrl)
      .then((response) => response.json())
      .then((data) => {
        const { items } = data;
        setAllVideos(items);
      });
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {allVideos.map((item) => (
        <div key={item.id.videoId}>
          <div className="bg-gray-100 rounded-md p-4">
             <div className="aspect-w-16 aspect-h-9 mt-4">
              <iframe
                className="rounded-md"
                width="300"
                height="150"
                src={`https://www.youtube.com/embed/${item.id.videoId}`}
                title={item.snippet.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
                          <h3 className="text-lg font-medium mb-2">{item.snippet.title}</h3>

            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default YouTubeVideos;
