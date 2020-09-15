var count=1;
  var activity=[];
  var level=[];
  var faculty=[];
 
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
      var a=document.getElementById('Activity').value;
      var l=document.getElementById('Level').value;
      var f=document.getElementById('Faculty').value;

    
     if(a==""||f=="")
     alert("Fill all the required fields");
     else{
      count++;
      if(count==2)
        document.querySelector("#count").innerHTML= count +"nd Activity Details" ;
      else if(count==3)
      document.querySelector("#count").innerHTML= count +"rd Activity Details" ;
      else
      document.querySelector("#count").innerHTML= count +"th Activity Details" ;

  
  activity.push(a);
      level.push(l);
      faculty.push(f);

      document.getElementById("tb").style.visibility = "visible";
      document.getElementById("bck").style.visibility = "visible";
      var i=0;
          for(i=0;i<count-1;i++){
            console.log(activity[i]+" "+level[i]+" "+faculty[i]);
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
cell1.innerHTML = a;
cell2.innerHTML = l;
cell3.innerHTML = f;

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
    

          
          document.getElementById('Activity').innerHTML=activity[activity.length-1];
          document.getElementById('Level').innerHTML=level[level.length-1];
          document.getElementById('Faculty').innerHTML=faculty[faculty.length-1];
    
         
          if(count==1)
      document.querySelector("#count").innerHTML= count +"st Activity Details" ;
     else if(count==2)
      document.querySelector("#count").innerHTML= count +"nd Activity Details" ;
    else if(count==3)
    document.querySelector("#count").innerHTML= count +"rd Activity Details" ;
    else
    document.querySelector("#count").innerHTML= count +"th Activity Details" ;

          activity.pop();
          level.pop();
          faculty.pop();
         
        }
        
        function sub(){

            var a=document.getElementById('Activity').value;
            var l=document.getElementById('Level').value;
            var f=document.getElementById('Faculty').value;

if((a==""||f=="")&&(count<=1))
     alert("Fill all the required fields");
else if((a==""||f=="")&&(count>1)){
      var i=0;
      for(i=0;i<count-1;i++){
        console.log(activity[i]+" "+level[i]+" "+faculty[i]);
    }
    document.getElementById('myform').reset();
    alert("Activity Details Submitted");
    location.href = "index.html";
     }
else{

    activity.push(a);
    level.push(l);
    faculty.push(f);
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
cell1.innerHTML = a;
cell2.innerHTML = l;
cell3.innerHTML = f;

var i=0;
for(i=0;i<count-1;i++){
  console.log(activity[i]+" "+level[i]+" "+faculty[i]);
}
        document.getElementById('myform').reset();
        alert("Paper Details Submitted");
        location.href = "index.html";
}

        }
      
        