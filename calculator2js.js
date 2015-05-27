/*this function is called when = is pressed and the answer is evaluate*/
function evaluate()
{ try{
	var a=document.getElementById("e").value;
    document.getElementById("e").value=eval(a);
   }
 catch()
  {
    message = document.getElementById("e");
    message.value = "error type correctly";
   }
} 
    
/*this is used to add the characters pressed onto the display screen*/
function addchar(t)
{
	var a=document.getElementById("e").value;
	if(t=='res')
		document.getElementById("e").value="";
        else if(t=="DEL")
        { 
          document.getElementById("e").value = a.substr(0 , a.length-1);//deleting the element when DEL is pressed
        }

        else
        {document.getElementById("e").value+=t;}
}