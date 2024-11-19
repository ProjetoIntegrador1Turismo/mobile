
import { CategoryCardProps } from '~/src/components/CategoryCardList/CategoryCard/CategoryCard.types'

import categoryHotelImg from '~/assets/category-card-hotel.png'
import categoryExperienceImg from '~/assets/category-card-experience.png'
import categoryEventImg from '~/assets/category-card-event.png'
import categoryTouristPointlImg from '~/assets/category-card-tourist-point.png'
import categoryRestaurantImg from '~/assets/category-card-restaurant.png'
import { useAppRouter } from '~/src/common/lib/router'
import { fetchPaginatedPoints } from '~/src/common/repositories/paginated/paginated.repository'

export const CategoryCardData: CategoryCardProps[] = [
    { title: 'Hotel', imgSource: categoryHotelImg },
    { title: 'Experiência', imgSource: categoryExperienceImg },
    { title: 'Evento', imgSource: categoryEventImg },
    { title: 'Ponto Turístico', imgSource: categoryTouristPointlImg },
    { title: 'Restaurante', imgSource: categoryRestaurantImg },
]

//Direciona para a tela paginada enviando o parâmetro necessário para a rota da API
export function onPressCategoryCard(){
    const { push } = useAppRouter();    
    async function handlePressCategoryCard(title: string) {
        push(`/(search)/paginated?pointType=${title}`)        
    }
    return {
        handlePressCategoryCard,
    };
};