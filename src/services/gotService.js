export default class GotService {
    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }
   async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) throw new Error(`Could not fetch ${url}, status ${res.status}`);
    
        return await res.json();
    };
    async getAllCharacters() {
        const res = await this.getResource(`/characters?page=5&pageSize=5`);
        return res.map(this._transformCharacter);
    }
    async getCharacter(id) {
        const character = await this.getResource(`/characters/${id}`);
        return this._transformCharacter(character);
    }
    getAllHouses() {
        return this.getResource(`/houses?page=5`);
    }
    async getHouse(id) {
        const house = await this.getResource(`/houses/${id}`);
        return this._transformHouse(house);
    }
    getAllBooks() {
        return this.getResource(`/books?page=5`);
    }
    async getBook(id) {
        const book = await this.getResource(`/books/${id}`)
        return this._transformBook(book);
    }

    _extractId = (item) => {
        const idRegExp = /\/([0-9]*)$/;
        return item.url.match(idRegExp)[1];
    }

    _errorCharInfo = (data) => {
        if (data) {
            return data;
        } else {
            return `no data :(`;
        }
    }

    _transformCharacter = (char) => {
        return {
            id: this._extractId(char),
            url: this._errorCharInfo(char.url),
            name: this._errorCharInfo(char.name),
            gender: this._errorCharInfo(char.gender),
            born: this._errorCharInfo(char.born),
            died: this._errorCharInfo(char.died),
            culture: this._errorCharInfo(char.culture)
        }
    }

    _transformHouse = (house) => {
        return {
            name: house.name,
            region: house.region,
            words: house.words,
            titles: house.titles,
            overlord: house.overlord,
            ancestralWeapons: house.ancestralWeapons
        }
    }

    _transformBook = (book) => {
        return {
            name: book.name,
            numberOfPages: book.numberOfPages,
            publiser: book.publiser,
            released: book.released
        }
    }
};



