
export const dayWiseData = (mainData, dayN) => {
    const filter = mainData.filter((item) => {
        return item.dayName === dayN
    })
    const sort = filter.sort((a, b) => new Date(b.day) - new Date(a.day))
    return sort
}

export const dayWiseIntervals = (arr, dayN) => {
    const getDayName = (dateStr) => {
        const [yyyy, mm, dd] = dateStr.split('-');
        const date = new Date(yyyy, mm - 1, dd);
        const day = date.toLocaleDateString('en-US', { weekday: 'short' }).toLowerCase()
        return day
    }
    const filter = arr.filter((item) => {
        return item.day === getDayName(dayN)
    })
    const sort = filter.sort((a, b) => new Date(b.day) - new Date(a.day))
    return sort
}