import { GithubIcon, InstagramIcon, XIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Textarea } from "../../../../components/ui/TextArea"


const contactInfo = [
  {
    label: "Email:",
    value: "Hello@salespro.com",
  },
  {
    label: "Phone:",
    value: "+1 (555) 123-4567",
  },
  {
    label: "Address:",
    value: "123 Innovation Drive, Suite 400, Tech City",
  },
];

const socialIcons = [
  { Icon: XIcon, key: "x" },
  { Icon: InstagramIcon, key: "instagram" },
  { Icon: GithubIcon, key: "github" },
];

 const ContactFormSection = (): JSX.Element => {
  return (
    <section className="w-full px-5 py-10 md:py-20">
    <div className="bg-[#0000000d] rounded-[30px] md:rounded-[60px] overflow-hidden p-6 md:p-12 lg:p-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
  
        {/* LEFT SIDE */}
        <div className="flex flex-col gap-6 md:gap-8">
          <h2 className="font-medium text-black text-4xl md:text-6xl leading-tight">
            Get In Touch
          </h2>
  
          {/* Social Icons */}
          <div className="flex gap-4 md:gap-3">
            {socialIcons.map(({ Icon, key }) => (
              <Button
                key={key}
                variant="ghost"
                size="icon"
                className="h-10 w-10 md:h-6 md:w-6 p-0 hover:bg-transparent"
              >
                <Icon className="h-5 w-5 md:h-4 md:w-4 text-black" />
              </Button>
            ))}
          </div>
  
          <div className="w-full h-0.5 bg-neutral-800 rounded-[20px]" />
  
          {/* Contact info */}
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
  
        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-4 md:gap-[18px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-[18px]">
            <Input
              defaultValue="Peter Johnson"
              className="bg-[#0000000d] border-0 rounded-xl h-[50px] font-medium text-[#00000066] text-base md:text-lg"
            />
            <Input
              defaultValue="Sample@gmail.com"
              className="bg-[#0000000d] border-0 rounded-xl h-[50px] font-medium text-[#00000066] text-base md:text-lg"
            />
          </div>
  
          <Textarea
            defaultValue="Hi, I'd love to learn more about your services."
            className="bg-[#0000000d] border-0 rounded-xl min-h-[130px] md:min-h-[159px] resize-none font-medium text-[#00000066] text-base md:text-lg"
          />
  
          <Button className="bg-[#00000040] hover:bg-[#00000060] rounded-xl h-[50px] font-semibold text-black text-lg tracking-[-0.36px]">
            Submit
          </Button>
        </div>
      </div>
    </div>
  </section>
  
  );
};

export default ContactFormSection
