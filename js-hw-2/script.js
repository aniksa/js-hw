const roles = [ "Городничий","Аммос Федорович", "Артемий Филиппович","Лука Лукич"]; 
const text = `Городничий: Я пригласил вас, господа, с тем, чтобы сообщить вам пренеприятное известие: к нам едет ревизор.
                Аммос Федорович: Как ревизор?
                Артемий Филиппович: Как ревизор?
                Городничий: Ревизор из Петербурга, инкогнито. И еще с секретным предписаньем.
                Аммос Федорович: Вот те на!
                Артемий Филиппович: Вот не было заботы, так подай!
                Лука Лукич: Господи боже! еще и с секретным предписаньем!`;
let textLines = text.split("\n ");
for (let i=0; i<textLines.length; i++){
	let line = textLines[i];
	textLines[i] = (i+1) + ') '+line; //добавляем номер строки
}
let output = document.querySelector('div');
output.innerHTML = "";
for (let r of roles){
	let words = textLines.filter(line=>line.indexOf(r)>=0); //фильтруем по роли
	let trimWords = [];
	for (let w of words) trimWords.push(w.slice(0, w.indexOf(' ')) + w.slice(w.indexOf(':') + 1));//вырезаем роль из строк
	output.innerHTML += (r+":<br/> "+trimWords.join('<br/>')+"<br/>");//вывод
	console.log(r+": "+trimWords.join('\n'));
}
//console.log(textLines);

