const tw = (...restItems) => {
	let data = '';
	const lists = [...restItems];

	lists.forEach((list, idx) => {
		if (idx !== 0) {
			data = data.concat(' ', list);
			return;
		}

		data = data.concat(list);
	});

	return data;
};

export default tw;
