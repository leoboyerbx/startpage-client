// import axios from 'axios'

const duckduckgoApi = {
  endPoint: 'https://duckduckgo.com/ac/',
  callback: 'autocompleteCallback',
  getSuggestions (query) {
    return new Promise(resolve => {
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = `${this.endPoint}?callback=${this.callback}&q=${query}`
      document.querySelector('head').appendChild(script)

      window[String(this.callback)] = res => {
        script.remove()
        resolve(res.map(item => item.phrase))
      }
    })
  }
}

export default duckduckgoApi
