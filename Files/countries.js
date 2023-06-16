let countries = [
    // name: ["Deutsch", "Englisch", "Sonstige"], capital: ["Deutsch, Englisch", "Sonstige"], continent:"", code:""
    {
        name: ["Afghanistan", "Afghanistan"],
        capital: ["Kabul", "Kabul"],
        continent: "Asien",
        code: "AF"
    },
    {
        name: ["Ägypten", "Egypt"],
        capital: ["Kairo", "Cairo"],
        continent: "Afrika",
        code: "EG"
    },
    {
        name: ["Albanien", "Albania"],
        capital: ["Tirana", "Tirana", "Tirane"],
        continent: "Europa",
        code: "AL"
    },
    {
        name: ["Algerien", "Algeria"],
        capital: ["Algier", "Algiers"],
        continent: "Afrika",
        code: "DZ"
    },
    {
        name: ["Andorra", "Andorra"],
        capital: ["Andorra la Vella", "Andorra la Vella"],
        continent: "Europa",
        code: "AD"
    },
    {
        name: ["Angola", "Angola"],
        capital: ["Luanda", "Luanda"],
        continent: "Afrika",
        code: "AO"
    },
    {
        name: ["Antigua und Barbuda", "Antigua und Barbuda"],
        capital: ["Saint John's", "Saint John's", "St. Johns"],
        continent: "Nordamerika",
        code: "AG"
    },
    {
        name: ["Äquatorialguinea", "Equatorial Guinea"],
        capital: ["Malabo", "Malabo", "Ciudad de la Paz"],
        continent: "Afrika",
        code: "GQ"
    },
    {
        name: ["Argentinien", "Argentina"],
        capital: ["Buenos Aires", "Buenos Aires"],
        continent: "Südamerika",
        code: "AR"
    },
    {
        name: ["Armenien", "Armenia"],
        capital: ["Jerewan", "Yerevan"],
        continent: "Asien",
        code: "AM"
    },
    {
        name: ["Aserbaidschan", "Azerbaijan"],
        capital: ["Baku", "Baku"],
        continent: "Asien",
        code: "AZ"
    },
    {
        name: ["Äthiopien", "Ethiopia"],
        capital: ["Addis Abeba", "Addis Ababa"],
        continent: "Afrika",
        code: "ET"
    },
    {
        name: ["Australien", "Australia"],
        capital: ["Canberra", "Canberra"],
        continent: "Ozeanien",
        code: "AU"
    },
    {
        name: ["Bahamas", "Bahamas"],
        capital: ["Nassau", "Nassau"],
        continent: "Nordamerika",
        code: "BS"
    },
    {
        name: ["Bahrain", "Bahrain"],
        capital: ["Manama", "Manama"],
        continent: "Asien",
        code: "BH"
    },
    {
        name: ["Bangladesch", "Bangladesh"],
        capital: ["Dhaka", "Dhaka"],
        continent: "Asien",
        code: "BD"
    },
    {
        name: ["Barbados", "Barbados"],
        capital: ["Bridgetown", "Bridgetown"],
        continent: "Nordamerika",
        code: "BB"
    },
    {
        name: ["Belarus", "Belarus", "Weißrussland"],
        capital: ["Minsk", "Minsk"],
        continent: "Europa",
        code: "BY"
    },
    {
        name: ["Belgien", "Belgium"],
        capital: ["Brüssel", "Brussels"],
        continent: "Europa",
        code: "BE"
    },
    {
        name: ["Belize", "Belize"],
        capital: ["Belmopan", "Belmopan"],
        continent: "Nordamerika",
        code: "BZ"
    },
    {
        name: ["Benin", "Benin"],
        capital: ["Porto-Novo", "Porto Novo"],
        continent: "Afrika",
        code: "BJ"
    },
    {
        name: ["Bhutan", "Bhutan"],
        capital: ["Thimphu", "Thimphu"],
        continent: "Asien",
        code: "BT"
    },
    {
        name: ["Bolivien", "Bolivia"],
        capital: ["Sucre", "Sucre", "La Paz"],
        continent: "Südamerika",
        code: "BO"
    },
    {
        name: ["Bosnien und Herzegowina", "Bosnia and Herzegovina", "Bosnien"],
        capital: ["Sarajevo", "Sarajevo"],
        continent: "Europa",
        code: "BA"
    },
    {
        name: ["Botswana", "Botsuana"],
        capital: ["Gaborone", "Gaborone"],
        continent: "Afrika",
        code: "BW"
    },
    {
        name: ["Brasilien", "Brazil"],
        capital: ["Brasília", "Brasilia"],
        continent: "Südamerika",
        code: "BR"
    },
    {
        name: ["Brunei", "Brunei"],
        capital: ["Bandar Seri Begawan", "Bandar Seri Begawan"],
        continent: "Asien",
        code: "BN"
    },
    {
        name: ["Bulgarien", "Bulgaria"],
        capital: ["Sofia", "Sofia"],
        continent: "Europa",
        code: "BG"
    },
    {
        name: ["Burkina Faso", "Burkina Faso"],
        capital: ["Ouagadougou", "Ouagadougou"],
        continent: "Afrika",
        code: "BF"
    },
    {
        name: ["Burundi", "Burundi"],
        capital: ["Gitega", "Gitega"],
        continent: "Afrika",
        code: "BI"
    },
    {
        name: ["Kap Verde", "Cabo Verde"],
        capital: ["Praia", "Praia"],
        continent: "Afrika",
        code: "CV"
    },
    {
        name: ["Chile", "Chile"],
        capital: ["Santiago de Chile", "Santiago"],
        continent: "Südamerika",
        code: "CL"
    },
    {
        name: ["China", "China"],
        capital: ["Peking", "Beijing"],
        continent: "Asien",
        code: "CN"
    },
    {
        name: ["Cookinseln", "Cook Islands"],
        capital: ["Avarua", "Avarua"],
        continent: "Ozeanien",
        code: "CK"
    },
    {
        name: ["Costa Rica", "Costa Rica"],
        capital: ["San José", "San Jose"],
        continent: "Nordamerika",
        code: "CR"
    },
    {
        name: ["Elfenbeinküste", "Ivory Coast", "Côte d'Ivoire"],
        capital: ["Yamoussoukro", "Yamoussoukro", "Abidjan"],
        continent: "Afrika",
        code: "CI"
    },
    {
        name: ["Dänemark", "Denmark"],
        capital: ["Kopenhagen", "Copenhagen"],
        continent: "Europa",
        code: "DK"
    },
    {
        name: ["Deutschland", "Germany"],
        capital: ["Berlin", "Berlin"],
        continent: "Europa",
        code: "DE"
    },
    {
        name: ["Dominica", "Dominica"],
        capital: ["Roseau", "Roseau"],
        continent: "Nordamerika",
        code: "DM"
    },
    {
        name: ["Dominikanische Republik", "Dominican Republic", "Dom Rep"],
        capital: ["Santo Domingo", "Santo Domingo"],
        continent: "Nordamerika",
        code: "DO"
    },
    {
        name: ["Dschibuti", "Djibouti"],
        capital: ["Dschibuti", "Djibouti"],
        continent: "Afrika",
        code: "DJ"
    },
    {
        name: ["Ecuador", "Ecuador"],
        capital: ["Quito", "Quito"],
        continent: "Südamerika",
        code: "EC"
    },
    {
        name: ["El Salvador", "El Salvador"],
        capital: ["San Salvador", "San Salvador"],
        continent: "Nordamerika",
        code: "SV"
    },
    {
        name: ["Eritrea", "Eritrea"],
        capital: ["Asmara", "Asmara"],
        continent: "Afrika",
        code: "ER"
    },
    {
        name: ["Estland", "Estonia"],
        capital: ["Tallinn", "Tallinn"],
        continent: "Europa",
        code: "EE"
    },
    {
        name: ["Eswatini", "Eswatini", "Swaziland"],
        capital: ["Mbabane", "Mbabana"],
        continent: "Afrika",
        code: "SZ"
    },
    {
        name: ["Fidschi", "Fiji"],
        capital: ["Suva", "Suva"],
        continent: "Ozeanien",
        code: "FJ"
    },
    {
        name: ["Finnland", "Finland"],
        capital: ["Helsinki", "Helsinki"],
        continent: "Europa",
        code: "FI"
    },
    {
        name: ["Frankreich", "France"],
        capital: ["Paris", "Paris"],
        continent: "Europa",
        code: "FR"
    },
    {
        name: ["Gabun", "Gabon"],
        capital: ["Libreville", "Libreville"],
        continent: "Afrika",
        code: "GA"
    },
    {
        name: ["Gambia", "Gambia"],
        capital: ["Banjul", "Banjul"],
        continent: "Afrika",
        code: "GM"
    },
    {
        name: ["Georgien", "Georgia"],
        capital: ["Tiflis", "Tbilisi"],
        continent: "Asien",
        code: "GE"
    },
    {
        name: ["Ghana", "Ghana"],
        capital: ["Accra", "Accra"],
        continent: "Afrika",
        code: "GH"
    },
    {
        name: ["Grenada", "Grenada"],
        capital: ["St. George's", "Saint George's"],
        continent: "Nordamerika",
        code: "GD"
    },
    {
        name: ["Griechenland", "Greece"],
        capital: ["Athen", "Athens"],
        continent: "Europa",
        code: "GR"
    },
    {
        name: ["Großbritannien", "United Kingdom", "Vereinigte Königreich", "UK"],
        capital: ["London", "London"],
        continent: "Europa",
        code: "GB"
    },
    {
        name: ["Guatemala", "Guatemala"],
        capital: ["Guatemala-Stadt", "Guatemala City", "Guatemala"],
        continent: "Nordamerika",
        code: "GT"
    },
    {
        name: ["Guinea", "Guinea"],
        capital: ["Conakry", "Conakry"],
        continent: "Afrika",
        code: "GN"
    },
    {
        name: ["Guinea-Bissau", "Guinea Bissau"],
        capital: ["Bissau", "Bissau"],
        continent: "Afrika",
        code: "GW"
    },
    {
        name: ["Guyana", "Guyana"],
        capital: ["Georgetown", "Georgetown"],
        continent: "Südamerika",
        code: "GY"
    },
    {
        name: ["Haiti", "Haiti"],
        capital: ["Port-au-Prince", "Port au Prince"],
        continent: "Nordamerika",
        code: "HT"
    },
    {
        name: ["Honduras", "Honduras"],
        capital: ["Tegucigalpa", "Tegucigalpa"],
        continent: "Nordamerika",
        code: "HN"
    },
    {
        name: ["Indien", "india"],
        capital: ["Neu-Delhi", "New Delhi"],
        continent: "Asien",
        code: "IN"
    },
    {
        name: ["Indonesien", "Indonesia"],
        capital: ["Jakarta", "Jakarta"],
        continent: "Asien",
        code: "ID"
    },
    {
        name: ["Irak", "Iraq"],
        capital: ["Bagdad", "Baghdad"],
        continent: "Asien",
        code: "IQ"
    },
    {
        name: ["Iran", "Iran"],
        capital: ["Teheran", "Tehran"],
        continent: "Asien",
        code: "IR"
    },
    {
        name: ["Irland", "Ireland"],
        capital: ["Dublin", "Dublin"],
        continent: "Europa",
        code: "IE"
    },
    {
        name: ["Island", "Iceland"],
        capital: ["Reykjavík", "Reykjavik"],
        continent: "Europa",
        code: "IS"
    },
    {
        name: ["Israel", "Israel"],
        capital: ["Jerusalem", "Jerusalem"],
        continent: "Asien",
        code: "IL"
    },
    {
        name: ["Italien", "Italy"],
        capital: ["Rom", "Rome"],
        continent: "Europa",
        code: "IT"
    },
    {
        name: ["Jamaika", "Jamaica"],
        capital: ["Kingston", "Kingston"],
        continent: "Nordamerika",
        code: "JM"
    },
    {
        name: ["Japan", "Japan"],
        capital: ["Tokio", "Tokyo"],
        continent: "Asien",
        code: "JP"
    },
    {
        name: ["Jemen", "Yemen"],
        capital: ["Sanaa", "Sana'a", "Aden"],
        continent: "Asien",
        code: "YE"
    },
    {
        name: ["Jordanien", "Jordan"],
        capital: ["Amman", "Amman"],
        continent: "Asien",
        code: "JO"
    },
    {
        name: ["Kambodscha", "Cambodia"],
        capital: ["Phnom Penh", "Phnom Penh"],
        continent: "Asien",
        code: "KH"
    },
    {
        name: ["Kamerun", "Cameroon"],
        capital: ["Yaoundé", "Yaounde"],
        continent: "Afrika",
        code: "CM"
    },
    {
        name: ["Kanada", "Canada"],
        capital: ["Ottawa", "Ottawa"],
        continent: "Nordamerika",
        code: "CA"
    },
    {
        name: ["Kasachstan", "Kazakhstan"],
        capital: ["Astana", "Nur-Sultan"],
        continent: "Asien",
        code: "KZ"
    },
    {
        name: ["Katar", "Qatar"],
        capital: ["Doha", "Doha"],
        continent: "Asien",
        code: "QA"
    },
    {
        name: ["Kenia", "Kenya"],
        capital: ["Nairobi", "Nairobi"],
        continent: "Afrika",
        code: "KE"
    },
    {
        name: ["Kirgisistan", "Kyrgyzstan"],
        capital: ["Bischkek", "Bishkek"],
        continent: "Asien",
        code: "KG"
    },
    {
        name: ["Kiribati", "Kiribati"],
        capital: ["South Tarawa", "Tarawa Atoll"],
        continent: "Ozeanien",
        code: "KI"
    },
    {
        name: ["Kolumbien", "colombia"],
        capital: ["Bogotá", "Bogota"],
        continent: "Südamerika",
        code: "CO"
    },
    {
        name: ["Komoren", "Comoros"],
        capital: ["Moroni", "Moroni"],
        continent: "Afrika",
        code: "KM"
    },
    {
        name: ["Kongo", "Congo", "Demokratische Republik Kongo", "Republic of Kinshasa"],
        capital: ["Kinshasa", "Kinshasa"],
        continent: "Afrika",
        code: "CD"
    },
    {
        name: ["Republik Kongo", "Republic Congo", "Republic of Brazzaville"],
        capital: ["Brazzaville", "Brazzaville"],
        continent: "Afrika",
        code: "CG"
    },
    {
        name: ["Nordkorea", "North Korea"],
        capital: ["Pjöngjang", "Pyongyang"],
        continent: "Asien",
        code: "KP"
    },
    {
        name: ["Südkorea", "South Korea"],
        capital: ["Seoul", "Seoul"],
        continent: "Asien",
        code: "KR"
    },
    {
        name: ["Kosovo", "Kosovo"],
        capital: ["Pristina", "Pristina"],
        continent: "Europa",
        code: "XK"
    },
    {
        name: ["Kroatien", "Croatia"],
        capital: ["Zagreb", "Zagreb"],
        continent: "Europa",
        code: "HR"
    },
    {
        name: ["Kuba", "Cuba"],
        capital: ["Havanna", "Havana"],
        continent: "Nordamerika",
        code: "CU"
    },
    {
        name: ["Kuwait", "Kuwait"],
        capital: ["Kuwait-Stadt", "Kuwait City", "Kuwait"],
        continent: "Asien",
        code: "KW"
    },
    {
        name: ["Laos", "Laos"],
        capital: ["Vientiane", "Vientiane"],
        continent: "Asien",
        code: "LA"
    },
    {
        name: ["Lesotho", "Lesotho"],
        capital: ["Maseru", "Maseru"],
        continent: "Afrika",
        code: "LS"
    },
    {
        name: ["Lettland", "Latvia"],
        capital: ["Riga", "Riga"],
        continent: "Europa",
        code: "LV"
    },
    {
        name: ["Libanon", "Lebanon"],
        capital: ["Beirut", "Beirut"],
        continent: "Asien",
        code: "LB"
    },
    {
        name: ["Liberia", "Liberia"],
        capital: ["Monrovia", "Monrovia"],
        continent: "Afrika",
        code: "LR"
    },
    {
        name: ["Libyen", "Libya"],
        capital: ["Tripolis", "Tripoli"],
        continent: "Afrika",
        code: "LY"
    },
    {
        name: ["Liechtenstein", "Liechtenstein"],
        capital: ["Vaduz", "Vaduz"],
        continent: "Europa",
        code: "LI"
    },
    {
        name: ["Litauen", "Lithuania"],
        capital: ["Vilnius", "Vilnius"],
        continent: "Europa",
        code: "LT"
    },
    {
        name: ["Luxemburg", "Luxembourg"],
        capital: ["Luxemburg", "Luxembourg"],
        continent: "Europa",
        code: "LU"
    },
    {
        name: ["Madagaskar", "Madagascar"],
        capital: ["Antananarivo", "Antananarivo"],
        continent: "Afrika",
        code: "MG"
    },
    {
        name: ["Malawi", "Malawi"],
        capital: ["Lilongwe", "Lilongwe"],
        continent: "Afrika",
        code: "MW"
    },
    {
        name: ["Malaysia", "Malaysia"],
        capital: ["Kuala Lumpur", "Kuala Lumpur", "Putrajaya"],
        continent: "Asien",
        code: "MY"
    },
    {
        name: ["Malediven", "Maldives"],
        capital: ["Malé", "Male"],
        continent: "Asien",
        code: "MV"
    },
    {
        name: ["Mali", "Mali"],
        capital: ["Bamako", "Bamako"],
        continent: "Afrika",
        code: "ML"
    },
    {
        name: ["Malta", "Malta"],
        capital: ["Valletta", "Valletta"],
        continent: "Europa",
        code: "MT"
    },
    {
        name: ["Marokko", "Morocco"],
        capital: ["Rabat", "Rabat"],
        continent: "Afrika",
        code: "MA"
    },
    {
        name: ["Marshallinseln", "Marshall Islands"],
        capital: ["Majuro", "Majuro"],
        continent: "Ozeanien",
        code: "MH"
    },
    {
        name: ["Mauretanien", "Mauritania"],
        capital: ["Nouakchott", "Nouakchott"],
        continent: "Afrika",
        code: "MR"
    },
    {
        name: ["Mauritius", "Mauritius"],
        capital: ["Port Louis", "Port Louis"],
        continent: "Afrika",
        code: "MU"
    },
    {
        name: ["Mexiko", "Mexico"],
        capital: ["Mexiko-Stadt", "Mexiko City", "Mexiko"],
        continent: "Nordamerika",
        code: "MX"
    },
    {
        name: ["Mikronesien", "Micronesia"],
        capital: ["Palikir", "Palikir"],
        continent: "Ozeanien",
        code: "FM"
    },
    {
        name: ["Moldau", "Moldova", "Moldawien"],
        capital: ["Chisinau", "Chisinau"],
        continent: "Europa",
        code: "MD"
    },
    {
        name: ["Monaco", "Monaco"],
        capital: ["Monaco", "Monaco"],
        continent: "Europa",
        code: "MC"
    },
    {
        name: ["Mongolei", "Mongolia"],
        capital: ["Ulaanbaatar", "Ulaanbaatar"],
        continent: "Asien",
        code: "MN"
    },
    {
        name: ["Montenegro", "Montenegro"],
        capital: ["Podgorica", "Podgorica"],
        continent: "Europa",
        code: "ME"
    },
    {
        name: ["Mosambik", "Mozambique"],
        capital: ["Maputo", "Maputo"],
        continent: "Afrika",
        code: "MZ"
    },
    {
        name: ["Myanmar", "Myanmar", "Burma"],
        capital: ["Naypyidaw", "Nay Pyi Taw"],
        continent: "Asien",
        code: "MM"
    },
    {
        name: ["Namibia", "Namibia"],
        capital: ["Windhoek", "Windhoek"],
        continent: "Afrika",
        code: "NA"
    },
    {
        name: ["Nauru", "Nauru"],
        capital: ["Yaren", "Yaren"],
        continent: "Ozeanien",
        code: "NR"
    },
    {
        name: ["Nepal", "Nepal"],
        capital: ["Kathmandu", "Kathmandu"],
        continent: "Asien",
        code: "NP"
    },
    {
        name: ["Neuseeland", "New Zealand"],
        capital: ["Wellington", "Wellington"],
        continent: "Ozeanien",
        code: "NZ"
    },
    {
        name: ["Nicaragua", "Nicaragua"],
        capital: ["Managua", "Managua"],
        continent: "Nordamerika",
        code: "NI"
    },
    {
        name: ["Niederlande", "Netherlands"],
        capital: ["Amsterdam", "Amsterdam"],
        continent: "Europa",
        code: "NL"
    },
    {
        name: ["Niger", "Niger"],
        capital: ["Niamey", "Niamey"],
        continent: "Afrika",
        code: "NE"
    },
    {
        name: ["Nigeria", "Nigeria"],
        capital: ["Abuja", "Abuja"],
        continent: "Afrika",
        code: "NG"
    },
    {
        name: ["Norwegen", "Norway"],
        capital: ["Oslo", "Oslo"],
        continent: "Europa",
        code: "NO"
    },
    {
        name: ["Nordmazedonien", "North Macedonia"],
        capital: ["Skopje", "Skopje"],
        continent: "Europa",
        code: "MK"
    },
    {
        name: ["Oman", "Oman"],
        capital: ["Maskat", "Muscat"],
        continent: "Asien",
        code: "OM"
    },
    {
        name: ["Österreich", "Austria"],
        capital: ["Wien", "Vienna"],
        continent: "Europa",
        code: "AT"
    },
    {
        name: ["Pakistan", "Pakistan"],
        capital: ["Islamabad", "Islamabad"],
        continent: "Asien",
        code: "PK"
    },
    {
        name: ["Palau", "Palau"],
        capital: ["Ngerulmud", "Ngerulmud", "Melekeok"],
        continent: "Ozeanien",
        code: "PW"
    },
    {
        name: ["Panama", "Panama"],
        capital: ["Panama-Stadt", "Panama City", "Panama"],
        continent: "Nordamerika",
        code: "PA"
    },
    {
        name: ["Papua-Neuguinea", "Papua New Guinea", "Papua Neuguinea"],
        capital: ["Port Moresby", "Port Moresby"],
        continent: "Ozeanien",
        code: "PG"
    },
    {
        name: ["Paraguay", "Paraguay"],
        capital: ["Asunción", "Asuncion"],
        continent: "Südamerika",
        code: "PY"
    },
    {
        name: ["Peru", "Peru"],
        capital: ["Lima", "Lima"],
        continent: "Südamerika",
        code: "PE"
    },
    {
        name: ["Philippinen", "Philippines"],
        capital: ["Manila", "Manila"],
        continent: "Asien",
        code: "PH"
    },
    {
        name: ["Polen", "Poland"],
        capital: ["Warschau", "Warsaw"],
        continent: "Europa",
        code: "PL"
    },
    {
        name: ["Portugal", "Portugal"],
        capital: ["Lissabon", "Lisbon"],
        continent: "Europa",
        code: "PT"
    },
    {
        name: ["Ruanda", "Rwanda"],
        capital: ["Kigali", "Kigali"],
        continent: "Afrika",
        code: "RW"
    },
    {
        name: ["Rumänien", "Romania"],
        capital: ["Bukarest", "Bucharest"],
        continent: "Europa",
        code: "RO"
    },
    {
        name: ["Russland", "Russia"],
        capital: ["Moskau", "Moscow"],
        continent: "Europa",
        code: "RU"
    },
    {
        name: ["Salomonen", "Solomon Islands"],
        capital: ["Honiara", "Honiara"],
        continent: "Ozeanien",
        code: "SB"
    },
    {
        name: ["Sambia", "Zambia"],
        capital: ["Lusaka", "Lusaka"],
        continent: "Afrika",
        code: "ZM"
    },
    {
        name: ["Samoa", "Samoa"],
        capital: ["Apia", "Apia"],
        continent: "Ozeanien",
        code: "WS"
    },
    {
        name: ["San Marino", "San Marino"],
        capital: ["San Marino", "San Marino"],
        continent: "Europa",
        code: "SM"
    },
    {
        name: ["São Tomé und Príncipe", "São Tomé and Príncipe", "Sao Tome und Principe", "Sao Tome and Principe"],
        capital: ["São Tomé", "Sao Tome"],
        continent: "Afrika",
        code: "ST"
    },
    {
        name: ["Saudi Arabien", "Saudi Arabia"],
        capital: ["Riad", "Riyadh"],
        continent: "Asien",
        code: "SA"
    },
    {
        name: ["Schweden", "Sweden"],
        capital: ["Stockholm", "Stockholm"],
        continent: "Europa",
        code: "SE"
    },
    {
        name: ["Schweiz", "Switzerland"],
        capital: ["Bern", "Bern"],
        continent: "Europa",
        code: "CH"
    },
    {
        name: ["Senegal", "Senegal"],
        capital: ["Dakar", "Dakar"],
        continent: "Afrika",
        code: "SN"
    },
    {
        name: ["Serbien", "Serbia"],
        capital: ["Belgrad", "Belgrade"],
        continent: "Europa",
        code: "RS"
    },
    {
        name: ["Seychellen", "Seychelles"],
        capital: ["Victoria", "Victoria"],
        continent: "Afrika",
        code: "SC"
    },
    {
        name: ["Sierra Leone", "Sierra Leone"],
        capital: ["Freetown", "Freetown"],
        continent: "Afrika",
        code: "SL"
    },
    {
        name: ["Simbabwe", "Zimbabwe"],
        capital: ["Harare", "Harare"],
        continent: "Afrika",
        code: "ZW"
    },
    {
        name: ["Singapur", "Singapore"],
        capital: ["Singapur", "Singapore"],
        continent: "Asien",
        code: "SG"
    },
    {
        name: ["Slowakei", "Slovakia"],
        capital: ["Bratislava", "Bratislava", "Pressburg"],
        continent: "Europa",
        code: "SK"
    },
    {
        name: ["Slowenien", "Slovenia"],
        capital: ["Ljubljana", "Ljubljana", "Laibach"],
        continent: "Europa",
        code: "SI"
    },
    {
        name: ["Somalia", "Somalia"],
        capital: ["Mogadischu", "Mogadishu"],
        continent: "Afrika",
        code: "SO"
    },
    {
        name: ["Spanien", "Spain"],
        capital: ["Madrid", "Madrid"],
        continent: "Europa",
        code: "ES"
    },
    {
        name: ["Sri Lanka", "Sri Lanka"],
        capital: ["Kotte", "Kotte", "Colombo", "Sri Jayewardenepura"],
        continent: "Asien",
        code: "LK"
    },
    {
        name: ["St. Kitts und Nevis", "Saint Kitts and Nevis"],
        capital: ["Basseterre", "Basseterre"],
        continent: "Nordamerika",
        code: "KN"
    },
    {
        name: ["St. Lucia", "Saint Lucia"],
        capital: ["Castries", "Castries"],
        continent: "Nordamerika",
        code: "LC"
    },
    {
        name: ["St. Vincent und die Grenadinen", "Saint Vincent and the Grenadines"],
        capital: ["Kingstown", "Kingstown"],
        continent: "Nordamerika",
        code: "VC"
    },
    {
        name: ["Südafrika", "South Africa"],
        capital: ["Kapstadt", "Cape Town", "Bloemfontein", "Pretoria"],
        continent: "Afrika",
        code: "ZA"
    },
    {
        name: ["Sudan", "Sudan"],
        capital: ["Khartum", "Khartoum"],
        continent: "Afrika",
        code: "SD"
    },
    {
        name: ["Südsudan", "South Sudan"],
        capital: ["Juba", "Juba"],
        continent: "Afrika",
        code: "SS"
    },
    {
        name: ["Suriname", "Suriname"],
        capital: ["Paramaribo", "Paramaribo"],
        continent: "Südamerika",
        code: "SR"
    },
    {
        name: ["Syrien", "Syria"],
        capital: ["Damaskus", "Damascus"],
        continent: "Asien",
        code: "SY"
    },
    {
        name: ["Tadschikistan", "Tajikistan"],
        capital: ["Duschanbe", "Dushanbe"],
        continent: "Asien",
        code: "TJ"
    },
    {
        name: ["Taiwan", "Taiwan"],
        capital: ["Taipeh", "Taipei"],
        continent: "Asien",
        code: "TW"
    },
    {
        name: ["Tansania", "Tanzania"],
        capital: ["Dodoma", "Dodoma", "Daressalam"],
        continent: "Afrika",
        code: "TZ"
    },
    {
        name: ["Thailand", "Thailand"],
        capital: ["Bangkok", "Bangkok"],
        continent: "Asien",
        code: "TH"
    },
    {
        name: ["Osttimor", "East Timor", "Timor-Leste"],
        capital: ["Dili", "Dili"],
        continent: "Asien",
        code: "TL"
    },
    {
        name: ["Togo", "Togo"],
        capital: ["Lomé", "Lome"],
        continent: "Afrika",
        code: "TG"
    },
    {
        name: ["Tonga", "Tonga"],
        capital: ["Nuku'alofa", "Nuku'alofa"],
        continent: "Ozeanien",
        code: "TO"
    },
    {
        name: ["Trinidad und Tobago", "Trinidad and Tobago"],
        capital: ["Port of Spain", "Port of Spain"],
        continent: "Nordamerika",
        code: "TT"
    },
    {
        name: ["Tschad", "Chad"],
        capital: ["N'Djamena", "N'Djamena"],
        continent: "Afrika",
        code: "TD"
    },
    {
        name: ["Tschechien", "Czechia", "Tschechische Republik"],
        capital: ["Prag", "Prague"],
        continent: "Europa",
        code: "CZ"
    },
    {
        name: ["Tunesien", "Tunisia"],
        capital: ["Tunis", "Tunis"],
        continent: "Afrika",
        code: "TN"
    },
    {
        name: ["Türkei", "Turkey"],
        capital: ["Ankara", "Ankara"],
        continent: "Asien",
        code: "TR"
    },
    {
        name: ["Turkmenistan", "Turkmenistan"],
        capital: ["Asgabat", "Ashgabat"],
        continent: "Asien",
        code: "TM"
    },
    {
        name: ["Tuvalu", "Tuvalu"],
        capital: ["Funafuti", "Funafuti"],
        continent: "Ozeanien",
        code: "TV"
    },
    {
        name: ["Uganda", "Uganda"],
        capital: ["Kampala", "Kampala"],
        continent: "Afrika",
        code: "UG"
    },
    {
        name: ["Ukraine", "Ukraine"],
        capital: ["Kiew", "Kiev", "Kyiv"],
        continent: "Europa",
        code: "UA"
    },
    {
        name: ["Ungarn", "Hungary"],
        capital: ["Budapest", "Budapest"],
        continent: "Europa",
        code: "HU"
    },
    {
        name: ["Uruguay", "Uruguay"],
        capital: ["Montevideo", "Montevideo"],
        continent: "Südamerika",
        code: "UY"
    },
    {
        name: ["Usbekistan", "Uzbekistan"],
        capital: ["Taschkent", "Tashkent"],
        continent: "Asien",
        code: "UZ"
    },
    {
        name: ["Vanuatu", "Vanuatu"],
        capital: ["Port Vila", "Port Vila"],
        continent: "Ozeanien",
        code: "VU"
    },
    {
        name: ["Vatikanstadt", "Vatican City", "Vatikan", "Vatican"],
        capital: ["Vatikanstadt", "Vatican City"],
        continent: "Europa",
        code: "VA"
    },
    {
        name: ["Venezuela", "Venezuela"],
        capital: ["Caracas", "Caracas"],
        continent: "Südamerika",
        code: "VE"
    },
    {
        name: ["Vereinigte Arabische Emirate", "United Arab Emirates", "VAE", "UAE"],
        capital: ["Abu Dhabi", "Abu Dhabi"],
        continent: "Asien",
        code: "AE"
    },
    {
        name: ["Vereinigte Staaten", "United States", "USA", "US"],
        capital: ["Washington, D.C.", "Washington D.C.", "Washington"],
        continent: "Nordamerika",
        code: "US"
    },
    {
        name: ["Vietnam", "Vietnam"],
        capital: ["Hanoi", "Hanoi"],
        continent: "Asien",
        code: "VN"
    },
    {
        name: ["Zentralafrikanische Republik", "Central African Republic", "Zentralafrika", "Central Africa"],
        capital: ["Bangui", "Bangui"],
        continent: "Afrika",
        code: "CF"
    },
    {
        name: ["Zypern", "Cyprus"],
        capital: ["Nikosia", "Nicosia"],
        continent: "Europa",
        code: "CY"
    },
]