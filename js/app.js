'use strict';
var hours=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
var Seattle = {
    locationname : 'Seattle',
    mincusthour : 23 ,
    maxcusthour : 65 ,
    avcookiescust : 6.3 ,
    custhourarray : [],
    amcookieshour : [],
    totalsum : 0 ,
    rancusthour : function () {
       
        for (let i = 0; i < hours.length; i++) {
            this.custhourarray.push(custhour(this.mincusthour,this.maxcusthour));
            
        }
        
    },
    cookieshourrancust : function (){
        for (let index = 0; index < this.custhourarray.length; index++) {
            
           this.amcookieshour.push(Math.ceil(this.custhourarray[index]*this.avcookiescust)); 
            this.totalsum=this.totalsum+(Math.ceil(this.custhourarray[index]*this.avcookiescust));
        }
    },
    run : function(){
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

    }

   
    

} ;

function custhour(mincusthour,maxcusthour){
    return Math.floor(Math.random()* (maxcusthour-mincusthour+1)+mincusthour);
}

Seattle.rancusthour();
Seattle.cookieshourrancust();
Seattle.run();
console.log(Seattle);









// //nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn



var Tokyo = {
    locationname : 'Tokyo',
    mincusthour : 3 ,
    maxcusthour : 24 ,
    avcookiescust : 1.2 ,
    custhourarray : [],
    amcookieshour : [],
    totalsum : 0 ,
    
    rancusthour : function () {
       
        for (let i = 0; i < hours.length; i++) {
            this.custhourarray.push(custhour(this.mincusthour,this.maxcusthour));
            
        }
        
    },
    cookieshourrancust : function (){
        for (let index = 0; index < this.custhourarray.length; index++) {
            
           this.amcookieshour.push(Math.ceil(this.custhourarray[index]*this.avcookiescust)); 
           this.totalsum=this.totalsum+(Math.ceil(this.custhourarray[index]*this.avcookiescust));
        }
    },
    run : function(){
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

    }

};
Tokyo.rancusthour();
Tokyo.cookieshourrancust();
Tokyo.run();
console.log(Tokyo);


// var parentdiv = document.getElementById('profile');
// var location = document.createElement('p');
// location.textContent=Tokyo.locationname;
// parentdiv.appendChild(location);


// var Tokyolist = document.createElement('ul');
// Tokyolist.textContent=hours,Tokyo.amcookieshour;
// location.appendChild(Tokyolist);
// console.log(document);

// //nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn

var Dubai = {
    locationname : 'Dubai',
    mincusthour : 11 ,
    maxcusthour : 38 ,
    avcookiescust : 3.7 ,
    custhourarray : [],
    amcookieshour : [],
    totalsum : 0 ,
    rancusthour : function () {
       
        for (let i = 0; i < hours.length; i++) {
            this.custhourarray.push(custhour(this.mincusthour,this.maxcusthour));
            
        }
        
    },
    cookieshourrancust : function (){
        for (let index = 0; index < this.custhourarray.length; index++) {
            
           this.amcookieshour.push(Math.ceil(this.custhourarray[index]*this.avcookiescust)); 
           this.totalsum=this.totalsum+(Math.ceil(this.custhourarray[index]*this.avcookiescust));
        }
    },
    run : function(){
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

    }
};
Dubai.rancusthour();
Dubai.cookieshourrancust();
Dubai.run();
console.log(Dubai);
// var parentdiv = document.getElementById('profile');
// var location = document.createElement('p');
// location.textContent=Dubai.locationname;
// parentdiv.appendChild(location);


// var Dubailist = document.createElement('ul');
// Dubailist.textContent=hours,Dubai.amcookieshour;
// location.appendChild(Dubailist);
// console.log(document);


// //nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn



var Paris = {
    locationname : 'Paris',
    mincusthour : 20 ,
    maxcusthour : 38 ,
    avcookiescust : 2.3 ,
    custhourarray : [],
    amcookieshour : [],
    totalsum : 0 ,
    rancusthour : function () {
       
        for (let i = 0; i < hours.length; i++) {
            this.custhourarray.push(custhour(this.mincusthour,this.maxcusthour));
            
        }
        
    },
    cookieshourrancust : function (){
        for (let index = 0; index < this.custhourarray.length; index++) {
            
           this.amcookieshour.push(Math.ceil(this.custhourarray[index]*this.avcookiescust)); 
           this.totalsum=this.totalsum+(Math.ceil(this.custhourarray[index]*this.avcookiescust));
        }
    },
    run : function(){
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

    }
};
Paris.rancusthour();
Paris.cookieshourrancust();
Paris.run();
console.log(Paris);
// var parentdiv = document.getElementById('profile');
// var location = document.createElement('p');
// location.textContent=Paris.locationname;
// parentdiv.appendChild(location);


// var Parisilist = document.createElement('ul');
// Parisilist.textContent=hours,Paris.amcookieshour;
// location.appendChild(Parislist);
// console.log(document);



// //nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn

var Lima = {
    locationname : 'Lima',
    mincusthour : 2 ,
    maxcusthour : 16 ,
    avcookiescust : 4.6 ,
    custhourarray : [],
    amcookieshour : [],
    totalsum : 0 ,
    rancusthour : function () {
       
        for (let i = 0; i < hours.length; i++) {
            this.custhourarray.push(custhour(this.mincusthour,this.maxcusthour));
            
        }
        
    },
    cookieshourrancust : function (){
        for (let index = 0; index < this.custhourarray.length; index++) {
            
           this.amcookieshour.push(Math.ceil(this.custhourarray[index]*this.avcookiescust)); 
           this.totalsum=this.totalsum+(Math.ceil(this.custhourarray[index]*this.avcookiescust));
        }
    },
    run : function(){
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

    }
};
Lima.rancusthour();
Lima.cookieshourrancust();
Lima.run();
console.log(Lima);
// var parentdiv = document.getElementById('profile');
// var location = document.createElement('p');
// location.textContent=Lima.locationname;
// parentdiv.appendChild(location);


// var Limalist = document.createElement('ul');
// Limalist.textContent=hours,Lima.amcookieshour;
// location.appendChild(Limalist);
// console.log(document);
