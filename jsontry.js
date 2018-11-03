var myReq = new XMLHttpRequest();
myReq.open('GET','db.json',true);
myReq.onload = function(){
    var myObject=JSON.parse(myReq.responseText);
    console.log(myObject);
}
myReq.send();