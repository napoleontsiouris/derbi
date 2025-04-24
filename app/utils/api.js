export async function fetchFromStrapi(endpoint, options = {}) {
    const BASE_URL = "http://neolaia.dervitsani.ovh/api"; // Change if needed
  
    try {
      const res = await fetch(`${BASE_URL}/${endpoint}`, {
        cache: "no-store", // Prevent caching (use "force-cache" for caching)
        headers: {
          "Content-Type": "application/json",
        },
        ...options, // Allows passing custom options like method, body, etc.
      });
  
      if (!res.ok) {
        throw new Error(`Failed to fetch: ${endpoint} (Status: ${res.status})`);
      }
  
      const data = await res.json();
      return data.data || [];
    } catch (error) {
      console.error("Strapi API Error:", error.message);
      return null; // Return null or an empty array based on use case
    }
  }
  