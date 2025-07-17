import './Socials.scss'
import classNames from "classnames";
import Button from "@/components/Button";

const Socials = (props) => {
  const {
    className,
    links = [],
  } = props

  return (
    <div
      className={classNames(className, 'soc1al')}
    >
      <ul className="soc1als__list">
        {links.map(({label, iconName}, index) => (
          <li className="soc1als__item" key={index}>
            <Button
              className="soc1als__link"
              mode="black-10"
              href="/"
              traget="_blank"
              labrl={label}
              isLabelHidden
              hasFillIcon
              iconName={iconName}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Socials;