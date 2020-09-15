var count=1;
  var author=[];
  var title=[];
  var volume=[];
  var publisher=[];
  var year=[];
  var page=[];
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
      var a=document.getElementById('Author').value;
      var t=document.getElementById('Title').value;
      var p=document.getElementById('Publishers').value;
      var v=document.getElementById('Volume').value;
      var y=document.getElementById('Year').value;
      var pg=document.getElementById('Page').value;
    
     if(a==""||t==""||p==""||v==""||y==""||pg=="")
     alert("Fill all the required fields");
     else{
      count++;
      if(count==2)
        document.querySelector("#count").textContent= count +"nd Paper Details" ;
      else if(count==3)
      document.querySelector("#count").innerHTML= count +"rd Paper Details" ;
      else
      document.querySelector("#count").innerHTML= count +"th Paper Details" ;

  
  author.push(a);
      title.push(t);
      publisher.push(p);
      volume.push(v);
      year.push(y);
      page.push(pg);
      document.getElementById("tb").style.visibility = "visible";
      document.getElementById("bck").style.visibility = "visible";
      var i=0;
          for(i=0;i<count-1;i++){
            console.log(author[i]+" "+title[i]+" "+publisher[i]+" "+volume[i]+" "+year[i]+" "+page[i]);
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
cell2.innerHTML = t;
cell3.innerHTML = p;
cell4.innerHTML = v;
cell5.innerHTML = y;
cell6.innerHTML = pg;

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
    
          
          document.getElementById('Author').innerHTML=author[author.length-1];
          document.getElementById('Title').innerHTML=title[title.length-1];
          document.getElementById('Publishers').innerHTML=publisher[publisher.length-1];
          document.getElementById('Volume').innerHTML=volume[volume.length-1];
          document.getElementById('Year').innerHTML=year[year.length-1];
          document.getElementById('Page').innerHTML=page[page.length-1];


          if(count==1)
          document.querySelector("#count").innerHTML= count +"st Project Details" ;
          else if(count==2)
          document.querySelector("#count").innerHTML= count +"nd Project Details" ;
          else if(count==3)
          document.querySelector("#count").innerHTML= count +"rd Project Details" ;
          else
          document.querySelector("#count").innerHTML= count +"th Project Details" ;
        
    
          author.pop();
          title.pop();
          cname.pop();
          place.pop();
          year.pop();
          page.pop();
        }
        
        function sub(){

            var a=document.getElementById('Author').value;
            var t=document.getElementById('Title').value;
            var cn=document.getElementById('CName').value;
            var pl=document.getElementById('Place').value;
            var y=document.getElementById('Year').value;
            var pg=document.getElementById('Page').value;


if((a==""||t==""||cn==""||pl==""||y==""||pg=="")&&(count<=1))
     alert("Fill all the required fields");
     else if((a==""||t==""||cn==""||pl==""||y==""||pg=="")&&(count>1)){
      var i=0;
      for(i=0;i<count-1;i++){
        console.log(author[i]+" "+title[i]+" "+cname[i]+" "+place[i]+" "+year[i]+" "+page[i]);
    }
    document.getElementById('myform').reset();
    alert("Paper Details Submitted");
    location.href = "index.html";
     }
else{

    author.push(a);
    title.push(t);
    cname.push(cn);
    place.push(pl);
    year.push(y);
    page.push(pg);
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
cell2.innerHTML = t;
cell3.innerHTML = cn;
cell4.innerHTML = pl;
cell5.innerHTML = y;
cell6.innerHTML = pg;

          var i=0;
          for(i=0;i<count-1;i++){
            console.log(author[i]+" "+title[i]+" "+cname[i]+" "+place[i]+" "+year[i]+" "+page[i]);
        }
        document.getElementById('myform').reset();
        alert("Paper Details Submitted");
        location.href = "index.html";
}

        }
    
      
        