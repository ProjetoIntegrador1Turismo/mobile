import { Tourist } from "src/common/models/tourist.model";

export interface Comment {
    id: number;
    text: string;
    wasVisitingDate: string;
    rating: number;
    tourist: Tourist;
}
