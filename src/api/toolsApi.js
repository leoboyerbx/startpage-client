import axios from 'axios'
import config from '@/config/config'

const toolsApi = {
  endPoint: config.apiEndPoint + '/',

  async getCategories () {
    console.log(this.endPoint)
    const response = await axios.get(this.endPoint + 'categories')
    return response.data
  },
  async getAll () {
    const response = await axios.get(this.endPoint + 'links?_limit=-1')
    return response.data
  }
}

export default toolsApi
