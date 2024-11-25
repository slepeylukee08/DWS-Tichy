//1
let first = document.getElementById('first');

first.addEventListener('click', function(){
    alert("Vitej na této stránce, Lukáš")   // Zdravi lidi na strance poprve jak prijdou nebo udelaji nejakou cinnost
})

//2
let second = document.getElementById('second')

second.addEventListener('click', function(){
    this.textContent = "Nová stránka"
})

function showText() {
    const button = document.getElementById('third');   //Zmizení textu pri kliknuti na button
    button.textContent = 'Ahoj, teď mě vidíš!';   // Zobrazuje text poi kliknuti na button 
}

//3
document.getElementById('third').textContent = '';   // Skrytí textu při načtení stránky

//4
document.getElementById('fourth').onclick = function() {
    document.getElementById('ukolTitle').style.display = 'block'; // Zobrazí text "Úkol 4"
    document.getElementById('text').style.display = 'block'; // Zobrazí text pod ním
};

//5
function greetUser() {
    const name = document.getElementById('nameInput').value;
    document.getElementById('greetingMessage').textContent = name 
        ? `Ahoj, ${name}! Těší mě, že tě vidím.` 
        : 'Prosím, zadej své jméno.';
}

//7
    const hoverButton = document.getElementById('hoverButton');
        
    hoverButton.addEventListener('mouseenter', () => {
            hoverButton.textContent = 'Text se změnil!';
    });

    hoverButton.addEventListener('mouseleave', () => {
         hoverButton.textContent = 'Najed na mě!';
    });

    //8
function updateTime() {
    const now = new Date();  //Zastava aktualni datum a cas v okamziku jakmile kliknu na tlacitko
    const options = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false}  //options - nejake pravidlo na zobrazeni casu // nastavuje hodiny, minuty, sekundy a ukazuje dvouciferne cislice
    const timeString = now.toLocaleTimeString('cs-Cz', options); // prevadi kod now na formatovy retezec podle casu a zvoleneho jazyku, podle pravidel options, vysledkem je promenna timeString
    document.getElementById('currentTime').textContent = timeString; // Aktualizace textu
}
    
// Aktualizace času při kliknutí na tlačítko
document.getElementById('updateButton').addEventListener('click', updateTime);

// První zobrazení při načtení
updateTime();

//9
function zobrazDatum() {
    const dnes = new Date();  
    const formatovaneDatum = dnes.toLocaleDateString('cs-CZ');  //zadame polohu nebo zemi v jake to chceme
    document.getElementById('datum').innerText = `Aktuální datum: ${formatovaneDatum}`; //vypiste aktualni datum, vypise ho ve formatu
}
//10
function pridatTri() {  //přidá hodnotu (Základní hodnota)
    let vstup = document.getElementById("cislo").value  //Převod na číslo a příčtení 3 k číslu
    let vysledek = parseFloat(vstup) + 3; document.getElementById("vysledek").innerText = "výsledek = " + vysledek ; //Zobrazení výsledku
}

//11
function sectiCisla() {
    let cislo1 = document.getElementById("cislo1").value;  // Získání hodnot z obou vstupních polí
    let cislo2 = document.getElementById("cislo2").value;  // Získání hodnot z obou vstupních polí
    let vysledek = parseFloat(cislo1) + parseFloat(cislo2);  // Převod na čísla a sečtení
    document.getElementById("vysledek2").innerText = "Výsledek: " + vysledek; // Zobrazení výsledku  
}

document.getElementById('addTaskButton').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskDeadline = document.getElementById('taskDeadline');
    
    const taskText = taskInput.value.trim();
    const deadline = taskDeadline.value;

    if (taskText === '') {
        alert('Zadejte úkol!');
        return;
    }

    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');

    // Přidejte text úkolu
    const taskContent = document.createElement('span');
    taskContent.classList.add('task-content');
    taskContent.textContent = taskText;

    // Přidejte datum a čas splnění
    const taskDate = document.createElement('span');
    taskDate.classList.add('task-date');
    taskDate.textContent = deadline ? `K dokončení: ${new Date(deadline).toLocaleString()}` : '';

    taskItem.appendChild(taskContent);
    taskItem.appendChild(taskDate);
    
    // Přidejte úkol do seznamu
    document.getElementById('taskList').appendChild(taskItem);

    // Vyprázdnění polí
    taskInput.value = '';
    taskDeadline.value = '';
});

//VÝZVA
 // Získáme referenci na elementy
 const taskInput = document.getElementById('task-input');
 const addTaskBtn = document.getElementById('add-task-btn');
 const taskList = document.getElementById('task-list');

 // Funkce pro přidání úkolu do seznamu
 function addTask(taskText) {
     const li = document.createElement('li');
     li.classList.add('task');
     li.textContent = taskText;

     // Kliknutí na úkol (pro označení jako splněný)
     li.addEventListener('click', function() {
         li.classList.toggle('completed');  // Toggle (přepnutí) třídy 'completed'
     });

     // Přidání úkolu do seznamu
     taskList.appendChild(li);
 }

 // Funkce pro zpracování přidání úkolu
 addTaskBtn.addEventListener('click', function() {
     const taskText = taskInput.value.trim();
     if (taskText) {
         addTask(taskText);  // Přidáme nový úkol
         taskInput.value = '';  // Vyprázdníme vstupní pole
         taskInput.focus();  // Nastavíme kurzor zpět na vstupní pole
     }
 });

 // Možnost přidat úkol i stisknutím klávesy Enter
 taskInput.addEventListener('keypress', function(event) {
     if (event.key === 'Enter') {
         addTaskBtn.click();  // Simulujeme kliknutí na tlačítko
     }
 });
