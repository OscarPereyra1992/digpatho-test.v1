import Image from "next/image";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "./mt-components";

export function CardMain({ imageSrc, title, text, buttonText, buttonLink }) {
  return (
    <Card className="mt-6 w-96 h-full flex flex-col justify-between transition-shadow duration-300 hover:shadow-[0px_0px_5px_5px_#F6F5F2,0px_0px_5px_3px_#e649a0]">
      <CardBody className="flex flex-col items-center">
        <div className="flex items-center space-x-2">
          <Image src={imageSrc} width={24} height={24} alt={title} />
          <Typography variant="h5" color="blue-gray">
            {title}
          </Typography>
        </div>
        <Typography className="mt-4 text-center">
          {text}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0 mb-3 flex justify-center">
        <a href={buttonLink} className="inline-block">
          <Button size="sm" variant="text" className="flex items-center gap-2">
            {buttonText}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
}