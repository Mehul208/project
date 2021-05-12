function calc()
{
    var final=document.getElementsByClassName("result");
    var x=document.getElementById("num1").value;
    var y=document.getElementById("num2").value;
    var op=document.getElementById("operator").value;
    var result;

    x=parseInt(x);
    y=parseInt(y);

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
    final.innerHTML=result;
}