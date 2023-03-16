class CommentCreator {
    constructor(comment) {
        this._comment = comment;
    }

    createDate = function () {
        let date = this._comment._date;
        let now = new Date();
        let result = '';
        const checkZero = (value) => +value > 9 ? value : '0' + value;

        if (date.getDate() === now.getDate()) {
            result += 'Сегодня';
        }
        if (date.getDate() === now.getDate() - 1) {
            result += 'Вчера';
        }
        if (date.getDate() !== now.getDate()) {
            result += checkZero(date.getDate()) + '.' + checkZero(date.getMonth() + 1) + '.' + date.getFullYear();
        }
        result += ' ' + checkZero(date.getHours()) + ':' + checkZero(date.getMinutes());
        return result;
    }

    getStructureHtml = (wrapTagName) => {
        const el = document.createElement(wrapTagName);
        el.classList.add('comments__item');
        el.setAttribute('id', Math.random());

        const actions = new ActionComment(el);

        el.innerHTML = `
              <div class="comments__name">
                            ${this._comment._title}
                        </div>
                        <div class="comments__message">
                          ${this._comment._message}
                        </div>
                        <div class="comments__date">
                            ${this.createDate()}
                        </div>
        `;
        actions.addDeleteButton();
        actions.addFavouriteButton();
        return el;
    }
}