function calc()
{
    var final = document.querySelector(".result");
    var x = parseInt(document.querySelector("#num1").value);
    var y = parseInt(document.querySelector("#num2").value);
    var op = document.querySelector("#operator").value;
    var result;
    
    if(op=="add")
    {
        result=x+y;
    }
    else if(op=="sub")
    {
        result=x-y;
    }
    else if(op=="mul")
    {
        result=x*y;
    }
    else 
    {
        result=x/y;
    }
    console.log(result);
    final.innerHTML=result;
}