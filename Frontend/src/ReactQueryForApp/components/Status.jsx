import React, { useState } from 'react'
import useStatus from '../query-hooks/useStatus';

export default function Status() {
    const status = useStatus();

  return (
    <>
        {status.isLoading && <p>Loading messagess...</p>}

        {status.isError && <p>Couldn't fetch messagess</p>}

        {status.isSuccess &&
<ol>
    {status.data.map(status =>
    <li key={status.id}>{status.text}</li>
        )}    
</ol>
}
</> 
  )
}
