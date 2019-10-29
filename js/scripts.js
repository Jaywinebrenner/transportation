
$(document).ready(function(){
  $("#transportation-survey").submit(function(event){
    event.preventDefault();
    $("#intial-response").show();
    $("#hidden-survey").show();
    $("#hidden-form").show();
    $("#initial-response").show();

    $("input:checkbox[name=work-transportation]:checked").each(function(){
        var workTransportationMode = $(this).val();
        $('#initial-response').append(workTransportationMode + "<br>");
    });
        $('#transportation-survey').hide();


      });

      $("#hidden-form").submit(function(event){
          event.preventDefault();

          $('#hidden-survey').show();
          $("#hidden-response").show();
          $("#hidden-form").show();
          
      $("input:checkbox[name=work-transportation1]:checked").each(function(){
          var workTransportationMode1 = $(this).val();
          $('#hidden-response').append(workTransportationMode1 + "<br>");
          console.log(workTransportationMode1);
      });

          $('#hidden-form').hide();





  });
});






// $(document).ready(function(){
  //   $("form#transportation_survey").submit(function(event){
    //     event.preventDefault();
    //     $("#work-responses").show();
    //     $("input:checkbox[name=work-transportation]:checked").each(function(){
      //       var workTransportationMode = $(this).val();
      //       $('#work-responses').append(workTransportationMode + "<br>");
      //     });
      //     $('#transportation_survey').hide();
      //   });
      // });
