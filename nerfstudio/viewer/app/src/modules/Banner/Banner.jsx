import React from 'react';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import img from '../img/logo-dark.png';
import LandingModal from '../LandingModal';
import ViewportControlsModal from '../ViewportControlsModal';


function getParam(param_name) {
  // https://stackoverflow.com/questions/831030/how-to-get-get-request-parameters-in-javascript
  const params = new RegExp(
    `[?&]${encodeURIComponent(param_name)}=([^&]*)`,
  ).exec(window.location.href);
  if (params === null) {
    return undefined;
  }
  return decodeURIComponent(params[1]);
}

export default function Banner() {
  const dispatch = useDispatch();

  let open_modal = true;

  // possibly set the websocket url
  const websocket_url_from_argument = getParam('websocket_url');
  if (websocket_url_from_argument !== undefined) {
    open_modal = false;
    dispatch({
      type: 'write',
      path: 'websocketState/websocket_url',
      data: websocket_url_from_argument,
    });


  }



  return (
    <div className="banner">
      <LandingModal initial_state={open_modal} />

      <Button // button with view in ar icon
        className="banner-button"
        variant="outlined"
        startIcon={<ArrowBackIcon />}
        target="_blank"
        href="link not set yet"
        size="small"
      >
        back to scan select
      </Button>



      <ViewportControlsModal />

      <div className="banner-logo">
        <img
          style={{ height: 30, margin: 'auto' }}


          src= {img}

          alt="The favicon."
        />
      </div>
    </div>
  );
}
