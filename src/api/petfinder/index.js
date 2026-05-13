export const getPets = async (type = '', query = '') => {
  const searchParams = new URLSearchParams({ 
    type: type || '', 
    query: query || '' 
  });
  const requestUrl = `/animals?${searchParams.toString()}`;
  const response = await fetch(requestUrl, { method: 'GET' });
  return response.json();
};

export const getPetDetails = async (id) => {
  const requestUrl = `/animals/${id}`;
  const response = await fetch(requestUrl, { method: 'GET' });
  return response.json();
};

export const getPetTypes = async () => {
  const requestUrl = `/types`;
  const response = await fetch(requestUrl, { method: 'GET' });
  return response.json();
};