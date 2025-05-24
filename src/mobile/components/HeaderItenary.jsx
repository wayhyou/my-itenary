import React from 'react'

import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

const HeaderItenary = ({ dateText }) => {
  return (
    <div>
        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
          {dateText}
        </Typography>
        <Divider sx={{ mb: 3 }} />
    </div>
  )
}

export default HeaderItenary