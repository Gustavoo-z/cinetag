const bannerFavorites = "imagens/banner-favoritos.png";
const bannerHome = "imagens/banner-home.png";

export function verifyBanner(location) {
  if (location === "/favoritos") {
    return bannerFavorites;
  }
  if (location === "/") {
    return bannerHome;
  } else {
    return;
  }
}
