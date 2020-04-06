import React, {useState, useEffect} from 'react'
import DataTable from 'react-data-table-component';
import { get } from '../services/restService';

export default function Schedule () {

  let [data, setData] = useState([]);
  let [formattedData, setFormatted] = useState([]);
  let [form, setForm] = useState({});
  
  const handleChange = (data) => {
    setForm({...form, ...data})
  }

  useEffect(() => {
    get('schedule')
      .then(res => {
        setData(res);
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  useEffect(() => {
    let newData = data;

    if(form.port1)
      newData = data.filter(item => (item.port1+ '').toLowerCase().indexOf((form.port1+ '').toLowerCase()) !== -1);
    if(form.port2)
      newData = newData.filter(item => (item.port2+ '').toLowerCase().indexOf((form.port2+ '').toLowerCase()) !== -1);

    setFormatted(newData);
  }, [data, form])

  const columns = [
    {
      name: 'Name',
      selector: 'name',
      sortable: true,
    },
    {
      name: 'Text and Numbers',
      selector: 'text',
      sortable: true,
      right: true,
    },
    {
      name: 'ETD',
      selector: 'etd',
      sortable: true,
      right: true,
    },
    {
      name: 'PORT',
      selector: 'port1',
      sortable: true,
      right: true,
    },
    {
      name: 'ETA',
      selector: 'eta',
      sortable: true,
      right: true,
    },
    {
      name: 'PORT',
      selector: 'port2',
      sortable: true,
      right: true,
    },
    {
      name: 'ETD Male',
      selector: 'male',
      sortable: true,
      right: true,
    },
  ];

  return (
    <div>
      <div className="bg-white w-full flex flex-col items-center md:mt-32 mt-5">
        <div className="w-full h-32 bg-gray-300 flex justify-center items-center">
          <span className="md:text-4xl text-xl mt-5">SCHEDULE</span>
        </div>
        <div className="md:w-10/12 w-full bg-white my-10"  data-aos="zoom-in">
          <div className="mt-3 ml-0 flex items-center">
            <div class="bg-gray-200 flex items-center">
              <input
                placeholder="Country's"
                onChange={(e) => handleChange({port1: e.target.value})}
                className="pl-2 w-24 h-8 bg-gray-200"
              />
              <img style={{height: '24px'}} src={require('../assets/images/magnify.png')} alt="" />
            </div>
            <span className="ml-3 mr-3">To</span>
            {/* 
            <span className="ml-3 mr-3">Country:</span> */}
            <div class="bg-gray-200 flex items-center">
              <input
                placeholder="Country"
                onChange={(e) => handleChange({port2: e.target.value})}
                className="pl-2 w-24 h-8 bg-gray-200"
              />
              <img style={{height: '24px'}} src={require('../assets/images/magnify.png')} alt="" />
            </div>
          </div>
          <DataTable
            columns={columns}
            data={formattedData}
            striped
            highlightOnHover
            pagination
          />
        </div>
        <span className="md:text-lg text-md mt-5 pr-3 pl-3">PLS NOTE ABOVE SCHEDULE IS SUBJECT TO CHANGE WITHOUT PRIOR NOTICE</span>
      </div>
    </div>
  )
}