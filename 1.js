const carSpecs ={
    make:"steel",
    model: "Alto",
    year: 2003,
}
function displayCarProperties(carSpecs) {
    for (const property in carSpecs) {
      console.log(`${property}: ${carSpecs[property]}`);
    }
  }
  console.log(displayCarProperties(carSpecs))
  