 // Wrap all code that interacts with the DOM in a call to jQuery to ensure that
  // the code isn't run until the browser has finished rendering all the elements
  // in the html.
$(function () {
  
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  $(".time-block").each(function (){
    //$(this).hour
    //localStorage.setItem('$this.hour')
    //console.log('$this.hour')
    console.log(this);
    var elementTimeBlock = $(this).attr("id").split("-")[1];
    console.log(elementTimeBlock);


    var todaysTime = dayjs().format('h');
    //compare current timeblock to todays time 
      //and if it is less than thhe current time 
        //and assign a class of past
        //if it is equal to the current time
        //add class of present

      //if greater than the current time
          //add class of future

      if (elementTimeBlock < todaysTime) {
        $(this).addClass("past");
      } else if (elementTimeBlock === todaysTime) {
        $(this).addClass("present");
      } else {
        $(this).addClass("future");
      };
    });

      $(".saveBtnNine").on("click", function(event){
        event.preventDefault();
        var element = $(this);
        var userInput = element.siblings("textarea.nine").val();
        console.log(userInput);
        var hour = element.parent().attr("id").split("-")[1]; // hour-#
        console.log(hour);
        var savedInfoNine = [hour, userInput];
        localStorage.setItem("savedInfoNineStringify", JSON.stringify(savedInfoNine));
        //localStorage.setItem("savedInfoNine", savedInfoNine);
        //return JSON.parse(localStorage.getItem("savedInfoNineStringify"));
        //var itemStr = localStorage.getItem("savedInfoNine");
        //return itemArr;
        //return itemStr;
        //savePleaseNine();
      });
      $(function savePleaseNine() {
      var itemArr = JSON.parse(localStorage.getItem("savedInfoNineStringify"));
      $("textarea.nine").append(itemArr[1]);
      });

      $(".saveBtnTen").on("click", function(event){
        event.preventDefault();
        var element = $(this); 
        var userInput = element.siblings("textarea.ten").val();
        console.log(userInput);
        var hour = element.parent().attr("id").split("-")[1];
        console.log(hour);
        var savedInfoTen = [hour, userInput];
        localStorage.setItem("savedInfoTenStringify", JSON.stringify(savedInfoTen));
        //savePleaseTen();
      });
      $(function savePleaseTen() {
        var itemArr = JSON.parse(localStorage.getItem("savedInfoTenStringify"));
        $("textarea.ten").append(itemArr[1]);
        });

      
      $(".saveBtnEle").on("click", function(){
        var element = $(this); 
        var userInput = element.siblings("textarea.ele").val();
        console.log(userInput);
        var hour = element.parent().attr("id").split("-")[1];
        console.log(hour);
        var savedInfoEle = [hour, userInput];
        localStorage.setItem("savedInfoEleStringify", JSON.stringify(savedInfoEle));
        //savePleaseEle();
      });
      $(function savePleaseEle() {
        var itemArr = JSON.parse(localStorage.getItem("savedInfoEleStringify"));
        $("textarea.ele").append(itemArr[1]);
        });

      
      $(".saveBtnTwlv").on("click", function(){
        var element = $(this);
        var userInput = element.siblings("textarea.twlv").val();
        console.log(userInput);
        var hour = element.parent().attr("id").split("-")[1];
        console.log(hour);
        var savedInfoTwlv = [hour, userInput];
        localStorage.setItem("savedInfoTwlvStringify", JSON.stringify(savedInfoTwlv));
        //savePleaseTwlv();
      });
      $(function savePleaseTwlv() {
        var itemArr = JSON.parse(localStorage.getItem("savedInfoTwlvStringify"));
        $("textarea.twlv").append(itemArr[1]);
        });
      
      $(".saveBtnOne").on("click", function(){
        var element = $(this);
        var userInput = element.siblings("textarea.one").val();
        console.log(userInput);
        var hour = element.parent().attr("id").split("-")[1];
        console.log(hour);
        var savedInfoOne = [hour, userInput];
        localStorage.setItem("savedInfoOneStringify", JSON.stringify(savedInfoOne));
        //savePleaseOne();
      });
      $(function savePleaseOne() {
        var itemArr = JSON.parse(localStorage.getItem("savedInfoOneStringify"));
        $("textarea.one").append(itemArr[1]);
        });

      
      $(".saveBtnTwo").on("click", function(){
        var element = $(this); 
        var userInput = element.siblings("textarea.two").val();
        console.log(userInput);
        var hour = element.parent().attr("id").split("-")[1];
        console.log(hour);
        var savedInfoTwo = [hour, userInput];
        localStorage.setItem("savedInfoTwoStringify", JSON.stringify(savedInfoTwo));
        //savePleaseTwo();
      });
      $(function savePleaseTwo() {
        var itemArr = JSON.parse(localStorage.getItem("savedInfoTwoStringify"));
        $("textarea.two").append(itemArr[1]);
        });

      
      $(".saveBtnThr").on("click", function(){
        var element = $(this); 
        var userInput = element.siblings("textarea.thr").val();
        console.log(userInput);
        var hour = element.parent().attr("id").split("-")[1];
        console.log(hour);
        var savedInfoThr = [hour, userInput];
        localStorage.setItem("savedInfoThrStringify", JSON.stringify(savedInfoThr));
        //savePleaseThr();
      });
      $(function savePleaseThr() {
        var itemArr = JSON.parse(localStorage.getItem("savedInfoThrStringify"));
        $("textarea.thr").append(itemArr[1]);
        });

      
      $(".saveBtnFour").on("click", function(){
        var element = $(this);
        var userInput = element.siblings("textarea.four").val();
        console.log(userInput);
        var hour = element.parent().attr("id").split("-")[1];
        console.log(hour);
        var savedInfoFour = [hour, userInput];
        localStorage.setItem("savedInfoFourStringify", JSON.stringify(savedInfoFour));
        //savePleaseFour();
      });
      $(function savePleaseFour() {
        var itemArr = JSON.parse(localStorage.getItem("savedInfoFourStringify"));
        $("textarea.four").append(itemArr[1]);
        });

      
      $(".saveBtnFive").on("click", function(){
        var element = $(this);
        var userInput = element.siblings("textarea.five").val();
        console.log(userInput);
        var hour = element.parent().attr("id").split("-")[1];
        console.log(hour);
        var savedInfoFive = [hour, userInput];
        localStorage.setItem("savedInfoFiveStringify", JSON.stringify(savedInfoFive));
        //savePleaseFive();
      });
      $(function savePleaseFive() {
        var itemArr = JSON.parse(localStorage.getItem("savedInfoFiveStringify"));
        $("textarea.five").append(itemArr[1]);
       });
  
  //});
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  var todaysTime = dayjs().format('h');
  console.log(todaysTime);
  $("#hour")


  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  var today = dayjs().format('MMM DD, YYYY')
  $('#currentDay').text(today)
})
