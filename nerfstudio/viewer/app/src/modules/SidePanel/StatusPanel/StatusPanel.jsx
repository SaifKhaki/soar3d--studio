import * as React from 'react';

import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';


export default function StatusPanel() {
  const dispatch = useDispatch();
  const isTraining = useSelector((state) => state.renderingState.isTraining);
  const isWebsocketConnected = useSelector(
    (state) => state.websocketState.isConnected,
  );
  const handlePlayChange = () => {
    dispatch({
      type: 'write',
      path: 'renderingState/isTraining',
      data: !isTraining,
    });
  }

  const is_training_text = 'Options';

  const [toggleState, setToggleState] = React.useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };


  return (
    <div className="StatusPanel">
      <div className="StatusPanel-play-button">
        <Button
          className="StatusPanel-play-button"
          variant="contained"
          color="secondary"
          onClick={handlePlayChange}
          disabled={!isWebsocketConnected}
        >
          {is_training_text}
        </Button>
      </div>
      <div className="StatusPanel-hide-scene-button">
        <Button
            className="StatusPanel-hide-scene-button"

            onClick={() => {
            }}
            style={{ textTransform: 'none' }}
        >
        CENTER CAMERA
      </Button>
    </div>

      <div className="bloc-tabs">
        <Button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
          variant="outlined"

        >
          Viewer Instructions
        </Button>
        <Button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
          variant="outlined"
        >
          Scan Details
        </Button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >


          <p>
              Viewer Instructions
             <li>Scan Details</li>
              <li>Name of the Scan & Unique ID#</li>
              <li>Location of the scan</li>
              <li>Who requested it</li>
              <li>Date is was fulfilled</li>
              <li>who collected the scan</li>
              <li>Phone type</li>
              <li>Size of the file</li>
          </p>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >

          <p>
              <li>Move within the model:</li>
              <li>Use WASD To pan/move camera: </li>
              <li>Click and Drag Viewer</li>
          </p>
        </div>
      </div>
    </div>
  );
}
