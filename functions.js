const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?';
const API_KEY = '8ee633956bad6ae1965b557a94ecfcba';

const getForcast = async (city) => {
    try {
        const options = {
            params: {
                q: city,
                lang: 'he',
                appid: API_KEY,
                units: 'metric'
            }
        };
        const res = await axios.get(`${baseUrl}`, options);
        return res.data;
    } catch(error){
        console.log(error);
    }
};

export { getForcast };