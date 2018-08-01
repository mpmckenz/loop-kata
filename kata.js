console.log("Display the numbers from 1 to 20");
for (let counter = 1; counter < 21; counter++) {
    console.log(counter);
}

console.log("Display the EVEN numbers from 1 to 20");
for (let counter = 0; counter < 21; counter++)
    if ((counter % 2) == 0) {
        console.log(counter);
    }

console.log("Display the ODD numbers from 1 to 20");
for (let counter = 0; counter < 20; counter++)
    if ((counter % 2) == 1) {
        console.log(counter);
    }

console.log("Display the multiples of 5 up to 100");
for (let counter = 5; counter < 101; counter += 5) {
    console.log(counter);
}

console.log("Display the square numbers up to 100");
for (let counter = 1; counter <= 10; counter = counter + 1) {
    console.log(counter * counter);
}

console.log("Display the numbers counting backwards from 20 to 1");
for (let counter = 20; counter >0; counter--) {
    console.log(counter)
}

console.log("Display the even numbers counting backwards from 20");
for (let counter = 20; counter >0; counter--)
if ((counter % 2) == 0) {
    console.log(counter);
}

console.log("Display the odd numbers from 20 to 1, counting backwards");
for (let counter = 20; counter >0; counter--)
    if ((counter % 2) ==1) {
        console.log(counter);
    }

console.log("Display the multiples of 5, counting down from 100");
for (let counter = 100; counter >0; counter-=5) {
    console.log(counter);
}

console.log("Display the square numbers, counting down from 100");
for (let counter = 10; counter >= 1; counter = counter - 1) {
    console.log(counter * counter);
}