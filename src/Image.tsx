import { useEffect, useState } from 'react';

type Props = { url: string };

const Image = ({ url }: Props) => {
  const imagePromise = import(url);
  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    imagePromise.then((module) => {
      setImage(module.default);
    });
  }, [imagePromise]);

  return <div>{image && <img src={image} alt="" />}</div>;
};

export default Image;
