var record=[
    {
        "vehicle": "car",
        "flower": "rose",
        "trees":"fir"
    },
       {
        "vehicle":"bus",
        "flower":"jasmin"
        ,"trees":"pine"}
       ];



function lookupfile(name,prop){
    for(var i=0;i<record.length;i++){
        if(record[i].vehicle===name){
            return record[i]

        }
 
    }
    return "no such record"
}
console.log(lookupfile("bus","vehicle"))