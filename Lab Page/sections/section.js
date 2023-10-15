class Section {
    #header;

    /**
     * @param {String} section_class
     * @param {String} title
     */
    constructor(section_class, title) {
        this.#header = document.querySelector(section_class + " .header");
        this.body = document.querySelector(section_class + " .body");
        this.title = title;
    }

    get is_checked() {
        return this.#header.children.item(0).checked
    }

    /**
     * @param {boolean} is_visible 
     * @returns {undefined}
     */
    #set_visible(is_visible) {
        const body_style = this.body.style;
        
        if (is_visible)
            body_style.display = "block";
        else
            body_style.display = "none";
    }

    /**
     * @param {function} callback 
     * @returns {undefined}
     */
    on_click(callback) {
        this.#header.children.item(0).addEventListener("click", () => {
            this.#set_visible(this.is_checked);

            try {
                callback();
            } catch {
                console.error("Callback function is undefined.");
            }
        });
    }
}
