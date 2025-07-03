import { createContext, useContext, useEffect, useState } from "react";
import favoriteActive from "../components/Card/favorite.png";
import favoriteInactive from "../components/Card/favorite_outline.png";

const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/Gustavoo-z/cinetag/videos")
      .then((response) => response.json())
      .then((data) => setVideos(data));
  }, []);

  const updateFavorites = (videosAtualizados) => {
    const filtrados = videosAtualizados.filter((v) => v.favorite);
    setFavorites(filtrados);
  };

  const toggleFavorite = (video) => {
    const updatedVideos = videos.map((v) =>
      v.id === video.id ? { ...v, favorite: !v.favorite } : v
    );
    setVideos(updatedVideos);
    updateFavorites(updatedVideos);
  };

  const verifyFavorite = (favorite) => {
    return favorite ? favoriteActive : favoriteInactive;
  };

  const videoPlayer = (id) => {
    return videos.find((v) => v.id === id);
  };

  return (
    <VideoContext.Provider
      value={{
        videos,
        favorites,
        toggleFavorite,
        verifyFavorite,
        videoPlayer,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};

export const useVideos = () => useContext(VideoContext);
