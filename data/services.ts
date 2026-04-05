export interface Service {
  id: string
  title: string
  description: string
  features: string[]
  icon: string
}

export const services: Service[] = [
  {
    id: "web-design",
    title: "Web Design",
    description:
      "Beautiful, responsive websites that engage your audience and drive conversions.",
    features: [
      "Responsive Design",
      "Modern UI/UX",
      "Fast Performance",
      "SEO Optimized",
      "Cross-browser Compatible",
      "Accessibility Compliance",
    ],
    icon: "🎨",
  },
  {
    id: "mobile-app",
    title: "Mobile App Design",
    description:
      "Intuitive and engaging mobile app experiences for iOS and Android platforms.",
    features: [
      "Native App Design",
      "Cross-platform UI",
      "User-centric Design",
      "Interaction Design",
      "App Prototyping",
      "Usability Testing",
    ],
    icon: "📱",
  },
  {
    id: "branding",
    title: "Branding & Identity",
    description:
      "Complete brand identity development including logo, color palette, and visual guidelines.",
    features: [
      "Logo Design",
      "Brand Strategy",
      "Visual Identity",
      "Brand Guidelines",
      "Color Palette Design",
      "Typography Selection",
    ],
    icon: "✨",
  },
  {
    id: "ux-ui",
    title: "UI/UX Design",
    description:
      "User-centered design solutions that balance aesthetics with functionality.",
    features: [
      "User Research",
      "Wireframing",
      "Prototyping",
      "User Testing",
      "Design System",
      "Component Library",
    ],
    icon: "🖼️",
  },
  {
    id: "animation",
    title: "Motion & Animation",
    description:
      "Engaging animations and microinteractions that enhance user engagement.",
    features: [
      "Motion Design",
      "UI Animations",
      "Transition Effects",
      "Video Animation",
      "Interactive Elements",
      "Scroll Animations",
    ],
    icon: "🎬",
  },
  {
    id: "consulting",
    title: "Design Consulting",
    description:
      "Strategic design guidance and product direction for your business goals.",
    features: [
      "Design Audit",
      "Strategy Session",
      "Best Practices Review",
      "Team Mentoring",
      "Process Optimization",
      "Tool Recommendations",
    ],
    icon: "💡",
  },
]
