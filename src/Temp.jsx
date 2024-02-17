import { useState , useEffect } from 'react'

function Temp() {
    const[location,setLocation]=useState([])
    const[city,setCity]=useState([])
    const[search,setSearch]=useState("")
    useEffect(() => {
        fetchApi();
        } , [])
    async function fetchApi(){
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=1b2e5b641897e3fa468252bca4682d75`)
        const data = await response.json();
     // console.log(response);
    //  const reJson=  await response.json()
    //  console.log(data);
     setLocation(data.main)
     setCity(data)
    //  console.log(data.name);
      }
  
  return (
    <div className='container'>
     <form onSubmit={(e) => {
          e.preventDefault();
          fetchApi();
          setSearch("")
        }}>
    <h1>
Weather Check App
    </h1>
<div>
    <input type="search" name="" id="" placeholder='Enter City Name'  value={search} onChange={(e) => setSearch(e.target.value) }/>
    <button type='submit'>Search</button>
</div>
</form>
{!location?(<p>No Data Found</p>):(
<div className='result'>
<h1><i class="fa-solid fa-temperature-half"></i>{city.name}</h1>
<h1>{location.temp}Cel</h1>
<h3>Min:{location.temp_min}Cel | Max:{location.temp_min}Cel</h3>
<h3>Feels Like:{location.feels_like}Cel</h3>
<h3>Humidity:{location.humidity}</h3>
</div>

)}

    </div>
  )
}

export default Temp