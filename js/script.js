// Select elements
let nameInput = document.querySelectorAll('input#name');
let numberInput = document.querySelectorAll('input#number');
let monthInput = document.querySelectorAll('input#month');
let yearInput = document.querySelectorAll('input#year');
let codeInput = document.querySelectorAll('input#code');
let form = document.getElementById('form');
let btnForm = document.getElementById('submit-form');

// Input clicked
const inputClicked = (element)=> {
    element.addEventListener('click', function() {
        this.classList.add('input-clicked');
    });
};
for( let emFoco of nameInput ) {
    inputClicked(emFoco);
};
for( let emFoco of numberInput ) {
    inputClicked(emFoco);
};
for( let emFoco of monthInput ) {
    inputClicked(emFoco);
};
for( let emFoco of yearInput ) {
    inputClicked(emFoco);
};
for( let emFoco of codeInput ) {
    inputClicked(emFoco);
};

// Input valid name
let nameValid = /^[a-zA-Z\s]+$/;
const inputNameValid = (element)=> {
    element.addEventListener('focusout', function() {
        if(this.value.match(nameValid)) {
            document.querySelector('.erro-name').innerHTML = "";
            this.classList.remove('erro');
        } else if(this.value == "") {
            document.querySelector('.erro-name').innerHTML = "Can`t be blank";
            this.classList.add('erro');
        } else {
            document.querySelector('.erro-name').innerHTML = "Wrong format, letters only";
            this.classList.add('erro');
        };
    });
};
for( let emFoco of nameInput ) {
    inputNameValid(emFoco);
};

// Input valid number
let numberValid = /^\d{4} \d{4} \d{4} \d{4}$/;
const inputNumberValid = (element)=> {
    element.addEventListener('focusout', function() {
        if(this.value.match(numberValid)) {
            document.querySelector('.erro-number').innerHTML = "";
            this.classList.remove('erro');
            return false;
        } else if(this.value == "") {
            document.querySelector('.erro-number').innerHTML = "Can`t be blank";
            this.classList.add('erro');
        } else {
            document.querySelector('.erro-number').innerHTML = "Wrong format";
            this.classList.add('erro');
        };
    });
};
for( let emFoco of numberInput ) {
    inputNumberValid(emFoco);
};

// Input valid month
let monthValid = /^(0[1-9]|1[0-2])$/;
const inputMonthValid = (element)=> {
    element.addEventListener('focusout', function() {
        if(this.value.match(monthValid)) {
            document.querySelector('.erro-month').innerHTML = "";
            this.classList.remove('erro');
        } else if(this.value == "") {
            document.querySelector('.erro-month').innerHTML = "Can`t be blank";
            this.classList.add('erro');
        } else {
            document.querySelector('.erro-month').innerHTML = "Wrong format";
            this.classList.add('erro');
        };
    });
};
for( let emFoco of monthInput ) {
    inputMonthValid(emFoco);
};

// Input valid year
let yearValid = /^[0-9]{2}$/;
const inputYearValid = (element)=> {
    element.addEventListener('focusout', function() {
        if(this.value.match(yearValid)) {
            document.querySelector('.erro-year').innerHTML = "";
            this.classList.remove('erro');
        } else {
            document.querySelector('.erro-year').innerHTML = "";
            this.classList.add('erro');
        };
    });
};
for( let emFoco of yearInput ) {
    inputYearValid(emFoco);
};

// Input valid code
let codeValid = /^[0-9]{3}$/;
const inputCodeValid = (element)=> {
    element.addEventListener('focusout', function() {
        if(this.value.match(codeValid)) {
            document.querySelector('.erro-code').innerHTML = "";
            this.classList.remove('erro');
        } else {
            document.querySelector('.erro-code').innerHTML = "Can`t be blank";
            this.classList.add('erro');
        };
    });
};
for( let emFoco of codeInput ) {
    inputCodeValid(emFoco);
};

// Input transfer
const inputTransferNumber =()=> {
    const number = document.querySelector('#number');
    const numberCard = document.querySelector('#number-card');
    numberCard.value = number.value;
};

const inputTransferName =()=> {
    const name = document.querySelector('#name');
    const nameCard = document.querySelector('#namePeople-card');
    nameCard.value = name.value;
};

const inputTransferMonth =()=> {
    const month = document.querySelector('#month');
    const monthCard = document.querySelector('#monthValue');
    monthCard.value = month.value;
};

const inputTransferYear =()=> {
    const year = document.querySelector('#year');
    const yearCard = document.querySelector('#yearValue');
    yearCard.value = year.value;
};

const inputTransferCode =()=> {
    const code = document.querySelector('#code');
    const codeCard = document.querySelector('#card-code');
    codeCard.value = code.value;
};

// Valid submit