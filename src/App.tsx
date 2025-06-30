import { useState } from 'react'
import axios from 'axios'
import { Card, Input, Dropdown, type MenuProps } from 'antd';
const { Meta } = Card;
import Header from './components/Header';
import { DownOutlined } from '@ant-design/icons';

type Country = {
  name: string;
  capital?: string;
  region: string;
  flags: string;

}

const { Search } = Input;


const items: MenuProps['items'] = [
  {
    label: (
      <a href="https://www.antgroup.com" target="_blank" rel="noopener noreferrer">
        Clear
      </a>
    ),
    key: '0',
    theme: 'light',
    className: 'font-nunito',

  },
  {
    label: (
      <a href="" target="_blank" rel="noopener noreferrer">
        Africa
      </a>
    ),
    key: '1',
    className: 'font-nunito',
  },
  {
    label: 'America',
    key: '2',
    className: 'font-nunito',
  },
  {
    label: 'Asia',
    key: '3',
    className: 'font-nunito',
  },
  {
    label: 'Europe',
    key: '4',
    className: 'font-nunito',
  },
  {
    label: 'Oceania',
    key: '5',
    className: 'font-nunito',
  },
];




function App() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [isLoading, setIsLoading] = useState(false)

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
// sm = 640px      md = 768px     lg = 1024px    xl = 1280px
//font-light = 300
//font-semibold = 600
//font-extrabold = 800
  return (
    <div className="w-full font-nunito">
      <Header />
      <div className='mx-auto max-w-80 sm:max-w-140 md:max-w-170 lg:max-w-230 xl:max-w-320 mt-4'>
        <div className='flex justify-between flex-col gap-6'>
          <div>


            <Search placeholder="Search for a country..." allowClear onSearch={() => { window.alert('TO DO') }} size='large' rootClassName="font-nunito " />

          </div>

          <Dropdown menu={{ items }} trigger={['click']} className=' w-42 flex justify-between text-amber-50 py-2.5 px-4 border-0 bg-surface-dark rounded-md text-sm'>
            <a onClick={(e) => e.preventDefault()} >
              Filter by Region
              <DownOutlined/>
            </a>

          </Dropdown>
        </div>
        <button onClick={() => getAllCountries()}>teste</button>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>



          {countries.map((country, index) => (

            <Card hoverable={true} key={index} className='font-nunito'
              cover={<img src={country.flags} alt={`Bandeira de ${country.name}`} />}>

              <p>Nome: {country.name}</p>
              <p>Capital: {country.capital}</p>
              <p>Região: {country.region}</p>
            </Card>

          ))}

        </div>
      </div>
    </div>
  )
}

export default App

