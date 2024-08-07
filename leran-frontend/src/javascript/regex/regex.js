import React from "react";

//

//a-z
// const pattern = /[a-z]/
// const input = "test" //true
// const input = "" //false
// const input = "12" //false

//A-Z
// const pattern = /[A-Z]/
// const input = "test" //false
// const input = "Test" //true
// const input = "TEst" //true
// const input = "" //false
// const input = "12" //false
// const pattern = /[E-Z]/
// const input = "A" //false
// const input = "N" //true

//a-z A-Z
// const pattern = /[A-Z][a-z]/
// const input = "N" //false
// const input = "Na" //true
// const input = "TEST" //false
// const input = "tEST" //false
// const input = "Test" //true

//[0-9]
// const pattern = /[0-9]/
// const input = "8" //true

// const pattern = /[6-8]/
// const input = "9" //false
// const input = "7" //true

// const pattern = /[#]/
// const input = "#3333" //true

// const pattern = /[a-z6]/
// const input = "#3333" //false
// const input = "6" //true
// const input = "0a" //true

//  /[A-Z][a-z][0-9]/

// const pattern = /[A-Z][a-z][0-9]/
// const input = "N" //false
// const input = "TEST" //false
// const input = "tEST" //false
// const input = "tEST901" //false
// const input = "Test7" //false
// const input = "Te7" //true //pakathil
// const input = "Te7st" //true //pakathil
// const input = "Tes7t" //false

// /[a-z]+[0-9]/

// const pattern = /[a-z]+[0-9]/
// const input = "test7" //true
// const pattern = /[a-d]+[0-9]/
// const input = "test7" //false
// const pattern = /[a-f]+[0-9]/
// const input = "tebfa7" //true

// const pattern = /[A-Z]+[a-z]+[0-9]/
// const input = "TESt901" //true\
// const input = "tESt901" //true
// const input = "tEST901" //false

// /[a-z]*[0-9]/
// const pattern = /[a-z]*[0-9]/
// const input = "sssss0" //true\

// const pattern = /[c-f]*[0-9]/
// const input = "sssss0" //true\
// const input = "sssss" //false

// const pattern = /[c-f]?[0-9]/
// const input = "sssss0" //true\
// const input = "sssss" //false
// const input = "9" //true

// const pattern = /[c-f]{1}[0-9]/
// const input = "ccccc0" //true
// const input = "ccccg0" //false

// const pattern = /[c-f]{1,}[0-9]/
// const input = "cccckkkk0" //false
// const input = "cdef0" //true

// const pattern = /[a-e]{1,5}[0-9]/
// const input = "abcde5" //true
// const input = "abcdf5" //false
// const input = "ffcdc5" //true

// const pattern = /[a-e]{2,5}[0-9]/
// const input = "ffcfc5" //false
// const input = "abfdc5" //true
// const input = "abfdcaede5" //true
// const input = "abfdcaedef5" //false
// const input = "c4" //false

// const pattern = /[a-e]{2,}[0-9]/
// const input = "ffcfc5" //false
// const input = "ffcfcd5" //true
// const input = "ffcfcdcafsdeeaea5" //true

// /^
// const pattern = /^[a-e]{2,5}[0-5]/
// const input = "ab5" //true
// const input = "ab 5" //false
// const input = "ab5 " //true
// const input = "fb5" //false
// const input = "b5" //false
// const input = "bcdededede5" //false
// const input = "abcde5" //true

// $/
// const pattern = /[a-e]{2,5}[0-5]$/
// const input = "abcde5" //true
// const input = "abcdf5" //false
// const input = "abcfa5" //false
// const input = "aabcde5" //true
// const input = "aabc de5" //true
// const input = "aabc de 5" //false

// const pattern = /[a-e]{3,5}[0-5]$/;
// const input = "aabfde5" //false
// const input = "aabde5" //true
// const input = "aabdeeeeee5"; //true
// const input = "abfabc5"; //true

// const pattern = /^[a-e]{3,5}[0-5]$/
// const input = "aabde5" //true
// const input = "aabde7" //false
// const input = "aabdea5" //false
// const input = "aabdea5" //false
// const input = "aabfea5" //false

// const pattern = /[a-e]{3,5}[0-5]$/
// const input = "aabfde5" //false
// const input = "aabde5" //true
// const input = "azabde5" //true
// const input = "aazbde5" //true
// const input = "aazde5" //false

// /^$/
// const pattern = /^[a-e]{3,5}[0-5]$/;
// const input = "abcabc5"; //false
// const input = "abc5"; //true

// const pattern = /[a-e]{3,5}[0-5]$/
// // const input = "aabfde5" //false
// const input = "aabde5" //true

// const pattern = /^[a-e]{1,5}[0-5]/
// const input = "lb5" //false
// const input = "lb5" //false
// const input = "baacda5" //false
// const input = "baacd5" //true

// or condition |
// const pattern = /[a-e]{1,5}[0-5]|[7-8]/
// const input = "lb5" //true
// const input = "lb6" //false
// const input = "ld7" //true work with or condition
// const pattern = /^[a-e]{1,5}[0-5]|[7-8]/
// const input = "b59" //true  work with or condition
// const input = "1b57" //true  work with or condition
// const input = "1b59" //false  work with or condition

//() condition
// const pattern = /[a-e]{1,5}[0-5]|[7-8]/
// const input = "lb5" //true
// const input = "lb6" //false
// const input = "ld57" //true
// const input = "ld50" //true any one match
// const input = "ld59" //true any one match
// const input = "ld69" //false any one match
// const input = "lf58" //true any one match

// const pattern = /^(([a-e]{1,5}[0-5])|[7-8])/
// const input = "ld57" //false
// const input = "d59" //true
// const input = "d69" //false
// const input = "8f7" //true

//grouping with or condition
// const pattern = /^(([a-e]{1,5}[0-5])|[7-8])/;
// const input = "8f7"; //true

// const pattern = /\d\$$/;
// const input = "the petrol price is 5$"; //true

// const pattern = / [a-z]+\d\$$/;
// const input = "the petrol price is 5$"; //false

// \s replace space
// const pattern = /\s[a-z]+\d\$$/; //
// const input = "the petrol price is balamurugan5$"; //true

// [a-z]replace \w
// const pattern = /\s\w{1,4}\d\$$/; //
// const input = "the petrol price is balamurugan5$"; //true
// const input = "the petrol price is balamurugan$"; //false
// const input = "the petrol price is bala5$"; //true
// const input = "the petrol price is balamurugan5$"; //false

// const pattern = /\s\w{1,4}\d\$$/;
// const input = "abcfbcc5"; //true
// const input = "the petrol price  balamurugan5$"; //false
// const input = "the petrol price  balamur ugan5$"; //true

//boundary \b
// const pattern = /\bmurugan\b/;
// const input = "my name is balamurugan"; //false
// const input = "my name is bala murugan"; //true
// const pattern = /murugan/;
// const input = "my name is balamurugan"; //true

// negative scenario
// \S
// const pattern = /\S/;
// const input = "my name is balamurugan"; //true
// const input = "my "; //true
// const input = " "; //false

//\W

const pattern = /\W/;
// const input = "my name is balamurugan"; //true //reason i have space except word
// const input = "Balamurugan"; //false
// const input = "Bala_murugan"; //false
// const input = "Bala_murugan$"; //true
// const input = "Balamurugan_"; //false
const input = "Balamurugan-"; //true

console.log(pattern.test(input));

function Regex() {
  return <h1>REGEX </h1>;
}

export default Regex;
