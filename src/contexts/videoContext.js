import { createContext, useContext, useState } from "react";
import favoriteActive from "../components/Card/favorite.png";
import favoriteInactive from "../components/Card/favorite_outline.png";
import videosInicial from "../json/db.json";

const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState(videosInicial);
  const [favorites, setFavorites] = useState([]);

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

  return (
    <VideoContext.Provider
      value={{
        videos,
        favorites,
        toggleFavorite,
        verifyFavorite,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};

export const useVideos = () => useContext(VideoContext);
