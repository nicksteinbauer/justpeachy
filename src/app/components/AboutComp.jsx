import React from 'react'

import Guests from '../icons/Guests'
import Door from '../icons/Door'
import Queensizebeds2 from '../icons/Queensizebeds2'
import Bathroomlaundry from '../icons/Bathroomlaundry'
import Parking from '../icons/ParkingIcon'
import Internetoffice from '../icons/Internetoffice'
export default function AboutComp() {
  return (
    <div className="about">
        <div className="inside-lg">
            <h2 className="smHeight">About Just Peachy Marbleahead Ohio Cottage (Not in Lakeside)</h2>
            <h3>Vacation Home</h3>
            <ul className="mainPoints flex-sm">
                <li>
                    <Guests />
                    <span>7 Guests</span>
                </li>
                <li>
                    <Door />
                    <span>3 Bedrooms</span>
                </li>
                <li>
                    <Queensizebeds2 />
                    <span>4 Beds</span>
                </li>
                <li>
                    <Bathroomlaundry />
                    <span>2 Bathrooms</span>
                </li>
                <li>
                    <Parking />
                    <span>Parking</span>
                </li>
                <li>
                    <Internetoffice />
                    <span>WiFi</span>
                </li>
            </ul>
            <div>
                <p>Located outside of Lakeside but close to all that vacationland has to offer, you and your family will enjoy our Marblehead Peninsula home. Whether you came to fish, visit the Lake Erie islands, or simply relax, this centrally located home will be the perfect place to start making new memories. Nearby attractions... South Gates to Lakeside 700 yards Mazuriks Public Lake Access and Boat Launch 1.6 miles Kelleys Island Ferry 1 mile Marblehead Lighthouse State Park 1.5 miles Just Peachy is about an 1100 square ft. home on a large double lot. The attached garage is not part of the rental. The home has three bedrooms and two full bathrooms. See photos for additional details. There are two wooden decks on the house. The rear deck has a charcoal grill and a patio table and chairs. It is a perfect place to have a cookout and a glass of wine. Ample parking for cars, pickup trucks and boat trailer. I live about 10 minutes away, but I do have a regular job and my hours vary. I will do my best to talk, text or visit if you need assistance. A quiet dead end street in a residential neighborhood. Easy to find and close to rt. 163. This home is NOT inside the gates of Lakeside. This home is within walking or biking distance to the south gates of Lakeside, downtown Marblehead and the Kellleys Island ferry. We have ample parking for cars, trucks, and even boat trailers. Parking is on site and free. In regular beds Just Peachy sleeps 6. We also offer a rollaway bed if you need to push the capacity to 7. There is plenty of room the living area for the rollaway.</p>
            </div>
        </div>
    </div>
  )
}
