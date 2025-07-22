import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "ایمیل",
      value: "m.h.gholikhah@gmail.com",
      link: "mailto:m.h.gholikhah@gmail.com",
    },
    {
      icon: Phone,
      title: "تلفن",
      value: "09034049743",
      link: "tel:+989123456789",
    },
    {
      icon: MapPin,
      title: "آدرس",
      value: "تهران، ایران",
      link: null,
    },
  ];

  const socialLinks = [
    { icon: Github, name: "GitHub", url: "https://github.com" },
    { icon: Linkedin, name: "LinkedIn", url: "https://linkedin.com" },
    { icon: Twitter, name: "Twitter", url: "https://twitter.com" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-300">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-6">
              تماس با من
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
            <p className="text-xl text-gray-medium">
              آماده همکاری و پاسخ‌گویی به سوالات شما
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="animate-slide-in ">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-navy mb-6">
                    بیایید در ارتباط باشیم
                  </h3>
                  <p className="text-gray-medium leading-relaxed t-6 mb-8">
                    اگر پروژه‌ای دارید که نیاز به یک توسعه‌دهنده فول‌استک دارد،
                    یا سوالی در مورد کارهای من دارید، خوشحال می‌شوم از شما
                    بشنوم.
                  </p>
                </div>

                {/* Contact Details */}
                <div className="space-y-4 ">
                  {contactInfo.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-4 bg-gray-light rounded-3xl hover:shadow-soft transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium text-navy">{item.title}</h4>
                        {item.link ? (
                          <a
                            href={item.link}
                            className="text-blue-primary hover:underline"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <span className="text-gray-medium">{item.value}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="hidden lg:inline-block">
                  <h4 className="font-bold text-navy mb-1">شبکه‌های اجتماعی</h4>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-navy hover:bg-blue-primary rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                      >
                        <social.icon className="w-6 h-6 text-white" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-scale-in">
              <Card className="shadow-medium rounded-3xl bg-gray-50 hover:shadow-large transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-navy">
                    پیام بفرستید
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <form  action="https://formspree.io/f/mvgqkgbq" method="POST">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-navy">
                          نام
                        </label>
                        <Input
                          name="name"
                          placeholder="نام شما"
                          className="border-gray-300 focus:border-blue-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-navy">
                          ایمیل
                        </label>
                        <Input
                        name="email"
                          type="email"
                          placeholder="email@example.com"
                          className="border-gray-300 focus:border-blue-primary"
                        />
                      </div>
                    </div>

                    <div className="space-y-2 mt-6">
                      <label className="text-sm font-medium text-navy">
                        موضوع
                      </label>
                      <Input
                      name="subject"
                        placeholder="موضوع پیام"
                        className="border-gray-300 focus:border-blue-primary"
                      />
                    </div>

                    <div className="pb-6 space-y-2 mt-6">
                      <label className="text-sm font-medium text-navy ">
                        پیام
                      </label>
                      <Textarea
                      name="message"
                        placeholder="پیام خود را بنویسید..."
                        className="min-h-32 border-gray-300 focus:border-blue-primary resize-none"
                      />
                    </div>

                    <Button type="submit" className=" w-full bg-gradient-to-b from-blue-500 to-blue-600 hover:opacity-90 transition-all duration-300">
                      <Send className="w-5 h-5 mr-2" />
                      ارسال پیام
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
