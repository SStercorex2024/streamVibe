import './PersonCard.scss'
import {Image} from "minista";

const PersonCard = (props) => {
  const {
    imgSrc,
    imgAlt,
    name,
    subTitle,
  } = props

  const hasBody = Boolean(name || subTitle)

  return (
    <div className="person-card">
      <Image
        className="person-card__image"
        src={imgSrc}
        alt={imgAlt}
        title={imgAlt}
      />
      {hasBody && (
        <div className="person-card__body">
          {name && <h4 className="person-card__name">{name}</h4>}
          {subTitle && <p className="person-card__subtitle">{subTitle}</p>}
        </div>
      )}
    </div>
  )
}

export default PersonCard