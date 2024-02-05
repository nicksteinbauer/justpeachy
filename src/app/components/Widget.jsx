import React from 'react'

import Script from 'next/script'

export default function Widget() {
  return (
    <>
        <div
            id="lodgify-search-bar"
            data-website-id="467772"
            data-language-code="en"
            data-search-page-url="https://nicholas-steinbauer.lodgify.comundefined"
            data-dates-check-in-label="Arrival"
            data-dates-check-out-label="Departure"
            data-guests-counter-label="Guests"
            data-guests-input-singular-label="{{NumberOfGuests}} guest"
            data-guests-input-plural-label="{{NumberOfGuests}} guests"
            data-location-input-label="Location"
            data-search-button-label="Search"
            data-new-tab="true"
        ></div>
        <Script src="https://app.lodgify.com/portable-search-bar/1.166.0/renderPortableSearchBar.js" />
    </>
  )
}



