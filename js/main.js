"use strict";
//Select the field of bill
const billInputid = document.querySelector('#billInputValue');
//Select the field Number of People
const numberOfPeopleInputValue = document.querySelector('#numberOfPeopleInputValue');
const tipPerPersonDisplay = document.querySelector('.tipAmountDisplay');
const billPlusTipPerPersonDisplay = document.querySelector('.totalAmountDisplay');
const resetBtn = document.querySelector('.btn_reset');
//Cast the value of the 'Bill field' to numbers
let billInputValue = parseFloat(billInputid.value);
//Cast the value of the 'Number of people' field to numbers
let peopleInputValue = parseInt(numberOfPeopleInputValue.value);
//Select all tiles that contain percentage
const tileOfPercent = document.querySelectorAll('.percent');
const calculatebillPlusTip = (billInput, tip) => {
    tipDue = (billInput * tip) / 100;
    billPlusTip = billInput + tipDue;
    return billPlusTip;
};
//Value of Percentage tile
let percentage = 0;
//Hold Tip total
let tipDue = 0;
//Hold 'Tip per person'
let tipPerPerson = 0;
tipPerPersonDisplay.textContent = `$${tipPerPerson}`;
let billPlusTip = 0;
let totalAmountPerPerson = (calculatebillPlusTip(billInputValue, percentage) / peopleInputValue) | 0;
billPlusTipPerPersonDisplay.textContent = `$${totalAmountPerPerson}`;
//Feed percentage variable
tileOfPercent.forEach((tile) => {
    tile.addEventListener('click', function (e) {
        peopleInputValue = parseInt(numberOfPeopleInputValue.value);
        billInputValue = parseFloat(billInputid.value);
        const target = e.target;
        percentage = parseInt(target === null || target === void 0 ? void 0 : target.attributes.value.value);
        calculatebillPlusTip(billInputValue, percentage);
    });
});
const calculateTipPerPerson = (tip, personAmount) => {
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
