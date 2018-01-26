var personen = [
    {
        name: "Olli",
        alter: 42,
        geschlecht: "M"
    },
    {
        name: "Oma",
        alter: 100,
        geschlecht: "W"
    },
    {
        name: "Gertrude",
        alter: 55,
        geschlecht: "W"
    }
];

for (var i=0; i < personen.length; i++) {
    var person = personen[i];
    var info = "Alter von " + person.name + ": " + person.alter;
    console.log(info);
}

for (var i in personen) {
    var person = personen[i];
    var info = "Alter von " + person.name + ": " + person.alter;
    console.log(info);
}

console.log("Erste Person löschen!");
// Vorsicht: es gibt auch slice, das verändert aber das ursprüngliche Array nicht!
//console.log(personen.slice(0,1));
personen.splice(0,1);
for (var i in personen) {
    var person = personen[i];
    var info = "Alter von " + person.name + ": " + person.alter;
    console.log(info);
}
