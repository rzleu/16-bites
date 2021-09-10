import React from 'react';
import Dropdown from '../Dropdown';

function UploadSidebar(props) {
  const categoryOptions = [
    {
      key: 'Uncategorized',
      text: 'Uncategorized',
      value: 'Uncategorized',
    },
    {
      key: 'Uncategorized',
      text: 'Abstract',
      value: 'Abstract',
    },
    {
      key: 'Aerial',
      text: 'Aerial',
      value: 'Aerial',
    },
    {
      key: 'Animals',
      text: 'Animals',
      value: 'Animals',
    },
    {
      key: 'Black and White',
      text: 'Black and White',
      value: 'Black and White',
    },
  ];

  return (
    <div>
      <form>
        <label htmlFor='upload--title'>Title</label>
        <input type='text' id='upload--title' />

        <label htmlFor='upload--description'>Description</label>
        <input type='text' id='upload--description' />

        <label htmlFor='upload--location'>Location</label>
        <input type='text' id='upload--location' />

        <Dropdown list={categoryOptions} title='Categories' />
      </form>
    </div>
  );
}

export default UploadSidebar;
