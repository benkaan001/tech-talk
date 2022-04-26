let countries = [
  ['USA', 'Washington'],
  ['Mexico', 'CDMX'],
  ['Columbia', 'Bogota'],
  ['Peru', 'Lima'],
];

let countriesMap = new Map(countries);

console.log(countriesMap); // Map(4) {'USA' => 'Washington', 'Mexico' => 'CDMX', 'Columbia' => 'Bogota','Peru' => 'Lima'}

// add

countriesMap.set('Ecuador', 'Quito');

console.log(countriesMap); // Map(5) {'USA' => 'Washington', 'Mexico' => 'CDMX', 'Columbia' => 'Bogota','Peru' => 'Lima', 'Ecuador' => 'Quito'}

// get
const capitalOfColumbia = countriesMap.get('Columbia'); // Bogota

/*

ITERATION

for(const x of countriesMap){
    console.log(x)
}

or

for( const [country, city] of countriesMap){
    console.log( country, city)
}



*/
