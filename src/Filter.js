import React, { useEffect, useState } from 'react';
import { Checkbox } from 'primereact/checkbox';


export const Filter = () => {

  const [status, setStatus] = useState([]);

  const onStatuschange = (e) => {
      let selectedStatus = [...status];
      if(e.checked)
          selectedStatus.push(e.value);
      else
          selectedStatus.splice(selectedStatus.indexOf(e.value), 1);

      setStatus(selectedStatus);
  }


  return (
    <div className='checkbox-content'>
        <div className="col-12">
            <Checkbox inputId="cb1" value="Alive" onChange={onStatuschange} checked={status.includes('Alive')}></Checkbox>
            <label htmlFor="cb1" className="p-checkbox-label">Alive</label>
        </div>
        <div className="col-12">
            <Checkbox inputId="cb2" value="Dead" onChange={onStatuschange} checked={status.includes('Dead')}></Checkbox>
            <label htmlFor="cb2" className="p-checkbox-label">Dead</label>
        </div>
        <div className="col-12">
            <Checkbox inputId="cb3" value="Unknown" onChange={onStatuschange} checked={status.includes('Unknown')}></Checkbox>
            <label htmlFor="cb3" className="p-checkbox-label">Unknown</label>
        </div>
    </div>
);
}

export default Filter;