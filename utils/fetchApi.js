import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'




export const fetchApi = async (url) => {
    const {data} = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
    'x-rapidapi-key': '025b5f6f6dmsh4fe61b020220073p1f7b55jsnaf525251c7a7',
        }
    });
    return data;
}