function createPDF() {
    const button = document.querySelector("#printPDF");
    button.addEventListener('click', () => {
        let pdf_content = [];

        for (let section of [BUT, HYPOTHESIS, MATERIAL, MANIPULATION, OBSERVATION]) {
            if (section.is_checked) {
                pdf_content.push({text: section.title, bold: true});
                pdf_content.push({text: "\n"});

                const text = section.text;

                if (Array.isArray(text)) {
                    for (let el of text) {
                        pdf_content.push(el);
                    }
                } else {
                    pdf_content.push(text);
                }
                
                pdf_content.push({text: "\n\n\n\n"});
            }
        }

        let docDefinition = {
            content: pdf_content,
            styles: {
                header: {
                    fontSize: 18,
                    bold: true,
                    alignment: 'center',
                    margin: [0, 0, 0, 10]
                },
            },
        };
    
        pdfMake.createPdf(docDefinition).print();
    });
}

createPDF();
