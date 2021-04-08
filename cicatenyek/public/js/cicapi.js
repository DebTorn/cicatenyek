$(document).ready(function(){
    $("#main_alert").hide();
    $(".fact_loader").hide();

    //Page refresh ajax
    $.ajax({
        url:"https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=3",
        type:"GET",
        dataType:"json",
        beforeSend: function(){
            $(".fact_loader").show();
        },
        success: function(api){
            $(api).each(function(i){
                $("#cat_fact_"+i).text(api[i].text);

                //Fact id fill
                $("#fact_yes_"+i).click(function(){
                    $("#fact_id").attr("value",api[i]._id);
                });

                //Nope fact box refresh
                $("#fact_nope_"+i).click(function(){
                    $("#cat_fact_"+i).fadeOut();
                    $.ajax({
                        url:"https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1",
                        type:"GET",
                        dataType:"json",
                        success: function(apiSec){

                            $("#cat_fact_"+i).text(apiSec.text);
                            $("#cat_fact_"+i).fadeIn();

                            //Fact id fill
                            $("#fact_yes_"+i).click(function(){
                                $("#fact_id").attr("value",apiSec._id);
                            });

                        },
                        error: function(){
                            $("#cat_fact_"+i).text("Nem megjelenthető ez a tény! Próbálja újra!");
                            $("#cat_fact_"+i).fadeIn();
                        }
                    });
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

    //Fact form submit
    $("#fact_save_form").submit(function(e){

        e.preventDefault();

        $.ajax({
            url:"/save",
            type:"POST",
            dataType:"json",
            data:{fact_id:$("#fact_id").attr("value")},
            beforeSend: function(){
                $("#sub_btn").prop("disabled",true);
            },
            success: function(succ){
                $("#save_alert").addClass("alert-success");
                $("#save_alert").text("Sikeres feltöltés!");
                $("#save_alert").show();
                $("#save_alert").delay(800);
                $("#save_alert").hide("slow", function(){
                    $("#save_alert").removeClass("alert-success");
                    location.reload();
                });
            },
            error: function(err){
                $("#save_alert").addClass("alert-danger");
                $("#save_alert").text("A feltöltés sikertelen! Próbálja újra!");
                $("#save_alert").show();
                $("#save_alert").hide("slow", function(){
                    $("#save_alert").removeClass("alert-danger");
                });
            }
        });

    });

});