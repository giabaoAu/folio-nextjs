export const navItems = [
    { name: "Home", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Experience", link: "#experiences" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I prioritize client collaboration, fostering open communication ",
      description: "",
      className: "lg:col-span-2 md:col-span-6 md:row-span-4 lg:min-h-[30vh]",
      imgClassName: "w-full h-full object-cover",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm very flexible with time zone communications",
      description: "",
      className: "lg:col-span-1 md:col-span-3 md:row-span-2",
      imgClassName: "w-full h-full object-cover",
      titleClassName: "justify-start",
      img: "/githubGlobe.jpg",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-1 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for development.",
      description: "",
      className: "lg:col-span-1 md:col-span-3 md:row-span-1 max-h-[20vh]",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
    
    {
      id: 5,
      title: "Currently building a JS Animation library",
      description: "The Inside Scoop",
      className: "md:col-span-2 md:row-span-1 h-[47vh]",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },

    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-1 md:col-span-1 md:row-span-2 max-h-[25vh]",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "3D Solar System Planets to Explore",
      des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
      img: "/p1.svg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
      link: "in progress",
    },
    {
      id: 2,
      title: "Yoom - Video Conferencing App",
      des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
      img: "/p2.svg",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
      link: "in progress",
    },
    {
      id: 3,
      title: "AI Image SaaS - Canva Application",
      des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
      img: "/p3.svg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
      link: "in progress",
    },
    {
      id: 4,
      title: "Animated Apple Iphone 3D Website",
      des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
      img: "/p4.svg",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
      link: "in progress",
    },
  ];
  
  export const testimonials = [
    {
      quote:
        "Collaborating with Bao was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Bao's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Bao is the ideal partner.",
      name: "Camille Chau",
      title: "Associate Software Engineer - Chrysos Corporation.",
    },
    {
      quote:
        "Working with Bao as a research assistant was an outstanding experience. Their professionalism, attention to detail, and commitment to delivering high-quality work were evident throughout our collaboration. Bao demonstrated a strong analytical mindset and a keen enthusiasm for research, making valuable contributions to our project. If you're looking for a dedicated and insightful research assistant, Bao is an excellent choice.",
      name: "Kieu Trang",
      title: "Student - University of Adelaide",
    },
    {
      quote:
        "I had the pleasure of working with Bao as both a research assistant and lecturer, and their dedication to both roles was truly impressive. They bring a strong analytical approach to research, consistently providing valuable insights, while also excelling in the classroom with their clear and engaging teaching style. Their professionalism, passion for learning, and ability to inspire others make them a fantastic asset in any academic setting.",
      name: "Nhu Long Nguyen",
      title: "Research Assistant/Teaching Assistant - University of Adelaide",
    },
    {
      quote:
        "Studying alongside Bao has been an incredible experience. His dedication, curiosity, and willingness to support others make him an amazing friend and study partner. Whether tackling complex concepts or motivating each other through challenges, Bao always brings enthusiasm and a positive attitude. I’m grateful for his insight, humor, and unwavering support throughout our academic journey.",
      name: "Uyen Ho",
      title: "Student at University of Adelaide",
    },

  ];
  
  export const companies = [
    {
      id: 1,
      name: "cloudinary",
      img: "/cloud.svg",
      nameImg: "/cloudName.svg",
    },
    {
      id: 2,
      name: "appwrite",
      img: "/app.svg",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: "/host.svg",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "stream",
      img: "/s.svg",
      nameImg: "/streamName.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Frontend Engineer Intern",
      desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Mobile App Dev - JSM Tech",
      desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "Freelance App Dev Project",
      desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "Lead Frontend Developer",
      desc: "Developed and maintained user-facing features using modern frontend technologies.",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
    },
    {
      id: 2,
      img: "/twit.svg",
    },
    {
      id: 3,
      img: "/link.svg",
    },
  ];