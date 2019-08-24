//UI logic
$(document).ready(function(){
    $("form#enterNumber").submit(function(event) {
     event.preventDefault();
     var numberInput = $("input").val();
     var newArray = [];
     newArray.push(numberInput);


//Bussiness logic
    for (i=0; i<newArray.length; i++) {
        if (numberInput[i].includes("3")||numberInput[i]==="3"){
        $("#responces1").append("I'm sorry, Dave. I'm afraid I can't do that.");
        }else if (numberInput[i].includes("2")||numberInput[i]==="2") {
        $("#responces1").append("boop!");
        }else if (numberInput[i].includes("1")||numberInput[i]==="1") {
        $("#responces1").append("beep!");
    } else {
        $("#noResult").show();
    }

};
});

});

//
