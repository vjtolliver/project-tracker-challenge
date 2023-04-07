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
      }
      $(".saveBtnNin").on("click", function(){
        var element = $(this); // this is going to be the button clicked
        var userInput = element.siblings("textarea").val(); // value typed in by user
        console.log(userInput);
        var hour = element.parent().attr("id").split("-")[1]; // hour-#
        console.log(hour);
        var savedInfoNine = [hour, userInput];
        localStorage.setItem("savedInfoNineStringify", JSON.stringify(savedInfoNine));
        localStorage.setItem("savedInfoNine", savedInfoNine);
      });

      $(".saveBtnTen").on("click", function(){
        var element = $(this); // this is going to be the button clicked
        var userInput = element.siblings("textarea").val(); // value typed in by user
        console.log(userInput);
        var hour = element.parent().attr("id").split("-")[1]; // hour-#
        console.log(hour);
        var savedInfoTen = [hour, userInput];
        localStorage.setItem("savedInfoTenStringify", JSON.stringify(savedInfoTen));
        localStorage.setItem("savedInfoTen", savedInfoTen);
      });

      
      $(".saveBtnEle").on("click", function(){
        var element = $(this); // this is going to be the button clicked
        var userInput = element.siblings("textarea").val(); // value typed in by user
        console.log(userInput);
        var hour = element.parent().attr("id").split("-")[1]; // hour-#
        console.log(hour);
        var savedInfoTen = [hour, userInput];
        localStorage.setItem("savedInfoTenStringify", JSON.stringify(savedInfoTen));
        localStorage.setItem("savedInfoTen", savedInfoTen);
      });
      

    
          //var savedInfoEle = [hour, userInput];
          //localStorage.setItem("savedInfoEleStringify", JSON.stringify(savedInfoEle));
          //localStorage.setItem("savedInfoEle", savedInfoEle);
           //else if (hour === 10) {
        //}

 //$(".saveBtn").on("click", function () {
  //var saveBtn = $(this);
  //var userInput = saveBtn.siblings("textarea").val();
  //var hour = textarea.parent().attr("id");
  //localStorage.setItem(...);
  
  
    //console.log(this);

  //var userInput = $(".description").value;

  //var userTimeInput = elementTimeBlock.value
  //var savedInfo = {elementTimeBlock: $this}

  //localStorage.setItem("savedInfo", JSON.stringify(savedInfo));
  //console.log(savedInfo);
  //});
  
  });

  //$(".saveBtn").click(function () {
  //var userInput = $(".description").each()//.val();
  //var elementTimeBlock = $(this).attr("id")
  //var savedInfo = $(elementTimeBlock + userInput);
  //var savedInfo = $(".description").val();
  //localStorage.setItem("savedInfoStringify", JSON.stringify(savedInfo)); //.val());
  //localStorage.setItem("savedInfo", savedInfo);
  //console.log(savedInfo);
  //JSON.stringify
  //$(render)
 // var save {
    //elementTi
 // }
  //})
  //var timeNotes = localStorage.getItem()
  //$(".btn").on("click", function () {
    //localStorage.getItem()
  //};

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
