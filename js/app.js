'use strict';
var hours=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','total'];
var Seattle = {
    locationname : 'Seattle',
    mincusthour : 23 ,
    maxcusthour : 65 ,
    avcookiescust : 6.3 ,
    custhourarray : [],
    amcookieshour : [],
    rancusthour : function (mincusthour,maxcusthou) {
       
        for (let i = 0; i < hours.length-1; i++) {
            var custhour =  Math.floor(Math.random()* (maxcusthou-mincusthour+1)+mincusthour);
            this.custhourarray.push(custhour);
            
        }
        
    },
    cookieshourrancust : function (custhourarray,avcookiescust){
        for (let index = 0; index < custhourarray.length; index++) {
           var purchaisedcookies = custhourarray[i]*avcookiescust
           this.amcookieshour.push(purchaisedcookies); 
            
        }
    }

   
    

} ;
Seattle.rancusthour(23,65);
Seattle.cookieshourrancust(Seatle.custhourarray,Seatle.avcookiescust);

console.log(Seatle);
var parentdiv = document.getElementById('profile');
var location = document.createElement('p');
location.textContent=Seattle.locationname;
parentdiv.appendChild(location);


var Seattlelist = document.createElement('ul');
Seattlelist.textContent=hours,Seattle.amcookieshour;
location.appendChild(Seattlelist);
console.log(document);


//nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn



var Tokyo = {
    locationname : 'Tokyo',
    mincusthour : 3 ,
    maxcusthour : 24 ,
    avcookiescust : 1.2 ,
    custhourarray : [],
    amcookieshour : [],
    rancusthour : function (mincusthour,maxcusthou) {
       
        for (let i = 0; i < hours.length-1; i++) {
            var custhour =  Math.floor(Math.random()* (maxcusthou-mincusthour+1)+mincusthour);
            this.custhourarray.push(custhour);
            
        }
        
    },
    cookieshourrancust : function (custhourarray,avcookiescust){
        for (let index = 0; index < custhourarray.length; index++) {
           var purchaisedcookies = custhourarray[i]*avcookiescust
           this.amcookieshour.push(purchaisedcookies); 
            
        }
    }
};

Tokyo.rancusthour(3,24);
Tokyo.cookieshourrancust(Tokyo.custhourarray,Tokyo.avcookiescust);

console.log(Tokyo);
var parentdiv = document.getElementById('profile');
var location = document.createElement('p');
location.textContent=Tokyo.locationname;
parentdiv.appendChild(location);


var Tokyolist = document.createElement('ul');
Tokyolist.textContent=hours,Tokyo.amcookieshour;
location.appendChild(Tokyolist);
console.log(document);

//nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn

var Dubai = {
    locationname : 'Dubai',
    mincusthour : 11 ,
    maxcusthour : 38 ,
    avcookiescust : 3.7 ,
    custhourarray : [],
    amcookieshour : [],
    rancusthour : function (mincusthour,maxcusthou) {
       
        for (let i = 0; i < hours.length-1; i++) {
            var custhour =  Math.floor(Math.random()* (maxcusthou-mincusthour+1)+mincusthour);
            this.custhourarray.push(custhour);
            
        }
        
    },
    cookieshourrancust : function (custhourarray,avcookiescust){
        for (let index = 0; index < custhourarray.length; index++) {
           var purchaisedcookies = custhourarray[i]*avcookiescust
           this.amcookieshour.push(purchaisedcookies); 
            
        }
    }
};
Dubai.rancusthour(11,38);
Dubai.cookieshourrancust(Dubai.custhourarray,Dubai.avcookiescust);

console.log(Dubai);
var parentdiv = document.getElementById('profile');
var location = document.createElement('p');
location.textContent=Dubai.locationname;
parentdiv.appendChild(location);


var Dubailist = document.createElement('ul');
Dubailist.textContent=hours,Dubai.amcookieshour;
location.appendChild(Dubailist);
console.log(document);


//nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn



var Paris = {
    locationname : 'Paris',
    mincusthour : 20 ,
    maxcusthour : 38 ,
    avcookiescust : 2.3 ,
    custhourarray : [],
    amcookieshour : [],
    rancusthour : function (mincusthour,maxcusthou) {
       
        for (let i = 0; i < hours.length-1; i++) {
            var custhour =  Math.floor(Math.random()* (maxcusthou-mincusthour+1)+mincusthour);
            this.custhourarray.push(custhour);
            
        }
        
    },
    cookieshourrancust : function (custhourarray,avcookiescust){
        for (let index = 0; index < custhourarray.length; index++) {
           var purchaisedcookies = custhourarray[i]*avcookiescust
           this.amcookieshour.push(purchaisedcookies); 
            
        }
    }
};

Paris.rancusthour(20,38);
Paris.cookieshourrancust(Paris.custhourarray,Paris.avcookiescust);

console.log(Paris);
var parentdiv = document.getElementById('profile');
var location = document.createElement('p');
location.textContent=Paris.locationname;
parentdiv.appendChild(location);


var Parisilist = document.createElement('ul');
Parisilist.textContent=hours,Paris.amcookieshour;
location.appendChild(Parislist);
console.log(document);



//nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn

var Lima = {
    locationname : 'Lima',
    mincusthour : 2 ,
    maxcusthour : 16 ,
    avcookiescust : 4.6 ,
    rancusthour : function (mincusthour,maxcusthou) {
       
        for (let i = 0; i < hours.length-1; i++) {
            var custhour =  Math.floor(Math.random()* (maxcusthou-mincusthour+1)+mincusthour);
            this.custhourarray.push(custhour);
            
        }
        
    },
    cookieshourrancust : function (custhourarray,avcookiescust){
        for (let index = 0; index < custhourarray.length; index++) {
           var purchaisedcookies = custhourarray[i]*avcookiescust
           this.amcookieshour.push(purchaisedcookies); 
            
        }
    }
};

Lima.rancusthour(20,38);
Lima.cookieshourrancust(Lima.custhourarray,Lima.avcookiescust);
console.log(Lima);

var parentdiv = document.getElementById('profile');
var location = document.createElement('p');
location.textContent=Lima.locationname;
parentdiv.appendChild(location);


var Limalist = document.createElement('ul');
Limalist.textContent=hours,Lima.amcookieshour;
location.appendChild(Limalist);
console.log(document);
