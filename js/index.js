// random 1-100
// let x = Math.floor (Math.random()*100);
// document.write(x);
// document.write('<br>');
// document.write(x);
// document.write('<br>');


const a = parseFloat(prompt('Enter A'));
const b = parseFloat(prompt('Enter B'));
const c = parseFloat(prompt('Enter C'));

const d = ((b*b)-(4*a*c));
document.write('diskr D = ' + d);
document.write('<br>');

if (d == 0) {
    console.log('diskr d = 0');
    document.write('There is no answer, because diskr D = 0');
	document.write('<br>');
 } else {
    console.log('d>0 so ...');
	let xOne=(-b+(Math.sqrt(d)))/(2*a);
	let xTwo=(-b-(Math.sqrt(d)))/(2*a);
	console.log(xOne);
	document.write('Answer1 = ' + xOne);
	document.write('<br>');
	console.log(xTwo);
	document.write('Answer2 = ' + xTwo);
	document.write('<br>');
}



