const coursesData = {
    undergraduate: [
        { sNo: 1, name: 'B.COM.HONORS(GENERAL)', intake: 60 },
        { sNo: 2, name: 'BBA HONORS', intake: 180 },
        { sNo: 3, name: 'BBA HONORS(DIGITAL MARKETING)', intake: 50 },
        { sNo: 4, name: 'B.COM.HONORS(COMPUTER APPLICATIONS)', intake: 60 },
        { sNo: 5, name: 'B.SC.HONORS(COMPUTER SCIENCE)', intake: 390 },
        { sNo: 6, name: 'B.SC.HONORS(BIOCHEMISTRY)', intake: 30 },
        { sNo: 7, name: 'B.SC.HONORS(MICROBIOLOGY)', intake: 30 },
        { sNo: 8, name: 'B.SC.HONORS(ELECTRONICS)', intake: 30 },
        { sNo: 9, name: 'B.SC.HONORS(CHEMISTRY)', intake: 30 },
        { sNo: 10, name: 'B.SC.HONORS(PHYSICS)', intake: 30 },
        { sNo: 11, name: 'B.SC.HONORS(MATHEMATICS)', intake: 30 },
        { sNo: 12, name: 'B.SC.HONORS(STATISTICS)', intake: 30 },
        { sNo: 13, name: 'BCA HONORS', intake: 60 },
        { sNo: 14, name: 'B.SC.HONORS(DATA SCIENCE)', intake: 60 }
    ],
    engineering: [
        { sNo: 1, name: 'B.TECH.COMPUTER SCIENCE AND ENGINEERING', intake: 180 },
        { sNo: 2, name: 'B.TECH.COMPUTER SCIENCE AND ENGINEERING (ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING)', intake: 60 },
        { sNo: 3, name: 'B.TECH.CIVIL ENGINEERING', intake: 60 },
        { sNo: 4, name: 'B.TECH.ELECTRONICS & COMMUNICATION ENGINEERING', intake: 120 },
        { sNo: 5, name: 'B.TECH.MECHANICAL ENGINEERING', intake: 60 },
        { sNo: 6, name: 'M.TECH.STRUCTURAL ENGINEERING', intake: 12 },
        { sNo: 7, name: 'M.TECH.COMPUTER SCIENCE AND TECHNOLOGY', intake: 12 }
    ],
    postgraduate: [
        { sNo: 1, name: 'MASTER OF BUSINESS ADMINISTRATION (MBA)', intake: 180 },
        { sNo: 2, name: 'MASTER OF BUSINESS ADMINISTRATION (MBA) - BUSINESS ANALYTICS', intake: 60 },
        { sNo: 3, name: 'MASTER OF COMPUTER APPLICATIONS (MCA)', intake: 60 },
        { sNo: 4, name: 'MASTER OF HUMAN RESOURCE MANAGEMENT (MHRM)', intake: 40 },
        { sNo: 5, name: 'M.SC. COMPUTER SCIENCE', intake: 40 },
        { sNo: 6, name: 'M.SC.ORGANIC CHEMISTRY', intake: 30 },
        { sNo: 7, name: 'M.COM', intake: 40 }
    ]
};

function renderTable(formId, data) {
    const table = document.createElement('table');
    const headerRow = document.createElement('tr');
    const headers = ['S.NO', 'NAME OF THE COURSE', 'INTAKE'];
    headers.forEach(header => {
        const th = document.createElement('th');
        th.textContent = header;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    data.forEach(item => {
        const row = document.createElement('tr');
        Object.values(item).forEach(text => {
            const td = document.createElement('td');
            td.textContent = text;
            row.appendChild(td);
        });
        table.appendChild(row);
    });

    document.getElementById(formId + '-form').innerHTML = '';
    document.getElementById(formId + '-form').appendChild(table);
}

function showForm(formId, button) {
    // Hide all forms
    document.querySelectorAll('.form-container').forEach(form => form.style.display = 'none');
    // Show the selected form
    document.getElementById(formId + '-form').style.display = 'block';

    // Remove 'clicked' class from all buttons
    document.querySelectorAll('.box button').forEach(btn => btn.classList.remove('clicked'));
    // Add 'clicked' class to the clicked button
    button.classList.add('clicked');

    // Render the table
    renderTable(formId, coursesData[formId]);
}
