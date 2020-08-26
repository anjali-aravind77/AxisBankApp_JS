class Bank{

    static getAccountDetails(){
        var accountDetails={
            1001:{name:"user1", accno:1001, pin:1234, password:"userone", balance:3000},
            1002:{name:"user2", accno:1002, pin:1244, password:"usertwo", balance:2900},
            1003:{name:"user3", accno:1003, pin:1254, password:"userthr", balance:3000},
            1004:{name:"user3", accno:1004, pin:1255, password:"userfour", balance:5000},
            1005:{name:"user3", accno:1005, pin:1257, password:"userfive", balance:3100},
          
        
        } 
        return accountDetails;

    }
    static login(){
        var acc_num = document.querySelector("#acno").value;
        try{
            if(accountnum.length != 4) throw "invalid account number"
            }
            catch(err){
                alert(err)
            }
        var paswrd = document.querySelector("#pwd").value;
       
        //alert(acc_num + "," + paswrd);
        let details= Bank.getAccountDetails();
        if(acc_num in details){
            let pwd = details[acc_num].password;
            //alert(pwd)
            if(pwd == paswrd){
                alert("success")
                window.location.href = "user_home.html";
            }
            else{
                alert("not succesful")
            }
           
    }
    else{
        alert("invalid username")
    }
}
static deposit(){
    var accountnum = document.querySelector("#acnod").value;
    var pin_num = document.querySelector("#pin").value;
    var amount = Number(document.querySelector("#amountd").value);
    var data = Bank.getAccountDetails();
    if(accountnum in data){
        var mpin = data[accountnum].pin;
        if(pin_num == mpin){
            data[accountnum].balance += amount;
            alert("amount credited");
            alert(data[accountnum].balance);
        }
    }
    else{
        alert("invalid")
    }

}
static withdrawal(){
    var accountnum = document.querySelector("#w_acno").value;
    var pin_num = document.querySelector("#w_pin").value;
    var amount = Number(document.querySelector("#w_amount").value);
    var data = Bank.getAccountDetails();
    if(accountnum in data){
        var mpin = data[accountnum].pin;
        if(pin_num == mpin){
            data[accountnum].balance -= amount;
            alert("amount debited");
            alert(data[accountnum].balance);
        }
    }
    else{
        alert("invalid")
    }

}
}