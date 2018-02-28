//titan + leon61 version
//lesson fix

const a = parseFloat(prompt('Enter A'));
const b = parseFloat(prompt('Enter B'));
const c = parseFloat(prompt('Enter C'));
 
{
  const d = discr(a,b,c);   
  if (d>0) {
    const x1= ((-b)+ d)/(2*a);
    document.write ('Відповідь: x1=:',x1);
    
    const x2= ((-b)- d)/(2*a);
    document.write ('<br>');
    document.write ('х2= ', x2);
}   
    else if (d==0) {
    const b1= (-b)/(2*a);
    document.write ('Відповідь :х= ', b1);      
}  
    else    
    document.write ('рівняння не має розвязку'); 
    function discr(a, b, c)
  {
    return ((b*b)-(4*a*c));
  }  
}      