import { useState } from 'react'
import axios from 'axios'

type Country = {
  name: string;
  capital?: string;
  region: string;
  flags: string;

}

function App() {
  const [count, setCount] = useState(0)
  const [countries, setCountries] = useState<Country[]>([]);
  const [isLoading, setIsLoading] = useState(false)
  function teste() {
    window.alert('teste')
  }

  function getAllCountries() {
    setIsLoading(true)
    axios.get("https://restcountries.com/v3.1/all?fields=name,capital,flags,region,population")
      .then((response) => {
        const formattedData: Country[] = response.data.map((country: any) => ({
          name: country.name.common,
          capital: country.capital?.[0],
          region: country.region,
          flags: country.flags.png
        }))
        console.log(response.data)
        setCountries(formattedData)
        console.log('countrie: ', countries)
        setIsLoading(false)
      })
      .catch((error) => {
        console.error("Erro ao buscar países:", error);
        setIsLoading(false);
      });


  }

  return (
    <div>

<button onClick={() => getAllCountries()}>teste</button>
      <div className='flex flex-row flex-wrap gap-10 w-full'>

        
        {countries.map((country, index) => (
          <div key={index}  className='font-nunito'>

            <img src={country.flags} alt={`Bandeira de ${country.name}`} />
            <p>Nome: {country.name}</p>
            <p>Capital: {country.capital}</p>
            <p>Região: {country.region}</p>

          </div>

        ))}

      </div>
    </div>
  )
}

export default App
