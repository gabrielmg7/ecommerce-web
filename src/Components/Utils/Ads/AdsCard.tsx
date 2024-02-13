/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/prefer-as-const */
import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { IAdsData } from '../../../Types/restAPI/IAdsData';


const cardStyle = {
    fontSize: '13px',
    WebkitFontSmoothing: 'antialiased',
    borderRadius: '4px',
    boxShadow: '0 1px 1px 0 rgba(0,0,0,.1)',
    display: 'flex',
    height: '250px',
    overflow: 'hidden',
    textDecoration: 'none',
    justifyContent: 'space-between',
    width: '50%',
    maxWidth: '584px',
    marginBottom: '0',
};

const cardContentStyle = {
    flex: '1',
    width: '50%',
    display: 'flex',
    flexDirection: 'column' as 'column',
    justifyContent: 'center' as 'center',
    alignItems: 'flex-start' as 'flex-start'
};

const AdsCard: React.FC<IAdsData> = ({ id, title, description, image, link }) => {

    return (
        <Card style={cardStyle}>
          <CardContent style={cardContentStyle}>
            <Typography variant="h6">{title}</Typography>
            {description.map((desc, index) => (
              <Typography key={index} mt={1} variant="body1" role="Adversiting Text Bold">
                {desc}
              </Typography>
            ))}
            <Button
              role="Small Button"
              href={link}
              variant="contained"
              size="small"
              aria-label={`${title}, Ver mais`}
            >
              Ver mais
            </Button>
          </CardContent>
          <CardMedia
            role='Adversiting Image'
            component="img"
            decoding="async"
            alt={title}
            style={{ flex: '1', width: '50%' }}
            src={image}
          />
        </Card>
      );
};

export default AdsCard;