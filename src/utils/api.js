const API_BASE_URL =
  "https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest";
const AUTH_HEADER = {
  Authorization: "Bearer Ex9yLyRU7wvyxfblpq5HAhfQqUP1vIyo",
};

export const fetchData = async (endpoint) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
      headers: AUTH_HEADER,
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching ${endpoint}:`, error);
    return null;
  }
};
