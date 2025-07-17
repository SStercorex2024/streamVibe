import './MoviesBanner.scss'
import Slider from "@/components/Slider";
import MovieBannerCard from "@/components/MovieBannerCard";

const MoviesBanner = () => {
  const titleId = 'movies-banner-title'

  const movieCards = [
    {
      title: 'Avengers : Endgame',
      description: 'With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos\'s actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face... Avenge the fallen.',
      imgSrc: '/src/assets/images/movies-banner/1.png'
    },
    {
      title: 'Avengers : Endgame',
      description: 'With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos\'s actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face... Avenge the fallen.',
      imgSrc: '/src/assets/images/movies-banner/1.png'
    },
    {
      title: 'Avengers : Endgame',
      description: 'With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos\'s actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face... Avenge the fallen.',
      imgSrc: '/src/assets/images/movies-banner/1.png'
    },
    {
      title: 'Avengers : Endgame',
      description: 'With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos\'s actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face... Avenge the fallen.',
      imgSrc: '/src/assets/images/movies-banner/1.png'
    },
  ]

  return (
    <section
      aria-labelledby={titleId}
      className="movies-banner container"
    >
      <h1
        className="visually-hidden"
        id={titleId}
      >
        Movies & Shows
      </h1>
      <Slider
        sliderParams={{
          slidesPerView: 1,
          breakpoints: {
            1024: {
              allowTouchMove: false
            }
          }
        }}
        navigationPosition="abs-bottom"
        hasScrollbarOnMobile={false}
      >
        {movieCards.map((movieCard, index) => (
          <MovieBannerCard
            {...movieCard}
            key={index}
          />
        ))}
      </Slider>
    </section>
  )

}

export default MoviesBanner