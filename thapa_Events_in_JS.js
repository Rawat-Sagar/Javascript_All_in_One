<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Static Template</title>
  </head>
  <body>
    <!-- Events in JS -->
    <button onclick="alert('I am awesome , no one use me')">First</button
    ><br /><br />
    <button onclick="callingfunc()">Second</button><br /><br />
    <button id="thirdway">Third</button><br /><br />
    <button id="fway">Fourth</button><br />

    <hr />
    <button id="evtobj">Event Object</button>
    <!-- Mouse Event -->
    <hr />
    <p id="myp" onmousedown="mdown()" onmouseup="mup()">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate culpa
      eum cum repellendus voluptatibus, dignissimos mollitia distinctio minus
      iste illo totam. Debitis velit inventore quo quas magnam distinctio dolore
      eius?
    </p>
    <div id="box">Mouse Enter and Mouse Leave</div>

    <!--Keyboard Event -->
    <hr />
    <input
      type="text"
      onkeypress="kypress()"
      onkeydown="kydown()"
      onkeyup="kyup()"
    />
    <br />
    <p id="keys">Inner Html</p>

    <hr />
    <!-- Input Events -->
    <label for="">Your Name :</label>
    <input type="text" id="ice" />
    <br />
    <br />
    <label for=""
      >Choose an ice cream flavour
      <select name="icecreams" id="icecreams" onchange="selectElement()">
        <option value="">Select One</option>
        <option value="chocolate">Chocolate</option>
        <option value="sardine">Sardine</option>
        <option value="vanilla">Vanilla</option>
      </select>
    </label>
    <br />
    <div id="result"></div>
  </body>

  <script>
    const callingfunc = () => {
      alert("I am awesome , u see me");
    };

    const thirdway = document.getElementById("thirdway");
    thirdway.onclick = function () {
      alert("I am a third function");
    };
    // override the same onclick  ::use inspect:: use anon function
    thirdway.onclick = function () {
      console.log("I am a third function");
    };

    const fway = document.querySelector("#fway");

    fway.addEventListener("click", () => {
      alert("I am in love with JS");
    });
    // does not override ::use inspect:: use callback
    fway.addEventListener("click", () => {
      console.log("I am in love with JS");
    });

    const evtobj = document.getElementById("evtobj");
    const checkEvent = () => {
      alert("Event Object");
      console.log(event);
      console.log(event.target);
      console.log(event.type);
    };
    // use callback :: checkEvent
    evtobj.addEventListener("click", checkEvent);

    // Mouse Event
    function mdown() {
      document.getElementById("myp").style.color = "yellow";
    }

    function mup() {
      document.getElementById("myp").style.color = "blue";
    }

    const menter = document.getElementById("box");

    menter.addEventListener("mouseenter", () => {
      console.log("Mouse Enter");
      menter.style.backgroundColor = "red";
    });

    menter.addEventListener("mouseleave", () => {
      console.log("Mouse leave");
      menter.style.backgroundColor = "pink";
    });

    // Keyboard Events
    const kypress = () => {
      document.getElementById(
        "keys"
      ).innerHTML = `you press ${event.key} and its code is ${event.code}`;
    };

    const kydown = () => {
      document.getElementById("keys").innerHTML = "key is Down";
    };

    const kyup = () => {
      document.getElementById("keys").innerHTML = "key is Up";
    };

    // Input Events

    const selectElement = () => {
      const inputChange = document.getElementById("ice").value;
      const icecreams = document.getElementById("icecreams").value;
      const result = document.getElementById("result");

      result.innerHTML = `Mr ${inputChange} select ${icecreams} ice cream flavour`;
    };

    // OR this is same but in addEventListener way

    // const icecreams = document.getElementById("icecreams");
    // icecreams.addEventListener("change", () => {
    //   const inputChange = document.getElementById("ice").value;
    //   const icecreams = document.getElementById("icecreams").value;
    //   const result = document.getElementById("result");

    //   result.innerHTML = `Mr ${inputChange} select ${icecreams} ice cream flavour`;
    // });
  </script>
</html>
// Interview Questions onClick vs addEventListener. ;)
