// цикл по объекту с вложением и проверком на объект, вариант с рекурсией
// определение объекта вынести в отдельную функцию

// const Bob = {
// 	name: 'Bob',
// 	occupation: 'student',
// 	age: 16,
// 	marks: {
// 		biology: 5,
// 		physics: 3,
// 		mathematics: 4,
// 		programming: 5,
// 	},
// 	friend: null,
// };

const user = {
	name: 'Bob',
	occupation: 'student',
	age: 16,
	pets: {
		cat: 'Kitty',
		dog: 'Doggy',
	},
	// friend: Bob,
};

function isObject(value) {
	return typeof value === 'object' && value !== null;
}

for (const prop in user) {
	if (isObject(user[prop])) {
		for (const key in user[prop]) {
			console.log(`${key}: ${user[prop][key]}`);
		}
	}
	console.log(`${prop}: ${user[prop]}`);
}

function log(input) {
	if (!isObject(input)) console.log(input);
	else
		for (const key in input) {
			console.log(`${key}:`);
			log(input[key]);
		}
}
console.log(Jack);
