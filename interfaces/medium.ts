export interface Feed {
    url: string;
    title: string;
    link: string;
    author: string;
    description: string;
    image: string;
}

export interface Enclosure {
}

export interface Item {
    title: string;
    pubDate: string;
    link: string;
    guid: string;
    author: string;
    thumbnail: string;
    description: string;
    content: string;
    enclosure: Enclosure;
    categories: string[];
}

export interface Medium {
    status: string;
    feed: Feed;
    items: Item[];
}