import { createTheme } from '@mui/material/styles';

export const appTheme = createTheme({
  palette: {
    primary: { main: '#EEEEEE' },
    secondary: { main: '#7680FF' },
    text: {
      primary: '#EEEEEE',
      secondary: '#7680FF',
      disabled: '#555555',
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#222831',
        },
      },
    },
    MuiIcon: {
      styleOverrides: {
        root: {
          color: '#eeeeee',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& label': {
            color: '#999999',
          },
          '& label.Mui-focused': {
            color: '#7680FF',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#555555',
            },
            '&:hover fieldset': {
              borderColor: '#dddddd',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#7680FF',
            },
          },
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          '&.Mui-disabled': {
            color: '#999999',
            backgroundColor: '#393e46',
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: '#eeeeee',
          backgroundColor: '#393e46',
          '&:hover': {
            color: '#7680FF',
            backgroundColor: '#555555',
          },
        },
      },
    },

    MuiTab: {
      styleOverrides: {
        root: {
          fontSize: '.8rem',
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: '#555555',
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: '#393e46',
          '&:hover': {
            backgroundColor: '#555555',
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          '&:before': {
            borderBottom: '2px solid #555555',
          },
          '&:after': {
            borderBottom: '2px solid #7680FF',
          },
        },
      },
    },
    MuiToggleButtonGroup: {
      styleOverrides: {
        root: {
          color: '#eeeeee',
          backgroundColor: '#393e46',
          '&.Mui-disabled': {
            color: '#999999',
            backgroundColor: '#393e46',
          },
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          color: '#eeeeee',
          backgroundColor: 'FFD369',
          '&.Mui-selected': {
            color: '#222831',
            backgroundColor: '#7680FF',
            ':hover': {
              backgroundColor: '#7680FF',
            },
          },
          '&.Mui-disabled': {
            color: '#999999',
            backgroundColor: '#393e46',
          },
        },
      },
    },
    MuiList: {
      styleOverrides: {
        padding: {
          paddingTop: 4,
          paddingBottom: 4,
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          '& .MuiAccordionSummary-content': {
            margin: '0px',
          },
          '& .MuiAccordionSummary-content.Mui-expanded': {
            margin: '0px',
          },
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          paddingTop: '4px',
          paddingBottom: '8px',
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        icon: {
          color: '#eeeeee',
        },
      },
    },
  },
});
