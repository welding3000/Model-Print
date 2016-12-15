!!!
/ -::::::::::::::::::::::::::::::::::::::::::::::-------
/ -#hide_show_output_iframe
%html
  %body
    %h1 The /= Operator
    %p#demo
    :javascript
      var x = 10;
      x /= 5;
      document.getElementById("demo").innerHTML = x;
/ -::::::::::::::::::::::::::::::::::::::::::::::-------
/ -#hide_show_output_iframe1
%html
  %body
    %h1 The = Operator
    %p#demo
    :javascript
      var x = 10;
      document.getElementById("demo").innerHTML = x;
/ -::::::::::::::::::::::::::::::::::::::::::::::-------
/ -#hide_show_output_iframe2
%html
  %body
    %h1 The -= Operator
    %p#demo
    :javascript
      var x = 10;
      x -= 5;
      document.getElementById("demo").innerHTML = x;
/ -::::::::::::::::::::::::::::::::::::::::::::::-------
/ -#hide_show_output_iframe3
%html
  %body
    %h1 The %= Operator
    %p#demo
    :javascript
      var x = 10;
      x %= 5;
      document.getElementById("demo").innerHTML = x;
/ -::::::::::::::::::::::::::::::::::::::::::::::-------
/ -#hide_show_output_iframe4
%html
  %body
    %h1 The *= Operator
    %p#demo
    :javascript
      var x = 10;
      x *= 5;
      document.getElementById("demo").innerHTML = x;
/ -::::::::::::::::::::::::::::::::::::::::::::::-------
/ -#hide_show_output_iframe5
%html
  %body
    %h1 The += Operator
    %p#demo
    :javascript
      var x = 10;
      x += 5;
      document.getElementById("demo").innerHTML = x;
/ -::::::::::::::::::::::::::::::::::::::::::::::-------
/ -::::::::::::::::::::::::::::::::::::::::::::::-------
/ -::::::::::::::::::::::::::::::::::::::::::::::-------
%html
  %p
    Comments
    / -::::::::::::::::::::::::::::::::::::::::::::::-------
    / -#hide_show_output_iframe6
  %body
    %h1#myH
    %p#myP
    :javascript
      // Change heading:
      document.getElementById("myH").innerHTML = "My First Page";
      // Change paragraph:
      document.getElementById("myP").innerHTML = "My first paragraph.";
    %p
      %strong Note:
      The comments are not executed.
/ -::::::::::::::::::::::::::::::::::::::::::::::-------
/ -#hide_show_output_iframe7
%html
  %body
    %h1#myH
    %p#myP
    :javascript
      /*
      The code below will change
      the heading with id = "myH"
      and the paragraph with id = "myp"
      in my web page:
      */
      document.getElementById("myH").innerHTML = "My First Page";
      document.getElementById("myP").innerHTML = "My first paragraph.";
    %p
      %strong Note:
      The comment block is not executed.
  / -::::::::::::::::::::::::::::::::::::::::::::::-------
  / -#hide_show_output_iframe8
  %body
    %h1#myH
    %p#myP
    :javascript
      //document.getElementById("myH").innerHTML = "My First Page";
      document.getElementById("myP").innerHTML = "My first paragraph.";
    %p
      %strong Note:
      The comment is not executed.
/ -::::::::::::::::::::::::::::::::::::::::::::::-------
/ -#hide_show_output_iframe9
%html
  %body
    %h1#myH
    %p#myP
    :javascript
      /*
      document.getElementById("myH").innerHTML = "Welcome to my Homepage";
      document.getElementById("myP").innerHTML = "This is my first paragraph.";
      */
    %p
      %strong Note:
      The comment-block is not executed.
/ -::::::::::::::::::::::::::::::::::::::::::::::-------
/ -#hide_show_output_iframe10
%html
  %body
    %p#demo
    :javascript
      var x = 5;      // Declare x, give it the value of 5
      var y = x + 2;  // Declare y, give it the value of x + 2 
      
      document.getElementById("demo").innerHTML = y; // Write y to demo
    %p
      %strong Note:
      The comments are not executed.
/ -::::::::::::::::::::::::::::::::::::::::::::::-------







%html
  %h2
    %i Datatypes
  / -::::::::::::::::::::::::::::::::::::::::::::::-------
  / -#hide_show_output_iframe11
  %body
    %p .
    %p#demo
    :javascript
      var x = 16 + "Volvo";
      document.getElementById("demo").innerHTML = x;
/ -::::::::::::::::::::::::::::::::::::::::::::::-------
/ -#hide_show_output_iframe12
%html
  %body
    %p When adding a number and a string, JavaScript will treat the number as a string.
    %p#demo
    :javascript
      var x = "Volvo" + 16;
      document.getElementById("demo").innerHTML = x;
/ -::::::::::::::::::::::::::::::::::::::::::::::-------
/ -#hide_show_output_iframe13
%html
  %body
    %p#demo
    :javascript
      var x = 16 + 4 + "Volvo";
      document.getElementById("demo").innerHTML = x;
/ -::::::::::::::::::::::::::::::::::::::::::::::-------
/ -#hide_show_output_iframe14
%html
  %body
    %p#demo
    :javascript
      var x = "Volvo" + 16 + 4;
      document.getElementById("demo").innerHTML = x;
/ -::::::::::::::::::::::::::::::::::::::::::::::-------
/ -#hide_show_output_iframe15
%html
  %body
    %p#demo
    :javascript
      var cars = ["Saab","Volvo","BMW"];
      
      document.getElementById("demo").innerHTML = cars[0];
/ -::::::::::::::::::::::::::::::::::::::::::::::-------
/ -#hide_show_output_iframe16
%html
  %body
    %p#demo
    :javascript
      var car = "";
      document.getElementById("demo").innerHTML =
      "The value is: " +
      car + "<br>" +
      "The type is: " + typeof car;
/ -::::::::::::::::::::::::::::::::::::::::::::::-------
/ -#hide_show_output_iframe17
%html
  %body
    %p
      Objects can be emptied by setting the value to
      = succeed "." do
        %b null
    %p#demo
    :javascript
      var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
      var person = null;
      document.getElementById("demo").innerHTML = typeof person;
/ -::::::::::::::::::::::::::::::::::::::::::::::-------
/ -#hide_show_output_iframe18
%html
  %body
    %p#demo
    :javascript
      var x1 = 34.00;
      var x2 = 34;
      var y = 123e5;
      var z = 123e-5;
      
      document.getElementById("demo").innerHTML = x1 + "<br>" + x2 + "<br>" + y + "<br>" + z
/ -::::::::::::::::::::::::::::::::::::::::::::::-------
/ -#hide_show_output_iframe19
%html
  %body
    %p#demo
    :javascript
      var person = {
          firstName : "John",
          lastName  : "Doe",
          age       : 50,
          eyeColor  : "blue"
      };
      
      document.getElementById("demo").innerHTML =
      person.firstName + " is " + person.age + " years old.";
/ -::::::::::::::::::::::::::::::::::::::::::::::-------
/ -#hide_show_output_iframe20
%html
  %body
    %p The typeof operator returns the type of a variable or an expression.
    %p#demo
    :javascript
      document.getElementById("demo").innerHTML = 
      typeof "john" + "<br>" + 
      typeof 3.14 + "<br>" +
      typeof false + "<br>" +
      typeof [1,2,3,4] + "<br>" +
      typeof {name:'john', age:34};
/ -::::::::::::::::::::::::::::::::::::::::::::::-------
/ -#hide_show_output_iframe 21
%html
  %body
    %p
      Objects can be emptied by setting the value to
      = succeed "." do
        %b undefined
    %p#demo
    :javascript
      var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
      var person = undefined;
      document.getElementById("demo").innerHTML = typeof person;
/ -::::::::::::::::::::::::::::::::::::::::::::::-------
/ -#hide_show_output_iframe 22
%html
  %body
    %p
      Variables can be emptied by setting the value to
      = succeed "." do
        %b undefined
    %p#demo
    :javascript
      var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
      var person = undefined;
      document.getElementById("demo").innerHTML =
      person + "<br>" + typeof person;
/ -::::::::::::::::::::::::::::::::::::::::::::::-------
/ -#hide_show_output_iframe23
%html
  %body
    %p
      Both the value, and the data type, of a variable with no value is
      = succeed "." do
        %b undefined
    %p#demo
    :javascript
      var person;
      document.getElementById("demo").innerHTML =
      person + "<br>" + typeof person;
/ -::::::::::::::::::::::::::::::::::::::::::::::-------
%html
  %h2
    %i
  / -::::::::::::::::::::::::::::::::::::::::::::::-------
  / #hide_show_output_iframe24
  %body
    %p#demo
    :javascript
      var d = new Date();
      document.getElementById("demo").innerHTML = d;
/ -::::::::::::::::::::::::::::::::::::::::::::::-------
/ #hide_show_output_iframe25
%html
  %body
    %p Date.parse() returns the number of milliseconds between the date and January 1, 1970:
    %p#demo
    :javascript
      var msec = Date.parse("March 21, 2012");
      document.getElementById("demo").innerHTML = msec;
/ -::::::::::::::::::::::::::::::::::::::::::::::-------
/ #hide_show_output_iframe26
%html
  %body
    %p The setDate() method sets the date of a month.
    %p#demo
    :javascript
      var d = new Date();
      d.setDate(15);
      document.getElementById("demo").innerHTML = d;
/ -::::::::::::::::::::::::::::::::::::::::::::::-------
/ #hide_show_output_iframe27
%html
  %body
    %p The setFullYear() method sets a date object to a special date.
    %p Remember that JavaScript counts months from 0 to 11. Month 10 is November.
    %p#demo
    :javascript
      var d = new Date();
      d.setFullYear(2020, 0, 14);
      document.getElementById("demo").innerHTML = d;
/ -::::::::::::::::::::::::::::::::::::::::::::::-------
/ #hide_show_output_iframe28
%html
  %body
    %p#demo
    :javascript
      document.getElementById("demo").innerHTML = new Date("Mar 25 2015");
/ -::::::::::::::::::::::::::::::::::::::::::::::-------
/ #hide_show_output_iframe29
%html
  %body
    %p#demo
    :javascript
      document.getElementById("demo").innerHTML = 
      new Date("Wed Mar 25 2015 09:56:24 GMT+0100 (W. Europe Standard Time)");
/ -::::::::::::::::::::::::::::::::::::::::::::::-------
/ #hide_show_output_iframe30
%html
  %body
    %p#demo
    :javascript
      document.getElementById("demo").innerHTML = 
      new Date("Fri Mar 25 2015 09:56:24 GMT+0100 (Tokyo Time)");
/ -::::::::::::::::::::::::::::::::::::::::::::::-------
/ #hide_show_output_iframe31
%html
  %body
    %p#demo
    :javascript
      document.getElementById("demo").innerHTML = new Date("25 Mar 2015");
/ -::::::::::::::::::::::::::::::::::::::::::::::-------
/ #hide_show_output_iframe32
%html
  %body
    %p#demo
    :javascript
      document.getElementById("demo").innerHTML = new Date("January 25 2015");
/ -::::::::::::::::::::::::::::::::::::::::::::::-------
/ #hide_show_output_iframe33
%html
  %body
    %p#demo
    :javascript
      document.getElementById("demo").innerHTML = new Date("Jan 25 2015");
/ -::::::::::::::::::::::::::::::::::::::::::::::-------
/ #hide_show_output_iframe34
%html
  %body
    %p#demo
    :javascript
      document.getElementById("demo").innerHTML = new Date("JANUARY, 25, 2015");
/ -::::::::::::::::::::::::::::::::::::::::::::::-------
/ #hide_show_output_iframe35
%html
  %body
    %p#demo
    :javascript
      document.getElementById("demo").innerHTML = new Date("03/25/2015");
/ -::::::::::::::::::::::::::::::::::::::::::::::-------
/ #hide_show_output_iframe36
%html
  %body
    %p#demo
    :javascript
      document.getElementById("demo").innerHTML = new Date("2015-03-25");
/ -::::::::::::::::::::::::::::::::::::::::::::::-------
/ #hide_show_output_iframe37
%html
  %body
    %p#demo
    :javascript
      document.getElementById("demo").innerHTML = new Date("2015-03");
/ -::::::::::::::::::::::::::::::::::::::::::::::-------
/ #hide_show_output_iframe38
%html
  %body
    %p#demo
    :javascript
      document.getElementById("demo").innerHTML = new Date("2015");
/ -::::::::::::::::::::::::::::::::::::::::::::::-------
/ #hide_show_output_iframe39
%html
  %body
    %p#demo
    :javascript
      document.getElementById("demo").innerHTML = new Date("2015-03-25T12:00:00");
/ -::::::::::::::::::::::::::::::::::::::::::::::-------
/ #hide_show_output_iframe40
%html
  %body
    %p#demo
    :javascript
      var d = new Date();
      document.getElementById("demo").innerHTML = d.toDateString();
/ -::::::::::::::::::::::::::::::::::::::::::::::-------
/ #hide_show_output_iframe41
%html
  %body
    %p#demo
    :javascript
      var d = new Date();
      document.getElementById("demo").innerHTML = d.toString();
/ -::::::::::::::::::::::::::::::::::::::::::::::-------
/ #hide_show_output_iframe42
%html
  %body
    %p
      The toUTCString() method converts a date to a UTC string (date display
      standard).
    %p#demo
    :javascript
      var d = new Date();
      document.getElementById("demo").innerHTML = d.toUTCString();
/ -::::::::::::::::::::::::::::::::::::::::::::::-------
/ #hide_show_output_iframe43
%html
  %body
    %p You can use an array to display the name of the weekday:
    %p#demo
    :javascript
      var d = new Date();
      var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
      document.getElementById("demo").innerHTML = days[d.getDay()];
/ -::::::::::::::::::::::::::::::::::::::::::::::-------
/ -::::::::::::::::::::::::::::::::::::::::::::::-------
%html
  %h2
    %i
      events
  %p
    \/ ---------------------------------------------
    / #hide_show_output_iframe44
  %body
    %button{:onclick => "this.innerHTML=Date()"} The time is?
/ -::::::::::::::::::::::::::::::::::::::::::::::-------
/ #hide_show_output_iframe45
%html
  %body
    %button{:onclick => "document.getElementById('demo').innerHTML=Date()"} The time is?
    %p#demo
/ -::::::::::::::::::::::::::::::::::::::::::::::-------
%html
  %body
    %p Click the button to display the date.
    %button{:onclick => "displayDate()"} The time is?
    :javascript
      function displayDate() {
          document.getElementById("demo").innerHTML = Date();
      }
    %p#demo
/ #hide_show_output_iframe46
/ -/ ------------------------------------------
/
  \-%h2
  <!---  farenheit
  <!---/ ------------------------------------------
/
  \-#hide_show_output_iframe47
  <!DOCTYPE html>
  <html>
  <body>
  
  <p>Accessing a function without (), will return the function definition:</p>
  <p id="demo"></p>
  
  <script>
  function toCelsius(f) {
  return (5/9) * (f-32);
  }
  document.getElementById("demo").innerHTML = toCelsius;
  </script>
  
  </body>
  </html>
  <!---::::::::::::::::::::::::::::::::::::::::::::::-------
/
  \-#hide_show_output_iframe48
  
  <!DOCTYPE html>
  <html>
  <body>
  
  <p>This example calls a function to convert from Fahrenheit to Celsius:</p>
  <p id="demo"></p>
  
  <script>
  function toCelsius(f) {
  return (5/9) * (f-32);
  }
  document.getElementById("demo").innerHTML = toCelsius(77);
  </script>
  
  </body>
  </html>
  <!---::::::::::::::::::::::::::::::::::::::::::::::-------
/ -/ ------------------------------------------
/
  \-%h2
  <!---  function
  <!---/ ------------------------------------------
/ -#hide_show_output_iframe49
%html
  %body
    %h1 JavaScript Functions
    %p This example calls a function which performs a calculation and returns the result:
    %p#demo
    :javascript
      function myFunction(a, b) {
          return a * b;
      }
      document.getElementById("demo").innerHTML = myFunction(4, 3);
/ -::::::::::::::::::::::::::::::::::::::::::::::-------
/ -#hide_show_output_iframe50
%html
  %body
    %p#demo
    :javascript
      document.getElementById("demo").innerHTML =
      "The temperature is " + toCelsius(77) + " Celsius";
      
      function toCelsius(fahrenheit) {
          return (5/9) * (fahrenheit-32);
      }
/ -::::::::::::::::::::::::::::::::::::::::::::::-------
/ -#hide_show_output_iframe51
%html
  %body
    %h1 JavaScript Functions
    %p This example calls a function which performs a calculation, and returns the result:
    %p#demo
    :javascript
      function myFunction(p1, p2) {
          return p1 * p2;
      }
      document.getElementById("demo").innerHTML = myFunction(4, 3);
/ -::::::::::::::::::::::::::::::::::::::::::::::-------
/ -/ ------------------------------------------
/
  \-%h2
  <!---  globa
  <!---/ ------------------------------------------
/ -#hide_show_output_iframe52
%html
  %body
    %p The global JavaScript function Number() converts variables to numbers:
    %p#demo
    :javascript
      document.getElementById("demo").innerHTML = 
          Number(true) + "<br>" +
          Number(false) + "<br>" +
          Number(new Date()) + "<br>" +
          Number("  10") + "<br>" +
          Number("10  ") + "<br>" +
          Number("10 6");
/ -::::::::::::::::::::::::::::::::::::::::::::::-------
/ -#hide_show_output_iframe53
%html
  %body
    %p The global JavaScript function parseFloat() converts strings to numbers:
    %p#demo
    :javascript
      document.getElementById("demo").innerHTML = 
          parseFloat("10") + "<br>" +
          parseFloat("10.33") + "<br>" +
          parseFloat("10 6") + "<br>" +    
          parseFloat("10 years") + "<br>" +
          parseFloat("years 10");
/ -::::::::::::::::::::::::::::::::::::::::::::::-------
/ -#hide_show_output_iframe54
%html
  %body
    %p The global JavaScript function parseInt() converts strings to numbers:
    %p#demo
    :javascript
      document.getElementById("demo").innerHTML = 
          parseInt("10") + "<br>" +
          parseInt("10.33") + "<br>" +
          parseInt("10 6") + "<br>" +    
          parseInt("10 years") + "<br>" +    
          parseInt("years 10");
/ -::::::::::::::::::::::::::::::::::::::::::::::-------
/ -/ ------------------------------------------
/
  \-%h2
  <!---  inaccurate
  <!---/ ------------------------------------------
/ -#hide_show_output_iframe55
%html
  %body
    %p Integers are considered accurate up to 15 digits.
    %button{:onclick => "myFunction()"} Try it
    %p#demo
    :javascript
      function myFunction() {
          var x = 999999999999999;
          var y = 9999999999999999;
          document.getElementById("demo").innerHTML = x + "<br>" + y;
      }
/ -::::::::::::::::::::::::::::::::::::::::::::::-------
/ -#hide_show_output_iframe56
%html
  %body
    %p Floating point arithmetic is not always 100% accurate.
    %button{:onclick => "myFunction()"} Try it
    %p#demo
    :javascript
      function myFunction() {
          var x = 0.2 + 0.1;
          document.getElementById("demo").innerHTML = "0.2 + 0.1 = " + x;
      }
/ -::::::::::::::::::::::::::::::::::::::::::::::-------
/ -#hide_show_output_iframe57
%html
  %body
    %p Floating point arithmetic is not always 100% accurate.
    %p But it helps to multiply and divide.
    %button{:onclick => "myFunction()"} Try it
    %p#demo
    :javascript
      function myFunction() {
          var x = (0.2*10 + 0.1*10) / 10;
          document.getElementById("demo").innerHTML = "0.2 + 0.1 = " + x;
      }
/ -::::::::::::::::::::::::::::::::::::::::::::::-------
/ -/ ------------------------------------------
/
  \-%h2
  <!---  infinity
  <!---/ ------------------------------------------
/ -#hide_show_output_iframe58
%html
  %body
    %p Infinity is a Number.
    %button{:onclick => "myFunction()"} Try it
    %p#demo
    :javascript
      function myFunction() {
          document.getElementById("demo").innerHTML = typeof Infinity;
      }
/ -::::::::::::::::::::::::::::::::::::::::::::::-------
/ -#hide_show_output_iframe59
%html
  %body
    %p Division by zero also generates Infinity.
    %button{:onclick => "myFunction()"} Try it
    %p#demo
    :javascript
      function myFunction() {
          var x = 2/0;
          var y = -2/0;
          document.getElementById("demo").innerHTML = x + "<br>" + y;
      }
/ -::::::::::::::::::::::::::::::::::::::::::::::-------
/ -#hide_show_output_iframe60
%html
  %body
    %p Infinity is returned if you calculate a number outside the largest possible number.
    %button{:onclick => "myFunction()"} Try it
    %p#demo
    :javascript
      function myFunction() {
          var myNumber = 2; 
          var txt = "";
          while (myNumber != Infinity) {
              myNumber = myNumber * myNumber;
              txt = txt + myNumber + "<br>";
          }
          document.getElementById("demo").innerHTML = txt;
      }
/ -::::::::::::::::::::::::::::::::::::::::::::::-------
/ -/ ------------------------------------------
/
  \-%h2
  <!---  intro
  <!---/ ------------------------------------------
/ -#hide_show_output_iframe61
%html
  %body
    %h1 What Can JavaScript Do?
    %p#demo JavaScript can hide HTML elements.
    %button{:onclick => "document.getElementById('demo').style.display='none'", :type => "button"} Click Me!
/ -::::::::::::::::::::::::::::::::::::::::::::::-------
/ -#hide_show_output_iframe62
%html
  %body
    \&lt;meta name="google-site-verification" content="z1DD3eKjLziJTQpg-7cvvHWDePx9U5uf_Dt0Lhe0Lxo" /&gt;
    %h1 What Can JavaScript Do?
    %p#demo JavaScript can change HTML content.
    %button{:onclick => "document.getElementById('demo').innerHTML = 'Hello JavaScript!'", :type => "button"} Click Me!
/ -::::::::::::::::::::::::::::::::::::::::::::::-------
/ -#hide_show_output_iframe63
%html
  %body
    %h1 What Can JavaScript Do?
    %p JavaScript can change HTML attributes.
    %p In this case JavaScript changes the src (source) attribute of an image.
    %button{:onclick => "document.getElementById('myImage').src='pic_bulbon.gif'"} Turn on the light
    %img#myImage{:src => "pic_bulboff.gif", :style => "width:100px"}/
    %button{:onclick => "document.getElementById('myImage').src='pic_bulboff.gif'"} Turn off the light
/ -::::::::::::::::::::::::::::::::::::::::::::::-------
/ -#hide_show_output_iframe64
%html
  %body
    %h1 What Can JavaScript Do?
    %p JavaScript can show hidden HTML elements.
    %p#demo{:style => "display:none"} Hello JavaScript!
    %button{:onclick => "document.getElementById('demo').style.display='block'", :type => "button"} Click Me!
/ -::::::::::::::::::::::::::::::::::::::::::::::-------
/ -#hide_show_output_iframe65
%html
  %body
    %h1 What Can JavaScript Do?
    %p#demo JavaScript can change the style of an HTML element.
    %button{:onclick => "document.getElementById('demo').style.fontSize='35px'", :type => "button"} Click Me!
/ -::::::::::::::::::::::::::::::::::::::::::::::-------
/ -/ ------------------------------------------
/
  \-%h2
  <!---  math
  <!---/ ------------------------------------------
/ -#hide_show_output_iframe66
%html
  %body
    %h1 JavaScript Math.abs()
    %p Math.abs(x) returns the absolute (positive) value of x:
    %p#demo
    :javascript
      document.getElementById("demo").innerHTML = Math.abs(-4.4);
/ -::::::::::::::::::::::::::::::::::::::::::::::-------
/ -#hide_show_output_iframe67
%html
  %body
    %h1 JavaScript Math.ceil()
    %p
      Math.ceil() rounds a number
      %strong up
      to its nearest integer:
    %p#demo
    :javascript
      document.getElementById("demo").innerHTML = Math.ceil(4.4);
/ -::::::::::::::::::::::::::::::::::::::::::::::-------
/ -#hide_show_output_iframe68
%html
  %body
    %h1 JavaScript Math Constants
    %p#demo
    :javascript
      document.getElementById("demo").innerHTML = 
      "<p><b>Math.E:</b> " + Math.E + "</p>" +
      "<p><b>Math.PI:</b> " + Math.PI + "</p>" +
      "<p><b>Math.SQRT2:</b> " + Math.SQRT2 + "</p>" +
      "<p><b>Math.SQRT1_2:</b> " + Math.SQRT1_2 + "</p>" +
      "<p><b>Math.LN2:</b> " + Math.LN2 + "</p>" +
      "<p><b>Math.LN10:</b> " + Math.LN10 + "</p>" +
      "<p><b>Math.LOG2E:</b> " + Math.LOG2E + "</p>" +
      "<p><b>Math.Log10E:</b> " + Math.LOG10E + "</p>";
/ -::::::::::::::::::::::::::::::::::::::::::::::-------
/ -#hide_show_output_iframe69
%html
  %body
    %h1 JavaScript Math.cos()
    %p Math.cos(x) returns the cosin of x (given in radians):
    %p Angle in radians = (angle in degrees) * PI / 180.
    %p#demo
    :javascript
      document.getElementById("demo").innerHTML = 
      "The cosine value of 0 degrees is " + Math.cos(0 * Math.PI / 180);
/ -::::::::::::::::::::::::::::::::::::::::::::::-------
/ -#hide_show_output_iframe70
%html
  %body
    %h1 JavaScript Math.floor()
    %p
      Math.floor(x) returns the value of x rounded
      %strong down
      to its nearest integer:
    %p#demo
    :javascript
      document.getElementById("demo").innerHTML = Math.floor(4.7);
/ -::::::::::::::::::::::::::::::::::::::::::::::-------
/ -#hide_show_output_iframe71
%html
  %body
    %h1 JavaScript Math.max()
    %p Math.max() returns the highest value in a list of arguments.
    %p#demo
    :javascript
      document.getElementById("demo").innerHTML =
      Math.max(0, 150, 30, 20, -8, -200);
/ -::::::::::::::::::::::::::::::::::::::::::::::-------
/ -#hide_show_output_iframe72
%html
  %body
    %h1 JavaScript Math.min()
    %p Math.min() returns the lowest value in a list of arguments:
    %p#demo
    :javascript
      document.getElementById("demo").innerHTML =
      Math.min(0, 150, 30, 20, -8, -200);
/ -::::::::::::::::::::::::::::::::::::::::::::::-------
/ -#hide_show_output_iframe73
%html
  %body
    %h1 JavaScript Math.PI
    %p Math.PI returns the ratio of a circle's circumference to its diameter:
    %p#demo
    :javascript
      document.getElementById("demo").innerHTML = Math.PI;
/ -::::::::::::::::::::::::::::::::::::::::::::::-------
/ -#hide_show_output_iframe74
%html
  %body
    %h1 JavaScript Math.pow()
    %p Math.pow(x,y) returns the value of x to the power of y:
    %p#demo
    :javascript
      document.getElementById("demo").innerHTML = Math.pow(8,2);
/ -::::::::::::::::::::::::::::::::::::::::::::::-------
/ -#hide_show_output_iframe75
%html
  %body
    %h1 JavaScript Math.random()
    %p Math.random() returns a random number between 0 and 1:
    %p#demo
    :javascript
      document.getElementById("demo").innerHTML = Math.random();
/ -::::::::::::::::::::::::::::::::::::::::::::::-------
/ -#hide_show_output_iframe76
%html
  %body
    %h1 JavaScript Math.round()
    %p Math.round(x) returns the value of x rounded down to its nearest integer:
    %p#demo
    :javascript
      document.getElementById("demo").innerHTML = Math.round(4.4);
/ -::::::::::::::::::::::::::::::::::::::::::::::-------
/ -#hide_show_output_iframe77
%html
  %body
    %h1 JavaScript Math.sin()
    %p Math.sin(x) returns the sin of x (given in radians):
    %p Angle in radians = (angle in degrees) * PI / 180.
    %p#demo
    :javascript
      document.getElementById("demo").innerHTML = 
      "The sine value of 90 degrees is " + Math.sin(90 * Math.PI / 180);
/ -::::::::::::::::::::::::::::::::::::::::::::::-------
/
  \-/ ---------------------------------------------
  <!---%h2
  <!---  nav
  <!---/ ---------------------------------------------
  <!---#hide_show_output_iframe78
%html
  %body
    %p If you use NaN in a mathematical operation, the result can be a concatenation:
    %p#demo
    :javascript
      var x = NaN;
      var y = "5";
      document.getElementById("demo").innerHTML = x + y;
/ -::::::::::::::::::::::::::::::::::::::::::::::-------
/ -#hide_show_output_iframe79
%html
  %body
    %p If you use NaN in a mathematical operation, the result will also be NaN:
    %p#demo
    :javascript
      var x = NaN;
      var y = 5;
      document.getElementById("demo").innerHTML = x + y;
/ -::::::::::::::::::::::::::::::::::::::::::::::-------
/ -#hide_show_output_iframe80
%html
  %body
    %p A number divided by a numeric string becomes a number:
    %p#demo
    :javascript
      document.getElementById("demo").innerHTML = 100 / "10";
/ -::::::::::::::::::::::::::::::::::::::::::::::-------
/ -#hide_show_output_iframe81
%html
  %body
    %p A number divided by a non-numeric string becomes NaN (Not a Number):
    %p#demo
    :javascript
      document.getElementById("demo").innerHTML = 100 / "Apple";
/ -::::::::::::::::::::::::::::::::::::::::::::::-------
/
  \-/ ---------------------------------------------
  <!---%h2
  <!---  number
  <!---/ ---------------------------------------------
  <!---#hide_show_output_iframe82
%html
  %body
    %p#demo
    :javascript
      var x = 6;
      document.getElementById("demo").innerHTML = x.MAX_VALUE;
/ -::::::::::::::::::::::::::::::::::::::::::::::-------
/ -#hide_show_output_iframe83
%html
  %body
    %p#demo
    :javascript
      document.getElementById("demo").innerHTML = Number.MAX_VALUE;
/ -::::::::::::::::::::::::::::::::::::::::::::::-------
/ -#hide_show_output_iframe84
%html
  %body
    %p Never create numbers as objects.
    %p Numbers and objects cannot be safely compared.
    %p#demo
    :javascript
      var x = 500;              // x is a number
      var y = new Number(500);  // y is an object
      document.getElementById("demo").innerHTML = (x==y);
/ -::::::::::::::::::::::::::::::::::::::::::::::-------
/ -#hide_show_output_iframe85
%html
  %body
    %p Never create numbers as objects.
    %p Numbers and objects cannot be safely compared.
    %p#demo
    :javascript
      var x = 500;              // x is a number
      var y = new Number(500);  // y is an object
      document.getElementById("demo").innerHTML = (x===y);
/ -::::::::::::::::::::::::::::::::::::::::::::::-------
/ -#hide_show_output_iframe86
%html
  %body
    %p Never create numbers as objects.
    %p JavaScript objects cannot be compared.
    %p#demo
    :javascript
      var x = new Number(500);  // x is an object
      var y = new Number(500);  // y is an object
      document.getElementById("demo").innerHTML = (x==y);
/ -::::::::::::::::::::::::::::::::::::::::::::::-------
/ -#hide_show_output_iframe87
%html
  %body
    %p The toExponential() method returns a string, with the number rounded and written using exponential notation.
    %p An optional parameter defines the number of digits behind the decimal point.
    %p#demo
    :javascript
      var x = 9.656;
      document.getElementById("demo").innerHTML =
          x.toExponential() + "<br>" + 
          x.toExponential(2) + "<br>" + 
          x.toExponential(4) + "<br>" + 
          x.toExponential(6);
/ -::::::::::::::::::::::::::::::::::::::::::::::-------
/ -#hide_show_output_iframe88
%html
  %body
    %p The toFixed() method rounds a number to a given number of digits.
    %p For working with money, toFixed(2) is perfect.
    %p#demo
    :javascript
      var x = 9.656;
      document.getElementById("demo").innerHTML =
          x.toFixed(0) + "<br>" +
          x.toFixed(2) + "<br>" +
          x.toFixed(4) + "<br>" +
          x.toFixed(6);
/ -::::::::::::::::::::::::::::::::::::::::::::::-------
/ -#hide_show_output_iframe89
%html
  %body
    %p The toPrecision() method returns a string, with a number written with a specified length:
    %p#demo
    :javascript
      var x = 9.656;
      document.getElementById("demo").innerHTML = 
          x.toPrecision() + "<br>" +
          x.toPrecision(2) + "<br>" +
          x.toPrecision(4) + "<br>" +
          x.toPrecision(6);
/ -::::::::::::::::::::::::::::::::::::::::::::::-------
/ -#hide_show_output_iframe90
%html
  %body
    %p The toString() method converts a number to a string.
    %p#demo
    :javascript
      var x = 123;
      document.getElementById("demo").innerHTML =
          x.toString() + "<br>" +
         (123).toString() + "<br>" +
         (100 + 23).toString();
/ -::::::::::::::::::::::::::::::::::::::::::::::-------
/
  \-/ ---------------------------------------------
  <!---%h2
  <!---  objets
  <!---/ ---------------------------------------------
  <!---#hide_show_output_iframe91
%html
  %body
    %p#demo
    :javascript
      var x = 123;
      var y = new Number(123);
      
      document.getElementById("demo").innerHTML = typeof x + "<br>" + typeof y;
/ -::::::::::::::::::::::::::::::::::::::::::::::-------
/ -#hide_show_output_iframe92
%html
  %body
    %p Creating a JavaScript Object.
    %p#demo
    :javascript
      var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
      
      document.getElementById("demo").innerHTML =
      person.firstName + " is " + person.age + " years old.";
/ -::::::::::::::::::::::::::::::::::::::::::::::-------
/ -#hide_show_output_iframe93
%html
  %body
    %p Creating a JavaScript Object.
    %p#demo
    :javascript
      var person = {
          firstName : "John",
          lastName  : "Doe",
          age       : 50,
          eyeColor  : "blue"
      };
      
      document.getElementById("demo").innerHTML =
      person.firstName + " is " + person.age + " years old.";
/ -::::::::::::::::::::::::::::::::::::::::::::::-------
/ -#hide_show_output_iframe94
%html
  %body
    %p An object method is a function definition, stored as a property value.
    %p If you access it without (), it will return the function definition:
    %p#demo
    :javascript
      var person = {
          firstName: "John",
          lastName : "Doe",
          id       : 5566,
          fullName : function() {
             return this.firstName + " " + this.lastName;
          }
      };
      
      document.getElementById("demo").innerHTML = person.fullName;
/ -::::::::::::::::::::::::::::::::::::::::::::::-------
/ -#hide_show_output_iframe95
%html
  %body
    %p Creating and using an object method.
    %p An object method is a function definition, stored as a property value.
    %p#demo
    :javascript
      var person = {
          firstName: "John",
          lastName : "Doe",
          id       : 5566,
          fullName : function() {
             return this.firstName + " " + this.lastName;
          }
      };
      
      document.getElementById("demo").innerHTML = person.fullName();
/ -::::::::::::::::::::::::::::::::::::::::::::::-------
/ -#hide_show_output_iframe96
%html
  %body
    %p Creating a JavaScript Object.
    %p#demo
    :javascript
      var car = {type:"Fiat", model:"500", color:"white"};
      document.getElementById("demo").innerHTML = car.type;
/ -::::::::::::::::::::::::::::::::::::::::::::::-------
/ -#hide_show_output_iframe97
%html
  %body
    %p
      There are two different ways to access an object property:
    %p You can use person.property or person["property"].
    %p#demo
    :javascript
      var person = {
          firstName: "John",
          lastName : "Doe",
          id       :  5566
      };
      document.getElementById("demo").innerHTML =
      person.firstName + " " + person.lastName;
/ -::::::::::::::::::::::::::::::::::::::::::::::-------
/ -#hide_show_output_iframe98
%html
  %body
    %p
      There are two different ways to access an object property:
    %p You can use person.property or person["property"].
    %p#demo
    :javascript
      var person = {
          firstName: "John",
          lastName : "Doe",
          id       :  5566
      };
      document.getElementById("demo").innerHTML =
      person["firstName"] + " " + person["lastName"];
/ -::::::::::::::::::::::::::::::::::::::::::::::-------
/ -#hide_show_output_iframe99
%html
  %body
    %p Creating a JavaScript Variable.
    %p#demo
    :javascript
      var car = "Fiat";
      document.getElementById("demo").innerHTML = car;
/ -::::::::::::::::::::::::::::::::::::::::::::::-------
