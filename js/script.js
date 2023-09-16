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
const inputNameValid = (element)=> {
    element.addEventListener('focusout', function() {
        if(this.value == "") {
            document.querySelector('.erro-name').innerHTML = "Can`t be blank";
            this.classList.add('erro');
        } else {
            document.querySelector('.erro-name').innerHTML = "";
            this.classList.remove('erro');
        };
    });
};
for( let emFoco of nameInput ) {
    inputNameValid(emFoco);
};

// Letters only
const lettersOnly = (evt)=> {
    evt = (evt) ? evt : event;
    var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode : ((evt.which) ? evt.which : 0));
    if (charCode > 31 && (charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 122)) {
        return false;
    }
    return true;
};

// Input valid number
let numberValid = /^[0-9]{16}$/;
const inputNumberValid = (element)=> {
    element.addEventListener('focusout', function() {
        if(this.value.match(numberValid)) {
            document.querySelector('.erro-number').innerHTML = "";
            this.classList.remove('erro');
            return false;
        } else {
            document.querySelector('.erro-number').innerHTML = "Wrong format, numbers only";
            this.classList.add('erro');
        };
    });
};
for( let emFoco of numberInput ) {
    inputNumberValid(emFoco);
};

// Input valid month
let monthValid = /^[0-9]{2}$/;
const inputMonthValid = (element)=> {
    element.addEventListener('focusout', function() {
        if(this.value.match(monthValid)) {
            document.querySelector('.erro-month').innerHTML = "";
            this.classList.remove('erro');
        } else {
            document.querySelector('.erro-month').innerHTML = "Can`t be blank";
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

// Valid submit