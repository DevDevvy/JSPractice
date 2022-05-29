// array of numbers
const nums = [1,3,6,8,30]

// adder function to use as a callback for .reduce method
const adder = (num1, num2) => {
    return num1 + num2
}
// subtracting function to use as a callback in .reduce method
const subtract = (total, num) => {
    return total - num
}

//use .reduce() on the nums array and pass into it the callback function defined above called "adder"
const reducer = nums.reduce(adder)

// the reduce method take the first value in the array as the initial value
// and then goes down the list and executes the callback function on every the other value in the array
// reduce executes on each value in the array and outputs only one value

// if we console log the output of reducer with the adder  function as the callback 
// the output should be 48
console.log('reduce using the adder callback function outputs: ' + reducer)

// if we call reduce with the subtract function defined above
// the output should be reduced to -46 as the initial value was 1 in the 0th index of the array
const reducerreducer = nums.reduce(subtract)
console.log('reduce using the subtract callback function outputs: ' + reducer)

// if we want to extract individual values out of an array
// instead of having to call nums[index] every time we want to access a specific value
// we can use the destructuring syntax and load all the values into their own variables
const [one, two, three, four, five] = nums

// the syntax looks backwards but we are naming each value in the array
// essentially we now have: [one, two, three, four, five] = [1,3,6,8,30] 

// if we console log the variable named "two" it will output the value 3
// since "two" is the second name in the array on the left it is assigned the second value on the right
// two could be named "taco" and the value would still read as 3
console.log(two)


// destructuring also works with objects
const cat = {
    name: "Fritz",
    occupation: "nunya",
    color: "rainbow"
}
// if you want to name the variables different than the objects keys... {key:newName}
const {name: catsName, occupation: whatCatDoes, color: Race} = cat
// console logging catsName should now hold the value of cat.name
console.log(catsName)

const dog = {
    name: "Franz",
    occupation: "Sleep",
    color: "blue"
}

// if we want to keep the same key names from the object as our variable names...
const {name, occupation, color} = dog
// consol logging the variable name "color" will give the color value from the object
console.log(color)
