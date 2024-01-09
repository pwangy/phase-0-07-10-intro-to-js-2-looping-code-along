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

// function countDown() {
// create a while loop
// }
