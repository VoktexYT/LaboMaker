class Observation extends Section {
    constructor() {
        super(".observation", "Observation :");
    }

    add_new_col_event() {
        const button = document.querySelector(".observation .body #add-col")
        
        button.addEventListener('click', () => {
            let table = document.querySelector(".observation .body table");

            let th = document.createElement("th");
            let header_input = document.createElement("input");
            th.appendChild(header_input);
            table.rows[0].appendChild(th);

            const nbr_row = Object.keys(table.rows).length;

            for (let r=1; r<nbr_row; r++) {
                let case1 = document.createElement("td");
                let input = document.createElement("input");
                case1.appendChild(input);
                table.rows[r].appendChild(case1);
            }
        });
    }

    add_new_row_event() {
        const button = document.querySelector(".observation .body #add-row");

        button.addEventListener('click', () => {
            let table = document.querySelector(".observation .body table");
            const nbr_col = Object.keys(table.rows[0].cells).length;

            let row = document.createElement("tr");

            for (let c=0; c<nbr_col; c++) {
                let td = document.createElement("td");
                let input = document.createElement("input");
                td.appendChild(input);
                row.appendChild(td);
            }

            table.appendChild(row);
        });
    }

    get text() {
        const observation_table = document.querySelector(".observation .body table");
        const observation_text = [];

        for (let r=0; r<observation_table.rows.length; r++) {
            const row = observation_table.rows[r];
            let text = [];

            for (let c=0; c<row.cells.length; c++) {
                text.push(row.cells[c].firstChild.value)
            }

            observation_text.push(text);
        }

        return {table: {headerRows: 1, body: observation_text}};
    }
}

const OBSERVATION = new Observation();
    OBSERVATION.on_click(()=>{});
    OBSERVATION.add_new_col_event();
    OBSERVATION.add_new_row_event();
