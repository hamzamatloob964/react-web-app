import React from 'react'
import DataTable from 'react-data-table-component';

export default function Schedule () {

  const data = [
    { id: 1, title: 'Conan the Barbarian', year: '1982' },
    { id: 2, title: 'Conan the Barbarian', year: '1982' },
    { id: 3, title: 'Conan the Barbarian', year: '1982' },
    { id: 4, title: 'Conan the Barbarian', year: '1982' },
    { id: 5, title: 'Conan the Barbarian', year: '1982' },
    { id: 6, title: 'Conan the Barbarian', year: '1982' },
    { id: 7, title: 'Conan the Barbarian', year: '1982' },
    { id: 8, title: 'Conan the Barbarian', year: '1982' },
    { id: 9, title: 'Conan the Barbarian', year: '1982' }
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
      <div className="bg-white w-full flex flex-col items-center md:mt-32 mt-5 pt-0 md:pt-10">
        <div className="w-full md:h-32 bg-gray-300 flex justify-center items-center mt-2">
          <span className="md:text-4xl text-xl pt-5 pb-5 md:py-0 md:pb-0 ">SCHEDULE</span>
        </div>
        <div className="md:w-10/12 w-full bg-white">
          <div className="mt-3 ml-3 flex md:flex-row flex-col mb-3 md:mb-0">
            <span className="mr-3 ">Country:</span>
            <input className="w-24 h-8 bg-gray-400 p-2"></input>
            <span className="ml-3 mr-3">To</span>
            <span className="ml-3 mr-3">Country:</span>
            <input className="w-24 h-8 bg-gray-400 p-2"></input>
          </div>
          <DataTable
            key="dt1"
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