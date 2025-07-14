const getIdFromTitle = (title) => {
  return title
  .toLocaleLowerCase()
  .replace('', '-')

}

export default getIdFromTitle