/* vim: ts=4:sw=4:expandtab:
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
;(function() {
  "use strict";

  /*
  * This file extends the libphonenumber object with a set of phonenumbery
  * utility functions. libphonenumber must be included before you call these
  * functions, but the order of the files/script-tags doesn't matter.
  */

  window.libphonenumber = window.libphonenumber || {};
  window.libphonenumber.util = {
    getRegionCodeForNumber: function(number) {
      try {
        var parsedNumber = libphonenumber.parse(number);
        return libphonenumber.getRegionCodeForNumber(parsedNumber);
      } catch(e) {
        return "ZZ";
      }
    },

    splitCountryCode: function(number) {
        var parsedNumber = libphonenumber.parse(number);
        return {
            country_code: parsedNumber.values_[1],
            national_number: parsedNumber.values_[2]
        };
    },

    getCountryCode: function(regionCode) {
      var cc = libphonenumber.getCountryCodeForRegion(regionCode);
      return (cc != 0) ? cc : "";
    },

    verifyNumber: function(number, regionCode) {
      var parsedNumber = libphonenumber.parse(number, regionCode);

      if(!regionCode || regionCode == 'ZZ') {
        regionCode = libphonenumber.getRegionCodeForNumber(parsedNumber);
      }

      var isValidNumber = libphonenumber.isValidNumber(parsedNumber);
      var isValidNumberForRegion = libphonenumber.isValidNumberForRegion(parsedNumber, regionCode);

      if (isValidNumber && isValidNumberForRegion) {
        return libphonenumber.format(parsedNumber, libphonenumber.PhoneNumberFormat.E164);
      } else {
        throw new Error("The number seems not to be valid.");
      }
    },

    getAllRegionCodes: function() {
      return {
        "AD":"Andorra",
        "AE":"United Arab Emirates",
        "AF":"Afghanistan",
        "AG":"Antigua and Barbuda",
        "AI":"Anguilla",
        "AL":"Albania",
        "AM":"Armenia",
        "AO":"Angola",
        "AR":"Argentina",
        "AS":"AmericanSamoa",
        "AT":"Austria",
        "AU":"Australia",
        "AW":"Aruba",
        "AX":"Åland Islands",
        "AZ":"Azerbaijan",
        "BA":"Bosnia and Herzegovina",
        "BB":"Barbados",
        "BD":"Bangladesh",
        "BE":"Belgium",
        "BF":"Burkina Faso",
        "BG":"Bulgaria",
        "BH":"Bahrain",
        "BI":"Burundi",
        "BJ":"Benin",
        "BL":"Saint Barthélemy",
        "BM":"Bermuda",
        "BN":"Brunei Darussalam",
        "BO":"Bolivia, Plurinational State of",
        "BR":"Brazil",
        "BS":"Bahamas",
        "BT":"Bhutan",
        "BW":"Botswana",
        "BY":"Belarus",
        "BZ":"Belize",
        "CA":"Canada",
        "CC":"Cocos (Keeling) Islands",
        "CD":"Congo, The Democratic Republic of the",
        "CF":"Central African Republic",
        "CG":"Congo",
        "CH":"Switzerland",
        "CI":"Cote d'Ivoire",
        "CK":"Cook Islands",
        "CL":"Chile",
        "CM":"Cameroon",
        "CN":"China",
        "CO":"Colombia",
        "CR":"Costa Rica",
        "CU":"Cuba",
        "CV":"Cape Verde",
        "CX":"Christmas Island",
        "CY":"Cyprus",
        "CZ":"Czech Republic",
        "DE":"Germany",
        "DJ":"Djibouti",
        "DK":"Denmark",
        "DM":"Dominica",
        "DO":"Dominican Republic",
        "DZ":"Algeria",
        "EC":"Ecuador",
        "EE":"Estonia",
        "EG":"Egypt",
        "ER":"Eritrea",
        "ES":"Spain",
        "ET":"Ethiopia",
        "FI":"Finland",
        "FJ":"Fiji",
        "FK":"Falkland Islands (Malvinas)",
        "FM":"Micronesia, Federated States of",
        "FO":"Faroe Islands",
        "FR":"France",
        "GA":"Gabon",
        "GB":"United Kingdom",
        "GD":"Grenada",
        "GE":"Georgia",
        "GF":"French Guiana",
        "GG":"Guernsey",
        "GH":"Ghana",
        "GI":"Gibraltar",
        "GL":"Greenland",
        "GM":"Gambia",
        "GN":"Guinea",
        "GP":"Guadeloupe",
        "GQ":"Equatorial Guinea",
        "GR":"Ελλάδα",
        "GT":"Guatemala",
        "GU":"Guam",
        "GW":"Guinea-Bissau",
        "GY":"Guyana",
        "HK":"Hong Kong",
        "HN":"Honduras",
        "HR":"Croatia",
        "HT":"Haiti",
        "HU":"Magyarország",
        "ID":"Indonesia",
        "IE":"Ireland",
        "IL":"Israel",
        "IM":"Isle of Man",
        "IN":"India",
        "IO":"British Indian Ocean Territory",
        "IQ":"Iraq",
        "IR":"Iran, Islamic Republic of",
        "IS":"Iceland",
        "IT":"Italy",
        "JE":"Jersey",
        "JM":"Jamaica",
        "JO":"Jordan",
        "JP":"Japan",
        "KE":"Kenya",
        "KG":"Kyrgyzstan",
        "KH":"Cambodia",
        "KI":"Kiribati",
        "KM":"Comoros",
        "KN":"Saint Kitts and Nevis",
        "KP":"Korea, Democratic People's Republic of",
        "KR":"Korea, Republic of",
        "KW":"Kuwait",
        "KY":"Cayman Islands",
        "KZ":"Kazakhstan",
        "LA":"Lao People's Democratic Republic",
        "LB":"Lebanon",
        "LC":"Saint Lucia",
        "LI":"Liechtenstein",
        "LK":"Sri Lanka",
        "LR":"Liberia",
        "LS":"Lesotho",
        "LT":"Lithuania",
        "LU":"Luxembourg",
        "LV":"Latvia",
        "LY":"Libyan Arab Jamahiriya",
        "MA":"Morocco",
        "MC":"Monaco",
        "MD":"Moldova, Republic of",
        "ME":"Црна Гора",
        "MF":"Saint Martin",
        "MG":"Madagascar",
        "MH":"Marshall Islands",
        "MK":"Macedonia, The Former Yugoslav Republic of",
        "ML":"Mali",
        "MM":"Myanmar",
        "MN":"Mongolia",
        "MO":"Macao",
        "MP":"Northern Mariana Islands",
        "MQ":"Martinique",
        "MR":"Mauritania",
        "MS":"Montserrat",
        "MT":"Malta",
        "MU":"Mauritius",
        "MV":"Maldives",
        "MW":"Malawi",
        "MX":"Mexico",
        "MY":"Malaysia",
        "MZ":"Mozambique",
        "NA":"Namibia",
        "NC":"New Caledonia",
        "NE":"Niger",
        "NF":"Norfolk Island",
        "NG":"Nigeria",
        "NI":"Nicaragua",
        "NL":"Netherlands",
        "NO":"Norway",
        "NP":"Nepal",
        "NR":"Nauru",
        "NU":"Niue",
        "NZ":"New Zealand",
        "OM":"Oman",
        "PA":"Panama",
        "PE":"Peru",
        "PF":"French Polynesia",
        "PG":"Papua New Guinea",
        "PH":"Philippines",
        "PK":"Pakistan",
        "PL":"Polska",
        "PM":"Saint Pierre and Miquelon",
        "PR":"Puerto Rico",
        "PS":"Palestinian Territory, Occupied",
        "PT":"Portugal",
        "PW":"Palau",
        "PY":"Paraguay",
        "QA":"Qatar",
        "RE":"Réunion",
        "RO":"Romania",
        "RS":"Србија",
        "RU":"Russia",
        "RW":"Rwanda",
        "SA":"Saudi Arabia",
        "SB":"Solomon Islands",
        "SC":"Seychelles",
        "SD":"Sudan",
        "SE":"Sweden",
        "SG":"Singapore",
        "SH":"Saint Helena, Ascension and Tristan Da Cunha",
        "SI":"Slovenia",
        "SJ":"Svalbard and Jan Mayen",
        "SK":"Slovakia",
        "SL":"Sierra Leone",
        "SM":"San Marino",
        "SN":"Senegal",
        "SO":"Somalia",
        "SR":"Suriname",
        "ST":"Sao Tome and Principe",
        "SV":"El Salvador",
        "SY":"Syrian Arab Republic",
        "SZ":"Swaziland",
        "TC":"Turks and Caicos Islands",
        "TD":"Chad",
        "TG":"Togo",
        "TH":"Thailand",
        "TJ":"Tajikistan",
        "TK":"Tokelau",
        "TL":"Timor-Leste",
        "TM":"Turkmenistan",
        "TN":"Tunisia",
        "TO":"Tonga",
        "TR":"Turkey",
        "TT":"Trinidad and Tobago",
        "TV":"Tuvalu",
        "TW":"Taiwan, Province of China",
        "TZ":"Tanzania, United Republic of",
        "UA":"Ukraine",
        "UG":"Uganda",
        "US":"United States",
        "UY":"Uruguay",
        "UZ":"Uzbekistan",
        "VA":"Holy See (Vatican City State)",
        "VC":"Saint Vincent and the Grenadines",
        "VE":"Venezuela",
        "VG":"Virgin Islands, British",
        "VI":"Virgin Islands, U.S.",
        "VN":"Viet Nam",
        "VU":"Vanuatu",
        "WF":"Wallis and Futuna",
        "WS":"Samoa",
        "YE":"Yemen",
        "YT":"Mayotte",
        "ZA":"South Africa",
        "ZM":"Zambia",
        "ZW":"Zimbabwe"
      };
    } // getAllRegionCodes
  }; // libphonenumber.util
})();
