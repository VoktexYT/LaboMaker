class But extends Section {
    constructor() {
        super(".but", "But: ");
    }

    get text() {
        const text = this.body.children[0].value;
        console.log(text);

        return {   
            layout: {
                hLineWidth: () => {return 0},
                vLineWidth: () => {return 0}
            },

            table: {
                widths: ['auto', 10, 'auto'],
                body: [['', '', text]]
            }
        }
    }
}

const BUT = new But();
    BUT.on_click(()=>{});
