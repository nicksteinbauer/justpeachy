import React from 'react'

import Parking from '../icons/ParkingIcon'
import Bathroomlaundry from '../icons/Bathroomlaundry'
import Heatingcooling from '../icons/Heatingcooling'
import Entertainment from '../icons/Entertainment'
import Internetoffice from '../icons/Internetoffice'
import Kitchendining from '../icons/Kitchendining'
import Homesafety from '../icons/Homesafety'

import Bedlinen from '../icons/Bedlinen'
import Queensizebeds2 from '../icons/Queensizebeds2'
import Singlebeds2 from '../icons/Singlebeds2'
import Checkin from '../icons/Checkin'
import Checkout from '../icons/Checkout'

export default function Amenities() {
  return (
    <div className="items">
    
      <div className="amenities fixyMain">
        <div className="inside-lg">
          <h3>Amenities</h3>
          <div className="auto-grid-sm">
            <div className='parkingFacilities'>
              <div className='always-flex svgHolder'><h4>Parking and facilities</h4><Parking /></div>
              <p>Parking included</p>
            </div>
            <div className='bathroomLaundry'>
              <div className='always-flex svgHolder'><h4>Bathroom and laundry</h4><Bathroomlaundry /></div>
              <p>Bed linen, Hair dryer, Clothes dryer, Essentials, Iron & Board , Washing machine</p>
            </div>
            <div className='heatingCooling'>
              <div className='always-flex svgHolder'><h4>Heating and cooling</h4><Heatingcooling /></div>
              <p>Air conditioning , Heating available</p>
            </div>
            <div className='entertainment'>
              <div className='always-flex svgHolder'><h4>Entertainment</h4><Entertainment /></div>
              <p>TV (Antenna)</p>
            </div>
            <div className='internetOffice'>
              <div className='always-flex svgHolder'><h4>Internet and office</h4><Internetoffice /></div>
              <p>Wireless Broadband Internet</p>
            </div>
            <div className='kitchenDining'>
              <div className='always-flex svgHolder'><h4>Kitchen and dining</h4><Kitchendining /></div>
              <p>Coffee machine, Cooking utensils, Kitchen stove, Microwave, Oven , Refrigerator</p>
            </div>
            <div className='homeSafety'>
              <div className='always-flex svgHolder'><h4>Home safety</h4><Homesafety /></div>
              <p>Carbon Monoxide Detector, Fire Extinguisher, First aid kit, Smoke Detector</p>
            </div>
          </div>
        </div>
      </div>

      <div className="sleepingArrangements fixyMain">
        <div className="inside-lg">
          <h3>Sleeping Arrangements</h3>
          <div className="flex-sm">
            <div className="bedLinen">
              <Bedlinen />
              <h4>Bed Linen</h4>
            </div>
            <div className="queenBed">
              <Queensizebeds2 />
              <h4>2 Queen size beds</h4>
            </div>
            <div className="singleBed">
              <Singlebeds2 />
              <h4>2 Single beds</h4>
            </div>
          </div>
        </div>
      </div>      

      <div className="houseRules fixyMain">
        <div className="inside-lg">
          <h3>House Rules</h3>
          <div>
            <div className="checkIn svgHolder always-flex">
              <Checkin />
              <h4>Check-In: 4:00pm</h4>
            </div>
            <div className="checkOut svgHolder always-flex">
              <Checkout />
              <h4>Check-Out: 10:00am</h4>
            </div>
          </div>
        </div>
      </div>      

      <div className="policyNotes fixyMain">
        <div className="inside-lg">
          <h3>Policy and notes</h3>
          <div className="auto-grid-sm">
            <div>
              <h4>Payment Schedule</h4>
              <p>50% due at time of booking.</p><p>Remaining balance due 7 days before arrival.</p>
            </div>
            <div>
              <h4>Cancellation Policy</h4>
              <p>All paid prepayments are non-refundable.</p>
            </div>
            <div>
              <h4>Security Policy</h4>
              <p>No security deposit is due.</p>
            </div>
          </div>
        </div>
      </div>    

    </div>
  )
}
