import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

function Sidecar() {
  const { data, error } = useSWR('http://worldtimeapi.org/api/timezone/Europe/Dublin', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <div>
      <h1>{data.timezone}</h1>
      <h1>{data.datetime}</h1>
     
    </div>
  )
}
export default Sidecar