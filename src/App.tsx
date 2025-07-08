import { useEffect, useMemo, useState } from 'react'
import axios from 'axios'
import { Card, Input, Dropdown, type MenuProps, Pagination, Skeleton, Space } from 'antd';
const { Meta } = Card;
import Header from './components/Header';
import { DownOutlined, SearchOutlined } from '@ant-design/icons';

type Country = {
  name: string;
  capital?: string;
  region: string;
  flags: string;
  population: string;

}

const { Search } = Input;





function App() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [isLoading, setIsLoading] = useState(false)
  const [selectedRegion, setSelectedRegion] = useState('')
  const [selectedName, setSelectedName] = useState('')

  const items: MenuProps['items'] = [
    {
      label: <button onClick={() => { setSelectedRegion('') }}>Clear </button>,
      key: '0',
      theme: 'light',
      className: 'font-nunito',
    },
    {
      label: <button onClick={() => { setSelectedRegion('Africa') }}>Africa </button>,
      key: '1',
      className: 'font-nunito',
    },
    {
      label: <button onClick={() => { setSelectedRegion('Americas') }}>America </button>,
      key: '2',
      className: 'font-nunito',
    },
    {
      label: <button onClick={() => { setSelectedRegion('Asia') }}>Asia</button>,
      key: '3',
      className: 'font-nunito',
    },
    {
      label: <button onClick={() => { setSelectedRegion("Europe") }}>Europe </button>,
      key: '4',
      className: 'font-nunito',
    },
    {
      label: <button onClick={() => { setSelectedRegion("Oceania") }}>Oceania </button>,
      key: '5',
      className: 'font-nunito',
    },
  ];


  useEffect(() => {
    setIsLoading(true)
    axios.get("https://restcountries.com/v3.1/all?fields=name,capital,flags,region,population")
      .then((response) => {
        const formattedData: Country[] = response.data.map((country: any) => ({
          name: country.name.common,
          capital: country.capital?.[0],
          region: country.region,
          flags: country.flags.png,
          population: country.population,
        }))
        console.log(response.data)
        setCountries(formattedData)
        console.log('countries: ', countries)
        setIsLoading(false)
      })
      .catch((error) => {
        console.error("Erro ao buscar países:", error);
        setIsLoading(false);
      });
  }, [])

  const filteredCountries = useMemo(() => {

    return countries
      .filter((country) => {

        const matchesRegion = (!selectedRegion || country.region === selectedRegion);
        const matchesName = (!selectedName || country.name.toLowerCase().includes(selectedName.toLowerCase()));
        return (matchesRegion && matchesName);
      })
      .sort((a, b) => a.name.localeCompare(b.name))
  }, [countries, selectedRegion, selectedName])

  // sm = 640px      md = 768px     lg = 1024px    xl = 1280px
  //font-light = 300
  //font-semibold = 600
  //font-extrabold = 800
  //sm:max-w-150 md:max-w-180 lg:max-w-245 xl:max-w-300 2xl:max-w-350
  //<Input placeholder="Search for a country..." allowClear onChange={(e) => { setSelectedName(e.target.value) }} onSearch={() => { console.log(selectedName) }} size='large' rootClassName="font-nunito " addonBefore={<SearchOutlined />} />
  return (
    <div className="w-full font-nunito">
      <Header />
      <div className='mx-auto max-w-10/12 sm:max-w-11/12 2xl:max-w-320  mt-4 md:mt-10'>
        <div className='flex justify-between flex-col gap-6 md:flex-row mb-10'>

            <Space.Compact className='md:min-w-7/12 lg:min-w-5/12  h-14'>
              <SearchOutlined style={{color: 'hsl(0, 100%, 100%)'}} className='bg-surface-dark p-2 px-5 font-nunito rounded-l-lg text-white text-xl' />
              <Input placeholder="Search for a country..." allowClear onChange={(e) => { setSelectedName(e.target.value) }} rootClassName="font-nunito" size='large'/>
            </Space.Compact>

          <Dropdown menu={{ items }} trigger={['click']} className=' w-42 flex justify-between items-center text-amber-50  px-4 border-0 bg-surface-dark rounded-md text-sm h-14'>
            <a onClick={(e) => e.preventDefault()} >
              {selectedRegion ? selectedRegion : 'Filter by Region'}
              <DownOutlined />
            </a>
          </Dropdown>
        </div>


        {isLoading ? (
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8'>
            {Array.from({ length: 8 }).map((_, i) => (
              <Card key={i} className="w-full" cover={
                <div className="aspect-[12/7] bg-gray-300 animate-pulse" />
              }>
                <Skeleton
                  active
                  paragraph={{ rows: 3 }}
                  title={{ width: '80%' }}
                />
              </Card>
            ))}
          </div>
        ) : (
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8'>

            {filteredCountries.map((country, index) => (

              <Card bodyStyle={{ padding: '20px 18px' }} hoverable={true} key={index} className='font-nunito w-full'
                cover={<img src={country.flags} alt={`The flag of ${country.name}`} className='aspect-[12/7]' />}>

                <h3 className='font-nunito font-extrabold text-2xl mb-3'> {country.name}</h3>
                <p className='text-base font-nunito mb-1'><b>Population:</b> {country.population}</p>
                <p className='text-base font-nunito mb-1'><b>Capital:</b> {country.capital}</p>
                <p className='text-base font-nunito mb-0'><b>Region:</b> {country.region}</p>
              </Card>

            ))}

          </div>
        )}
        <Pagination defaultCurrent={1} total={50} />

      </div>
    </div>
  )
}

export default App

