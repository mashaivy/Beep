//user int logic


$(document).ready(function(){

$("form#enterNumber").submit(function(event) {
    $("result1").show();
    var numberInput = $("input").val();

    var newArray = [];

    newArray.push(numberInput);

    for (i=0; i=newArray.length; i++) {
    if (numberInput[i].includes("1")) {
        $("#responces1").append("boop"); //why doesnt it work?
    }else {
        alert ("no");
    }


    event.preventDefault();
};
});
});
//bussiness
