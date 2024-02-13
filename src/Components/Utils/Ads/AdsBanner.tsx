import AdsCard from './AdsCard';
import { IAdsData } from '../../../Types/restAPI/IAdsData';

interface AdsBannerProps {
  data: IAdsData[];
}

const AdsBanner: React.FC<AdsBannerProps> = ({ data }) => {
  return (
    <>
      {data.map((item, index) => (
        <AdsCard 
          key={index}
          title={item.title}
          description={item.description}
          image={item.image}
        />
      ))}
    </>
  );
};

export default AdsBanner;