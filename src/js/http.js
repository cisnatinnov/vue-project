import axios from "axios";

let api = import.meta.env.VITE_API

const headers = { 'Content-Type': 'application/json'}

export const get = async (route, params) => {
  let routes = ``
  if (params.search) routes = `${api}/${route}?search=${params.search}`
  else routes = `${api}/${route}`

  return await axios.get(routes)
}

export const getById = async (route, id) => {  
  let routes = `${api}/${route}/${id}`

  return await axios.get(routes)
}

export const create = async (route, data) => {
  return await axios.post(`${api}/${route}`, data, { headers })
}

export const update = async (route, data, id) => {
  return await axios.put(`${api}/${route}/${id}`, data, { headers })
}

export const delById = async (route, id) => {
  let routes = `${api}/${route}/${id}`

  return await axios.delete(routes)
}