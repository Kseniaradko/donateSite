import './index.css';
import { DonateItem } from './src/app';
import { sumOfDonates } from './src/utils';

const form = document.querySelector('.donate-form')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    const { target } = event;
    const amountInput = target.amount;
    const inputValue = amountInput.value.trim();
    console.log(1, typeof inputValue)
    sumOfDonates(Number(inputValue))
    const newElement = new DonateItem(inputValue);
    newElement.makeItem();
    amountInput.value = '';
})


