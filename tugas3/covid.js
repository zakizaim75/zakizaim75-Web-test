fetch('https://corona.lmao.ninja/v2/all')
.then((response) => {
  return response.json();
})
.then((data) => {
  console.log(data);
  document.getElementById("country").innerHTML = data.country;
  document.getElementById("active").innerHTML = data.active.toLocaleString();
  document.getElementById("cases").innerHTML = data.cases.toLocaleString();
  document.getElementById("critical").innerHTML = data.critical.toLocaleString();
  document.getElementById("death").innerHTML = data.deaths.toLocaleString();
  document.getElementById("recovered").innerHTML = data.recovered.toLocaleString();
  document.getElementById("tests").innerHTML = data.tests.toLocaleString();
  document.getElementById("flag").src = data.countryInfo.flag;
});

fetch('https://corona.lmao.ninja/v2/countries/indonesia')
.then((response) => {
  return response.json();
})
.then((data) => {
  console.log(data);
  document.getElementById("country1").innerHTML = data.country;
  document.getElementById("active1").innerHTML = data.active.toLocaleString();
  document.getElementById("cases1").innerHTML = data.cases.toLocaleString();
  document.getElementById("critical1").innerHTML = data.critical.toLocaleString();
  document.getElementById("death1").innerHTML = data.deaths.toLocaleString();
  document.getElementById("recovered1").innerHTML = data.recovered.toLocaleString();
  document.getElementById("tests1").innerHTML = data.tests.toLocaleString();
  document.getElementById("flag1").src = data.countryInfo.flag;
});

fetch('https://corona.lmao.ninja/v2/countries/singapore')
.then((response) => {
  return response.json();
})
.then((data) => {
  console.log(data);
  document.getElementById("country2").innerHTML = data.country;
  document.getElementById("active2").innerHTML = data.active.toLocaleString();
  document.getElementById("cases2").innerHTML = data.cases.toLocaleString();
  document.getElementById("critical2").innerHTML = data.critical.toLocaleString();
  document.getElementById("death2").innerHTML = data.deaths.toLocaleString();
  document.getElementById("recovered2").innerHTML = data.recovered.toLocaleString();
  document.getElementById("tests2").innerHTML = data.tests.toLocaleString();
  document.getElementById("flag2").src = data.countryInfo.flag;
});

fetch('https://corona.lmao.ninja/v2/countries/thailand')
.then((response) => {
  return response.json();
})
.then((data) => {
  console.log(data);
  document.getElementById("country3").innerHTML = data.country;
  document.getElementById("active3").innerHTML = data.active.toLocaleString();
  document.getElementById("cases3").innerHTML = data.cases.toLocaleString();
  document.getElementById("critical3").innerHTML = data.critical.toLocaleString();
  document.getElementById("death3").innerHTML = data.deaths.toLocaleString();
  document.getElementById("recovered3").innerHTML = data.recovered.toLocaleString();
  document.getElementById("tests3").innerHTML = data.tests.toLocaleString();
  document.getElementById("flag3").src = data.countryInfo.flag;
});

fetch('https://corona.lmao.ninja/v2/countries/malaysia')
.then((response) => {
  return response.json();
})
.then((data) => {
  console.log(data);
  document.getElementById("country4").innerHTML = data.country;
  document.getElementById("active4").innerHTML = data.active.toLocaleString();
  document.getElementById("cases4").innerHTML = data.cases.toLocaleString();
  document.getElementById("critical4").innerHTML = data.critical.toLocaleString();
  document.getElementById("death4").innerHTML = data.deaths.toLocaleString();
  document.getElementById("recovered4").innerHTML = data.recovered.toLocaleString();
  document.getElementById("tests4").innerHTML = data.tests.toLocaleString();
  document.getElementById("flag4").src = data.countryInfo.flag;
});

fetch('https://corona.lmao.ninja/v2/countries/myanmar')
.then((response) => {
  return response.json();
})
.then((data) => {
  console.log(data);
  document.getElementById("country5").innerHTML = data.country;
  document.getElementById("active5").innerHTML = data.active.toLocaleString();
  document.getElementById("cases5").innerHTML = data.cases.toLocaleString();
  document.getElementById("critical5").innerHTML = data.critical.toLocaleString();
  document.getElementById("death5").innerHTML = data.deaths.toLocaleString();
  document.getElementById("recovered5").innerHTML = data.recovered.toLocaleString();
  document.getElementById("tests5").innerHTML = data.tests.toLocaleString();
  document.getElementById("flag5").src = data.countryInfo.flag;
});