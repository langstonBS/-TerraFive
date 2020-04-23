
const pittockMansion = {
    id: 'pittockMansion',
    name: 'Pittock Mansion & the Witch\'s Castle',
    image: '../assets/map/googleMap-images/pittockMansion_tight.JPG',
    thumbnail: '../assets/witch-castle.jpg',
    description: `
        This hike takes you from Pittock Mansion's sweeping views, through the woods to the Witch's Castle, and down 23rd for food and shooping.
        `,
    quadrant: 'Northwest',
    distance: 5.70,
    season: 'all',
    views: true,
    weirdness: 9,
    attractions: [{
        name: 'Freakybuttrue Peculiarium',
        description: 'An oddities museum',
        address: '2234 NW Thurman'
    }]
};

const stJohns = {
    id: 'stJohns',
    name: 'St. John\'s',
    image: '../assets/map/googleMap-images/forestPark_tight.JPG',
    thumbnail: '../assets/forestPark.jpg',
    description: `
        This hike takes you through Forest Park, over the St. John's Bridge, through Cathedral Park, and down Lombard St for food and shopping.
        `,
    quadrant: 'Northwest',
    distance: 15.80,
    season: 'all',
    views: true,
    weirdness: 4,
    attractions: [{
        name: 'Cathedral Park',
        description: 'Site of many festivals, concerts, and community events.',
        address: 'N Edison St and Pittsburg Ave'
    }]
};

const washingtonPark = {
    id: 'WashingtonPark',
    name: 'Washington Park',
    image: '../assets/map/googleMap-images/washingtonPark_tight.JPG',
    thumbnail: '../assets/WashingtonParkArboretum.jpg',
    description: `
        This hike takes you through Washington Park's Japanese and Rose Gardens, and down Burnside to the Pearl district for food and shopping.
        `,
    quadrant: 'Northwest',
    distance: 8.10,
    season: 'all',
    views: true,
    weirdness: 10,
    attractions: [
        {
            name: 'Peculiarium',
            description: 'An oddities museum',
            address: '2234 NW Thurman'
        },
        {
            name: 'Powells Books',
            description: 'The world\'s largest independent bookstore.',
            address: '1005 W Burnside St'
        },
        {
            name: 'Portland Art Museum',
            description: 'Portland\'s art museum.',
            address: '1219 SW Park Ave'
        },
        {
            name: 'Ground Kontrol',
            description: 'Arcade with bar and eats.',
            address: '115 NW 5th Ave'
        },
        {
            name: 'Saturday Market',
            description: 'Open air market featuring local handmade goods.',
            address: '2 SW Naito Pkwy'
        },
        {
            name: 'Voodoo Donuts',
            description: 'Portland\'s weirdest donut shop.',
            address: '22 SW 3rd'
        },
        {
            name: 'Shanghai Tunnels',
            description: 'Portland\'s underground.',
            address: '120 NW 3rd Ave'
        }
    ]
};

const alberta = {
    id: 'alberta',
    name: 'Alberta',
    image: '../assets/map/googleMap-images/albertaPark_tight.JPG',
    thumbnail: '../assets/albertaPark.jpg',
    description: `
        This hike takes you through Alberta Park, down Alberta St for shopping, and over to the Kennedy School for food and drinks.
        `,
    quadrant: 'Northeast',
    distance: 3.30,
    season: 'all',
    views: false,
    weirdness: 7,
    attractions: [
        {
            name: 'Kennedy School',
            description: 'An old schoolhouse converted into shops, bars, restaurants, and a theatre',
            address: '5736 NE 33rd'
        },
        {
            name: 'Alberta Art Walk',
            description: 'Last Thursday art walk down Alberta St',
            address: '2738 NE Alberta St'
        }
    ]
};

const laurelhurst = {
    id: 'laurelhurst',
    name: 'Laurelhurst',
    image: '../assets/map/googleMap-images/laurelhurstPark_tight.JPG',
    thumbnail: '../assets/laurelhurstPark.jpg',
    description: `
        This hike takes you through Laurelhurst Park, over to Lone Fir Cemetary for some curious headstone viewing, and down Belmont St for food and drinks.
        `,
    quadrant: 'Southeast',
    distance: 3.20,
    season: 'all',
    views: false,
    weirdness: 6,
    attractions: [
        {
            name: 'Lone Fir Cemetery',
            description: 'Check out the headstones of Dead Moon drummer Andrew Loomis',
            address: 'SE 26th Ave & Stark Street, Block 20 Lot 30 G3N'
        },
        {
            name: 'Lone Fir Cemetery',
            description: 'Check out the headstone of Anne Jeanne Tingry-LeCoz, a prostitue whose eyes were removed to see if they preserved an image of her killer.',
            address: 'SE 26th Ave & Stark Street, Block 20, Lot 18, 2S'
        }
    ]
};

const roseCityPark = {
    id: 'roseCityPark',
    name: 'Rose City Park',
    image: '../assets/map/googleMap-images/roseCityPark_tight.JPG',
    thumbnail: '../assets/hollywood-theatre.jpg',
    description: `
        This hike takes you through Rose City Park and over to Portland's Hollywood neighborhood for food and shopping.
        `,
    quadrant: 'Northeast',
    distance: 4.20,
    season: 'all',
    views: false,
    weirdness: 4,
    attractions: [
        {
            name: 'Hollywood Theatre',
            description: 'A prohibition-era movie house',
            address: '4122 NE Sandy Blvd'
        }
    ]
};

const peninsulaPark = {
    id: 'peninsulaPark',
    name: 'Peninsula Park',
    image: '../assets/map/googleMap-images/peninsulaPark_tight.JPG',
    thumbnail: '../assets/peninsulaPark.jpg',
    description: `
        This hike takes you through Peninsula Park, down Mississippi Ave for shopping and food, and over to the Alibi for karaoke.
        `,
    quadrant: 'Northeast',
    distance: 4.30,
    season: 'all',
    views: false,
    weirdness: 5,
    attractions: [
        {
            name: 'Alibi Tiki Lounge',
            description: 'Restaurant and bar, with island-themed murals, housing the city\'s best karaoke.',
            address: '4024 N Interstate Ave'
        }
    ]
};

const kentonPark = {
    id: 'kentonPark',
    name: 'Kenton Park',
    image: '../assets/map/googleMap-images/kentonPark_tight.JPG',
    thumbnail: '../assets/kentonPark.jpg',
    description: `
        This hike takes you through Kenton Park, loops through N Brandon and Denver Aves, and over to the Kenton Club for some serious dive bar shenanigans.
        `,
    quadrant: 'Northeast',
    distance: 1.40,
    season: 'all',
    views: false,
    weirdness: 3,
    attractions: [
        {
            name: 'Paul Bunyan Statue',
            description: 'A large novelty statue erected in 1959.',
            address: 'N Interstate Ave and N Denver Ave'
        }
    ]
};

const tryonCreek = {
    id: 'tryonCreek',
    name: 'Tryon Creek',
    image: '../assets/map/googleMap-images/tryonCreek_tight.JPG',
    thumbnail: '../assets/tryonCreek.jpg',
    description: `
        Tryon Creek State Nature Area, home to more than 50 species of birds and mammals, includes hiking and horse trails as well as a bike path.
        `,
    quadrant: 'Southwest',
    distance: 4.80,
    season: 'all',
    views: false,
    weirdness: 2,
    attractions: [
        {
            name: 'Lewis and Clark College',
            description: 'Beautiful campus with city views.',
            address: '0615 SW Palatine Hill Rd',
        },
        {
            name: 'Fireart Glass',
            description: 'Fine art glass-crafting studio.',
            address: '9436 SW Terwilliger Blvd',
        },
        {
            name: 'NOLA Doughnuts',
            description: 'New Orleans-inspired pastry creations',
            address: '365 N State St, Lake Oswego',
        }
    ]
};

const marquamNaturePark = {
    id: 'marquamNaturePark',
    name: 'Marquam Nature Park',
    image: '../assets/map/googleMap-images/marquamPark_tight.JPG',
    thumbnail: '../assets/marquamNaturePark.jpg',
    description: `
        Marquam Nature Park is the "Trail" segment of the 40-Mile Loop "4T" system which connects other natural areas throughout the metropolital area.
        `,
    quadrant: 'Southwest',
    distance: 4.40,
    season: 'all',
    views: true,
    weirdness: 2,
    attractions: [
        {
            name: 'Portland Aerial Tram',
            description: 'Sweeping city views.',
            address: '3303 SW Bond Ave',
        },
        {
            name: 'Willamette River',
            description: 'The aquatic division between the west and east sides of Portland.',
            address: '',
        },
        {
            name: 'Tilikum Crossing',
            description: 'Cable-stayed bridge spanning the Willamette River.',
            address: '',
        }
    ]
};

const gabrielPark = {
    id: 'gabrielPark',
    name: 'Gabriel Park',
    image: '../assets/map/googleMap-images/gabrielPark_tight.JPG',
    thumbnail: '../assets/gabrielPark.jpg',
    description: `
        Gabriel Park is a wooded public area featuring sports fields and courts, as well as an indoor athletic facility, located between several adjacent residential neighborhoods.
        `,
    quadrant: 'Southwest',
    distance: 2.10,
    season: 'all',
    views: false,
    weirdness: 2,
    attractions: [
        {
            name: 'Gabriel Dog Park',
            description: 'Big ole dog park.',
            address: '4115 SW Canby St',
        },
        {
            name: 'Multnomah Village',
            description: 'Pedestrian-friendly hamlet of shops',
            address: '7837 SW Capitol Hwy',
        },
        {
            name: 'Sasquatch Brewing',
            description: 'Beer.',
            address: '6440 SW Capitol Hwy',
        },
    ]
};

const laddsAddition = {
    id: 'laddsAddition',
    name: 'Ladd\'s Addition',
    image: '../assets/map/googleMap-images/laddsAddition_tight.JPG',
    thumbnail: '../assets/laddsAddition.jpg',
    description:
        `Ladd's Addition is one of the oldest planned residential developments in the western United States, and features a curiously walkable diagonal street pattern which surrounds four diamond-shaped rose test gardens.
        `,
    quadrant: 'Southeast',
    distance: 5.80,
    season: 'all',
    views: false,
    weirdness: 4,
    attractions: [
        {
            name: 'OMSI',
            description: 'Big ole science museum.',
            address: '1945 SE Water Ave',
        },
        {
            name: 'Eastbank Esplanade',
            description: 'River walkin\'.',
            address: 'SE Salmon St',
        },
        {
            name: 'Kidds Toy Museum',
            description: 'TOYS.',
            address: '1301 SE Grand Ave',
        }
    ]
};

const mountTabor = {
    id: 'mountTabor',
    name: 'Mount Tabor',
    image: '../assets/map/googleMap-images/mountTabor_tight.JPG',
    thumbnail: '../assets/mountTabor.jpg',
    description: `
    Mount Tabor is an extinct cinder cone volcano with four reservoirs along its slopes and features numerous paths around the perimeter with a wonderful view of the city.
    `,
    quadrant: 'Southeast',
    distance: 6.80,
    season: 'all',
    views: true,
    weirdness: 6,
    attractions: [
        {
            name: 'Hawthorne Division',
            description: 'Stuff to see and do.',
            address: '',
        },
        {
            name: 'Movie Madness',
            description: 'Movie artifacts.',
            address: '4320 SE Belmont St',
        },
        {
            name: 'Zymoglyphic Museum',
            description: 'Strange art.',
            address: '6225 SE Alder St',
        }
    ]
};

const crystalSprings = {
    id: 'crystalSprings',
    name: 'Crystal Springs',
    image: '../assets/map/googleMap-images/westmorelandPark_tight.JPGba',
    thumbnail: '../assets/CrystalSpringsRhododendronGardenPortland.jpg',
    description: `
    Walk through the Crystal Springs Rhododendron Garden and check out shops and food along Woodstock.
    `,
    quadrant: 'Southeast',
    distance: 6.20,
    season: 'all',
    views: false,
    weirdness: 5,
    attractions: [
        {
            name: 'Woodstock Mystery Hole',
            description: 'Strange hole, explore if you dare.',
            address: '4326 SE Woodstock Blvd',
        }
    ]
};

const oaksBottom = {
    id: 'oaksBottom',
    name: 'Oaks Bottom',
    image: '../assets/map/googleMap-images/oaksBottom_tight.JPG',
    thumbnail: '../assets/OaksBottom.jpg',
    description: `
    This hike takes you through the wildlife refuge, past the amusement park, and down 13th for shopping and food.
    `,
    quadrant: 'Southeast',
    distance: 5.30,
    season: 'all',
    views: true,
    weirdness: 5,
    attractions: [
        {
            name: 'Portland Puppet Museum',
            description: 'Strange home of creepy puppets.',
            address: '906 SE Umatilla St',
        },
        {
            name: 'Oaks Amusement Park',
            description: 'Circus fun!',
            address: '7805 SE Oaks Park Way',
        }
    ]
};

const cityHikesData = [
    pittockMansion,
    stJohns,
    washingtonPark,
    alberta,
    laurelhurst,
    roseCityPark,
    peninsulaPark,
    kentonPark,
    tryonCreek,
    marquamNaturePark,
    gabrielPark,
    laddsAddition,
    mountTabor,
    crystalSprings,
    oaksBottom
];

export default cityHikesData;