import { ILocationObj } from "../model/Interfaces";

const NOMATIM_BASE_URL = "https://nominatim.openstreetmap.org/search?";

export const fetchLocations = async (
  searchInput: string
): Promise<ILocationObj[]> => {
  try {
    const params = new URLSearchParams({
      q: searchInput,
      format: "json",
      addressdetails: "1",
      polygon_geojson: "0",
    });

    const response = await fetch(`${NOMATIM_BASE_URL}${params.toString()}`);
    const results = await response.json();

    return results;
  } catch (error) {
    console.error("Error fetching locations:", error);
    return [];
  }
};
