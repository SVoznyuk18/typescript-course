// 1. Heloo World task
// TODO: creaate excercise1 folder
// TODO: check node version
// TODO: check npm version
// TODO: check npx version
// TODO: init npm project
// TODO: install typescript
// TODO: generate tsconfig.json
// TODO: create src/index.ts with this code
function excercise1() {
  let greeting: string;
  greeting = "Hello World";
  console.log(greeting);
}
excercise1();
// TODO: run typescript in watch mode
// TODO: compare with javascript generated by typescript

// 2. loop which prints string to console n times
function excercise2() {
  var text: string = 'hello';
  var count: number = 3;
  let i = 0;
  while (i < count) {
    console.log(text);
    i++;
  }
}
excercise2();

// 3. code that generates array of numbers - from n to m
function excercise3() {
  var n: number = 1;
  var m: number = 10;
  var result: number[] = [];
  if (m > n) {
    for (let i = n; i <= m; i++) {
      result.push(i)
    }
  } else {
    for (let i = n; i >= m; i--) {
      result.push(i)
    }
  }

  console.log(result);
}
excercise3();
// TODO: compile and run the code
