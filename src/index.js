const messages = ["Alfonso", "Pedro", "Paula", "Carolina", "Leonardo", "Ana", "Nicolas", "Diego", "Laura", "Yessica"];

const randomMsg = () => {
	const message = messages[Math.floor(Math.random() * messages.length)];

	console.log(message);
};

module.exports = { randomMsg };
