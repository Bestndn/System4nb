import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import { TbRefresh } from "react-icons/tb";
import { TbFileSpreadsheet } from "react-icons/tb";
import { TbSettings } from "react-icons/tb";
import { GoFilePdf } from "react-icons/go";
import { IoMdImages } from "react-icons/io";

const actions = [
  { icon: <TbSettings size= {25}/>, name: 'Setting' },
  { icon: <TbFileSpreadsheet size= {25}/>, name: 'Save' },
  { icon: <TbRefresh size= {25}/>, name: 'Refresh' },
  { icon: <IoMdImages size= {25}/>, name: 'Image' },
  { icon: <GoFilePdf size= {25}/>, name: 'PDF' }
];

const actionSize = {
    color: '#D7A203'
  }

export default function OpenIconSpeedDial() {
  return (
    <Box sx={{ height: 500, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial openIcon example"
        sx={{ position: 'absolute', bottom: 16, right: 16, '& .MuiFab-primary': { backgroundColor: '#fff', color: '#D7A203','&:hover': {backgroundColor: '#eeeeee'} }}}
        icon={<SpeedDialIcon openIcon={<RemoveRoundedIcon/>} />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            sx= {actionSize}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
