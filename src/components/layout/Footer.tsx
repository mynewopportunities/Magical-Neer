import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    Sparkles,
    Instagram,
    Youtube,
    Facebook,
    Mail,
    Phone,
    MapPin,
    Heart,
    ArrowRight
} from 'lucide-react';

const footerLinks = {
    programs: [
        { label: 'Foundation (Free)', href: '/programs#foundation' },
        { label: 'Abundance Seeker', href: '/programs#abundance-seeker' },
        { label: 'Manifestation Master', href: '/programs#manifestation-master' },
        { label: 'VIP Platinum', href: '/programs#vip-platinum' },
        { label: 'Free Resources', href: '/free-resources' },
    ],
    company: [
        { label: 'About Neer', href: '/about' },
        { label: 'Success Stories', href: '/success-stories' },
        { label: 'Blog', href: '/blog' },
        { label: 'Contact', href: '/contact' },
        { label: 'Book a Call', href: '/book-call' },
    ],
    support: [
        { label: 'Terms of Service', href: '/terms-of-service' },
        { label: 'Privacy Policy', href: '/privacy-policy' },
        { label: 'Refund Policy', href: '/refund-policy' },
        { label: 'Disclaimer', href: '/disclaimer' },
    ],
};

const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com/magicalneer', label: 'Instagram' },
    { icon: Youtube, href: 'https://youtube.com/@magicalneer', label: 'YouTube' },
    { icon: Facebook, href: 'https://facebook.com/magicalneer', label: 'Facebook' },
];

export default function Footer() {
    return (
        <footer className="relative bg-gradient-to-b from-neutral-900 to-neutral-950 text-white pt-20 pb-8 overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Newsletter Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">
                        Start Your <span className="gradient-text">Manifestation</span> Journey
                    </h3>
                    <p className="text-neutral-400 mb-8 max-w-xl mx-auto text-center">
                        Join 10,000+ manifestors receiving weekly abundance tips, healing practices, and exclusive offers.
                    </p>
                    <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-5 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-neutral-400 focus:outline-none focus:border-primary-500 transition-colors"
                        />
                        <button className="btn btn-secondary whitespace-nowrap">
                            Subscribe <ArrowRight className="w-4 h-4" />
                        </button>
                    </form>
                </motion.div>

                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <Link to="/" className="flex items-center gap-2 mb-6">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
                                <Sparkles className="w-5 h-5 text-white" />
                            </div>
                            <span className="font-display text-2xl font-bold">
                                Magical <span className="gradient-text">Neer</span>
                            </span>
                        </Link>
                        <p className="text-neutral-400 mb-6 max-w-sm">
                            Unlock your divine power with the I Am Power Flow™ methodology.
                            Transform your energy, manifest abundance, and create the life you truly deserve.
                        </p>
                        <div className="flex items-center gap-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-600 transition-colors"
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Programs Links */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4">Programs</h4>
                        <ul className="space-y-3">
                            {footerLinks.programs.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        to={link.href}
                                        className="text-neutral-400 hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4">Company</h4>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        to={link.href}
                                        className="text-neutral-400 hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4">Contact</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-neutral-400">
                                <Mail className="w-5 h-5 mt-0.5 text-primary-400" />
                                <a href="mailto:support@magicalneer.com" className="hover:text-white transition-colors">support@magicalneer.com</a>
                            </li>
                            <li className="flex items-start gap-3 text-neutral-400">
                                <Phone className="w-5 h-5 mt-0.5 text-primary-400" />
                                <span>+91 98765 43210</span>
                            </li>
                            <li className="flex items-start gap-3 text-neutral-400">
                                <MapPin className="w-5 h-5 mt-0.5 text-primary-400" />
                                <span>Mumbai, India</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-neutral-400 text-sm">
                            © 2026 Magical Neer. All rights reserved.
                        </p>
                        <div className="flex items-center gap-6">
                            {footerLinks.support.map((link) => (
                                <Link
                                    key={link.href}
                                    to={link.href}
                                    className="text-neutral-400 text-sm hover:text-white transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                        <p className="text-neutral-500 text-sm flex items-center gap-1">
                            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> in India
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
