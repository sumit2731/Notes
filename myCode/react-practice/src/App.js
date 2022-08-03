import logo from "./logo.svg";
import "./App.css";
import {Page} from './components/Page';
import {rawCountries} from './data/data';


const getCountriesFromRawData = (raw) => {
  return raw.map((value) => ({
    __typename: "country",
    name: String(value.name.common),
    id: String(value.cca2).toLowerCase(),
    independent: Boolean(value.independent),
    unMember: Boolean(value.unMember),
    flagUrl: `https://flagcdn.com/${String(value.cca2).toLowerCase()}.svg`,
    region: String(value.region),
    capital: value.capital.length ? String(value.capital[0]) : "",
    subregion: String(value.subregion)
  }));
};
function App() {

  return (
   <div className="App">
    <Page countries={getCountriesFromRawData(rawCountries)} />
   </div>
  );
}

export default App;
