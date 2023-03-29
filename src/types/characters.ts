export type Character = {
    id: string;
    name: string;
    status: string;
    species: string;
    gender: string;
    image: string;
    origin: {
        name: string;
        dimension: string;
    };
}

export type ApolloClientResponse = {
    characters: {
        results: Array<Character>
    }
}
