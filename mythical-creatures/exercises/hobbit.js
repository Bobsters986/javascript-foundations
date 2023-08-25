
function createHobbit(name = 'unknown', age = 0) {
  const isAdult = age > 32;
  const isOld = age > 100;
  return {
    name: name,
    age: age,
    isAdult: isAdult,
    isOld: isOld,
    acquaintances: []
  }
}

function celebrateBirthday(hobbit) {
  hobbit.age++;
  hobbit.isAdult = hobbit.age > 32;
  hobbit.isOld = hobbit.age > 100;
  return hobbit
}

function getRing(hobbit) {
  if (hobbit.name === 'Frodo') {
    return 'Here is the ring!';
  } else {
    return 'You can\'t have it!';
  }
}

function meetPeople(hobbit, people) {
  people.forEach(person => hobbit.acquaintances.push(person));
  return hobbit
}

function findFriends(hobbit) {
  // return hobbit.acquaintances.filter(person => person.relationship === 'friend').map(person => person.name)
  var friends = [];
  hobbit.acquaintances.forEach(person => {
    if (person.relationship === 'friend') {
      friends.push(person.name);
    }
  });
  return friends
}

module.exports = {
  createHobbit,
  celebrateBirthday,
  getRing,
  meetPeople, 
  findFriends
}