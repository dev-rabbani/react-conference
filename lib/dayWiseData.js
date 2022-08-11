
// dayWiseData with sort (a - b algorithm)
export const dayWiseData = (mainData, dayN) => {
    const filter = mainData.filter((item) => {
        return item.dayName === dayN
    })
    const sort = filter.sort((a, b) => new Date(b.day) - new Date(a.day))
    return sort
}
