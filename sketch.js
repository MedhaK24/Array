function setup() {
  createCanvas(800,800);

  var a = [11,20,33,40,2.3,6,7]
  a.push(70)
  a.push(90)
  a.push(110)
  a.pop(110)

  // for(var i = 0; i<=3; i=i+1){
  //   console.log(a[i])
  // }
  
  // for(var i = 0; i<=5; i=i+1){
  //   console.log(a[i])
  // }

//   for(var i = 0; i<=5; i=i+1){
//     if (a[i]>0){
//       console.log(a[i])
//     }
//   }

for(var i = 0; i<a.length; i=i+1){
  if(a[i]%2==1){
    console.log(a[i])
  }
}



}


function draw() {
  background("black");  
 
  
}




