class Validator {
    validateMessage = (value = '') => {
        if (value.length <= 2) {
            return "Данное поле слишком маленькое по содержанию"
        }
        return '';
    }
    validateInput = (value = '') => {
        const messages = {
            digit: 'Данное поле должно содержать только буквы',
            length: 'Слишком маленькое по содержанию',
            compare: function () {
                return this.digit + ', ' + this.length;
            }
        }
        const isDigits = value.match(/[1-9]/);
        const isLength = value.length <= 2;
        if (isDigits) {
            if (isLength) {
                return messages.compare();
            }
            return messages.digit;

        } else if (isLength) {
            return messages.length;
        }
        return '';
    }
    checkError = (type, value) => {
        switch (type) {
            case 'date':
                break;
            case 'textarea':
                return this.validateMessage(value);
            case 'text':
                return this.validateInput(value);
            default:
                return this.validateInput(value);
        }
        return false;
    }
    validate = (domElement) => {
        const type = domElement.type;
        let timers = [];
        const errorMessage = new ErrorMessage();
        domElement.addEventListener('input', () => {
            let timer = setTimeout(() => {
                const message = this.checkError(type, domElement.value);
                if (message || !domElement.value) {
                    domElement.classList.add('_error');
                    errorMessage.setError(domElement, message);
                } else {
                    domElement.classList.remove('_error');
                    errorMessage.removeError(domElement);
                }
                timers.forEach(timer => clearTimeout(timer));
                timers = [];
            }, 1000);
            timers.push(timer);
        });

    }
}