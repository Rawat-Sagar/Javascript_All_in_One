<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Static Template</title>
  </head>
  <body>
    <!-- SetTimeOut -->
    <!-- <div class="main-div">
      <div>
        <p>Want to know my name ?</p>
        <p id="showmyName"></p>
          <br />
        <button id="btn">Click here</button>
      </div>
    </div> -->
    <hr />
    <!-- ClearTimeOut  -->
    <!-- <div class="main-div">
      <div>
        <p>Click "Try it". Wait for 3 seconds. The page will alert "Hello"</p>
        <p>Click "Stop" to prevent the first function to execute.</p>
        <p>(You must click "Stop" before the 2 seconds are up.)</p>

        <button onclick="myVar = setTimeout(myFunc,3000)">Try it</button>&nbsp;
        <button onclick="clearTimeout(myVar)">Stop it</button>
      </div>
    </div> -->
    <hr />
    <!-- SetInterval -->
    <div class="main-div">
      <div>
        <p>Can You Stop me when I reached at 5 ?</p>
        <br />
        <button id="btn">Click Here</button>
        <button id="btn1">Stop</button>
      </div>
    </div>
  </body>
  <script>
    // setTimeout :: fat arrow

    // const myName = document.querySelector("#showmyName");
    // const btn = document.querySelector("#btn");

    // const showmyName = () => {
    //   myName.innerHTML = "Loading ....";
    //   setTimeout(() => {
    //     myName.innerHTML = "Sagar Rawat";
    //   }, 1000);
    // };
    // btn.addEventListener("click", showmyName);

    // ClearTimeOut :: function

    // function myFunc() {
    //   alert("Hello");
    // }

    // SetInetrval
    const stpNum = document.querySelector("p");
    const btn = document.querySelector("#btn");
    const stopInterval = document.querySelector("#btn1");
    let timeref;
    let num = 0;
    // setInterval :: fat arrow
    const showNum = () => {
      stpNum.innerHTML = "Loading ....";
      console.log("live");

      timeref = setInterval(() => {
        stpNum.innerHTML = `${num}`;
        num++;
      }, 1000);
    };

    btn.addEventListener("click", showNum);

    stopInterval.addEventListener("click", () => {
      clearInterval(timeref);
    });
  </script>
</html>
