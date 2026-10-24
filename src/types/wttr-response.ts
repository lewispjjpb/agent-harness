export type WttrType = {
  "current_condition": [
    {
      "FeelsLikeC": string,
      "FeelsLikeF": string,
      "cloudcover": string,
      "humidity": string,
      "observation_time": string,
      "precipInches": string,
      "precipMM": string,
      "pressure": string,
      "pressureInches": string,
      "temp_C": string,
      "temp_F": string,
      "uvIndex": string,
      "visibility": string,
      "visibilityMiles": string,
      "weatherCode": string,
      "weatherDesc": [
        {
          "value": string
        }
      ],
      "weatherIconUrl": [
        {
          "value": string
        }
      ],
      "winddir16Point": string,
      "winddirDegree": string,
      "windspeedKmph": string,
      "windspeedMiles": string
    }
    ],
// ],
//   "nearest_area": [
//   {
//     "areaName": [
//       {
//         "value": string
//       }
//     ],
//     "country": [
//       {
//         "value": string
//       }
//     ],
//     "latitude": string,
//     "longitude": string,
//     "population": string,
//     "region": [
//       {
//         "value": string
//       }
//     ],
//     "weatherUrl": [
//       {
//         "value": string
//       }
//     ]
//   }
// ],
//   "request": [
//   {
//     "query": string,
//     "type": string
//   }
// ],
//   "weather": [
//   {
//     "astronomy": [
//       {
//         "moon_illumination": string,
//         "moon_phase": string,
//         "moonrise": string,
//         "moonset": string,
//         "sunrise": string,
//         "sunset": string,
//       }
//     ],
//     "avgtempC": string,
//     "avgtempF": string,
//     "date": string,
//     "hourly": [
//       {
//         "DewPointC": string,
//         "DewPointF": string,
//         "FeelsLikeC": string,
//         "FeelsLikeF": string,
//         "HeatIndexC": string,
//         "HeatIndexF": string,
//         "WindChillC": string,
//         "WindChillF": string,
//         "WindGustKmph": string,
//         "WindGustMiles": string,
//         "chanceoffog": string,
//         "chanceoffrost": string,
//         "chanceofhightemp": string,
//         "chanceofovercast": string,
//         "chanceofrain": string,
//         "chanceofremdry": string,
//         "chanceofsnow": string,
//         "chanceofsunshine": string,
//         "chanceofthunder": string,
//         "chanceofwindy": string,
//         "cloudcover": string,
//         "diffRad": string,
//         "humidity": string,
//         "precipInches": string,
//         "precipMM": string,
//         "pressure": string,
//         "pressureInches": string,
//         "shortRad": "0.0",
//         "tempC": "8",
//         "tempF": "47",
//         "time": "0",
//         "uvIndex": "0",
//         "visibility": "10",
//         "visibilityMiles": "6",
//         "weatherCode": "113",
//         "weatherDesc": [
//           {
//             "value": "Clear "
//           }
//         ],
//         "weatherIconUrl": [
//           {
//             "value": "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0008_clear_sky_night.png"
//           }
//         ],
//         "winddir16Point": "W",
//         "winddirDegree": "261",
//         "windspeedKmph": "5",
//         "windspeedMiles": "3"
//       },
//       {
//         "DewPointC": "0",
//         "DewPointF": "33",
//         "FeelsLikeC": "6",
//         "FeelsLikeF": "43",
//         "HeatIndexC": "7",
//         "HeatIndexF": "45",
//         "WindChillC": "6",
//         "WindChillF": "43",
//         "WindGustKmph": "8",
//         "WindGustMiles": "5",
//         "chanceoffog": "0",
//         "chanceoffrost": "0",
//         "chanceofhightemp": "1",
//         "chanceofovercast": "1",
//         "chanceofrain": "4",
//         "chanceofremdry": "96",
//         "chanceofsnow": "0",
//         "chanceofsunshine": "0",
//         "chanceofthunder": "0",
//         "chanceofwindy": "1",
//         "cloudcover": "5",
//         "diffRad": "0.0",
//         "humidity": "62",
//         "precipInches": "0.0",
//         "precipMM": "0.0",
//         "pressure": "1032",
//         "pressureInches": "30",
//         "shortRad": "0.0",
//         "tempC": "7",
//         "tempF": "45",
//         "time": "300",
//         "uvIndex": "0",
//         "visibility": "10",
//         "visibilityMiles": "6",
//         "weatherCode": "113",
//         "weatherDesc": [
//           {
//             "value": "Clear "
//           }
//         ],
//         "weatherIconUrl": [
//           {
//             "value": "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0008_clear_sky_night.png"
//           }
//         ],
//         "winddir16Point": "W",
//         "winddirDegree": "269",
//         "windspeedKmph": "7",
//         "windspeedMiles": "4"
//       },
//       {
//         "DewPointC": "-0",
//         "DewPointF": "32",
//         "FeelsLikeC": "5",
//         "FeelsLikeF": "41",
//         "HeatIndexC": "6",
//         "HeatIndexF": "43",
//         "WindChillC": "5",
//         "WindChillF": "41",
//         "WindGustKmph": "10",
//         "WindGustMiles": "6",
//         "chanceoffog": "0",
//         "chanceoffrost": "0",
//         "chanceofhightemp": "1",
//         "chanceofovercast": "1",
//         "chanceofrain": "5",
//         "chanceofremdry": "95",
//         "chanceofsnow": "0",
//         "chanceofsunshine": "0",
//         "chanceofthunder": "0",
//         "chanceofwindy": "1",
//         "cloudcover": "5",
//         "diffRad": "0.0",
//         "humidity": "64",
//         "precipInches": "0.0",
//         "precipMM": "0.0",
//         "pressure": "1032",
//         "pressureInches": "30",
//         "shortRad": "0.0",
//         "tempC": "6",
//         "tempF": "43",
//         "time": "600",
//         "uvIndex": "0",
//         "visibility": "10",
//         "visibilityMiles": "6",
//         "weatherCode": "113",
//         "weatherDesc": [
//           {
//             "value": "Clear "
//           }
//         ],
//         "weatherIconUrl": [
//           {
//             "value": "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0008_clear_sky_night.png"
//           }
//         ],
//         "winddir16Point": "W",
//         "winddirDegree": "263",
//         "windspeedKmph": "7",
//         "windspeedMiles": "4"
//       },
//       {
//         "DewPointC": "-1",
//         "DewPointF": "29",
//         "FeelsLikeC": "8",
//         "FeelsLikeF": "46",
//         "HeatIndexC": "8",
//         "HeatIndexF": "47",
//         "WindChillC": "8",
//         "WindChillF": "46",
//         "WindGustKmph": "7",
//         "WindGustMiles": "4",
//         "chanceoffog": "0",
//         "chanceoffrost": "0",
//         "chanceofhightemp": "1",
//         "chanceofovercast": "2",
//         "chanceofrain": "3",
//         "chanceofremdry": "97",
//         "chanceofsnow": "0",
//         "chanceofsunshine": "93",
//         "chanceofthunder": "0",
//         "chanceofwindy": "0",
//         "cloudcover": "10",
//         "diffRad": "74.6",
//         "humidity": "50",
//         "precipInches": "0.0",
//         "precipMM": "0.0",
//         "pressure": "1033",
//         "pressureInches": "31",
//         "shortRad": "197.7",
//         "tempC": "8",
//         "tempF": "47",
//         "time": "900",
//         "uvIndex": "0",
//         "visibility": "10",
//         "visibilityMiles": "6",
//         "weatherCode": "113",
//         "weatherDesc": [
//           {
//             "value": "Sunny"
//           }
//         ],
//         "weatherIconUrl": [
//           {
//             "value": "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png"
//           }
//         ],
//         "winddir16Point": "WNW",
//         "winddirDegree": "295",
//         "windspeedKmph": "5",
//         "windspeedMiles": "3"
//       },
//       {
//         "DewPointC": "-3",
//         "DewPointF": "26",
//         "FeelsLikeC": "13",
//         "FeelsLikeF": "56",
//         "HeatIndexC": "13",
//         "HeatIndexF": "56",
//         "WindChillC": "13",
//         "WindChillF": "56",
//         "WindGustKmph": "9",
//         "WindGustMiles": "6",
//         "chanceoffog": "0",
//         "chanceoffrost": "0",
//         "chanceofhightemp": "1",
//         "chanceofovercast": "1",
//         "chanceofrain": "1",
//         "chanceofremdry": "99",
//         "chanceofsnow": "0",
//         "chanceofsunshine": "96",
//         "chanceofthunder": "0",
//         "chanceofwindy": "1",
//         "cloudcover": "5",
//         "diffRad": "103.5",
//         "humidity": "32",
//         "precipInches": "0.0",
//         "precipMM": "0.0",
//         "pressure": "1032",
//         "pressureInches": "30",
//         "shortRad": "588.7",
//         "tempC": "13",
//         "tempF": "56",
//         "time": "1200",
//         "uvIndex": "2",
//         "visibility": "10",
//         "visibilityMiles": "6",
//         "weatherCode": "113",
//         "weatherDesc": [
//           {
//             "value": "Sunny"
//           }
//         ],
//         "weatherIconUrl": [
//           {
//             "value": "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png"
//           }
//         ],
//         "winddir16Point": "NW",
//         "winddirDegree": "322",
//         "windspeedKmph": "5",
//         "windspeedMiles": "3"
//       },
//       {
//         "DewPointC": "-4",
//         "DewPointF": "25",
//         "FeelsLikeC": "16",
//         "FeelsLikeF": "60",
//         "HeatIndexC": "15",
//         "HeatIndexF": "59",
//         "WindChillC": "16",
//         "WindChillF": "60",
//         "WindGustKmph": "9",
//         "WindGustMiles": "6",
//         "chanceoffog": "0",
//         "chanceoffrost": "0",
//         "chanceofhightemp": "1",
//         "chanceofovercast": "0",
//         "chanceofrain": "1",
//         "chanceofremdry": "100",
//         "chanceofsnow": "0",
//         "chanceofsunshine": "97",
//         "chanceofthunder": "0",
//         "chanceofwindy": "0",
//         "cloudcover": "3",
//         "diffRad": "95.1",
//         "humidity": "27",
//         "precipInches": "0.0",
//         "precipMM": "0.0",
//         "pressure": "1031",
//         "pressureInches": "30",
//         "shortRad": "495.2",
//         "tempC": "15",
//         "tempF": "59",
//         "time": "1500",
//         "uvIndex": "1",
//         "visibility": "10",
//         "visibilityMiles": "6",
//         "weatherCode": "113",
//         "weatherDesc": [
//           {
//             "value": "Sunny"
//           }
//         ],
//         "weatherIconUrl": [
//           {
//             "value": "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png"
//           }
//         ],
//         "winddir16Point": "N",
//         "winddirDegree": "5",
//         "windspeedKmph": "4",
//         "windspeedMiles": "3"
//       },
//       {
//         "DewPointC": "-0",
//         "DewPointF": "32",
//         "FeelsLikeC": "11",
//         "FeelsLikeF": "52",
//         "HeatIndexC": "12",
//         "HeatIndexF": "53",
//         "WindChillC": "11",
//         "WindChillF": "52",
//         "WindGustKmph": "9",
//         "WindGustMiles": "5",
//         "chanceoffog": "0",
//         "chanceoffrost": "0",
//         "chanceofhightemp": "1",
//         "chanceofovercast": "0",
//         "chanceofrain": "1",
//         "chanceofremdry": "99",
//         "chanceofsnow": "0",
//         "chanceofsunshine": "0",
//         "chanceofthunder": "0",
//         "chanceofwindy": "1",
//         "cloudcover": "0",
//         "diffRad": "28.8",
//         "humidity": "44",
//         "precipInches": "0.0",
//         "precipMM": "0.0",
//         "pressure": "1032",
//         "pressureInches": "30",
//         "shortRad": "28.8",
//         "tempC": "12",
//         "tempF": "53",
//         "time": "1800",
//         "uvIndex": "0",
//         "visibility": "10",
//         "visibilityMiles": "6",
//         "weatherCode": "113",
//         "weatherDesc": [
//           {
//             "value": "Clear "
//           }
//         ],
//         "weatherIconUrl": [
//           {
//             "value": "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0008_clear_sky_night.png"
//           }
//         ],
//         "winddir16Point": "ESE",
//         "winddirDegree": "115",
//         "windspeedKmph": "8",
//         "windspeedMiles": "5"
//       },
//       {
//         "DewPointC": "1",
//         "DewPointF": "34",
//         "FeelsLikeC": "9",
//         "FeelsLikeF": "48",
//         "HeatIndexC": "10",
//         "HeatIndexF": "49",
//         "WindChillC": "9",
//         "WindChillF": "48",
//         "WindGustKmph": "12",
//         "WindGustMiles": "7",
//         "chanceoffog": "0",
//         "chanceoffrost": "0",
//         "chanceofhightemp": "1",
//         "chanceofovercast": "0",
//         "chanceofrain": "3",
//         "chanceofremdry": "97",
//         "chanceofsnow": "0",
//         "chanceofsunshine": "0",
//         "chanceofthunder": "0",
//         "chanceofwindy": "1",
//         "cloudcover": "0",
//         "diffRad": "0.0",
//         "humidity": "54",
//         "precipInches": "0.0",
//         "precipMM": "0.0",
//         "pressure": "1033",
//         "pressureInches": "31",
//         "shortRad": "0.0",
//         "tempC": "10",
//         "tempF": "49",
//         "time": "2100",
//         "uvIndex": "0",
//         "visibility": "10",
//         "visibilityMiles": "6",
//         "weatherCode": "113",
//         "weatherDesc": [
//           {
//             "value": "Clear "
//           }
//         ],
//         "weatherIconUrl": [
//           {
//             "value": "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0008_clear_sky_night.png"
//           }
//         ],
//         "winddir16Point": "S",
//         "winddirDegree": "181",
//         "windspeedKmph": "8",
//         "windspeedMiles": "5"
//       }
//     ],
//     "maxtempC": "15",
//     "maxtempF": "59",
//     "mintempC": "4",
//     "mintempF": "38",
//     "sunHour": "10.0",
//     "totalSnow_cm": "0.0",
//     "uvIndex": "2"
//   },
//   {
//     "astronomy": [
//       {
//         "moon_illumination": "98",
//         "moon_phase": "Waxing Gibbous",
//         "moonrise": "05:11 PM",
//         "moonset": "06:30 AM",
//         "sunrise": "07:09 AM",
//         "sunset": "05:47 PM"
//       }
//     ],
//     "avgtempC": "11",
//     "avgtempF": "52",
//     "date": "2026-10-25",
//     "hourly": [
//       {
//         "DewPointC": "1",
//         "DewPointF": "34",
//         "FeelsLikeC": "8",
//         "FeelsLikeF": "47",
//         "HeatIndexC": "9",
//         "HeatIndexF": "48",
//         "WindChillC": "8",
//         "WindChillF": "47",
//         "WindGustKmph": "7",
//         "WindGustMiles": "4",
//         "chanceoffog": "0",
//         "chanceoffrost": "0",
//         "chanceofhightemp": "1",
//         "chanceofovercast": "0",
//         "chanceofrain": "3",
//         "chanceofremdry": "97",
//         "chanceofsnow": "0",
//         "chanceofsunshine": "0",
//         "chanceofthunder": "0",
//         "chanceofwindy": "1",
//         "cloudcover": "0",
//         "diffRad": "0.0",
//         "humidity": "57",
//         "precipInches": "0.0",
//         "precipMM": "0.0",
//         "pressure": "1033",
//         "pressureInches": "31",
//         "shortRad": "0.0",
//         "tempC": "9",
//         "tempF": "48",
//         "time": "0",
//         "uvIndex": "0",
//         "visibility": "10",
//         "visibilityMiles": "6",
//         "weatherCode": "113",
//         "weatherDesc": [
//           {
//             "value": "Clear "
//           }
//         ],
//         "weatherIconUrl": [
//           {
//             "value": "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0008_clear_sky_night.png"
//           }
//         ],
//         "winddir16Point": "WSW",
//         "winddirDegree": "238",
//         "windspeedKmph": "6",
//         "windspeedMiles": "4"
//       },
//       {
//         "DewPointC": "0",
//         "DewPointF": "32",
//         "FeelsLikeC": "8",
//         "FeelsLikeF": "46",
//         "HeatIndexC": "8",
//         "HeatIndexF": "47",
//         "WindChillC": "8",
//         "WindChillF": "46",
//         "WindGustKmph": "5",
//         "WindGustMiles": "3",
//         "chanceoffog": "0",
//         "chanceoffrost": "0",
//         "chanceofhightemp": "1",
//         "chanceofovercast": "0",
//         "chanceofrain": "3",
//         "chanceofremdry": "97",
//         "chanceofsnow": "0",
//         "chanceofsunshine": "0",
//         "chanceofthunder": "0",
//         "chanceofwindy": "0",
//         "cloudcover": "0",
//         "diffRad": "0.0",
//         "humidity": "56",
//         "precipInches": "0.0",
//         "precipMM": "0.0",
//         "pressure": "1033",
//         "pressureInches": "31",
//         "shortRad": "0.0",
//         "tempC": "8",
//         "tempF": "47",
//         "time": "300",
//         "uvIndex": "0",
//         "visibility": "10",
//         "visibilityMiles": "6",
//         "weatherCode": "113",
//         "weatherDesc": [
//           {
//             "value": "Clear "
//           }
//         ],
//         "weatherIconUrl": [
//           {
//             "value": "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0008_clear_sky_night.png"
//           }
//         ],
//         "winddir16Point": "W",
//         "winddirDegree": "271",
//         "windspeedKmph": "5",
//         "windspeedMiles": "3"
//       },
//       {
//         "DewPointC": "-1",
//         "DewPointF": "31",
//         "FeelsLikeC": "7",
//         "FeelsLikeF": "45",
//         "HeatIndexC": "8",
//         "HeatIndexF": "46",
//         "WindChillC": "7",
//         "WindChillF": "45",
//         "WindGustKmph": "6",
//         "WindGustMiles": "4",
//         "chanceoffog": "0",
//         "chanceoffrost": "0",
//         "chanceofhightemp": "1",
//         "chanceofovercast": "0",
//         "chanceofrain": "3",
//         "chanceofremdry": "97",
//         "chanceofsnow": "0",
//         "chanceofsunshine": "0",
//         "chanceofthunder": "0",
//         "chanceofwindy": "0",
//         "cloudcover": "0",
//         "diffRad": "0.0",
//         "humidity": "56",
//         "precipInches": "0.0",
//         "precipMM": "0.0",
//         "pressure": "1034",
//         "pressureInches": "31",
//         "shortRad": "0.0",
//         "tempC": "8",
//         "tempF": "46",
//         "time": "600",
//         "uvIndex": "0",
//         "visibility": "10",
//         "visibilityMiles": "6",
//         "weatherCode": "113",
//         "weatherDesc": [
//           {
//             "value": "Clear "
//           }
//         ],
//         "weatherIconUrl": [
//           {
//             "value": "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0008_clear_sky_night.png"
//           }
//         ],
//         "winddir16Point": "W",
//         "winddirDegree": "275",
//         "windspeedKmph": "5",
//         "windspeedMiles": "3"
//       },
//       {
//         "DewPointC": "-1",
//         "DewPointF": "31",
//         "FeelsLikeC": "10",
//         "FeelsLikeF": "50",
//         "HeatIndexC": "10",
//         "HeatIndexF": "50",
//         "WindChillC": "10",
//         "WindChillF": "50",
//         "WindGustKmph": "6",
//         "WindGustMiles": "4",
//         "chanceoffog": "0",
//         "chanceoffrost": "0",
//         "chanceofhightemp": "1",
//         "chanceofovercast": "0",
//         "chanceofrain": "2",
//         "chanceofremdry": "98",
//         "chanceofsnow": "0",
//         "chanceofsunshine": "98",
//         "chanceofthunder": "0",
//         "chanceofwindy": "0",
//         "cloudcover": "0",
//         "diffRad": "75.2",
//         "humidity": "47",
//         "precipInches": "0.0",
//         "precipMM": "0.0",
//         "pressure": "1035",
//         "pressureInches": "31",
//         "shortRad": "192.2",
//         "tempC": "10",
//         "tempF": "50",
//         "time": "900",
//         "uvIndex": "0",
//         "visibility": "10",
//         "visibilityMiles": "6",
//         "weatherCode": "113",
//         "weatherDesc": [
//           {
//             "value": "Sunny"
//           }
//         ],
//         "weatherIconUrl": [
//           {
//             "value": "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png"
//           }
//         ],
//         "winddir16Point": "WSW",
//         "winddirDegree": "255",
//         "windspeedKmph": "4",
//         "windspeedMiles": "2"
//       },
//       {
//         "DewPointC": "1",
//         "DewPointF": "34",
//         "FeelsLikeC": "16",
//         "FeelsLikeF": "60",
//         "HeatIndexC": "16",
//         "HeatIndexF": "60",
//         "WindChillC": "16",
//         "WindChillF": "60",
//         "WindGustKmph": "9",
//         "WindGustMiles": "6",
//         "chanceoffog": "0",
//         "chanceoffrost": "0",
//         "chanceofhightemp": "2",
//         "chanceofovercast": "0",
//         "chanceofrain": "1",
//         "chanceofremdry": "99",
//         "chanceofsnow": "0",
//         "chanceofsunshine": "98",
//         "chanceofthunder": "0",
//         "chanceofwindy": "1",
//         "cloudcover": "0",
//         "diffRad": "105.0",
//         "humidity": "37",
//         "precipInches": "0.0",
//         "precipMM": "0.0",
//         "pressure": "1034",
//         "pressureInches": "31",
//         "shortRad": "578.0",
//         "tempC": "16",
//         "tempF": "60",
//         "time": "1200",
//         "uvIndex": "3",
//         "visibility": "10",
//         "visibilityMiles": "6",
//         "weatherCode": "113",
//         "weatherDesc": [
//           {
//             "value": "Sunny"
//           }
//         ],
//         "weatherIconUrl": [
//           {
//             "value": "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png"
//           }
//         ],
//         "winddir16Point": "SSW",
//         "winddirDegree": "206",
//         "windspeedKmph": "5",
//         "windspeedMiles": "3"
//       },
//       {
//         "DewPointC": "1",
//         "DewPointF": "33",
//         "FeelsLikeC": "17",
//         "FeelsLikeF": "63",
//         "HeatIndexC": "17",
//         "HeatIndexF": "63",
//         "WindChillC": "17",
//         "WindChillF": "63",
//         "WindGustKmph": "10",
//         "WindGustMiles": "7",
//         "chanceoffog": "0",
//         "chanceoffrost": "0",
//         "chanceofhightemp": "4",
//         "chanceofovercast": "0",
//         "chanceofrain": "1",
//         "chanceofremdry": "99",
//         "chanceofsnow": "0",
//         "chanceofsunshine": "98",
//         "chanceofthunder": "0",
//         "chanceofwindy": "1",
//         "cloudcover": "0",
//         "diffRad": "97.2",
//         "humidity": "32",
//         "precipInches": "0.0",
//         "precipMM": "0.0",
//         "pressure": "1031",
//         "pressureInches": "30",
//         "shortRad": "485.4",
//         "tempC": "17",
//         "tempF": "63",
//         "time": "1500",
//         "uvIndex": "2",
//         "visibility": "10",
//         "visibilityMiles": "6",
//         "weatherCode": "113",
//         "weatherDesc": [
//           {
//             "value": "Sunny"
//           }
//         ],
//         "weatherIconUrl": [
//           {
//             "value": "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png"
//           }
//         ],
//         "winddir16Point": "SW",
//         "winddirDegree": "218",
//         "windspeedKmph": "6",
//         "windspeedMiles": "4"
//       },
//       {
//         "DewPointC": "2",
//         "DewPointF": "36",
//         "FeelsLikeC": "13",
//         "FeelsLikeF": "56",
//         "HeatIndexC": "14",
//         "HeatIndexF": "57",
//         "WindChillC": "13",
//         "WindChillF": "56",
//         "WindGustKmph": "20",
//         "WindGustMiles": "12",
//         "chanceoffog": "0",
//         "chanceoffrost": "0",
//         "chanceofhightemp": "1",
//         "chanceofovercast": "0",
//         "chanceofrain": "1",
//         "chanceofremdry": "99",
//         "chanceofsnow": "0",
//         "chanceofsunshine": "0",
//         "chanceofthunder": "0",
//         "chanceofwindy": "1",
//         "cloudcover": "0",
//         "diffRad": "26.4",
//         "humidity": "44",
//         "precipInches": "0.0",
//         "precipMM": "0.0",
//         "pressure": "1030",
//         "pressureInches": "30",
//         "shortRad": "26.4",
//         "tempC": "14",
//         "tempF": "57",
//         "time": "1800",
//         "uvIndex": "0",
//         "visibility": "10",
//         "visibilityMiles": "6",
//         "weatherCode": "113",
//         "weatherDesc": [
//           {
//             "value": "Clear "
//           }
//         ],
//         "weatherIconUrl": [
//           {
//             "value": "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0008_clear_sky_night.png"
//           }
//         ],
//         "winddir16Point": "SSW",
//         "winddirDegree": "195",
//         "windspeedKmph": "9",
//         "windspeedMiles": "6"
//       },
//       {
//         "DewPointC": "4",
//         "DewPointF": "40",
//         "FeelsLikeC": "9",
//         "FeelsLikeF": "49",
//         "HeatIndexC": "11",
//         "HeatIndexF": "51",
//         "WindChillC": "9",
//         "WindChillF": "49",
//         "WindGustKmph": "23",
//         "WindGustMiles": "15",
//         "chanceoffog": "0",
//         "chanceoffrost": "0",
//         "chanceofhightemp": "1",
//         "chanceofovercast": "0",
//         "chanceofrain": "5",
//         "chanceofremdry": "96",
//         "chanceofsnow": "0",
//         "chanceofsunshine": "0",
//         "chanceofthunder": "0",
//         "chanceofwindy": "1",
//         "cloudcover": "0",
//         "diffRad": "0.0",
//         "humidity": "65",
//         "precipInches": "0.0",
//         "precipMM": "0.0",
//         "pressure": "1030",
//         "pressureInches": "30",
//         "shortRad": "0.0",
//         "tempC": "11",
//         "tempF": "51",
//         "time": "2100",
//         "uvIndex": "0",
//         "visibility": "10",
//         "visibilityMiles": "6",
//         "weatherCode": "113",
//         "weatherDesc": [
//           {
//             "value": "Clear "
//           }
//         ],
//         "weatherIconUrl": [
//           {
//             "value": "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0008_clear_sky_night.png"
//           }
//         ],
//         "winddir16Point": "SSW",
//         "winddirDegree": "205",
//         "windspeedKmph": "11",
//         "windspeedMiles": "7"
//       }
//     ],
//     "maxtempC": "17",
//     "maxtempF": "63",
//     "mintempC": "5",
//     "mintempF": "41",
//     "sunHour": "10.0",
//     "totalSnow_cm": "0.0",
//     "uvIndex": "3"
//   },
//   {
//     "astronomy": [
//       {
//         "moon_illumination": "100",
//         "moon_phase": "Full Moon",
//         "moonrise": "05:42 PM",
//         "moonset": "07:48 AM",
//         "sunrise": "07:10 AM",
//         "sunset": "05:46 PM"
//       }
//     ],
//     "avgtempC": "13",
//     "avgtempF": "55",
//     "date": "2026-10-26",
//     "hourly": [
//       {
//         "DewPointC": "3",
//         "DewPointF": "38",
//         "FeelsLikeC": "8",
//         "FeelsLikeF": "47",
//         "HeatIndexC": "10",
//         "HeatIndexF": "50",
//         "WindChillC": "8",
//         "WindChillF": "47",
//         "WindGustKmph": "30",
//         "WindGustMiles": "19",
//         "chanceoffog": "0",
//         "chanceoffrost": "0",
//         "chanceofhightemp": "1",
//         "chanceofovercast": "0",
//         "chanceofrain": "4",
//         "chanceofremdry": "96",
//         "chanceofsnow": "0",
//         "chanceofsunshine": "0",
//         "chanceofthunder": "0",
//         "chanceofwindy": "1",
//         "cloudcover": "0",
//         "diffRad": "0.0",
//         "humidity": "64",
//         "precipInches": "0.0",
//         "precipMM": "0.0",
//         "pressure": "1028",
//         "pressureInches": "30",
//         "shortRad": "0.0",
//         "tempC": "10",
//         "tempF": "50",
//         "time": "0",
//         "uvIndex": "0",
//         "visibility": "10",
//         "visibilityMiles": "6",
//         "weatherCode": "113",
//         "weatherDesc": [
//           {
//             "value": "Clear "
//           }
//         ],
//         "weatherIconUrl": [
//           {
//             "value": "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0008_clear_sky_night.png"
//           }
//         ],
//         "winddir16Point": "SW",
//         "winddirDegree": "228",
//         "windspeedKmph": "11",
//         "windspeedMiles": "7"
//       },
//       {
//         "DewPointC": "1",
//         "DewPointF": "34",
//         "FeelsLikeC": "7",
//         "FeelsLikeF": "44",
//         "HeatIndexC": "9",
//         "HeatIndexF": "47",
//         "WindChillC": "7",
//         "WindChillF": "44",
//         "WindGustKmph": "26",
//         "WindGustMiles": "16",
//         "chanceoffog": "0",
//         "chanceoffrost": "0",
//         "chanceofhightemp": "1",
//         "chanceofovercast": "0",
//         "chanceofrain": "3",
//         "chanceofremdry": "97",
//         "chanceofsnow": "0",
//         "chanceofsunshine": "0",
//         "chanceofthunder": "0",
//         "chanceofwindy": "1",
//         "cloudcover": "0",
//         "diffRad": "0.0",
//         "humidity": "59",
//         "precipInches": "0.0",
//         "precipMM": "0.0",
//         "pressure": "1026",
//         "pressureInches": "30",
//         "shortRad": "0.0",
//         "tempC": "9",
//         "tempF": "47",
//         "time": "300",
//         "uvIndex": "0",
//         "visibility": "10",
//         "visibilityMiles": "6",
//         "weatherCode": "113",
//         "weatherDesc": [
//           {
//             "value": "Clear "
//           }
//         ],
//         "weatherIconUrl": [
//           {
//             "value": "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0008_clear_sky_night.png"
//           }
//         ],
//         "winddir16Point": "SW",
//         "winddirDegree": "236",
//         "windspeedKmph": "11",
//         "windspeedMiles": "7"
//       },
//       {
//         "DewPointC": "0",
//         "DewPointF": "33",
//         "FeelsLikeC": "6",
//         "FeelsLikeF": "43",
//         "HeatIndexC": "8",
//         "HeatIndexF": "46",
//         "WindChillC": "6",
//         "WindChillF": "43",
//         "WindGustKmph": "30",
//         "WindGustMiles": "19",
//         "chanceoffog": "0",
//         "chanceoffrost": "0",
//         "chanceofhightemp": "1",
//         "chanceofovercast": "1",
//         "chanceofrain": "4",
//         "chanceofremdry": "96",
//         "chanceofsnow": "0",
//         "chanceofsunshine": "0",
//         "chanceofthunder": "0",
//         "chanceofwindy": "1",
//         "cloudcover": "5",
//         "diffRad": "0.0",
//         "humidity": "59",
//         "precipInches": "0.0",
//         "precipMM": "0.0",
//         "pressure": "1025",
//         "pressureInches": "30",
//         "shortRad": "0.0",
//         "tempC": "8",
//         "tempF": "46",
//         "time": "600",
//         "uvIndex": "0",
//         "visibility": "10",
//         "visibilityMiles": "6",
//         "weatherCode": "113",
//         "weatherDesc": [
//           {
//             "value": "Clear "
//           }
//         ],
//         "weatherIconUrl": [
//           {
//             "value": "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0008_clear_sky_night.png"
//           }
//         ],
//         "winddir16Point": "WSW",
//         "winddirDegree": "247",
//         "windspeedKmph": "12",
//         "windspeedMiles": "7"
//       },
//       {
//         "DewPointC": "0",
//         "DewPointF": "32",
//         "FeelsLikeC": "9",
//         "FeelsLikeF": "48",
//         "HeatIndexC": "10",
//         "HeatIndexF": "51",
//         "WindChillC": "9",
//         "WindChillF": "48",
//         "WindGustKmph": "21",
//         "WindGustMiles": "13",
//         "chanceoffog": "0",
//         "chanceoffrost": "0",
//         "chanceofhightemp": "1",
//         "chanceofovercast": "1",
//         "chanceofrain": "2",
//         "chanceofremdry": "98",
//         "chanceofsnow": "0",
//         "chanceofsunshine": "96",
//         "chanceofthunder": "0",
//         "chanceofwindy": "1",
//         "cloudcover": "5",
//         "diffRad": "68.4",
//         "humidity": "48",
//         "precipInches": "0.0",
//         "precipMM": "0.0",
//         "pressure": "1024",
//         "pressureInches": "30",
//         "shortRad": "194.6",
//         "tempC": "10",
//         "tempF": "51",
//         "time": "900",
//         "uvIndex": "1",
//         "visibility": "10",
//         "visibilityMiles": "6",
//         "weatherCode": "113",
//         "weatherDesc": [
//           {
//             "value": "Sunny"
//           }
//         ],
//         "weatherIconUrl": [
//           {
//             "value": "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png"
//           }
//         ],
//         "winddir16Point": "WSW",
//         "winddirDegree": "249",
//         "windspeedKmph": "11",
//         "windspeedMiles": "7"
//       },
//       {
//         "DewPointC": "1",
//         "DewPointF": "33",
//         "FeelsLikeC": "17",
//         "FeelsLikeF": "63",
//         "HeatIndexC": "17",
//         "HeatIndexF": "63",
//         "WindChillC": "17",
//         "WindChillF": "63",
//         "WindGustKmph": "18",
//         "WindGustMiles": "11",
//         "chanceoffog": "0",
//         "chanceoffrost": "0",
//         "chanceofhightemp": "3",
//         "chanceofovercast": "0",
//         "chanceofrain": "1",
//         "chanceofremdry": "99",
//         "chanceofsnow": "0",
//         "chanceofsunshine": "98",
//         "chanceofthunder": "0",
//         "chanceofwindy": "1",
//         "cloudcover": "0",
//         "diffRad": "101.9",
//         "humidity": "33",
//         "precipInches": "0.0",
//         "precipMM": "0.0",
//         "pressure": "1022",
//         "pressureInches": "30",
//         "shortRad": "579.3",
//         "tempC": "17",
//         "tempF": "63",
//         "time": "1200",
//         "uvIndex": "3",
//         "visibility": "10",
//         "visibilityMiles": "6",
//         "weatherCode": "113",
//         "weatherDesc": [
//           {
//             "value": "Sunny"
//           }
//         ],
//         "weatherIconUrl": [
//           {
//             "value": "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png"
//           }
//         ],
//         "winddir16Point": "W",
//         "winddirDegree": "272",
//         "windspeedKmph": "10",
//         "windspeedMiles": "6"
//       },
//       {
//         "DewPointC": "3",
//         "DewPointF": "37",
//         "FeelsLikeC": "20",
//         "FeelsLikeF": "67",
//         "HeatIndexC": "20",
//         "HeatIndexF": "67",
//         "WindChillC": "20",
//         "WindChillF": "67",
//         "WindGustKmph": "19",
//         "WindGustMiles": "12",
//         "chanceoffog": "0",
//         "chanceoffrost": "0",
//         "chanceofhightemp": "6",
//         "chanceofovercast": "1",
//         "chanceofrain": "1",
//         "chanceofremdry": "99",
//         "chanceofsnow": "0",
//         "chanceofsunshine": "96",
//         "chanceofthunder": "0",
//         "chanceofwindy": "1",
//         "cloudcover": "5",
//         "diffRad": "105.8",
//         "humidity": "32",
//         "precipInches": "0.0",
//         "precipMM": "0.0",
//         "pressure": "1019",
//         "pressureInches": "30",
//         "shortRad": "467.0",
//         "tempC": "20",
//         "tempF": "67",
//         "time": "1500",
//         "uvIndex": "2",
//         "visibility": "10",
//         "visibilityMiles": "6",
//         "weatherCode": "113",
//         "weatherDesc": [
//           {
//             "value": "Sunny"
//           }
//         ],
//         "weatherIconUrl": [
//           {
//             "value": "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png"
//           }
//         ],
//         "winddir16Point": "W",
//         "winddirDegree": "278",
//         "windspeedKmph": "11",
//         "windspeedMiles": "7"
//       },
//       {
//         "DewPointC": "5",
//         "DewPointF": "41",
//         "FeelsLikeC": "16",
//         "FeelsLikeF": "61",
//         "HeatIndexC": "16",
//         "HeatIndexF": "61",
//         "WindChillC": "16",
//         "WindChillF": "61",
//         "WindGustKmph": "11",
//         "WindGustMiles": "7",
//         "chanceoffog": "0",
//         "chanceoffrost": "0",
//         "chanceofhightemp": "3",
//         "chanceofovercast": "0",
//         "chanceofrain": "2",
//         "chanceofremdry": "98",
//         "chanceofsnow": "0",
//         "chanceofsunshine": "0",
//         "chanceofthunder": "0",
//         "chanceofwindy": "1",
//         "cloudcover": "0",
//         "diffRad": "22.9",
//         "humidity": "49",
//         "precipInches": "0.0",
//         "precipMM": "0.0",
//         "pressure": "1019",
//         "pressureInches": "30",
//         "shortRad": "22.9",
//         "tempC": "16",
//         "tempF": "61",
//         "time": "1800",
//         "uvIndex": "0",
//         "visibility": "10",
//         "visibilityMiles": "6",
//         "weatherCode": "113",
//         "weatherDesc": [
//           {
//             "value": "Clear "
//           }
//         ],
//         "weatherIconUrl": [
//           {
//             "value": "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0008_clear_sky_night.png"
//           }
//         ],
//         "winddir16Point": "W",
//         "winddirDegree": "273",
//         "windspeedKmph": "8",
//         "windspeedMiles": "5"
//       },
//       {
//         "DewPointC": "7",
//         "DewPointF": "44",
//         "FeelsLikeC": "14",
//         "FeelsLikeF": "57",
//         "HeatIndexC": "15",
//         "HeatIndexF": "58",
//         "WindChillC": "14",
//         "WindChillF": "57",
//         "WindGustKmph": "34",
//         "WindGustMiles": "21",
//         "chanceoffog": "0",
//         "chanceoffrost": "0",
//         "chanceofhightemp": "1",
//         "chanceofovercast": "1",
//         "chanceofrain": "4",
//         "chanceofremdry": "96",
//         "chanceofsnow": "0",
//         "chanceofsunshine": "0",
//         "chanceofthunder": "0",
//         "chanceofwindy": "1",
//         "cloudcover": "5",
//         "diffRad": "0.0",
//         "humidity": "60",
//         "precipInches": "0.0",
//         "precipMM": "0.0",
//         "pressure": "1020",
//         "pressureInches": "30",
//         "shortRad": "0.0",
//         "tempC": "15",
//         "tempF": "58",
//         "time": "2100",
//         "uvIndex": "0",
//         "visibility": "10",
//         "visibilityMiles": "6",
//         "weatherCode": "113",
//         "weatherDesc": [
//           {
//             "value": "Clear "
//           }
//         ],
//         "weatherIconUrl": [
//           {
//             "value": "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0008_clear_sky_night.png"
//           }
//         ],
//         "winddir16Point": "NW",
//         "winddirDegree": "305",
//         "windspeedKmph": "11",
//         "windspeedMiles": "7"
//       }
//     ],
//     "maxtempC": "20",
//     "maxtempF": "67",
//     "mintempC": "7",
//     "mintempF": "44",
//     "sunHour": "10.0",
//     "totalSnow_cm": "0.0",
//     "uvIndex": "3"
//   }
// ]
}