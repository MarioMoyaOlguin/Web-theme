import { FeaturedWorksItems, Items } from '../data';


export const filterByCat = (category:string) => {
    
    const filtered = FeaturedWorksItems.filter( (item:Items) => {
        if (item.category === category) {
            return item;
        }
    });

    return filtered
}