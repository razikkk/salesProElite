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
    <section className="w-full px-5">
      <div className="bg-[#0000000d] rounded-[60px] overflow-hidden p-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="flex flex-col gap-8">
            <h2 className="[font-family:'Geist',Helvetica] font-medium text-black text-6xl tracking-[-1.80px] leading-[60px]">
              Get In Touch
            </h2>

            <div className="flex gap-3">
              {socialIcons.map(({ Icon, key }) => (
                <Button
                  key={key}
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6 p-0 hover:bg-transparent"
                >
                  <Icon className="h-4 w-4 text-black" />
                </Button>
              ))}
            </div>

            <div className="w-full h-0.5 bg-neutral-800 rounded-[20px]" />

            <div className="flex flex-col gap-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex gap-2">
                  <span className="[font-family:'Geist',Helvetica] font-medium text-[#00000080] text-lg tracking-[0] leading-[21.6px]">
                    {info.label}
                  </span>
                  <span className="[font-family:'Geist',Helvetica] font-medium text-black text-lg tracking-[0] leading-[21.6px]">
                    {info.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-[18px]">
            <div className="grid grid-cols-2 gap-[18px]">
              <Input
                defaultValue="Peter Johnson"
                className="bg-[#0000000d] border-0 rounded-xl h-[50px] [font-family:'Geist',Helvetica] font-medium text-[#00000066] text-lg"
              />
              <Input
                defaultValue="Sample@gmail.com"
                className="bg-[#0000000d] border-0 rounded-xl h-[50px] [font-family:'Geist',Helvetica] font-medium text-[#00000066] text-lg"
              />
            </div>

            <Textarea
              defaultValue="Hi, I'd love to learn more about your services."
              className="bg-[#0000000d] border-0 rounded-xl min-h-[159px] resize-none [font-family:'Geist',Helvetica] font-medium text-[#00000066] text-lg"
            />

            <Button className="bg-[#00000040] hover:bg-[#00000060] rounded-xl h-[50px] [font-family:'Geist',Helvetica] font-semibold text-black text-lg text-center tracking-[-0.36px] leading-[21.6px]">
              Submit
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection
