let n=3;
let m=3;
let arr=[];
let fillNumber = 1;

document.querySelector('[type=button]').onclick = function(){
	fillNumber = 1;
	arr=[];
	n = parseInt(document.getElementById("col").value);
	m = parseInt(document.getElementById("rows").value);
	fillDoubles(n*m/2);
	/*fillHorizontally(0,n-1, 1,0);
	for (let i=1; i<m/2+1; i++){
		fillVertically(i, m-i,1,n-i);
		fillHorizontally(n-1-i,i-1, -1,m-i);
		fillVertically(m-1-i, i,-1,i-1);
		fillHorizontally(i,n-1-i, 1,i);
	}*/
	drawTable();
	console.log(arr);
};
function fillDoubles(n){
	let k=0;
	for (let i=0; i<n; i++){
		arr[k] = i;
		arr[k+1] = i;
		k+=2;
	}
}

function fillHorizontally(start, end, dir, row){
	if (fillNumber>n*m) return;
	for (let i=start; dir>0 ? i<=end : i>=end; i+=dir){
		arr[row*n+i] = fillNumber++; 
	}
}
function fillVertically(start, end, dir, col){
	if (fillNumber>n*m) return;
	for (let i=start; dir>0 ? i<=end : i>=end; i+=dir){
		arr[i*n+col] = fillNumber++; 
	}
}
let table = document.getElementsByTagName('div')[0];
function drawTable(){
	table.innerHTML='';
	let k=0;
	for (let i=0; i<m; i++){
		table.innerHTML += '<div>';
		for(let j=0; j<n; j++){
			table.innerHTML += `<span>${arr[k++]}</span>`;
		}
	table.innerHTML += '</div>';
	}
}