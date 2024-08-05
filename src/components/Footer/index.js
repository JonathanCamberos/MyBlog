"use client"
import React from 'react'
import { useForm } from 'react-hook-form'
import { GithubIcon, LinkedInIcon, SunIcon } from '../Icons'
import Link from 'next/link'
import siteMetadata from '../../utils/siteMetaDataFile'

const Footer = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data);
    console.log(errors);

    const openInNewTab = (url) => {
      window.open(url, "_blank", "noreferrer");
    };

  return (
    /* ##### footer component #####
    
    */
    <footer className="mt-16 rounded-2xl bg-dark m-10 flex flex-col items-center text-light">    

        {/* ##### The Foots Foot ##### */}
        <div className="w-full  relative font-medium border-t border-solid border-light py-6 px-8 flex  flex-col md:flex-row items-center justify-between">
          
          <span className="text-center">
            <div className="flex items-center">
                JC :)
            </div>
          </span>

          <Link href="/sitemap.xml" className="text-center underline ml:-4  my-4 md:my-0">
            sitemap.xml
          </Link>
           Thanks for visiting!

          <div>
            <button
                role="link"
                onClick={() => openInNewTab(`${siteMetadata.linkedin}`)}
                className="inline-block w-6 h-6 mr-4"
              >
                <LinkedInIcon className="hover:scale-125 transition-all ease duration-200"/>
              </button>

              <button
                role="link"
                onClick={() => openInNewTab(`${siteMetadata.github}`)}
                className="inline-block w-6 h-6 mr-4"
              >
                <GithubIcon className="hover:scale-125 transition-all ease duration-200 dark:fill-light"/>
              </button>
          </div>

        </div>
        
    </footer>
  )
}

export default Footer