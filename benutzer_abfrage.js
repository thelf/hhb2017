/*
 * Dies ist eine JavaScript-Umgebung.
 *
 * Geben Sie etwas JavaScript ein und führen Sie einen Rechtsklick aus oder wählen Sie aus dem Ausführen-Menü:
 * 1. Ausführen, um den ausgewählten Text zu evaluieren (Strg+R),
 * 2. Untersuchen, um den Objekt-Inspektor auf das Resultat anzuwenden (Strg+I), oder
 * 3. Anzeigen, um das Ergebnis in einem Kommentar hinter der Auswahl einzufügen. (Strg+L)
 */

"use strict";

let user = prompt("Bitte gib deinen Namen ein");

if(user == "Benutzer1"){
    alert (`Herzlich Willkommen ${user}!`);
}
if(user == "Benutzer2"){
  alert (`Herzlich Willkommen ${user}!`);
}
else {
   alert("Der Name ist mir leider nicht bekannt.");
}
