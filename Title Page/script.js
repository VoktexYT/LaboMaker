class Start {
    constructor(group) {
        this.group = group;
    }

    add_today_date() {
        const today = new Date().toISOString().split('T')[0];
        const date_nav = this.group['date'][0];
        const date_input = date_nav.firstElementChild;
        date_input.value = today;
    }

    add_color_label() {
        for (let key of Object.keys(this.group)) {
            const nav = this.group[key][0];
            const is_important = this.group[key][1];
            const [input, label] = nav.children;
            const incorrect = (!input.value.replace(/ /g,'') && is_important);
            label.style.color = incorrect ? "#FF0000": "#00AA00";
        }
    }

    check_input() {
        for (let key of Object.keys(this.group)) {
            const nav = this.group[key][0];
            const label = nav.children[1];
            const label_color = label.style.color;
            if (label_color === "rgb(255, 0, 0)") {
                return 0;
            }
        }

        return 1;
    }

    downloadPdf() {
        const JUMP_SECTION = "\n\n\n\n\n\n\n\n\n";
        const JUMP_LINE = "\n";

        var docDefinition = {
            content: [
                {
                    text: this.group['title'][0].children[0].value.toUpperCase(),
                    bold: true,
                    alignment: "center"
                },

                {text: JUMP_LINE},

                {
                    text: this.group['subtitle'][0].children[0].value,
                    alignment: "center"
                },

                {text: JUMP_SECTION},

                {
                    text: "Par",
                    bold: true,
                    alignment: "center"
                },

                {text: JUMP_LINE},

                {
                    text: this.group['student1'][0].children[0].value,
                    alignment: "center"
                },

                {
                    text: this.group['student2'][0].children[0].value,
                    alignment: "center"
                },

                {text: JUMP_SECTION},

                {
                    text: "Travail remis à :",
                    bold: true,
                    alignment: "center"
                },

                {text: JUMP_LINE},

                {
                    text: this.group['teacher'][0].children[0].value,
                    alignment: "center"
                },

                {text: JUMP_SECTION},

                {
                    text: "Dans le cadre du cours",
                    bold: true,
                    alignment: "center"
                },

                {text: JUMP_LINE},

                {
                    text: this.group['class'][0].children[0].value,
                    alignment: "center"
                },

                {text: JUMP_SECTION},

                {
                    text: this.group['school'][0].children[0].value,
                    bold: true,
                    alignment: "center"
                },

                {text: JUMP_LINE},

                {
                    text: this.group['date'][0].children[0].value,
                    alignment: "center"
                },
            ]
        };

        pdfMake.createPdf(docDefinition).print();
    }

    button_event() {
        this.add_color_label()
        const result = this.check_input();

        if (result) {
            this.downloadPdf();
        }
    }
}

