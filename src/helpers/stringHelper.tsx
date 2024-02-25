export function getTimeDifference(
    date: Date,
    currentDate: Date = new Date(),
): string {
    const timeDifference = currentDate.getTime() - date.getTime();

    const millisecondsInYear = 1000 * 60 * 60 * 24 * 365;
    const millisecondsInMonth = 1000 * 60 * 60 * 24 * 30;
    const millisecondsInWeek = 1000 * 60 * 60 * 24 * 7;
    const millisecondsInDay = 1000 * 60 * 60 * 24;
    const millisecondsInHour = 1000 * 60 * 60;

    const years = Math.floor(timeDifference / millisecondsInYear);
    const months = Math.floor(timeDifference / millisecondsInMonth);
    const weeks = Math.floor(timeDifference / millisecondsInWeek);
    const days = Math.floor(timeDifference / millisecondsInDay);
    const hours = Math.floor(timeDifference / millisecondsInHour);

    if (years > 0) {
        return `${years} year${years > 1 ? 's' : ''} ago`;
    } else if (months > 0) {
        return `${months} month${months > 1 ? 's' : ''} ago`;
    } else if (weeks > 0) {
        return `${weeks} week${weeks > 1 ? 's' : ''} ago`;
    } else if (days > 0) {
        return `${days} day${days > 1 ? 's' : ''} ago`;
    } else {
        return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    }
}
