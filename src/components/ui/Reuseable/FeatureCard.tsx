



import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { IFeature } from '@/Interfaces';
import Image from "next/image";



interface ICardProps {
  feature: IFeature;
}

const FeatureCard = ({feature}:ICardProps) => {

  const { Price, blocks, button, image, title } = feature;
  console.log(feature)
  return (
    <div>
       <Card>
          
          <Image
            src={image}
            width={500}
          height={300}
          // fill
          objectFit="cover"
          className="rounded-t-xl relative"
          
          alt=""
        /> 
        <button className="absolute text-white font-semibold p-2 rounded-sm bg-orange-400 top-3 left-3">{button }</button>
        
          <CardContent>
          <h4 className="font-semibold">{ title}</h4>
          </CardContent>
          <CardFooter>
          <p className="flex items-center justify-between w-full">
            <span className="text-orange-500 font-bold ">{Price }</span>
            <span className="">{blocks }</span>
            </p>
          </CardFooter>
        </Card>
    
    </div>
  );
};

export default FeatureCard;

