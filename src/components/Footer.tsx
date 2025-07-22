import { Heart, Code, Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Github, name: "GitHub", url: "https://github.com" },
    { icon: Linkedin, name: "LinkedIn", url: "https://linkedin.com" },
    { icon: Twitter, name: "Twitter", url: "https://twitter.com" }
  ];
  return (
    <footer className="bg-navy text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 xl:gap-80 gap-8 mb-8">
            {/* Logo & Description */}
            <div className="animate-fade-in">
              <h3 className="text-2xl w-60 font-bold mb-4">محمد حسین قلی خواه</h3>
              <p className="text-white/80 leading-relaxed">
                توسعه‌دهنده فرانت اند با تمرکز بر ساخت تجربه‌های دیجیتال فوق‌العاده
              </p>
            </div>

            {/* Quick Links */}
            <div className="animate-fade-in">
              <h4 className="text-lg font-bold mb-4 transition-all">لینک‌های سریع</h4>
              <ul className="space-y-2 transition-all">
                <li>
                  <a href="#about" className="text-white/80 hover:text-blue-light transition-colors duration-300">
                    درباره من
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-white/80 hover:text-blue-light transition-colors duration-300">
                    مهارت‌ها
                  </a>
                </li>
                <li>
                  <a href="#experience" className="text-white/80 hover:text-blue-light transition-colors duration-300">
                    تجربه کاری
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-white/80 hover:text-blue-light transition-colors duration-300">
                    تماس
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="animate-fade-in">
              <h4 className="text-lg font-bold mb-4">اطلاعات تماس</h4>
              <div className="space-y-2 text-white/80">
                <p>m.h.gholikhah@gmail.com</p>
                <p className="-tracking-tight">9034049743</p>
                <p>تهران، ایران</p>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-white/80">
                <span>ساخته شده با</span>
                <Heart className="w-4 h-4 text-red-400 animate-pulse" />
                <span>و</span>
                <Code className="w-4 h-4 text-blue-light" />
                <span>توسط محمد حسین قلی خواه </span>
              </div>
              <div className=" text-white/60 text-sm">
                © {new Date().getFullYear()} تمامی حقوق محفوظ است
              </div>
              {/* Social Links */}
                <div className="inline-block lg:hidden">
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                      <a 
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-gray-700 hover:bg-blue-primary rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                      >
                        <social.icon className="w-6 h-6 text-white" />
                      </a>
                    ))}
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;