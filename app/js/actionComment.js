class ActionComment {
    static favouriteList = new FavouriteList();

    constructor(commentElement) {
        this.comment = commentElement;
    }

    static toggleActiveFavourite = (el) => {
        el.classList.toggle('_active');

    }
    addDeleteButton = function () {
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('comments__delete');
        deleteButton.style.backgroundImage = 'url("images/close.svg")';
        deleteButton.addEventListener('click', () => {
            this.comment.remove();
            ActionComment.favouriteList.removeFavourite(this.comment.id);
        });

        this.comment.append(deleteButton);
    }

    addFavouriteButton = () => {
        const favouriteButton = document.createElement('button');
        favouriteButton.classList.add('comments__favourite');
        favouriteButton.style.backgroundImage = 'url("images/favourite.svg")';
        favouriteButton.addEventListener('click', () => {
            ActionComment.toggleActiveFavourite(favouriteButton);
            ActionComment.favouriteList.toggleFavourite(this.comment);
        })

        this.comment.append(favouriteButton);
    }
}