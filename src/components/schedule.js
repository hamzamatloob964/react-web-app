import React from 'react'
import DataTable from 'react-data-table-component';

export default function Schedule () {

  const data = [
    { id: 1, title: 'Conan the Barbarian', year: '1982' },
    { id: 1, title: 'Conan the Barbarian', year: '1982' },
    { id: 1, title: 'Conan the Barbarian', year: '1982' },
    { id: 1, title: 'Conan the Barbarian', year: '1982' },
    { id: 1, title: 'Conan the Barbarian', year: '1982' },
    { id: 1, title: 'Conan the Barbarian', year: '1982' },
    { id: 1, title: 'Conan the Barbarian', year: '1982' },
    { id: 1, title: 'Conan the Barbarian', year: '1982' },
    { id: 1, title: 'Conan the Barbarian', year: '1982' }
  ];
  const columns = [
    {
      name: 'Name',
      selector: 'title',
      sortable: true,
    },
    {
      name: 'Text and Numbers',
      selector: 'year',
      sortable: true,
      right: true,
    },
    {
      name: 'ETD',
      selector: 'year',
      sortable: true,
      right: true,
    },
    {
      name: 'PORT',
      selector: 'year',
      sortable: true,
      right: true,
    },
    {
      name: 'ETA',
      selector: 'year',
      sortable: true,
      right: true,
    },
    {
      name: 'PORT',
      selector: 'year',
      sortable: true,
      right: true,
    },
    {
      name: 'ETD Male',
      selector: 'year',
      sortable: true,
      right: true,
    },
  ];

  return (
    <div>
      <div className="bg-white w-full flex flex-col items-center md:mt-32 mt-5">
        <div className="w-full h-32 bg-gray-300 flex justify-center items-center">
          <span className="md:text-4xl text-xl">SCHEDULE</span>
        </div>
        <div className="md:w-10/12 w-full bg-white">
          <div className="mt-3 ml-3">
            <span className="mr-3 ">Country:</span>
            <input className="w-24 h-8 bg-gray-400"></input>
            <span className="ml-3 mr-3">To</span>
            <span className="ml-3 mr-3">Country:</span>
            <input className="w-24 h-8 bg-gray-400"></input>
          </div>
          <DataTable
            title="Google Sheets Data"
            columns={columns}
            data={data}
          />
        </div>
        <span className="md:text-lg text-md mt-5 pr-3 pl-3">PLS NOTE ABOVE SCHEDULE IS SUBJECT TO CHANGE WITHOUT PRIOR NOTICE</span>
      </div>
    </div>
  )
}