class Material extends Section {
    constructor() {
        super(".material", "Matériel :");
    }

    add_new_row_event() {
        const button = document.querySelector(".material .body button");

        button.addEventListener('click', () => {
            const table = document.querySelector(".material .body table");
            const tr = document.querySelectorAll(".material .body table tr");
            const clone = tr.item(1).cloneNode(true);
            table.appendChild(clone);
        });
    }

    get text() {
        const material_list = document.querySelector(".material .body table");
        let material_text = [];
        let pdf_content = [];

        for (let r=1; r<material_list.rows.length; r++) {
            const row = material_list.rows[r].cells;
            const number = row[0].firstChild.value;
            const object = row[1].firstChild.value;
            const error = row[2].firstChild.value;
            
            material_text.push([
                number, object, error
            ]);
        }

        for (let m of material_text) {
            let txt = `- ${m[0]} ${m[1]}`
            if (m[2]) {
                txt += "  (+/- " + m[2] + ")";
            }

            pdf_content.push({   
                layout: {
                    hLineWidth: () => {return 0},
                    vLineWidth: () => {return 0}
                },

                table: {
                    widths: ['auto', 10, 'auto'],
                    body: [['', '', txt]]
                },
            })
        }

        return pdf_content;
    }
}

const MATERIAL = new Material();
    MATERIAL.on_click(()=>{});
    MATERIAL.add_new_row_event();
