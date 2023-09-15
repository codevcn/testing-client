import { useState, useEffect } from 'react'
import axios from 'axios'

const server = 'https://vcn-testing.onrender.com'

function App() {
  const [data, setData] = useState({
    start: null,
    register: null,
    login: null,
  })

  const starting = async () => {
    let api = '/'

    let { data } = await axios.get(
      server + api,
    )

    console.log('>>> data >>>', data)

    setData(pre => ({ ...pre, start: data }))
  }

  const register = async () => {
    let api = '/register'

    let { data } = await axios.post(
      server + api,
      { pass: 'pass vcn', username: 'username vcn hellos' },
      { withCredentials: true }
    )

    console.log('>>> data >>>', data)

    setData(pre => ({ ...pre, register: data }))
  }

  const login = async () => {
    let api = '/login'

    let { data } = await axios.post(
      server + api,
      { withCredentials: true }
    )

    console.log('>>> data >>>', data)

    setData(pre => ({ ...pre, login: data }))
  }

  useEffect(() => {
    starting()
    register()
    login()
  }, [])

  return (
    <div
      id="App-Testing-VCN"
      style={{
        fontSize: '1.5em',
        padding: '50px',
        backgroundColor: 'pink',
      }}
    >

      {
        data.login && data.start && data.register ?
          <div>
            {data.start}
            <br />
            {data.register}
            <br />
            {data.login}
          </div>
          :
          <div>
            loading...
          </div>
      }

    </div>
  )
}

export default App
