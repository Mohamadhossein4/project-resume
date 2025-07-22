import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const technicalSkills = [
    { name: "React", level: 40 },
    { name: "TypeScript", level: 50 },
    { name: "JavaScript", level: 50 },
    { name: "Html5", level: 70 },
    { name: "Tailwind CSS", level: 70 },
    { name: "Git / GitHub", level: 50 }
  ];

  const tools = [
    "react",
    "Figma",
    "Docker",
    "Wordpress",
    "next",
    "tailwind",
    "Html5",
    "Css3",
    "TypeScript",
    "JavaScript",
    "Mysql",
    "nx"
  ];

  const languages = [
    { name: "فارسی", level: "زبان مادری" },
    { name: "انگلیسی", level: "متوسط" },

  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-100 to-gray-300">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-6">
              مهارت‌ها و تخصص‌ها
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
            <p className="text-xl text-gray-medium">
              تکنولوژی‌ها و ابزارهایی که با آن‌ها کار می‌کنم
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Technical Skills */}
            <div className="animate-slide-in">
              <h3 className="text-2xl font-bold text-navy mb-8">مهارت‌های تکنیکی</h3>
              <div className="space-y-6 xl:space-y-10">
                {technicalSkills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-navy">{skill.name}</span>
                      <span className="text-sm text-gray-medium">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2 bg-gray-light"
                    />
                  </div>
                ))}
              </div>

              {/* Languages */}
              <div className="mt-16">
                <h4 className="text-xl font-bold text-navy mb-[46px]">زبان‌ها</h4>
                <div className="space-y-4">
                  {languages.map((lang, index) => (
                    <div key={index} className="flex justify-between items-center p-4 bg-white rounded-3xl">
                      <span className="font-medium text-navy">{lang.name}</span>
                      <Badge variant="secondary" className="xl:p-1 bg-blue-primary text-white">
                        {lang.level}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Tools & Technologies */}
            <div className="animate-scale-in">
              <h3 className="text-2xl font-bold text-navy mb-8">ابزارها و تکنولوژی‌ها</h3>
              
              <div className="bg-gradient-to-br from-blue-600 to-blue-200 p-8 rounded-3xl shadow-soft">
                <div className="grid grid-cols-2 gap-4">
                  {tools.map((tool, index) => (
                    <div 
                      key={index} 
                      className="bg-gradient-to-bl text-black from-gray-50 to-gray-300 p-4 rounded-3xl shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 group"
                    >
                      <div className="text-center">
                        <span className="text-navy font-medium group-hover:text-blue-primary transition-colors duration-300">
                          {tool}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Info */}
              <div className="mt-8  xl:mt-[60px] p-6 bg-gradient-to-tl from-blue-600 to-blue-200 rounded-3xl text-white">
                <h4 className="text-lg font-bold mb-4">آماده یادگیری</h4>
                <p className="text-white/90 leading-relaxed">
                  همیشه آماده یادگیری تکنولوژی‌های جدید و بروزرسانی مهارت‌هایم هستم. 
                  دنیای تکنولوژی همیشه در حال تغییر است و من هم با آن همراه می‌شوم تا در این زمینه بهترین باشم .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;