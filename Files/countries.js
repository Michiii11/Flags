let countries = [
    // name: ["Deutsch", "Englisch", "Sonstige"], capital: ["Deutsch, Englisch", "Sonstige"], continent:"", code:"",
    {
        "name": ["Andorra", "Andorra"],
        "capital": ["Andorra la Vella", "Andorra la Vella"],
        "continent": "Europa",
        "code": "AD",
        "un": true
    },
    {
        "name": ["Vereinigte Arabische Emirate", "United Arab Emirates", "VAE", "UAE"],
        "capital": ["Abu Dhabi", "Abu Dhabi"],
        "continent": "Asien",
        "code": "AE",
        "un": true
    },
    {
        "name": ["Afghanistan", "Afghanistan"],
        "capital": ["Kabul", "Kabul"],
        "continent": "Asien",
        "code": "AF",
        "un": true
    },
    {
        "name": ["Antigua und Barbuda", "Antigua and Barbuda"],
        "capital": ["Saint John's", "Saint John's"],
        "continent": "Nordamerika",
        "code": "AG",
        "un": true
    },
    {
        "name": ["Anguilla", "Anguilla"],
        "capital": ["The Valley", "The Valley"],
        "continent": "Nordamerika",
        "code": "AI",
        "un": false
    },
    {
        "name": ["Albanien", "Albania"],
        "capital": ["Tirana", "Tirana"],
        "continent": "Europa",
        "code": "AL",
        "un": true
    },
    {
        "name": ["Armenien", "Armenia"],
        "capital": ["Yerevan", "Yerevan"],
        "continent": "Asien",
        "code": "AM",
        "un": true
    },
    {
        "name": ["Angola", "Angola"],
        "capital": ["Luanda", "Luanda"],
        "continent": "Afrika",
        "code": "AO",
        "un": true
    },
    {
        "name": ["Antarktis", "Antarctica"],
        "capital": ["N/A", "N/A"],
        "continent": "Ozeanien",
        "code": "AQ",
        "un": false
    },
    {
        "name": ["Argentinien", "Argentina"],
        "capital": ["Buenos Aires", "Buenos Aires"],
        "continent": "Südamerika",
        "code": "AR",
        "un": true
    },
    {
        "name": ["Amerikanisch-Samoa", "American Samoa"],
        "capital": ["Pago Pago", "Pago Pago"],
        "continent": "Ozeanien",
        "code": "AS",
        "un": false
    },
    {
        "name": ["Österreich", "Austria"],
        "capital": ["Wien", "Vienna"],
        "continent": "Europa",
        "code": "AT",
        "un": true
    },
    {
        "name": ["Australien", "Australia"],
        "capital": ["Canberra", "Canberra"],
        "continent": "Ozeanien",
        "code": "AU",
        "un": true
    },
    {
        "name": ["Aruba", "Aruba"],
        "capital": ["Oranjestad", "Oranjestad"],
        "continent": "Nordamerika",
        "code": "AW",
        "un": false
    },
    {
        "name": ["Åland", "Åland Islands", "Aland", "Aland Islands"],
        "capital": ["Mariehamn", "Mariehamn"],
        "continent": "Europa",
        "code": "AX",
        "un": false
    },
    {
        "name": ["Aserbaidschan", "Azerbaijan"],
        "capital": ["Baku", "Baku"],
        "continent": "Asien",
        "code": "AZ",
        "un": true
    },
    {
        "name": ["Bosnien und Herzegowina", "Bosnia and Herzegovina"],
        "capital": ["Sarajevo", "Sarajevo"],
        "continent": "Europa",
        "code": "BA",
        "un": true
    },
    {
        "name": ["Barbados", "Barbados"],
        "capital": ["Bridgetown", "Bridgetown"],
        "continent": "Nordamerika",
        "code": "BB",
        "un": true
    },
    {
        "name": ["Bangladesch", "Bangladesh"],
        "capital": ["Dhaka", "Dhaka"],
        "continent": "Asien",
        "code": "BD",
        "un": true
    },
    {
        "name": ["Belgien", "Belgium"],
        "capital": ["Brüssel", "Brussels"],
        "continent": "Europa",
        "code": "BE",
        "un": true
    },
    {
        "name": ["Burkina Faso", "Burkina Faso"],
        "capital": ["Ouagadougou", "Ouagadougou"],
        "continent": "Afrika",
        "code": "BF",
        "un": true
    },
    {
        "name": ["Bulgarien", "Bulgaria"],
        "capital": ["Sofia", "Sofia"],
        "continent": "Europa",
        "code": "BG",
        "un": true
    },
    {
        "name": ["Bahrain", "Bahrain"],
        "capital": ["Manama", "Manama"],
        "continent": "Asien",
        "code": "BH",
        "un": true
    },
    {
        "name": ["Burundi", "Burundi"],
        "capital": ["Gitega", "Gitega"],
        "continent": "Afrika",
        "code": "BI",
        "un": true
    },
    {
        "name": ["Benin", "Benin"],
        "capital": ["Porto-Novo", "Porto-Novo"],
        "continent": "Afrika",
        "code": "BJ",
        "un": true
    },
    {
        "name": ["Saint-Barthélemy", "Saint Barthélemy", "Saint Barthelemy"],
        "capital": ["Gustavia", "Gustavia"],
        "continent": "Nordamerika",
        "code": "BL",
        "un": false
    },
    {
        "name": ["Bermuda", "Bermuda"],
        "capital": ["Hamilton", "Hamilton"],
        "continent": "Nordamerika",
        "code": "BM",
        "un": false
    },
    {
        "name": ["Brunei Darussalam", "Brunei Darussalam"],
        "capital": ["Bandar Seri Begawan", "Bandar Seri Begawan"],
        "continent": "Asien",
        "code": "BN",
        "un": true
    },
    {
        "name": ["Bolivien", "Bolivia"],
        "capital": ["Sucre", "Sucre"],
        "continent": "Südamerika",
        "code": "BO",
        "un": true
    },
    {
        "name": ["Bonaire", "Bonaire, Sint Eustatius and Saba"],
        "capital": ["Kralendijk", "Kralendijk"],
        "continent": "Nordamerika",
        "code": "BQ",
        "un": false
    },
    {
        "name": ["Brasilien", "Brazil"],
        "capital": ["Brasília", "Brasília"],
        "continent": "Südamerika",
        "code": "BR",
        "un": true
    },
    {
        "name": ["Bahamas", "Bahamas"],
        "capital": ["Nassau", "Nassau"],
        "continent": "Nordamerika",
        "code": "BS",
        "un": true
    },
    {
        "name": ["Bhutan", "Bhutan"],
        "capital": ["Thimphu", "Thimphu"],
        "continent": "Asien",
        "code": "BT",
        "un": true
    },
    {
        "name": ["Bouvetinsel", "Bouvet Island"],
        "capital": ["N/A", "N/A"],
        "continent": "Ozeanien",
        "code": "BV",
        "un": false
    },
    {
        "name": ["Botswana", "Botswana"],
        "capital": ["Gaborone", "Gaborone"],
        "continent": "Afrika",
        "code": "BW",
        "un": true
    },
    {
        "name": ["Belarus", "Belarus", "Weißrussland", "Weissrussland"],
        "capital": ["Minsk", "Minsk"],
        "continent": "Europa",
        "code": "BY",
        "un": true
    },
    {
        "name": ["Belize", "Belize"],
        "capital": ["Belmopan", "Belmopan"],
        "continent": "Nordamerika",
        "code": "BZ",
        "un": true
    },
    {
        "name": ["Kanada", "Canada"],
        "capital": ["Ottawa", "Ottawa"],
        "continent": "Nordamerika",
        "code": "CA",
        "un": true
    },
    {
        "name": ["Kokosinseln", "Cocos (Keeling) Islands"],
        "capital": ["West Island", "West Island"],
        "continent": "Ozeanien",
        "code": "CC",
        "un": false
    },
    {
        "name": ["Demokratische Republik Kongo", "Congo, The Democratic Republic Of The", "Congo", "Kongo"],
        "capital": ["Kinshasa", "Kinshasa"],
        "continent": "Afrika",
        "code": "CD",
        "un": true
    },
    {
        "name": ["Zentralafrikanische Republik", "Central Afrikan Republic", "Zentralafrika"],
        "capital": ["Bangui", "Bangui"],
        "continent": "Afrika",
        "code": "CF",
        "un": true
    },
    {
        "name": ["Republik Kongo", "Republic Congo"],
        "capital": ["Brazzaville", "Brazzaville"],
        "continent": "Afrika",
        "code": "CG",
        "un": true
    },
    {
        "name": ["Schweiz", "Switzerland"],
        "capital": ["Bern", "Bern"],
        "continent": "Europa",
        "code": "CH",
        "un": true
    },
    {
        "name": ["Elfenbeinküste", "Côte D'Ivoire", "Cote D Ivoire"],
        "capital": ["Yamoussoukro", "Yamoussoukro"],
        "continent": "Afrika",
        "code": "CI",
        "un": true
    },
    {
        "name": ["Cookinseln", "Cook Islands"],
        "capital": ["Avarua", "Avarua"],
        "continent": "Ozeanien",
        "code": "CK",
        "un": true
    },
    {
        "name": ["Chile", "Chile"],
        "capital": ["Santiago", "Santiago"],
        "continent": "Südamerika",
        "code": "CL",
        "un": true
    },
    {
        "name": ["Kamerun", "Cameroon"],
        "capital": ["Yaoundé", "Yaoundé", "Yaounde"],
        "continent": "Afrika",
        "code": "CM",
        "un": true
    },
    {
        "name": ["China", "China"],
        "capital": ["Peking", "Beijing"],
        "continent": "Asien",
        "code": "CN",
        "un": true
    },
    {
        "name": ["Kolumbien", "Colombia"],
        "capital": ["Bogotá", "Bogotá"],
        "continent": "Südamerika",
        "code": "CO",
        "un": true
    },
    {
        "name": ["Costa Rica", "Costa Rica"],
        "capital": ["San José", "San José", "San Jose"],
        "continent": "Nordamerika",
        "code": "CR",
        "un": true
    },
    {
        "name": ["Kuba", "Cuba"],
        "capital": ["Havanna", "Havana"],
        "continent": "Nordamerika",
        "code": "CU",
        "un": true
    },
    {
        "name": ["Kap Verde", "Cape Verde"],
        "capital": ["Praia", "Praia"],
        "continent": "Afrika",
        "code": "CV",
        "un": true
    },
    {
        "name": ["Curaçao", "Curaçao", "Curacao"],
        "capital": ["Willemstad", "Willemstad"],
        "continent": "Nordamerika",
        "code": "CW",
        "un": false
    },
    {
        "name": ["Weihnachtsinsel", "Christmas Island"],
        "capital": ["Flying Fish Cove", "Flying Fish Cove"],
        "continent": "Ozeanien",
        "code": "CX",
        "un": false
    },
    {
        "name": ["Zypern", "Cyprus"],
        "capital": ["Nikosia", "Nicosia"],
        "continent": "Europa",
        "code": "CY",
        "un": true
    },
    {
        "name": ["Tschechien", "Czech Republic"],
        "capital": ["Prag", "Prague"],
        "continent": "Europa",
        "code": "CZ",
        "un": true
    },
    {
        "name": ["Deutschland", "Germany"],
        "capital": ["Berlin", "Berlin"],
        "continent": "Europa",
        "code": "DE",
        "un": true
    },
    {
        "name": ["Dschibuti", "Djibouti"],
        "capital": ["Dschibuti", "Djibouti"],
        "continent": "Afrika",
        "code": "DJ",
        "un": true
    },
    {
        "name": ["Dänemark", "Denmark"],
        "capital": ["Kopenhagen", "Copenhagen"],
        "continent": "Europa",
        "code": "DK",
        "un": true
    },
    {
        "name": ["Dominica", "Dominica"],
        "capital": ["Roseau", "Roseau"],
        "continent": "Nordamerika",
        "code": "DM",
        "un": true
    },
    {
        "name": ["Dominikanische Republik", "Dominican Republic", "Dom Rep"],
        "capital": ["Santo Domingo", "Santo Domingo"],
        "continent": "Nordamerika",
        "code": "DO",
        "un": true
    },
    {
        "name": ["Algerien", "Algeria"],
        "capital": ["Algier", "Algiers"],
        "continent": "Afrika",
        "code": "DZ",
        "un": true
    },
    {
        "name": ["Ecuador", "Ecuador"],
        "capital": ["Quito", "Quito"],
        "continent": "Südamerika",
        "code": "EC",
        "un": true
    },
    {
        "name": ["Estland", "Estonia"],
        "capital": ["Tallinn", "Tallinn"],
        "continent": "Europa",
        "code": "EE",
        "un": true
    },
    {
        "name": ["Ägypten", "Egypt"],
        "capital": ["Kairo", "Cairo"],
        "continent": "Afrika",
        "code": "EG",
        "un": true
    },
    {
        "name": ["Westsahara", "Western Sahara"],
        "capital": ["El Aaiún", "El Aaiún"],
        "continent": "Afrika",
        "code": "EH",
        "un": false
    },
    {
        "name": ["Eritrea", "Eritrea"],
        "capital": ["Asmara", "Asmara"],
        "continent": "Afrika",
        "code": "ER",
        "un": true
    },
    {
        "name": ["Spanien", "Spain"],
        "capital": ["Madrid", "Madrid"],
        "continent": "Europa",
        "code": "ES",
        "un": true
    },
    {
        "name": ["Äthiopien", "Ethiopia"],
        "capital": ["Addis Abeba", "Addis Ababa"],
        "continent": "Afrika",
        "code": "ET",
        "un": true
    },
    {
        "name": ["Finnland", "Finland"],
        "capital": ["Helsinki", "Helsinki"],
        "continent": "Europa",
        "code": "FI",
        "un": true
    },
    {
        "name": ["Fidschi", "Fiji"],
        "capital": ["Suva", "Suva"],
        "continent": "Ozeanien",
        "code": "FJ",
        "un": true
    },
    {
        "name": ["Falklandinseln", "Falkland Islands"],
        "capital": ["Stanley", "Stanley"],
        "continent": "Südamerika",
        "code": "FK",
        "un": false
    },
    {
        "name": ["Mikronesien", "Micronesia"],
        "capital": ["Palikir", "Palikir"],
        "continent": "Ozeanien",
        "code": "FM",
        "un": true
    },
    {
        "name": ["Färöer", "Faroe Islands"],
        "capital": ["Tórshavn", "Tórshavn"],
        "continent": "Europa",
        "code": "FO",
        "un": false
    },
    {
        "name": ["Frankreich", "France"],
        "capital": ["Paris", "Paris"],
        "continent": "Europa",
        "code": "FR",
        "un": true
    },
    {
        "name": ["Gabun", "Gabon"],
        "capital": ["Libreville", "Libreville"],
        "continent": "Afrika",
        "code": "GA",
        "un": true
    },
    {
        "name": ["Vereinigtes Königreich", "United Kingdom", "UK", "VK", "Großbritannien"],
        "capital": ["London", "London"],
        "continent": "Europa",
        "code": "GB",
        "un": true
    },
    {
        "name": ["Grenada", "Grenada"],
        "capital": ["Saint George's", "Saint George's"],
        "continent": "Amerika",
        "code": "GD",
        "un": true
    },
    {
        "name": ["Georgien", "Georgia"],
        "capital": ["Tiflis", "Tbilisi"],
        "continent": "Asien",
        "code": "GE",
        "un": true
    },
    {
        "name": ["Französisch-Guayana", "French Guiana", "Französisch Guyana"],
        "capital": ["Cayenne", "Cayenne"],
        "continent": "Amerika",
        "code": "GF",
        "un": false
    },
    {
        "name": ["Guernsey", "Guernsey"],
        "capital": ["Saint Peter Port", "Saint Peter Port"],
        "continent": "Europa",
        "code": "GG",
        "un": false
    },
    {
        "name": ["Ghana", "Ghana"],
        "capital": ["Accra", "Accra"],
        "continent": "Afrika",
        "code": "GH",
        "un": true
    },
    {
        "name": ["Gibraltar", "Gibraltar"],
        "capital": ["Gibraltar", "Gibraltar"],
        "continent": "Europa",
        "code": "GI",
        "un": false
    },
    {
        "name": ["Grönland", "Greenland"],
        "capital": ["Nuuk", "Nuuk"],
        "continent": "Amerika",
        "code": "GL",
        "un": false
    },
    {
        "name": ["Gambia", "Gambia"],
        "capital": ["Banjul", "Banjul"],
        "continent": "Afrika",
        "code": "GM",
        "un": true
    },
    {
        "name": ["Guinea", "Guinea"],
        "capital": ["Conakry", "Conakry"],
        "continent": "Afrika",
        "code": "GN",
        "un": true
    },
    {
        "name": ["Guadeloupe", "Guadeloupe"],
        "capital": ["Basse-Terre", "Basse-Terre"],
        "continent": "Amerika",
        "code": "GP",
        "un": false
    },
    {
        "name": ["Äquatorialguinea", "Equatorial Guinea"],
        "capital": ["Malabo", "Malabo"],
        "continent": "Afrika",
        "code": "GQ",
        "un": true
    },
    {
        "name": ["Griechenland", "Greece"],
        "capital": ["Athen", "Athens"],
        "continent": "Europa",
        "code": "GR",
        "un": true
    },
    {
        "name": ["Südgeorgien und die Südlichen Sandwichinseln", "South Georgia and the South Sandwich Islands"],
        "capital": ["King Edward Point", "King Edward Point"],
        "continent": "Antarktis",
        "code": "GS",
        "un": false
    },
    {
        "name": ["Guatemala", "Guatemala"],
        "capital": ["Guatemala-Stadt", "Guatemala City"],
        "continent": "Amerika",
        "code": "GT",
        "un": true
    },
    {
        "name": ["Guam", "Guam"],
        "capital": ["Hagåtña", "Hagåtña"],
        "continent": "Ozeanien",
        "code": "GU",
        "un": false
    },
    {
        "name": ["Guinea-Bissau", "Guinea-Bissau", "Guinea Bissau"],
        "capital": ["Bissau", "Bissau"],
        "continent": "Afrika",
        "code": "GW",
        "un": true
    },
    {
        "name": ["Guyana", "Guyana"],
        "capital": ["Georgetown", "Georgetown"],
        "continent": "Amerika",
        "code": "GY",
        "un": true
    },
    {
        "name": ["Hongkong", "Hong Kong"],
        "capital": ["Victoria", "Victoria"],
        "continent": "Asien",
        "code": "HK",
        "un": false
    },
    {
        "name": ["Heard und McDonald-Inseln", "Heard and McDonald Islands", "Heard und McDonald Inseln"],
        "capital": ["-", "-"],
        "continent": "Antarktis",
        "code": "HM",
        "un": false
    },
    {
        "name": ["Honduras", "Honduras"],
        "capital": ["Tegucigalpa", "Tegucigalpa"],
        "continent": "Amerika",
        "code": "HN",
        "un": true
    },
    {
        "name": ["Kroatien", "Croatia"],
        "capital": ["Zagreb", "Zagreb"],
        "continent": "Europa",
        "code": "HR",
        "un": true
    },
    {
        "name": ["Haiti", "Haiti"],
        "capital": ["Port-au-Prince", "Port-au-Prince"],
        "continent": "Amerika",
        "code": "HT",
        "un": true
    },
    {
        "name": ["Ungarn", "Hungary"],
        "capital": ["Budapest", "Budapest"],
        "continent": "Europa",
        "code": "HU",
        "un": true
    },
    {
        "name": ["Indonesien", "Indonesia"],
        "capital": ["Jakarta", "Jakarta"],
        "continent": "Asien",
        "code": "ID",
        "un": true
    },
    {
        "name": ["Irland", "Ireland"],
        "capital": ["Dublin", "Dublin"],
        "continent": "Europa",
        "code": "IE",
        "un": true
    },
    {
        "name": ["Israel", "Israel"],
        "capital": ["Jerusalem", "Jerusalem"],
        "continent": "Asien",
        "code": "IL",
        "un": true
    },
    {
        "name": ["Isle of Man", "Isle of Man"],
        "capital": ["Douglas", "Douglas"],
        "continent": "Europa",
        "code": "IM",
        "un": false
    },
    {
        "name": ["Indien", "India"],
        "capital": ["Neu-Delhi", "New Delhi"],
        "continent": "Asien",
        "code": "IN",
        "un": true
    },
    {
        "name": ["Britisches Territorium im Indischen Ozean", "British Indian Ocean Territory"],
        "capital": ["Diego Garcia", "Diego Garcia"],
        "continent": "Asien",
        "code": "IO",
        "un": false
    },
    {
        "name": ["Irak", "Iraq"],
        "capital": ["Bagdad", "Baghdad"],
        "continent": "Asien",
        "code": "IQ",
        "un": true
    },
    {
        "name": ["Iran", "Iran"],
        "capital": ["Teheran", "Tehran"],
        "continent": "Asien",
        "code": "IR",
        "un": true
    },
    {
        "name": ["Island", "Iceland"],
        "capital": ["Reykjavik", "Reykjavik"],
        "continent": "Europa",
        "code": "IS",
        "un": true
    },
    {
        "name": ["Italien", "Italy"],
        "capital": ["Rom", "Rome"],
        "continent": "Europa",
        "code": "IT",
        "un": true
    },
    {
        "name": ["Jersey", "Jersey"],
        "capital": ["Saint Helier", "Saint Helier"],
        "continent": "Europa",
        "code": "JE",
        "un": false
    },
    {
        "name": ["Jamaika", "Jamaica"],
        "capital": ["Kingston", "Kingston"],
        "continent": "Amerika",
        "code": "JM",
        "un": true
    },
    {
        "name": ["Jordanien", "Jordan"],
        "capital": ["Amman", "Amman"],
        "continent": "Asien",
        "code": "JO",
        "un": true
    },
    {
        "name": ["Japan", "Japan"],
        "capital": ["Tokio", "Tokyo"],
        "continent": "Asien",
        "code": "JP",
        "un": true
    },
    {
        "name": ["Kenia", "Kenya"],
        "capital": ["Nairobi", "Nairobi"],
        "continent": "Afrika",
        "code": "KE",
        "un": true
    },
    {
        "name": ["Kirgisistan", "Kyrgyzstan"],
        "capital": ["Bischkek", "Bishkek"],
        "continent": "Asien",
        "code": "KG",
        "un": true
    },
    {
        "name": ["Kambodscha", "Cambodia"],
        "capital": ["Phnom Penh", "Phnom Penh"],
        "continent": "Asien",
        "code": "KH",
        "un": true
    },
    {
        "name": ["Kiribati", "Kiribati"],
        "capital": ["South Tarawa", "South Tarawa"],
        "continent": "Ozeanien",
        "code": "KI",
        "un": true
    },
    {
        "name": ["Komoren", "Comoros"],
        "capital": ["Moroni", "Moroni"],
        "continent": "Afrika",
        "code": "KM",
        "un": true
    },
    {
        "name": ["St. Kitts und Nevis", "Saint Kitts And Nevis", "St Kitts und Nevis"],
        "capital": ["Basseterre", "Basseterre"],
        "continent": "Amerika",
        "code": "KN",
        "un": true
    },
    {
        "name": ["Nordkorea", "Korea, Democratic People's Republic Of"],
        "capital": ["Pjöngjang", "Pyongyang"],
        "continent": "Asien",
        "code": "KP",
        "un": true
    },
    {
        "name": ["Südkorea", "Korea, Republic of"],
        "capital": ["Seoul", "Seoul"],
        "continent": "Asien",
        "code": "KR",
        "un": true
    },
    {
        "name": ["Kuwait", "Kuwait"],
        "capital": ["Kuwait-Stadt", "Kuwait City"],
        "continent": "Asien",
        "code": "KW",
        "un": true
    },
    {
        "name": ["Kaimaninseln", "Cayman Islands"],
        "capital": ["George Town", "George Town"],
        "continent": "Amerika",
        "code": "KY",
        "un": false
    },
    {
        "name": ["Kasachstan", "Kazakhstan"],
        "capital": ["Astana", "Astana"],
        "continent": "Asien",
        "code": "KZ",
        "un": true
    },
    {
        "name": ["Laos", "Laos"],
        "capital": ["Vientiane", "Vientiane"],
        "continent": "Asien",
        "code": "LA",
        "un": true
    },
    {
        "name": ["Libanon", "Lebanon"],
        "capital": ["Beirut", "Beirut"],
        "continent": "Asien",
        "code": "LB",
        "un": true
    },
    {
        "name": ["St. Lucia", "Saint Lucia", "St Lucia"],
        "capital": ["Castries", "Castries"],
        "continent": "Amerika",
        "code": "LC",
        "un": true
    },
    {
        "name": ["Liechtenstein", "Liechtenstein"],
        "capital": ["Vaduz", "Vaduz"],
        "continent": "Europa",
        "code": "LI",
        "un": true
    },
    {
        "name": ["Sri Lanka", "Sri Lanka"],
        "capital": ["Sri Jayawardenepura Kotte", "Sri Jayawardenepura Kotte"],
        "continent": "Asien",
        "code": "LK",
        "un": true
    },
    {
        "name": ["Liberia", "Liberia"],
        "capital": ["Monrovia", "Monrovia"],
        "continent": "Afrika",
        "code": "LR",
        "un": true
    },
    {
        "name": ["Lesotho", "Lesotho"],
        "capital": ["Maseru", "Maseru"],
        "continent": "Afrika",
        "code": "LS",
        "un": true
    },
    {
        "name": ["Litauen", "Lithuania"],
        "capital": ["Vilnius", "Vilnius"],
        "continent": "Europa",
        "code": "LT",
        "un": true
    },
    {
        "name": ["Luxemburg", "Luxembourg"],
        "capital": ["Luxemburg", "Luxembourg"],
        "continent": "Europa",
        "code": "LU",
        "un": true
    },
    {
        "name": ["Lettland", "Latvia"],
        "capital": ["Riga", "Riga"],
        "continent": "Europa",
        "code": "LV",
        "un": true
    },
    {
        "name": ["Libyen", "Libya"],
        "capital": ["Tripolis", "Tripoli"],
        "continent": "Afrika",
        "code": "LY",
        "un": true
    },
    {
        "name": ["Marokko", "Morocco"],
        "capital": ["Rabat", "Rabat"],
        "continent": "Afrika",
        "code": "MA",
        "un": true
    },
    {
        "name": ["Monaco", "Monaco"],
        "capital": ["Monaco", "Monaco"],
        "continent": "Europa",
        "code": "MC",
        "un": true
    },
    {
        "name": ["Moldawien", "Moldova", "Moldau"],
        "capital": ["Chisinau", "Chisinau"],
        "continent": "Europa",
        "code": "MD",
        "un": true
    },
    {
        "name": ["Montenegro", "Montenegro"],
        "capital": ["Podgorica", "Podgorica"],
        "continent": "Europa",
        "code": "ME",
        "un": true
    },
    {
        "name": ["Saint-Martin", "Saint Martin"],
        "capital": ["Marigot", "Marigot"],
        "continent": "Amerika",
        "code": "MF",
        "un": false
    },
    {
        "name": ["Madagaskar", "Madagascar"],
        "capital": ["Antananarivo", "Antananarivo"],
        "continent": "Afrika",
        "code": "MG",
        "un": true
    },
    {
        "name": ["Marshallinseln", "Marshall Islands"],
        "capital": ["Majuro", "Majuro"],
        "continent": "Ozeanien",
        "code": "MH",
        "un": true
    },
    {
        "name": ["Nordmazedonien", "Macedonia"],
        "capital": ["Skopje", "Skopje"],
        "continent": "Europa",
        "code": "MK",
        "un": true
    },
    {
        "name": ["Mali", "Mali"],
        "capital": ["Bamako", "Bamako"],
        "continent": "Afrika",
        "code": "ML",
        "un": true
    },
    {
        "name": ["Myanmar", "Myanmar"],
        "capital": ["Naypyidaw", "Naypyidaw"],
        "continent": "Asien",
        "code": "MM",
        "un": true
    },
    {
        "name": ["Mongolei", "Mongolia"],
        "capital": ["Ulaanbaatar", "Ulaanbaatar"],
        "continent": "Asien",
        "code": "MN",
        "un": true
    },
    {
        "name": ["Macao", "Macao"],
        "capital": ["Macao", "Macao"],
        "continent": "Asien",
        "code": "MO",
        "un": false
    },
    {
        "name": ["Nördliche Marianen", "Northern Mariana Islands"],
        "capital": ["Saipan", "Saipan"],
        "continent": "Ozeanien",
        "code": "MP",
        "un": false
    },
    {
        "name": ["Martinique", "Martinique"],
        "capital": ["Fort-de-France", "Fort-de-France"],
        "continent": "Amerika",
        "code": "MQ",
        "un": false
    },
    {
        "name": ["Mauretanien", "Mauritania"],
        "capital": ["Nouakchott", "Nouakchott"],
        "continent": "Afrika",
        "code": "MR",
        "un": true
    },
    {
        "name": ["Montserrat", "Montserrat"],
        "capital": ["Plymouth", "Plymouth"],
        "continent": "Amerika",
        "code": "MS",
        "un": false
    },
    {
        "name": ["Malta", "Malta"],
        "capital": ["Valletta", "Valletta"],
        "continent": "Europa",
        "code": "MT",
        "un": true
    },
    {
        "name": ["Mauritius", "Mauritius"],
        "capital": ["Port Louis", "Port Louis"],
        "continent": "Afrika",
        "code": "MU",
        "un": true
    },
    {
        "name": ["Malediven", "Maldives"],
        "capital": ["Malé", "Malé", "Male"],
        "continent": "Asien",
        "code": "MV",
        "un": true
    },
    {
        "name": ["Malawi", "Malawi"],
        "capital": ["Lilongwe", "Lilongwe"],
        "continent": "Afrika",
        "code": "MW",
        "un": true
    },
    {
        "name": ["Mexiko", "Mexico"],
        "capital": ["Mexiko-Stadt", "Mexico City"],
        "continent": "Amerika",
        "code": "MX",
        "un": true
    },
    {
        "name": ["Malaysia", "Malaysia"],
        "capital": ["Kuala Lumpur", "Kuala Lumpur"],
        "continent": "Asien",
        "code": "MY",
        "un": true
    },
    {
        "name": ["Mosambik", "Mozambique"],
        "capital": ["Maputo", "Maputo"],
        "continent": "Afrika",
        "code": "MZ",
        "un": true
    },
    {
        "name": ["Namibia", "Namibia"],
        "capital": ["Windhoek", "Windhoek"],
        "continent": "Afrika",
        "code": "NA",
        "un": true
    },
    {
        "name": ["Neukaledonien", "New Caledonia"],
        "capital": ["Nouméa", "Nouméa", "Noumea"],
        "continent": "Ozeanien",
        "code": "NC",
        "un": false
    },
    {
        "name": ["Niger", "Niger"],
        "capital": ["Niamey", "Niamey"],
        "continent": "Afrika",
        "code": "NE",
        "un": true
    },
    {
        "name": ["Norfolkinsel", "Norfolk Island"],
        "capital": ["Kingston", "Kingston"],
        "continent": "Ozeanien",
        "code": "NF",
        "un": false
    },
    {
        "name": ["Nigeria", "Nigeria"],
        "capital": ["Abuja", "Abuja"],
        "continent": "Afrika",
        "code": "NG",
        "un": true
    },
    {
        "name": ["Nicaragua", "Nicaragua"],
        "capital": ["Managua", "Managua"],
        "continent": "Amerika",
        "code": "NI",
        "un": true
    },
    {
        "name": ["Niederlande", "Netherlands"],
        "capital": ["Amsterdam", "Amsterdam"],
        "continent": "Europa",
        "code": "NL",
        "un": true
    },
    {
        "name": ["Norwegen", "Norway"],
        "capital": ["Oslo", "Oslo"],
        "continent": "Europa",
        "code": "NO",
        "un": true
    },
    {
        "name": ["Nepal", "Nepal"],
        "capital": ["Kathmandu", "Kathmandu"],
        "continent": "Asien",
        "code": "NP",
        "un": true
    },
    {
        "name": ["Nauru", "Nauru"],
        "capital": ["Yaren", "Yaren"],
        "continent": "Ozeanien",
        "code": "NR",
        "un": true
    },
    {
        "name": ["Niue", "Niue"],
        "capital": ["Alofi", "Alofi"],
        "continent": "Ozeanien",
        "code": "NU",
        "un": false
    },
    {
        "name": ["Neuseeland", "New Zealand"],
        "capital": ["Wellington", "Wellington"],
        "continent": "Ozeanien",
        "code": "NZ",
        "un": true
    },
    {
        "name": ["Oman", "Oman"],
        "capital": ["Maskat", "Muscat"],
        "continent": "Asien",
        "code": "OM",
        "un": true
    },
    {
        "name": ["Panama", "Panama"],
        "capital": ["Panama-Stadt", "Panama City"],
        "continent": "Amerika",
        "code": "PA",
        "un": true
    },
    {
        "name": ["Peru", "Peru"],
        "capital": ["Lima", "Lima"],
        "continent": "Amerika",
        "code": "PE",
        "un": true
    },
    {
        "name": ["Französisch-Polynesien", "French Polynesia", "Französisch Polynesien"],
        "capital": ["Papeete", "Papeete"],
        "continent": "Ozeanien",
        "code": "PF",
        "un": false
    },
    {
        "name": ["Papua-Neuguinea", "Papua New Guinea", "Papua Neuguinea"],
        "capital": ["Port Moresby", "Port Moresby"],
        "continent": "Ozeanien",
        "code": "PG",
        "un": true
    },
    {
        "name": ["Philippinen", "Philippines"],
        "capital": ["Manila", "Manila"],
        "continent": "Asien",
        "code": "PH",
        "un": true
    },
    {
        "name": ["Pakistan", "Pakistan"],
        "capital": ["Islamabad", "Islamabad"],
        "continent": "Asien",
        "code": "PK",
        "un": true
    },
    {
        "name": ["Polen", "Poland"],
        "capital": ["Warschau", "Warsaw"],
        "continent": "Europa",
        "code": "PL",
        "un": true
    },
    {
        "name": ["Saint-Pierre und Miquelon", "Saint Pierre And Miquelon", "St Pierre und Miquelon", "St Pierre and Miquelon"],
        "capital": ["Saint-Pierre", "Saint-Pierre"],
        "continent": "Amerika",
        "code": "PM",
        "un": false
    },
    {
        "name": ["Pitcairninseln", "Pitcairn"],
        "capital": ["Adamstown", "Adamstown"],
        "continent": "Ozeanien",
        "code": "PN",
        "un": false
    },
    {
        "name": ["Puerto Rico", "Puerto Rico"],
        "capital": ["San Juan", "San Juan"],
        "continent": "Amerika",
        "code": "PR",
        "un": false
    },
    {
        "name": ["Palästina", "Palestine"],
        "capital": ["Ost-Jerusalem", "East Jerusalem"],
        "continent": "Asien",
        "code": "PS",
        "un": false
    },
    {
        "name": ["Portugal", "Portugal"],
        "capital": ["Lissabon", "Lisbon"],
        "continent": "Europa",
        "code": "PT",
        "un": true
    },
    {
        "name": ["Palau", "Palau"],
        "capital": ["Ngerulmud", "Ngerulmud"],
        "continent": "Ozeanien",
        "code": "PW",
        "un": true
    },
    {
        "name": ["Paraguay", "Paraguay"],
        "capital": ["Asunción", "Asunción"],
        "continent": "Amerika",
        "code": "PY",
        "un": true
    },
    {
        "name": ["Katar", "Qatar"],
        "capital": ["Doha", "Doha"],
        "continent": "Asien",
        "code": "QA",
        "un": true
    },
    {
        "name": ["Réunion", "Réunion", "Reunion"],
        "capital": ["Saint-Denis", "Saint-Denis"],
        "continent": "Afrika",
        "code": "RE",
        "un": false
    },
    {
        "name": ["Rumänien", "Romania"],
        "capital": ["Bukarest", "Bucharest"],
        "continent": "Europa",
        "code": "RO",
        "un": true
    },
    {
        "name": ["Serbien", "Serbia"],
        "capital": ["Belgrad", "Belgrade"],
        "continent": "Europa",
        "code": "RS",
        "un": true
    },
    {
        "name": ["Russland", "Russian Federation"],
        "capital": ["Moskau", "Moscow"],
        "continent": "Europa",
        "code": "RU",
        "un": true
    },
    {
        "name": ["Ruanda", "Rwanda"],
        "capital": ["Kigali", "Kigali"],
        "continent": "Afrika",
        "code": "RW",
        "un": true
    },
    {
        "name": ["Saudi-Arabien", "Saudi Arabia"],
        "capital": ["Riad", "Riyadh"],
        "continent": "Asien",
        "code": "SA",
        "un": true
    },
    {
        "name": ["Salomonen", "Solomon Islands"],
        "capital": ["Honiara", "Honiara"],
        "continent": "Ozeanien",
        "code": "SB",
        "un": true
    },
    {
        "name": ["Seychellen", "Seychelles"],
        "capital": ["Victoria", "Victoria"],
        "continent": "Afrika",
        "code": "SC",
        "un": true
    },
    {
        "name": ["Sudan", "Sudan"],
        "capital": ["Khartum", "Khartoum"],
        "continent": "Afrika",
        "code": "SD",
        "un": true
    },
    {
        "name": ["Schweden", "Sweden"],
        "capital": ["Stockholm", "Stockholm"],
        "continent": "Europa",
        "code": "SE",
        "un": true
    },
    {
        "name": ["Singapur", "Singapore"],
        "capital": ["Singapur", "Singapore"],
        "continent": "Asien",
        "code": "SG",
        "un": true
    },
    {
        "name": ["Saint Helena", "Saint Helena", "St Helena", "St. Helena"],
        "capital": ["Jamestown", "Jamestown"],
        "continent": "Afrika",
        "code": "SH",
        "un": false
    },
    {
        "name": ["Slowenien", "Slovenia"],
        "capital": ["Ljubljana", "Ljubljana"],
        "continent": "Europa",
        "code": "SI",
        "un": true
    },
    {
        "name": ["Svalbard und Jan Mayen", "Svalbard And Jan Mayen"],
        "capital": ["Longyearbyen", "Longyearbyen"],
        "continent": "Europa",
        "code": "SJ",
        "un": false
    },
    {
        "name": ["Slowakei", "Slovakia"],
        "capital": ["Bratislava", "Bratislava"],
        "continent": "Europa",
        "code": "SK",
        "un": true
    },
    {
        "name": ["Sierra Leone", "Sierra Leone"],
        "capital": ["Freetown", "Freetown"],
        "continent": "Afrika",
        "code": "SL",
        "un": true
    },
    {
        "name": ["San Marino", "San Marino"],
        "capital": ["San Marino", "San Marino"],
        "continent": "Europa",
        "code": "SM",
        "un": true
    },
    {
        "name": ["Senegal", "Senegal"],
        "capital": ["Dakar", "Dakar"],
        "continent": "Afrika",
        "code": "SN",
        "un": true
    },
    {
        "name": ["Somalia", "Somalia"],
        "capital": ["Mogadischu", "Mogadishu"],
        "continent": "Afrika",
        "code": "SO",
        "un": true
    },
    {
        "name": ["Suriname", "Suriname"],
        "capital": ["Paramaribo", "Paramaribo"],
        "continent": "Amerika",
        "code": "SR",
        "un": true
    },
    {
        "name": ["Südsudan", "South Sudan"],
        "capital": ["Juba", "Juba"],
        "continent": "Afrika",
        "code": "SS",
        "un": true
    },
    {
        "name": ["São Tomé und Príncipe", "Sao Tome and Principe", "Sao Tome und Principe"],
        "capital": ["São Tomé", "Sao Tome"],
        "continent": "Afrika",
        "code": "ST",
        "un": true
    },
    {
        "name": ["El Salvador", "El Salvador"],
        "capital": ["San Salvador", "San Salvador"],
        "continent": "Amerika",
        "code": "SV",
        "un": true
    },
    {
        "name": ["Sint Maarten", "Sint Maarten"],
        "capital": ["Philipsburg", "Philipsburg"],
        "continent": "Amerika",
        "code": "SX",
        "un": false
    },
    {
        "name": ["Syrien", "Syrian"],
        "capital": ["Damaskus", "Damascus"],
        "continent": "Asien",
        "code": "SY",
        "un": true
    },
    {
        "name": ["Eswatini", "Eswatini", "Swasiland", "Swaziland"],
        "capital": ["Mbabane", "Mbabane"],
        "continent": "Afrika",
        "code": "SZ",
        "un": true
    },
    {
        "name": ["Turks- und Caicosinseln", "Turks and Caicos Islands", "Turks und Caicosinseln"],
        "capital": ["Cockburn Town", "Cockburn Town"],
        "continent": "Amerika",
        "code": "TC",
        "un": false
    },
    {
        "name": ["Tschad", "Chad"],
        "capital": ["N'Djamena", "N'Djamena"],
        "continent": "Afrika",
        "code": "TD",
        "un": true
    },
    {
        "name": ["Französische Süd- und Antarktisgebiete", "French Southern Territories", "Französische Süd und Antarktisgebiete"],
        "capital": ["Port-aux-Français", "Port-aux-Français"],
        "continent": "Antarktis",
        "code": "TF",
        "un": false
    },
    {
        "name": ["Togo", "Togo"],
        "capital": ["Lomé", "Lomé", "Lome"],
        "continent": "Afrika",
        "code": "TG",
        "un": true
    },
    {
        "name": ["Thailand", "Thailand"],
        "capital": ["Bangkok", "Bangkok"],
        "continent": "Asien",
        "code": "TH",
        "un": true
    },
    {
        "name": ["Tadschikistan", "Tajikistan"],
        "capital": ["Duschanbe", "Dushanbe"],
        "continent": "Asien",
        "code": "TJ",
        "un": true
    },
    {
        "name": ["Tokelau", "Tokelau"],
        "capital": ["Fakaofo", "Fakaofo"],
        "continent": "Ozeanien",
        "code": "TK",
        "un": false
    },
    {
        "name": ["Osttimor", "Timor-Leste", "Timor Leste"],
        "capital": ["Dili", "Dili"],
        "continent": "Asien",
        "code": "TL",
        "un": true
    },
    {
        "name": ["Turkmenistan", "Turkmenistan"],
        "capital": ["Aschgabat", "Ashgabat"],
        "continent": "Asien",
        "code": "TM",
        "un": true
    },
    {
        "name": ["Tunesien", "Tunisia"],
        "capital": ["Tunis", "Tunis"],
        "continent": "Afrika",
        "code": "TN",
        "un": true
    },
    {
        "name": ["Tonga", "Tonga"],
        "capital": ["Nukuʻalofa", "Nukuʻalofa"],
        "continent": "Ozeanien",
        "code": "TO",
        "un": true
    },
    {
        "name": ["Türkei", "Turkey"],
        "capital": ["Ankara", "Ankara"],
        "continent": "Asien",
        "code": "TR",
        "un": true
    },
    {
        "name": ["Trinidad und Tobago", "Trinidad and Tobago"],
        "capital": ["Port of Spain", "Port of Spain"],
        "continent": "Amerika",
        "code": "TT",
        "un": true
    },
    {
        "name": ["Tuvalu", "Tuvalu"],
        "capital": ["Funafuti", "Funafuti"],
        "continent": "Ozeanien",
        "code": "TV",
        "un": true
    },
    {
        "name": ["Taiwan", "Taiwan"],
        "capital": ["Taipeh", "Taipei"],
        "continent": "Asien",
        "code": "TW",
        "un": true
    },
    {
        "name": ["Tansania", "Tanzania"],
        "capital": ["Dodoma", "Dodoma"],
        "continent": "Afrika",
        "code": "TZ",
        "un": true
    },
    {
        "name": ["Ukraine", "Ukraine"],
        "capital": ["Kiew", "Kyiv"],
        "continent": "Europa",
        "code": "UA",
        "un": true
    },
    {
        "name": ["Uganda", "Uganda"],
        "capital": ["Kampala", "Kampala"],
        "continent": "Afrika",
        "code": "UG",
        "un": true
    },
    {
        "name": ["Kleinere amerikanische Überseeinseln", "United States Minor Outlying Islands"],
        "capital": ["", ""],
        "continent": "Ozeanien",
        "code": "UM",
        "un": false
    },
    {
        "name": ["Vereinigte Staaten", "United States", "USA", "US"],
        "capital": ["Washington, D.C.", "Washington, D.C."],
        "continent": "Amerika",
        "code": "US",
        "un": true
    },
    {
        "name": ["Uruguay", "Uruguay"],
        "capital": ["Montevideo", "Montevideo"],
        "continent": "Amerika",
        "code": "UY",
        "un": true
    },
    {
        "name": ["Usbekistan", "Uzbekistan"],
        "capital": ["Taschkent", "Tashkent"],
        "continent": "Asien",
        "code": "UZ",
        "un": true
    },
    {
        "name": ["Vatikanstadt", "Vatican City"],
        "capital": ["Vatikanstadt", "Vatican City"],
        "continent": "Europa",
        "code": "VA",
        "un": true
    },
    {
        "name": ["Saint Vincent und die Grenadinen", "Saint Vincent And The Grenadines", "St Vincent und die Grenadinen"],
        "capital": ["Kingstown", "Kingstown"],
        "continent": "Amerika",
        "code": "VC",
        "un": true
    },
    {
        "name": ["Venezuela", "Venezuela, Bolivarian Republic of"],
        "capital": ["Caracas", "Caracas"],
        "continent": "Amerika",
        "code": "VE",
        "un": true
    },
    {
        "name": ["Britische Jungferninseln", "British Virgin Islands"],
        "capital": ["Road Town", "Road Town"],
        "continent": "Amerika",
        "code": "VG",
        "un": false
    },
    {
        "name": ["Amerikanische Jungferninseln", "United States Virgin Islands", "US Virgin Islands"],
        "capital": ["Charlotte Amalie", "Charlotte Amalie"],
        "continent": "Amerika",
        "code": "VI",
        "un": false
    },
    {
        "name": ["Vietnam", "Vietnam"],
        "capital": ["Hanoi", "Hanoi"],
        "continent": "Asien",
        "code": "VN",
        "un": true
    },
    {
        "name": ["Vanuatu", "Vanuatu"],
        "capital": ["Port Vila", "Port Vila"],
        "continent": "Ozeanien",
        "code": "VU",
        "un": true
    },
    {
        "name": ["Wallis und Futuna", "Wallis and Futuna"],
        "capital": ["Mata-Utu", "Mata-Utu"],
        "continent": "Ozeanien",
        "code": "WF",
        "un": false
    },
    {
        "name": ["Samoa", "Samoa"],
        "capital": ["Apia", "Apia"],
        "continent": "Ozeanien",
        "code": "WS",
        "un": true
    },
    {
        "name": ["Jemen", "Yemen"],
        "capital": ["Sanaa", "Sanaa"],
        "continent": "Asien",
        "code": "YE",
        "un": true
    },
    {
        "name": ["Mayotte", "Mayotte"],
        "capital": ["Mamoudzou", "Mamoudzou"],
        "continent": "Afrika",
        "code": "YT",
        "un": false
    },
    {
        "name": ["Südafrika", "South Africa"],
        "capital": ["Pretoria", "Pretoria"],
        "continent": "Afrika",
        "code": "ZA",
        "un": true
    },
    {
        "name": ["Sambia", "Zambia"],
        "capital": ["Lusaka", "Lusaka"],
        "continent": "Afrika",
        "code": "ZM",
        "un": true
    },
    {
        "name": ["Simbabwe", "Zimbabwe"],
        "capital": ["Harare", "Harare"],
        "continent": "Afrika",
        "code": "ZW",
        "un": true
    },


    /*{
        "name": ["Niederländische Antillen", "Netherlands Antilles"],
        "capital": ["Willemstad", "Willemstad"],
        "continent": "Nordamerika",
        "code": "AN",
            "un": true
    },*/

    /*
    {
        "name": ["Kosovo", "Kosovo"],
        "capital": ["Pristina", "Pristina"],
        "continent": "Europa",
        "code": "XK",
            "un": true
    }*/

    // IC
    // NY
    // EU
    // AH
]