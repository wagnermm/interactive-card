// Input clicked
const inputClicked = (element)=> {
    element.addEventListener('click', function() {
        this.classList.add('input-clicked');
    });
};
let nameInput = document.querySelectorAll('input#name');
for( let emFoco of nameInput ) {
    inputClicked(emFoco);
};
let numberInput = document.querySelectorAll('input#number');
for( let emFoco of numberInput ) {
    inputClicked(emFoco);
};
let monthInput = document.querySelectorAll('input#month');
for( let emFoco of monthInput ) {
    inputClicked(emFoco);
};
let yearInput = document.querySelectorAll('input#year');
for( let emFoco of yearInput ) {
    inputClicked(emFoco);
};
let codeInput = document.querySelectorAll('input#code');
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

function lettersOnly(evt) {
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
const inputMonthValid = (element)=> {
    element.addEventListener('focusout', function() {
        if(this.value == "") {
            document.querySelector('.erro-month').innerHTML = "Can`t be blank";
            this.classList.add('erro');
        } else {
            document.querySelector('.erro-month').innerHTML = "";
            this.classList.remove('erro');
        };
    });
};
for( let emFoco of monthInput ) {
    inputMonthValid(emFoco);
};

// Input valid year
const inputYearValid = (element)=> {
    element.addEventListener('focusout', function() {
        if(this.value == "") {
            document.querySelector('.erro-year').innerHTML = "";
            this.classList.add('erro');
        } else {
            document.querySelector('.erro-year').innerHTML = "";
            this.classList.remove('erro');
        };
    });
};
for( let emFoco of yearInput ) {
    inputYearValid(emFoco);
};

// Input valid code
const inputCodeValid = (element)=> {
    element.addEventListener('focusout', function() {
        if(this.value == "") {
            document.querySelector('.erro-code').innerHTML = "Can`t be blank";
            this.classList.add('erro');
        } else {
            document.querySelector('.erro-code').innerHTML = "";
            this.classList.remove('erro');
        };
    });
};
for( let emFoco of codeInput ) {
    inputCodeValid(emFoco);
};