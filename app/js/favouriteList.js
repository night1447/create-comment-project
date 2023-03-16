class FavouriteList {
    _list = {};
    wrapper = document.querySelector('.favourite-list');

    get list() {
        return this._list;
    }

    get length() {
        return this._list.length;
    }

    constructor() {
    }

    addFavourite = (comment) => {
        const el = document.createElement('li');
        el.classList.add('favourites__item');
        el.innerHTML = comment.innerHTML;
        el.dataset.id = comment.id;
        el.querySelector('.comments__favourite').addEventListener('click', () => {
            const elFavourite = document.getElementById(comment.id).querySelector('.comments__favourite');
            ActionComment.toggleActiveFavourite(elFavourite);
            el.remove();
            this.removeFavourite(comment.id);
        })
        el.querySelector('.comments__delete').remove();
        this._list[comment.id] = el;
        this.wrapper.append(el);
    }
    removeFavourite = (id) => {
        this.wrapper.querySelector(`[data-id="${id}"]`)?.remove();
        delete this._list[id];
    }
    toggleFavourite = (comment) => this.list.hasOwnProperty(comment.id) ? this.removeFavourite(comment.id) : this.addFavourite(comment);
}