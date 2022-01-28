// Bind method makes a copy of the method that we can bind to a variable and use it later

let mystryPerson = {
  firstName: 'Joe',
  lastName: 'Biden',
};

let printFullName2 = function (country, zipcode) {
  console.log(
    `${this.firstName} ${this.lastName} lives in ${country} in zipcode ${zipcode}`
  );
};

let openTheBinder = printFullName2.bind(mystryPerson, 'USA', '99999');
console.log(openTheBinder); // --> returns us a function that we need to invoke when we need it

openTheBinder(); //   Joe Biden lives in USA in zipcode 99999     logs this when we invoke it

/* 
remember that bind method does not directly calls the method like apply and call methods. 
Instead it attaches the method to a function that we invoke whenever we need it */
