function getSum(multiplier,...nums){
    let s = 0;
    for (let item of nums)
        s+=item;
    return s*multiplier;
}
console.log(getSum(3,1,2,3,5));

function getSum2(multiplier,...nums){
    let sum = nums.reduce((s,el)=>s+=el);
    return sum*multiplier;
}
console.log(getSum2(3,1,2));

const readers = [
    { name: "Anna", books: ["Bible", "Harry Potter"], age: 21 },
{ name: "Bob", books: ["War and peace", "Romeo and Juliet"], age: 26 },
{ name: "Alice", books: ["The Lord of the Rings", "The Shining"], age: 18 }
];

function getBooks(...users){
    let books =[];
    for (let r of users){
        for (b of r.books)
            books.push(b);
    }
    return books;
}
console.log(getBooks(...readers));
// allbooks - массив, который будет содержать все книги читателей

function getBooks2(...users){
    let books =[];
    for (let r of users) books.push(...r.books);
    return books;
}
console.log(getBooks2(...readers));

let allbooks = readers.reduce((a,b)=>[...a,...b.books],[]);
console.log(allbooks);