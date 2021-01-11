'use strict';
var hours=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

// my first constructor
function Locations (locationname,mincusthour,maxcusthour,avcookiescust,custhourarray,amcookieshour){
    this.locationname = locationname;
    this.mincusthour = mincusthour;
    this.maxcusthour = maxcusthour;
    this.avcookiescust = avcookiescust;
    this.custhourarray = custhourarray;
    this.amcookieshour = amcookieshour;
    this.totalsum = 0;
    
    
    
   
}

Locations.prototype.rancusthour=function(){
    for (let i = 0; i < hours.length; i++) {
        this.custhourarray.push(custhour(this.mincusthour,this.maxcusthour));
                       
    }
};
Locations.prototype.cookieshourrancust=function(){
    for (let index = 0; index < this.custhourarray.length; index++) {
            
        this.amcookieshour.push(Math.ceil(this.custhourarray[index]*this.avcookiescust)); 
        this.totalsum=this.totalsum+(Math.ceil(this.custhourarray[index]*this.avcookiescust));
    }  
};

Locations.prototype.run=function(){
    var parentdiv = document.getElementById('profile');

    var location = document.createElement('p');
    location.textContent=this.locationname;
    parentdiv.appendChild(location); 

    var ullist = document.createElement('ul'); 
   parentdiv.appendChild(ullist);

   var list;
  for (let i = 0; i < hours.length; i++) {
       list = document.createElement('li');
       list.textContent=hours[i]+' :' + this.amcookieshour[i]+' cookies';
       ullist.appendChild(list);
    }
  list = document.createElement('li');
  list.textContent= 'total: '+ this.totalsum;
  ullist.appendChild(list);

};   


   var Seattle = new Locations('Seattle','23','65','6.3',[],[]);
   var Tokyo = new Locations('Tokyo','3','24','1.2',[],[]);
   var Dubai = new Locations('Dubai','11','38','3.7',[],[]);
   var Paris = new Locations('Paris','20','38','2.3',[],[]);
   var Lima = new Locations('Lima','2','16','4.6 ',[],[]);


 
   function custhour(mincusthour,maxcusthour){
    return Math.floor(Math.random()* (maxcusthour-mincusthour+1)+mincusthour);}
                                                                               

    Seattle.rancusthour();
   Seattle.cookieshourrancust();
   Seattle.run();
   console.log(Seattle);



   Tokyo.rancusthour();
   Tokyo.cookieshourrancust();
   Tokyo.run();
   console.log(Tokyo);



   Dubai.rancusthour();
  Dubai.cookieshourrancust();
  Dubai.run();
   console.log(Dubai);



   Paris.rancusthour();
   Paris.cookieshourrancust();
   Paris.run();
   console.log(Paris);


   Lima.rancusthour();
  Lima.cookieshourrancust();
  Lima.run();
  console.log(Lima);

