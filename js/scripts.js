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

        else if (design === 'no') {
          alert ('no');
            if (frontBack != 'frontend') {
              if (mobile === 'yes' || mobile === 'either') {
                 if (webapp ==='yes' || webapp ==='no') {
                   if (governmentStartup === "government" || governmentStartup === 'either') {
           $("#survey").hide();
            $("#java").fadeToggle();
            $("#result").text(name + " " + "you should consider learning Java.")
                    }
                  }
                }
              }
            }
//This does not work
      else {
          alert ('somewhat');
          if (frontBack === 'frontend' || frontBack === 'backend' || frontBack === 'either') {
            if (mobile==='yes' || mobile === 'no'){
              if (webapp === 'yes' || webapp === 'no') {
                if (governmentStartup === 'startup' || governmentStartup === 'either')
                  $("#survey").hide();
                  $("#ruby").fadeToggle();
                  $("#result").text(name + " " + "you should consider learning Ruby.")
                  }
                }
              }
            }

//This doesn't seem to work
//           if (frontBack === 'frontend') {
//             if (mobile === 'yes' || mobile === 'either'){
//               if (webapp === 'yes' || webapp === 'either'){
//                 if (governmentStartup === 'government' || governmentStartup === 'startup' || governmentStartup === 'either'){
//                   $("#survey").hide();
//                   $("#css").slideToggle();
//                   $("#result").text(name + " " + "you should consider taking the CSS track")
//                 }
//               }
//             }
//           }
// //This seems to work:
//           else if (frontBack === 'backend') {
//             if (mobile ==='yes' || mobile === 'either'){
//               if (webapp === 'yes' || webapp === 'no' || webapp === 'either'){
//                 if (governmentStartup === 'startup' || governmentStartup === 'either'){
//                    $("#survey").hide();
//                    $("#ruby").fadeToggle();
//                    $("#result").text(name + " " + "you should consider learning Ruby.")
//                  }
//                }
//              }
//            }
//
//
//           else {
//             if (frontBack==='backend' || frontBack==='either') {
//               if (mobile==='yes' || mobile==='no' || mobile === 'either') {
//                 if (webapp==='either' || webapp==='no') {
//                   if (governmentStartup === 'government' || governmentStartup === 'either') {
//                     $("#result").text(name + " " + "you should consider learning Java")
//                     $("#survey").hide();
//                     $("#java").show();
//
//                    }
//                  }
//                }
//              }
//            }
       })
    });
