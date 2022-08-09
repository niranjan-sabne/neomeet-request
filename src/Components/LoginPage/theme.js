import { createTheme } from '@mui/material/styles';

let theme = createTheme({
   MuiTextField: {
      overrides: {
         root: {
            height: '0.7rem',
         },
      },
   },
});

export default theme;
