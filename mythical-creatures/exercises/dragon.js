

module.exports = {
  createDragon : function(name, rider, temperment) { 
    return {
      name: name,
      rider: rider,
      temperment: temperment
    }
  },
  greetRider : function(dragon) {
    return `Hi, ${dragon.rider}!`
  },
  eat : function() {
    return this.hungry = false
    },
  // findFireBreathers
}