var count=1;
  var S=[];
  var title=[];
  var author=[];
  var particular=[];
  var remark=[];
  
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
      var s=document.getElementById('S.No').value;
      var t=document.getElementById('Title').value;
      var a=document.getElementById('Authors').value;
      var p=document.getElementById('Particulars').value;
      var r=document.getElementById('Remarks').value;
    
    
     if(s==""||t==""||a==""||p==""||r=="")
     alert("Fill all the required fields");
     else{
      count++;
      if(count==2)
        document.querySelector("#count").innerHTML= count +"nd Paper Details" ;
      else if(count==3)
      document.querySelector("#count").innerHTML= count +"rd Paper Details" ;
      else
      document.querySelector("#count").innerHTML= count +"th Paper Details" ;

  
  S.push(s);
      title.push(t);
      author.push(a);
      particular.push(p);
      remark.push(r);
      
      document.getElementById("tb").style.visibility = "visible";
      document.getElementById("bck").style.visibility = "visible";
      var i=0;
          for(i=0;i<count-1;i++){
            console.log(S[i]+" "+title[i]+" "+particular[i]+" "+author[i]+" "+remark[i]+" ");
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
cell1.innerHTML = s;
cell2.innerHTML = t;
cell3.innerHTML = p;
cell4.innerHTML = a;
cell5.innerHTML = r;

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
    

          document.getElementById('S.No').innerHTML=S[S.length-1];
          document.getElementById('Title').innerHTML=title[title.length-1];
          document.getElementById('Authors').innerHTML=author[author.length-1];
          document.getElementById('Particulars').innerHTML=particular[particular-1];
          document.getElementById('Remarks').innerHTML=remark[remark.length-1];
          
          

         
          if(count==1)
      document.querySelector("#count").innerHTML= count +"st Paper Details" ;
     else if(count==2)
      document.querySelector("#count").innerHTML= count +"nd Paper Details" ;
    else if(count==3)
    document.querySelector("#count").innerHTML= count +"rd Paper Details" ;
    else
    document.querySelector("#count").innerHTML= count +"th Paper Details" ;

          S.pop();
          title.pop();
          particular.pop();
          author.pop();
          remark.pop();
    
        }
        
        function sub(){

            var s=document.getElementById('S.No').value;
            var t=document.getElementById('Title').value;
            var p=document.getElementById('Particulars').value;
            var a=document.getElementById('Authors').value;
            var r=document.getElementById('Remarks').value;
    


if((s==""||t==""||p==""||a==""||r=="")&&(count<=1))
     alert("Fill all the required fields");
     else if((s==""||t==""||p==""||a==""||r=="")&&(count>1)){
      var i=0;
      for(i=0;i<count-1;i++){
        console.log(S[i]+" "+title[i]+" "+particular[i]+" "+author[i]+" "+remark[i]+" ");
    }
    document.getElementById('myform').reset();
    alert("Paper Details Submitted");
    location.href = "index.html";
     }
else{

    S.push(a);
    title.push(t);
    particular.push(p);
    author.push(a);
    remark.push(r);
  
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
cell1.innerHTML = s;
cell2.innerHTML = t;
cell3.innerHTML = p;
cell4.innerHTML = a;
cell5.innerHTML = r;


          var i=0;
          for(i=0;i<count-1;i++){
            console.log(S[i]+" "+title[i]+" "+particular[i]+" "+author[i]+" "+remark[i]+" ");
        }
        document.getElementById('myform').reset();
        alert("Paper Details Submitted");
        location.href = "index.html";
}

        }
      