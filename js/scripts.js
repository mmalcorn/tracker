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
        if (frontBack === 'frontend' || frontBack === 'either'){
          if (mobile === 'yes' || mobile === 'no' || mobile ==='either') {
            if (webapp ==='yes' || webapp==='no'|| webapp ==='either') {
              if (governmentStartup === 'government' || governmentStartup==='startup' || governmentStartup=== 'either') {
                $("#survey").hide();
                $("#css").slideToggle();
                $("#result").text(name + " ," + "you should consider taking the CSS track")
              }
            }
          }
        }
      }
      else if (frontBack === 'backend'){
          $("#survey").hide();
          $("#java").fadeToggle();
          $("#result").text(name + " ," + "you should consider learning java.")
          if (mobile ==='yes' || mobile === 'either'){
          if (webapp === 'no' || webapp === 'either'){
          if (governmentStartup ==='government' || governmentStartup === 'startup' || governmentStartup ==='either'){
            $("#survey").hide();
            $("#java").fadeToggle();
            $("#result").text(name + " ," + "you should consider learning Java.")
          }
        }
      }
    }
          else {
            $("#survey").hide();
             $("#ruby").fadeToggle();
             $("#result").text(name + " ," + "you should consider learning Ruby.");
          }
      })
  });
