function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane User", "John Smith"];

//Solution 1: Iterate over the array and call greeter for each element.
for (let i = 0; i < user.length; i++) {
  console.log(greeter(user[i]));
}

//Solution 2: Modify the greeter function to accept an array of strings
function greeterArray(people: string[]): string[] {
  return people.map(person => "Hello, " + person);
}

console.log(greeterArray(user)); //Output: ['Hello, Jane User', 'Hello, John Smith']

//Solution 3: Use a type assertion (use with caution)
console.log(greeter(user[0] as string)); // Output: Hello, Jane User