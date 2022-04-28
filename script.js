$("button").click(function(){
    let variable1 = $(".a").val();
    let variable2 = $(".b").val();
    let variable3 = $(".c").val();
    
    let variable4 = variable3 *365*15;
    
    $(".fortune-display").append(
        variable1+ "you will use the cellphone "+ variable4 +" times in the next 15 year.");
    
    console.log(variable1,variable2,variable3);
});