import axios from 'axios'

const createInstance = () => {
  const instance = axios.create( {
    params: {
      servicekey: "HIZ4Uk6r7IhL3RX2hSLgM49ydizx8w3dpjecsX+VAvCaRzpeEKGbkfwwqR79GujxIMkHLm4+kxMLucrpGgoLGQ==",
      numOfRows: 100,
      returnType: 'json',
      pageNo: 1,
      ver: 1.0
    },
    timeout: 2000,
  })
  return instance
}
const instance = createInstance()
export default instance

