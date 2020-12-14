
import axiosClient from "./axiosClient";

const weatherApi = {
  getCity: async (city) => {
    try {
      const url = `/api/location/search/${city}`;
      const result = await axiosClient.get(url);
      return result;
    } catch (err) {
      console.error('request err', err)
    }
  },

  getLocation: async (woeid) => {
    try {
      const url = `/api/location/${woeid}`;
      const result = await axiosClient.get(url);
      return result;
    } catch (err) {
      console.error('request err', err)
    }
  },
}

export default weatherApi;