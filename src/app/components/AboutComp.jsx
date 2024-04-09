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
                <p>Escape to our charming Marblehead Peninsula home, conveniently situated near Lakeside and surrounded by the allure of vacationland. Whether you're here to reel in big catches, explore the Lake Erie islands, or simply unwind, our centrally located cottage is the ideal starting point for creating cherished memories.</p>
                <p>Within close proximity, you'll find a myriad of attractions to delight every member of the family:</p>
                <ul className="text">
                    <li>South Gates to Lakeside: 700 yards</li>
                    <li>Mazuriks Public Lake Access and Boat Launch: 1.6 miles</li>
                    <li>Kelleys Island Ferry: 1 mile</li>
                    <li>Marblehead Lighthouse State Park: 1.5 miles</li>
                </ul>
                <p>Our 1100 square ft. home, "Just Peachy," rests on a spacious double lot with two wooden decks perfect for outdoor enjoyment. The rear deck features a Weber propane grill and ample seating, ideal for alfresco dining and relaxation.</p>
                <p>Ample on-site parking, including space for cars, pickup trucks, and boat trailers, ensures convenience throughout your stay. While I'm located just 10 minutes away, please feel free to reach out if you require any assistance, although my availability may vary due to my regular job commitments.</p>
                <p>Nestled on a quiet dead-end street within a residential neighborhood, our home offers easy access to Route 163 and is within walking or biking distance to Lakeside, downtown Marblehead, and the Kelleys Island ferry.</p>
                <p>"Just Peachy" comfortably sleeps 6 in regular beds, with the option to accommodate an additional guest with a rollaway bed, providing flexibility for larger groups.</p>
            </div>
        </div>
    </div>
  )
}
