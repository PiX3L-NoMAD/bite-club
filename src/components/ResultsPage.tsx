import type { Restaurant } from "../types/Restaurant";
import RestaurantCard from "./RestaurantCard";

export default function ResultsPage({ restaurants, postcodeInput }: { restaurants: Restaurant[]; postcodeInput: string }) {

    return (
        <div className="results-page px-4 pb-10 sm:px-6 md:px-8">
            <div className="mx-auto max-w-7xl">
                <h2 className="mb-6 text-base font-semibold uppercase dark:text-slate-300 text-slate-600">
                    Showing {restaurants.length} restaurants near <i className="text-gray-500 dark:text-gray-400">{postcodeInput}</i>
                </h2>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3 mt-4">
                    {restaurants.map((restaurant) => (
                        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
                    ))}
                </div>
            </div>
        </div>
    );
}