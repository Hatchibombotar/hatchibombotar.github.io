const MONTH_TEXT = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
]

export function formatDate(date_input: Date | string) {
    const date = new Date(date_input)
    return `${date.getDate()} ${MONTH_TEXT[date.getMonth()]}, ${date.getFullYear()}`
}