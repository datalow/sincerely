import Axios from 'axios'

const defaults = {
  baseURL: '/api'
}

export default Axios.create(defaults)
