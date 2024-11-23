export interface InterestPoint {
    id: number;
    name: string;
    description?: string;
    imageCover: string;

    imageGallery?: string[];
    duration: string;
    priceLevel: number;
}