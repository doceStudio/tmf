require('dotenv').config();
const regExp = /[a-zA-Z]/g;

async function getData(params) {
	const rawParams = params;
	const apiParams = {};
	const splitParams = rawParams.split(' ');
	let companyName;
	let companyPostalCode,companyDepartment, companySiret, companySiren;

	splitParams.forEach((element) => {
		if (regExp.test(element)) {
			companyName ? (companyName = companyName + ` ${element}`) : (companyName = element);
		} else if (element.length === 5) {
			companyPostalCode = element;
		} else if (element.length === 2) {
			companyDepartment = element;
		} else if (element.length === 9) {
			companySiren = element;
		} else if (element.length === 14) {
			companySiret = element;
		}
	});
	if (companyName) apiParams.q = companyName;
	if (companyPostalCode) apiParams.code_postal = companyPostalCode;
	if (companyDepartment) apiParams.departement = companyDepartment;
	if (companySiren) apiParams.siren = companySiren;
	if (companySiret) apiParams.siret = companySiret;

	return apiParams;
}

module.exports = getData;
