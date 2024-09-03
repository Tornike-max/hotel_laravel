export function formatDate(dateString: string): string {
    const date = new Date(dateString);

    // Options for formatting the date
    const options: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
    };

    return date.toLocaleDateString(undefined, options);
}
