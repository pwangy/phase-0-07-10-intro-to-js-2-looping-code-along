// for ([initialization]; [condition]; [iteration]) {
//     [loop body]
//   }
function writeCards(names, eventName) {
	let messages = []
	for (let i = 0; i < names.length; i++) {
		messages.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`)
	}

	return messages
}

writeCards(['Charlie', 'Eva', 'Sam'], 'birthday')

// while ([condition]) {
// 	[loop body]
//   }
let num = 5

function countDown(num) {
	while (num > -1){
		debugger
		console.log(num--)
	}
}
