function CofeeMachine(power) {
this.waterAmount=0;
var time;
var watr_heat_caoacity=4200;

var self=this;

function getBoilTime() {
  return self.waterAmount * watr_heat_caoacity * 80
}
function onReady(){
console.log('Cofee done!');
}
this.run = function(){
time = setTimeout(onReady, getBoilTime());
}

this.stop= function(){
console.log ('NO MORE COFEE!!1!');
clearTimeout(time)
}
}

/*задать а
var a = new CofeeMachine (1000)
a.run() --> cofee done!
a.woterAmount = 1000
a.run()
a.stop() --> no more!*/