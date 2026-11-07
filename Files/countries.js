// Flag Game – Laender, Hauptstaedte und akzeptierte Antwortvarianten.
// name[0]/capital[0]: Deutsch; name[1]/capital[1]: Englisch.
// Weitere Array-Werte gelten als erlaubte Kurzformen/Schreibweisen.
// un: echtes UNO-Mitglied (193); core196: Lernpool mit 196 Laendern.
// Der Lernpool enthaelt alle 193 UNO-Mitglieder sowie Taiwan, Vatikanstadt und Palaestina.
// Hauptstadt-Sonderfaelle koennen mehrere richtige Antworten besitzen.
let countries = [
    {
        "name": ["Andorra", "Andorra"],
        "capital": ["Andorra la Vella", "Andorra la Vella"],
        "continent": "Europa",
        "code": "AD",
        "un": true,
        "core196": true
    },
    {
        "name": ["Vereinigte Arabische Emirate", "United Arab Emirates", "VAE", "UAE", "Emirate", "Vereinigte Emirate", "United Arab Emirate", "U.A.E."],
        "capital": ["Abu Dhabi", "Abu Dhabi"],
        "continent": "Asien",
        "code": "AE",
        "un": true,
        "core196": true
    },
    {
        "name": ["Afghanistan", "Afghanistan"],
        "capital": ["Kabul", "Kabul"],
        "continent": "Asien",
        "code": "AF",
        "un": true,
        "core196": true
    },
    {
        "name": ["Antigua und Barbuda", "Antigua and Barbuda", "Antigua & Barbuda", "Antigua Barbuda"],
        "capital": ["Saint John's", "Saint John's", "St Johns", "St. Johns", "St. John's", "Saint Johns", "Saint John’s", "St John", "Saint John"],
        "continent": "Nordamerika",
        "code": "AG",
        "un": true,
        "core196": true
    },
    {
        "name": ["Anguilla", "Anguilla"],
        "capital": ["The Valley", "The Valley"],
        "continent": "Nordamerika",
        "code": "AI",
        "un": false,
        "core196": false
    },
    {
        "name": ["Albanien", "Albania"],
        "capital": ["Tirana", "Tirana"],
        "continent": "Europa",
        "code": "AL",
        "un": true,
        "core196": true
    },
    {
        "name": ["Armenien", "Armenia"],
        "capital": ["Yerevan", "Yerevan", "Jerewan", "Eriwan", "Erevan"],
        "continent": "Asien",
        "code": "AM",
        "un": true,
        "core196": true
    },
    {
        "name": ["Angola", "Angola"],
        "capital": ["Luanda", "Luanda"],
        "continent": "Afrika",
        "code": "AO",
        "un": true,
        "core196": true
    },
    {
        "name": ["Antarktis", "Antarctica"],
        "capital": ["N/A", "N/A"],
        "continent": "Antarktis",
        "code": "AQ",
        "un": false,
        "core196": false
    },
    {
        "name": ["Argentinien", "Argentina"],
        "capital": ["Buenos Aires", "Buenos Aires"],
        "continent": "Südamerika",
        "code": "AR",
        "un": true,
        "core196": true
    },
    {
        "name": ["Amerikanisch-Samoa", "American Samoa"],
        "capital": ["Pago Pago", "Pago Pago"],
        "continent": "Ozeanien",
        "code": "AS",
        "un": false,
        "core196": false
    },
    {
        "name": ["Österreich", "Austria"],
        "capital": ["Wien", "Vienna"],
        "continent": "Europa",
        "code": "AT",
        "un": true,
        "core196": true
    },
    {
        "name": ["Australien", "Australia"],
        "capital": ["Canberra", "Canberra"],
        "continent": "Ozeanien",
        "code": "AU",
        "un": true,
        "core196": true
    },
    {
        "name": ["Aruba", "Aruba"],
        "capital": ["Oranjestad", "Oranjestad"],
        "continent": "Nordamerika",
        "code": "AW",
        "un": false,
        "core196": false
    },
    {
        "name": ["Åland", "Åland Islands", "Aland", "Aland Islands", "Aland Inseln"],
        "capital": ["Mariehamn", "Mariehamn"],
        "continent": "Europa",
        "code": "AX",
        "un": false,
        "core196": false
    },
    {
        "name": ["Aserbaidschan", "Azerbaijan"],
        "capital": ["Baku", "Baku", "Bakı"],
        "continent": "Asien",
        "code": "AZ",
        "un": true,
        "core196": true
    },
    {
        "name": ["Bosnien und Herzegowina", "Bosnia and Herzegovina", "Bosnien", "Bosnia", "BiH", "Bosnia Herzegovina"],
        "capital": ["Sarajevo", "Sarajevo"],
        "continent": "Europa",
        "code": "BA",
        "un": true,
        "core196": true
    },
    {
        "name": ["Barbados", "Barbados"],
        "capital": ["Bridgetown", "Bridgetown"],
        "continent": "Nordamerika",
        "code": "BB",
        "un": true,
        "core196": true
    },
    {
        "name": ["Bangladesch", "Bangladesh", "Bangla Desh"],
        "capital": ["Dhaka", "Dhaka"],
        "continent": "Asien",
        "code": "BD",
        "un": true,
        "core196": true
    },
    {
        "name": ["Belgien", "Belgium"],
        "capital": ["Brüssel", "Brussels", "Bruxelles", "Brussel"],
        "continent": "Europa",
        "code": "BE",
        "un": true,
        "core196": true
    },
    {
        "name": ["Burkina Faso", "Burkina Faso"],
        "capital": ["Ouagadougou", "Ouagadougou", "Uagadugu", "Wagadugu"],
        "continent": "Afrika",
        "code": "BF",
        "un": true,
        "core196": true
    },
    {
        "name": ["Bulgarien", "Bulgaria"],
        "capital": ["Sofia", "Sofia"],
        "continent": "Europa",
        "code": "BG",
        "un": true,
        "core196": true
    },
    {
        "name": ["Bahrain", "Bahrain"],
        "capital": ["Manama", "Manama"],
        "continent": "Asien",
        "code": "BH",
        "un": true,
        "core196": true
    },
    {
        "name": ["Burundi", "Burundi"],
        "capital": ["Gitega", "Gitega"],
        "continent": "Afrika",
        "code": "BI",
        "un": true,
        "core196": true
    },
    {
        "name": ["Benin", "Benin"],
        "capital": ["Porto-Novo", "Porto-Novo"],
        "continent": "Afrika",
        "code": "BJ",
        "un": true,
        "core196": true
    },
    {
        "name": ["Saint-Barthélemy", "Saint Barthélemy", "Saint Barthelemy"],
        "capital": ["Gustavia", "Gustavia"],
        "continent": "Nordamerika",
        "code": "BL",
        "un": false,
        "core196": false
    },
    {
        "name": ["Bermuda", "Bermuda"],
        "capital": ["Hamilton", "Hamilton"],
        "continent": "Nordamerika",
        "code": "BM",
        "un": false,
        "core196": false
    },
    {
        "name": ["Brunei Darussalam", "Brunei Darussalam", "Brunei"],
        "capital": ["Bandar Seri Begawan", "Bandar Seri Begawan", "Bandar Seri"],
        "continent": "Asien",
        "code": "BN",
        "un": true,
        "core196": true
    },
    {
        "name": ["Bolivien", "Bolivia", "Estado Plurinacional de Bolivia"],
        "capital": ["Sucre", "Sucre", "La Paz"],
        "continent": "Südamerika",
        "code": "BO",
        "un": true,
        "core196": true
    },
    {
        "name": ["Bonaire", "Bonaire, Sint Eustatius and Saba", "Karibische Niederlande", "Caribbean Netherlands"],
        "capital": ["Kralendijk", "Kralendijk"],
        "continent": "Nordamerika",
        "code": "BQ",
        "un": false,
        "core196": false
    },
    {
        "name": ["Brasilien", "Brazil", "Brasil"],
        "capital": ["Brasília", "Brasília", "Brasilia"],
        "continent": "Südamerika",
        "code": "BR",
        "un": true,
        "core196": true
    },
    {
        "name": ["Bahamas", "Bahamas"],
        "capital": ["Nassau", "Nassau"],
        "continent": "Nordamerika",
        "code": "BS",
        "un": true,
        "core196": true
    },
    {
        "name": ["Bhutan", "Bhutan"],
        "capital": ["Thimphu", "Thimphu"],
        "continent": "Asien",
        "code": "BT",
        "un": true,
        "core196": true
    },
    {
        "name": ["Bouvetinsel", "Bouvet Island"],
        "capital": ["N/A", "N/A"],
        "continent": "Antarktis",
        "code": "BV",
        "un": false,
        "core196": false
    },
    {
        "name": ["Botswana", "Botswana"],
        "capital": ["Gaborone", "Gaborone"],
        "continent": "Afrika",
        "code": "BW",
        "un": true,
        "core196": true
    },
    {
        "name": ["Belarus", "Belarus", "Weißrussland", "Weissrussland", "Belorussia"],
        "capital": ["Minsk", "Minsk"],
        "continent": "Europa",
        "code": "BY",
        "un": true,
        "core196": true
    },
    {
        "name": ["Belize", "Belize"],
        "capital": ["Belmopan", "Belmopan"],
        "continent": "Nordamerika",
        "code": "BZ",
        "un": true,
        "core196": true
    },
    {
        "name": ["Kanada", "Canada"],
        "capital": ["Ottawa", "Ottawa"],
        "continent": "Nordamerika",
        "code": "CA",
        "un": true,
        "core196": true
    },
    {
        "name": ["Kokosinseln", "Cocos (Keeling) Islands", "Keelinginseln", "Keeling Islands"],
        "capital": ["West Island", "West Island"],
        "continent": "Ozeanien",
        "code": "CC",
        "un": false,
        "core196": false
    },
    {
        "name": ["Demokratische Republik Kongo", "Congo, The Democratic Republic Of The", "DR Kongo", "DR Congo", "DRC", "Democratic Republic of the Congo", "Congo Kinshasa", "Kongo Kinshasa", "Kongo-Kinshasa", "Congo-Kinshasa", "Demokratischer Kongo"],
        "capital": ["Kinshasa", "Kinshasa"],
        "continent": "Afrika",
        "code": "CD",
        "un": true,
        "core196": true
    },
    {
        "name": ["Zentralafrikanische Republik", "Central African Republic", "Zentralafrika", "ZAR"],
        "capital": ["Bangui", "Bangui"],
        "continent": "Afrika",
        "code": "CF",
        "un": true,
        "core196": true
    },
    {
        "name": ["Republik Kongo", "Republic Congo", "Republic of the Congo", "Kongo Brazzaville", "Congo Brazzaville", "Kongo-Brazzaville", "Congo-Brazzaville"],
        "capital": ["Brazzaville", "Brazzaville"],
        "continent": "Afrika",
        "code": "CG",
        "un": true,
        "core196": true
    },
    {
        "name": ["Schweiz", "Switzerland"],
        "capital": ["Bern", "Bern", "Berne"],
        "continent": "Europa",
        "code": "CH",
        "un": true,
        "core196": true
    },
    {
        "name": ["Elfenbeinküste", "Côte D'Ivoire", "Cote D Ivoire", "Cote dIvoire", "Côte d’Ivoire", "Ivory Coast"],
        "capital": ["Yamoussoukro", "Yamoussoukro", "Yamousoukro", "Yamusukro"],
        "continent": "Afrika",
        "code": "CI",
        "un": true,
        "core196": true
    },
    {
        "name": ["Cookinseln", "Cook Islands"],
        "capital": ["Avarua", "Avarua"],
        "continent": "Ozeanien",
        "code": "CK",
        "un": false,
        "core196": false
    },
    {
        "name": ["Chile", "Chile"],
        "capital": ["Santiago", "Santiago"],
        "continent": "Südamerika",
        "code": "CL",
        "un": true,
        "core196": true
    },
    {
        "name": ["Kamerun", "Cameroon"],
        "capital": ["Yaoundé", "Yaoundé", "Yaounde"],
        "continent": "Afrika",
        "code": "CM",
        "un": true,
        "core196": true
    },
    {
        "name": ["China", "China"],
        "capital": ["Peking", "Beijing"],
        "continent": "Asien",
        "code": "CN",
        "un": true,
        "core196": true
    },
    {
        "name": ["Kolumbien", "Colombia"],
        "capital": ["Bogotá", "Bogotá", "Bogota"],
        "continent": "Südamerika",
        "code": "CO",
        "un": true,
        "core196": true
    },
    {
        "name": ["Costa Rica", "Costa Rica"],
        "capital": ["San José", "San José", "San Jose"],
        "continent": "Nordamerika",
        "code": "CR",
        "un": true,
        "core196": true
    },
    {
        "name": ["Kuba", "Cuba"],
        "capital": ["Havanna", "Havana"],
        "continent": "Nordamerika",
        "code": "CU",
        "un": true,
        "core196": true
    },
    {
        "name": ["Kap Verde", "Cape Verde", "Cabo Verde", "Kapverden", "Kapverdische Inseln"],
        "capital": ["Praia", "Praia"],
        "continent": "Afrika",
        "code": "CV",
        "un": true,
        "core196": true
    },
    {
        "name": ["Curaçao", "Curaçao", "Curacao"],
        "capital": ["Willemstad", "Willemstad"],
        "continent": "Nordamerika",
        "code": "CW",
        "un": false,
        "core196": false
    },
    {
        "name": ["Weihnachtsinsel", "Christmas Island"],
        "capital": ["Flying Fish Cove", "Flying Fish Cove"],
        "continent": "Ozeanien",
        "code": "CX",
        "un": false,
        "core196": false
    },
    {
        "name": ["Zypern", "Cyprus"],
        "capital": ["Nikosia", "Nicosia"],
        "continent": "Europa",
        "code": "CY",
        "un": true,
        "core196": true
    },
    {
        "name": ["Tschechien", "Czech Republic", "Czechia", "Tschechische Republik"],
        "capital": ["Prag", "Prague", "Praha"],
        "continent": "Europa",
        "code": "CZ",
        "un": true,
        "core196": true
    },
    {
        "name": ["Deutschland", "Germany"],
        "capital": ["Berlin", "Berlin"],
        "continent": "Europa",
        "code": "DE",
        "un": true,
        "core196": true
    },
    {
        "name": ["Dschibuti", "Djibouti"],
        "capital": ["Dschibuti", "Djibouti"],
        "continent": "Afrika",
        "code": "DJ",
        "un": true,
        "core196": true
    },
    {
        "name": ["Dänemark", "Denmark"],
        "capital": ["Kopenhagen", "Copenhagen", "København", "Kobenhavn"],
        "continent": "Europa",
        "code": "DK",
        "un": true,
        "core196": true
    },
    {
        "name": ["Dominica", "Dominica"],
        "capital": ["Roseau", "Roseau"],
        "continent": "Nordamerika",
        "code": "DM",
        "un": true,
        "core196": true
    },
    {
        "name": ["Dominikanische Republik", "Dominican Republic", "Dom Rep", "Dom. Rep.", "Dominicana", "Dominikanische Rep"],
        "capital": ["Santo Domingo", "Santo Domingo", "Santo Domingo de Guzmán"],
        "continent": "Nordamerika",
        "code": "DO",
        "un": true,
        "core196": true
    },
    {
        "name": ["Algerien", "Algeria"],
        "capital": ["Algier", "Algiers", "Alger"],
        "continent": "Afrika",
        "code": "DZ",
        "un": true,
        "core196": true
    },
    {
        "name": ["Ecuador", "Ecuador"],
        "capital": ["Quito", "Quito"],
        "continent": "Südamerika",
        "code": "EC",
        "un": true,
        "core196": true
    },
    {
        "name": ["Estland", "Estonia"],
        "capital": ["Tallinn", "Tallinn"],
        "continent": "Europa",
        "code": "EE",
        "un": true,
        "core196": true
    },
    {
        "name": ["Ägypten", "Egypt"],
        "capital": ["Kairo", "Cairo", "Al Qahira"],
        "continent": "Afrika",
        "code": "EG",
        "un": true,
        "core196": true
    },
    {
        "name": ["Westsahara", "Western Sahara"],
        "capital": ["El Aaiún", "El Aaiún", "El Aaiun"],
        "continent": "Afrika",
        "code": "EH",
        "un": false,
        "core196": false
    },
    {
        "name": ["Eritrea", "Eritrea"],
        "capital": ["Asmara", "Asmara"],
        "continent": "Afrika",
        "code": "ER",
        "un": true,
        "core196": true
    },
    {
        "name": ["Spanien", "Spain"],
        "capital": ["Madrid", "Madrid"],
        "continent": "Europa",
        "code": "ES",
        "un": true,
        "core196": true
    },
    {
        "name": ["Äthiopien", "Ethiopia"],
        "capital": ["Addis Abeba", "Addis Ababa"],
        "continent": "Afrika",
        "code": "ET",
        "un": true,
        "core196": true
    },
    {
        "name": ["Finnland", "Finland"],
        "capital": ["Helsinki", "Helsinki"],
        "continent": "Europa",
        "code": "FI",
        "un": true,
        "core196": true
    },
    {
        "name": ["Fidschi", "Fiji"],
        "capital": ["Suva", "Suva"],
        "continent": "Ozeanien",
        "code": "FJ",
        "un": true,
        "core196": true
    },
    {
        "name": ["Falklandinseln", "Falkland Islands"],
        "capital": ["Stanley", "Stanley"],
        "continent": "Südamerika",
        "code": "FK",
        "un": false,
        "core196": false
    },
    {
        "name": ["Mikronesien", "Micronesia", "Föderierte Staaten von Mikronesien", "Federated States of Micronesia", "FSM"],
        "capital": ["Palikir", "Palikir"],
        "continent": "Ozeanien",
        "code": "FM",
        "un": true,
        "core196": true
    },
    {
        "name": ["Färöer", "Faroe Islands"],
        "capital": ["Tórshavn", "Tórshavn", "Torshavn"],
        "continent": "Europa",
        "code": "FO",
        "un": false,
        "core196": false
    },
    {
        "name": ["Frankreich", "France"],
        "capital": ["Paris", "Paris"],
        "continent": "Europa",
        "code": "FR",
        "un": true,
        "core196": true
    },
    {
        "name": ["Gabun", "Gabon"],
        "capital": ["Libreville", "Libreville"],
        "continent": "Afrika",
        "code": "GA",
        "un": true,
        "core196": true
    },
    {
        "name": ["Vereinigtes Königreich", "United Kingdom", "UK", "VK", "Großbritannien", "Britain", "Great Britain", "Grossbritannien", "U.K.", "Vereinigtes Koenigreich"],
        "capital": ["London", "London"],
        "continent": "Europa",
        "code": "GB",
        "un": true,
        "core196": true
    },
    {
        "name": ["Grenada", "Grenada"],
        "capital": ["Saint George's", "Saint George's", "St Georges", "St George's", "Saint Georges"],
        "continent": "Nordamerika",
        "code": "GD",
        "un": true,
        "core196": true
    },
    {
        "name": ["Georgien", "Georgia", "Sakartvelo"],
        "capital": ["Tiflis", "Tbilisi", "Tbilissi", "Tblisi"],
        "continent": "Asien",
        "code": "GE",
        "un": true,
        "core196": true
    },
    {
        "name": ["Französisch-Guayana", "French Guiana", "Französisch Guyana", "Franzoesisch Guyana", "Französisch-Guyana"],
        "capital": ["Cayenne", "Cayenne"],
        "continent": "Südamerika",
        "code": "GF",
        "un": false,
        "core196": false
    },
    {
        "name": ["Guernsey", "Guernsey"],
        "capital": ["Saint Peter Port", "Saint Peter Port"],
        "continent": "Europa",
        "code": "GG",
        "un": false,
        "core196": false
    },
    {
        "name": ["Ghana", "Ghana"],
        "capital": ["Accra", "Accra"],
        "continent": "Afrika",
        "code": "GH",
        "un": true,
        "core196": true
    },
    {
        "name": ["Gibraltar", "Gibraltar"],
        "capital": ["Gibraltar", "Gibraltar"],
        "continent": "Europa",
        "code": "GI",
        "un": false,
        "core196": false
    },
    {
        "name": ["Grönland", "Greenland"],
        "capital": ["Nuuk", "Nuuk"],
        "continent": "Nordamerika",
        "code": "GL",
        "un": false,
        "core196": false
    },
    {
        "name": ["Gambia", "Gambia"],
        "capital": ["Banjul", "Banjul"],
        "continent": "Afrika",
        "code": "GM",
        "un": true,
        "core196": true
    },
    {
        "name": ["Guinea", "Guinea"],
        "capital": ["Conakry", "Conakry"],
        "continent": "Afrika",
        "code": "GN",
        "un": true,
        "core196": true
    },
    {
        "name": ["Guadeloupe", "Guadeloupe"],
        "capital": ["Basse-Terre", "Basse-Terre"],
        "continent": "Nordamerika",
        "code": "GP",
        "un": false,
        "core196": false
    },
    {
        "name": ["Äquatorialguinea", "Equatorial Guinea"],
        "capital": ["Ciudad de la Paz", "Ciudad de la Paz", "Malabo", "Ciudad de Paz", "Djibloho"],
        "continent": "Afrika",
        "code": "GQ",
        "un": true,
        "core196": true
    },
    {
        "name": ["Griechenland", "Greece"],
        "capital": ["Athen", "Athens"],
        "continent": "Europa",
        "code": "GR",
        "un": true,
        "core196": true
    },
    {
        "name": ["Südgeorgien und die Südlichen Sandwichinseln", "South Georgia and the South Sandwich Islands"],
        "capital": ["King Edward Point", "King Edward Point"],
        "continent": "Antarktis",
        "code": "GS",
        "un": false,
        "core196": false
    },
    {
        "name": ["Guatemala", "Guatemala"],
        "capital": ["Guatemala-Stadt", "Guatemala City", "Guatemala Stadt"],
        "continent": "Nordamerika",
        "code": "GT",
        "un": true,
        "core196": true
    },
    {
        "name": ["Guam", "Guam"],
        "capital": ["Hagåtña", "Hagåtña", "Hagatna", "Agana", "Agaña"],
        "continent": "Ozeanien",
        "code": "GU",
        "un": false,
        "core196": false
    },
    {
        "name": ["Guinea-Bissau", "Guinea-Bissau", "Guinea Bissau"],
        "capital": ["Bissau", "Bissau"],
        "continent": "Afrika",
        "code": "GW",
        "un": true,
        "core196": true
    },
    {
        "name": ["Guyana", "Guyana"],
        "capital": ["Georgetown", "Georgetown"],
        "continent": "Südamerika",
        "code": "GY",
        "un": true,
        "core196": true
    },
    {
        "name": ["Hongkong", "Hong Kong", "Hong Kong SAR"],
        "capital": ["Victoria", "Victoria", "Hong Kong", "Hongkong"],
        "continent": "Asien",
        "code": "HK",
        "un": false,
        "core196": false
    },
    {
        "name": ["Heard und McDonald-Inseln", "Heard and McDonald Islands", "Heard und McDonald Inseln"],
        "capital": ["-", "-"],
        "continent": "Antarktis",
        "code": "HM",
        "un": false,
        "core196": false
    },
    {
        "name": ["Honduras", "Honduras"],
        "capital": ["Tegucigalpa", "Tegucigalpa"],
        "continent": "Nordamerika",
        "code": "HN",
        "un": true,
        "core196": true
    },
    {
        "name": ["Kroatien", "Croatia"],
        "capital": ["Zagreb", "Zagreb"],
        "continent": "Europa",
        "code": "HR",
        "un": true,
        "core196": true
    },
    {
        "name": ["Haiti", "Haiti"],
        "capital": ["Port-au-Prince", "Port-au-Prince"],
        "continent": "Nordamerika",
        "code": "HT",
        "un": true,
        "core196": true
    },
    {
        "name": ["Ungarn", "Hungary"],
        "capital": ["Budapest", "Budapest"],
        "continent": "Europa",
        "code": "HU",
        "un": true,
        "core196": true
    },
    {
        "name": ["Indonesien", "Indonesia", "Republic of Indonesia"],
        "capital": ["Jakarta", "Jakarta", "Djakarta"],
        "continent": "Asien",
        "code": "ID",
        "un": true,
        "core196": true
    },
    {
        "name": ["Irland", "Ireland"],
        "capital": ["Dublin", "Dublin", "Baile Átha Cliath"],
        "continent": "Europa",
        "code": "IE",
        "un": true,
        "core196": true
    },
    {
        "name": ["Israel", "Israel"],
        "capital": ["Jerusalem", "Jerusalem"],
        "continent": "Asien",
        "code": "IL",
        "un": true,
        "core196": true
    },
    {
        "name": ["Isle of Man", "Isle of Man"],
        "capital": ["Douglas", "Douglas"],
        "continent": "Europa",
        "code": "IM",
        "un": false,
        "core196": false
    },
    {
        "name": ["Indien", "India", "Bharat"],
        "capital": ["Neu-Delhi", "New Delhi", "Neu Delhi", "Delhi"],
        "continent": "Asien",
        "code": "IN",
        "un": true,
        "core196": true
    },
    {
        "name": ["Britisches Territorium im Indischen Ozean", "British Indian Ocean Territory"],
        "capital": ["Diego Garcia", "Diego Garcia"],
        "continent": "Asien",
        "code": "IO",
        "un": false,
        "core196": false
    },
    {
        "name": ["Irak", "Iraq"],
        "capital": ["Bagdad", "Baghdad"],
        "continent": "Asien",
        "code": "IQ",
        "un": true,
        "core196": true
    },
    {
        "name": ["Iran", "Iran", "Islamische Republik Iran", "Islamic Republic of Iran"],
        "capital": ["Teheran", "Tehran"],
        "continent": "Asien",
        "code": "IR",
        "un": true,
        "core196": true
    },
    {
        "name": ["Island", "Iceland"],
        "capital": ["Reykjavik", "Reykjavik", "Reykjavík"],
        "continent": "Europa",
        "code": "IS",
        "un": true,
        "core196": true
    },
    {
        "name": ["Italien", "Italy"],
        "capital": ["Rom", "Rome", "Roma"],
        "continent": "Europa",
        "code": "IT",
        "un": true,
        "core196": true
    },
    {
        "name": ["Jersey", "Jersey"],
        "capital": ["Saint Helier", "Saint Helier"],
        "continent": "Europa",
        "code": "JE",
        "un": false,
        "core196": false
    },
    {
        "name": ["Jamaika", "Jamaica"],
        "capital": ["Kingston", "Kingston"],
        "continent": "Nordamerika",
        "code": "JM",
        "un": true,
        "core196": true
    },
    {
        "name": ["Jordanien", "Jordan"],
        "capital": ["Amman", "Amman"],
        "continent": "Asien",
        "code": "JO",
        "un": true,
        "core196": true
    },
    {
        "name": ["Japan", "Japan"],
        "capital": ["Tokio", "Tokyo"],
        "continent": "Asien",
        "code": "JP",
        "un": true,
        "core196": true
    },
    {
        "name": ["Kenia", "Kenya"],
        "capital": ["Nairobi", "Nairobi"],
        "continent": "Afrika",
        "code": "KE",
        "un": true,
        "core196": true
    },
    {
        "name": ["Kirgisistan", "Kyrgyzstan"],
        "capital": ["Bischkek", "Bishkek"],
        "continent": "Asien",
        "code": "KG",
        "un": true,
        "core196": true
    },
    {
        "name": ["Kambodscha", "Cambodia"],
        "capital": ["Phnom Penh", "Phnom Penh", "Phnom-Penh", "Pnom Penh", "Phnompenh"],
        "continent": "Asien",
        "code": "KH",
        "un": true,
        "core196": true
    },
    {
        "name": ["Kiribati", "Kiribati"],
        "capital": ["South Tarawa", "South Tarawa", "Tarawa"],
        "continent": "Ozeanien",
        "code": "KI",
        "un": true,
        "core196": true
    },
    {
        "name": ["Komoren", "Comoros"],
        "capital": ["Moroni", "Moroni"],
        "continent": "Afrika",
        "code": "KM",
        "un": true,
        "core196": true
    },
    {
        "name": ["St. Kitts und Nevis", "Saint Kitts And Nevis", "St Kitts und Nevis", "St Kitts and Nevis", "St Kitts Nevis"],
        "capital": ["Basseterre", "Basseterre"],
        "continent": "Nordamerika",
        "code": "KN",
        "un": true,
        "core196": true
    },
    {
        "name": ["Nordkorea", "Korea, Democratic People's Republic Of", "North Korea", "Demokratische Volksrepublik Korea", "DVRK", "DPRK", "Korea Nord"],
        "capital": ["Pjöngjang", "Pyongyang", "Pjongjang", "Pjoengjang"],
        "continent": "Asien",
        "code": "KP",
        "un": true,
        "core196": true
    },
    {
        "name": ["Südkorea", "Korea, Republic of", "South Korea", "Republik Korea", "Republic of Korea", "Korea Süd"],
        "capital": ["Seoul", "Seoul", "Seul"],
        "continent": "Asien",
        "code": "KR",
        "un": true,
        "core196": true
    },
    {
        "name": ["Kuwait", "Kuwait"],
        "capital": ["Kuwait-Stadt", "Kuwait City"],
        "continent": "Asien",
        "code": "KW",
        "un": true,
        "core196": true
    },
    {
        "name": ["Kaimaninseln", "Cayman Islands"],
        "capital": ["George Town", "George Town"],
        "continent": "Nordamerika",
        "code": "KY",
        "un": false,
        "core196": false
    },
    {
        "name": ["Kasachstan", "Kazakhstan"],
        "capital": ["Astana", "Astana", "Nur Sultan", "Nursultan"],
        "continent": "Asien",
        "code": "KZ",
        "un": true,
        "core196": true
    },
    {
        "name": ["Laos", "Laos", "Lao PDR"],
        "capital": ["Vientiane", "Vientiane"],
        "continent": "Asien",
        "code": "LA",
        "un": true,
        "core196": true
    },
    {
        "name": ["Libanon", "Lebanon"],
        "capital": ["Beirut", "Beirut"],
        "continent": "Asien",
        "code": "LB",
        "un": true,
        "core196": true
    },
    {
        "name": ["St. Lucia", "Saint Lucia", "St Lucia", "Sankt Lucia"],
        "capital": ["Castries", "Castries"],
        "continent": "Nordamerika",
        "code": "LC",
        "un": true,
        "core196": true
    },
    {
        "name": ["Liechtenstein", "Liechtenstein"],
        "capital": ["Vaduz", "Vaduz"],
        "continent": "Europa",
        "code": "LI",
        "un": true,
        "core196": true
    },
    {
        "name": ["Sri Lanka", "Sri Lanka", "Ceylon"],
        "capital": ["Sri Jayawardenepura Kotte", "Sri Jayawardenepura Kotte", "Kotte", "Sri Jayawardenapura Kotte", "Sri Jayawardenepura", "Jayawardenepura Kotte", "Sri Jayewardenepura Kotte", "Colombo"],
        "continent": "Asien",
        "code": "LK",
        "un": true,
        "core196": true
    },
    {
        "name": ["Liberia", "Liberia"],
        "capital": ["Monrovia", "Monrovia"],
        "continent": "Afrika",
        "code": "LR",
        "un": true,
        "core196": true
    },
    {
        "name": ["Lesotho", "Lesotho"],
        "capital": ["Maseru", "Maseru"],
        "continent": "Afrika",
        "code": "LS",
        "un": true,
        "core196": true
    },
    {
        "name": ["Litauen", "Lithuania"],
        "capital": ["Vilnius", "Vilnius"],
        "continent": "Europa",
        "code": "LT",
        "un": true,
        "core196": true
    },
    {
        "name": ["Luxemburg", "Luxembourg"],
        "capital": ["Luxemburg", "Luxembourg", "Luxembourg City", "Luxemburg Stadt"],
        "continent": "Europa",
        "code": "LU",
        "un": true,
        "core196": true
    },
    {
        "name": ["Lettland", "Latvia"],
        "capital": ["Riga", "Riga"],
        "continent": "Europa",
        "code": "LV",
        "un": true,
        "core196": true
    },
    {
        "name": ["Libyen", "Libya"],
        "capital": ["Tripolis", "Tripoli"],
        "continent": "Afrika",
        "code": "LY",
        "un": true,
        "core196": true
    },
    {
        "name": ["Marokko", "Morocco"],
        "capital": ["Rabat", "Rabat"],
        "continent": "Afrika",
        "code": "MA",
        "un": true,
        "core196": true
    },
    {
        "name": ["Monaco", "Monaco"],
        "capital": ["Monaco", "Monaco"],
        "continent": "Europa",
        "code": "MC",
        "un": true,
        "core196": true
    },
    {
        "name": ["Moldawien", "Moldova", "Moldau", "Republik Moldau", "Republic of Moldova", "Moldavia"],
        "capital": ["Chisinau", "Chisinau", "Chișinău", "Chişinău", "Kischinau", "Kischinjow"],
        "continent": "Europa",
        "code": "MD",
        "un": true,
        "core196": true
    },
    {
        "name": ["Montenegro", "Montenegro"],
        "capital": ["Podgorica", "Podgorica"],
        "continent": "Europa",
        "code": "ME",
        "un": true,
        "core196": true
    },
    {
        "name": ["Saint-Martin", "Saint Martin"],
        "capital": ["Marigot", "Marigot"],
        "continent": "Nordamerika",
        "code": "MF",
        "un": false,
        "core196": false
    },
    {
        "name": ["Madagaskar", "Madagascar"],
        "capital": ["Antananarivo", "Antananarivo", "Tana"],
        "continent": "Afrika",
        "code": "MG",
        "un": true,
        "core196": true
    },
    {
        "name": ["Marshallinseln", "Marshall Islands"],
        "capital": ["Majuro", "Majuro"],
        "continent": "Ozeanien",
        "code": "MH",
        "un": true,
        "core196": true
    },
    {
        "name": ["Nordmazedonien", "Macedonia", "North Macedonia", "Nord-Mazedonien", "Mazedonien"],
        "capital": ["Skopje", "Skopje"],
        "continent": "Europa",
        "code": "MK",
        "un": true,
        "core196": true
    },
    {
        "name": ["Mali", "Mali"],
        "capital": ["Bamako", "Bamako"],
        "continent": "Afrika",
        "code": "ML",
        "un": true,
        "core196": true
    },
    {
        "name": ["Myanmar", "Myanmar", "Burma", "Birma"],
        "capital": ["Naypyidaw", "Naypyidaw", "Nay Pyi Taw", "Naypyitaw", "Nay Pyi Daw"],
        "continent": "Asien",
        "code": "MM",
        "un": true,
        "core196": true
    },
    {
        "name": ["Mongolei", "Mongolia"],
        "capital": ["Ulaanbaatar", "Ulaanbaatar", "Ulan Bator", "Ulan-Bator", "Ulanbaatar", "Ulaan Bator"],
        "continent": "Asien",
        "code": "MN",
        "un": true,
        "core196": true
    },
    {
        "name": ["Macao", "Macao", "Macau"],
        "capital": ["Macao", "Macao", "Macau"],
        "continent": "Asien",
        "code": "MO",
        "un": false,
        "core196": false
    },
    {
        "name": ["Nördliche Marianen", "Northern Mariana Islands"],
        "capital": ["Saipan", "Saipan"],
        "continent": "Ozeanien",
        "code": "MP",
        "un": false,
        "core196": false
    },
    {
        "name": ["Martinique", "Martinique"],
        "capital": ["Fort-de-France", "Fort-de-France"],
        "continent": "Nordamerika",
        "code": "MQ",
        "un": false,
        "core196": false
    },
    {
        "name": ["Mauretanien", "Mauritania"],
        "capital": ["Nouakchott", "Nouakchott"],
        "continent": "Afrika",
        "code": "MR",
        "un": true,
        "core196": true
    },
    {
        "name": ["Montserrat", "Montserrat"],
        "capital": ["Plymouth", "Plymouth", "Brades"],
        "continent": "Nordamerika",
        "code": "MS",
        "un": false,
        "core196": false
    },
    {
        "name": ["Malta", "Malta"],
        "capital": ["Valletta", "Valletta"],
        "continent": "Europa",
        "code": "MT",
        "un": true,
        "core196": true
    },
    {
        "name": ["Mauritius", "Mauritius"],
        "capital": ["Port Louis", "Port Louis"],
        "continent": "Afrika",
        "code": "MU",
        "un": true,
        "core196": true
    },
    {
        "name": ["Malediven", "Maldives"],
        "capital": ["Malé", "Malé", "Male"],
        "continent": "Asien",
        "code": "MV",
        "un": true,
        "core196": true
    },
    {
        "name": ["Malawi", "Malawi"],
        "capital": ["Lilongwe", "Lilongwe"],
        "continent": "Afrika",
        "code": "MW",
        "un": true,
        "core196": true
    },
    {
        "name": ["Mexiko", "Mexico", "México"],
        "capital": ["Mexiko-Stadt", "Mexico City", "Ciudad de México", "Mexico Stadt", "Mexiko City"],
        "continent": "Nordamerika",
        "code": "MX",
        "un": true,
        "core196": true
    },
    {
        "name": ["Malaysia", "Malaysia"],
        "capital": ["Kuala Lumpur", "Kuala Lumpur", "KL"],
        "continent": "Asien",
        "code": "MY",
        "un": true,
        "core196": true
    },
    {
        "name": ["Mosambik", "Mozambique"],
        "capital": ["Maputo", "Maputo"],
        "continent": "Afrika",
        "code": "MZ",
        "un": true,
        "core196": true
    },
    {
        "name": ["Namibia", "Namibia"],
        "capital": ["Windhoek", "Windhoek"],
        "continent": "Afrika",
        "code": "NA",
        "un": true,
        "core196": true
    },
    {
        "name": ["Neukaledonien", "New Caledonia"],
        "capital": ["Nouméa", "Nouméa", "Noumea"],
        "continent": "Ozeanien",
        "code": "NC",
        "un": false,
        "core196": false
    },
    {
        "name": ["Niger", "Niger"],
        "capital": ["Niamey", "Niamey"],
        "continent": "Afrika",
        "code": "NE",
        "un": true,
        "core196": true
    },
    {
        "name": ["Norfolkinsel", "Norfolk Island"],
        "capital": ["Kingston", "Kingston"],
        "continent": "Ozeanien",
        "code": "NF",
        "un": false,
        "core196": false
    },
    {
        "name": ["Nigeria", "Nigeria"],
        "capital": ["Abuja", "Abuja"],
        "continent": "Afrika",
        "code": "NG",
        "un": true,
        "core196": true
    },
    {
        "name": ["Nicaragua", "Nicaragua"],
        "capital": ["Managua", "Managua"],
        "continent": "Nordamerika",
        "code": "NI",
        "un": true,
        "core196": true
    },
    {
        "name": ["Niederlande", "Netherlands", "Holland", "The Netherlands"],
        "capital": ["Amsterdam", "Amsterdam", "Den Haag", "The Hague", "The Hague (seat of government)", "Den Haag (Regierungssitz)"],
        "continent": "Europa",
        "code": "NL",
        "un": true,
        "core196": true
    },
    {
        "name": ["Norwegen", "Norway"],
        "capital": ["Oslo", "Oslo"],
        "continent": "Europa",
        "code": "NO",
        "un": true,
        "core196": true
    },
    {
        "name": ["Nepal", "Nepal"],
        "capital": ["Kathmandu", "Kathmandu", "Katmandu"],
        "continent": "Asien",
        "code": "NP",
        "un": true,
        "core196": true
    },
    {
        "name": ["Nauru", "Nauru"],
        "capital": ["Yaren", "Yaren", "Yaren District"],
        "continent": "Ozeanien",
        "code": "NR",
        "un": true,
        "core196": true
    },
    {
        "name": ["Niue", "Niue"],
        "capital": ["Alofi", "Alofi"],
        "continent": "Ozeanien",
        "code": "NU",
        "un": false,
        "core196": false
    },
    {
        "name": ["Neuseeland", "New Zealand", "Aotearoa"],
        "capital": ["Wellington", "Wellington"],
        "continent": "Ozeanien",
        "code": "NZ",
        "un": true,
        "core196": true
    },
    {
        "name": ["Oman", "Oman"],
        "capital": ["Maskat", "Muscat"],
        "continent": "Asien",
        "code": "OM",
        "un": true,
        "core196": true
    },
    {
        "name": ["Panama", "Panama"],
        "capital": ["Panama-Stadt", "Panama City", "Ciudad de Panama", "Panama Stadt"],
        "continent": "Nordamerika",
        "code": "PA",
        "un": true,
        "core196": true
    },
    {
        "name": ["Peru", "Peru"],
        "capital": ["Lima", "Lima"],
        "continent": "Südamerika",
        "code": "PE",
        "un": true,
        "core196": true
    },
    {
        "name": ["Französisch-Polynesien", "French Polynesia", "Französisch Polynesien"],
        "capital": ["Papeete", "Papeete"],
        "continent": "Ozeanien",
        "code": "PF",
        "un": false,
        "core196": false
    },
    {
        "name": ["Papua-Neuguinea", "Papua New Guinea", "Papua Neuguinea"],
        "capital": ["Port Moresby", "Port Moresby"],
        "continent": "Ozeanien",
        "code": "PG",
        "un": true,
        "core196": true
    },
    {
        "name": ["Philippinen", "Philippines"],
        "capital": ["Manila", "Manila"],
        "continent": "Asien",
        "code": "PH",
        "un": true,
        "core196": true
    },
    {
        "name": ["Pakistan", "Pakistan"],
        "capital": ["Islamabad", "Islamabad"],
        "continent": "Asien",
        "code": "PK",
        "un": true,
        "core196": true
    },
    {
        "name": ["Polen", "Poland"],
        "capital": ["Warschau", "Warsaw", "Warszawa"],
        "continent": "Europa",
        "code": "PL",
        "un": true,
        "core196": true
    },
    {
        "name": ["Saint-Pierre und Miquelon", "Saint Pierre And Miquelon", "St Pierre und Miquelon", "St Pierre and Miquelon"],
        "capital": ["Saint-Pierre", "Saint-Pierre"],
        "continent": "Nordamerika",
        "code": "PM",
        "un": false,
        "core196": false
    },
    {
        "name": ["Pitcairninseln", "Pitcairn"],
        "capital": ["Adamstown", "Adamstown"],
        "continent": "Ozeanien",
        "code": "PN",
        "un": false,
        "core196": false
    },
    {
        "name": ["Puerto Rico", "Puerto Rico"],
        "capital": ["San Juan", "San Juan"],
        "continent": "Nordamerika",
        "code": "PR",
        "un": false,
        "core196": false
    },
    {
        "name": ["Palästina", "Palestine", "Palestinian Territories", "Palestinian State", "State of Palestine"],
        "capital": ["Ost-Jerusalem", "East Jerusalem", "Ost Jerusalem", "Ramallah"],
        "continent": "Asien",
        "code": "PS",
        "un": false,
        "core196": true
    },
    {
        "name": ["Portugal", "Portugal"],
        "capital": ["Lissabon", "Lisbon"],
        "continent": "Europa",
        "code": "PT",
        "un": true,
        "core196": true
    },
    {
        "name": ["Palau", "Palau"],
        "capital": ["Ngerulmud", "Ngerulmud"],
        "continent": "Ozeanien",
        "code": "PW",
        "un": true,
        "core196": true
    },
    {
        "name": ["Paraguay", "Paraguay"],
        "capital": ["Asunción", "Asunción", "Asuncion"],
        "continent": "Südamerika",
        "code": "PY",
        "un": true,
        "core196": true
    },
    {
        "name": ["Katar", "Qatar"],
        "capital": ["Doha", "Doha"],
        "continent": "Asien",
        "code": "QA",
        "un": true,
        "core196": true
    },
    {
        "name": ["Réunion", "Réunion", "Reunion"],
        "capital": ["Saint-Denis", "Saint-Denis"],
        "continent": "Afrika",
        "code": "RE",
        "un": false,
        "core196": false
    },
    {
        "name": ["Rumänien", "Romania"],
        "capital": ["Bukarest", "Bucharest", "București", "Bucuresti"],
        "continent": "Europa",
        "code": "RO",
        "un": true,
        "core196": true
    },
    {
        "name": ["Serbien", "Serbia"],
        "capital": ["Belgrad", "Belgrade"],
        "continent": "Europa",
        "code": "RS",
        "un": true,
        "core196": true
    },
    {
        "name": ["Russland", "Russian Federation", "Russia", "Russische Föderation"],
        "capital": ["Moskau", "Moscow", "Moskva"],
        "continent": "Europa",
        "code": "RU",
        "un": true,
        "core196": true
    },
    {
        "name": ["Ruanda", "Rwanda"],
        "capital": ["Kigali", "Kigali"],
        "continent": "Afrika",
        "code": "RW",
        "un": true,
        "core196": true
    },
    {
        "name": ["Saudi-Arabien", "Saudi Arabia", "Königreich Saudi-Arabien"],
        "capital": ["Riad", "Riyadh"],
        "continent": "Asien",
        "code": "SA",
        "un": true,
        "core196": true
    },
    {
        "name": ["Salomonen", "Solomon Islands"],
        "capital": ["Honiara", "Honiara"],
        "continent": "Ozeanien",
        "code": "SB",
        "un": true,
        "core196": true
    },
    {
        "name": ["Seychellen", "Seychelles"],
        "capital": ["Victoria", "Victoria"],
        "continent": "Afrika",
        "code": "SC",
        "un": true,
        "core196": true
    },
    {
        "name": ["Sudan", "Sudan"],
        "capital": ["Khartum", "Khartoum"],
        "continent": "Afrika",
        "code": "SD",
        "un": true,
        "core196": true
    },
    {
        "name": ["Schweden", "Sweden"],
        "capital": ["Stockholm", "Stockholm"],
        "continent": "Europa",
        "code": "SE",
        "un": true,
        "core196": true
    },
    {
        "name": ["Singapur", "Singapore"],
        "capital": ["Singapur", "Singapore"],
        "continent": "Asien",
        "code": "SG",
        "un": true,
        "core196": true
    },
    {
        "name": ["Saint Helena", "Saint Helena", "St Helena", "St. Helena"],
        "capital": ["Jamestown", "Jamestown"],
        "continent": "Afrika",
        "code": "SH",
        "un": false,
        "core196": false
    },
    {
        "name": ["Slowenien", "Slovenia"],
        "capital": ["Ljubljana", "Ljubljana"],
        "continent": "Europa",
        "code": "SI",
        "un": true,
        "core196": true
    },
    {
        "name": ["Svalbard und Jan Mayen", "Svalbard And Jan Mayen"],
        "capital": ["Longyearbyen", "Longyearbyen"],
        "continent": "Europa",
        "code": "SJ",
        "un": false,
        "core196": false
    },
    {
        "name": ["Slowakei", "Slovakia"],
        "capital": ["Bratislava", "Bratislava"],
        "continent": "Europa",
        "code": "SK",
        "un": true,
        "core196": true
    },
    {
        "name": ["Sierra Leone", "Sierra Leone"],
        "capital": ["Freetown", "Freetown"],
        "continent": "Afrika",
        "code": "SL",
        "un": true,
        "core196": true
    },
    {
        "name": ["San Marino", "San Marino"],
        "capital": ["San Marino", "San Marino"],
        "continent": "Europa",
        "code": "SM",
        "un": true,
        "core196": true
    },
    {
        "name": ["Senegal", "Senegal"],
        "capital": ["Dakar", "Dakar"],
        "continent": "Afrika",
        "code": "SN",
        "un": true,
        "core196": true
    },
    {
        "name": ["Somalia", "Somalia"],
        "capital": ["Mogadischu", "Mogadishu"],
        "continent": "Afrika",
        "code": "SO",
        "un": true,
        "core196": true
    },
    {
        "name": ["Suriname", "Suriname"],
        "capital": ["Paramaribo", "Paramaribo"],
        "continent": "Südamerika",
        "code": "SR",
        "un": true,
        "core196": true
    },
    {
        "name": ["Südsudan", "South Sudan"],
        "capital": ["Juba", "Juba"],
        "continent": "Afrika",
        "code": "SS",
        "un": true,
        "core196": true
    },
    {
        "name": ["São Tomé und Príncipe", "Sao Tome and Principe", "Sao Tome und Principe", "Sao Tome & Principe"],
        "capital": ["São Tomé", "Sao Tome"],
        "continent": "Afrika",
        "code": "ST",
        "un": true,
        "core196": true
    },
    {
        "name": ["El Salvador", "El Salvador", "Salvador"],
        "capital": ["San Salvador", "San Salvador"],
        "continent": "Nordamerika",
        "code": "SV",
        "un": true,
        "core196": true
    },
    {
        "name": ["Sint Maarten", "Sint Maarten"],
        "capital": ["Philipsburg", "Philipsburg"],
        "continent": "Nordamerika",
        "code": "SX",
        "un": false,
        "core196": false
    },
    {
        "name": ["Syrien", "Syria", "Syrian Arab Republic"],
        "capital": ["Damaskus", "Damascus"],
        "continent": "Asien",
        "code": "SY",
        "un": true,
        "core196": true
    },
    {
        "name": ["Eswatini", "Eswatini", "Swasiland", "Swaziland", "Kingdom of Eswatini"],
        "capital": ["Mbabane", "Mbabane", "Lobamba"],
        "continent": "Afrika",
        "code": "SZ",
        "un": true,
        "core196": true
    },
    {
        "name": ["Turks- und Caicosinseln", "Turks and Caicos Islands", "Turks und Caicosinseln"],
        "capital": ["Cockburn Town", "Cockburn Town"],
        "continent": "Nordamerika",
        "code": "TC",
        "un": false,
        "core196": false
    },
    {
        "name": ["Tschad", "Chad"],
        "capital": ["N'Djamena", "N'Djamena", "N Djamena", "Ndjamena", "Njamena"],
        "continent": "Afrika",
        "code": "TD",
        "un": true,
        "core196": true
    },
    {
        "name": ["Französische Süd- und Antarktisgebiete", "French Southern Territories", "Französische Süd und Antarktisgebiete"],
        "capital": ["Port-aux-Français", "Port-aux-Français", "Port aux Francais"],
        "continent": "Antarktis",
        "code": "TF",
        "un": false,
        "core196": false
    },
    {
        "name": ["Togo", "Togo"],
        "capital": ["Lomé", "Lomé", "Lome"],
        "continent": "Afrika",
        "code": "TG",
        "un": true,
        "core196": true
    },
    {
        "name": ["Thailand", "Thailand"],
        "capital": ["Bangkok", "Bangkok"],
        "continent": "Asien",
        "code": "TH",
        "un": true,
        "core196": true
    },
    {
        "name": ["Tadschikistan", "Tajikistan"],
        "capital": ["Duschanbe", "Dushanbe"],
        "continent": "Asien",
        "code": "TJ",
        "un": true,
        "core196": true
    },
    {
        "name": ["Tokelau", "Tokelau"],
        "capital": ["Fakaofo", "Fakaofo"],
        "continent": "Ozeanien",
        "code": "TK",
        "un": false,
        "core196": false
    },
    {
        "name": ["Osttimor", "Timor-Leste", "Timor Leste", "East Timor", "Ost-Timor"],
        "capital": ["Dili", "Dili"],
        "continent": "Asien",
        "code": "TL",
        "un": true,
        "core196": true
    },
    {
        "name": ["Turkmenistan", "Turkmenistan"],
        "capital": ["Aschgabat", "Ashgabat", "Asgabat", "Aşgabat", "Asgabad", "Ashkhabad"],
        "continent": "Asien",
        "code": "TM",
        "un": true,
        "core196": true
    },
    {
        "name": ["Tunesien", "Tunisia"],
        "capital": ["Tunis", "Tunis"],
        "continent": "Afrika",
        "code": "TN",
        "un": true,
        "core196": true
    },
    {
        "name": ["Tonga", "Tonga"],
        "capital": ["Nukuʻalofa", "Nukuʻalofa", "Nuku'alofa", "Nukualofa"],
        "continent": "Ozeanien",
        "code": "TO",
        "un": true,
        "core196": true
    },
    {
        "name": ["Türkei", "Turkey", "Türkiye", "Turkiye"],
        "capital": ["Ankara", "Ankara"],
        "continent": "Asien",
        "code": "TR",
        "un": true,
        "core196": true
    },
    {
        "name": ["Trinidad und Tobago", "Trinidad and Tobago"],
        "capital": ["Port of Spain", "Port of Spain"],
        "continent": "Nordamerika",
        "code": "TT",
        "un": true,
        "core196": true
    },
    {
        "name": ["Tuvalu", "Tuvalu"],
        "capital": ["Funafuti", "Funafuti"],
        "continent": "Ozeanien",
        "code": "TV",
        "un": true,
        "core196": true
    },
    {
        "name": ["Taiwan", "Taiwan", "Republic of China"],
        "capital": ["Taipeh", "Taipei", "Taibei"],
        "continent": "Asien",
        "code": "TW",
        "un": false,
        "core196": true
    },
    {
        "name": ["Tansania", "Tanzania", "United Republic of Tanzania"],
        "capital": ["Dodoma", "Dodoma"],
        "continent": "Afrika",
        "code": "TZ",
        "un": true,
        "core196": true
    },
    {
        "name": ["Ukraine", "Ukraine", "Ukraina"],
        "capital": ["Kiew", "Kyiv", "Kiev"],
        "continent": "Europa",
        "code": "UA",
        "un": true,
        "core196": true
    },
    {
        "name": ["Uganda", "Uganda"],
        "capital": ["Kampala", "Kampala"],
        "continent": "Afrika",
        "code": "UG",
        "un": true,
        "core196": true
    },
    {
        "name": ["Kleinere amerikanische Überseeinseln", "United States Minor Outlying Islands"],
        "capital": ["", ""],
        "continent": "Ozeanien",
        "code": "UM",
        "un": false,
        "core196": false
    },
    {
        "name": ["Vereinigte Staaten", "United States", "USA", "US", "Vereinigte Staaten von Amerika", "United States of America", "U.S.A.", "U.S.", "America", "Amerika"],
        "capital": ["Washington, D.C.", "Washington, D.C.", "Washington DC", "Washington D.C.", "Washington", "Washington, DC", "Washington District of Columbia"],
        "continent": "Nordamerika",
        "code": "US",
        "un": true,
        "core196": true
    },
    {
        "name": ["Uruguay", "Uruguay"],
        "capital": ["Montevideo", "Montevideo"],
        "continent": "Südamerika",
        "code": "UY",
        "un": true,
        "core196": true
    },
    {
        "name": ["Usbekistan", "Uzbekistan"],
        "capital": ["Taschkent", "Tashkent"],
        "continent": "Asien",
        "code": "UZ",
        "un": true,
        "core196": true
    },
    {
        "name": ["Vatikanstadt", "Vatican City", "Vatikan", "Vatican", "Holy See", "Heiliger Stuhl"],
        "capital": ["Vatikanstadt", "Vatican City", "Vatican"],
        "continent": "Europa",
        "code": "VA",
        "un": false,
        "core196": true
    },
    {
        "name": ["Saint Vincent und die Grenadinen", "Saint Vincent And The Grenadines", "St Vincent und die Grenadinen"],
        "capital": ["Kingstown", "Kingstown"],
        "continent": "Nordamerika",
        "code": "VC",
        "un": true,
        "core196": true
    },
    {
        "name": ["Venezuela", "Venezuela, Bolivarian Republic of", "Bolivarian Republic of Venezuela"],
        "capital": ["Caracas", "Caracas"],
        "continent": "Südamerika",
        "code": "VE",
        "un": true,
        "core196": true
    },
    {
        "name": ["Britische Jungferninseln", "British Virgin Islands", "BVI"],
        "capital": ["Road Town", "Road Town"],
        "continent": "Nordamerika",
        "code": "VG",
        "un": false,
        "core196": false
    },
    {
        "name": ["Amerikanische Jungferninseln", "United States Virgin Islands", "US Virgin Islands", "USVI", "U.S. Virgin Islands"],
        "capital": ["Charlotte Amalie", "Charlotte Amalie"],
        "continent": "Nordamerika",
        "code": "VI",
        "un": false,
        "core196": false
    },
    {
        "name": ["Vietnam", "Vietnam", "Viet Nam"],
        "capital": ["Hanoi", "Hanoi"],
        "continent": "Asien",
        "code": "VN",
        "un": true,
        "core196": true
    },
    {
        "name": ["Vanuatu", "Vanuatu"],
        "capital": ["Port Vila", "Port Vila"],
        "continent": "Ozeanien",
        "code": "VU",
        "un": true,
        "core196": true
    },
    {
        "name": ["Wallis und Futuna", "Wallis and Futuna"],
        "capital": ["Mata-Utu", "Mata-Utu"],
        "continent": "Ozeanien",
        "code": "WF",
        "un": false,
        "core196": false
    },
    {
        "name": ["Samoa", "Samoa"],
        "capital": ["Apia", "Apia"],
        "continent": "Ozeanien",
        "code": "WS",
        "un": true,
        "core196": true
    },
    {
        "name": ["Jemen", "Yemen"],
        "capital": ["Sanaa", "Sanaa"],
        "continent": "Asien",
        "code": "YE",
        "un": true,
        "core196": true
    },
    {
        "name": ["Mayotte", "Mayotte"],
        "capital": ["Mamoudzou", "Mamoudzou"],
        "continent": "Afrika",
        "code": "YT",
        "un": false,
        "core196": false
    },
    {
        "name": ["Südafrika", "South Africa", "RSA", "Republic of South Africa"],
        "capital": ["Pretoria", "Pretoria", "Kapstadt", "Cape Town", "Bloemfontein"],
        "continent": "Afrika",
        "code": "ZA",
        "un": true,
        "core196": true
    },
    {
        "name": ["Sambia", "Zambia"],
        "capital": ["Lusaka", "Lusaka"],
        "continent": "Afrika",
        "code": "ZM",
        "un": true,
        "core196": true
    },
    {
        "name": ["Simbabwe", "Zimbabwe"],
        "capital": ["Harare", "Harare"],
        "continent": "Afrika",
        "code": "ZW",
        "un": true,
        "core196": true
    }
];
