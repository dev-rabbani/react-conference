
export const dayWiseData = (eventData, dayN) => {
    const filter = eventData.filter((item) => {
        return item.dayName === dayN
    })
    const sort = filter.sort((a, b) => new Date(b.startDate) - new Date(a.startDate))
    return sort
}