export type Restaurant = {
    id: number;
    restaurantName: string;
    address: {
        firstLine: string;
        postalCode: string;
        city: string;
    };
    cuisines: string[];
    rating: number;
};