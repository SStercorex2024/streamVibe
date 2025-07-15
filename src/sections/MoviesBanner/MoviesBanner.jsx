import './MoviesBanner.scss'

const MoviesBanner = () => {
  const titleId = 'movies-banner-title'

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
    </section>
  )

}

export default MoviesBanner