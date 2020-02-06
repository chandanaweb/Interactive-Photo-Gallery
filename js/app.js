
$('#search-box').keyup(function( event ) {
    var str = (this.value).toLowerCase();
    $("#container").filter()
    var result = [];
    for(var i=0;i<list.length;i++){
    if(list[i]["img_cap"].includes(str)){
      result.push(list[i]);
    } 

    }
    if(result.length > 0){
        $("#container").empty();
        for(var j=0; j<result.length; j++){
            var img_link = './photos/thumbnails/' +result[j]['img_name']; 
            var a = "<img id='theImg' src='" + img_link + "'/>";
            $("#container").append(a);
        }
    }

});

