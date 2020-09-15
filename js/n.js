var count=1;
  
  var namec=[];
  var place1=[];
  var sponsored=[];
  var startdate=[];
  var enddate=[];
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
      var nc=document.getElementById('Namec').value;
      var pl=document.getElementById('Place1').value;
      var sp=document.getElementById('Sponsored').value;
      var sd=document.getElementById('Startdate').value;
      var ed=document.getElementById('Enddate').value;
      
     if(nc==""||pl==""||sp==""||sd==""||ed=="")
     alert("Fill all the required fields");
     else{
      count++;
      if(count==2)
        document.querySelector("#count").innerHTML= count +"nd Project Details" ;
      else if(count==3)
      document.querySelector("#count").innerHTML= count +"rd Project Details" ;
      else
      document.querySelector("#count").innerHTML= count +"th Project Details" ;

      namec.push(nc);
      place1.push(pl);
      sponsored.push(sp);
      startdate.push(sd);
      enddate.push(ed);
      document.getElementById("tb").style.visibility = "visible";
      document.getElementById("bck").style.visibility = "visible";
      var i=0;
          for(i=0;i<count-1;i++){
            console.log(namec[i]+" "+place1[i]+" "+sponsored[i]+" "+startdate[i]+" "+enddate[i]);
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


// Add some text to the new cells:

cell1.innerHTML = nc;
cell2.innerHTML = pl;
cell3.innerHTML = sp;
cell4.innerHTML = sd;
cell5.innerHTML = ed;

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
    

          document.getElementById('Namec').innerHTML=namec[namec.length-1];
          document.getElementById('Place1').innerHTML=place1[place1.length-1];
          document.getElementById('Sponsored').innerHTML=sponsored[sponsored.length-1];
          
         

         
          if(count==1)
      document.querySelector("#count").innerHTML= count +"st Project Details" ;
      else if(count==2)
      document.querySelector("#count").innerHTML= count +"nd Project Details" ;
      else if(count==3)
      document.querySelector("#count").innerHTML= count +"rd Project Details" ;
      else
      document.querySelector("#count").innerHTML= count +"th Project Details" ;
          
          namec.pop();
          place1.pop();
          sponsored.pop();
          startdate.pop();
          enddate.pop();
        }
        
        function sub(){

      var nc=document.getElementById('Namec').value;
      var pl=document.getElementById('Place1').value;
      var sp=document.getElementById('Sponsored').value;
      var sd=document.getElementById('Startdate').value;
      var ed=document.getElementById('Enddate').value;


if((nc==""||pl==""||sp==""||sd==""||ed=="")&&(count<=1))
     alert("Fill all the required fields");
     else if(nc==""||pl==""||sp==""||sd==""||ed==""){
      var i=0;
      for(i=0;i<count-1;i++){
        console.log(namec[i]+" "+place1[i]+" "+sponsored[i]+" "+startdate[i]+" "+enddate[i]);
    }
    document.getElementById('myform').reset();
    alert("Project Details Submitted");
    location.href = "index.html";
     }
else{
  
      namec.push(nc);
      place1.push(pl);
      sponsored.push(sp);
      startdate.push(sd);
      enddate.push(ed);
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


// Add some text to the new cells:
cell1.innerHTML = nc;
cell2.innerHTML = pl;
cell3.innerHTML = sp;
cell4.innerHTML = sd;
cell5.innerHTML = ed;

          var i=0;
          for(i=0;i<count-1;i++){
            console.log(namec[i]+" "+place1[i]+" "+sponsored[i]+" "+startdate[i]+" "+enddate[i]);
        }
        document.getElementById('myform').reset();
        alert("Project Details Submitted");
        location.href = "index.html";
}

        }
      
        