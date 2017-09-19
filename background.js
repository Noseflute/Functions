<html>
  <body>
    <button onclick="backgroundPic()">Change the background</button>
<h1 id="potato">
  potato
</h1>
  <script>
    //Create a button
//When the button is pressed, it activates a function.
//The function will change the backgrund of the web page to be an image instead of white using: document.body.style.background = "url(picture.jpg)";
//Now set the background to cover with document.body.style.backgroundsize="cover";

function backgroundPic() {
	document.body.style.background= 'url("https://yt3.ggpht.com/-hRHTc1eQ-Yc/AAAAAAAAAAI/AAAAAAAAAAA/m0Hk6YuhxTM/s900-c-k-no-mo-rj-c0xffffff/photo.jpg")';
 	document.body.style.backgroundsize="cover";u
  document.getElementById('potato').style.textShadow = "10px 20px 10px #ff0000";
}
  </script>
  </body>
  </html>