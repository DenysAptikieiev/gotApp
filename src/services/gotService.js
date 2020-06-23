export default class GotService {
    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }
    getResource  = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) throw new Error(`Could not fetch ${url}, status ${res.status}`);
    
        return await res.json();
    };
    getAllCharacters = async () => {
        const res = await this.getResource(`/characters?page=5&pageSize=10`);
        return res.map(this._transformCharacter);
    }
    getCharacter = async (id) => {
        const character = await this.getResource(`/characters/${id}`);
        return this._transformCharacter(character);
    }
    getAllHouses = async () => {
        const res = await this.getResource(`/houses/`);
        return res.map(this._transformHouse)
    }
    getHouse = async (id) => {
        const house = await this.getResource(`/houses/${id}`);
        return this._transformHouse(house);
    }
    getAllBooks = async () => {
        const res = await this.getResource(`/books/`);
        return res.map(this._transformBook);
    }
    getBook = async (id) => {
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
            id: this._extractId(house),
            url: this._errorCharInfo(house.url),
            name: this._errorCharInfo(house.name),
            region: this._errorCharInfo(house.region),
            words: this._errorCharInfo(house.words),
            titles: this._errorCharInfo(house.titles),
            overlord: this._errorCharInfo(house.overlord),
            ancestralWeapons: this._errorCharInfo(house.ancestralWeapons)
        }
    }

    _transformBook = (book) => {
        return {
            id: this._extractId(book),
            url: this._errorCharInfo(book.url),
            name: this._errorCharInfo(book.name),
            numberOfPages: this._errorCharInfo(book.numberOfPages),
            publiser: this._errorCharInfo(book.publiser),
            released: this._errorCharInfo(book.released)
        }
    }
};



