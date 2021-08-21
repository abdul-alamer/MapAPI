



export default function Approximate(x,y){
    let f1 = x//1.1;
    let f2 = y//1.2;
    let compareEpsilon = Number.EPSILON;
    
    
    let calcDifference =  Math.abs(f1 - f2);
    let compareResult = calcDifference < compareEpsilon;
    
    if (compareResult)
    return ("result is :" +compareResult)
    else //(!compareResult)
    {
    var diff = calcDifference.toFixed(7);
    if (diff > 0.0000100 || diff)
    return "done."
    else
    return "not."

 //   return ("f1 :" +f1 +" f2:"+f2+"\n"+"comparison used epsilon:"+compareEpsilon.toFixed(7)+"\n"+"Difference between f1 and f2:"+ calcDifference.toFixed(7) )
}

}