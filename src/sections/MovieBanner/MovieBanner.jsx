import './MovieBanner.scss'
import MovieBannerCard from "@/components/MovieBannerCard";

const MovieBanner = () => {
  const titleId = 'movie-banner-title'

  return (
    <MovieBannerCard
      title="Kantara"
      titleId={titleId}
      TitleTag="h1"
      isSmallPaddingY
      description="A fiery young man clashes with an unflinching forest officer in a south Indian village where spirituality, fate and folklore rule the lands."
      imgSrc="/src/assets/images/movie-banner/1.jpg"
    />
  )
}

export default MovieBanner