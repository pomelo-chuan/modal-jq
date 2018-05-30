class PomeloModal {
    constructor() {
        this.MODAL_HTML = `
        <div class="pomelo-modal-container">
            <div class="pomelo-modal">
                <div class="pomelo-modal-title">:title</div>
                <div class="pomelo-modal-content">
                    :text
                </div>
                <div class="pomelo-modal-footer">
                    <button class="pomelo-modal-cancel">:cancelText</button>
                    <button class="pomelo-modal-confirm">:confirmText</button>
                </div>
            </div>
        </div>
        `;
    }

    show(content, ok, cancel) {
        this.checkEnvironment();
        const {
            title,
            text,
            cancelText,
            confirmText,
        } = content;

        const modal_html = this.MODAL_HTML
            .replace(':title', title)
            .replace(':text', text)
            .replace(':cancelText', cancelText)
            .replace(':confirmText', confirmText);

        $('body').append(modal_html);
        $('.pomelo-modal-confirm').on('click', () => ok && ok());
        $('.pomelo-modal-cancel').on('click', () => cancel && cancel());

    }

    hide() {
        this.timer;
        if (this.timer) {
            return;
        }
        $('.pomelo-modal-container').addClass('pomelo-modal-hide-fade-out');
        $('.pomelo-modal').addClass('pomelo-modal-hide-flow-down');
        this.timer = setTimeout(() => {
            $('.pomelo-modal-container').remove();
            clearTimeout(this.timer);
            this.timer = null;
        }, 500);
    }

    checkEnvironment() {
        if (!window.$) {
            throw new Error('Please include Jquery or Zepto before!');
        }
    }
}
