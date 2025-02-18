const generarClabeAsync = async (ahorroId) => {
  const myHeaders = new Headers();
  myHeaders.append("accept", "*/*");

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  const baseUrl = process.env.baseUrlClabe;
  //console.log(baseUrl);
  const response = await fetch(baseUrl + ahorroId, requestOptions);
  if (!response.ok) {
    throw new Error(response.status, response.json());
  }

  const data = await response.json();
  console.log("Clabe service", data);

  return data;
};

module.exports = { generarClabeAsync };
