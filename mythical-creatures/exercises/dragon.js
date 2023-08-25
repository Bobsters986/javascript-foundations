

module.exports = {
  createDragon : function(name, rider, temperment) { 
    return {
      name: name,
      rider: rider,
      temperment: temperment,
      timesEaten: 0,
      hungry: true
    }
  },
  greetRider : function(dragon) {
    return `Hi, ${dragon.rider}!`
  },
  eat : function(dragon) {
    dragon.timesEaten++
    if (dragon.timesEaten >= 3) {
      dragon.hungry = false
    }
    return dragon
  },
  // findFireBreathers
}