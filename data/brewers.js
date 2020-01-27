const v60 = {
    id: 'v60',
    name: 'Hario V60',
    image: 'v60.png',
    description: 'The most popular method for control-obsessed coffee snobs.',
    category: 'Pour Over',
    price: 20.00,
};

const chemex = {
    id: 'chemex',
    name: 'Chemex',
    image: 'chemex.png',
    description: 'Slightly more user-friendly than the V60.',
    category: 'Pour Over',
    price: 30.00,
};

const aeropress = {
    id: 'aeropress',
    name: 'Aerobie Aeropress',
    image: 'aeropress.png',
    description: 'Versatile and portable. No gooseneck kettle required!',
    category: 'Immersion',
    price: 25.00,
};

const clever = {
    id: 'clever',
    name: 'Clever Coffee Dripper',
    image: 'clever.png',
    description: 'A cleaner-tasting alternative to french press.',
    category: 'Immersion',
    price: 20.00,
};

const frenchPress = {
    id: 'french-press',
    name: 'French Press',
    image: 'french-press.png',
    description: 'Full-bodied, easy to brew and yielding consistent results, this is the most widely used brew method.',
    category: 'Immersion',
    price: 20.00,
};

const kalita = {
    id: 'kalita',
    name: 'Kalita Wave',
    image: 'kalita.png',
    description: 'Use multiple pours to yield a clear and complex brew.',
    category: 'Pour Over',
    price: 40.00,
};

// const siphon = {
//     id: 'siphon',
//     name: 'Siphon',
//     image: 'siphon.png',
//     description: 'Are you the coolest person you know? The siphon is the perfect super-hipster option for you.',
//     category: 'Pour Over',
//     price: 82.00,
// };

const coldBrew = {
    id: 'cold-brew',
    name: 'Hario Mizudashi Cold Brew',
    image: 'cold-brew.png',
    description: 'Brew coarsely ground coffee slowly in cold water with this method. Heavy-bodied.',
    category: 'Cold Brew',
    price: 35.00,
};


const brewers = [
    v60,
    chemex,
    aeropress,
    clever,
    frenchPress,
    kalita,
    // siphon,
    coldBrew,
];




export default brewers;