import './Ratings.scss'
import RatingView from "@/components/RatingView";

const Ratings = (props) => {
  const {
    items
  } = props

  return (
    <div className="rating">
      <ul className="rating__list">
        {items.map(({title, ratingValue}, index) => (
          <li className="rating__item" key={index}>
            <h4 className="rating__title">{title}</h4>
            <RatingView
              value={ratingValue}
              label={ratingValue}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Ratings