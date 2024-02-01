import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export const GradientTitle = () => {
    return (
        <Box
            sx={{
                backgroundImage: 'linear-gradient(to right, #00D7DF, #003F8A, #006DF0, #006DF0, #00D7DF,#006DF0)',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                display: 'inline-block',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            }}
        >
            <Typography variant="h5">OnlineShopping</Typography>
        </Box>
    );
};