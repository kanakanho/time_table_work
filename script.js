async function populate() {

    const requestURL = 'https://raw.githubusercontent.com/kanakanho/time_table_work/main/data_table_last.json?token=GHSAT0AAAAAACBJ2JQFAFXRJN53ZX6TIGJ2ZDEFUSA';
    const request = new Request(requestURL);

    const response = await fetch(request);
    const table = await response.json();

    time_table(table);
}

function time_table(obj) {
    const section = document.querySelector('day');
    const tables = obj;

    const myArticle = document.createElement('article');

    const myH1 = document.createElement('h1');
    myH1.textContent = `day_name: ${tables.day_name}`;

    const tables_day_main = tables.day_main;

    for (const line of tables_day_main) {
        const myPara1 = document.createElement('p');
        const myPara2 = document.createElement('p');
        const myPara3 = document.createElement('p');
        const myPara4 = document.createElement('p');
        const myPara5 = document.createElement('p');
        const myPara6 = document.createElement('p');

        myPara1.textContent = `name: ${line.name}`;
        myPara2.textContent = `teacher: ${line.teacher}`;
        myPara3.textContent = `room: ${line.room}`;
        myPara4.textContent = `book: ${line.book}`;
        myPara5.textContent = `teams: ${line.teams}`;
        myPara6.textContent = `moodle: ${line.moodle}`;

        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myPara4);
        myArticle.appendChild(myPara5);
        myArticle.appendChild(myPara6);

        section.appendChild(myArticle);
    }
}
