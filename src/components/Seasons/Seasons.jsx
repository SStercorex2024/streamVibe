import './Seasons.scss'
import AccordionGroup from "@/components/AccordionGroup";
import seasonItems from "@/components/Seasons/seasonItems";
import Accordion from "@/components/Accordion";

const Seasons = () => {
  return (
    <AccordionGroup
      className="seasons"
      mode="dark"
      isOrderedList={false}
      isHiddenBottomLine={true}
    >
      {seasonItems.map(({title, subtitle, episodes}, index) => (
        <Accordion
          title={title}
          titleLevelClassName="h4"
          subtitle={subtitle}
          id={`season-${index}`}
          name="season"
          isOpen={index === 0}
          isArrowButton
          key={index}
        >
          <ul className="seasons__list">
            {episodes.map((episode, index) => (
              <li className="seasons__item" key={index}>{episode.title}</li>
            ))}
          </ul>
        </Accordion>
      ))}
    </AccordionGroup>
  )
}

export default Seasons