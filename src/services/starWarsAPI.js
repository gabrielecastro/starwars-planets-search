const getStarWars = async () => {
  const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const responseJson = await response.json();
  return responseJson.results;
};

export default getStarWars;
