class PomeloModal {
    constructor() {

    }

    show(content) {
        this.checkEnvironment();
        const {
            title,
            children,
            cancelText,
        } = content;
    }

    hide() {

    }

    appendDom() {

    }

    removeDom() {

    }

    checkEnvironment() {
        if (!window.$) {
            throw new Error('Please include Jquery or Zepto before!');
        }
    }
}

