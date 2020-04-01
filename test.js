const readline = require("readline-sync");
const all_users = [{"id":1585667793031,"name":"Leon Ford","balance":"23","password":"qwerty","fund_requests":[]},{"id":1585668001215,"name":"Tarja Ford","balance":"2000","password":"qwerty","fund_requests":[]}];

const verifyAccountID = (number) => {
	const allUsersIds = all_users.map( (value) => {
    return value.id;
	});

	let verifyAccount = allUsersIds.includes(parseInt(number));

	return (verifyAccount === true) ? true : false;
} 

verifyAccountID(1585667793031);