fetch('https://covid19.mathdro.id/api')
.then((response) => {
  return response.json();
})
.then((data) => {
  console.log(data);
  document.getElementById("cases").innerHTML = data.confirmed.value.toLocaleString();
  document.getElementById("death").innerHTML = data.deaths.value.toLocaleString();
  document.getElementById("recovered").innerHTML = data.recovered.value.toLocaleString();
});

fetch('https://covid19.mathdro.id/api/countries/indonesia')
.then((response) => {
  return response.json();
})
.then((data) => {
  console.log(data);
  document.getElementById("cases1").innerHTML = data.confirmed.value.toLocaleString();
  document.getElementById("death1").innerHTML = data.deaths.value.toLocaleString();
  document.getElementById("recovered1").innerHTML = data.recovered.value.toLocaleString();
});

fetch('https://covid19.mathdro.id/api/countries/malaysia')
.then((response) => {
  return response.json();
})
.then((data) => {
  console.log(data);
  document.getElementById("cases2").innerHTML = data.confirmed.value.toLocaleString();
  document.getElementById("death2").innerHTML = data.deaths.value.toLocaleString();
  document.getElementById("recovered2").innerHTML = data.recovered.value.toLocaleString();
});

fetch('https://covid19.mathdro.id/api/countries/Singapore')
.then((response) => {
  return response.json();
})
.then((data) => {
  console.log(data);
  document.getElementById("cases3").innerHTML = data.confirmed.value.toLocaleString();
  document.getElementById("death3").innerHTML = data.deaths.value.toLocaleString();
  document.getElementById("recovered3").innerHTML = data.recovered.value.toLocaleString();
});

fetch('https://covid19.mathdro.id/api/countries/Burma')
.then((response) => {
  return response.json();
})
.then((data) => {
  console.log(data);
  document.getElementById("cases4").innerHTML = data.confirmed.value.toLocaleString();
  document.getElementById("death4").innerHTML = data.deaths.value.toLocaleString();
  document.getElementById("recovered4").innerHTML = data.recovered.value.toLocaleString();
});

fetch('https://covid19.mathdro.id/api/countries/thailand')
.then((response) => {
  return response.json();
})
.then((data) => {
  console.log(data);
  document.getElementById("cases5").innerHTML = data.confirmed.value.toLocaleString();
  document.getElementById("death5").innerHTML = data.deaths.value.toLocaleString();
  document.getElementById("recovered5").innerHTML = data.recovered.value.toLocaleString();
});
