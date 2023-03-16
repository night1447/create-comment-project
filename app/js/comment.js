class Comment {
    _date;
    _title;
    _message;

    constructor(title, message, date) {
        let now = new Date();
        if (date) {
            this._date = new Date(date);
            this._date.setHours(now.getHours());
            this._date.setMinutes(now.getMinutes());
        } else {
            this._date = new Date();
        }
        this._title = title;
        this._message = message;
    }
}