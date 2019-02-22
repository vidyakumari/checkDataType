function checkDataType(type){
    
     if(type==null){
    console.log("null");
    console.log(null);
     }
    if(typeof(type)==='object'&& typeof(type[0])!=='object')
    {
        console.log("array");
        console.log(type);
        a.map((x,i)=>{
            console.log(x);
        })
    }
    if(typeof(type)==='object'&& typeof(type[0])==='object')
    {
        console.log("array of object");
        console.log(type);
        b.map((x,i)=>{
            console.log(x);
        })
    }
    if(typeof(type)=='number'){
        console.log("number");
        console.log(type);
    }
    if(typeof(type)=='undefined'){
        console.log("undefined");
        console.log(type);
    }
    if(typeof(type)=='string'){
        console.log("string");
        console.log(type);
    }
    
    if(typeof(type)=='NaN'){
        console.log("NaN");
    }
}


a=[2,5,6,8];
b=[{"id":1},{"id":2},{"id":5},{"id":7}]
c=12;
var d;
var f="hello";
n=true;
var e=1-'z'
checkDataType(a);
checkDataType(b);
checkDataType(c);
checkDataType(d);
checkDataType(f);
checkDataType(n);
checkDataType(e);