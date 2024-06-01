import React from 'react'
import person1 from '../reactHookes/Hoc/method2/person1';

function ArrayMethod() {
    const studentDetails = [
        {
            name: "balamurugan",
            age: 22,
            salary: 3000,
            address: "srivi"
        },
        {
            name: "murugan",
            age: 22,
            salary: 2000,
            address: "rjpm"
        },
        {
            name: "vel",
            age: 23,
            salary: 1000,
            address: "madurai"
        },
        {
            name: "kali",
            age: 13,
            salary: 4000,
            address: "madurai"
        }
    ]
    const studentDetails2 = [
        {
            name: "selvam",
            age: 20,
            salary: 300,
            address: "srivi"
        },
        {
            name: "manikam",
            age: 30,
            salary: 200,
            address: "rjpm"
        },
        {
            name: "kani",
            age: 38,
            salary: 100,
            address: "madurai"
        }
    ]
    //at method
    // const char = ['a', 'b', 'c', 'd']
    // const b = char.at(2)
    // console.log(b) //1
    // console.log(char.at(-4))//a

    //***************************************************************************************** */
    //concat
    // const char1 = ['a', 'b', 'c', 'd']
    // const char2 = ['e', 'f', 'g', 'h']

    //method1
    // const concatArray11 = char1.concat(char2)
    // console.log("concatArray1",concatArray1);
    // const concatArrayObj1 = studentDetails.concat(studentDetails2)
    // console.log("concatArrayObj1", concatArrayObj1);

    // method 2
    // const concatArray2 = [...char1, ...char2]
    // console.log("con catArray2", concatArray2);
    // const concatArrayObj2 = [...studentDetails, ...studentDetails2]
    // console.log("concatArrayObj2", concatArrayObj2);
    //************************************************************************************************** */
    //copy ithin
    // const name = ['bala', 'murugan', 'raj', 'pandi', 'kali', 'kumar']
    // console.log("copyWithin1", name.copyWithin(0, 1, 2));
    // console.log("copyWithin2", name.copyWithin(0, 1, 2));
    // console.log("copyWithin2", name.copyWithin(1, 0, 2));
    // console.log("copyWithin2", name.copyWithin(4, 0, 2));
    // console.log("copyWithin2", name.copyWithin(4, 1, 1));
    //*********************************************************************************** */
    //entrirs
    // const nameArray = ['bala', 'murugan', 'raj', 'pandi', 'kali', 'kumar']
    // let iterator = nameArray.entries();
    //console.log(iterator)
    // console.log(iterator.next().value);

    //only get values
    // for (let iterating of nameArray) {
    //     console.log(iterating) //outpu: bala,,urugan
    // }

    // for (let iterating of iterator) {
    //     // console.log(iterating) //outpu:[0,bala]
    //     // console.log(iterating[1]) //outpu:bala,,urugan
    //     // console.log(iterating[0]) //outpu:0,1
    // }
    // method2
    // const iterator = studentDetails.entries()
    // console.log(iterator.next().value)
    // //only get values
    // for (let iterating of studentDetails) {
    //     console.log(iterating) //outpu: bala,,urugan
    // }

    // for (let iterating of iterator) {
    //     // console.log(iterating) //outpu:[0,bala]
    //     // console.log(iterating[1]) //outpu:bala,,urugan
    //     // console.log(iterating[0]) //outpu:0,1
    // }

    //************************************************************************************ */
    // values of
    // const nameArray = ['bala', 'murugan', 'raj', 'pandi', 'kali', 'kumar']
    // let iterator = nameArray.values();
    // console.log(iterator.next().value); //bala

    // ********************************************************************************/
    //Every and Some and find
    // const mark = [10, 20, 30, 40, 50, 70];
    // const result = mark.every((mark) => {
    //     return mark > 50
    // })
    // console.log(result) //false
    // const result = mark.every((mark) => {
    //     return mark < 80
    // })
    // console.log(result) //true

    //method 2
    // const everyValue = studentDetails.every((data) => {
    //     return data.age < 20 && data.salary < 5000
    // })
    // console.log(everyValue); //false
    // const everyValue = studentDetails.every((data) => {
    //     return data.age > 20 && data.salary < 5000
    // })
    // console.log(everyValue); //true
    // const everyValue1 = studentDetails.every((data) => {
    //     return data.age < 20 || data.salary < 5000
    // })
    // console.log(everyValue1); //true

    // const everyValue2 = studentDetails.every((data) => {
    //     return data.age === 23 && data.salary === 1000 && data.address === 'madurai'
    // })
    // console.log(everyValue2) //false

    // ************************SOME*******************************************/
    // const someValue = mark.some((mark) => {
    //     return mark > 50
    // })
    // console.log(someValue); //true

    // const someValue = mark.some((mark) => {
    //     return mark < 5
    // })
    // console.log(someValue); //false

    // const everyValue = studentDetails.some((data) => {
    //     return data.age > 20 || data.salary < 5000
    // })
    // console.log(everyValue); //false

    // const everyValue1 = studentDetails.some((data) => {
    //     return data.age < 20 || data.salary < 5000
    // })
    // console.log(everyValue1); //true

    // const everyValue2 = studentDetails.some((data) => {
    //     return data.age === 23 && data.salary === 1000 && data.address === 'madurai'
    // })
    // console.log(everyValue2) //true
    // ******************************FIND*************************************/
    // const everyValue2 = studentDetails.find((data) => {
    //     return data.age === 23 && data.salary === 1000 && data.address === 'madurai'
    // })
    // console.log(everyValue2)
    // ********************************************************************************/
    //Fill Method
    // const nameArray = ['bala', 'murugan', 'raj', 'pandi', 'kali', 'kumar'];
    // console.log(nameArray.fill("vel", 1, 2))
    // let array = [
    //     { name: 'John', age: 30 },
    //     { name: 'Alice', age: 25 }, //output { name: 'Unknown', age: 0 }
    //     { name: 'Bob', age: 35 }
    // ];
    // // Using fill() to change all objects in the array
    // let newArray = array.fill({ name: 'Unknown', age: 0 }, 1, 2);
    // console.log(newArray);
    // ********************************************************************************/
    //FindIndex, indexOf,lastIndex
    // const nameArray = ['bala', 'murugan', 'raj', 'murugan', 'pandi', 'murugan', 'kali', 'pandi', 'kumar'];
    //findIndex method 1 , instead of method2 indexof
    // const index = nameArray.findIndex((data, i) => data === 'murugan');
    // console.log(index);

    //avoid duplicate value in array
    // const newArr = [];
    // for (const iterator of nameArray) {
    //     console.log(iterator)
    //     if (newArr.indexOf(iterator) === -1) {
    //         newArr.push(iterator)
    //     }
    // }
    // console.log(newArr);



    //lastIndex
    // const index = nameArray.indexOf('pandi')
    // console.log(index); // index->3 -> value not in array ->index -1
    // const index = nameArray.lastIndexOf('pandi')
    // console.log(index); // index->3 
    // const index = nameArray.at(3)
    // console.log(index); // pandi

    //at
    // const index = nameArray.at(3)
    // console.log(index); // pandi

    // const index = nameArray.lastIndexOf('murugan')
    // console.log(index); // pandi

    // let array = [
    //     { name: 'John', age: 30 },
    //     { name: 'Alice', age: 25 }, //output { name: 'Unknown', age: 0 }
    //     { name: 'Bob', age: 35 }
    // ];
    // const index = array.findIndex((data, i) => data.name === 'Alice');
    // console.log(index); //1
    // ********************************************************************************/

    //forLoops
    // let array = [
    //     { name: 'John', age: 30 },
    //     { name: 'Alice', age: 25 },
    //     { name: 'Bob', age: 35 }
    // ];
    // const user = {
    //     name: 'Alice',
    //     age: 25,
    //     place: 'srivi'
    // }
    // for (const iterator of array) {
    //     console.log("for of", iterator)
    // }
    // for (const key in user) {
    //     if (Object.hasOwnProperty.call(user, key)) {
    //         const element = user[key];
    //         console.log("element", key, element)
    //     }
    // }
    // ********************************************************************************/
    //filter
    // let array = [
    //     { name: 'John', age: 30 },
    //     { name: 'Alice', age: 25 },
    //     { name: 'Alice', age: 25 },
    //     { name: 'Bob', age: 35 },
    //     { name: 'Bob', age: 35 }
    // ];
    // let arrayDuplicate = [1, 2, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5]
    // const arrayFilter = arrayDuplicate.filter((value, index, arr) => {
    //     // console.log("arr", arr)
    //     // console.log("value", value)
    //     // console.log("index", arr.indexOf(value), index, arr.indexOf(value) === index)
    //     return arr.indexOf(value) === index

    // })
    // console.log(arrayFilter)

    // const avoidDuplicate = array.filter((value, index, arr) => {
    //     const indexPlace = arr.findIndex((data) => data.name == value.name)
    //     // console.log(indexPlace);
    //     return indexPlace == index
    // })
    // console.log(avoidDuplicate)

    //reduce method 
    // let array = [
    //     { name: 'John', amount: 10 },
    //     { name: 'Alice', amount: 10 },
    //     { name: 'Bob', amount: 10 },
    // ];
    // const addAmount = (preValue, currentValue) => preValue + currentValue.amount
    // const totalValue = array.reduce(addAmount, 0)
    // console.log(totalValue)
    // ********************************************************************************/
    // const array = [1, 2, 3, 4, 5];
    //shift
    // array.shift()
    // console.log(array) // [ 2, 3, 4, 5];

    // unshift
    // array.unshift(3)
    // console.log(array) // [ 3,1, 2, 3, 4, 5];

    // splice
    // array.splice(3, 0, '10')
    // console.log(array) // [ ,1, 2, 3,"10", 4, 5];
    // array.splice(3, 2, '10')
    // console.log(array) // [ ,1, 2, 3,"10"];

    //slice
    // const array = [1, 2, 3, 4, 5];
    // console.log(array.slice(3))//[4, 5]
    // console.log(array.slice(-3))//3, 4, 5]
    // console.log(array.slice(1, 6))//[2, 3, 4, 5]
    // console.log(array.slice(1, 3))//[2, 3 ]
    // ********************************************************************************/

    // *******************************STRINGGG**************************************************/ 
    //conct
    const firstName = "    bala murugan    "
    const lastName = "shanmugavel"
    // console.log(firstName.concat(lastName))
    // console.log(firstName.at(0)) //b
    // console.log(firstName.charAt(3)) //a
    // console.log(firstName.indexOf("mu")) //5 or Mu-> -1
    // console.log(firstName.lastIndexOf("an")) //10
    // console.log(firstName.substring(5, 12)) //murugan
    // console.log(firstName.substring(0, 5)) //bala
    // console.log(firstName) //
    // console.log(firstName.trim()) //bala murugan
    // console.log(firstName.trimEnd()) //    bala murugan 
    // console.log(firstName.trimStart()) // bala murugan   











    return (
        <>
            <p>Array</p>
        </>
    )
}

export default ArrayMethod
