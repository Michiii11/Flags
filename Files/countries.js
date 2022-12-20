let countries = [ // name: ["Deutsch", "Englisch", "Sonstige"]
{name: ["Afghanistan", "Afghanistan"], capital:["Kabul"], continent:"Asien", code:"AF"},
{name: ["Ägypten", "Egypt"], capital:["Kairo"], continent:"Afrika", code:"EG"},
{name: ["Albanien", "Albania"], capital:["Tirana"], continent:"Europa", code:"AL"},
{name: ["Algerien", "Algeria"], capital:["Algier"], continent:"Afrika", code:"DZ"},
{name: ["Andorra", "Andorra"], capital:["Andorra la Vella"], continent:"Europa", code:"AD"},
{name: ["Angola", "Angola"], capital:["Luanda"], continent:"Afrika", code:"AO"},
{name: ["Antigua und Barbuda", "Antigua und Barbuda"], capital:["Saint John's"], continent:"Nordamerika", code:"AG"},
{name: ["Äquatorialguinea", "Equatorial Guinea"], capital:["Malabo", "Ciudad de la Paz"], continent:"Afrika", code:"GQ"},
{name: ["Argentinien", "Argentina"], capital:["Buenos Aires"], continent:"Südamerika", code:"AR"},
{name: ["Armenien", "Armenia"], capital:["Jerewan"], continent:"Asien", code:"AM"},
{name: ["Aserbaidschan", "Azerbaijan"], capital:["Baku"], continent:"Asien", code:"AZ"},
{name: ["Äthiopien", "Ethiopia"], capital:["Addis Abeba"], continent:"Afrika", code:"ET"},
{name: ["Australien", "Australia"], capital:["Canberra"], continent:"Ozeanien", code:"AU"},
{name: ["Bahamas", "Bahamas"], capital:["Nassau"], continent:"Nordamerika", code:"BS"},
{name: ["Bahrain", "Bahrain"], capital:["Manama"], continent:"Asien", code:"BH"},
{name: ["Bangladesch", "Bangladesh"], capital:["Dhaka"], continent:"Asien", code:"BD"},
{name: ["Barbados", "Barbados"], capital:["Bridgetown"], continent:"Nordamerika", code:"BB"},
{name: ["Belarus", "Belarus", "Weißrussland"], capital:["Minsk"], continent:"Europa", code:"BY"},
{name: ["Belgien", "Belgium"], capital:["Brüssel"], continent:"Europa", code:"BE"},
{name: ["Belize", "Belize"], capital:["Belmopan"], continent:"Nordamerika", code:"BZ"},
{name: ["Benin", "Benin"], capital:["Porto-Novo", "Porto Novo"], continent:"Afrika", code:"BJ"},
{name: ["Bhutan", "Bhutan"], capital:["Thimphu"], continent:"Asien", code:"BT"},
{name: ["Bolivien", "Bolivia"], capital:["Sucre", "La Paz"], continent:"Südamerika", code:"BO"},
{name: ["Bosnien und Herzegowina", "Bosnia and Herzegovina"], capital:["Sarajevo"], continent:"Europa", code:"BA"},
{name: ["Botswana", "Botsuana"], capital:["Gaborone"], continent:"Afrika", code:"BW"},
{name: ["Brasilien", "Brazil"], capital:["Brasília", "Brasilia"], continent:"Südamerika", code:"BR"},
{name: ["Brunei", "Brunei"], capital:["Bandar Seri Begawan"], continent:"Asien", code:"BN"},
{name: ["Bulgarien", "Bulgaria"], capital:["Sofia"], continent:"Europa", code:"BG"},
{name: ["Burkina Faso", "Burkina Faso"], capital:["Ouagadougou"], continent:"Afrika", code:"BF"},
{name: ["Burundi", "Burundi"], capital:["Gitega"], continent:"Afrika", code:"BI"},
{name: ["Kap Verde", "Cabo Verde"], capital:["Praia"], continent:"Afrika", code:"CV"},
{name: ["Chile", "Chile"], capital:["Santiago de Chile"], continent:"Südamerika", code:"CL"},
{name: ["China", "China"], capital:["Peking"], continent:"Asien", code:"CN"},
{name: ["Cookinseln", "Cook Islands"], capital:["Avarua"], continent:"Ozeanien", code:"CK"},
{name: ["Costa Rica", "Costa Rica"], capital:["San José", "San Jose"], continent:"Nordamerika", code:"CR"},
{name: ["Elfenbeinküste", "Ivory Coast", "Côte d'Ivoire"], capital:["Yamoussoukro", "Abidjan"], continent:"Afrika", code:"CI"},
{name: ["Dänemark", "Denmark"], capital:["Kopenhagen"], continent:"Europa", code:"DK"},
{name: ["Deutschland", "Germany"], capital:["Berlin"], continent:"Europa", code:"DE"},
{name: ["Dominica", "Dominica"], capital:["Roseau"], continent:"Nordamerika", code:"DM"},
{name: ["Dominikanische Republik", "Dominican Republic", "Dom Rep"], capital:["Santo Domingo"], continent:"Nordamerika", code:"DO"},
{name: ["Dschibuti", "Djibouti"], capital:["Dschibuti"], continent:"Afrika", code:"DJ"},
{name: ["Ecuador", "Ecuador"], capital:["Quito"], continent:"Südamerika", code:"EC"},
{name: ["El Salvador", "El Salvador"], capital:["San Salvador"], continent:"Nordamerika", code:"SV"},
{name: ["Eritrea", "Eritrea"], capital:["Asmara"], continent:"Afrika", code:"ER"},
{name: ["Estland", "Estonia"], capital:["Tallinn"], continent:"Europa", code:"EE"},
{name: ["Eswatini", "Eswatini"], capital:["Mbabane"], continent:"Afrika", code:"SZ"},
{name: ["Fidschi", "Fiji"], capital:["Suva"], continent:"Ozeanien", code:"FJ"},
{name: ["Finnland", "Finland"], capital:["Helsinki"], continent:"Europa", code:"FI"},
{name: ["Frankreich", "France"], capital:["Paris"], continent:"Europa", code:"FR"},
{name: ["Gabun", "Gabon"], capital:["Libreville"], continent:"Afrika", code:"GA"},
{name: ["Gambia", "Gambia"], capital:["Banjul"], continent:"Afrika", code:"GM"},
{name: ["Georgien", "Georgia"], capital:["Tiflis"], continent:"Asien", code:"GE"},
{name: ["Ghana", "Ghana"], capital:["Accra"], continent:"Afrika", code:"GH"},
{name: ["Grenada", "Grenada"], capital:["St. George's"], continent:"Nordamerika", code:"GD"},
{name: ["Griechenland", "Greece"], capital:["Athen"], continent:"Europa", code:"GR"},
{name: ["Großbritannien", "United Kingdom", "Vereinigte Königreich", "UK"], capital:["London"], continent:"Europa", code:"GB"},
{name: ["Guatemala", "Guatemala"], capital:["Guatemala-Stadt", "Guatemala Stadt"], continent:"Nordamerika", code:"GT"},
{name: ["Guinea", "Guinea"], capital:["Conakry"], continent:"Afrika", code:"GN"},
{name: ["Guinea-Bissau", "Guinea Bissau"], capital:["Bissau"], continent:"Afrika", code:"GW"},
{name: ["Guyana", "Guyana"], capital:["Georgetown"], continent:"Südamerika", code:"GY"},
{name: ["Haiti", "Haiti"], capital:["Port-au-Prince", "Port au Prince"], continent:"Nordamerika", code:"HT"},
{name: ["Honduras", "Honduras"], capital:["Tegucigalpa"], continent:"Nordamerika", code:"HN"},
{name: ["Indien", "india"], capital:["Neu-Delhi", "Neu Delhi"], continent:"Asien", code:"IN"},
{name: ["Indonesien", "Indonesia"], capital:["Jakarta"], continent:"Asien", code:"ID"},
{name: ["Irak", "Iraq"], capital:["Bagdad"], continent:"Asien", code:"IQ"},
{name: ["Iran", "Iran"], capital:["Teheran"], continent:"Asien", code:"IR"},
{name: ["Irland", "Ireland"], capital:["Dublin"], continent:"Europa", code:"IE"},
{name: ["Island", "Iceland"], capital:["Reykjavík", "Reykjavik"], continent:"Europa", code:"IS"},
{name: ["Israel", "Israel"], capital:["Jerusalem"], continent:"Asien", code:"IL"},
{name: ["Italien", "Italy"], capital:["Rom"], continent:"Europa", code:"IT"},
{name: ["Jamaika", "Jamaica"], capital:["Kingston"], continent:"Nordamerika", code:"JM"},
{name: ["Japan", "Japan"], capital:["Tokio"], continent:"Asien", code:"JP"},
{name: ["Jemen", "Yemen"], capital:["Sanaa", "Aden"], continent:"Asien", code:"YE"},
{name: ["Jordanien", "Jordan"], capital:["Amman"], continent:"Asien", code:"JO"},
{name: ["Kambodscha", "Cambodia"], capital:["Phnom Penh"], continent:"Asien", code:"KH"},
{name: ["Kamerun", "Cameroon"], capital:["Yaoundé", "Yaounde"], continent:"Afrika", code:"CM"},
{name: ["Kanada", "Canada"], capital:["Ottawa"], continent:"Nordamerika", code:"CA"},
{name: ["Kasachstan", "Kazakhstan"], capital:["Astana"], continent:"Asien", code:"KZ"},
{name: ["Katar", "Qatar"], capital:["Doha"], continent:"Asien", code:"QA"},
{name: ["Kenia", "Kenya"], capital:["Nairobi"], continent:"Afrika", code:"KE"},
{name: ["Kirgisistan", "Kyrgyzstan"], capital:["Bischkek"], continent:"Asien", code:"KG"},
{name: ["Kiribati", "Kiribati"], capital:["South Tarawa"], continent:"Ozeanien", code:"KI"},
{name: ["Kolumbien", "colombia"], capital:["Bogotá", "Bogota"], continent:"Südamerika", code:"CO"},
{name: ["Komoren", "Comoros"], capital:["Moroni"], continent:"Afrika", code:"KM"},
{name: ["Kongo", "Congo", "Demokratische Republik Kongo", "Republic of Kinshasa"], capital:["Kinshasa"], continent:"Afrika", code:"CD"},
{name: ["Republik Kongo", "Republic Congo", "Republic of Brazzaville"], capital:["Brazzaville"], continent:"Afrika", code:"CG"},
{name: ["Nordkorea", "North Korea"], capital:["Pjöngjang"], continent:"Asien", code:"KP"},
{name: ["Südkorea", "South Korea"], capital:["Seoul"], continent:"Asien", code:"KR"},
{name: ["Kosovo", "Kosovo"], capital:["Pristina"], continent:"Europa", code:"XK"},
{name: ["Kroatien", "Croatia"], capital:["Zagreb"], continent:"Europa", code:"HR"},
{name: ["Kuba", "Cuba"], capital:["Havanna"], continent:"Nordamerika", code:"CU"},
{name: ["Kuwait", "Kuwait"], capital:["Kuwait"], continent:"Asien", code:"KW"},
{name: ["Laos", "Lao"], capital:["Vientiane"], continent:"Asien", code:"LA"},
{name: ["Lesotho", "Lesotho"], capital:["Maseru"], continent:"Afrika", code:"LS"},
{name: ["Lettland", "Latvia"], capital:["Riga"], continent:"Europa", code:"LV"},
{name: ["Libanon", "Lebanon"], capital:["Beirut"], continent:"Asien", code:"LB"},
{name: ["Liberia", "Liberia"], capital:["Monrovia"], continent:"Afrika", code:"LR"},
{name: ["Libyen", "Libya"], capital:["Tripolis"], continent:"Afrika", code:"LY"},
{name: ["Liechtenstein", "Liechtenstein"], capital:["Vaduz"], continent:"Europa", code:"LI"},
{name: ["Litauen", "Lithuania"], capital:["Vilnius"], continent:"Europa", code:"LT"},
{name: ["Luxemburg", "Luxembourg"], capital:["Luxemburg"], continent:"Europa", code:"LU"},
{name: ["Madagaskar", "Madagascar"], capital:["Antananarivo"], continent:"Afrika", code:"MG"},
{name: ["Malawi", "Malawi"], capital:["Lilongwe"], continent:"Afrika", code:"MW"},
{name: ["Malaysia", "Malaysia"], capital:["Kuala Lumpur", "Putrajaya"], continent:"Asien", code:"MY"},
{name: ["Malediven", "Maldives"], capital:["Malé", "Male"], continent:"Asien", code:"MV"},
{name: ["Mali", "Mali"], capital:["Bamako"], continent:"Afrika", code:"ML"},
{name: ["Malta", "Malta"], capital:["Valletta"], continent:"Europa", code:"MT"},
{name: ["Marokko", "Morocco"], capital:["Rabat"], continent:"Afrika", code:"MA"},
{name: ["Marshallinseln", "Marshall Islands"], capital:["Majuro"], continent:"Ozeanien", code:"MH"},
{name: ["Mauretanien", "Mauritania"], capital:["Nouakchott"], continent:"Afrika", code:"MR"},
{name: ["Mauritius", "Mauritius"], capital:["Port Louis"], continent:"Afrika", code:"MU"},
{name: ["Mexiko", "Mexico"], capital:["Mexiko-Stadt", "Mexiko Stadt"], continent:"Nordamerika", code:"MX"},
{name: ["Mikronesien", "Micronesia"], capital:["Palikir"], continent:"Ozeanien", code:"FM"},
{name: ["Moldau", "Moldova", "Moldawien"], capital:["Chisinau"], continent:"Europa", code:"MD"},
{name: ["Monaco", "Monaco"], capital:["Monaco"], continent:"Europa", code:"MC"},
{name: ["Mongolei", "Mongolia"], capital:["Ulaanbaatar"], continent:"Asien", code:"MN"},
{name: ["Montenegro", "Montenegro"], capital:["Podgorica"], continent:"Europa", code:"ME"},
{name: ["Mosambik", "Mozambique"], capital:["Maputo"], continent:"Afrika", code:"MZ"},
{name: ["Myanmar", "Myanmar", "Burma"], capital:["Naypyidaw"], continent:"Asien", code:"MM"},
{name: ["Namibia", "Namibia"], capital:["Windhoek"], continent:"Afrika", code:"NA"},
{name: ["Nauru", "Nauru"], capital:["Yaren"], continent:"Ozeanien", code:"NR"},
{name: ["Nepal", "Nepal"], capital:["Kathmandu"], continent:"Asien", code:"NP"},
{name: ["Neuseeland", "New Zealand"], capital:["Wellington"], continent:"Ozeanien", code:"NZ"},
{name: ["Nicaragua", "Nicaragua"], capital:["Managua"], continent:"Nordamerika", code:"NI"},
{name: ["Niederlande", "Netherlands"], capital:["Amsterdam"], continent:"Europa", code:"NL"},
{name: ["Niger", "Niger"], capital:["Niamey"], continent:"Afrika", code:"NE"},
{name: ["Nigeria", "Nigeria"], capital:["Abuja"], continent:"Afrika", code:"NG"},
{name: ["Norwegen", "Norway"], capital:["Oslo"], continent:"Europa", code:"NO"},
{name: ["Nordmazedonien", "North Macedonia"], capital:["Skopje"], continent:"Europa", code:"MK"},
{name: ["Oman", "Oman"], capital:["Maskat"], continent:"Asien", code:"OM"},
{name: ["Österreich", "Austria"], capital:["Wien"], continent:"Europa", code:"AT"},
{name: ["Pakistan", "Pakistan"], capital:["Islamabad"], continent:"Asien", code:"PK"},
{name: ["Palau", "Palau"], capital:["Ngerulmud"], continent:"Ozeanien", code:"PW"},
{name: ["Panama", "Panama"], capital:["Panama-Stadt", "Panama Stadt"], continent:"Nordamerika", code:"PA"},
{name: ["Papua-Neuguinea", "Papua New Guinea", "Papua Neuguinea"], capital:["Port Moresby"], continent:"Ozeanien", code:"PG"},
{name: ["Paraguay", "Paraguay"], capital:["Asunción", "Ascuncion"], continent:"Südamerika", code:"PY"},
{name: ["Peru", "Peru"], capital:["Lima"], continent:"Südamerika", code:"PE"},
{name: ["Philippinen", "Philippines"], capital:["Manila"], continent:"Asien", code:"PH"},
{name: ["Polen", "Poland"], capital:["Warschau"], continent:"Europa", code:"PL"},
{name: ["Portugal", "Portugal"], capital:["Lissabon"], continent:"Europa", code:"PT"},
{name: ["Ruanda", "Rwanda"], capital:["Kigali"], continent:"Afrika", code:"RW"},
{name: ["Rumänien", "Romania"], capital:["Bukarest"], continent:"Europa", code:"RO"},
{name: ["Russland", "Russia"], capital:["Moskau"], continent:"Europa", code:"RU"},
{name: ["Salomonen", "Solomon Islands"], capital:["Honiara"], continent:"Ozeanien", code:"SB"},
{name: ["Sambia", "Zambia"], capital:["Lusaka"], continent:"Afrika", code:"ZM"},
{name: ["Samoa", "Samoa"], capital:["Apia"], continent:"Ozeanien", code:"WS"},
{name: ["San Marino", "San Marino"], capital:["San Marino"], continent:"Europa", code:"SM"},
{name: ["São Tomé und Príncipe", "São Tomé and Príncipe", "Sao Tome und Principe", "Sao Tome and Principe"], capital:["São Tomé", "Sao Tome"], continent:"Afrika", code:"ST"},
{name: ["Saudi Arabien", "Saudi Arabia"], capital:["Riad"], continent:"Asien", code:"SA"},
{name: ["Schweden", "Sweden"], capital:["Stockholm"], continent:"Europa", code:"SE"},
{name: ["Schweiz", "Switzerland"], capital:["Bern"], continent:"Europa", code:"CH"},
{name: ["Senegal", "Senegal"], capital:["Dakar"], continent:"Afrika", code:"SN"},
{name: ["Serbien", "Serbia"], capital:["Belgrad"], continent:"Europa", code:"RS"},
{name: ["Seychellen", "Seychelles"], capital:["Victoria"], continent:"Afrika", code:"SC"},
{name: ["Sierra Leone", "Sierra Leone"], capital:["Freetown"], continent:"Afrika", code:"SL"},
{name: ["Simbabwe", "Zimbabwe"], capital:["Harare"], continent:"Afrika", code:"ZW"},
{name: ["Singapur", "Singapore"], capital:["Singapur"], continent:"Asien", code:"SG"},
{name: ["Slowakei", "Slovakia"], capital:["Bratislava", "Pressburg"], continent:"Europa", code:"SK"},
{name: ["Slowenien", "Slovenia"], capital:["Ljubljana", "Laibach"], continent:"Europa", code:"SI"},
{name: ["Somalia", "Somalia"], capital:["Mogadischu"], continent:"Afrika", code:"SO"},
{name: ["Spanien", "Spain"], capital:["Madrid"], continent:"Europa", code:"ES"},
{name: ["Sri Lanka", "Sri Lanka"], capital:["Kotte", "Colombo", "Sri Jayewardenepura"], continent:"Asien", code:"LK"},
{name: ["St. Kitts und Nevis", "Saint Kitts and Nevis"], capital:["Basseterre"], continent:"Nordamerika", code:"KN"},
{name: ["St. Lucia", "Saint Lucia"], capital:["Castries"], continent:"Nordamerika", code:"LC"},
{name: ["St. Vincent und die Grenadinen", "Saint Vincent and the Grenadines"], capital:["Kingstown"], continent:"Nordamerika", code:"VC"},
{name: ["Südafrika", "South Africa"], capital:["Kapstadt", "Bloemfontein", "Pretoria"], continent:"Afrika", code:"ZA"},
{name: ["Sudan", "Sudan"], capital:["Khartum"], continent:"Afrika", code:"SD"},
{name: ["Südsudan", "Sotuh Sudan"], capital:["Juba"], continent:"Afrika", code:"SS"},
{name: ["Suriname", "Suriname"], capital:["Paramaribo"], continent:"Südamerika", code:"SR"},
{name: ["Syrien", "Syria"], capital:["Damaskus"], continent:"Asien", code:"SY"},
{name: ["Tadschikistan", "Tajikistan"], capital:["Duschanbe"], continent:"Asien", code:"TJ"},
{name: ["Taiwan", "Taiwan"], capital:["Taipeh"], continent:"Asien", code:"TW"},
{name: ["Tansania", "Tanzania"], capital:["Dodoma", "Daressalam"], continent:"Afrika", code:"TZ"},
{name: ["Thailand", "Thailand"], capital:["Bangkok"], continent:"Asien", code:"TH"},
{name: ["Osttimor", "East Timor", "Timor-Leste"], capital:["Dili"], continent:"Asien", code:"TL"},
{name: ["Togo", "Togo"], capital:["Lomé", "Lome"], continent:"Afrika", code:"TG"},
{name: ["Tonga", "Tonga"], capital:["Nuku'alofa", "Nukualofa"], continent:"Ozeanien", code:"TO"},
{name: ["Trinidad und Tobago", "Trinidad and Tobago"], capital:["Port of Spain"], continent:"Nordamerika", code:"TT"},
{name: ["Tschad", "Chad"], capital:["N'Djamena", "NDjamena"], continent:"Afrika", code:"TD"},
{name: ["Tschechien", "Czechia", "Tschechische Republik"], capital:["Prag"], continent:"Europa", code:"CZ"},
{name: ["Tunesien", "Tunisia"], capital:["Tunis"], continent:"Afrika", code:"TN"},
{name: ["Türkei", "Turkey"], capital:["Ankara"], continent:"Asien", code:"TR"},
{name: ["Turkmenistan", "Turkmenistan"], capital:["Asgabat"], continent:"Asien", code:"TM"},
{name: ["Tuvalu", "Tuvalu"], capital:["Funafuti"], continent:"Ozeanien", code:"TV"},
{name: ["Uganda", "Uganda"], capital:["Kampala"], continent:"Afrika", code:"UG"},
{name: ["Ukraine", "Ukraine"], capital:["Kiew"], continent:"Europa", code:"UA"},
{name: ["Ungarn", "Hungary"], capital:["Budapest"], continent:"Europa", code:"HU"},
{name: ["Uruguay", "Uruguay"], capital:["Montevideo"], continent:"Südamerika", code:"UY"},
{name: ["Usbekistan", "Uzbekistan"], capital:["Taschkent"], continent:"Asien", code:"UZ"},
{name: ["Vanuatu", "Vanuatu"], capital:["Port Vila"], continent:"Ozeanien", code:"VU"},
{name: ["Vatikanstadt", "Vatican City", "Vatikan"], capital:["Vatikanstadt"], continent:"Europa", code:"VA"},
{name: ["Venezuela", "Venezuela"], capital:["Caracas"], continent:"Südamerika", code:"VE"},
{name: ["Vereinigte Arabische Emirate", "United Arab Emirates", "VAE", "UAE"], capital:["Abu Dhabi"], continent:"Asien", code:"AE"},
{name: ["Vereinigte Staaten", "United States", "USA", "US"], capital:["Washington, D.C.", "Washington"], continent:"Nordamerika", code:"US"},
{name: ["Vietnam", "Vietnam"], capital:["Hanoi"], continent:"Asien", code:"VN"},
{name: ["Zentralafrikanische Republik", "Central African Republic", "Zentralafrika", "Central Africa"], capital:["Bangui"], continent:"Afrika", code:"CF"},
{name: ["Zypern", "Cyprus"], capital:["Nikosia"], continent:"Europa", code:"CY"},
]