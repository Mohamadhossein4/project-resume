import { Mail, Phone, MapPin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile-photo.webp";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-900 to-gray-300">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-navy/5"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          {/* Text Content */}
          <div className="order-2 xs:order-2 lg:order-1 text-center lg:mt-20 lg:mr-20 xl:mr-32 lg:text-right animate-fade-in">
            <div className="space-y-6">
              <h1 className="hidden lg:inline-block text-xl lg:text-5xl font-bold text-white leading-tight">
                محمد حسین  قلی خواه
              </h1>
              <h2 className="text-2xl lg:text-3xl text-blue-light font-light">
                توسعه‌دهنده فرانت اند
              </h2>
              <p className="text-xl text-white/90 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                طراح و توسعه‌دهنده وب‌سایت‌های مدرن با React، Node.js و تکنولوژی‌های روز دنیا
              </p>
              
              {/* Contact Info */}
              <div className="flex flex-col xs:flex-row gap-4 justify-center lg:justify-start text-white/80">
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  <span>m.h.gholikhah@gmail.com</span>
                </div>
                <div className="flex items-center -tracking-tighter gap-2">
                  <Phone className="w-5 h-5" />
                  <span>09034049743</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <span>تهران، ایران</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 xs:pb-10 lg:pb-0 justify-center lg:justify-start pt-4">
                <a href="../../resume.pdf" download>
                  <Button variant="hero" className="hover:bg-blue-500 hover:text-white rounded-full" size="lg">
                  <Download className="w-5 h-5 mr-2" />
                  دانلود رزومه
                </Button>
                </a>
                <a href="https://github.com/Mohamadhossein4" target="_blank">
                <Button variant="outline-hero" className="hover:bg-blue-500 hover:text-white hover:border-blue-500" size="lg">
                  مشاهده  گیت هاب
                </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="order-1 xs:order-1 mt-20  lg:order-2 flex justify-center lg:pr-[200px] lg:pt-12 lg:justify-start animate-scale-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-primary to-transparent rounded-full blur-2xl opacity-50 scale-110"></div>
              <img 
                src={profileImage} 
                alt="علی حسینی - توسعه‌دهنده فول‌استک"
                className="relative w-80 h-80 mt-10 lg:mt-0 lg:w-96 lg:h-96 rounded-full object-cover shadow-large border-4 border-white/20"
              />
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-primary/30 rounded-full animate-pulse delay-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;