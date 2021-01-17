import axios from 'axios'
import config from '@/config/config'

const grepperApi = {
  endPoint: config.apiEndPoint,

  async query (query) {
    const response = await axios.get(this.endPoint + 'proxy/grepper/?q=' + query)
    return response.data
  }
}

export default grepperApi
