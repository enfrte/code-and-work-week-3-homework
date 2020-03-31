
const readline = require("readline-sync");
const {stringLowerCase, generateId, loadDb, saveToDb, helpText} = require('./bankHelperFunctions');
/*
## Accounts
### H3.3 Create an account 
*/
const createAccount = () => {
	let name = readline.question("\nCreating a new user account!\nInsert your name.\n");
	name = name.trim();
	let openingAmount = readline.question(`\nHello, ${name}! It's great to have you as a client.\nHow much is your initial deposit? (The minimum is 10e)\n`);
	if (openingAmount < 10) {
		while (openingAmount < 10) {
			openingAmount = readline.question("\nUnfortunately we can't open an account for such a small account. Do you have any more cash with you?\n");
		}
	}
	let password = readline.question(`\nGreat, ${name}! You now have an account with a balance of 12e.\nWe're happy to have you as a customer, and we want to ensure that your money is safe with us.\nGive us a password, which gives only you the access to your account.\n`);
	password = password.trim();
	const id = generateId();
	
	const account = {
		id: id,
		name: name,
		balance: openingAmount,
		password: password,
		fund_requests: []
	};
	return account;
}

const saveNewAccount = (accountDetails) => {
	all_users.push(accountDetails);
	saveToDb(databaseFile, all_users);
	console.log(`\nYour account is now created.\nAccount id: ${accountDetails.id}\nStore your account ID in a safe place.`);
};

/*

### H3.4 Does an account exist

The `does_account_exist` command starts a dialog sequence as well. Find if the account in question is stored in `all_users` array.

    $ Checking if an account exists!
    $ Enter the account ID whose existence you want to verify.
    > 69420
    $ An account with that ID does not exist. Try again.
    > 2035
    $ This account exists.

		*/
		
		
		/*
### H3.5 Account balance

The `account_balance` command starts a dialog sequence as well. User is asked for an account ID and a password. Given a correct ID-password pair, the account balance is printed.

    $ Checking your account balance!
    $ What is your account ID?
    > 69420
    $ An account with that ID does not exist. Try again.
    > 2035
    $ Account found! Insert your password.
    > hunetr12
    $ Wrong password, try typing it again.
    > hunter12.
    $ Correct password. We validated you as Rene Orosz.
    $ Your account balance is 12e.

		*/
		
		
		/*
### H3.6 Change name

The `change_name` command starts a dialog sequence as well. You get the drill.

    $ Changing the name associated with your account!
    $ What is your account ID?
    > 2035
    $ Account found! Insert your password.
    > hunter12.
    $ Correct password. We validated you as Rene Orosz.
    $ But it appears you want to change your name.
    $ Which name should we change your name to?
    > Rene Orozzz
    $ We will address you as Rene Orozzz from now on.

		*/
		
		
		/*
## Funds
### H3.7 Withdraw funds

The `withdraw_funds` command starts a dialog sequence as well. Reuse elements from H2.5.4 and H2.5.6 for checking if an account exists and logging in.

    $ Withdrawing cash!
    $ What is your account ID?
    > 69420
    $ An account with that ID does not exist. Try again.
    > 2035
    $ Account found! Insert your password.
    > hunetr12
    $ Wrong password, try typing it again.
    > hunter12.
    $ Correct password. We validated you as Rene Orozzz.
    $ How much money do you want to withdraw? (Current balance: 12e)
    > 13
    $ Unfortunately you don't have the balance for that. Try a smaller amount.
    > 11
    $ Withdrawing a cash sum of 11e. Your account balance is now 1e.

Find the correct account from the `all_users` array, validate the user and update the account balance. Don't allow the user to exceed their balance in the withdrawal.

*/
		
		
		/*
### H3.8 Deposit funds

The `deposit_funds` command starts a dialog sequence as well, very similarly to `withdraw_funds`.

    $ Depositing cash!
    $ What is your account ID?
    > 2035
    $ Account found! Insert your password.
    > hunter12.
    $ Correct password. We validated you as Rene Orozzz.
    $ How much money do you want to deposit? (Current balance: 12e)    
    > 250
    $ Depositing 250e. Your account balance is now 262e.

		*/
		
		
		/*
### H3.9 Transfer funds

The `transfer_funds` command starts a dialog sequence as well.

    $ Transferring funds!
    $ What is your account ID?
    > 2035
    $ Account found! Insert your password.
    > hunter12.
    $ Correct password. We validated you as Rene Orosz.
    $ How much money do you want to transfer? (Current balance: 262e)
    > 200
    $ Which account ID do you want to transfer these funds to?
    > 666
    $ An account with that ID does not exist. Try again.
    > 90570
    > Sending 11e from account ID 2035 to account ID 90570.

		*/
		
		
		/*
## Requests
### H3.10 Request funds

The `request_funds` command starts a dialog sequence as well.

    $ Requesting funds!
    $ What is your account ID?
    > 2035
    $ Account found! Insert your password.
    > hunter12.
    $ Correct password. We validated you as Rene Orosz.
    $ Which account ID do you request funds from?
    > 69420
    $ An account with that ID does not exist. Try again.
    > 90570
    $ Account found. How much money do you want to request?
    > 500
    $ Requesting 500e from the user with ID 90570.

All the fund requests should be stored in a `fund_requests` array. It should contain the IDs of the requestee and the requester, and the requested amount.

*/
		
		
		/*
### H3.11 Fund requests

The `request_funds` command lists the fund requests for your account.

    $ Listing fund requests!
    $ What is your account ID?
    > 2035
    $ Account found! Insert your password.
    > hunter12.
    $ Correct password. We validated you as Rene Orosz.
    $ Listing all the requests for your account!
    $  - 420e for the user 69420.
    $  - 69e for the user 69420.
    $  - 2.60e for the user 90570.

		*/
		
		
		/*
### H3.12 Accept fund request

The `accept_fund_request` command is somewhat self-explanatory and expands the previous command.

    $ Accepting fund requests!
    $ What is your account ID?
    > 2035
    $ Account found! Insert your password.
    > hunter12.
    $ Correct password. We validated you as Rene Orosz.
    $ Listing all the requests for your account!
    $ 1.   420e for the user 69420.
    $ 2.    69e for the user 69420.
    $ 3.     2e for the user 90570.
    $ Your account balance is 262e. Which fund request would you like to accept?
    > 1
    $ You do not have funds to accept this request.
    > 3
    $ Accepting fund request 2e for the user 90570. 
    $ Transferring 2e to account ID 90570.
    $ Your account balance is now 260e.

Remember to update the `fund_requests` array and balance of the both accounts.

*/
		
		
		/*

## Extra

### H3.13 Yes or no
Implement a yes/no question, and add it as a confirmation to important actions, e.g. for accepting the fund request.

    $ Are you sure?
    > no
    $ Terminating current action.

    $ Are you sure?
    > yes
    
    */
		
		
		/*
### H3.14 Log in

Implement a `log_in` command that asks for a username and a password. Store the logged in user ID in a `logged_user` variable. After logging in, other commands should validate the user automatically, and the log_in command is unavailable; instead, there should be a `log_out` command available.

    $ Logging in!
    $ What is your account ID?
    > 69420
    $ An account with that ID does not exist. Try again.
    > 2035
    $ Account found! Insert your password.
    > hunetr12
    $ Wrong password, try typing it again.
    > hunter12.
    $ Correct password. We validated you as Rene Orosz.
    $ You are now logged in.
    */
		
		
		/*
### H3.15 Store the data in JSON

Store the user data in a JSON file which gets loaded when the program starts.
*/



const databaseFile = 'database.json';
const all_users = loadDb(databaseFile);
let answer;

while(answer !== "quit") {
	answer = readline.question(`\n\nWelcome to Buutti banking CLI!\nHint: You can get help with the commands by typing "help".\n`);
	answer = stringLowerCase(answer);

	switch(answer) {
		case "help":
			console.log(helpText);
			break;
		case "quit":
			console.log("\nGoodbye!\n");
			break;
		case "create_account":
			saveNewAccount(createAccount());
			break;
		default:
			console.log("Error: Input was not found");
	}
}