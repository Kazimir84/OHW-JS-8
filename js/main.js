// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//     - Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"
let pContent = document.querySelectorAll('#content');
    pContent.forEach(value => {
        console.log(`Oтримує текст з параграфа з id "content": ${value.textContent}`);
        textIdContent = value.textContent;
    });

// -- отримує текст з блоку з id "rules"
let rulesId = document.querySelectorAll('#rules');
    rulesId.forEach(value => console.log(value.textContent));

// -- замініть текст параграфа з id 'content' на будь-який інший
let idContent = document.querySelectorAll('#content');
    idContent.forEach(value => value.textContent = 'New Text 1');

// -- замініть текст параграфа з id 'rules' на будь-який інший
let idRules = document.querySelectorAll('#rules');
    idRules.forEach(value => value.textContent = 'New Text 2');

// -- змініть кожному елементу колір фону на червоний
let elements = document.body.children;
for (let i = 0; i < elements.length-1; i++) {
    let element = elements[i];
    element.style.backgroundColor = 'red';
};

// -- змініть кожному елементу колір тексту на синій
for (let i = 0; i < elements.length-1; i++) {
    let element = elements[i];
    element.style.color = 'blue';
};

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
let rules = document.querySelectorAll('#rules');
    rules.forEach(value => console.log(`Bесь список класів елемента з id=rules: ${value.classList}`));

// -- поміняти колір тексту у всіх елементів fc_rules на червоний
let fcRules = document.querySelectorAll('.fc_rules');
    fcRules.forEach(value => value.style.color = 'red');