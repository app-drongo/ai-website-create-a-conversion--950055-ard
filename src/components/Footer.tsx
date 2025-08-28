// Footer Component
// Generated: 2025-08-28T15:45:49.936Z
// Template: footer-c001
// Context: layout
// Position: layout.footer.0

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Heart,
  Car,
  Shield,
  Clock
} from "lucide-react"

export default function Footer() {
  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "Car Rental", href: "#features" },
        { name: "Driver Services", href: "#pricing" },
        { name: "Airport Transfer", href: "/airport" },
        { name: "City Tours", href: "/tours" },
        { name: "Business Travel", href: "/business" },
        { name: "Wedding Cars", href: "/weddings" }
      ]
    },
    {
      title: "Destinations",
      links: [
        { name: "Popular Cities", href: "/cities" },
        { name: "Tourist Spots", href: "/attractions" },
        { name: "Business Districts", href: "/business-areas" },
        { name: "Airports", href: "/airports" },
        { name: "Hotels", href: "/hotels" },
        { name: "Travel Routes", href: "/routes" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "/help" },
        { name: "Booking Guide", href: "/booking-guide" },
        { name: "Driver Requirements", href: "/driver-info" },
        { name: "Safety Guidelines", href: "/safety" },
        { name: "Travel Tips", href: "/tips" },
        { name: "Contact Support", href: "/support" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About DriveEase", href: "/about" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Driver Partnership", href: "/drivers" },
        { name: "Fleet Management", href: "/fleet" },
        { name: "Insurance", href: "/insurance" }
      ]
    }
  ]

  const socialLinks = [
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/driveease" },
    { name: "Facebook", icon: Facebook, href: "https://facebook.com/driveease" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com/driveease" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/driveease" },
    { name: "YouTube", icon: Youtube, href: "https://youtube.com/driveease" }
  ]

  return (
    <footer className="bg-background border-t border-border/50">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="size-10 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                  <Car className="size-5 text-background" />
                </div>
                <span className="font-bold text-xl text-foreground">DriveEase</span>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Your trusted partner for premium car rental services with professional drivers. 
                Experience comfort, safety, and reliability for all your travel needs across the city.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">bookings@driveease.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">+1 (555) DRIVE-NOW</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">Available in 50+ Cities Nationwide</span>
              </div>
            </div>

            {/* Service Features */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm text-foreground">Why Choose DriveEase</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Shield className="size-3 text-accent" />
                  <span>Fully Insured & Licensed Drivers</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="size-3 text-accent" />
                  <span>24/7 Customer Support</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Car className="size-3 text-accent" />
                  <span>Premium Fleet of Vehicles</span>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm text-foreground">Travel Updates</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 text-sm border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
                <Button size="sm" className="px-3 bg-accent hover:bg-accent/90 text-background">
                  <ArrowRight className="size-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Get exclusive deals and travel tips. No spam, unsubscribe anytime.
              </p>
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="font-semibold text-sm text-foreground">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link 
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/50 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© 2024 DriveEase. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline flex items-center gap-1">
                Trusted by <Heart className="size-3 text-accent fill-current" /> 10,000+ travelers
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground mr-2">Follow us:</span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <Link
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    className="size-8 rounded-md bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors duration-200 group"
                  >
                    <Icon className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4 pt-4 border-t border-border/30">
            <Link href="/sitemap" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Sitemap
            </Link>
            <Link href="/accessibility" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Accessibility
            </Link>
            <Link href="/emergency" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Emergency Contact
            </Link>
            <Link href="/driver-app" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Driver App
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}