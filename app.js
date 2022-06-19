import { getDateFormat } from "./utils";


export class DonateItem {
    #date

    constructor(donateSum) {
        this.donateSum = donateSum
        this.#date = new Date();
    }

    makeItem() {
        const donateItem = document.createElement('div');
        donateItem.className = 'donate-item';
        donateItem.textContent = getDateFormat(this.#date);
        const sumOfMoney = document.createElement('b');
        sumOfMoney.textContent = ` - ${this.donateSum}$`;
        donateItem.append(sumOfMoney)
        const donateContainer = document.querySelector('.donates-container__donates')
        donateContainer.append(donateItem)
    }
}