<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Static Template</title>
  </head>
  <body>
    <button class="parentDiv" id="parentId">Parent Div</button>
    <button class="childDiv" id="childId">Child Div</button>
  </body>
  <script>
    const parentId = document.getElementById("parentId");
    const childId = document.getElementById("childId");

    const parentCall = () => {
      alert("Parent Div Call");
      console.log("Parent Div Call");
    };

    const childCall = () => {
      alert("Child Div Call");
      console.log("Child Div Call");
      event.stopPropagation();
      // Stop the outermost propogate.
    };
    //  Third Argument.
    // False :: default bubbling phase. Child => Parent
    // True :: Capturing phase. Parentt => Child
    parentId.addEventListener("click", parentCall);
    childId.addEventListener("click", childCall);
  </script>
</html>
