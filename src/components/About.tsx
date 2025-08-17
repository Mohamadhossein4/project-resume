import { Code, Palette, Database, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const experience =[
              { number: "8+", label: "پروژه تکمیل شده" },
              { number: "1+", label: "سال تجربه" },
              { number: "2+", label: "مشتری راضی" },
              { number: "10+", label: "تکنولوژی" }
            ]
  const highlights = [
    {
      icon: Code,
      title: "برنامه‌نویسی",
      description: "آشنایی  بر React، TypeScript، JavaScript"
    },
    {
      icon: Palette,
      title: "طراحی UI/UX",
      description: "طراحی رابط کاربری مدرن و جذاب"
    },
    {
      icon: Database,
      title: "پایگاه داده",
      description: "کار با Mysql، PostgreSQL، Redis"
    },
    {
      icon: Zap,
      title: "بهینه‌سازی",
      description: "افزایش سرعت و عملکرد اپلیکیشن‌ها"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-300 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-6">
              درباره من
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
            <p className="text-xl text-black leading-relaxed">
              من محمد حسین هستم، توسعه‌دهنده فرانت اند با بیش از 1 سال تجربه در ساخت وب‌سایت‌ها و اپلیکیشن‌های مدرن
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-1 gap-12 items-center mb-16">
            {/* Description */}
            <div className="animate-slide-in">
              <h3 className="text-2xl font-bold text-navy mb-6">
                سفر حرفه‌ای من
              </h3>
              <div className="space-y-4 text-gray-medium leading-relaxed">
                <p>
                  از 1 سال پیش که وارد دنیای برنامه‌نویسی شدم، همیشه عاشق ساختن چیزهای جدید و حل مسائل پیچیده بودم. 
                  تخصص اصلی من در حوزه تکنولوژی‌های مدرن وب است.
                </p>
                <p>
                  در این مدت با تیم‌های مختلفی کار کردم و پروژه‌های متنوعی از استارتاپ‌ها تا شرکت‌های بزرگ را 
                  به سرانجام رساندم. علاقه خاصی به یادگیری تکنولوژی‌های جدید و بهینه‌سازی عملکرد دارم.
                </p>
                <p>
                  هدف من ساختن محصولاتی است که نه تنها از نظر فنی قوی باشند، بلکه تجربه کاربری فوق‌العاده‌ای 
                  نیز ارائه دهند.
                </p>
              </div>
            </div>

            {/* Highlights */}
            <div className="animate-scale-in">
              <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4">
                {highlights.map((item, index) => (
                  <Card key={index} className="group bg-white rounded-3xl hover:shadow-medium transition-all duration-300 hover:-translate-y-2">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-black/80 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-bold text-navy mb-2">{item.title}</h4>
                      <p className="text-sm text-gray-medium">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-14 lg:gap-8 animate-fade-in">
            {experience.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-navy mb-2">{stat.number}</div>
                <div className="text-gray-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;