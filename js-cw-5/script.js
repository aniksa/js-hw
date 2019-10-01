const countries = [
    { country: "Республика Корея", city: "Сеул-Инчхон", population: 24210 },
{ country: "Индия", city: "Мумбаи", population: 23265 },
{ country: "Индонезия", city: "Джакарта", population: 32275 },
{ country: "Япония", city: "Токио-Иокогама", population: 38050 },
{ country: "Индия", city: "Дели", population: 27280 },
{ country: "КНР", city: "Шанхай", population: 24115 },
{ country: "Филиппины", city: "Манила", population: 24650 },
{ country: "Япония", city: "Токио", population: 32007 },
{ country: "Япония", city: "Нагойя", population: 35986 },
    { country: "Республика Корея", city: "Сеул-Инчхон", population: 24210 },
    { country: "Индия", city: "Мумбаи", population: 23265 },
    { country: "Индонезия", city: "Джакарта", population: 32275 },
    { country: "Япония", city: "Токио-Иокогама", population: 38050 },
    { country: "Индия", city: "Дели", population: 27280 },
    { country: "КНР", city: "Шанхай", population: 24115 },
    { country: "Филиппины", city: "Манила", population: 24650 },
    { country: "Япония", city: "Токио", population: 32007 },
    { country: "Япония", city: "Нагойя", population: 35986 },
    { country: "Республика Корея", city: "Сеул-Инчхон", population: 24210 },
    { country: "Индия", city: "Мумбаи", population: 23265 },
    { country: "Индонезия", city: "Джакарта", population: 32275 },
    { country: "Япония", city: "Токио-Иокогама", population: 38050 },
    { country: "Индия", city: "Дели", population: 27280 },
    { country: "КНР", city: "Шанхай", population: 24115 },
    { country: "Филиппины", city: "Манила", population: 24650 },
    { country: "Япония", city: "Токио", population: 32007 },
    { country: "Япония", city: "Нагойя", population: 35986 }];

let newCountries = [];
for (let c of countries){
    if (newCountries.find(item=>item.country === c.country)) continue;
    let filtered = countries.filter(item=>item.country === c.country);
    let population = filtered.reduce((ppl,item)=>ppl+item.population,0);
    newCountries.push({country:c.country, ppl:population});
}
console.log(newCountries);


newCountries = [];
for (let c of countries){
    let index = newCountries.findIndex(item=>item.country === c.country);
    if (index>-1) {newCountries[index].ppl += c.population;} else {
        newCountries.push({country: c.country, ppl: c.population});
    }
}
console.log(newCountries);

let numbers = [9,5,3,7,2,8,1,4,6];
//1,3,5,6,2,8,9,4,6

let oddNumbers = numbers.filter(n => n%2 !== 0).sort((a,b)=>a-b);
let j=0;
let newNumbers = [];
/*for (let item of numbers){
    if (item % 2 !== 0) newNumbers.push(oddNumbers[j++]);
    else newNumbers.push(item);
}*/

numbers.forEach(item=>{if (item%2 !== 0) newNumbers.push (oddNumbers[j++]); else newNumbers.push(item);});
let output = document.getElementById('phones');
j=0;

setTimeout(function run(){
    output.innerHTML+=' '+newNumbers[j++];
    if (j<newNumbers.length) setTimeout(run,10);
    }
    ,1000);

let company = {
    hr: [{ name: "Ann", salary: 1000 }, { name: "Alice", salary:
    800 }],
    development: {
        backend: [{ name: "Peter", salary: 2000 }, { name:
        "Alex", salary: 1800 }],
        frontend: [{ name: "Jack", salary: 2300 }]
    }
};
let sum=0;
function lookForSalary(obj) {
    for (let c in obj) {
        if (c === "salary") sum += obj[c];
        else if (typeof obj[c] === "object")
            lookForSalary(obj[c]);
    }
};

lookForSalary(company);
console.log(sum);
