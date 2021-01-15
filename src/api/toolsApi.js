import axios from 'axios'

const toolsApi = {
  endPoint: 'http://localhost:1337/',

  async getCategories () {
    const response = await axios.get(this.endPoint + 'categories')
    return response.data
  },
  async getAll () {
    const response = await axios.get(this.endPoint + 'links?_limit=-1')
    return response.data
  }
}

export default toolsApi
