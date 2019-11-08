var myWrapper = document.getElementById("select");

var changingColor = 2;
var changingColor2 = 20;
var changingColor3 = 50;
var changingColor4 = 150;
var changingColor5 = 30;

for (var i = 0; i < 10; i++) {
    changingColor = changingColor + 10;
		changingColor2 = changingColor2 + 50;
		changingColor3 = changingColor3 + 15;
		changingColor4 = changingColor4 + 20;
		changingColor5 = changingColor5 + 30;

  var Regular = `
      <div
		 	class="rectangle"
		 	style="background-color:rgb(${changingColor},0,${changingColor2});"
		 >
  `;
    var Linked = `

    <a class="linked" style="background-color:rgb(${changingColor},0,${changingColor2})";
onclick="window.location.href = 'advice.html';">
advice</a>

  `;


  if (i=== Math.floor(Math.random()*10)){
      myWrapper.insertAdjacentHTML('beforeend' , Linked);
      }else{
      myWrapper.insertAdjacentHTML('beforeend' , Regular);
      }
}
