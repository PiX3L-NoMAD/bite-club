import type { Restaurant } from "../types/Restaurant";

export default function ResultsPage({ restaurants }: { restaurants: Restaurant[] }) {

    return (
        <div className="results-page">
            {restaurants.map((restaurant) => (
                <div key={restaurant.id} className="restaurant-card bg-gray-800 p-4 rounded mb-4 text-left">
                    <p className="text-lg text-white-700"><b>Restaurant Name:</b> {restaurant.restaurantName}</p>
                    <p className="text-lg text-white-700"><b>Rating:</b> {restaurant.rating}</p>  
                    <p className="text-lg text-white-700"><b>Address:</b> {restaurant.address.firstLine}, {restaurant.address.postalCode} {restaurant.address.city}</p>
                    <p className="text-lg text-white-700"><b>Cuisines:</b> {restaurant.cuisines.join(', ')}</p>
                </div>
            ))}
        </div>
    );
}