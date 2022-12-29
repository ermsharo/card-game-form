export const getIdList = () => {
	let idList = localStorage.getItem('idList');
	if (idList === null) {
		return [];
	}
	return JSON.parse(idList);
};

export const getLastId = () => {
	let referenceIdList = getIdList();
	if (referenceIdList == null) {
		return 0;
	}
	let reference = getIdList();
	if (reference.length == 0) return 0;
	reference.sort();
	return parseInt(reference.slice(-1));
};

export const addId = () => {
	let nextId = getLastId() + 1;
	let idList: string[] = getIdList();
	let reference: string[] = [];
	reference.push(nextId.toString());
	localStorage.setItem('idList', JSON.stringify(reference.concat(idList)));
};

export const createCardObj = (
	id: number,
	name: string,
	description: string,
	atack: number,
	defense: number,
	cardType: string,
	cardClass: string
) => {
	return {
		id: id,
		name: name,
		description: description,
		atack: atack,
		defense: defense,
		cardType: cardType,
		cardClass: cardClass
	};
};

export const createCard = (
	name: string,
	description: string,
	atack: number,
	defense: number,
	cardType: string,
	cardClass: string
) => {
	let nextId = getLastId() + 1;
	addId();
	localStorage.setItem(
		nextId.toString(),
		JSON.stringify(createCardObj(nextId, name, description, atack, defense, cardType, cardClass))
	);
};
