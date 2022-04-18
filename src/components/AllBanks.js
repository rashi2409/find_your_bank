import React, { useState } from 'react'
import { BasicTable } from '../components/BasicTable';
import TabView from './TabView';

const AllBanks = ({bankDetails, loading}) => {

  const [city, setCity] = useState('Mumbai');
  const [option, setOption] = useState('');
  const [searchInput, setSearchInput] = useState('');


  return (
    <div style={{marginTop: '3vh'}}>
      <TabView/>
      <BasicTable option={option}
                  searchInput={searchInput}
                  loading={loading}
                  bankDetails={bankDetails}
                  setSearchInput={setSearchInput}
                  city={city}
                  setCity={setCity}
                  setOption={setOption}
      />
    </div>
  );
}

export default AllBanks;
