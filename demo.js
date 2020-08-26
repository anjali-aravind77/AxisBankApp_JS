var accountDetails={
    1001:{name:"user1", accno:1001, pin:1234, password:"userone", balance:3000},
    1002:{name:"user2", accno:1002, pin:1244, password:"usertwo", balance:2900},
    1003:{name:"user3", accno:1003, pin:1254, password:"userthr", balance:3000},
    1004:{name:"user3", accno:1004, pin:1255, password:"userfour", balance:5000},
    1005:{name:"user3", accno:1005, pin:1257, password:"userfive", balance:3100},
  

} 

if(1001 in accountDetails){
    console.log(accountDetails[1001].name);
    console.log(accountDetails[1001].balance);
}