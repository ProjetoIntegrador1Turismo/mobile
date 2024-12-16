export interface CategoryDetailModel {
    content: Content[]
    empty: boolean
    first: boolean
    last: boolean
    number: number
    numberOfElements: number
    pageable: Pageable
    size: number
    sort: Sort2
    totalElements: number
    totalPages: number
  }
  
  export interface Content {
    averageRating: number
    averageValue: number
    id: number
    imageCoverUrl: string
    interestPointType: string
    name?: string
    title?: string
    shortDescription: string
  }
  
  export interface Pageable {
    offset: number
    pageNumber: number
    pageSize: number
    paged: boolean
    sort: Sort
    unpaged: boolean
  }
  
  export interface Sort {
    empty: boolean
    sorted: boolean
    unsorted: boolean
  }
  
  export interface Sort2 {
    empty: boolean
    sorted: boolean
    unsorted: boolean
  }
  