
    //back-end
//front-end logic
$(document).ready(function(){
    $("form#enterNumber").submit(function(event) {
    event.preventDefault();
    var numberInput = $("input").val();

    var newArray = [];
    newArray.push(numberInput);
    var resultArray = [];

    var sorry = "srry dave"

        for (i=0; i<newArray.length; i++) {
            if (numberInput[i].includes("3")||numberInput[i]==="3"){
                //resultArray.push(sorry);
                //console.log(resultArray)
                //alert ("I'm sorry, Dave. I'm afraid I can't do that.")
                $("#responces1").append("I'm sorry, Dave. I'm afraid I can't do that.");
                //$("#result").show(); didn't work either
            }else if (numberInput[i].includes("2")||numberInput[i]==="2") {
                $("#responces1").append("boop!");
            }else if (numberInput[i].includes("1")||numberInput[i]==="1") {
                    $("#responces1").append("beep!");
            };
        };

});
});

//
