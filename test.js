const readline = require("readline-sync");
const all_users = [{"id":123,"name":"Leon Ford","balance":"23","password":"qwerty","fund_requests":[]},{"id":1585668001215,"name":"Tarja Ford","balance":"2000","password":"qwerty","fund_requests":[]}];

const verifyAccountID = (number) => {
	const allUsersIds = all_users.map( (value) => {
    return value.id;
	});

	let verifyAccount = allUsersIds.includes(parseInt(number));

	return (verifyAccount === true) ? true : false;
} 

const verifyAccountPassword = (accountNumber, passwordAttempt) => {
	if ( verifyAccountID(accountNumber) ) {
		const userAccountObj = all_users.filter( (value) => {
			return value.id === accountNumber;
		});

		return (userAccountObj[0].password === passwordAttempt) ? true : false;
	}
} 

const test = () => {
	//verifyAccountID(123);
	//verifyAccountPassword(123);
	console.log(verifyAccountID(123));
	console.log(verifyAccountPassword(123, 'qwerty'));
}
test();