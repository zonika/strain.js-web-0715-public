'use strict';

var strain = {
  keep: function (array, func){
   var newArray = []
   array.forEach(function(x){
     if(func(x)) {
       newArray.push(x)
     }
   })
   return newArray
 },
 discard: function (array, func){
  var newArray = []
  array.forEach(function(x){
    if(!func(x)) {
      newArray.push(x)
    }
  })
  return newArray
}
};
