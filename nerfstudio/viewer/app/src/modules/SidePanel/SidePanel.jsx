/* eslint-disable react/jsx-props-no-spreading */

import * as React from 'react';
import * as THREE from 'three';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';


// import Tab from '@mui/material/Tab';
// import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
// import { ImportExportRounded } from '@mui/icons-material/';
import { useSelector } from 'react-redux';

import StatusPanel from './StatusPanel';



import ExportPanel from './ExportPanel';
// import {ImportExportRounded} from "@mui/icons-material";

export const snap_to_camera = (sceneTree, camera, matrix) => {
  const mat = new THREE.Matrix4();
  mat.fromArray(matrix.elements);
  mat.decompose(camera.position, camera.quaternion, camera.scale);
  const unit = new THREE.Vector3(0, 0, -1);
  const viewDirection = unit.applyMatrix4(mat);
  sceneTree.metadata.camera_controls.setLookAt(
    camera.position.x,
    camera.position.y,
    camera.position.z,
    viewDirection.x,
    viewDirection.y,
    viewDirection.z,
  );
};

interface TabPanelProps {
  children: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...other}
    >
      <Box sx={{ p: 3, padding: 0 }}>
        <Typography component="div">{children}</Typography>
      </Box>
    </div>
  );
}
// a11yProps
// function a11yProps (index: number) {
  // return {
  //  id: `simple-tab-${index}`,
  //  'aria-controls': `simple-tabpanel-${index}`,
 // };
// }

interface BasicTabsProps {
  sceneTree: object;
}

export function BasicTabs(props: BasicTabsProps) {
  const sceneTree = props.sceneTree;

  const [value, setValue] = React.useState(3);
  const [showExportBox] = React.useState(false);

   // const handleChange = (event: React.SyntheticEvent, newValue: number) => {
     //   setValue(newValue);
       // setShowExportBox(newValue === 3);
   // };
  const camera_choice = useSelector(
    (state) => state.renderingState.camera_choice,
  );

   React.useEffect(() => {
    if (camera_choice === 'Render Camera') {
      setValue(3);
    }
  }, [camera_choice]);

  return (
    <div>
      <StatusPanel sceneTree={sceneTree} />
      <Divider />
      <Box sx={{ width: '100%' }}>


        <TabPanel value={value} index={3}>
          <ExportPanel sceneTree={sceneTree} showExportBox={showExportBox} />
        </TabPanel>
      </Box>
    </div>
  );
}