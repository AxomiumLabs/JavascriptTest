//Record collection
var record=
    {
        "home1":{"flower":["rose","tulip"]
    
    ,"trees":["fir","pine" ],
    },
    "home2":{
        "flower":["jasmin","dandelion"]
    
    ,"trees":["teak","pine" ],
    }
    }
;

var reccopy=JSON.parse(JSON.stringify(record));
console.log(reccopy)
function updaterec(id, prop, value) {
    if (value === "") {
        delete record[id][prop];
    } else if (prop==="flower"){
        record[id][prop]=record[id][prop]|| [ ];
        record[id][prop].push(value);
    }else{
        record[id][prop]=value;
    }
    return record;
}
console.log(updaterec("home2","flower","rose"))
updaterec("home2","flower","")//if val is empty delete 
updaterec("home2","vehicles","car")
console.log(record.home2)