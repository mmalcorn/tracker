 $(document).ready(function(){
    $("#survey").submit(function()  {
      event.preventDefault()
      var name = $("input#userName").val();
      var design = $("input:radio[name=design]:checked").val();
      var frontBack = $("input:radio[name=frontBack]:checked").val();
      var mobile = $("input:radio[name=mobile]:checked").val();
      var webapp = $("input:radio[name=webapp]:checked").val();
      var governmentStartup = $("input:radio[name=governmentStartup]:checked").val();

      if (design === 'yes') {
        alert ('yes');
        if (frontBack === 'frontend' || frontBack === 'either'){
          alert ('frontend or either');
          if (mobile === 'yes' || mobile === 'no' || mobile ==='either') {
            if (webapp ==='yes' || webapp==='no'|| webapp ==='either') {
              if (governmentStartup === 'government' || governmentStartup==='startup' || governmentStartup=== 'either') {
                $("#survey").hide();
                $("#css").slideToggle();
                $("#result").text(name + " " + "you should consider taking the CSS track")
              }
            }
          }
        }
      }
      else if (frontBack === 'backend'){
          alert ('backend');
          $("#survey").hide();
          $("#java").fadeToggle();
          $("#result").text(name + " " + "you should consider learning java.")
          if (mobile ==='yes' || mobile === 'either'){
            alert ('mobile yes or either');
          if (webapp === 'no' || webapp === 'either'){
            alert('webapp is no or either')
          if (governmentStartup ==='government' || governmentStartup === 'startup' || governmentStartup ==='either'){
            alert('any agency to work for')
            $("#survey").hide();
            $("#java").fadeToggle();
            $("#result").text(name + " " + "you should consider learning Java.")
          }
        }
      }
    }
          else {
            $("#survey").hide();
             $("#ruby").fadeToggle();
             $("#result").text(name + " " + "you should consider learning Ruby.");
          }
      })
  });
