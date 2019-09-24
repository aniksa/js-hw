const MAX_RADIUS = 50;
const MIN_RADIUS = 10;
const DIR = 4;
const NUM_BALLS = 20;

const game = {
	canvas : document.getElementById('canvas'),
	ctx : null,
	figures : [],
	time: Date.now(),
	init() {	
		this.figures.push(new Ball());//Ball.createList();
		this.setPixelRatio();	
	},
	run(){
		this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
		for (let item of this.figures){
			item.draw(this.ctx);
			//item.update();
		}
	},
	update(){
		for (let item of this.figures){
			item.update();
		}
		let difTime = Date.now() - this.time;
		if (this.figures.length<NUM_BALLS && difTime > 600){
			this.time = Date.now();
			this.figures.push(new Ball());
		}
	},
	setPixelRatio(){
		let dpr = window.devicePixelRatio || 1;
		let rect = this.canvas.getBoundingClientRect();
		this.canvas.width = rect.width * dpr;
		this.canvas.height = rect.height * dpr;
		this.ctx = this.canvas.getContext('2d');
		this.ctx.scale(dpr, dpr);
	}
};


class Ball{
	constructor(minR = MIN_RADIUS, maxR = MAX_RADIUS){
		this.radius = Math.floor(Math.random()*(maxR-minR)+minR);
		this.coords = {x:0,y:0};
		this.dir = {dx: Math.random()*DIR+0.01,dy: Math.random()*DIR+0.01};
		this.color = `rgb(${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)})`;
	}
	draw(ctx){
		ctx.beginPath();
		ctx.arc(this.coords.x, this.coords.y, this.radius, 0, Math.PI*2, false);
		ctx.fillStyle = this.color;
		ctx.fill();
		ctx.closePath();
	}
	update(){
		this.coords.x+=this.dir.dx;
		this.coords.y+=this.dir.dy;
		if (this.coords.x < 0 || this.coords.x > game.canvas.width) this.dir.dx *= -1;
		if (this.coords.y < 0 || this.coords.y > game.canvas.height) this.dir.dy *= -1;
	}
}

game.init();
setInterval(()=>{ game.run(); game.update();},10);
