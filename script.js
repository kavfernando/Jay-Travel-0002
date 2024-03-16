
    //counterUp
    let counter = document.querySelectorAll(".card-num");
    let arr = Array.from(counter);
  
    arr.map((item)=>{
      let count = item.innerHTML;
      let numberPattern = /\d+/;

    // Extracting the number from the line
      let extractedNumber = count.match(numberPattern);
      count = extractedNumber[0];
      console.log(extractedNumber[1]);
      item.innerHTML = "";
      let countNumber = 0;
      function counterUp(){
        item.innerHTML = countNumber++;
        if (count == 250) {
          item.innerHTML = item.innerHTML+'<span style="font-style: italic; font-weight: 100;">k +</span>';
        }
        if(countNumber > count){
          clearInterval(stop);
        }
      }
      let stop = setInterval(()=>{
        counterUp();
      }, item.dataset.speed/count);     
    })
  
   
        function msgsent() {
          // Submit the form
          document.forms["form1"].submit();
          // Display success alert
          alert("Success!!");
          // Prevent default form submission
          return false;
        }
