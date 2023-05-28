async function populate() {
    const requestURL = 'https://raw.githubusercontent.com/kanakanho/time_table_work/sub1/data_table_last.json?token=GHSAT0AAAAAACBJ2JQEKDWKCY3BRGJGCOW4ZDK2HYQ';
    const request = new Request(requestURL);

    const response = await fetch(request);
    const table = await response.json();

    time_table(table);
}

function time_table(obj) {
    const table = document.querySelector('.table');
    const tables = obj.day_main;
    for (const box of tables) {
        const divDay = document.createElement('div');
        divDay.className = 'day';

        const myArticle = document.createElement('article');

        const myPara1 = document.createElement('p');
        const myPara2 = document.createElement('p');
        const myPara3 = document.createElement('p');
        const myPara4 = document.createElement('p');
        const myPara5 = document.createElement('p');
        const myPara6 = document.createElement('p');

        myPara1.textContent = `name: ${box.name}`;
        myPara2.textContent = `teacher: ${box.teacher}`;
        myPara3.textContent = `room: ${box.room}`;
        myPara4.textContent = `book: ${box.book}`;
        myPara5.textContent = `teams: ${box.teams}`;
        myPara6.textContent = `moodle: ${box.moodle}`;

        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myPara4);
        myArticle.appendChild(myPara5);
        myArticle.appendChild(myPara6);

        table.appendChild(myArticle);

    }
}
