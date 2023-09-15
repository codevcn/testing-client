import { useState, useEffect } from 'react'
import axios from 'axios'

const server = 'https://vcn-testing.onrender.com'

function App() {
  const [data, setData] = useState({
    start: null,
    register: null,
    login: null,
  })

  const [logouting, setLogouting] = useState(false)

  const starting = async () => {
    let api = '/'

    try {
      let { data } = await axios.get(
        server + api,
      )

      console.log('>>> data >>>', data)

      setData(pre => ({ ...pre, start: data }))
    } catch (error) {
      console.log('>>> err 1 >>>', error)
    }
  }

  const register = async () => {
    let api = '/register'

    try {
      let { data } = await axios.post(
        server + api,
        { pass: 'pass vcn', username: 'username vcn hellos' },
        { withCredentials: true }
      )

      console.log('>>> data >>>', data)

      setData(pre => ({ ...pre, register: data }))
    } catch (error) {
      console.log('>>> err 2 >>>', error)
    }
  }

  const login = async () => {
    let api = '/login'

    try {
      let { data } = await axios.post(
        server + api,
        { withCredentials: true }
      )

      console.log('>>> data >>>', data)

      setData(pre => ({ ...pre, login: data }))
    } catch (error) {
      console.log('>>> err 3 >>>', error)
    }
  }

  const logout = async () => {
    let api = '/logout'

    try {
      setLogouting(true)

      let { data } = await axios.post(
        server + api,
        {},
        { withCredentials: true }
      )

      console.log('>>> data >>>', data)

      setLogouting(false)
    } catch (error) {
      console.log('>>> err 4 >>>', error)
    }
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

      <button
        style={{ padding: '20px', backgroundColor: 'black', color: 'white' }}
        onClick={logout}
      >
        {
          logouting ?
            'logouting...'
            :
            'logout'
        }
      </button>

    </div>
  )
}

export default App
