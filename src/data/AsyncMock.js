import products from './products.mock.json';
import categories from './categories.mock.json';

const mockDelay = 3000;

export const getProducts = (category) => {
    return new Promise( (res) => {
        setTimeout( () => {
            category    ? res(products.filter( (item) => category === item.category ))
                        : res(products);
        }, mockDelay);
    });
};

export const getProduct = (id) => {
    return new Promise( (res) => {
        setTimeout( () => {
            res(products.find( (item)=> id === item.id ));
        }, mockDelay);
    });
};

export const getCategories = () => {
    return new Promise( (res) => {
        setTimeout( () => res(categories), mockDelay - (mockDelay / 3) );
    });
};
