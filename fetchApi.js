require('dotenv').config();
const regExp = /[a-zA-Z]/g;
const config = {
	headers: { Authorization: `Bearer ${process.env.INSEE_TOKEN}` },
};
async function fetchApi(params) {
	console.log(params);
	let url = `${process.env.INSEE_URL}`;
	//let url = `${process.env.ENTREPRISE_URL}?api_token=${process.env.API_TOKEN}&par_page=30&precision=exacte`;
	if (params.siret) {
		url += +`siret:"${params.siret}"`;
	} else if (params.siren) {
		url += `siren:"${params.siren}"`;
	} else if (params.q) {
		const queryNameWords = params.q.split(' ');
		url += `(denominationUniteLegale:"${queryNameWords[0]}" OR denominationUniteLegale:*${queryNameWords[0]}*)`;
		queryNameWords.forEach((w, i) => {
			if (i !== 0) {
				url += ` AND (denominationUniteLegale:*${queryNameWords[i]}*)`;
			}
		});
	}
	if (params.code_postal) {
		url += ` AND (codePostalEtablissement:${params.code_postal}*)`;
	}
	const response = await fetch(url, config);
	const data = await response.json();

	return data.etablissements;
}

module.exports = fetchApi;
