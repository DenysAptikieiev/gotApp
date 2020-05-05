export default class GotService {
    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }
   async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);
    
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status ${res.status}`);
        };
    
        return await res.json();
    };
    getAllCharacters() {
        return this.getResource(`/characters?page=5&pageSize=10`);
    }
    getCharacter(id) {
        return this.getResource(`/characters/${id}`);
    }
    getAllHouses() {
        return this.getResource(`/houses`);
    }
    getHouse(id) {
        return this.getResource(`/houses/${id}`);
    }
    getAllBooks() {
        return this.getResource(`/books`);
    }
    getBook(id) {
        return this.getResource(`/books/${id}`);
    }
};

const got = new GotService();

got.getAllCharacters()
    .then(res => res.forEach(element => console.log(`Персонажи: ${element.name}`)));
got.getCharacter(500)
    .then(res => console.log(`Персонаж: ${res.name} с титулом: ${res.titles}`));

got.getAllHouses()
    .then(res => res.forEach(elem => console.log(`Дома: ${elem.name}`)));
got.getHouse(260)
    .then(res => console.log(`Name house: ${res.name}, region: ${res.region}`));

got.getAllBooks()
    .then(res => res.forEach(elem => console.log(`Книги: ${elem.name}`))); 
got.getBook(10)
    .then(res => console.log(`Name book: ${res.name} country: ${res.country}`));


