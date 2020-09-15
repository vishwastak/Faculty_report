var count=1;
  var level=[];
  var title=[];
  var stname=[];
  var spname=[];
  var course=[];
  var sta=[];
  

  if(count<=1)
  document.getElementById("tb").style.visibility = "hidden";
  else
  document.getElementById("tb").style.visibility = "visible";

  if(count<=1)
  document.getElementById("bck").style.visibility = "hidden";
  else
  document.getElementById("bck").style.visibility = "visible";

       function add()
    {
      var l=document.getElementById('Level').value;
      var t=document.getElementById('Title').value;
      var st=document.getElementById('StName').value;
      var sp=document.getElementById('SpName').value;
      var c=document.getElementById('Course').value;
      var s=document.getElementById('Status').value;
      if(sp=="")
       sp="nil";
     if(l==""||t==""||st=="")
     alert("Fill all the required fields");
     else{
      count++;
      if(count==2)
        document.querySelector("#count").innerHTML= count +"nd Project Details" ;
      else if(count==3)
      document.querySelector("#count").innerHTML= count +"rd Project Details" ;
      else
      document.querySelector("#count").innerHTML= count +"th Project Details" ;

      
      level.push(l);
      title.push(t);
      stname.push(st);
      spname.push(sp);
      course.push(c);
      sta.push(s);
      document.getElementById("tb").style.visibility = "visible";
      document.getElementById("bck").style.visibility = "visible";
      var i=0;
          for(i=0;i<count-1;i++){
            console.log(level[i]+" "+title[i]+" "+stname[i]+" "+spname[i]+" "+course[i]+" "+sta[i]);
        }
                // Find a <table> element with id="myTable":
var table = document.getElementById("tb");

// Create an empty <tr> element and add it to the 1st position of the table:
var row = table.insertRow(-1);

// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2);
var cell4 = row.insertCell(3);
var cell5 = row.insertCell(4);
var cell6 = row.insertCell(5);


// Add some text to the new cells:
cell1.innerHTML = l;
cell2.innerHTML = t;
cell3.innerHTML = st;
cell4.innerHTML = sp;
cell5.innerHTML = c;
cell6.innerHTML = s;

      document.getElementById('myform').reset();
        }    

        }
        
        function back(){
          count--;
          if(count<=1)
  document.getElementById("tb").style.visibility = "hidden";
  else
  document.getElementById("tb").style.visibility = "visible";

  if(count<=1)
  document.getElementById("bck").style.visibility = "hidden";
  else
  document.getElementById("bck").style.visibility = "visible";
          var table = document.getElementById("tb");
          var row = table.deleteRow(-1);
    

         

          if(count==1)
          document.querySelector("#count").innerHTML= count +"st Project Details" ;
          else if(count==2)
          document.querySelector("#count").innerHTML= count +"nd Project Details" ;
          else if(count==3)
          document.querySelector("#count").innerHTML= count +"rd Project Details" ;
          else
          document.querySelector("#count").innerHTML= count +"th Project Details" ;
        
          level.pop();
          title.pop();
          stname.pop();
          spname.pop();
          course.pop();
          sta.pop();
        }
        
        function sub(){

var l=document.getElementById('Level').value;
var t=document.getElementById('Title').value;
var st=document.getElementById('StName').value;
var sp=document.getElementById('SpName').value;
var c=document.getElementById('Course').value;
var s=document.getElementById('Status').value;

if(sp=="") sp="nil";

if((l==""||t==""||st=="")&&(count<=1))
     alert("Fill all the required fields");
     else if((l==""||t==""||st=="")&&(count>1)){
      var i=0;
      for(i=0;i<count-1;i++){
        console.log(level[i]+" "+title[i]+" "+stname[i]+" "+spname[i]+" "+course[i]+" "+sta[i]);
    }
    document.getElementById('myform').reset();
    alert("Project Details Submitted");
    location.href = "index.html";
     }
else{

level.push(l);
title.push(t);
stname.push(st);
spname.push(sp);
course.push(c);
sta.push(s);
count++;
  document.getElementById("tb").style.visibility = "visible";
  document.getElementById("bck").style.visibility = "visible";
  var table = document.getElementById("tb");

// Create an empty <tr> element and add it to the 1st position of the table:
var row = table.insertRow(-1);

// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2);
var cell4 = row.insertCell(3);
var cell5 = row.insertCell(4);
var cell6 = row.insertCell(5);


// Add some text to the new cells:
cell1.innerHTML = l;
cell2.innerHTML = t;
cell3.innerHTML = st;
cell4.innerHTML = sp;
cell5.innerHTML = c;
cell6.innerHTML = s;

          var i=0;
          for(i=0;i<count-1;i++){
            console.log(level[i]+" "+title[i]+" "+stname[i]+" "+spname[i]+" "+course[i]+" "+sta[i]);
        }
        document.getElementById('myform').reset();
        alert("Project Details Submitted");
        location.href = "index.html";
}

        }
      
        