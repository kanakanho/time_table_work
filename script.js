async function populate() {
    const requestURL = "https://raw.githubusercontent.com/kanakanho/time_table_work/main/1_2.json";
    const request = new Request(requestURL);

    const response = await fetch(request);
    const table = await response.json();

    time_table(table);
}

function time_table(obj) {
    const table = document.querySelector(".table");
    const tables = obj[0].day_main;
    let count = 0;
    for (const box of tables) {
        count++;
        console.log(box);
        const divDay = document.createElement("div");
        divDay.className = "day";

        const myPara1 = document.createElement("p");
        const myPara2 = document.createElement("p");
        const myPara3 = document.createElement("p");
        const myPara4 = document.createElement("p");
        const myPara5 = document.createElement("a");
        const br = document.createElement("br");
        const myPara6 = document.createElement("a");

        if (
            box.main[0].name === "月" ||
            box.main[0].name === "火" ||
            box.main[0].name === "水" ||
            box.main[0].name === "木" ||
            box.main[0].name === "金" ||
            count <= 5
        ) {
        } else {
            myPara1.className = "name";
            myPara2.className = "teacher";
            myPara3.className = "room";
            myPara4.className = "book";
            myPara5.className = "teams";
            myPara6.className = "moodle";
        }

        myPara1.textContent = `${box.main[0].name}`;
        myPara2.textContent = `${box.main[0].teacher}`;
        myPara3.textContent = `${box.main[0].room}`;
        myPara4.textContent = `${box.main[0].book}`;

        if (box.main[0].teams === "") {
            myPara5.textContent = "";
        } else {
            myPara5.textContent = "teams";
            myPara5.href = box.main[0].teams;
            myPara5.target = "_blank";
        }

        if (box.main[0].moodle === "") {
            myPara6.textContent = "";
        } else {
            myPara6.textContent = "moodle";
            myPara6.href = box.main[0].moodle;
            myPara6.target = "_blank";
        }

        divDay.appendChild(myPara1);
        divDay.appendChild(myPara2);
        divDay.appendChild(myPara3);
        divDay.appendChild(myPara4);
        divDay.appendChild(myPara5);
        divDay.appendChild(br);
        divDay.appendChild(myPara6);

        table.appendChild(divDay);
    }
}

populate();
