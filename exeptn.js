try{
    var data = "10";
    console.log(data.toUpperCase());

}
catch(err){
    console.log(err.message)
}

try{
    var age= 18;
    if(age<19) throw "age shudnt be less than 19"
}
catch(err){
    console.log(err)
}