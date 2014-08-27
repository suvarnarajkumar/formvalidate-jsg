/* BACKGROUND COLOR EFFECT */
function check(x)
{
document.bgColor=x;
}

/* PROGRESS_BAR VARIABLES FOR EACH FIELD VALIDATION */
progress_bar13=0;
progress_bar0=0;
progress_bar1=0;
progress_bar2=0;
progress_bar3=0;
progress_bar4=0;
progress_bar5=0;
progress_bar6=0;
progress_bar7=0;
progress_bar8=0;
progress_bar9=0;
progress_bar10=0;
progress_bar11=0;
progress_bar12=0;


/* CHECKING FOR USERNAME VALID OR NOT  */
function isAlphanumeric(obj,objto,min_len,max_len,str,objstar,objright,objwrong,obj_stat,obj_percent,obj_status,er_msg)
{
	
if(obj.value.length === 0)
{
if(progress_bar0 === 1)
	{
		progress_bar0=0;
		var val=obj_stat.value;
		val=val-9; obj_percent.innerHTML=val+"%";
		obj_stat.value=val;
	}	
er_msg.innerHTML="Please enter "+str;
objstar.style.color = "red";
objright.style.visibility='hidden';
objwrong.style.visibility='visible';
obj.focus();
return;	
}
else if(obj.value.length >max_len ||obj.value.length <min_len)
{
	if(progress_bar0 === 1)
	{
		progress_bar0=0;
		var val=obj_stat.value;
		val=val-9; obj_percent.innerHTML=val+"%";
		obj_stat.value=val;
	}	
er_msg.innerHTML=str+" should be in between "+min_len+" to "+max_len ;
objstar.style.color = "red";
objright.style.visibility='hidden';
objwrong.style.visibility='visible';
obj.focus();
	return;
}
else
{
	var letters = /^[a-zA-Z][a-zA-Z\d]+$/;
if(!obj.value.match(letters))
{
	if(progress_bar0 === 1)
	{
		progress_bar0=0;
		var val=obj_stat.value;
		val=val-9;    obj_percent.innerHTML=val+"%";
		obj_stat.value=val;
	}	
er_msg.innerHTML=str+" should be alphanumeric";
objstar.style.color = "red";
objright.style.visibility='hidden';
objwrong.style.visibility='visible';
obj.focus();
return;
}
else
{
	er_msg.innerHTML="";
	if(progress_bar0 === 0)
	{
	progress_bar0=1;
	var val=obj_stat.value;
		val=val+9; obj_percent.innerHTML=val+"%";
		obj_stat.value=val;
	}
objstar.style.color = "blue";
objwrong.style.visibility='hidden';
objright.style.visibility='visible';
if(obj_stat.value === 100)
	{obj_status.style.display='block';}
objto.focus();
return ;
}
}
}

/* CHECKING PASSWORD FIELDS */
function isPassword(obj,objto1,objto2,min_len,max_len,str,str1,objstar1,objstar2,objright1,objright2,objwrong1,objwrong2,obj_stat,obj_percent,obj_status,er_msg,er_msg1)
{
	if(obj.value.length === 0)
{
	if(progress_bar1 === 1)
	{
		progress_bar1=0;
		var val=obj_stat.value;
		val=val-9; obj_percent.innerHTML=val+"%";
		obj_stat.value=val;
	}	
er_msg.innerHTML="Please enter "+str;
objstar1.style.color = "red";
objright1.style.visibility='hidden';
objwrong1.style.visibility='visible';
objto1.disabled = true;
	

if(objto1.value.length !==0 )
{
er_msg1.innerHTML=str1+" should not be different from above "+str;
if(progress_bar2 === 1)
		{
		progress_bar2=0;
		var val=obj_stat.value;
		val=val-9; obj_percent.innerHTML=val+"%";
		obj_stat.value=val;
		}	
 objright2.style.visibility='hidden';
objwrong2.style.visibility='visible';
objstar2.style.color = "red";
}

obj.focus();
return;
}
else if(obj.value.length >max_len ||obj.value.length <min_len)
{
	if(progress_bar1 === 1)
	{
		progress_bar1=0;
		var val=obj_stat.value;
		val=val-9; obj_percent.innerHTML=val+"%";
		obj_stat.value=val;
	}	
er_msg.innerHTML=str+ " should be "+min_len+" to "+max_len;
objstar1.style.color = "red";
objright1.style.visibility='hidden';
objwrong1.style.visibility='visible';
objto1.disabled = true;
	objright2.style.visibility='hidden';
objwrong2.style.visibility='visible';
objstar2.style.color = "red";

if(objto1.value.length !==0 )
{
er_msg1.innerHTML=str1+" should not be different from above "+str;
if(progress_bar2 === 1)
		{
		progress_bar2=0;
		var val=obj_stat.value;
		val=val-9; obj_percent.innerHTML=val+"%";
		obj_stat.value=val;
		}	
 objright2.style.visibility='hidden';
objwrong2.style.visibility='visible';
objstar2.style.color = "red";
}

obj.focus();
return;
}
else
{

var letters = /^(?=.*\d.*)(?=.*[a-z].*)(?=.*[@#].*)(?=.*[A-Z].*)[a-zA-Z0-9@#]+$/;
if(!obj.value.match(letters))
{
	if(progress_bar1 === 1)
	{
		progress_bar1=0;
		var val=obj_stat.value;
		val=val-9; obj_percent.innerHTML=val+"%";
		obj_stat.value=val;
	}	
er_msg.innerHTML=str+"should be contain atleast one lowercase, uppercase, number, special character(@,#)";
objstar1.style.color = "red";
objright1.style.visibility='hidden';
objwrong1.style.visibility='visible';
objto1.disabled = true;
er_msg1.innerHTML=str1+" should not be different from above "+str;
	objright2.style.visibility='hidden';
objwrong2.style.visibility='visible';
objstar2.style.color = "red";
obj.focus();
return;
}
else
{
	er_msg.innerHTML="";
	if(progress_bar1 === 0)
	{
	progress_bar1=1;
	var val=obj_stat.value;
		val=val+9; obj_percent.innerHTML=val+"%";
		obj_stat.value=val;
	}
	if(objto1.value.localeCompare(obj.value) ===0 )
	{
		if(progress_bar2 === 0)
		{
		progress_bar2=1;
		var val=obj_stat.value;
		val=val+9; obj_percent.innerHTML=val+"%";
		obj_stat.value=val;
		}
			objstar1.style.color = "blue";
objright1.style.visibility='visible';
objwrong1.style.visibility='hidden';
er_msg1.innerHTML="";
	objright2.style.visibility='visible';
objwrong2.style.visibility='hidden';
objstar2.style.color = "blue";
if(obj_stat.value === 100)
	{obj_status.style.display='block';}
	objto1.disabled = false;
	objto2.focus();
		return
	}
	else
	{
		er_msg1.innerHTML=str1+" should not be different from above "+str;
	objright2.style.visibility='hidden';
objwrong2.style.visibility='visible';
objstar2.style.color = "red";
	objto1.disabled = false;
objstar1.style.color = "blue";

		objright1.style.visibility='visible';
objwrong1.style.visibility='hidden';

if(obj_stat.value === 100)
	{obj_status.style.display='block';}
objto1.focus();
return ;
}
}
}
}






/* CHECKING FOR CONFIRM PASSWORD VALID OR NOT */
function isConfirmPassword(obj1,obj,objto,str,objstar,objright,objwrong,obj_stat,obj_percent,obj_status,er_msg)
{
	if(obj.value.length ===0)
	{
		if(progress_bar2 === 1)
	{
		progress_bar2=0;
		var val=obj_stat.value;
		val=val-9; obj_percent.innerHTML=val+"%";
		obj_stat.value=val;
	}	
er_msg.innerHTML="Please enter "+str;
objstar.style.color = "red";
objright.style.visibility='hidden';
objwrong.style.visibility='visible';
obj.focus();
return;
}
	else
	{
	if(obj.value.localeCompare(obj1.value) )
{
	if(progress_bar2 === 1)
	{
		progress_bar2=0;
		var val=obj_stat.value;
		val=val-9; obj_percent.innerHTML=val+"%";
		obj_stat.value=val;
	}	
er_msg.innerHTML= str+ "should not be different from above password";
objstar.style.color = "red";
objright.style.visibility='hidden';
objwrong.style.visibility='visible';
obj.focus();
return;
}
else
{
	er_msg.innerHTML="";
	if(progress_bar2 === 0)
	{
		progress_bar2=1;
		var val=obj_stat.value;
		val=val+9; obj_percent.innerHTML=val+"%";
		obj_stat.value=val;
	}	
objstar.style.color = "blue";
		objwrong.style.visibility='hidden';
objright.style.visibility='visible';
if(obj_stat.value === 100)
	{obj_status.style.display='block';}
objto.focus();
return ;
}
}
}

/* CHECKING FOR FIRST NAME VALID OR NOT */
function isAlphabetWithoutSpace(obj,objto,min_len,max_len,str,objstar,objright,objwrong,obj_stat,obj_percent,obj_status,er_msg)
{
	if(obj.value.length === 0)
{
	if(progress_bar3 === 1)
	{
		progress_bar3=0;
		var val=obj_stat.value;
		val=val-9; obj_percent.innerHTML=val+"%";
		obj_stat.value=val;
	}	
er_msg.innerHTML="Please enter "+str;
objstar.style.color = "red";
objright.style.visibility='hidden';
objwrong.style.visibility='visible';
obj.focus();
return;
}
else if(obj.value.length >max_len ||obj.value.length <min_len)
{
	if(progress_bar3 === 1)
	{
		progress_bar3=0;
		var val=obj_stat.value;
		val=val-9; obj_percent.innerHTML=val+"%";
		obj_stat.value=val;
	}	
er_msg.innerHTML=str+" should be in between "+min_len+" to "+max_len;
objstar.style.color = "red";
objright.style.visibility='hidden';
objwrong.style.visibility='visible';
obj.focus();
	return;
}
else
{	
var letters = /^[a-zA-Z]+$/;
if(!obj.value.match(letters))
{
	if(progress_bar3 === 1)
	{
		progress_bar3=0;
		var val=obj_stat.value;
		val=val-9; obj_percent.innerHTML=val+"%";
		obj_stat.value=val;
	}	
er_msg.innerHTML=str+" should be Alphabets without spaces and dots.";
objstar.style.color = "red";
objright.style.visibility='hidden';
objwrong.style.visibility='visible';
obj.focus();
return ;
}
else
{
	er_msg.innerHTML="";
	if(progress_bar3 === 0)
	{
		progress_bar3=1;
		var val=obj_stat.value;
		val=val+9; obj_percent.innerHTML=val+"%";
		obj_stat.value=val;
	}	
objstar.style.color = "blue";
objwrong.style.visibility='hidden';
objright.style.visibility='visible';
if(obj_stat.value === 100)
	{obj_status.style.display='block';}
objto.focus();
return ;
}
}
}

/* CHECKING FOR LAST NAME VALID OR NOT */
function isAlphabetWithSpace_Dot(obj,objto,min_len,max_len,str,objstar,objright,objwrong,obj_stat,obj_percent,obj_status,er_msg)
{
	if(obj.value.length === 0)
{
	if(progress_bar4 === 1)
	{
		progress_bar4=0;
		var val=obj_stat.value;
		val=val-9; obj_percent.innerHTML=val+"%";
		obj_stat.value=val;
	}	
er_msg="Please enter "+str;
objstar.style.color = "red";
objright.style.visibility='hidden';
objwrong.style.visibility='visible';
obj.focus();
return;
}
else if(obj.value.length >max_len ||obj.value.length <min_len)
{
	if(progress_bar4 === 1)
	{
		progress_bar4=0;
		var val=obj_stat.value;
		val=val-9; obj_percent.innerHTML=val+"%";
		obj_stat.value=val;
	}	
er_msg.innerHTM=str+" should be in between "+min_len+" to "+max_len ;
objstar.style.color = "red";
objright.style.visibility='hidden';
objwrong.style.visibility='visible';
obj.focus();
	return;
}
else
{	
	var letters = /^\S[a-zA-Z\. ]*\S$/;
if(!obj.value.match(letters))
{
	if(progress_bar4 === 1)
	{
		progress_bar4=0;
		var val=obj_stat.value;
		val=val-9; obj_percent.innerHTML=val+"%";
		obj_stat.value=val;
	}	
er_msg.innerHTML=str+" should be Alphabets with/without spaces and dots.\n But should not 'start and end' with spaces or dots";
objstar.style.color = "red";
objright.style.visibility='hidden';
objwrong.style.visibility='visible';
obj.focus();
return ;
}
else
{
	er_msg.innerHTML="";
	if(progress_bar4 === 0)
	{
		progress_bar4=1;
		var val=obj_stat.value;
		val=val+9; obj_percent.innerHTML=val+"%";
		obj_stat.value=val;
	}	
objstar.style.color = "blue";
objwrong.style.visibility='hidden';
objright.style.visibility='visible';
if(obj_stat.value === 100)
	{obj_status.style.display='block';}
objto.focus();
return;
}
}
}



/* CHECK THE FILE UPLOADED IS VALID FORMAT */
function file_validation(obj,objto,str,formats,objstar,objright,objwrong,obj_stat,obj_percent,obj_status,er_msg)
{	
var f_name =obj.value;
if(f_name.length === 0)
{
	if(progress_bar5 === 1)
	{
		progress_bar5=0;
		var val=obj_stat.value;
		val=val-9; obj_percent.innerHTML=val+"%";
		obj_stat.value=val;
	}	
er_msg.innerHTML="Please upload a "+str;
objstar.style.color = "red";
objright.style.visibility='hidden';
objwrong.style.visibility='visible';
obj.focus();
return;
}
else
{
var fileName = f_name.split(".");
       fileName = fileName[fileName.length-1 ];
var format= formats.split(",");
var counts=0;
for(var j=0;j<format.length;j++)
{
if(fileName.localeCompare(format[j]) ===0 )
{
	counts=1;
	break;
}
}
	
if(counts!== 0)
{	
	er_msg.innerHTML="";
	if(progress_bar5 === 0)
	{
		progress_bar5=1;
		var val=obj_stat.value;
		val=val+9; obj_percent.innerHTML=val+"%";
		obj_stat.value=val;
	}	

	 objstar.style.color = "blue";
objwrong.style.visibility='hidden';
objright.style.visibility='visible';
if(obj_stat.value === 100)
	{obj_status.style.display='block';}
objto.focus();
return;
}
else
{
	if(progress_bar5 === 1)
	{
		progress_bar5=0;
		var val=obj_stat.value;
		val=val-9; obj_percent.innerHTML=val+"%";
		obj_stat.value=val;
	}	
er_msg.innerHTML=str +" should be of these formats "+formats;
objstar.style.color = "red";
objright.style.visibility='hidden';
objwrong.style.visibility='visible';
obj.focus();
return;
}

}
}

/* CHECKING FOR GENDER VERIFICATION */
function gender_validation(obj,objto,objstar,objright,objwrong,obj_stat,obj_percent,obj_status)
{
if(progress_bar13 === 0)
	{
		progress_bar13=1;
		var val=obj_stat.value;
		val=val+9; obj_percent.innerHTML=val+"%";
		obj_stat.value=val;
	}	
	progress_bar13=1;
	 objstar.style.color = "blue";
objwrong.style.visibility='hidden';
objright.style.visibility='visible';
if(obj_stat.value === 100)
	{obj_status.style.display='block';}
objto.focus();
return;

}


/* CHECKING FOR DAY SELECTED OR NOT */
function dob1select(obj,obj1,obj2,obj3,str,objstar,objright,objwrong,obj_stat,obj_percent,obj_status,er_msg)
{
if(obj.value == "default")
{
	if(progress_bar6 === 1)
	{
		progress_bar6=0;
		var val=obj_stat.value;
		val=val-3; obj_percent.innerHTML=val+"%";
		obj_stat.value=val;
	}	
er_msg.innerHTML='Select your '+str+' from the list';
objstar.style.color = "red";
objright.style.visibility='hidden';
objwrong.style.visibility='visible';
obj.focus();
return;
}
else
{
	er_msg.innerHTML="";
	if(progress_bar6 === 0)
	{
		progress_bar6=1;
		var val=obj_stat.value;
		val=val+3; obj_percent.innerHTML=val+"%";
		obj_stat.value=val;
	}	
	
	
if(obj1.value == "default")
{
objstar.style.color = "red";
objright.style.visibility='hidden';
objwrong.style.visibility='visible';
obj1.focus();
return  ;
}
else
{
	
if(obj2.value == "default")
{
objstar.style.color = "red";
objright.style.visibility='hidden';
objwrong.style.visibility='visible';
obj2.focus();
return ;
}
else
{
 objstar.style.color = "blue";
objwrong.style.visibility='hidden';
objright.style.visibility='visible';
if(obj_stat.value === 100)
	{obj_status.style.display='block';}
obj3.focus();
return;
}
}
}
}

/* CHECKING FOR MONTH SELECTED OR NOT */
function dob2select(obj,obj1,obj2,obj3,str,str1,str2,objstar,objright,objwrong,obj_stat,obj_percent,obj_status,er_msg)
{
if(obj.value == "default")
{
	if(progress_bar7 === 1)
	{
		progress_bar7=0;
		var val=obj_stat.value;
		val=val-3; obj_percent.innerHTML=val+"%";
		obj_stat.value=val;
	}	

er_msg.innerHTML='Select your '+str+' from the list';
objstar.style.color = "red";
objright.style.visibility='hidden';
objwrong.style.visibility='visible';
obj.focus();
return;
}
else
{
	er_msg.innerHTML="";
	if(progress_bar7 === 0)
	{
		progress_bar7=1;
		var val=obj_stat.value;
		val=val+3; obj_percent.innerHTML=val+"%";
		obj_stat.value=val;
	}	

if(obj1.value === "default")
{
er_msg.innerHTML='Select your '+str1+' from the list';
objstar.style.color = "red";
objright.style.visibility='hidden';
objwrong.style.visibility='visible';
obj1.focus();
return;
}
else
{

if(obj2.value === "default")
{
objstar.style.color = "red";
objright.style.visibility='hidden';
objwrong.style.visibility='visible';
obj2.focus();
return;
}
else
{

objstar.style.color = "blue";
objwrong.style.visibility='hidden';
objright.style.visibility='visible';
if(obj_stat.value === 100)
	{obj_status.style.display='block';}
obj3.focus();
return;
}
}
}

}


/* CHECKING FOR YEAR SELECTED OR NOT */
function dob3select(obj,obj1,obj2,obj3,str,str1,str2,objstar,objright,objwrong,obj_stat,obj_percent,obj_status,er_msg)
{
	
if(obj.value == "default")
{
	if(progress_bar8 === 1)
	{
		progress_bar8=0;
		var val=obj_stat.value;
		val=val-4; obj_percent.innerHTML=val+"%";
		obj_stat.value=val;
	}	

	

er_msg.innerHTML='Select your '+str+' from the list';
objstar.style.color = "red";
objright.style.visibility='hidden';
objwrong.style.visibility='visible';
obj.focus();
return ;
}
else
{
	er_msg.innerHTML="";
	if(progress_bar8 === 0)
	{
		progress_bar8=1;
		var val=obj_stat.value;
		val=val+4; obj_percent.innerHTML=val+"%";
		obj_stat.value=val;
	}	
	if(obj1.value === "default")
{
er_msg.innerHTML='Select your '+str1+' from the list';
objstar.style.color = "red";
objright.style.visibility='hidden';
objwrong.style.visibility='visible';
obj1.focus();
return ;
}
else
{
if(obj2.value === "default")
{
er_msg.innerHTML='Select your '+str2+' from the list';
objstar.style.color = "red";
objright.style.visibility='hidden';
objwrong.style.visibility='visible';
obj2.focus();
return ;
}
else
{

objstar.style.color = "blue";
objwrong.style.visibility='hidden';
objright.style.visibility='visible';
if(obj_stat.value === 100)
	{obj_status.style.display='block';}
obj3.focus();
return ;
}
}
}


}

/* CHECK PHONE NUMBER ENTERED OR NOT AND VALIDATE ENTERED PHONE NUMBER */
function phone_validations(obj,objto,str,format,objstar,objright,objwrong,obj_stat,obj_percent,obj_status,er_msg)
{
	var res = obj.value.replace(/\d/g, 9 );
if(res.localeCompare(format) !== 0)
{
	if(progress_bar9 === 1)
	{
		progress_bar9=0;
		var val=obj_stat.value;
		val=val-9; obj_percent.innerHTML=val+"%";
		obj_stat.value=val;
	}	
er_msg.innerHTML=str+" should be in this format "+format;
objstar.style.color = "red";
objright.style.visibility='hidden';
objwrong.style.visibility='visible';
obj.focus();
return;
}
else
{
	er_msg.innerHTML="";
if(progress_bar9 === 0)
	{
		progress_bar9=1;
		var val=obj_stat.value;
		val=val+9; obj_percent.innerHTML=val+"%";
		obj_stat.value=val;
		}
	objstar.style.color = "blue";
objwrong.style.visibility='hidden';
objright.style.visibility='visible';
if(obj_stat.value === 100)
	{obj_status.style.display='block';}
objto.focus();
return;
}
}



/* CHECK HOBBIES SELECTED OR NOT */

function checkbox_validation(obj,str,objstar,objright,objwrong,obj_stat,obj_percent,obj_status,er_msg)
{
var i=0;
var list=0;
for(i=0;i<6;i++)
{
	if(obj[i].checked)
	{
		list++;	
	}
}
if(list === 0)
{
	if(progress_bar10 === 1)
	{
		progress_bar10=0;
		var val=obj_stat.value;
		val=val-9; obj_percent.innerHTML=val+"%";
		obj_stat.value=val;
		}
	er_msg.innerHTML="Select your "+str+" or atleast 'others'";
	objstar.style.color = "red";
objright.style.visibility='hidden';
objwrong.style.visibility='visible';

	return;
}
	else
	{
		er_msg.innerHTML="";
		if(progress_bar10 === 0)
	{
		progress_bar10=1;
		var val=obj_stat.value;
		val=val+9; obj_percent.innerHTML=val+"%";
		obj_stat.value=val;
		}
		objstar.style.color = "blue";
objwrong.style.visibility='hidden';
objright.style.visibility='visible';
if(obj_stat.value === 100)
	{obj_status.style.display='block';}
	return;		
		}

}

/* CHECK COUNTRY SELECTED OR NOT */

function multiple_select_validation(obj,str,objstar,objright,objwrong,obj_stat,obj_percent,obj_status,er_msg)
{
  var count = 0;
	 for (var i=1; i<obj.options.length; i++) {
    if (obj.options[i].selected) 
    {
    		 count++;
    }
 }
    if(count === 0)
{
	if(progress_bar11 === 1)
	{
		progress_bar11=0;
		var val=obj_stat.value;
		val=val-9; obj_percent.innerHTML=val+"%";
		obj_stat.value=val;
		}
		
	er_msg.innerHTML=str;
	objstar.style.color = "red";
objright.style.visibility='hidden';
objwrong.style.visibility='visible';
	return;
}
	else
	{
		er_msg.innerHTML="";
		if(progress_bar11 === 0)
	{
		progress_bar11=1;
		var val=obj_stat.value;
		val=val+9; obj_percent.innerHTML=val+"%";
		obj_stat.value=val;
		}
			objstar.style.color = "blue";
objwrong.style.visibility='hidden';
objright.style.visibility='visible';
	if(obj_stat.value === 100)
	{obj_status.style.display='block';}
	return;		
		}
}
