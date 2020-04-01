/*
Ex 1.
	Suppose you have an array of numbers [1,2,3,4,5,6,7,8,9,10,11,12,13].
	From the elements of this array, create a new array with only the numbers that are divisible by three.
*/

const a = [1,2,3,4,5,6,7,8,9,10,11,12,13];
const aNew = a.filter(
	(i) => {
		if (i % 3 === 0) {
			return i;
		}
	}
);

console.log( aNew );

/**
 * Ex 2.

 Write a program that finds duplicates from an array and creates a new array with no duplicates.
['bananas','apples', 'oranges', 'bananas'] becomes 
['bananas','apples', 'oranges']
*/

const fruit = ['bananas','apples', 'oranges', 'bananas'];
const fruitNew = fruit.filter( (value, index, array) => {
	// indexOf() searches the array for the specified item, and returns its position.
	return array.indexOf(value) === index; 
});
console.log( fruitNew );

/**
 * Ex 3.
 * 
 */