import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

function Sidecar() {
  const { data, error } = useSWR('http://worldtimeapi.org/api/timezone/Europe/Dublin', fetcher)
  const { vit_data, error_data } = useSWR('http://worldtimeapi.org/api/timezone/Asia/Bangkok', fetcher)
  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <div>
        <h1>The Men</h1>
      <h2>{data.timezone}</h2>
      <h2>{data.datetime}</h2>
     
    </div>
  )
}
export default Sidecar