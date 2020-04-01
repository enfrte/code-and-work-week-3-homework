const readline = require("readline-sync");

const test = () => {
	const all_users = [{"id":1585667793031,"name":"Leon Ford","balance":"23","password":"qwerty","fund_requests":[]},{"id":1585668001215,"name":"Tarja Ford","balance":"2000","password":"qwerty","fund_requests":[]}];

	// an array of only account ids
	const allUsersIds = all_users.map( (value) => {
    return value.id;
	});
	console.log(allUsersIds);

  let inputId = readline.question(`\nChecking if an account exists!\nEnter the account ID whose existence you want to verify.\n`);
	
	let verifyAccount = allUsersIds.includes(parseInt(inputId));

	while (verifyAccount === false) {
		inputId = readline.question("\nAn account with that ID does not exist. Try again.\n");
		verifyAccount = allUsersIds.includes(parseInt(inputId));

	}
  console.log("\nThis account exists.\n");	
}
test();