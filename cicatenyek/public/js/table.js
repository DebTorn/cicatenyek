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
                            "<td>"+api.text+"</td>"
                        +"</tr>").appendTo("#saves_table");
                    },
                    error: function(){
                        $("#main_alert").addClass("alert-danger");
                        $("#main_alert").text("Jelenleg nem megjeleníthető az adott tény!");
                        $("#main_alert").show();
                    }
                });
            });
            $(".fact_loader").hide();
        },
        error: function(){
            $("#main_alert").addClass("alert-danger");
            $("#main_alert").text("Jelenleg nem megjeleníthető egy tény sem!");
            $("#main_alert").show();
        }
    });
});