import axios from "axios";

export const getTrips = () => {
  return axios.get("/api/trips");
};

export const getTrip = (id) => {
  return axios.get(`/api/trips/${id}`);
};

export const getUserTrips = (id) => {
  return axios.get(`/api/trips/user/${id}`);
};

export const makeTrip = (data) => {
  return axios.post("/api/trips/newtrip", data);
};
