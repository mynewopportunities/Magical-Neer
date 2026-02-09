import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Sparkles } from 'lucide-react';

interface NavItem {
    label: string;
    href: string;
    children?: { label: string; href: string; description?: string }[];
}

const navigation: NavItem[] = [
    { label: 'Home', href: '/' },
    {
        label: 'Programs',
        href: '/programs',
        children: [
            { label: 'Foundation (Free)', href: '/programs#foundation', description: 'Community + free resources' },
            { label: 'Abundance Seeker', href: '/programs#abundance-seeker', description: 'Self-paced course ₹1,999' },
            { label: 'Manifestation Master', href: '/programs#manifestation-master', description: 'Live cohort + community ₹9,999' },
            { label: 'VIP Platinum', href: '/programs#vip-platinum', description: '1:1 coaching + everything ₹49,999' },
        ],
    },
    { label: 'About Neer', href: '/about' },
    { label: 'Success Stories', href: '/success-stories' },
    { label: 'Free Resources', href: '/free-resources' },
    { label: 'Contact', href: '/contact' },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-white/95 backdrop-blur-xl shadow-lg py-4'
                : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6">
                <nav className="flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3 group relative z-50">
                        <motion.div
                            className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center shadow-lg shadow-primary-500/30"
                            whileHover={{ scale: 1.1, rotate: 360 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Sparkles className="w-6 h-6 text-white" />
                        </motion.div>
                        <span
                            className={`font-display text-2xl font-bold transition-colors ${isScrolled || isMobileMenuOpen ? 'text-primary-700' : 'text-white'
                                }`}
                        >
                            Magical <span className="gradient-text">Neer</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation - Hidden on Mobile/Tablet */}
                    <div className="hidden xl:flex items-center gap-8">
                        {navigation.map((item) => (
                            <div
                                key={item.label}
                                className="relative"
                                onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <Link
                                    to={item.href}
                                    className={`flex items-center gap-1.5 px-3 py-2 rounded-lg font-medium text-base transition-all ${isScrolled
                                        ? 'text-neutral-600 hover:text-primary-600'
                                        : 'text-white/90 hover:text-white'
                                        } ${location.pathname === item.href ? 'text-primary-500' : ''}`}
                                >
                                    {item.label}
                                    {item.children && (
                                        <ChevronDown
                                            className={`w-4 h-4 transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''
                                                }`}
                                        />
                                    )}
                                </Link>

                                {/* Dropdown Menu – relaxed spacing and typography */}
                                <AnimatePresence>
                                    {item.children && activeDropdown === item.label && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 8, scale: 0.98 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 8, scale: 0.98 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute top-full left-0 mt-4 w-[360px] bg-white rounded-2xl shadow-2xl border border-neutral-200 p-5"
                                        >
                                            <div className="space-y-1">
                                                {item.children.map((child) => (
                                                    <Link
                                                        key={child.href}
                                                        to={child.href}
                                                        className="block px-5 py-4 rounded-xl hover:bg-primary-50/80 transition-colors">
                                                        <span className="font-semibold text-neutral-900 text-[15px] block leading-snug mb-1.5">
                                                            {child.label}
                                                        </span>
                                                        {child.description && (
                                                            <p className="text-sm text-neutral-500 leading-relaxed">
                                                                {child.description}
                                                            </p>
                                                        )}
                                                    </Link>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>

                    {/* CTA Buttons - Desktop */}
                    <div className="hidden xl:flex items-center gap-4">
                        <Link
                            to="/login"
                            className={`px-4 py-2 font-medium rounded-xl text-sm transition-all ${isScrolled
                                ? 'text-neutral-700 hover:bg-neutral-100'
                                : 'text-white hover:bg-white/10'
                                }`}
                        >
                            Login
                        </Link>
                        <Link
                            to="/programs"
                            className="btn btn-primary"
                        >
                            Start Your Journey
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className={`xl:hidden p-2 rounded-xl transition-colors relative z-50 ${isScrolled || isMobileMenuOpen ? 'text-neutral-900 hover:bg-neutral-100' : 'text-white hover:bg-white/10'
                            }`}
                        aria-label="Toggle mobile menu"
                    >
                        {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                    </button>
                </nav>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="fixed inset-0 z-40 bg-white md:hidden overflow-y-auto"
                        style={{ top: 0 }} // Ensure it covers the top
                    >
                        <div className="min-h-screen flex flex-col pt-28 pb-12 px-6">
                            <div className="flex-1 flex flex-col gap-1">
                                {navigation.map((item) => (
                                    <div key={item.label} className="border-b border-neutral-200 last:border-0 py-4">
                                        <Link
                                            to={item.href}
                                            onClick={() => !item.children && setIsMobileMenuOpen(false)}
                                            className="block text-lg font-semibold text-neutral-900"
                                        >
                                            {item.label}
                                        </Link>
                                        {item.children && (
                                            <div className="pl-5 mt-3 space-y-1 border-l-2 border-primary-200 ml-2">
                                                {item.children.map((child) => (
                                                    <Link
                                                        key={child.href}
                                                        to={child.href}
                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                        className="block py-3 px-4 text-[15px] text-neutral-600 leading-relaxed hover:bg-primary-50 rounded-lg transition-colors"
                                                    >
                                                        {child.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>

                            <div className="mt-10 space-y-3">
                                <Link
                                    to="/login"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="btn w-full justify-center border-2 border-neutral-300 text-neutral-800 shadow-sm"
                                >
                                    Member Login
                                </Link>
                                <Link
                                    to="/programs"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="btn btn-primary w-full justify-center"
                                >
                                    Start Your Journey
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
