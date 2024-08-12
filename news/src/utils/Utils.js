const postedDate = (date) => {
    const date_ = new Date(date)
    return `${date_.toDateString()}`
}

const timeToRead = (chars) => {
    return chars/140
}
export default postedDate 