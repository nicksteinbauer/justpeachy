"use client";

import { useState } from "react"

import UpRight from "./UpRight";

import ImageGallery from "./ImageGallery";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";

import NextJsImage from "./NextJsImage";

import image1 from "public/gallery/JustyPeachy1.jpg";
import image2 from "public/gallery/JustyPeachy2.jpg";
import image3 from "public/gallery/JustyPeachy3.jpg";
import image4 from "public/gallery/JustyPeachy4.jpg";
import image5 from "public/gallery/JustyPeachy5.jpg";
import image6 from "public/gallery/JustyPeachy6.jpg";
import image7 from "public/gallery/JustyPeachy7.jpg";
import image8 from "public/gallery/JustyPeachy8.jpg";
import image9 from "public/gallery/JustyPeachy9.jpg";
import image10 from "public/gallery/JustyPeachy10.jpg";
import image11 from "public/gallery/JustyPeachy11.jpg";
import image12 from "public/gallery/JustyPeachy12.jpg";
import image13 from "public/gallery/JustyPeachy13.jpg";
import image14 from "public/gallery/JustyPeachy14.jpg";
import image15 from "public/gallery/JustyPeachy15.jpg";
import image16 from "public/gallery/JustyPeachy16.jpg";
import image17 from "public/gallery/JustyPeachy17.jpg";
import image18 from "public/gallery/JustyPeachy18.jpg";
import image19 from "public/gallery/JustyPeachy19.jpg";
import image20 from "public/gallery/JustyPeachy20.jpg";
import image21 from "public/gallery/JustyPeachy21.jpg";
import image22 from "public/gallery/JustyPeachy22.jpg";
import image23 from "public/gallery/JustyPeachy23.jpg";
import image24 from "public/gallery/JustyPeachy24.jpg";
import image25 from "public/gallery/JustyPeachy25.jpg";
import image26 from "public/gallery/JustyPeachy26.jpg";
import image27 from "public/gallery/JustyPeachy27.jpg";
import image28 from "public/gallery/JustyPeachy28.jpg";


const images = [
  '/gallery/thumbs/JustyPeachy1.jpg',
  '/gallery/thumbs/JustyPeachy2.jpg',
  '/gallery/thumbs/JustyPeachy3.jpg',
  '/gallery/thumbs/JustyPeachy4.jpg',
  '/gallery/thumbs/JustyPeachy5.jpg',
  '/gallery/thumbs/JustyPeachy6.jpg',
  // Add more image paths as needed
];

const SmGallery = () => {

  const [open, setOpen] = useState(false);

  return (
    <div className="gallery fixyMain">
      <div className="inside-lg">
        <h2>Gallery <span onClick={() => setOpen(true)}><UpRight/></span></h2>
        <div onClick={() => setOpen(true)}><ImageGallery images={images} /></div>
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          plugins={[Captions]}
          //slides={[image1, image2, image3, image4, image5, image6, image7, image8, image9, image10]}
          slides={[
            {
              ...image1,
              description: "Just Peachy Cottage",
            },
            {
              ...image2,
              description: "New Back Deck 10/2024! Not shown is the patio set, Adirondack chairs, or Weber grill.",
            },
            {
              ...image3,
              description: "Living Room.",
            },
            {
              ...image4,
              description: "Living Room.",
            },
            {
              ...image5,
              description: "Fire TV with CD/DVD player",
            },
            {
              ...image6,
              description: "A few games and puzzles for rainy days.",
            },
            {
              ...image7,
              description: "Kitchen",
            },
            {
              ...image8,
              description: "Kitchen",
            },
            {
              ...image9,
              description: "Fully Stocked",
            },
            {
              ...image10,
              description: "Pots, Pans, etc.",
            },
            {
              ...image11,
              description: "Plenty of options for serving your favorite beverage",
            },
            {
              ...image12,
              description: "Full size refrigerator and microwave",
            },
            {
              ...image13,
              description: "Cutlery",
            },
            {
              ...image14,
              description: "Bring your favorite grind or k cups!",
            },
            {
              ...image15,
              description: "Bring your favorite grind or k cups!",
            },
            {
              ...image16,
              description: "Master suite with attached private bathroom",
            },
            {
              ...image17,
              description: "Master Bedroom",
            },
            {
              ...image18,
              description: "Master Bath attached to Master suite",
            },
            {
              ...image19,
              description: "Bedroom 2 with queen bed",
            },
            {
              ...image20,
              description: "Bedroom 2",
            },
            {
              ...image21,
              description: "2nd bathroom with tub/shower",
            },
            {
              ...image22,
              description: "Dining Area",
            },
            {
              ...image23,
              description: "Bedroom 3 with two twin beds",
            },
            {
              ...image24,
              description: "Rollaway Bed (if needed) for 7th guest",
            },
            {
              ...image25,
              description: "Dining Area",
            },
            {
              ...image26,
              description: "Ample parking (garage not included in rental)",
            },
            {
              ...image27,
              description: "Full size washer and dryer",
            },
            {
              ...image28,
              description: "Available year round",
            },
          ]}
          render={{ slide: NextJsImage }}
        />
      </div>
    </div>
  );
};

export default SmGallery;
