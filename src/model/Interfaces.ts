export interface ILocationObj {
  address: {
    city: string;
    municipality: string;
    county: string;
    country: string;
  };
  addresstype: string;
  boundingbox: string[];
  class: string;
  display_name: string;
  importance: number;
  lat: string;
  lon: string;
  name: string;
  osm_id: number;
  osm_type: string;
  place_id: number;
  place_rank: number;
  type: string;
}
