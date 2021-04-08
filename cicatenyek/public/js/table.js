$(document).ready(function(){
    $(".fact_loader").hide();
    $.ajax({
        url:"/table",
        type:"GET",
        dataType:"json",
        beforeSend: function(){
            $(".fact_loader").show();
        },
        success: function(db){
            $(db).each(function(i){
                $.ajax({
                    url:"https://cat-fact.herokuapp.com/facts/"+db[i].fact_id,
                    type:"GET",
                    dataType:"json",
                    success: function(api){
                        $("<tr>"+
                            "<td>"+api.text+"</td>"+
                            "<td>"+db[i].created_at+"</td>"
                        +"</tr>").appendTo("#saves_table");
                    },
                    error: function(apiErr){
                        console.log(JSON.stringify(apiErr));
                    }
                });
            });
            $(".fact_loader").hide();
        },
        error: function(dbErr){
            console.log(JSON.stringify(dbErr));
        }
    });
});