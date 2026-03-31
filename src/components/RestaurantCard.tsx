import type { Restaurant } from "../types/Restaurant";

export default function RestaurantCard({ restaurant }: { restaurant: Restaurant }) {

    return (
        <article className="restaurant-card h-full overflow-hidden rounded-3xl border border-slate-700/50 bg-slate-950/90 p-6 shadow-md">
            <div className="flex h-full flex-col justify-between gap-4">
                    <p className="text-sm uppercase text-slate-400">
                        Rating {restaurant.rating}
                    </p>
                <div>
                    <h3 className="mt-3 text-xl font-semibold text-white">
                        {restaurant.restaurantName}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                        {restaurant.cuisines.join(', ')}
                    </p>
                </div>
                <div className="text-sm leading-6 text-slate-400">
                    <p>{restaurant.address.firstLine}</p>
                    <p>{restaurant.address.postalCode}</p>
                </div>
            </div>
        </article>
    );
}