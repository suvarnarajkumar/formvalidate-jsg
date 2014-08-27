
/* ON SUBMIT CHECK ALL FIELDS ARE FILLED OR NOT*/
function pageRedirect()
{
	if(document.getElementById('state').value === 100)
	{
   var USER_NAME=document.forms['registration']['userid'].value;	
	var PASSWORD=document.forms['registration']['passid'].value;
	var FIRST_NAME=document.forms['registration']['first_name'].value;
	var LAST_NAME=document.forms['registration']['last_name'].value;
	var FILE_NAME=document.registration.file_name.value;
   var GENDER="null";
   if (document.registration.sex[0].checked)
   {
  GENDER=document.registration.sex[0].value;
	}
   else
   {
   GENDER=document.registration.sex[1].value;
   }
 	var D_O_B=document.forms['registration']['dob1'].value+"-"+document.forms['registration']['dob2'].value+"-"+document.forms['registration']['dob3'].value;
   var HOBBIES_LIST="null";	
   var i=0;
	var list=0;
	for(i=0;i<6;i++)
	{	
	if(document.registration.hob[i].checked)
	{
		if(list===0)
		{
		HOBBIES_LIST=	document.registration.hob[i].value;
		list=1;
		}	
		else
		{
			HOBBIES_LIST=HOBBIES_LIST.concat(", "+document.registration.hob[i].value);
		}
	}
	}
	var COUNTRIES_LIST="null";
	list=0;	
	for (var i=1; i<document.registration.country.options.length; i++) 
	{
    if (document.registration.country.options[i].selected) 
    {
    		if(list===0)
			{
			 COUNTRIES_LIST=	document.registration.country.options[i].value;
			list=1;
			}
			else
			{	
    		 COUNTRIES_LIST=COUNTRIES_LIST.concat(", "+document.registration.country.options[i].value);
			}    
    }
	}

	var PHONE_NUMBER=document.forms['registration']['phno'].value;
			
document.getElementById('status2').style.display='block';
alert("Form Successfully Submitted with following information click 'ok'");
alert("Account Information \n\n USERNAME\t:"+USER_NAME+"\n PASSWORD\t:"+ PASSWORD);
alert("Profile Information \n\n FIRST NAME\t:"+FIRST_NAME+"\n LAST NAME\t:"+LAST_NAME+"\n FILE NAME\t:"+FILE_NAME+"\n GENDER\t\t:"+GENDER+"\n DATE OF BIRTH\t:"+D_O_B+"\n HOBBIES\t\t:"+HOBBIES_LIST+"\n HAVE BEEN TO\t:"+COUNTRIES_LIST);
alert("Contact Information \n\n PHONE NUMBER\t:"+PHONE_NUMBER);
if (confirm("Press 'OK' , if all the information is correct") == true) {return true;}
else {return false;}
}
else if(document.getElementById('state').value === 0)
{
alert('Please fill all fields');
document.getElementById("un_er").innerHTML='Please enter username';
document.getElementById("pw_er").innerHTML='Please enter password';
document.getElementById("cp_er").innerHTML='Please enter confirm password';
document.getElementById("fn_er").innerHTML='Please enter first name';
document.getElementById("ln_er").innerHTML='Please enter last name';
document.getElementById("fi_er").innerHTML='Please upload file';
document.getElementById("dt_er").innerHTML='Please select "day, month, year" in date of birth';
document.getElementById("ho_er").innerHTML='Please select hobbies';
document.getElementById("co_er").innerHTML='Please select country';
document.getElementById("ph_er").innerHTML='Please enter phone number';
document.forms['registration']['userid'].focus();
return false;	
}
else
{
if(progress_bar0 === 0){document.getElementById("un_er").innerHTML='Please enter username';}
if(progress_bar1 ===0){document.getElementById("pw_er").innerHTML='Please enter password';}
if(progress_bar2 ===0){document.getElementById("cp_er").innerHTML='Please enter confirm password';}
if(progress_bar3 ===0){document.getElementById("fn_er").innerHTML='Please enter first name';}
if(progress_bar4 ===0){document.getElementById("ln_er").innerHTML='Please enter last name';}
if(progress_bar5 ===0){document.getElementById("fi_er").innerHTML='Please upload file';}
if(progress_bar6 ===0){document.getElementById("dt_er").innerHTML='Please select day in date of birth';}
if(progress_bar7 ===0){document.getElementById("dt_er").innerHTML='Please select month in date of birth';}
if(progress_bar8 ===0){document.getElementById("dt_er").innerHTML='Please select year in date of birth';}
if(progress_bar10 ===0){document.getElementById("ho_er").innerHTML='Please select hobbies';}
if(progress_bar11 ===0){document.getElementById("co_er").innerHTML='Please select country';}
if(progress_bar9 ===0){document.getElementById("ph_er").innerHTML='Please enter phone number';}
if(progress_bar0 === 0)
{
	document.forms['registration']['userid'].focus();
}
else
{
if(progress_bar1 ===0)
{
document.forms['registration']['passid'].focus();
}
else
{
if(progress_bar2 ===0)
{
document.forms['registration']['confirm_passid'].focus();
}
else
{
if(progress_bar3 ===0)
{
document.forms['registration']['first_name'].focus();
}
else
{
if(progress_bar4 ===0)
{
document.forms['registration']['last_name'].focus();
}
else
{
if(progress_bar5 ===0)
{
document.forms['registration']['file_name'].focus();
}
else
{

if(progress_bar6 ===0)
{
document.forms['registration']['dob1'].focus();
}
else
{
if(progress_bar7 ===0)
{
document.forms['registration']['dob2'].focus();
}
else
{
if(progress_bar8 ===0)
{
document.forms['registration']['dob3'].focus();
}
else
{
if(progress_bar10 ===0)
{
document.registration.hob[0].focus();
}
else
{
if(progress_bar11 ===0)
{
document.forms['registration']['country'].focus();
}
else
{
if(progress_bar9 ===0)
{
document.forms['registration']['phno'].focus();
}
}	
}	
}	
}	
}	
}	
}	
}	
}	
}	
}	

return false;
}

}



