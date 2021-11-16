// ham random(start, end) -> kq: so nguyen
function random1(start, end) {
    return Math.floor(Math.random()*(end - start + 1) + start)
}
console.log(random1(99, 200))


// tao mot mang gom 10 phan tu tu ham random
const init = []
for(var i=0; i<10; i++) {
   init[i] = random1(1, 100)
}
console.log(init)


// kq: mang con gom cac so le
function getOddNumbers(array) {
    return array.filter((item) => !(item % 2 ===0))
}
const input = [1, 2, 3, 4, 5, 6]
console.log(getOddNumbers(input))


// kq: cac phan tu gap doi phan tu ban dau
function double(array) {
    return array.map((item) => item * 2)
}
const numbers = [1, 2, 3, 4, 5]
console.log(double(numbers))


// kq: so luong phan tu co trong mang
const numbers1 = [1, 1, 2, 1, 3, 4]
const numbers2 = numbers1.reduce(function(allNumbers, number) {
    if( number in allNumbers){
        allNumbers[number]++
    } else {
        allNumbers[number] = 1
    }
    return allNumbers
}, {})
console.log(numbers2)