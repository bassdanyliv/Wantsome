// triunghi.constructor;                 // Triangle(a, b, c)   
// forma.isPrototypeOf(triunghi);        // true
// triunghi.getPerimeter();              // 48
// triunghi.getType();                   // "triunghi"


//cand dau console.log(triunghi.constructor) tre sa printeze Triangle(a,b,c)

function Forma () {
    this.type = '';
    this.getType = function(){
        return this.type;
    }
}


function Triangle (a, b, c) {
    this.type = 'triangle';
    this.a = a;
    this.b = b;
    this.c = c;

    this.getPerimeter = function() {
        return this.a + this.b + this.c;
    }
}


Triangle.prototype = new Forma();
Triangle.prototype.constructor = Triangle;

const triangle = new Triangle(5,6,7);


console.log(triangle.constructor);
console.log(Forma.prototype.isPrototypeOf(triangle));
console.log(triangle.getPerimeter());
console.log(triangle.getType());