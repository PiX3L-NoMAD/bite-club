import axios from 'axios';
const api = 'http://localhost:3000/api/restaurants?postcode={postcode}';

function getRestaurantsByPostcode(postcode: string) {
    postcode = postcode.replace(/\s/g, '').toLowerCase();
    return axios.get(api.replace('{postcode}', postcode))
        .then(response => {
            console.log(response.data);
            return response.data;
        }).catch(error => {
            console.error(error);
            throw error;
        });
}

export default getRestaurantsByPostcode;