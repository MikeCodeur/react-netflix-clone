import axios from 'axios'
import {apiKey, lang, API_URL} from '../config'

const clientApi = endpoint => {
  const page = 1
  const startChar = endpoint.includes('?') ? `&` : `?`
  const keyLang = `${startChar}api_key=${apiKey}&language=${lang}&page=${page}`
  return axios.get(`${API_URL}/${endpoint}${keyLang}`)
}

export {clientApi}
