export const postedDate = (date) => {
    const date_ = new Date(date)
    return `${date_.toDateString()}`
}

export const timeToRead = (content) => {
    const chars = content.split("[")[1].toString().split(" ")[0].substring(1)
    return `${parseInt(chars/140)} min Read`
}