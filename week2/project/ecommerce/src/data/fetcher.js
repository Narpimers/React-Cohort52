
   const fetcher = async (url)  => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error when receiving data:', error);
    throw error;
  }
}

export default fetcher
