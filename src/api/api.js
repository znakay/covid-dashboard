let countries = [];
let global = [];
let date = "";
let historicalAll = [];
class Service {
    async getData() {
        if (countries.length === 0 || global.length === 0 || historicalAll.length || date.length) {
            await getDataAsync();
        }
        return [global, countries, historicalAll, date];
    }
}

let getDataAsync =  async () => {
    const data = (await (await fetch("https://api.covid19api.com/summary")).json());
    countries = data["Countries"];
    global = data["Global"];
    date = data["Date"];
    historicalAll = (await (await fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=all")).json());

    (await (await fetch("https://restcountries.eu/rest/v2/all?fields=name;population;flag")).json()).forEach((element) => {
        countries.find((country) => {
            if (country["Country"] === element["name"]) {
                country["flag"] = element["flag"];
                if (country["Country"] === "Belarus") country["flag"] = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Flag_of_Belarus_%281918%2C_1991%E2%80%931995%29.svg/1280px-Flag_of_Belarus_%281918%2C_1991%E2%80%931995%29.svg.png";
                country["population"] = element["population"];
                return true;
            } return false;
        });
    });

    (await (await fetch("https://restcountries.eu/rest/v2/")).json()).forEach((element) => {
        countries.find((country) => {
            if (country["CountryCode"] === element["alpha2Code"]) {
                country["latlng"] = element["latlng"];
                return true;
            } return false;
        });
    });
};

export default Service;