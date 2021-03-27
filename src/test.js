const num = '1234456564664'
function to(moneny) {
    const arr = moneny.split('')
    let newArr = []
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i])
        if (i % 3 === 0 && i !== 0) {
            newArr.push(',')
        }
    }
    newArr = newArr.reverse()
    
    return newArr.join('')
}

console.log(to(num));
let str = '12345678'
str[1] = 0
console.log(str);

