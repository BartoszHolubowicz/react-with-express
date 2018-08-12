const callApi = async (arg) => {
  const response = await fetch(`/api/${arg}`);
  const body = await response.json();
  if(response.status !== 200) throw Error(body.message);
  return body;
}

export default callApi;