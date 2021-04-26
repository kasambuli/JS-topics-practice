// Create a fucntion that:
// factorial(1) = 1
// factorial(2) = 2
// factorial(3) = 6
// function factorial(n) {
//     // if (n < 2) {
//     // console.log(1)
//     // return
//     // };
//     // return n * factorial(n - 1)
//     let factor = n * factorial(n - 1);
//     console.log(factor)
//     return
// }
// factorial(1)
// factorial(2)

function factorial(num) {
    // if (num < 2) return 1;
    if (num < 2) { console.log(1) };
    console.log(num * factorial(num - 1))
    return num * factorial(num - 1);

}
factorial(1)