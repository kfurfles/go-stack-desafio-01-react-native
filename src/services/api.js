import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333",
});

export const getRepositories = async () => {
  const {data} = await api.get('/repositories')
  return data
}

export const newRepository = async (repo) => {
  const {data} = await api.post('/repositories',{ ...repo })
  return data
} 

export const addLikeRepository = async (repoID) => {
  const {data} = await api.post(`/repositories/${repoID}/like`)
  return data
} 

export default api;
