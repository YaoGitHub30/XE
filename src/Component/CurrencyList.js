const CurrencyList=[
{iso: 'USD', currency_name: 'US Dollar', is_obsolete: false},
{iso: 'AUD', currency_name: 'Australian Dollar', is_obsolete: false},
{iso: 'EUR', currency_name: 'Euro', is_obsolete: false},
{iso: 'GBP', currency_name: 'British Pound', is_obsolete: false},
{iso: 'CAD', currency_name: 'Canadian Dollar', is_obsolete: false},
{iso: 'CHF', currency_name: 'Swiss Franc', is_obsolete: false},
{iso: 'JPY', currency_name: 'Japanese Yen', is_obsolete: false},
{iso: 'NZD', currency_name: 'New Zealand Dollar', is_obsolete: false},
{iso: 'CNY', currency_name: 'Chinese Yuan Renminbi', is_obsolete: false},
{iso: 'AED', currency_name: 'Emirati Dirham', is_obsolete: false},
{iso: 'AFN', currency_name: 'Afghan Afghani', is_obsolete: false},
{iso: 'ALL', currency_name: 'Albanian Lek', is_obsolete: false},
{iso: 'AMD', currency_name: 'Armenian Dram', is_obsolete: false},
{iso: 'ANG', currency_name: 'Dutch Guilder', is_obsolete: false},
{iso: 'AOA', currency_name: 'Angolan Kwanza', is_obsolete: false},
{iso: 'ARS', currency_name: 'Argentine Peso', is_obsolete: false},

// 8: {iso: 'AWG', currency_name: 'Aruban or Dutch Guilder', is_obsolete: false}
// 9: {iso: 'AZN', currency_name: 'Azerbaijan Manat', is_obsolete: false}
// 10: {iso: 'BAM', currency_name: 'Bosnian Convertible Mark', is_obsolete: false}
// 11: {iso: 'BBD', currency_name: 'Barbadian or Bajan Dollar', is_obsolete: false}
// 12: {iso: 'BDT', currency_name: 'Bangladeshi Taka', is_obsolete: false}
// 13: {iso: 'BGN', currency_name: 'Bulgarian Lev', is_obsolete: false}
// 14: {iso: 'BHD', currency_name: 'Bahraini Dinar', is_obsolete: false}
// 15: {iso: 'BIF', currency_name: 'Burundian Franc', is_obsolete: false}
// 16: {iso: 'BMD', currency_name: 'Bermudian Dollar', is_obsolete: false}
// 17: {iso: 'BND', currency_name: 'Bruneian Dollar', is_obsolete: false}
// 18: {iso: 'BOB', currency_name: 'Bolivian Bolíviano', is_obsolete: false}
// 19: {iso: 'BRL', currency_name: 'Brazilian Real', is_obsolete: false}
// 20: {iso: 'BSD', currency_name: 'Bahamian Dollar', is_obsolete: false}
// 21: {iso: 'BTN', currency_name: 'Bhutanese Ngultrum', is_obsolete: false}
// 22: {iso: 'BWP', currency_name: 'Botswana Pula', is_obsolete: false}
// 23: {iso: 'BYN', currency_name: 'Belarusian Ruble', is_obsolete: false}
// 24: {iso: 'BZD', currency_name: 'Belizean Dollar', is_obsolete: false}
// 
// 26: {iso: 'CDF', currency_name: 'Congolese Franc', is_obsolete: false}
// 
// 28: {iso: 'CLF', currency_name: 'Chilean Unidad de Fomento', is_obsolete: false}
// 29: {iso: 'CLP', currency_name: 'Chilean Peso', is_obsolete: false}
// 30: {iso: 'CNH', currency_name: 'Chinese Yuan Renminbi Offshore', is_obsolete: false}
// 
// 32: {iso: 'COP', currency_name: 'Colombian Peso', is_obsolete: false}
// 33: {iso: 'CRC', currency_name: 'Costa Rican Colon', is_obsolete: false}
// 34: {iso: 'CUC', currency_name: 'Cuban Convertible Peso', is_obsolete: false}
// 35: {iso: 'CUP', currency_name: 'Cuban Peso', is_obsolete: false}
// 36: {iso: 'CVE', currency_name: 'Cape Verdean Escudo', is_obsolete: false}
// 37: {iso: 'CZK', currency_name: 'Czech Koruna', is_obsolete: false}
// 38: {iso: 'DJF', currency_name: 'Djiboutian Franc', is_obsolete: false}
// 39: {iso: 'DKK', currency_name: 'Danish Krone', is_obsolete: false}
// 40: {iso: 'DOP', currency_name: 'Dominican Peso', is_obsolete: false}
// 41: {iso: 'DZD', currency_name: 'Algerian Dinar', is_obsolete: false}
// 42: {iso: 'EGP', currency_name: 'Egyptian Pound', is_obsolete: false}
// 43: {iso: 'ERN', currency_name: 'Eritrean Nakfa', is_obsolete: false}
// 44: {iso: 'ETB', currency_name: 'Ethiopian Birr', is_obsolete: false}
// 
// 46: {iso: 'FJD', currency_name: 'Fijian Dollar', is_obsolete: false}
// 47: {iso: 'FKP', currency_name: 'Falkland Island Pound', is_obsolete: false}
// 
// 49: {iso: 'GEL', currency_name: 'Georgian Lari', is_obsolete: false}
// 50: {iso: 'GGP', currency_name: 'Guernsey Pound', is_obsolete: false}
// 51: {iso: 'GHS', currency_name: 'Ghanaian Cedi', is_obsolete: false}
// 52: {iso: 'GIP', currency_name: 'Gibraltar Pound', is_obsolete: false}
// 53: {iso: 'GMD', currency_name: 'Gambian Dalasi', is_obsolete: false}
// 54: {iso: 'GNF', currency_name: 'Guinean Franc', is_obsolete: false}
// 55: {iso: 'GTQ', currency_name: 'Guatemalan Quetzal', is_obsolete: false}
// 56: {iso: 'GYD', currency_name: 'Guyanese Dollar', is_obsolete: false}
// 57: {iso: 'HKD', currency_name: 'Hong Kong Dollar', is_obsolete: false}
// 58: {iso: 'HNL', currency_name: 'Honduran Lempira', is_obsolete: false}
// 59: {iso: 'HRK', currency_name: 'Croatian Kuna', is_obsolete: false}
// 60: {iso: 'HTG', currency_name: 'Haitian Gourde', is_obsolete: false}
// 61: {iso: 'HUF', currency_name: 'Hungarian Forint', is_obsolete: false}
// 62: {iso: 'IDR', currency_name: 'Indonesian Rupiah', is_obsolete: false}
// 63: {iso: 'ILS', currency_name: 'Israeli Shekel', is_obsolete: false}
// 64: {iso: 'IMP', currency_name: 'Isle of Man Pound', is_obsolete: false}
// 65: {iso: 'INR', currency_name: 'Indian Rupee', is_obsolete: false}
// 66: {iso: 'IQD', currency_name: 'Iraqi Dinar', is_obsolete: false}
// 67: {iso: 'IRR', currency_name: 'Iranian Rial', is_obsolete: false}
// 68: {iso: 'ISK', currency_name: 'Icelandic Krona', is_obsolete: false}
// 69: {iso: 'JEP', currency_name: 'Jersey Pound', is_obsolete: false}
// 70: {iso: 'JMD', currency_name: 'Jamaican Dollar', is_obsolete: false}
// 71: {iso: 'JOD', currency_name: 'Jordanian Dinar', is_obsolete: false}
// 
// 73: {iso: 'KES', currency_name: 'Kenyan Shilling', is_obsolete: false}
// 74: {iso: 'KGS', currency_name: 'Kyrgyzstani Som', is_obsolete: false}
// 75: {iso: 'KHR', currency_name: 'Cambodian Riel', is_obsolete: false}
// 76: {iso: 'KMF', currency_name: 'Comorian Franc', is_obsolete: false}
// 77: {iso: 'KPW', currency_name: 'North Korean Won', is_obsolete: false}
// 78: {iso: 'KRW', currency_name: 'South Korean Won', is_obsolete: false}
// 79: {iso: 'KWD', currency_name: 'Kuwaiti Dinar', is_obsolete: false}
// 80: {iso: 'KYD', currency_name: 'Caymanian Dollar', is_obsolete: false}
// 81: {iso: 'KZT', currency_name: 'Kazakhstani Tenge', is_obsolete: false}
// 82: {iso: 'LAK', currency_name: 'Lao Kip', is_obsolete: false}
// 83: {iso: 'LBP', currency_name: 'Lebanese Pound', is_obsolete: false}
// 84: {iso: 'LKR', currency_name: 'Sri Lankan Rupee', is_obsolete: false}
// 85: {iso: 'LRD', currency_name: 'Liberian Dollar', is_obsolete: false}
// 86: {iso: 'LSL', currency_name: 'Basotho Loti', is_obsolete: false}
// 87: {iso: 'LYD', currency_name: 'Libyan Dinar', is_obsolete: false}
// 88: {iso: 'MAD', currency_name: 'Moroccan Dirham', is_obsolete: false}
// 89: {iso: 'MDL', currency_name: 'Moldovan Leu', is_obsolete: false}
// 90: {iso: 'MGA', currency_name: 'Malagasy Ariary', is_obsolete: false}
// 91: {iso: 'MKD', currency_name: 'Macedonian Denar', is_obsolete: false}
// 92: {iso: 'MMK', currency_name: 'Burmese Kyat', is_obsolete: false}
// 93: {iso: 'MNT', currency_name: 'Mongolian Tughrik', is_obsolete: false}
// 94: {iso: 'MOP', currency_name: 'Macau Pataca', is_obsolete: false}
// 95: {iso: 'MRU', currency_name: 'Mauritanian Ouguiya', is_obsolete: false}
// 96: {iso: 'MUR', currency_name: 'Mauritian Rupee', is_obsolete: false}
// 97: {iso: 'MVR', currency_name: 'Maldivian Rufiyaa', is_obsolete: false}
// 98: {iso: 'MWK', currency_name: 'Malawian Kwacha', is_obsolete: false}
// 99: {iso: 'MXN', currency_name: 'Mexican Peso', is_obsolete: false}
// 100:{iso: 'MXV', currency_name: 'Unidad de inversión', is_obsolete: false}
// 101: {iso: 'MYR', currency_name: 'Malaysian Ringgit', is_obsolete: false}
// 102: {iso: 'MZN', currency_name: 'Mozambican Metical', is_obsolete: false}
// 103: {iso: 'NAD', currency_name: 'Namibian Dollar', is_obsolete: false}
// 104: {iso: 'NGN', currency_name: 'Nigerian Naira', is_obsolete: false}
// 105: {iso: 'NIO', currency_name: 'Nicaraguan Cordoba', is_obsolete: false}
// 106: {iso: 'NOK', currency_name: 'Norwegian Krone', is_obsolete: false}
// 107: {iso: 'NPR', currency_name: 'Nepalese Rupee', is_obsolete: false}
// 
// 109: {iso: 'OMR', currency_name: 'Omani Rial', is_obsolete: false}
// 110: {iso: 'PAB', currency_name: 'Panamanian Balboa', is_obsolete: false}
// 111: {iso: 'PEN', currency_name: 'Peruvian Sol', is_obsolete: false}
// 112: {iso: 'PGK', currency_name: 'Papua New Guinean Kina', is_obsolete: false}
// 113: {iso: 'PHP', currency_name: 'Philippine Peso', is_obsolete: false}
// 114: {iso: 'PKR', currency_name: 'Pakistani Rupee', is_obsolete: false}
// 115: {iso: 'PLN', currency_name: 'Polish Zloty', is_obsolete: false}
// 116: {iso: 'PYG', currency_name: 'Paraguayan Guarani', is_obsolete: false}
// 117: {iso: 'QAR', currency_name: 'Qatari Riyal', is_obsolete: false}
// 118: {iso: 'RON', currency_name: 'Romanian Leu', is_obsolete: false}
// 119: {iso: 'RSD', currency_name: 'Serbian Dinar', is_obsolete: false}
// 120: {iso: 'RUB', currency_name: 'Russian Ruble', is_obsolete: false}
// 121: {iso: 'RWF', currency_name: 'Rwandan Franc', is_obsolete: false}
// 122: {iso: 'SAR', currency_name: 'Saudi Arabian Riyal', is_obsolete: false}
// 123: {iso: 'SBD', currency_name: 'Solomon Islander Dollar', is_obsolete: false}
// 124: {iso: 'SCR', currency_name: 'Seychellois Rupee', is_obsolete: false}
// 125: {iso: 'SDG', currency_name: 'Sudanese Pound', is_obsolete: false}
// 126: {iso: 'SEK', currency_name: 'Swedish Krona', is_obsolete: false}
// 127: {iso: 'SGD', currency_name: 'Singapore Dollar', is_obsolete: false}
// 128: {iso: 'SHP', currency_name: 'Saint Helenian Pound', is_obsolete: false}
// 129: {iso: 'SLE', currency_name: 'Sierra Leonean Leone', is_obsolete: false}
// 130: {iso: 'SLL', currency_name: 'Sierra Leonean Leone', is_obsolete: false}
// 131: {iso: 'SOS', currency_name: 'Somali Shilling', is_obsolete: false}
// 132: {iso: 'SPL', currency_name: 'Seborgan Luigino', is_obsolete: false}
// 133: {iso: 'SRD', currency_name: 'Surinamese Dollar', is_obsolete: false}
// 134: {iso: 'STN', currency_name: 'Sao Tomean Dobra', is_obsolete: false}
// 135: {iso: 'SVC', currency_name: 'Salvadoran Colon', is_obsolete: false}
// 136: {iso: 'SYP', currency_name: 'Syrian Pound', is_obsolete: false}
// 137: {iso: 'SZL', currency_name: 'Swazi Lilangeni', is_obsolete: false}
// 138: {iso: 'THB', currency_name: 'Thai Baht', is_obsolete: false}
// 139: {iso: 'TJS', currency_name: 'Tajikistani Somoni', is_obsolete: false}
// 140: {iso: 'TMT', currency_name: 'Turkmenistani Manat', is_obsolete: false}
// 141: {iso: 'TND', currency_name: 'Tunisian Dinar', is_obsolete: false}
// 142: {iso: 'TOP', currency_name: "Tongan Pa'anga", is_obsolete: false}
// 143: {iso: 'TRY', currency_name: 'Turkish Lira', is_obsolete: false}
// 144: {iso: 'TTD', currency_name: 'Trinidadian Dollar', is_obsolete: false}
// 145: {iso: 'TVD', currency_name: 'Tuvaluan Dollar', is_obsolete: false}
// 146: {iso: 'TWD', currency_name: 'Taiwan New Dollar', is_obsolete: false}
// 147: {iso: 'TZS', currency_name: 'Tanzanian Shilling', is_obsolete: false}
// 148: {iso: 'UAH', currency_name: 'Ukrainian Hryvnia', is_obsolete: false}
// 149: {iso: 'UGX', currency_name: 'Ugandan Shilling', is_obsolete: false}
// 150: {iso: 'USD', currency_name: 'US Dollar', is_obsolete: false}
// 151: {iso: 'UYU', currency_name: 'Uruguayan Peso', is_obsolete: false}
// 152: {iso: 'UZS', currency_name: 'Uzbekistani Som', is_obsolete: false}
// 153: {iso: 'VED', currency_name: 'Venezuelan Bolívar', is_obsolete: false}
// 154: {iso: 'VEF', currency_name: 'Venezuelan Bolívar', is_obsolete: false}
// 155: {iso: 'VES', currency_name: 'Venezuelan Bolívar', is_obsolete: false}
// 156: {iso: 'VND', currency_name: 'Vietnamese Dong', is_obsolete: false}
// 157: {iso: 'VUV', currency_name: 'Ni-Vanuatu Vatu', is_obsolete: false}
// 158: {iso: 'WST', currency_name: 'Samoan Tala', is_obsolete: false}
// 159: {iso: 'XAF', currency_name: 'Central African CFA Franc BEAC', is_obsolete: false}
// 160: {iso: 'XAG', currency_name: 'Silver Ounce', is_obsolete: false}
// 161: {iso: 'XAU', currency_name: 'Gold Ounce', is_obsolete: false}
// 162: {iso: 'XBT', currency_name: 'Bitcoin', is_obsolete: false}
// 163: {iso: 'XCD', currency_name: 'East Caribbean Dollar', is_obsolete: false}
// 164: {iso: 'XDR', currency_name: 'IMF Special Drawing Rights', is_obsolete: false}
// 165: {iso: 'XOF', currency_name: 'CFA Franc', is_obsolete: false}
// 166: {iso: 'XPD', currency_name: 'Palladium Ounce', is_obsolete: false}
// 167: {iso: 'XPF', currency_name: 'CFP Franc', is_obsolete: false}
// 168: {iso: 'XPT', currency_name: 'Platinum Ounce', is_obsolete: false}
// 169: {iso: 'YER', currency_name: 'Yemeni Rial', is_obsolete: false}
// 170: {iso: 'ZAR', currency_name: 'South African Rand', is_obsolete: false}
// 171: {iso: 'ZMW', currency_name: 'Zambian Kwacha', is_obsolete: false}
// 172: {iso: 'ZWD', currency_name: 'Zimbabwean Dollar', is_obsolete: false}
// 173: {iso: 'ZWL', currency_name: 'Zimbabwean Dollar', is_obsolete: false}
]
export default CurrencyList