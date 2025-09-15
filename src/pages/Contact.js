import React from "react";
import { Helmet } from "react-helmet-async";

import ContactForm from "../components/ContactForm";

import contact from "../images/contact.png";

const Contact = () => {
  return (
    <>
      <div className="">
        <Helmet>
          <title>
            Contact Cinema Factory Academy | Top Film Academy in Chennai, India
          </title>
          <meta
            name="description"
            content="Contact Cinema Factory Academy for admissions, courses, and career guidance in acting, direction, cinematography, VFX, and virtual production."
          />
          <link
            rel="canonical"
            href="https://cinemafactoryacademy.com/contact"
          />

          <meta
            name="robots"
            content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
          />

          <meta
            property="og:title"
            content="Contact Cinema Factory Academy | Top Film Academy in Chennai, India"
          />
          <meta
            property="og:description"
            content="Reach out to Cinema Factory Academy for admissions, course details, and career guidance in film and media education."
          />
          <meta
            property="og:url"
            content="https://cinemafactoryacademy.com/contact"
          />
          <meta
            property="og:image"
            content="https://cinemafactoryacademy.com/images/contact-og-image.jpg"
          />
          <meta property="og:type" content="website" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Contact Cinema Factory Academy | Top Film Academy in Chennai, India"
          />
          <meta
            name="twitter:description"
            content="Get in touch with Cinema Factory Academy for admissions, courses, and career guidance in acting, direction, cinematography, VFX, and more."
          />
          <meta
            name="twitter:image"
            content="https://cinemafactoryacademy.com/images/contact-og-image.jpg"
          />
          <meta name="twitter:site" content="@CF_academy2024" />

          <script type="application/ld+json">
            {`
    {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact Cinema Factory Academy",
      "description": "Get in touch with Cinema Factory Academy for admissions, course details, and career guidance in film and media education.",
      "url": "https://cinemafactoryacademy.com/contact",
      "publisher": {
        "@type": "Organization",
        "name": "Cinema Factory Academy",
        "url": "https://cinemafactoryacademy.com",
        "logo": "https://cinemafactoryacademy.com/static/media/cf_logo.66072b4877b8b14aa47a.webp",
        "sameAs": [
          "https://www.facebook.com/profile.php?id=61559751436051",
          "https://www.instagram.com/cinema_factory_academy/",
          "https://www.linkedin.com/in/cinema-factory-academy/",
          "https://www.youtube.com/channel/@CinemafactoryFilmAcademy"
        ]
      },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+919884683888",
          "contactType": "customer support",
          "areaServed": "IN",
          "availableLanguage": "en"
        }
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Subbarayan Nagar, Teynampet",
        "addressLocality": "Chennai",
        "addressRegion": "TN",
        "postalCode": "600018",
        "addressCountry": "IN"
      }
    }
    `}
          </script>
        </Helmet>

        {/* contact form */}

        <section>
          <div className="pt-10 md:pt-20 pb-10 md:pb-20 ">
            <div className="mb-6 md:mb-16">
              <h1 className="text-center font-bold text-[18px] md:text-[28px] uppercase ">
                Learn, Explore & Grow with Us!
              </h1>
            </div>

            <div className="w-full px-4 md:w-[80%] mx-auto flex flex-col gap-y-10 md:flex-row items-center">
              <div className="w-full md:w-[50%]">
                <div>
                  <img
                    src={contact}
                    alt="contact"
                    title="cinema factory academy"
                    loading="lazy"
                    fetchpriority="auto"
                  />
                </div>
              </div>

              <div className="w-full md:w-[50%]">
                <div className=" md:px-16">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
