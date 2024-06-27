//Get all the countries from Asia continent /region using Filter method

const xhr = new XMLHttpRequest();
console.log(xhr);
xhr.open("GET", "https://restcountries.com/v3.1/all", true);

xhr.onload = () => {
  if (xhr.status >= 200 && xhr.status < 300) {
    const data = JSON.parse(xhr.responseText);
    console.log(data);
    console.log(
      "------------Get all the countries from Asia continent /region using Filter method--------------------"
    );

    const asiaCountries = data.filter(
      (el) => el.continents.includes("Asia") || el.region === "Asia"
    );
    console.log(asiaCountries);

    console.log(
      "------------Get all the countries with a population of less than 2 lakhs using Filter method--------------------"
    );

    const lt2lakh = data.filter((el) => el.population < 200000);
    console.log(lt2lakh);

    console.log(
      "------------Print the following details name, capital, flag, using forEach method--------------------"
    );

    const printCountries = data.forEach((el) => {
      let print = `Name: ${el.name.common},
Capital: ${el.capital},
Flag: ${el.flag},

`;

      console.log(print);
    });

    console.log(
      "------------Print the total population of countries using reduce method--------------------"
    );

    const totalPop = data.reduce((acc, cur) => (acc += cur.population), 0);

    console.log(
      `Total Population: ${new Intl.NumberFormat("en-IN").format(totalPop)}`
    );

    console.log(
      "------------Print the country that uses US dollars as currency.--------------------"
    );

    const USDollarCon = data.filter((el) => el.currencies?.USD);
    console.log(USDollarCon);
  }
};

xhr.send();
