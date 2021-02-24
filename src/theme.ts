import { createMuiTheme } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#990ae3',
        },
        secondary: {
            main: 'rgba(34,34,34,.04)',
            light: grey[100],
            dark: grey[300],
        },
    },
});

export default theme;
