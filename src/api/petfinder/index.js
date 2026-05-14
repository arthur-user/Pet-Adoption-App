// Fetches pets based on optional type and search query filters
export const getPets = async (type = '', query = '') => {

  // Creates query parameters for the request URL
  const searchParams = new URLSearchParams({ 
    type: type || '', 
    query: query || '' 
  });

  // Builds the final request URL with query parameters
  const requestUrl = `/animals?${searchParams.toString()}`;

  // Sends a GET request to the backend API
  const response = await fetch(requestUrl, { method: 'GET' });

  // Converts the response into JSON format and returns it
  return response.json();
};

// Fetches detailed information for a specific pet using its ID
export const getPetDetails = async (id) => {

  // Builds the request URL using the pet ID
  const requestUrl = `/animals/${id}`;

  // Sends a GET request to retrieve pet details
  const response = await fetch(requestUrl, { method: 'GET' });

  // Returns the parsed JSON response
  return response.json();
};

// Fetches all available pet types/categories
export const getPetTypes = async () => {

  // Endpoint for retrieving pet types
  const requestUrl = `/types`;

  // Sends a GET request to the backend API
  const response = await fetch(requestUrl, { method: 'GET' });

  // Returns the response data as JSON
  return response.json();
};