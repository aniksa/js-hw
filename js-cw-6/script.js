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
];

let towns = new Set();
for (let c of countries){
    towns.add(c.city);
}
console.log(towns);
let townsLength = new Set();
for (let t of towns.values()){
    townsLength.add(t.length);
}
console.log(townsLength);
function check(b){
    if (townsLength.has(b)) console.log(true); else console.log(false);
}
check(1);
check(11);

let map = new Map();
for (let c of countries){
    let ppl = map.has(c.country)? map.get(c.country) : 0;
    map.set(c.country,c.population+ppl);
}
console.log(map);

//let newList = new Map();
let states = {
      //newList: new Map(),
      getCount: function(key1,key2){
          let newList = new Map();
          for (let c of this){
              let tmp = newList.has(c[key1])? newList.get(c[key1]) : 0;
              newList.set(c[key1],c[key2]+tmp);
          }
          console.log(newList);
      }
};
states.getCount.call(countries,"country","population");
states.getCount.apply(countries,["country","population"]);
//states.getCount.bind(countries,["country","population"]); - не получилось

//в степень каждый элемент
//уникальные значения
//зеркальный массив
let numbers = [1,1,3,4,4,6,6];
function toPower(ar){
    return ar.map(item => item*item);
}
function toUnique(ar){
    let set = new Set();
    for (let el of ar){
        set.add(el);
    }
    return set;
}

function toMirror(...ar){
    let newAr = [];
    newAr.push(...ar);
    for (let i=ar.length-1; i>=0; i--){
        newAr.push(ar[i]);
    }
    return new Promise((resolve,reject)=> newAr.length <10 ? resolve(newAr) : reject('big'));
}
/*console.log(toPower(numbers));
console.log(toUnique(toPower(numbers)));
console.log(toMirror(...toUnique(toPower(numbers))));*/
async function processData(ar) {
    let res = 0;
    res = await toPower(ar);
    res = await toUnique(res);
    res = await toMirror(...res);
    //console.log(res);
    return res;
}
processData(numbers).then(x=>console.log(x)).catch(()=>console.log('too big'));