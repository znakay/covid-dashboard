import './App.css';
import React, { useState, useEffect } from "react";
import Service from './api/api';
import SortData from './api/sortData';
import Wrapper from './components/Wrapper';
import Map from './components/map/Map';
import Buttons from './components/links/Buttons';
import ButtonsTable from './components/links/ButtonsTable';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import TableTitle from './components/table/firstTable';
import Footer from './components/footer/Footer';
import List from './components/mainStatistic/listStatistic';
import LastDate from './components/date/lastDate';
import Chart from './components/chart/Chart';
import { stateCountries, stateTotal, stateChart, stateColumRecovered, stateColumConfirmed, stateColumDeath } from './constants/state';
import Header from './components/header/Header';

App.propTypes = {
  dataTypes: PropTypes.string
};


function App(props) {
  const dataService = new Service();
  const [isLoaded, setIsloaded] = useState(false); 
  const [data, setDataState] = useState([]);
  const total = stateTotal[props.dataTypes];
  const countries = stateCountries[props.dataTypes];
  const chart = stateChart[props.dataTypes];
  const columDeath = stateColumDeath[props.dataTypes];
  const columConfirmed = stateColumConfirmed[props.dataTypes];
  const columRecovered = stateColumRecovered[props.dataTypes];
  let sortedData = [];

  useEffect(() => {
    setData();
  }, []);

  const setData = async () => {
    let data = await dataService.getData();
    setDataState(data);
    setIsloaded(true);
  };

  if (isLoaded) sortedData = SortData(data);

  return (
    <div className="App">
      <Header />
      {
        isLoaded ? <main className="main">
          <div className='main-container'>
            <div className='lift-with-map'>
              <div className='left-side'>
                <TableTitle tableName={sortedData['TOTAL_CONFIRMED'].name} content={sortedData[total].data.value} />
                <Wrapper header={<p>Cases by Country</p>} 
                  content={<List currentConfig={sortedData[countries].data} 
                  flags={sortedData.FLAGS.data} isSearch={true} />} 
                  links={<Buttons />} />  
                <LastDate dateTitle={'Last Updated at'} fullDate={sortedData.DATE.data} />
              </div>
              <div className='center-div'>
                <Wrapper header={ null } name="map" content={ <Map data={sortedData[countries]} />} links={ <Buttons />} />
                <Wrapper header={ null } name="map" content={ <Chart chartByClick={sortedData[chart]} _default={sortedData[chart]} /> } links={ <Buttons />} />
              </div>
            </div>
            <Wrapper 
              header={
                <TableTitle tableName={'World'} content={null} />
              } 
              content={
                <div className='right-table'>
                  <TableTitle tableName={'Confirmed'} content={sortedData[columConfirmed].data.value} />
                  <TableTitle tableName={'Deaths'} content={sortedData[columDeath].data.value} />
                  <TableTitle tableName={'Recovered'} content={sortedData[columRecovered].data.value} />
                </div>
              } 
              links={<ButtonsTable />} />
            {/* <Wrapper 
              header={
                <div className='right-table-titles'>
                  <TableTitle tableName={'Confirmed'} content={sortedData[columConfirmed].data.value} />
                  <TableTitle tableName={'Deaths'} content={sortedData[columDeath].data.value} />
                  <TableTitle tableName={'Recovered'} content={sortedData[columRecovered].data.value} />
                </div>
              } 
              content={
                <div className='right-table'>
                  <List currentConfig={sortedData['TOTAL_CONFIRMED_COUNTRIES'].data} flags={sortedData.FLAGS.data} />
                  <List currentConfig={sortedData['TOTAL_DEATH_COUNTRIES'].data} flags={sortedData.FLAGS.data} />
                  <List currentConfig={sortedData['TOTAL_RECOVERED_COUNTRIES'].data} flags={sortedData.FLAGS.data} />
                </div>
              } 
              links={<ButtonsTable />} /> */}
          </div>
        </main> : false
      }
      <Footer />
    </div>
  );
}

function mapStateToProps(newState) {
  return {
    dataTypes: newState.dataTypes
  }
}

export default connect(mapStateToProps)(App);
