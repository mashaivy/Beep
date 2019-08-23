//user int logic
$(document).ready(function(){
    $("form#enterNumber").submit(function(event) {
    event.preventDefault();
    $("result1").show();
    var numberInput = $("input").val();
    var newArray = [];
    newArray.push(numberInput);
    for (i=0; i=newArray.length; i++) {
     if (numberInput[i].includes("3")||numberInput[i]==="3"){
    alert ("I'm sorry, Dave. I'm afraid I can't do that.")
         //$("#responces1").append("boop"); why doesnt it work?
         //$("#result").show(); didn't work either
    }else if (numberInput[i].includes("2")||numberInput[i]==="2") {
    alert ("Your number input is: Boop!")
    }else if (numberInput[i].includes("1")||numberInput[i]==="1") {
    alert ("your number input is: Beep!")
    }
    }

});
});

//bussiness
