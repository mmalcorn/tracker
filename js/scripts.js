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
              if (webapp ==='yes' || webapp ==='either') {
                  if (governmentStartup === 'government' || governmentStartup==='startup' || governmentStartup=== 'either') {
                    $("#survey").hide();
                    $("#css").slideToggle();
                    $("#result").text(name + " " + "you should consider taking the CSS track")
                }
              }
            }
          }
        }

        if (design === 'yes' || design === 'no' || design === 'either') {
            if (frontBack === 'frontend' || frontBack === 'backend' || frontBack === 'either') {
              if (mobile==='yes' || mobile === 'no' || mobile === 'either'){
              if (webapp === 'yes' || webapp === 'no' || webapp === 'either') {
                if (governmentStartup === 'startup' || governmentStartup === 'either')
           $("#survey").hide();
            $("#ruby").fadeToggle();
            $("#result").text(name + " " + "you should consider learning Ruby.")
                    }
                  }
                }
              }


       else if (design === 'no') {
           if (frontBack != 'frontend' || mobile === 'yes' || governmentStartup === 'government' && webapp==='yes' || webapp==='no') {
          $("#survey").hide();
           $("#java").fadeToggle();
           $("#result").text(name + " " + "you should consider learning Java.")
                   }
                 }

        // if (design === 'no') {
        //   if (frontBack ==='frontend' || mobile === 'no' || mobile === 'either') {
        //          if (webapp === 'yes' || webapp === 'no') {
        //            if (governmentStartup === 'startup' || governmentStartup === 'either') {
        //           $("#survey").hide();
        //            $("#ruby").fadeToggle();
        //          }
        //        }
        //      }
        //    }
           //
          //   if (design === "either"){
          //     if (frontBack === 'either'){
          //      if (mobile === 'no' || mobile ==='either'){
          //        if (webapp === 'yes'){
          //          if (governmentStartup === 'startup'){
          //            $("#ruby").show();
          //          }
          //        }
          //      }
          //    }
          //  }

           else {
              if (frontBack==='backend' || frontBack==='either') {
                if (mobile==='yes' || mobile==='no' || mobile === 'either') {
                  if (webapp==='either' || webapp==='no') {
                    if (governmentStartup === 'government' || governmentStartup === 'either') {
                      $("#result").text(name + " " + "you should consider learning Java")
                      $("#survey").hide();
                      $("#java").show();

                   }
                 }
               }
             }
           }
      })
    });
