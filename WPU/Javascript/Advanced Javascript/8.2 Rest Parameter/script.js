// Rest Parameter

function myFunc(a, b, ...args) {
  // Rest parameter --> Array
  return `a is ${a}, b is ${b}, and args = ${args.join(` `)}`;
  return args;
  // arguments --> object
  //   return arguments;
  // convert to Array
  //   return Array.from(arguments);
  // Spread Parameter
  //   return [...arguments];
}

console.log(myFunc(5, 6, 7, 8, 9, 10));

function addition(...angka) {
  // for..of
  //   let total = 0;
  //   for (const a of angka) {
  //     total += a;
  //   }
  //   return total;
  // .reduce()
  //   newAngka = angka.reduce((acc, el) => {
  //     return acc + el;
  //   });
  //   return newAngka;
  //   newAngka = angka.reduce((acc, el) => acc + el);
  //   return newAngka;
  return angka.reduce((acc, el) => acc + el);
}

console.log(addition(2, 6, 7, 3, 8, 9));

// Array Destructuring
const group1 = [
  `Caityln Kiramann`,
  `Jayce Talis`,
  `Clive Rosfield`,
  `Cloud Strife`,
  `Aerith Gainsborough`,
];

// let leader = group1[0];
// let coLeader = group1[1];

const [leader, coLeader, ...members] = group1;
console.log(leader);
console.log(coLeader);
console.log(members);

// Object Destructuring

const team = {
  projectManager: `Rivaldo Santosa`,
  frontEnd1: `Andi`,
  frontEnd2: `Joni`,
  backend: `Akmal`,
  ux: `Cibet`,
  devops: `Theo`,
};

const { projectManager, ...myTeam } = team;
console.log(projectManager);
console.log(myTeam);

// Filtering

function filterBy(type, ...values) {
  return values.filter((value) => typeof value === type);
  //   return values.map((value) => typeof value === type);
}

console.log(typeof `Andi`);
console.log(typeof 10);
console.log(typeof true);

console.log(filterBy(`number`, 1, 8, `Aldo`, 10, false, `Craig`, true, `Andi`));
console.log(filterBy(`string`, 1, 8, `Aldo`, 10, false, `Craig`, true, `Andi`));
console.log(
  filterBy(`boolean`, 1, 8, `Aldo`, 10, false, `Craig`, true, `Andi`)
);
