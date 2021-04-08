/*const xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
   let tomb = JSON.parse(this.response); 
   //console.log(tomb);
   for(let i = 0; i < tomb.length; i++){
        console.log("id: "+tomb[i]._id);
        console.log("text: "+tomb[i].text);
        console.log('cat_fact_'+i);
        document.getElementById('cat_fact_'+i).innerHTML = tomb[i].text;
        document.getElementById("fact_yes_"+i).addEventListener("click", function() {
            document.getElementById("fact_id").value = tomb[i]._id;
        });
    }
  }
};
xhttp.open("GET", "https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=3", true);
xhttp.send();*/

//Page refresh ajax
$.ajax({
    url:"https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=3",
    type:"GET",
    dataType:"json",
    success: function(succMain){
        $(succMain).each(function(i){
            $("#cat_fact_"+i).text(succMain[i].text);

            //Fact id fill
            $("#fact_yes_"+i).click(function(){
                $("#fact_id").attr("value",succMain[i]._id);
            });

            //Nope fact box refresh
            $("#fact_nope_"+i).click(function(){
                $("#cat_fact_"+i).fadeOut();
                $.ajax({
                    url:"https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1",
                    type:"GET",
                    dataType:"json",
                    success: function(succSec){

                        $("#cat_fact_"+i).text(succSec.text);
                        $("#cat_fact_"+i).fadeIn();

                        //Fact id fill
                        $("#fact_yes_"+i).click(function(){
                            $("#fact_id").attr("value",succSec._id);
                        });

                    }
                });
            });

        });
    },
    error: function(err){
        console.log(err);
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
        success: function(succ){
            console.log(succ);
        },
        error: function(err){
            console.log(JSON.stringify(err));
        }
    });

});