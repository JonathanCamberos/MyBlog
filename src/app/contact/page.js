import ContactForm from "../../components/Contact/ContactForm";
import LottieAnimation from "../../components/Contact/LottieAnimation";
import siteMetadata from '../../utils/siteMetaDataFile'


/* we dont need the generateMetadata func bc this page is not dynamic */

export const metadata = {
  title: "Contact Me",
  description: `Contact me through this form or email me at ${siteMetadata.email}`
}

export default function Contact(){
    return (
        <section className="w-full h-auto md:h-[100vh] pt-4 border-t-2 border-b-2 border-solid border-dark dark:border-light flex  flex-col md:flex-row items-center justify-center text-dark dark:text-light">
          <div className="inline-block w-full sm:w-4/5 md:w-2/5 h-full md:border-r-2 border-solid border-dark dark:border-light">
            <LottieAnimation />
          </div>
          <div className="w-full  md:w-3/5 flex flex-col items-start justify-center px-5 xs:px-10 md:px-16 pb-8">
            <h2 className="font-bold capitalize  text-xl xs:text-3xl sm:text-4xl">
              Let's Connect!
            </h2>
            <ContactForm />
          </div>
        </section>
      );
}