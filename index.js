// Using a for loop,clg 1 to 10

//for loop
for (let i = 1; i <= 10; i++) {
    console.log(i)
}

//recurssion
const recurssion = (n) => {
    if (n > 10) {
        return
    }

    console.log(n)
    recurssion(n + 1)
}
recurssion(1)

// callback vs normal function
const human = (n) => n + 1 //implicit return, with curly braces it returns undefined, wrap in () instead.
function human(n) {
    return n + 1 // without keyword return, the function returns undefined.
}

