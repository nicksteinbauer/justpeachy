// components/ImageGallery.js
import Image from 'next/image';

const ImageGallery = ({ images }) => {
  return (
    <div className="auto-grid-sm">
      {images.map((image, index) => (
        <div key={index} className="relative autoHeight">
          <Image
            src={image}
            alt={`JustPeachy Gallery ${index + 1}`}
            height={300}
            width={500}
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;