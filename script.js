let CurrencyData = [
    {
     "CountryName": "United States",
     "Currency":"Dollars" 
    },
    {
      "CountryName": "Ecuador",
      "Currency":"Dollars" 
     },
     {
      "CountryName": "Guam",
      "Currency":"Dollars" 
    },
    {
      "CountryName": "Spain",
      "Currency":"Euro" 
    },
    
    {
      "CountryName": "Malta",
      "Currency":"Euro" 
    },
    {
      "CountryName": "India",
      "Currency":"Rupees" 
    },
  ]
  
  async function getData(){
      const data = await fetch('https://restcountries.com/v3.1/all',{method:"GET"});
      const country = await data.json();
      
      // Get all the countries from Asia continent Filter function
      let asianCountry = country.filter(res=>res.region == 'Asia')
      console.log(asianCountry);
  
      // Get all the countries with a population of less than 2 lakhs using Filter function
      let lessPopulation = country.filter(res=>res.population < 200000);
      console.log(lessPopulation);
  
      let details = country.forEach(obj => {
        console.log("Country Name- " +obj.name.common)
        console.log("Country Capital- " +obj.capital)
        console.log("Flag-  " +obj.flag)
  })
     
      //Print the total population of countries using reduce function
      let total = country.map(res => res.population).reduce(((x,y)=> x + y),0)
      console.log(total);
   }
    //Print the country which uses US Dollars as currency.
     let Currency = CurrencyData.filter(res=>res.Currency == "Dollars").map(res=>res.CountryName)
     console.log(Currency);

     getData();
