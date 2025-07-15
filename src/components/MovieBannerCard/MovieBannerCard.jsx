import './MovieBannerCard.scss'
import Button from "@/components/Button";

const MovieBannerCard = (props) => {
  const {
    title,
    description,
    imgSrc,
  } = props

  return (
    <div
      className="movies-banner-card"
    >
      <Image
        className="movies-banner-card__image"
        src={imgSrc}
      />
      <div
        className="movies-banner-card__inner"
      >
        <div className="movies-banner-card__body">
          <div className="movies-banner-card__title h3">
            {title}
          </div>
          <div className="movies-banner-card__description hidden-mobile">
            <p>{description}</p>
          </div>
        </div>
        <footer className="movies-banner-card__footer">
          <Button
            className="movie-banner-card__button"
            label="Play Now"
            iconName="play"
          />
          <div className="movies-banner-card__actions">
            <Button
              mode="black-06"
              iconName="plus"
              label="plus"
              isLabelHidden
            />
            <Button
              mode="black-06"
              iconName="like"
              label="like"
              isLabelHidden
            />
            <Button
              mode="black-06"
              iconName="volum"
              label="volum"
              isLabelHidden
            />
          </div>
        </footer>
      </div>
    </div>
  )

}

export default MovieBannerCard