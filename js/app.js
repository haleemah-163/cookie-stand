"use strict";
var hours = [
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
];
var locationObjects = [];
var totalforeachhour = [];
var colomsum = 0;
// my first constructor
function Locations(locationname, mincusthour, maxcusthour, avcookiescust) {
  this.locationname = locationname;
  this.mincusthour = mincusthour;
  this.maxcusthour = maxcusthour;
  this.avcookiescust = avcookiescust;
  this.custhourarray = [];
  this.amcookieshour = [];
  this.totalsum = 0;
  // this.cookieshourrancust();
  locationObjects.push(this);

  
}

Locations.prototype.rancusthour = function () {
  for (let i = 0; i < hours.length; i++) {
    this.custhourarray.push(custhour(this.mincusthour, this.maxcusthour));
  }
};
Locations.prototype.cookieshourrancust = function () {
  for (let index = 0; index < this.custhourarray.length; index++) {
    this.amcookieshour.push(
      Math.ceil(this.custhourarray[index] * this.avcookiescust)
    );
    this.totalsum =
      this.totalsum + Math.ceil(this.custhourarray[index] * this.avcookiescust);
      bigtotal= bigtotal+this.amcookieshour[index];
  }
};

Locations.prototype.run = function () {
  locationdata = document.createElement("tr");
  mainTable.appendChild(locationdata);
  namecell = document.createElement("td");
  namecell.textContent = this.locationname;
  locationdata.appendChild(namecell);

  for (let i = 0; i < hours.length; i++) {
    datacell = document.createElement("td");
    datacell.textContent = this.amcookieshour[i];
    locationdata.appendChild(datacell);
  }
  sumarrowcell = document.createElement("td");
  sumarrowcell.textContent = this.totalsum;
  locationdata.appendChild(sumarrowcell);


 

  
};
//oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo

//oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
var Seattle = new Locations("Seattle", "23", "65", "6.3");
var Tokyo = new Locations("Tokyo", "3", "24", "1.2");
var Dubai = new Locations("Dubai", "11", "38", "3.7");
var Paris = new Locations("Paris", "20", "38", "2.3");
var Lima = new Locations("Lima", "2", "16", "4.6 ");

function custhour(mincusthour, maxcusthour) {
  return Math.floor(
    Math.random() * (maxcusthour - mincusthour + 1) + mincusthour
  );
}
//oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo

var parentdiv;
var mainTable;
var headerrow;
var cornercell;
var hourcells;
var totalarrowcell;
var locationdata;
var namecell;
var datacell;
var sumarrowcell;
var lastsumcell;
var totaloftotalcell;
var bigtotal=0;


//oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
function maketable() {
  parentdiv = document.getElementById("profile");
  mainTable = document.createElement("table");
  parentdiv.appendChild(mainTable);

  headerrow = document.createElement("tr");
  mainTable.appendChild(headerrow);
  cornercell = document.createElement("th");
  headerrow.appendChild(cornercell);

  

  for (let i = 0; i < hours.length; i++) {
    hourcells = document.createElement("th");
    hourcells.textContent = hours[i];
    headerrow.appendChild(hourcells);
  }
  totalarrowcell = document.createElement("th");
  totalarrowcell.textContent = "Daily Location Total";
  headerrow.appendChild(totalarrowcell);


  
}
//ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo

maketable();

//ooooooooooooooooooooooooooooooooooooooooooooooooooooooooo

for (let a = 0; a < locationObjects.length; a++) {
  locationObjects[a].rancusthour();
  locationObjects[a].cookieshourrancust();
  locationObjects[a].run();
  console.log(locationObjects[a]);
  
}




//ppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp


  function totalarrow (){

    
   
  
    for (let index = 0; index < hours.length; index++) {
        for (let o = 0; o < locationObjects.length; o++) {
          colomsum = colomsum + locationObjects[o].amcookieshour[index];
          
          
        }
        totalforeachhour.push(colomsum);
        colomsum=0;
        
        
        
      }
      totalforeachhour.push(bigtotal);
      
      
      console.log('totalforeachhour', totalforeachhour);

      headerrow = document.createElement("tr");
      mainTable.appendChild(headerrow);
      cornercell = document.createElement("th");
      
      cornercell.textContent='Totals per hour';
  
      headerrow.appendChild(cornercell);
      
     
    
      for (let i = 0; i < hours.length; i++) {
        lastsumcell = document.createElement("th");
        lastsumcell.textContent = totalforeachhour[i];
        headerrow.appendChild(lastsumcell);
      }
      totaloftotalcell = document.createElement("th");
      totaloftotalcell.textContent = bigtotal;
      headerrow.appendChild(totaloftotalcell);
    
    

  } 
  
//oppppppppppppppppppppppppppppppppppppooooooopppoppooooooooooooooooooooooooooooooooooooooooooooooooooo


var div = document.getElementById('formSection');
  
div.addEventListener('submit',addForm);

function addForm (event){

  
  // namecell = document.createElement("td");
  // namecell.textContent = this.locationname;
  // locationdata.appendChild(namecell);

 

event.preventDefault();
var addedlocation=[event.target.ln.value,event.target.min.value,event.target.max.value,event.target.av.value];
  
 var newlocation = new Locations(addedlocation[0],addedlocation[1],addedlocation[2],addedlocation[3]);
 
//  locationObjects.push(newlocation);
mainTable.removeChild(headerrow);
 newlocation.rancusthour();
 newlocation.cookieshourrancust(); 
 newlocation.run();


 totalarrow();
 
}


  totalarrow ();



 
  
