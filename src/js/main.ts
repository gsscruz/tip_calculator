//Select the field of bill
const billInputid = document.querySelector(
  '#billInputValue'
) as HTMLInputElement;
//Select the field Number of People
const numberOfPeopleInputValue = document.querySelector(
  '#numberOfPeopleInputValue'
) as HTMLInputElement;

const tipPerPersonDisplay = document.querySelector(
  '.tipAmountDisplay'
) as HTMLElement;

const billPlusTipPerPersonDisplay = document.querySelector(
  '.totalAmountDisplay'
) as HTMLElement;

const resetBtn = document.querySelector('.btn_reset') as HTMLButtonElement;

//Cast the value of the 'Bill field' to numbers
let billInputValue: number = parseFloat(billInputid.value);

//Cast the value of the 'Number of people' field to numbers
let peopleInputValue: number = parseInt(numberOfPeopleInputValue.value);

//Select all tiles that contain percentage
const tileOfPercent = document.querySelectorAll('.percent');

const calculatebillPlusTip = (billInput: number, tip: number): number => {
  tipDue = (billInput * tip) / 100;
  billPlusTip = billInput + tipDue;
  return billPlusTip;
};

//Value of Percentage tile
let percentage: number = 0;

//Hold Tip total
let tipDue: number = 0;

//Hold 'Tip per person'
let tipPerPerson: number = 0;
tipPerPersonDisplay.textContent = `$${tipPerPerson}`;

let billPlusTip: number = 0;

let totalAmountPerPerson =
  (calculatebillPlusTip(billInputValue, percentage) / peopleInputValue) | 0;

billPlusTipPerPersonDisplay.textContent = `$${totalAmountPerPerson}`;

//Feed percentage variable
tileOfPercent.forEach((tile) => {
  tile.addEventListener('click', function (e: Event) {
    peopleInputValue = parseInt(numberOfPeopleInputValue.value);
    billInputValue = parseFloat(billInputid.value);

    const target = e.target as HTMLInputElement;

    percentage = parseInt(target?.attributes.value.value);
    calculatebillPlusTip(billInputValue, percentage);
  });
});

const calculateTipPerPerson = (tip: number, personAmount: number) => {
  tipPerPerson = tip / personAmount;
};

//Calculate the tip amount due per person and total bill per person
numberOfPeopleInputValue.addEventListener('change', () => {
  peopleInputValue = parseInt(numberOfPeopleInputValue.value);
  calculateTipPerPerson(tipDue, peopleInputValue);
  totalAmountPerPerson =
    calculatebillPlusTip(billInputValue, percentage) / peopleInputValue;

  tipPerPersonDisplay.textContent = `$${tipPerPerson}`;
  billPlusTipPerPersonDisplay.textContent = `$${totalAmountPerPerson}`;
});

//Reset form
resetBtn.addEventListener('click', () => {
  tipPerPerson = 0;
  totalAmountPerPerson = 0;
  billInputid.value = '';
  numberOfPeopleInputValue.value = '';
  tipPerPersonDisplay.textContent = `$${tipPerPerson}`;
  billPlusTipPerPersonDisplay.textContent = `$${totalAmountPerPerson}`;
});
