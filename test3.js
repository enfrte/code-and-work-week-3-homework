/*const all_users = [{"id":123,"name":"Leon Ford","balance":"23","password":"qwerty","fund_requests":[]},{"id":1585668001215,"name":"Tarja Ford","balance":"2000","password":"qwerty","fund_requests":[]}];
const foo = all_users.find( (value, index, arr) => {
	console.log( arr[index].id === 123 );
	if (arr[index].id === 123) {
		return index;
	} 
}, 123);

console.log(foo);

const arrayIndex = all_users.findIndex(obj => obj.id === 1585668001215);
*/
const arr = [{id: 1},{id: 2}];
const newArr = {id: 123};
arr[0] = newArr;
arr;
const m = arr.map((val) => console.log(val.id + 1))
arr;