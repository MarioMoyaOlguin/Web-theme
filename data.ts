export interface Items {
    picPath:string;
    category:string;
    url:string;
}

interface FilterButton {
    title:string;
    active:boolean;
}

export interface pricing {
    plan:string;
    type:string;
    cost:string;
    users:string;
    projects:string;
    bandwidth:string;
    storage:string;
    id:string;
}

interface testimonialData {
    id:string;
    text:string;
    picPath:string;
    name:string;
}

export const tables:pricing[] = [
    {
        plan: "Monthly", type: "intro", cost: "3", users: "3", projects: "5",
        bandwidth: "100GB", storage: "5GB", id: "1"
    },
    {
        plan: "Monthly", type: "studio", cost: "10", users: "10", projects: "20",
        bandwidth: "500GB", storage: "5GB", id: "2"
    },
    {
        plan: "Monthly", type: "agency", cost: "20", users: "20", projects: "Unlimited",
        bandwidth: "1TB", storage: "50GB", id: "3"
    },
    {
        plan: "Yearly", type: "intro", cost: "30", users: "3", projects: "5",
        bandwidth: "100GB", storage: "1TB", id: "4"
    },
    {
        plan: "Yearly", type: "studio", cost: "100", users: "10", projects: "20",
        bandwidth: "500GB", storage: "10TB", id: "5"
    },
    {
        plan: "Yearly", type: "agency", cost: "200", users: "20", projects: "Unlimited",
        bandwidth: "1TB", storage: "50GB", id: "6"
    }
]


export const buttons:FilterButton[] = [
    {
        title: "all",
        active: true
    },
    {
        title: "photography",
        active: false
    },
    {
        title: "video",
        active: false
    },
    {
        title: "web design",
        active: false
    }
]

export const FeaturedWorksItems:Items[] = [
    {
        picPath: 'https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_1280.jpg',
        category: "photography",
        url: "https://pixabay.com/images/search/wallpaper/"
    },
    {
        picPath: "https://cdn.pixabay.com/photo/2016/09/29/13/08/planet-1702788_1280.jpg",
        category: "photography",
        url: "https://pixabay.com/images/search/wallpaper/"
    },
    {
        picPath: "https://cdn.pixabay.com/photo/2017/10/10/07/48/hills-2836301_1280.jpg",
        category: "photography",
        url: "https://pixabay.com/images/search/wallpaper/"
    },
    {
        picPath: "https://cdn.pixabay.com/photo/2017/03/02/16/54/iceland-2111811_1280.jpg",
        category: "video",
        url: "https://www.youtube.com/"
    },
    {
        picPath: "https://cdn.pixabay.com/photo/2017/10/05/09/05/railway-2818748_1280.jpg",
        category: "video",
        url: "https://www.youtube.com/"
    },
    {
        picPath: "https://cdn.pixabay.com/photo/2018/02/03/08/00/background-3127102_1280.jpg",
        category: "video",
        url: "https://www.youtube.com/"
    },
    {
        picPath: "https://cdn.pixabay.com/photo/2014/02/26/21/25/jellyfish-275576_1280.jpg",
        category: "web design",
        url: "https://nextjs.org/"
    },
    {
        picPath: "https://cdn.pixabay.com/photo/2020/04/11/08/26/lake-5029360_1280.jpg",
        category: "web design",
        url: "https://nextjs.org/"
    }
];


export const TestimonialsArr:testimonialData[] = [
    { 
        id: "1",
        text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"',
        picPath: "1rfA_3IbAqlsx9fLUYTmNAKKvn4nR0rsg",
        name: "Nasus / Shrima CO. LLC"
    },
    {
        id: "2",
        text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"',
        picPath: "1mgYZt0MY83lIyrVTxOI6N-6GqfrQh923",
        name: "Bondrewd the Novel / Abbyss Dewllers"
    },
    {
        id: "3",
        text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"',
        picPath: "1inGw2MkXkCIco0FlL7TCX--2F116Kaeq",
        name: "Gintoki / Parody Inc."
    },
    {
        id: "4",
        text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"',
        picPath: "1m1tzC78Cha3eZAFGdUnnudhVPOz6Q-Br",
        name: "Gg Cat / Freelancer Web D."
    },
    {
        id: "5",
        text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"',
        picPath: "1wUvqlVsrsWVVnPe6oneNoDSXmuM6kk9i",
        name: "Roy / Ositia Kingdom"
    },
    {
        id: "6",
        text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"',
        picPath: "1R6AfIwlo2-ABG4mNgAcwSA6LRDHYJAcX",
        name: "Pcell / Silicon Society"
    },
]
