//Interface com os dados do ponto de interesse
export interface GenericPoint {
  id: string;
  name: string;
  shortDescription: string;
  imageCoverUrl: string;
  interestPointType: string;
}

//Interface com os dados sobre paginas
export interface Pageable {
  pageNumber: number; //Numero atual da pagina - inicia em 0
  pageSize: number; //Qtd de itens na pagina - padrão é 5
}

// Interface com a resposta "completa" (retirei alguns dados)
export interface PaginatedResponse {
  content: GenericPoint[];
  pageable: Pageable;
  totalElements: number; //Qtd total de itens no banco
  totalPages: number; //Qtd total de paginas
  last: boolean; //É última pagina ?
  numberOfElements: number;
  size: number;
  number: number; //Numero da pagina
  first: boolean;
  empty: boolean;
}

export const pointRouteMapping: Record<string, string> = {
  Hotel: 'hotels',
  Experiência: 'experiences',
  Restaurante: 'restaurants',
  Evento: 'events',
  'Ponto Turistico': 'tourist-points',
};

// {
//     "content": [
//         {
//             "id": 1,
//             "name": "Assalto na Meia noite",
//             "shortDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//             "imageCoverUrl": "http://localhost:8081/uploads/interestpointplaceholder.webp",
//             "interestPointType": "TOURIST_POINT"
//         },
//         {
//             "id": 2,
//             "name": "Cagada nas Cataratas",
//             "shortDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//             "imageCoverUrl": "http://localhost:8081/uploads/interestpointplaceholder.webp",
//             "interestPointType": "TOURIST_POINT"
//         }
//     ],
//     "pageable": {
//         "pageNumber": 0,
//         "pageSize": 2,
//         "sort": {
//             "sorted": false,
//             "unsorted": true,
//             "empty": true
//         },
//         "offset": 0,
//         "paged": true,
//         "unpaged": false
//     },
//     "totalElements": 4,
//     "totalPages": 2,
//     "last": false,
//     "numberOfElements": 2,
//     "size": 2,
//     "number": 0,
//     "sort": {
//         "sorted": false,
//         "unsorted": true,
//         "empty": true
//     },
//     "first": true,
//     "empty": false
// }
