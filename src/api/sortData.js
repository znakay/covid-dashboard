export default function SortData(data) {
    const POPULATION = 100000;
    const GLOBAL_POPULATION = data[1].reduce((prev, cur) => prev + (isNaN(cur.population) ? 0 : cur.population), 0);
//total data
    const TOTAL_CONFIRMED = {
        'name': "Total Confirmed",
        'data': {
            'value': data[0]["TotalConfirmed"]
        }
    };

    const TOTAL_DEATH = {
        'name': "Total Deaths",
        'data': {
            'value': data[0]["TotalDeaths"]
        }
    };

    const TOTAL_RECOVERED = {
        'name': "Total Recovered",
        'data': {
            'value': data[0]["TotalRecovered"]
        }
    };

    const NEW_CONFIRMED = {
        'name': "New Confirmed",
        'data': {
            'value': data[0]["NewConfirmed"]
        
        }
    };

    const NEW_DEATH = {
        'name': "New Deaths",
        'data': {
            'value': data[0]["NewDeaths"]
        }
    };

    const NEW_RECOVERED = {
        'name': "New Recovered",
        'data': {
            'value': data[0]["NewRecovered"]
        }
    };

    const POPULATION_TOTAL_CONFIRMED = {
        'name': "POPULATION_TOTAL_CONFIRMED",
        'data': {
            'value':  Math.floor(+TOTAL_CONFIRMED.data.value * +POPULATION / GLOBAL_POPULATION)
        }
    };

    const POPULATION_TOTAL_DEATH = {
        'name': "POPULATION_TOTAL_DEATH",
        'data': {
            'value': Math.floor(+TOTAL_DEATH.data.value * +POPULATION / GLOBAL_POPULATION)
        }
    };

    const POPULATION_TOTAL_RECOVERED = {
        'name': "POPULATION_TOTAL_RECOVERED",
        'data': {
            'value':  Math.floor(+TOTAL_RECOVERED.data.value * +POPULATION / GLOBAL_POPULATION)
        }
    };

    const POPULATION_NEW_CONFIRMED = {
        'name': "POPULATION_NEW_CONFIRMED",
        'data': {
            'value': Math.floor(+NEW_CONFIRMED.data.value * +POPULATION / GLOBAL_POPULATION)
        
        }
    };

    const POPULATION_NEW_DEATH = {
        'name': "POPULATION_NEW_DEATH",
        'data': {
            'value': Math.floor(+NEW_DEATH.data.value * +POPULATION / GLOBAL_POPULATION)
        }
    };

    const POPULATION_NEW_RECOVERED = {
        'name': "POPULATION_NEW_RECOVERED",
        'data': {
            'value':  Math.floor(+NEW_RECOVERED.data.value * +POPULATION / GLOBAL_POPULATION)
        }
    };

// data countries
    const TOTAL_CONFIRMED_COUNTRIES = {
        'name': "TOTAL_CONFIRMED_COUNTRIES",
        'data': data[1].map((country) => {
            return {
                "name": country["Country"],
                "latlng": country.latlng,
                "value": country["TotalConfirmed"]
            }
        })
    };

    const TOTAL_DEATH_COUNTRIES = {
        'name': "TOTAL_DEATH_COUNTRIES",
        'data': data[1].map((country) => {
            return {
                "name": country["Country"],
                "latlng": country.latlng,
                "value": country["TotalDeaths"]
            }
        })
    };

    const TOTAL_RECOVERED_COUNTRIES = {
        'name': "TOTAL_RECOVERED_COUNTRIES",
        'data': data[1].map((country) => {
            return {
                "name": country["Country"],
                "latlng": country.latlng,
                "value": country["TotalRecovered"]
            }
        })
    };

    const NEW_CONFIRMED_COUNTRIES = {
        'name': "NEW_CONFIRMED_COUNTRIES",
        'data': data[1].map((country) => {
            return {
                "name": country["Country"],
                "latlng": country.latlng,
                "value": country["NewConfirmed"]
            }
        })
    };

    const NEW_DEATH_COUNTRIES = {
        'name': "NEW_DEATH_COUNTRIES",
        'data': data[1].map((country) => {
            return {
                "name": country["Country"],
                "latlng": country.latlng,
                "value": country["NewDeaths"]
            }
        })
    };

    const NEW_RECOVERED_COUNTRIES = {
        'name': "NEW_RECOVERED_COUNTRIES",
        'data': data[1].map((country) => {
            return {
                "name": country["Country"],
                "latlng": country.latlng,
                "value": country["NewRecovered"]
            }
        })
    };

    const TOTAL_POPULATION_COUNFIRM = {
        'name': "TOTAL_POPULATION_COUNFIRM",
        'data': data[1].map((country) => {
            return {
                "name": country["Country"],
                "latlng": country.latlng,
                "value": Math.floor(+country["TotalConfirmed"] * +POPULATION / +country.population)
            }
        })
    };

    const TOTAL_POPULATION_DEATH = {
        'name': "TOTAL_POPULATION_DEATH",
        'data': data[1].map((country) => {
            return {
                "name": country["Country"],
                "latlng": country.latlng,
                "value": Math.floor(+country["TotalDeaths"] * +POPULATION / +country.population)
            }
        })
    };

    const TOTAL_POPULATION_RECOVERED = {
        'name': "TOTAL_POPULATION_RECOVERED",
        'data': data[1].map((country) => {
            return {
                "name": country["Country"],
                "latlng": country.latlng,
                "value": Math.floor(+country["TotalRecovered"] * +POPULATION / +country.population)
            }
        })
    };

    const NEW_POPULATION_CONFIRMED = {
        'name': "NEW_POPULATION_CONFIRMED",
        'data': data[1].map((country) => {
            return {
                "name": country["Country"],
                "latlng": country.latlng,
                "value": Math.floor(+country["NewConfirmed"] * +POPULATION / +country.population)
            }
        })
    };

    const NEW_POPULATION_DEATH = {
        'name': "NEW_POPULATION_DEATH",
        'data': data[1].map((country) => {
            return {
                "name": country["Country"],
                "latlng": country.latlng,
                "value": Math.floor(+country["NewDeaths"] * +POPULATION / +country.population)
            }
        })
    };

    const NEW_POPULATION_RECOVERED = {
        'name': "NEW_POPULATION_RECOVERED",
        'data': data[1].map((country) => {
            return {
                "name": country["Country"],
                "latlng": country.latlng,
                "value": Math.floor(+country["NewRecovered"] * +POPULATION / +country.population)
            }
        })
    };
// data flags 
    const FLAGS = {
        'name': "FLAGS",
        'data': data[1].map((country) => {
            return {
                "name": country["Country"],
                "latlng": country.latlng,
                "value": country.flag
            }
        })
    }
// data coordinates
    const CASES_COORDINATES = {
        'name': 'Cumulative Cases',
        'data': {
            X: Object.keys(data[2].cases),
            Y: Object.values(data[2].cases)
        }
    }

    const DEATHS_COORDINATES = {
        'name': 'Cumulative Death',
        'data': {
            X: Object.keys(data[2].deaths),
            Y: Object.values(data[2].deaths)
        }
    }

    const RECOVERED_COORDINATES = {
        'name': 'Cumulative Recovered',
        'data': {
            X: Object.keys(data[2].recovered),
            Y: Object.values(data[2].recovered)
        }
    }

    const DAYS_CASES_COORDINATES = (() => {
        const y = Object.values(data[2].cases);

        for (let i = y.length - 1; i > 1; i--) {
            y[i] -= y[i - 1];
        }

        return {
                'name': 'Daily Cases',
                'data': {
                    X: Object.keys(data[2].cases),
                    Y: y
            }
        }
    })()

    const DAYS_DEATHS_COORDINATES  = (() => {
        const y = Object.values(data[2].deaths);

        for (let i = y.length - 1; i > 1; i--) {
            y[i] -= y[i - 1];
        }
        return {
            'name': 'Daily Death',
            'data': {
                X: Object.keys(data[2].deaths),
                Y: y
            }
        }
    })()

    const DAYS_RECOVERED_COORDINATES = (() => {
        const y = Object.values(data[2].recovered);

        for (let i = y.length - 1; i > 1; i--) {
            y[i] -= y[i - 1];
        }

        return {
            'name': 'Daily Recovered',
            'data': {
                X: Object.keys(data[2].recovered),
                Y: y
            }
        }
    })()


    const lastDate = new Date(data[3]);
    const dateStr = `${lastDate.getMonth() + 1}/${lastDate.getDate()}/${lastDate.getFullYear()}, 
    ${lastDate.getHours()}:${lastDate.getMinutes() < 10 ? '0' + lastDate.getMinutes() : lastDate.getMinutes()}`;
//date
    const DATE = {
        'name': 'DATE',
        'data': dateStr
    }

    return {
        TOTAL_CONFIRMED, TOTAL_DEATH, TOTAL_RECOVERED, NEW_CONFIRMED, NEW_DEATH, NEW_RECOVERED, POPULATION_TOTAL_CONFIRMED, POPULATION_TOTAL_DEATH,
        POPULATION_TOTAL_RECOVERED, POPULATION_NEW_CONFIRMED, POPULATION_NEW_DEATH, POPULATION_NEW_RECOVERED,
        TOTAL_CONFIRMED_COUNTRIES, TOTAL_DEATH_COUNTRIES, TOTAL_RECOVERED_COUNTRIES, NEW_CONFIRMED_COUNTRIES, NEW_DEATH_COUNTRIES,
        NEW_RECOVERED_COUNTRIES, TOTAL_POPULATION_COUNFIRM, TOTAL_POPULATION_DEATH,
        TOTAL_POPULATION_RECOVERED, NEW_POPULATION_CONFIRMED, NEW_POPULATION_DEATH, NEW_POPULATION_RECOVERED,
        FLAGS, CASES_COORDINATES, DEATHS_COORDINATES, RECOVERED_COORDINATES, DAYS_CASES_COORDINATES, DAYS_DEATHS_COORDINATES,
        DAYS_RECOVERED_COORDINATES, DATE
    };
}