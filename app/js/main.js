const commentList = document.querySelector('.comments__list');
const addingForm = document.querySelector('.adding__form');
const showFavouritesButton = document.querySelector('.favourite-show');

const validator = new Validator();

for (let key of addingForm.elements) {
    if (key.type !== 'button') {
        validator.validate(key);
    }
}
const validateForm = (form) => {
    const button = form.querySelector('button[type="submit"]');
    const checkError = (elements) => {
        for (let key of elements) {
            if (key.type !== 'date' && key.type !== "submit" && (key.classList.contains('_error') || key.value === '')) {
                return true;
            }
        }
        return false;
    }

    if (checkError(addingForm.elements)) {
        console.log("error");
        button.classList.add('_error');
        setTimeout(() => {
            button.classList.remove('_error');
        }, 1500);
        return false;
    }
    console.log("not error");
    return true;
}


addingForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (validateForm(addingForm)) {
        const elements = event.target;
        const name = elements[0].value;
        const date = elements[1].value;
        const message = elements[2].value;
        const comment = new Comment(name, message, date);
        const creator = new CommentCreator(comment);
        commentList.append(creator.getStructureHtml('li'));
        addingForm.reset();
    }
})

showFavouritesButton.addEventListener('click', () => {
    showFavouritesButton.classList.toggle('_active');
    document.querySelector('.favourite-list').classList.toggle('_active');
})