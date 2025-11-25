import { FacebookIcon, GithubIcon, InstagramIcon, LinkedinIcon, XIcon, YoutubeIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Textarea } from "../../../../components/ui/TextArea"
import FadeInView from "../../../../components/ui/FadeInView";


const contactInfo = [
  // {
  //   label: "Email:",
  //   value: "Hello@salespro.com",
  // },
  {
    label: "Phone:",
    value: "+16469313860",
  },
  // {
  //   label: "Address:",
  //   value: "123 Innovation Drive, Suite 400, Tech City",
  // },
];

const socialIcons = [
  { 
    Icon: InstagramIcon,
    key: "instagram",
    url: "https://www.instagram.com/salesproelite?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
  },
  { 
    Icon: LinkedinIcon,     // make sure you imported this: import { LinkedinIcon } from "lucide-react";
    key: "linkedin", 
    url: "https://www.linkedin.com/in/dillon-smith-sales?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" 
  },
  { 
    Icon: YoutubeIcon,      // import { YoutubeIcon } from "lucide-react";
    key: "youtube",
    url: "https://m.youtube.com/@DillonSmithSales"
  },
  { 
    Icon: FacebookIcon,     // import { FacebookIcon } from "lucide-react";
    key: "facebook",
    url: "https://www.facebook.com/share/17iE8MjQnL/?mibextid=wwXIfr" 
  }
];


 const ContactFormSection = (): JSX.Element => {
  return (
    <FadeInView>
    <section className="w-full px-5 py-10 md:py-20">
      <div className="bg-[#0000000d] rounded-[30px] md:rounded-[60px] overflow-hidden p-6 md:p-12 lg:p-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">

          {/* LEFT SIDE */}
          <div className="flex flex-col gap-6 md:gap-8">
            <h2 className="font-medium text-black text-4xl md:text-6xl leading-tight">
              Get In Touch
            </h2>

            <div className="flex gap-4 md:gap-3">
  {socialIcons.map(({ Icon, key, url }) => (
    <a 
      key={key}
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <Button
        variant="ghost"
        size="icon"
        className="h-10 w-10 md:h-6 md:w-6 p-0 hover:bg-transparent"
      >
        <Icon className="h-5 w-5 md:h-4 md:w-4 text-black" />
      </Button>
    </a>
  ))}
</div>


            <div className="w-full h-0.5 bg-neutral-800 rounded-[20px]" />

            <div className="flex flex-col gap-4">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2"
                >
                  <span className="font-medium text-[#00000080] text-base md:text-lg">
                    {info.label}
                  </span>
                  <span className="font-medium text-black text-base md:text-lg">
                    {info.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE — INLINE GHL FORM */}
          <div className="w-full">
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/8uUG1Ae0RXZVkC6yLduf"
              style={{ width: "100%", height: "450px", border: "none", borderRadius: "8px" }}
              id="inline-8uUG1Ae0RXZVkC6yLduf"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-activation-type="alwaysActivated"
              data-deactivation-type="neverDeactivate"
              data-form-name="7 Steps Capture MIFGE"
              data-height="450"
              data-layout-iframe-id="inline-8uUG1Ae0RXZVkC6yLduf"
              data-form-id="8uUG1Ae0RXZVkC6yLduf"
              title="7 Steps Capture MIFGE"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  </FadeInView>
  );
};

export default ContactFormSection
