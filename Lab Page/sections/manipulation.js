class Manipulation extends Section {
    constructor() {
        super(".manipulation", "Manipulation :");
    }

    add_new_row_event() {
        const button = document.querySelector(".manipulation .body button");

        button.addEventListener('click', () => {
            const table = document.querySelector(".manipulation .body table");
            const tr = document.querySelectorAll(".manipulation .body table tr");
            const clone = tr.item(0).cloneNode(true);
            table.appendChild(clone);
        });
    }

    get text() {
        const manipulation_list = document.querySelector(".manipulation .body table");
        let manipulation_text = [];
        let pdf_content = [];

        for (let i=0; i<manipulation_list.rows.length; i++) {
            let value = manipulation_list.rows[i].cells[0].firstChild.value;
            
            if (value) {
                manipulation_text.push(value);
            }
        }

        let i = 1;
        for (let m of manipulation_text) {
            m = m.replaceAll(".", "")
            let txt = m[0].toUpperCase() + m.slice(1, m.length) + ".";
            txt = i.toString() + ". " + txt;
            pdf_content.push({   
                layout: {
                    hLineWidth: () => {return 0},
                    vLineWidth: () => {return 0}
                },

                table: {
                    widths: ['auto', 10, 'auto'],
                    body: [['', '', txt]]
                },
            });
            
            i++;
        }

        return pdf_content;
    }
}

const MANIPULATION = new Manipulation();
    MANIPULATION.on_click(()=>{});
    MANIPULATION.add_new_row_event();
