	const all_users = [{"id":123,"name":"Leon Ford","balance":"23","password":"qwerty","fund_requests":[]},{"id":1585668001215,"name":"Tarja Ford","balance":"2000","password":"qwerty","fund_requests":[]}];

	const verifyAccountID = (number) => {
		const allUsersIds = all_users.map( (value) => {
			return value.id;
		});
		let verifyAccount = allUsersIds.includes(parseInt(number));
		return (verifyAccount === true) ? true : false;
	}

	const verifyAccountPassword = (accountNumber, passwordAttempt) => {
		console.log(verifyAccountID(accountNumber));

		if ( verifyAccountID(accountNumber) ) {
			let result;
			const userAccountObj = all_users.filter( (value) => {
				return value.id === accountNumber;
			});
			
			/*const userAccountObj = all_users.forEach(
				(value) => { 
					console.log(value.id === accountNumber);
					if (value.id === accountNumber) {
						console.log(value.password);
						result = value.password;
					}
				}
			);
			*/
			console.log(userAccountObj[0].password);
			console.log( (userAccountObj[0].password === passwordAttempt) ? true : false );
		}
	} 

	verifyAccountPassword(123, 'qwerty');