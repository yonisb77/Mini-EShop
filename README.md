# 🚀 Teknisk Specifikation & Analys – NovaTech

## 1. Bakgrund & Syfte
| Område | Beskrivning |
| :--- | :--- |
| **Problemet** | Många teknikbutiker på nätet är röriga, långsamma och svåra att navigera på. Det gör att kunder känner sig osäkra när de ska köpa dyr utrustning. |
| **Lösningen** | NovaTech är en modern, snabb och avskalad webbshop. Genom en tydlig design och en snabb kassa ger vi kunden en trygg och smidig köpupplevelse. |

---

## 2. Användarroller
| Roll | Beskrivning | Förväntningar / Behov |
| :--- | :--- | :--- |
| **Gäst** | Besökare som är inne för första gången. | Kunna utforska produkter, läsa beskrivningar och lägga varor i varukorgen utan krav på inloggning. |
| **Kund** | Användare som ska genomföra ett köp. | En snabb och tydlig kassaprocess där man enkelt fyller i uppgifter och väljer fraktsätt. |
| **Admin** | Sköter butiken bakom kulisserna. | Behöver ett gränssnitt för att hantera ordrar, uppdatera priser och ändra lagersaldo (planerat för nästa utvecklingsfas). |

---

## 3. Kravlista och Prioritering

### Funktionella krav (Vad systemet ska göra)
| ID | Kravbeskrivning | Prioritet |
| :--- | :--- | :--- |
| **F1** | Kunden ser en tydlig sammanfattning av sina varor och totalpriset i kassan. | Krav |
| **F2** | Kunden fyller i sina uppgifter och väljer fraktsätt via en rullgardinsmeny. Fraktkostnaden uppdateras direkt. | Krav |
| **F3** | Kunden kan slutföra beställningen via en tydlig köpknapp. | Krav |
| **F4** | Systemet kontrollerar att alla obligatoriska fält är ifyllda innan köpet godkänns. | Krav |
| **F5** | Systemet skapar en beställning och visar en bekräftelse på skärmen. | Krav |
| **F6** | Varukorgen töms automatiskt och kunden skickas tillbaka till startsidan efter ett genomfört köp. | Krav |

### Icke-funktionella krav (Hur systemet ska upplevas)
| ID | Kategori | Kravbeskrivning | Prioritet |
| :--- | :--- | :--- | :--- |
| **IF1** | Användarvänlighet | Knappar ska ge direkt visuell respons vid klick (exempelvis en laddningssnurra). | Krav |
| **IF2** | Tillgänglighet| Butiken ska fungera för alla, inklusive personer som använder skärmläsare. Fält, knappar och bilder måste vara tydligt uppmärkta i koden. | Krav |
| **IF3** | Prestanda | Totalpriset och fraktkostnaden i kassan ska räknas om direkt på skärmen, utan att sidan behöver laddas om. | Bör |

---

## 4. Kundresa: Genomföra ett köp

| Steg | Fas | Händelseförlopp |
| :--- | :--- | :--- |
| **0** | *Startläge* | Kunden har lagt minst en vara i varukorgen och navigerar till kassan. |
| **1** | Köpflöde | Kunden granskar sina varor och ser det totala priset. |
| **2** | Köpflöde | Kunden fyller i namn, adress, e-post och väljer fraktsätt. |
| **3** | Köpflöde | Kunden klickar på "Bekräfta köp". |
| **4** | Köpflöde | Systemet säkerställer snabbt att alla viktiga uppgifter är ifyllda. |
| **5** | Köpflöde | Systemet registrerar beställningen och visar en bekräftelse. |
| **6** | Köpflöde | Systemet nollställer varukorgen och återför kunden till startsidan. |
| **Alt.**| *Felhantering* | Om e-post saknas eller ett postnummer är ogiltigt, visas en röd varning direkt vid fältet och köpet pausas tills kunden har rättat felet. |

---

## 5. Genomförda förbättringar

| Område | Vad som har gjorts | Affärsvärde / Motivering |
| :--- | :--- | :--- |
| **Ikoner** | Ersatt tillfälliga emojis med ett professionellt ikonbibliotek (Lucide). | Ger butiken ett konsekvent, modernt och seriöst intryck på alla skärmstorlekar. |
| **Feedback i UI** | Implementerat en laddningssnurra och texten "Tillagd! ✔" på köpknappar. | Förbättrar användarupplevelsen radikalt genom att ge kunden omedelbar bekräftelse. |
| **Säkrare kassa**| Spärrat köpknappen vid tom varukorg och lagt till plus/minus-knappar för antal. | Förhindrar felbeställningar och låter kunden justera sin order utan att lämna kassan. |
| **Datastruktur** | Uppdaterat varukorgens logik för att gruppera likadana produkter istället för att skapa nya rader. | Gör kassan mycket mer lättöverskådlig för kunden och bygger en stabilare teknisk grund. |

---

## 6. Risker, Framtidsplaner och Designval

### Identifierade risker och nästa steg (Roadmap)
| Kategori | Område | Nuläge / Planerad åtgärd |
| :--- | :--- | :--- |
| ⚠️ **Risk** | Betalningssäkerhet | I nuläget är kassan en visuell prototyp. För skarp lansering måste vi integrera en säker betalväxel för att skydda kundernas kortuppgifter. |
| ⚠️ **Risk** | Lagersaldon | Systemet hanterar inte verkliga lagersaldon än. Vi behöver koppla butiken till ett faktiskt lagersystem så att kunder inte kan köpa slutsålda varor. |
| 🚀 **Framtid**| Betalningsmodul | Vi planerar att integrera "Klarna Checkout". Det ökar konverteringen eftersom kunden slipper fylla i adressuppgifter manuellt och känner sig tryggare. |
| 🚀 **Framtid**| Automatiserade mejl | Vi ska bygga ett flöde där kunden automatiskt får ett professionellt kvitto skickat till sin e-post efter genomfört köp. |

### Design- och arkitekturval
| Område | Val | Motivering |
| :--- | :--- | :--- |
| **UI-struktur** | Två-kolumns-layout i kassan | En beprövad branschstandard (summering till höger, formulär till vänster) som kunder känner igen, vilket minskar avhopp i kassan. |
| **Färg & Kontrast**| Mörk bakgrund (Dark mode) med accentfärger | Skapar en tydlig visuell hierarki som lyfter fram produkter, priser och viktiga knappar. |
| **Dataflöde** | Realtidsuppdatering av data | Genom att uppdatera kassan direkt när kunden ändrar antalet varor får de omedelbar respons utan att sidan behöver laddas om, vilket känns som en modern app-upplevelse. |
