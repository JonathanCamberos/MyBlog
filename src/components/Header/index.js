import React from 'react'
import Logo from './Logo'
import Link from 'next/link'
import { GithubIcon, LinkedInIcon, SunIcon } from '../Icons'


/*
  Working with "flexbox"
  main axis:  defined by 'flex-direction' property
  cross axis: perpendicular to main axis
        
   main axis: four possible values 
        row / row-reverse,        left to right, and right to left
        column / column-reverse,  up to down, and down to up  (?? not sure on which order) 

   cross axis: perpendicular to main axis 
        
    quick-read:
    https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox
*/

const Header = () => {
  return (
    /*  w-full            : | Sizing  : Width   | -> [width: 100%] setting the width of an element                      [ex: w-9/12]
        p-4               : | Spacing : Padding | -> control element's padding (times 4: p-4 => p-16)                   [ex: p-0]
        px-5              : | Spacing : Padding | -> overides overall padding (p-4 => px-10) (times 4: px-10 => px-40)  [ex: py-10]
        flex              : | Layout  : Display | -> utility to create a block-level flex container                     [ex: flex for parent class]
        
        items-center      : | Flexbox & Grid : Align Items     | -> 
                                    must be used with 'flex'
                                    center top to bottom                      [ex: items-start]
                                    aligns to center of container’s cross axis
        
        justify-between   : | Flexbox & Grid : Justify Content | -> 
                                    must be used with 'flex'
                                    center left to right                      [ex: justify-start]
                                    aligns to center of container’s main axis:                
    */
    <header className="w-full p-4 px-5 flex items-center justify-between">
        <Logo />

        {/* 
            w-max        : | Sizing  : Width   | -> [width: max-content]
            py-3         : | Spacing : Padding | ->
            px-8         : | Spacing : Padding | -> 
            border       : | Borders : Border Width | -> [border-width: 1px] control width of element's borders
            border-solid : | Borders : Border Style | -> [border-style: solid] control style of element's borders
            border-dark  : border style
            rounded-full : | Borders : Border Radius | -> [border-radius: 9999px]  control border radius of element
            font-medium  : | Typography : Font Weight | -> [font-weight: 500] controlling font weight of an element
            capitalize   : | Typography : Text Transform | -> [text-transform: capitalize] control transformation of text.
            
            items-center : | Flexbox & Grid : Align Items | -> [align-items: center] align items based on cross-axis
            
            hidden       : [ Layout : Display]  -> [display: none] remove from the page layout     [ex: flex, inline]
        */}
        <nav className=" w-max py-3 px-8 border border-solid border-dark rounded-full font-medium capitalize items-center hidden sm:flex
        fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50">
            <Link href="/" className="mr-2">Home</Link>
            <Link href="/about" className="mx-2">About</Link>
            <Link href="/contact" className="mr-2">Contact</Link>
            <button>
              <SunIcon />
            </button>
        </nav>

        <div>
            {/* hover: allows for resize ui feautre*/}
            <a href="http://" className="inline-block w-6 h-6 mr-4">
              <LinkedInIcon className="hover:scale-125 transition-all ease duration-200"/>
            </a>
            <a href="http://" className="inline-block w-6 h-6 mr-4">
              <GithubIcon className="hover:scale-125 transition-all ease duration-200"/>
            </a>

        </div>
    </header>
  )
}

export default Header