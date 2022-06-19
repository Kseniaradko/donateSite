import moment from "moment";

export const getDateFormat = (date) => {
    return moment(date).format('MMMM Do YYYY, h:mm:ss a');
}

export const sumOfDonates = (donate) => {
    const totalAmount = document.querySelector('#total-amount')
    const text = totalAmount.textContent;

    const indexOfDollar = text.indexOf('$');
    const existingSum = Number(text.slice(0, indexOfDollar))
    const sum = existingSum + donate;
    totalAmount.textContent = `${String(sum)}$`;
}
