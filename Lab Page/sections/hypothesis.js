class Hypothesis extends Section {
    constructor() {
        super(".hypothesis", "Hypothèse :");
    }

    get text() {
        const text = this.body.children[0].value
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

const HYPOTHESIS = new Hypothesis();
    HYPOTHESIS.on_click(()=>{});
