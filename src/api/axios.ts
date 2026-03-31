import axios from 'axios';
import type { Restaurant } from '../types/Restaurant';

const api = 'http://localhost:3000/api/restaurants?postcode={postcode}';

function getRestaurantsByPostcode(postcode: string) {
    return axios.get(api.replace('{postcode}', postcode))
        .then(response => {
            const data = response.data;
            const first10 = data.slice(0, 10);
            const tranformed = first10.map((r: any) => {
                const rawFirstLine = r.address.firstLine || '';
                const city = (r.address.city ?? '').trim();
                const partsFirstLine = rawFirstLine.split(',').map((part: string) => part.trim());
                let firstLine = rawFirstLine.trim();

                if (partsFirstLine.length > 1 && partsFirstLine[partsFirstLine.length - 1].toLowerCase() === city.toLowerCase()) { // if the last part of the first line is the same as the city, remove it
                    firstLine = partsFirstLine.slice(0, -1).join(', ');
                }

                if (firstLine.endsWith(',')) { 
                    firstLine = firstLine.slice(0, -1).trim(); 
                }

                const rawName = r.name || '';
                const nameWords = rawName.trim().split(' ').filter(Boolean);
                let restaurantName = rawName.trim();

                if (nameWords.length > 1) {
                    const lastWord = nameWords[nameWords.length - 1].toLowerCase();
                    const lastAddressPart = partsFirstLine[partsFirstLine.length - 1]?.toLowerCase();

                    if (lastAddressPart && lastAddressPart.includes(lastWord)) {
                        nameWords.pop();
                        restaurantName = nameWords.join(' ').trim();
                    }
                }

                restaurantName = restaurantName.replace(/[-–—\s]+$/, '').trim();

                return {
                    id: r.id,
                    restaurantName,
                    address: {
                        firstLine,
                        postalCode: r.address.postalCode,
                        city: r.address.city,
                    },
                    cuisines: r.cuisines.map((cuisine: any) => cuisine.name),
                    rating: r.rating.starRating.toFixed(1), 
                };
            }) as Restaurant[];
            return tranformed;
        }).catch(error => {
            console.error(error);
            throw error;
        });
 
}

export default getRestaurantsByPostcode;