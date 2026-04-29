import {
  Headset,
  MapPin,
  Send,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  HelpCircle,
  Phone,
  Mail,
  Clock3,
} from "lucide-react";
import { CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

const myContacts = [
  {
    icon: Phone,
    title: "Phone",
    des: "Mon-Fri from 8am to 6pm",
    details: "+1 (800) 123-4567",
    text: "",
    style: "text-[#16A34A] hover:underline text-base mt-2 cursor-pointer",
  },
  {
    icon: Mail,
    title: "Email",
    des: " We'll respond within 24 hours",
    details: "support@freshcart.com",
    text: "",
    style: "text-[#16A34A] hover:underline text-base mt-2 cursor-pointer",
  },
  {
    icon: MapPin,
    title: "Office",
    des: "123 Commerce Street",
    details: "New York, NY 10001, USA",
    text: "United States",
    style: "text-sm text-[#6A7282]",
  },
  {
    icon: Clock3,
    title: "Business Hours",
    des: " Monday - Friday: 8am - 6pm",
    details: "Sat: 9am-4pm | Sun: Closed",
    text: "Sunday: Closed",
    style: "text-sm text-[#6A7282]",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen mt-18 bg-[#FBFCFD]">
      <div className=" bg-gradient-to-tr from-[#17A64C] to-[#45DA7B] mt-27 text-white py-14 px-6">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 text-sm mb-6 opacity-90">
            <Link href="/">
              <span className="text-gray-200 hover:text-white">Home</span>
            </Link>{" "}
            <span className="text-[10px]">/</span>{" "}
            <span className="font-medium">Contact Us</span>
          </nav>
          <div className="flex items-center gap-5">
            <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
              <Headset className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold tracking-tight">Contact Us</h1>
              <p className="text-white/80 text-lg mt-1">
                We'd love to hear from you. Get in touch with our team.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 my-12 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-[#FBFCFD]">
          <div className="lg:col-span-4 space-y-6 bg-white">
            {myContacts.map((e, i) => {
              return (
                <div
                  key={i}
                  className="border border-[#F3F4F6] shadow-sm rounded-xl overflow-hidden group"
                >
                  <CardContent className="p-6 flex items-center gap-5">
                    <div className="w-12 h-12 rounded-lg bg-[#F0FDF4] flex items-center justify-center transition-colors group-hover:bg-[#6cc04a]/10">
                      <e.icon className="text-[#16A34A]" />
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-gray-900">
                        {e.title}
                      </h4>
                      <p className="text-sm text-[#6A7282] font-medium">
                        {e.des}
                      </p>
                      <p className={`font-medium flex flex-col   ${e.style} `}>
                        <span> {e.details}</span>
                        <span>{e.text}</span>
                      </p>
                    </div>
                  </CardContent>
                </div>
              );
            })}
            <div className="p-6 border border-[#F3F4F6] shadow-sm rounded-[1.5rem] overflow-hidden group">
              <p className="text-sm font-bold text-[#101828] mb-4 uppercase tracking-widest">
                Follow Us
              </p>
              <div className="flex gap-4">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-[#F3F4F6] flex items-center justify-center text-#6A7282 hover:bg-[#16A34A] hover:text-white transition-colors cursor-pointer"
                  >
                    <Icon size={18} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-6  bg-white">
            <div className="border border-[#F3F4F6] shadow-sm rounded-xl py-8 px-6 ">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-[#F0FDF4] p-4 rounded-2xl">
                  <Headset className="text-[#16A34A] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#101828]">
                    Send us a Message
                  </h3>
                  <p className="text-[#6A7282] text-sm font-medium">
                    Fill out the form and we'll get back to you
                  </p>
                </div>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium text-gray-700 ">
                      Full Name
                    </label>
                    <Input
                      placeholder="John Doe"
                      className="h-14 rounded-xl bg-white border  focus-visible:ring-[#6cc04a]"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 ml-1">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      className="h-14 rounded-xl bg-white border focus-visible:ring-[#6cc04a]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 ml-1">
                    Subject
                  </label>
                  <Select>
                    <SelectTrigger className="h-14 py-6  w-full rounded-xl bg-white border focus:ring-[#6cc04a]">
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="General Inquiry">
                        General Inquiry
                      </SelectItem>
                      <SelectItem value="Order Support">
                        Order Support
                      </SelectItem>
                      <SelectItem value="Shipping Questions">
                        Shipping Questions
                      </SelectItem>
                      <SelectItem value="Returns & Refunds">
                        Returns & Refunds
                      </SelectItem>
                      <SelectItem value="Product Information">
                        Product Information
                      </SelectItem>
                      <SelectItem value="Feedback & Suggestions">
                        Feedback & Suggestions
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 ml-1">
                    Message
                  </label>
                  <Textarea
                    placeholder="How can we help you?"
                    className="h-35 rounded-xl bg-white border focus-visible:ring-[#6cc04a] p-4"
                  />
                </div>

                <Button className="bg-[#16A34A] hover:bg-[#15803D] text-base text-white px-10 h-14 rounded-xl font-semibold flex gap-2 transition-all shadow-lg shadow-green-200">
                  <Send size={25} /> Send Message
                </Button>
              </form>
            </div>

            <div className="bg-[#F0FDF4] rounded-3xl p-6 flex items-start gap-4 shadow-sm">
              <div className="bg-white p-3 rounded-2xl text-[#6cc04a]">
                <HelpCircle size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  Looking for quick answers?
                </h4>
                <p className="text-sm text-[#4A5565] mt-1 font-medium">
                  Check out our Help Center for frequently asked questions about
                  orders, shipping, and more.
                </p>
                <Link href={"/help"}>
                  <button className="text-[#16A34A] text-sm font-semibold mt-3 hover:underline">
                    Visit Help Center →
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
