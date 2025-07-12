import getIdFromTitle from "@/utils/getIdFromTitle";

const getTabsElementsIdFromTitle = (title) => {
  const titleFormatted = getIdFromTitle(title)

  return {
    buttonId: `${titleFormatted}-tab`,
    contentId: `${titleFormatted}-tab-content`,
  }
}

export default getTabsElementsIdFromTitle