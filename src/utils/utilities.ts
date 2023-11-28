export const roundNumber = (number: number, digits: number) => {
    return Number(number.toFixed(digits))
}

export const formatNumber = (number: number) => {
    return new Intl.NumberFormat("en-US").format(number);
};

export const formatDate = (time: number) => {
    const date = new Date(time);
    return new Intl.DateTimeFormat("en-US").format(date);
}
