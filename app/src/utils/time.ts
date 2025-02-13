export function timeAgo(date: Date | string): string {
    const now = new Date();
    const past = new Date(date);
    const msPerMinute = 60 * 1000;
    const msPerHour = msPerMinute * 60;
    const msPerDay = msPerHour * 24;
    const msPerWeek = msPerDay * 7;
    const msPerMonth = msPerDay * 30;
    const msPerYear = msPerDay * 365;

    const elapsed = now.getTime() - past.getTime();

    if (elapsed < msPerMinute) {
        const seconds = Math.round(elapsed / 1000);
        return `${seconds} ${seconds === 1 ? 'second' : 'seconds'} ago`;
    } else if (elapsed < msPerHour) {
        const minutes = Math.round(elapsed / msPerMinute);
        return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ago`;
    } else if (elapsed < msPerDay) {
        const hours = Math.round(elapsed / msPerHour);
        return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
    } else if (elapsed < msPerWeek) {
        const days = Math.round(elapsed / msPerDay);
        return `${days} ${days === 1 ? 'day' : 'days'} ago`;
    } else if (elapsed < msPerMonth) {
        const weeks = Math.round(elapsed / msPerWeek);
        return `${weeks} ${weeks === 1 ? 'week' : 'weeks'} ago`;
    } else if (elapsed < msPerYear) {
        const months = Math.round(elapsed / msPerMonth);
        return `${months} ${months === 1 ? 'month' : 'months'} ago`;
    } else {
        const years = Math.round(elapsed / msPerYear);
        return `${years} ${years === 1 ? 'year' : 'years'} ago`;
    }
}

export function filterGranteesByTime(grantees: any[], timeFilter: 'latest' | 'this-week' | 'this-month' | 'all-time'): any[] {
    const now = new Date();
    const msPerDay = 24 * 60 * 60 * 1000;
    const msPerWeek = 7 * msPerDay;
    const msPerMonth = 30 * msPerDay;

    return grantees.filter(grantee => {
        const createdDate = new Date(grantee.time_created);
        const elapsed = now.getTime() - createdDate.getTime();

        switch (timeFilter) {
            case 'latest':
                // Return the most recent grantees (last 24 hours)
                return elapsed <= msPerDay;
            case 'this-week':
                return elapsed <= msPerWeek;
            case 'this-month':
                return elapsed <= msPerMonth;
            case 'all-time':
                return true;
            default:
                return true;
        }
    });
} 