export const getDayName = (dateStr) => {
    const [yyyy, mm, dd] = dateStr.split('-');
    const date = new Date(yyyy, mm - 1, dd);
    const day = date.toLocaleDateString('en-US', { weekday: 'short' }).toLowerCase()
    return day
}