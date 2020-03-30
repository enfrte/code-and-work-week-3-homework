const fs = require('fs');

/*
Exercise 1 
Write a function that takes in a string of arbitrary length and outputs a modified string that...
...has no white spaces in the beginning or end
...has a maximum length of 20
...never starts with a capital letter
*/
console.log( "\n** Exercise 1 *****************************\n");

( (theString) => {
	theString.trim();
	theString.substr(0,19);
	theString = theString.toLowerCase();
	console.log(theString);
}
)(theString = "  The string.  ")

/*
Exercise 2
Find the first non-repeating character from a string.
For example, in “aabbooooofffkkccjdddTTT” it would be “j”.
*/
console.log( "\n** Exercise 2 *****************************\n");

const str2 = 'aabbooooofffkkccjdddTTT';

const nonRepeatingChars = (str) => {
	const repeatingArray = [];

	for (let i = 0; i < str.length; i++) {
		const currentChar = str.charAt(i);
		const charBeforeIsDifferent = str.charAt(i).localeCompare(str.charAt(i - 1)) !== 0; 
		const charAfterIsDifferent = str.charAt(i).localeCompare(str.charAt(i + 1)) !== 0;
		
		if ( charBeforeIsDifferent && charAfterIsDifferent ) {
			repeatingArray.push( currentChar );
		}	
	}
	return (repeatingArray.length > 0 ? repeatingArray[0] : 'No non-repeating chars in this string');
}

console.log(nonRepeatingChars(str2));

/**
 * Exercise 3
 * Create an array with some arbitrary names as strings. Now, print only the names that are more than 5 letters long.
 * 
 */
console.log( "\n** Exercise 3 *****************************\n");

 ( () =>
	a.forEach((s) => {
		console.log(s.length > 5 ? s : '');	
	})
)(a = ['red', 'green', 'yellow', 'åland']);

 /**
	* Exercise 4
1. Write a program that creates a new array filled with random numbers. Hint: Use Math.random() as described here.

2. Sort the array in ascending order (smallest to largest)

3. Print out all the numbers in this sorted array. 
EXTRA: ...in descending index order (starting from the end)
*/
console.log( "\n** Exercise 4 *****************************\n");

const randomArray = new Array(5).fill().map(() => Math.round((Math.random() * 10) + 1));
console.log('Random array:',randomArray);
const randomArraySortedAsc = randomArray.sort((a, b) => a - b );
console.log('Array sorted asc.:',randomArraySortedAsc);
const randomArraySortedADec = randomArray.sort((a, b) => b - a );
console.log('Array sorted dec.:',randomArraySortedADec);

/**
 * Exercise 5
 1. Create an array that contains the ascii codes of the string "adsf qwerty"
 2. Extra. Sort an array of strings in alphabetical order (disregarding if the first character is uppercase or lowercase!)
*/
console.log( "\n** Exercise 5 *****************************\n");

const ex5str = "adsf qwerty";
const ex5strArray = ex5str.split('').map(x => x.charCodeAt(0))
console.log('ascii codes of the string "adsf qwerty":', ex5strArray);
console.log('An array of strings in alphabetical order', ex5str.split('').sort());

/**
 * Exercise 6. 
 * Write a JavaScript program to print information about the book library dataset. Implement the following functions:

printBookData(id);
printReadingStatus(author, title);
addNewBook(author, title);
saveToJSON();
loadFromJSON();
 */

console.log( "\n** Exercise 6 *****************************\n");

const library = [ 
	{
		author: 'David Wallace',
		title:  'Infinite Jest',
		readingStatus: false,
		id: 1,
	},
	{
		author: 'Douglas Hofstadter',
		title:  'Gödel, Escher, Bach',
		readingStatus: true,
		id: 2,
	},
	{
		author: 'Harper Lee',
		title:  'To Kill A Mockingbird', 
		readingStatus: false,
		id: 3,
	},
];

const printBookData = (id) => {
	library.forEach(function (book) {
		
		if (book.id === id) {
			console.log(`Title: ${book.title}\nAuthor: ${book.author}\n`);
		} 
	});
};

printBookData(1);

const printReadingStatus = (author, title) => {
	library.forEach(function (book) {		
		if (book.author === author && book.title === title) {
			console.log(`\nCurrently reading ${book.title} by ${book.author}: ${book.readingStatus === true ? 'Yes' : 'No'}\n`);
		} 
	});
};

printReadingStatus('Harper Lee', 'To Kill A Mockingbird');

const addNewBook = (author, title) => {
	const newBookObj = {
		author: author,
		title:  title, 
		readingStatus: false,
		id: (library.length + 1), // probably not professional - use an id generator
	};
	library.push(newBookObj); 
};

addNewBook('Four Author', 'Four title');
console.log('Updated library:',library);

const saveToJSON = (jsonDataset) => {
	fs.writeFileSync('library.json', JSON.stringify(library), (error) => {
		if (error) {
			console.log(error);
			return;
		}
	});
	console.log('Saved to disk');	
};

saveToJSON(library);

const loadFromJSON = (library) => {
	const jsonstring = fs.readFileSync(library);
	const json = JSON.parse(jsonstring);
	return json;	
};

console.log('Loaded from JSON:', loadFromJSON('library.json'));
