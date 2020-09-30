function calcRect(){
    $('#info').addClass("invisible")
    if($("#p").val() != "" && $("#l").val() != ""){

        getResult('rectangle',{p:$("#p").val(),l:$("#l").val()})
    }    
}
function calcCirc(){
    $('#info').addClass("invisible")
    if($("#r").val() != ""){

        getResult('circle',{r:$("#r").val()})
    }    
}
function calcTri(){
    $('#info').addClass("invisible")
    if($("#s1").val() != "" && $("#s2").val() != "" && $("#s3").val() != ""){

        getResult('triangle',{s1:$("#s1").val(),s2:$("#s2").val(),s3:$("#s3").val()})
    }    
}
// getResult('triangle',{s1 : 3,s2:3,s3:3})
function getResult(figure,mData){

    $('#info').removeClass("invisible")
    $.ajax({url:'/'+figure,
        type:'POST',
        data:mData,
        success:function(result){
            $("#info").html(result)
        }});
    }