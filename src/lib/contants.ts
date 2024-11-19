
interface Logo {
    image: string;
    description: string;
}

interface Product {
    image: string;
    name: string;
    price: number;
}

export interface CustomerValues {
    image: string;
    balance: number;
    revenue: number;
}

export interface FeatureValues {
    title: string;
    description: string;
    image: string;
}

export const logos: Logo[] = [
    {
        image: '../../public/media24-logo.png',
        description: 'media24 company logo image'
    },
    {
        image: '../../public/smart-logo.png',
        description: 'smart company logo image'
    },
    {
        image: '../../public/icom-logo.png',
        description: 'icom company logo image'
    },
    {
        image: "../../public/westin's-logo.png",
        description: "westin's guest office company logo image"
    },

]

export const products: Product[] = [
    {
        image: '../../public/chair.png',
        name: 'Minimal chair',
        price: 204
    },
    {
        image: '../../public/headphone.png',
        name: 'Beats headphone',
        price: 74
    }
]

export const features: FeatureValues[] = [
    {
        title: 'fasion store',
        description: 'Shope ladies fashion at missguided USA with hundered of new styles hitting our shelves every week.',
        image: '../../public/girl.webp'
    },
    {
        title: 'home furnature',
        description: 'Proivde superior quality furnature and mattresses at a price that customers can easily afford.',
        image: '../../public/furnature.jpg',
    },
    {
        title: 'super gadget store',
        description: 'Specialise in selling unique gifts, cool gadgets, outdoor gear and fab toys.',
        image: '../../public/man.jpg'
    }
]

export const customers: CustomerValues[] = [
    {
        image: '../../public/customer-1.jpg',
        balance: 7654,
        revenue: 232,
    },
    {
        image: '../../public/customer-2.jpg',
        balance: 9987,
        revenue: 349,
    }
]