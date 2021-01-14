import axios from 'axios'

const grepperApi = {
  endPoint: 'http://localhost:1337/',

  async query (query) {
    const response = await axios.get(this.endPoint + 'proxy/grepper/?q=' + query)
    return response.data
  }
}

export default grepperApi
