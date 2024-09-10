import { createTheme } from '@mui/material/styles';

// Création du thème Material-UI basé sur Sketchy de Bootswatch
const theme = createTheme({
  palette: {
    primary: {
      main: '#333', // Correspond à $primary: $gray-800;
    },
    secondary: {
      main: '#555', // Correspond à $secondary: $gray-700;
    },
    success: {
      main: '#28a745', // Correspond à $success: $green;
    },
    info: {
      main: '#17a2b8', // Correspond à $info: $cyan;
    },
    warning: {
      main: '#ffc107', // Correspond à $warning: $yellow;
    },
    danger: {
      main: '#dc3545', // Correspond à $danger: $red;
    },
    light: {
      main: '#fff', // Correspond à $light: $white;
    },
    dark: {
      main: '#555', // Correspond à $dark: $gray-700;
    },
    text: {
      primary: '#333', // $gray-800
      secondary: '#555', // $gray-700
    },
    background: {
      default: '#f7f7f9', // $gray-200
      paper: '#fff', // $white
    },
  },
  typography: {
    fontFamily: 'Neucha, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif', // $font-family-sans-serif
    fontWeightRegular: 700, // $font-weight-base
    h1: {
      fontFamily: '"Cabin Sketch", cursive', // $headings-font-family
    },
    h2: {
      fontFamily: '"Cabin Sketch", cursive',
    },
    h3: {
      fontFamily: '"Cabin Sketch", cursive',
    },
    h4: {
      fontFamily: '"Cabin Sketch", cursive',
    },
    h5: {
      fontFamily: '"Cabin Sketch", cursive',
    },
    h6: {
      fontFamily: '"Cabin Sketch", cursive',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderWidth: '2px', // Correspond à $border-width
          borderRadius: '255px 25px 225px 25px / 25px 225px 25px 255px', // Correspond à $border-radius
          textTransform: 'none', // Disable uppercase transformation
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderColor: '#333', // $gray-800
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderWidth: '2px', // Correspond à $card-border-width
          borderColor: '#333', // Correspond à $card-border-color
        },
      },
    },
    MuiPopover: {
      styleOverrides: {
        paper: {
          borderColor: '#333', // Correspond à $popover-border-color
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          borderColor: '#333', // Correspond à $input-border-color
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          borderColor: '#333', // Correspond à $list-group-border-color
        },
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          borderColor: '#333', // Correspond à $pagination-border-color
          '&:hover': {
            backgroundColor: '#333', // Correspond à $pagination-hover-bg
            color: '#fff', // Correspond à $pagination-hover-color
          },
        },
      },
    },
  },
});

export default theme;
