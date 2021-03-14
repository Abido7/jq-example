$(document).ready(function () {
  // loading page
  $(".loading").fadeOut(500);
  $('body').css("overflow","auto")
/////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
  let slidListWidth = $("#slidList").innerWidth();
  $("#open").click(function () {
    $("#leftBar").animate({ left: "0px" }, 500);
  });
/////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
  $("#close").click(function () {
    $("#leftBar").animate({ left: `-${slidListWidth}` }, 500);
  });
/////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
  $(".singer:first p").css("display", "block"); // to start first p active onload by default
  $(".singer h2").click(function () {
    $(".singer p").not($(this).siblings()).slideUp(500); // hatly kol el p w a3mlohm close except current h2 sibilings (p)
    $(this).next().slideToggle(500);
  });
/////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
  function counteDown() {
    let eventDate = new Date(2022, 0, 7).getTime();
    // get time calc time from 1 January 1970 till parametar date
    // the month of 0 mean January ex(2022 , 1 , 4)
    let currentDate = new Date().getTime();
    // get time calc time from 1 January 1970 till now
    let reminderDuration = eventDate - currentDate;
    // all reminder Duration duration by miliseconds
    let sec = Math.floor(reminderDuration / 1000);
    // 3mlt math.floor 34an ex(60.511) trg3 60 w lo 3mlt el round he7sl conflect fe elcounter
    // all duration by seconds
    let min = Math.floor(sec / 60);
    // all duration by minutes
    let hour = Math.floor(min / 60);
    // all duration by hours
    let days = Math.floor(hour / 24);
    // all duration by days
    sec %= 60;
    min %= 60; // to get remender minutes per hour
    hour %= 24; // to get remender hours per day
    //   console.log(day, hour, min, sec);
    if(days <= 0 && hour <= 0 && min <= 0 && sec <= 0){
      $('#event').html("<h3 class='text-light fs-1'>Event Ended</h3>")
      console.log('event ended');
    }else{
      $("#days").text(days < 10 ? "0" + days + "-D" : days + "-D");
      $("#hours").text(hour < 10 ? "0" + hour + "-H" : hour + "-H");
      $("#minutes").text(min < 10 ? `0${min}-M` : `${min}-M`);
      $("#seconds").text(sec < 10 ? `0${sec}-S` : `${sec}-S`);
      // ternary operator to write 0 before single num
      setInterval(counteDown, 1000);
    }

  }
  counteDown();
/////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
  $(".list a").click(function () {
    let sectionHref = $(this).attr("href");
    let secTopSpace = $(sectionHref).offset().top;
    $("html , body").stop().animate({scrollTop : secTopSpace},2000); //////////// stop() 34an lo 3mlt click tany maystna4 el 1 lma y5ls 
  });
/////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
$(window).scroll(function(){
  if($(window).scrollTop() > $("#details").offset().top+150)
  {
    $("#up").css("display", "block")  
  }else{$("#up").css("display","none")}
})
/////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
$("#up").click(function () {
  $("html , body").animate({ scrollTop: 0 }, 2000);
});
/////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
$('#textArea').keydown(function () { 
  targetlength = 100;
  currentLength = $(this).val().length;
  console.log(currentLength);
  if(currentLength <= targetlength){
    $("#messageAlert").text(`${targetlength-currentLength} char remain`)
    $('form').submit(function(){
      return true;
  });
    // console.log("continue");
  }else{
    $("#messageAlert").text("warnning you used all")
    // console.log("stop");
      $("form").submit(function(e){
        e.preventDefault();
      })
  }
});
});
