var name = prompt("what is your name");
firstLetter = name[0].toUpperCase();
nameLetter=name.slice(1);
newName=firstLetter+nameLetter;
alert("Hello "+newName);