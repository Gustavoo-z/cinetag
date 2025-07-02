const bannerFavorites = "/imagens/banner-favoritos.png";
const bannerHome = "/imagens/banner-home.png";
const bannerPlayer = "/imagens/banner-player.png";

export function verifyBanner(location) {
  if (location === "/") {
    return bannerHome;
  }
  if (location === "/favoritos") {
    return bannerFavorites;
  }
  if (location.startsWith("/player")) {
    return bannerPlayer;
  }
  return null;
}
