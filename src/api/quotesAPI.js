import Axios from "axios";

const quotesAPI = Axios.create({
	baseURL: "https://api.adviceslip.com",
});

const getAdvice = async () => {
	try {
		const { data } = await quotesAPI.get("/advice");
		console.log(data);
		return data;
	} catch (error) {
		console.log(error);
	}
};

export { getAdvice };
