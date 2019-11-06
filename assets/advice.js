// ========== this is the burst bubble effect

// var Heart = new mojs.CustomShape(){
//   getShape () {
//     return '<path id="Path_1" data-name="Path 1" d="M44.587,101.6l-6.1-6.1C15.82,75.448,1,61.936,1,45.373A23.633,23.633,0,0,1,24.973,21.4a26.194,26.194,0,0,1,19.614,9.153A26.18,26.18,0,0,1,64.2,21.4,23.633,23.633,0,0,1,88.174,45.373c0,16.563-14.82,30.075-37.485,50.125Z" />';
//   }
// }
// new mojs.addShape( 'heart', Heart );

document.addEventListener('DOMContentLoaded', function(event) {
 fetch('  https://api.adviceslip.com/advice')
.then(function(results){
  return results.json()
})

.then(function(jsonResults){

var randomQuote = jsonResults
  
// console.log("results: ", randomQuote.slip.advice)

  
 document.querySelector("#root").insertAdjacentHTML('afterbegin', `
<h1>${randomQuote.slip.advice}</h1> 
`)

   document.addEventListener( 'click',  (e) => {
  if (randomQuote.slip.slip_id.length === 3 ){
    redCirc
     .tune({ x:e.pageX, y: e.pageY })
    .replay();
    sparks 
    .tune({ x:e.pageX, y: e.pageY })
    .replay();
  }else if (randomQuote.slip.slip_id.length === 2 ){
     bubbles
    .tune({ x: e.pageX, y: e.pageY })
    .generate()
    .replay();
  }else{
     circle
     .replay();
  }
   })
  
})
.catch(function(error){
  console.log("error message:", error)
}) 

const DURATION = 500

class Heart extends mojs.CustomShape {
  getShape () { return '<path d="M92.6 7.4c-10-9.9-26-9.9-35.9 0l-4.4 4.3a3.4 3.4 0 0 1-4.7 0l-4.3-4.3c-10-9.9-26-9.9-35.9 0a25 25 0 0 0 0 35.5l22.4 22.2 13.5 13.4a9.5 9.5 0 0 0 13.4 0L70.2 65 92.6 43a25 25 0 0 0 0-35.5z"/>'; }
  getLength () { return 200; } // optional
}
mojs.addShape( 'heart', Heart ); // passing name and Bubble class


const bubbles = new mojs.Burst({
  left: 0, top: 0,
  degree:  0,
  count:    3,
  radius:   { 0: 100 },
  children: {
    shape:    'heart',
    fill:       '#ffffff',
    pathScale:  'rand(0.5, 2)',
    radius:     'rand(50, 35)',
    swirlSize:  'rand(150, 45)',
    swirlFrequency: 'rand(2, 4)',
    direction:  [ 1, -1 ],
    duration:   `rand(${1*DURATION}, ${2*DURATION})`,
    delay:      'rand(0, 75)',
    easing:     'quad.out',
    isSwirl:    true,
    isForce3d:  true,
  }
});



// ============ heart pop and stay 

const redCirc = new mojs.Shape({
     shape:'heart',
     left:0, top:0,
     stroke:'none',
     fill:'#F3FD01',
     radius: 10,
     strokeWidth: 3,
     duration: 150
   })
   .then({
     strokeWidth:0,
     scale:{to:2,easing: 'quad.out'},
     duration:  300
   });
   
   const sparks = new mojs.Burst({
    left: 0, top: 0,
      radius:   { 10: 62 },
      angle:    45,
      count:    10,
      children: {
        radius:       2.5,
        fill:           [

      
      { '#B76CFD' : '#E3D36B' },
      { '#CF8EEF' : '#CBEB98' },
      
      { '#87E9C6' : '#1FCC93' },
      { '#A7ECD0' : '#9AE4CF' },
      
      { '#87E9C6' : '#A635D9' },
      { '#D58EB3' : '#E0B6F5' },
      
      { '#F48BA2' : '#CF8EEF' },
      { '#91D3F7' : '#A635D9' },

      { '#CF8EEF' : '#CBEB98' },
      { '#87E9C6' : '#A635D9' },
    ],
        scale:        { 1: 0, easing: 'quad.in' },
        pathScale:    [ .8, null ],
        degreeShift:  [ 13, null ],
        duration:     [ 600, 900 ],
        easing:       'quint.out'
     }
     
   });




// ======= changing background 
const circle = new mojs.Shape({
  shape:        'circle',
  scale:        { 0 : 4, easing: 'cubic.out' },
  fill:         { '#B76CFD': '#F3FD01', easing: 'cubic.in' },
})

}) // end of DOMContentLoaded