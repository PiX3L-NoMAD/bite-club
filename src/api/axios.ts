import axios from 'axios';
import type { Restaurant } from '../types/Restaurant';

const api = 'http://localhost:3000/api/restaurants?postcode={postcode}';

function getRestaurantsByPostcode(postcode: string) {
    return axios.get(api.replace('{postcode}', postcode))
        .then(response => {
            const data = response.data;
            const first10 = data.slice(0, 10);
            const tranformed = first10.map((r: any) => ({
                id: r.id,
                restaurantName: r.name,
                address: {
                    firstLine: r.address.firstLine,
                    postalCode: r.address.postalCode,
                    city: r.address.city
                },
                cuisines: r.cuisines.map((cuisine: any) => cuisine.name),
                rating: r.rating.starRating
            })) as Restaurant[];
            return tranformed;
        }).catch(error => {
            console.error(error);
            throw error;
        });
 
}

export default getRestaurantsByPostcode;