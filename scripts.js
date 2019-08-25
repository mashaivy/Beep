//UI logic
$(document).ready(function(){
    $("form#enterNumber").submit(function(event) {
        event.preventDefault();
        $(".bubble").hide()
        var numberInput = $("input").val();
        var newArray = [];
        newArray.push(numberInput);
     //console.log(newArray)
//Bussiness logic
        for (i=0; i<newArray.length; i++) {
            if (newArray[i].includes("3")) {
                $("#responces1").append("I'm sorry, Dave. I'm afraid I can't do that.");
            }else if (newArray[i].includes("2")) {
                $("#responces1").append("boop!");
            }else if (newArray[i].includes("1")) {
                $("#responces1").append("beep!");
            } else {
                $("#noResult").show();
    };
};
});
});
