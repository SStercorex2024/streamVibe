import getAttrsNameFromSelector from "@/utils/getAttrsNameFromSelector";

const getParams = (element, dataAttrSelector) => {
  return JSON.parse(
    element.getAttribute(
      getAttrsNameFromSelector(dataAttrSelector)
    )
  )
}

export default getParams;

