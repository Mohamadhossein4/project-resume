import { Calendar, MapPin, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { url } from "inspector";

const Experience = () => {
  const experiences = [
    
    {
      title: "کارآموز شبکه",
      company: "ایران زاک",
      url: "https://iranzak.com/",
      location: "تهران، ایران", 
      period: "1401 - 1401",
      
      description: "اصول اولیه شبکه مثل TCP/IP، DNS و DHCP",
      achievements: [
        "راه‌اندازی شبکه سازمانی با TCP/IP و VLAN",
        "پیاده‌سازی فایروال برای امنیت شبکه",
        "همکاری با تیم امنیت",
        "کاهش 50% قطعی شبکه با عیب‌یابی سریع"
      ],
      technologies: ["DHCP", "DNS", "TCP/IP", "VLAN"]
    },
    {
      title: "توسعه‌دهنده فرانت‌اند",
      company: "داده کاوان دوران",
      url: "https://dkd.co.ir/",
      location: "تهران، ایران", 
      period: "1403 - تااکنون",
      description: "توسعه رابط کاربری واکنش‌گرا و تجربه کاربری بهینه ",
      achievements: [
        "ساخت بیش از 20 وب‌سایت تجاری",
        "طراحی سیستم طراحی قابل استفاده مجدد",
        "همکاری نزدیک با تیم UX/UI",
        "افزایش 60% نرخ تبدیل مشتریان"
      ],
      technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Figma"] 
    },
    
  ];

  const education = [
    {
      degree: "کاردانی نرم افزار کامپیوتر",
      institution: "دانشگاه آزاد واحد یادگار امام",
      period: "1402 - تااکنون",
      description: "تخصص در مهندسی نرم‌افزار"
    },
    {
      degree: "دیپلم طراحی و توسعه وب",
      institution: "هنرستان تلاش",
      period: "1399 - 1402",
      description: "آشنایی در مهندسی نرم‌افزار و اتومایسیون اداری  "
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-300 to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-6">
              تجربه کاری
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
            <p className="text-xl text-gray-medium">
              سابقه حرفه‌ای و مسیر رشد من
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="grid xl:grid-cols-2 gap-10 mb-16">
            {experiences.map((exp, index) => (
              <Card key={index} className="group bg-white/80 rounded-3xl hover:shadow-medium transition-all duration-300 animate-slide-in">
                <CardHeader className="pb-4">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-navy  transition-colors duration-300">
                        {exp.title}
                      </h3>
                      <a href={exp.url} target="_blank" className="cursor-pointer text-lg transition-colors hover:text-blue-primary font-medium">{exp.company}</a>
                    </div>
                    <div className="flex flex-col lg:items-end gap-2">
                      <div className="flex xl:pb-8 items-center gap-2 text-gray-medium">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-medium">
                        
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-medium leading-relaxed">{exp.description}</p>
                  
                  {/* Achievements */}
                  <div>
                    <h4 className="font-medium text-navy mb-3">دستاوردها:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-medium">
                          <div className="w-2 h-2 bg-blue-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap  gap-2 pt-2">
                    {exp.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-blue-400 pt-1.5 text-white">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Education */}
          <div className="animate-fade-in ">
            <h3 className="text-3xl font-bold text-navy mb-8 text-center">تحصیلات</h3>
            {education.map((edu, index) => (
              <Card key={index} className="mb-2 hover:shadow-medium  rounded-[310px] transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div>
                      <h4 className="text-xl font-bold text-navy mb-2">{edu.degree}</h4>
                      <p className="text-blue-primary font-medium">{edu.institution}</p>
                      <p className="text-gray-medium mt-2">{edu.description}</p>
                    </div>
                    <div className="flex items-center gap-2 text-black">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;