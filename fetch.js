const url = 'https://api.insee.fr/entreprises/sirene/siret/?q=';
const api_token = '4473a11f-7b54-34e8-bef4-23eedb437479';

const fetchData = async () => {
	const response = await fetch(
		`${url}denominationUniteLegale:"kiloutou"
	`,
		{
			headers: {
				Accept: 'application/json',
				Authorization: `Bearer ${api_token}`,
			},
		}
	);
	const data = await response.json();
	console.log(data);
	// data.resultats.forEach((item) => {
	// 	console.log(item.denomination);
	// });
};

fetchData();
