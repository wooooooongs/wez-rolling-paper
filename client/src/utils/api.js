const get = async (endpoint, params = '') => {
  const apiUrl = import.meta.env.VITE_SERVER_URL + endpoint;
  const url = params ? `${apiUrl}/${params}` : apiUrl;

  try {
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.reason);
    }

    const result = await res.json();
    return result;
  } catch (err) {
    console.error(err);
  }
};

const post = async (endpoint, body) => {
  const apiUrl = import.meta.env.VITE_SERVER_URL + endpoint;

  try {
    const res = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.reason);
    }

    const result = await res.json();
    return result;
  } catch (err) {
    console.error(err);
  }
};

export { get, post };
