import react, {useState, useEffect} from 'react'
import {Routes, Route} from 'react-router-dom'
import AllBanks from './components/AllBanks';
import BankDetailPage from './components/BankDetailPage'
import FavBanks from './components/FavBanks'
import axios from 'axios';


function App() {

  const [favourite, setFavourite] = useState([])
  const [bankDetails, setBankDetails] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchb = async() => {
      try{
        setLoading(true)
        const response = await axios.get('https://vast-shore-74260.herokuapp.com/banks?city=MUMBAI');
        setBankDetails(response.data);
        setLoading(false)
      }
      catch(e){
        console.log(e);
        setLoading(false);
      }
    };
    fetchb();
  }, []);


  return(
    <Routes>
      <Route path='/' element={<AllBanks bankDetails={bankDetails} loading={loading}/>}></Route>
      <Route path='/bank-details/:ifscID' 
             element={<BankDetailPage favourite={favourite} 
                                      setFavourite={setFavourite}
                                      bankDetails={bankDetails} 
                                      loading={loading}
            />}>
      </Route>
      <Route path='/favourites' element={<FavBanks favourite={favourite}/>}></Route>
    </Routes>
  )
}

export default App;