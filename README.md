# Kravspecifikation & Analys – NovaTech

## 1. Problem och Lösning
**Problemet:** Många teknikbutiker på nätet är röriga, långsamma och svåra att navigera på. Det gör att kunder känner sig osäkra när de ska köpa dyr utrustning som drönare eller VR-headsets.
**Lösningen:** NovaTech är en modern, snabb och avskalad webbshop. Genom en tydlig design och en snabb kassa ger vi kunden en trygg och lyxig köpupplevelse.

## 2. Användare 

1.Guest: Användare som klickar runt för första gången ska kunna kolla på olika produkter, läsa beskrivningar och lägga varor i varukorgen och måste fylla i sina uppgifter för att kunna checka ut.

2.User:  En användare som genomför ett köp måste Fylla i sina uppgifter, välja fraktsätt och förväntar sig en smidig och tydlig checkout-process.

3.Admin: Den som sköter butiken bakom kulisserna behöver kunna hantera ordrar, uppdatera priser och ändra lagersaldo om det skulle ta slut eller behöva fyllas på.

## 3. Kravlista och Prioritering (MoSCoW)

**Funktionella krav**
1. *(Krav / Must)* Systemet ska visa en lista med produkter, bilder och priser på startsidan.
2. *(Krav / Must)* Kunden ska kunna lägga till och ta bort varor i en varukorg.
3. *(Krav / Must)* Varukorgen ska sparas automatiskt i webbläsaren (LocalStorage) så att varorna finns kvar även om sidan laddas om.
4. *(Krav / Must)* Kunden ska kunna fylla i sina uppgifter och välja fraktsätt (Standard eller Express) i kassan.
5. *(Bör / Should)* Systemet ska visa en varning ("Slut i lager") om kunden försöker lägga till en vara som är slut.


**Icke-funktionella krav**
6. *(Krav / Must)*   (Usability):** Knappar ska ge tydlig respons när man klickar på dem, till exempel genom att visa en laddningssnurra.


7. *(Krav / Must)*   (Accessibility):** Koden ska vara byggd med korrekt HTML (så kallad semantisk HTML med tydliga formulärfält) så att den fungerar bra med skärmläsare.


8. *(Bör / Should)*  (Performance):** Totalpriset och fraktkostnaden i kassan ska räknas om direkt utan att sidan behöver laddas om.

## 4. (Use Case)
* **Aktör:** Kund.
* **Startkrav (Preconditions):** Kunden har lagt minst en vara i varukorgen och befinner sig på kassasidan.

**Huvudflöde (Steg för steg):**
1. Kunden tittar igenom sina varor och ser det totala priset i kassan.
2. Kunden fyller i namn, adress, e-post och väljer fraktsätt.
3. Kunden klickar på knappen "Bekräfta köp".
4. Systemet kontrollerar att obligatoriska fält (som e-post) är ifyllda.
5. Systemet skapar en beställning och visar en bekräftelse på skärmen.
6. Systemet tömmer varukorgen och skickar tillbaka kunden till startsidan.

**Alternativt flöde (Vad som händer vid fel):**
* Vid steg 4 upptäcker systemet att e-postadressen saknas. Webbläsaren visar då en röd varning vid fältet och köpet pausas tills kunden har skrivit in sin e-postadress.
**Slutvillkor (Postconditions):** Beställningen har sparats i systemet och är redo att hanteras av en admin.

## 5. (Change Notes)
1.Vad jag ändrade: Jag bytte ut text-emojis (som 🚀 och 🛒) mot riktiga SVG-ikoner (Lucide).


2. Jag lade till en laddningssnurra (loader) och texten "Tillagd! ✔" på köp-knappen i JavaScript-koden.


3. Jag lade till logik som inaktiverar köpknappen (disabled) om varukorgen är tom, samt införde knappar för att öka/minska antal direkt i kassan.


4. Jag ändrade varukorgens struktur från en enkel array till att hantera objekt med quantity (antal).

 ## 6. Fördjupad Reflektion och Designval
Betalningssäkerhet: Eftersom projektet är en prototyp simuleras köp med en alert(). En stor risk i en skarp miljö är hantering av känsliga kortuppgifter; därför bör externa tjänster som Klarna eller Stripe användas för att sköta transaktioner utanför den egna koden.

Lagersaldon: Just nu används en slumpmässig funktion för att simulera att en vara är slut. Risken är att en kund betalar för en vara som inte finns i lager, vilket i en riktig version kräver att JavaScript kommunicerar med en databas i realtid.

## Framtida Förbättringar
Riktig Betalningsmodul: En framtida förbättring är att integrera en färdig "Checkout"-modul från Klarna. Det ökar kundens trygghet och förenklar processen då adressuppgifter kan hämtas automatiskt.

Bekräftelsemejl: I nuvarande form rensas all data vid bekräftat köp. En naturlig utveckling är att implementera en funktion som skickar ett kvitto till den angivna e-postadressen.

## Motivering av designval
UI-struktur: Kassan är uppbyggd med en standarddesign där ordersummeringen ligger till höger och formuläret till vänster för att skapa en intuitiv och igenkännbar upplevelse.

Färger och kontrast: En mörk bakgrund kombineras med accentfärger som indigo och grön för att skapa en tydlig visuell hierarki som lyfter fram köpknappar och priser.
