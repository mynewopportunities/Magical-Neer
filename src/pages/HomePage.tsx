import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
    Star,
    Heart,
    Zap,
    ArrowRight,
    Users,
    ChevronRight,
    ChevronLeft,
    CheckCircle,
    Flame,
    Target,
    Instagram,
    MessageCircle,
} from 'lucide-react';

// Cloudflare Stream video ID – set in env or replace with your video id
const HERO_VIDEO_ID = import.meta.env.VITE_HERO_VIDEO_ID || '';

// Hero Section – video background of Neer speaking (fallback: image)
function HeroSection() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start'],
    });
    const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section
            ref={ref}
            className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero"
        >
            {/* Hero Background: Cloudflare Stream video or fallback image */}
            <div className="absolute inset-0 z-0">
                {HERO_VIDEO_ID ? (
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                        poster="/images/hero-meditation.png"
                    >
                        <source
                            src={`https://customer-${import.meta.env.VITE_CF_ACCOUNT_HASH || 'xxx'}.cloudflarestream.com/${HERO_VIDEO_ID}/manifest/video.m3u8`}
                            type="application/x-mpegURL"
                        />
                    </video>
                ) : (
                    <img
                        src="/images/hero-meditation.png"
                        alt="Neer – Spiritual Guide"
                        className="w-full h-full object-cover opacity-40 mix-blend-overlay"
                    />
                )}
                <div className="absolute inset-0 bg-gradient-to-b from-primary-950/80 via-primary-900/60 to-primary-950/90" />
            </div>

            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden z-0">
                <motion.div
                    className="absolute top-20 left-20 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl mix-blend-screen"
                    animate={{
                        x: [0, 50, 0],
                        y: [0, 30, 0],
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                    className="absolute bottom-20 right-20 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl mix-blend-screen"
                    animate={{
                        x: [0, -40, 0],
                        y: [0, -50, 0],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                />
            </div>

            {/* Floating Particles */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white/30 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -100, 0],
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 3,
                            repeat: Infinity,
                            delay: Math.random() * 3,
                        }}
                    />
                ))}
            </div>

            <motion.div style={{ y, opacity }} className="container mx-auto px-6 relative z-10 pt-36 md:pt-44">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Main Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-white mb-6 text-4xl md:text-5xl lg:text-6xl leading-tight font-display"
                    >
                        Manifest Your <span className="gradient-text-gold">Dreams</span> Into <span className="gradient-text">Reality</span>
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed"
                    >
                        Join 2,000+ students mastering the I Am Power Flow™ method
                    </motion.p>

                    {/* Dual CTA: WhatsApp Us | View Programs */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <a
                            href="https://wa.me/919876543210"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn bg-[#25D366] hover:bg-[#20BD5A] text-white text-lg px-8 py-4 shadow-lg shadow-[#25D366]/30"
                        >
                            <MessageCircle className="w-5 h-5" />
                            WhatsApp Us
                        </a>
                        <Link to="/programs" className="btn btn-outline text-lg px-8 py-4 group">
                            View Programs
                            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </motion.div>
                </div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
            >
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
                    <motion.div
                        className="w-1.5 h-3 bg-white/50 rounded-full"
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    />
                </div>
            </motion.div>
        </section>
    );
}

// Social proof bar: 2000+ students | 500+ success stories
function SocialProofBar() {
    return (
        <section className="py-6 bg-white border-b border-neutral-100">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap items-center justify-center gap-8 md:gap-12 text-neutral-600"
                >
                    <div className="flex items-center gap-2">
                        <Users className="w-5 h-5 text-primary-500" />
                        <span className="font-semibold text-neutral-800">2,000+ students</span>
                    </div>
                    <div className="hidden md:block w-px h-5 bg-neutral-200" />
                    <div className="flex items-center gap-2">
                        <Star className="w-5 h-5 text-secondary-500 fill-secondary-500" />
                        <span className="font-semibold text-neutral-800">500+ success stories</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

// THE 3 PILLARS OF TRANSFORMATION – Wealth, Relationships, Health
function MethodologySection() {
    const pillars = [
        {
            icon: Target,
            title: 'Wealth',
            emoji: '💰',
            description:
                'Align your energy with abundance. Release blocks around money and success. Attract opportunities and financial flow through the I Am Power Flow™ practices.',
            color: 'from-secondary-500 to-yellow-500',
            bgColor: 'bg-secondary-50',
        },
        {
            icon: Heart,
            title: 'Relationships',
            emoji: '❤️',
            description:
                'Heal past patterns and open to love. Self-love first, then attracting and nurturing the relationships you deserve.',
            color: 'from-primary-500 to-purple-600',
            bgColor: 'bg-primary-50',
        },
        {
            icon: Flame,
            title: 'Health',
            emoji: '🏥',
            description:
                'Restore vitality and balance. Energy healing and mind-body practices to support physical and emotional wellbeing.',
            color: 'from-orange-500 to-red-500',
            bgColor: 'bg-red-50',
        },
    ];

    return (
        <section className="section bg-neutral-50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="text-neutral-900 mb-4 uppercase tracking-wide text-sm font-semibold text-neutral-500 text-center">
                        The 3 Pillars of Transformation
                    </h2>
                    <p className="text-neutral-600 text-lg text-center">
                        Wealth, Relationships, and Health. The I Am Power Flow™ framework for lasting change.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={pillar.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className="group"
                        >
                            <div className="bg-white rounded-3xl p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-300 border border-neutral-100 group-hover:border-primary-200 relative overflow-hidden">
                                {/* Decorative gradient */}
                                <div
                                    className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${pillar.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`}
                                />

                                <div className={`inline-flex p-4 rounded-2xl ${pillar.bgColor} mb-6 relative z-10`}>
                                    <span className="text-3xl mr-2" aria-hidden>{pillar.emoji}</span>
                                    <pillar.icon className="w-8 h-8 text-primary-600" />
                                </div>

                                <h3 className="text-xl font-bold text-neutral-900 mb-3 relative z-10">
                                    {pillar.title}
                                </h3>

                                <p className="text-neutral-600 relative z-10">{pillar.description}</p>

                                <Link
                                    to="/about"
                                    className="inline-flex items-center gap-2 text-primary-600 font-medium mt-6 group-hover:gap-3 transition-all"
                                >
                                    Learn More <ChevronRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Featured video testimonial carousel
const VIDEO_TESTIMONIALS = [
    { id: '1', title: 'I manifested ₹5L in 30 days', ytId: 'dQw4w9WgXcQ', result: 'Wealth' },
    { id: '2', title: 'My relationship completely transformed', ytId: 'dQw4w9WgXcQ', result: 'Relationships' },
    { id: '3', title: 'Finally healed from years of pain', ytId: 'dQw4w9WgXcQ', result: 'Health' },
];

function VideoTestimonialCarousel() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const scroll = (dir: 'l' | 'r') => {
        if (!scrollRef.current) return;
        const amount = scrollRef.current.clientWidth * 0.8;
        scrollRef.current.scrollBy({ left: dir === 'l' ? -amount : amount, behavior: 'smooth' });
    };

    return (
        <section className="section bg-white">
            <div className="container mx-auto px-6">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-12">
                    <span className="inline-block px-4 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm font-medium mb-4">Watch & Believe</span>
                    <h2 className="text-neutral-900 mb-4">Featured <span className="gradient-text-gold">Video Testimonials</span></h2>
                    <p className="text-neutral-600 text-lg text-center">Hear directly from students who transformed their lives with the I Am Power Flow™ method.</p>
                </motion.div>
                <div className="relative max-w-4xl mx-auto">
                    <button type="button" onClick={() => scroll('l')} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg border border-neutral-200 flex items-center justify-center text-neutral-700 hover:bg-neutral-50 -translate-x-2" aria-label="Previous">
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button type="button" onClick={() => scroll('r')} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg border border-neutral-200 flex items-center justify-center text-neutral-700 hover:bg-neutral-50 translate-x-2" aria-label="Next">
                        <ChevronRight className="w-6 h-6" />
                    </button>
                    <div ref={scrollRef} className="flex gap-6 justify-center overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4" style={{ scrollbarWidth: 'none' }}>
                        {VIDEO_TESTIMONIALS.map((v) => (
                            <div key={v.id} className="flex-shrink-0 w-[min(100%,340px)] snap-center rounded-2xl overflow-hidden border border-neutral-100 shadow-lg">
                                <div className="aspect-video bg-neutral-900 relative">
                                    <iframe title={v.title} className="absolute inset-0 w-full h-full" src={`https://www.youtube.com/embed/${v.ytId}?rel=0`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                                </div>
                                <div className="p-4 bg-white">
                                    <div className="text-xs font-medium text-secondary-600 mb-1">{v.result}</div>
                                    <div className="font-semibold text-neutral-900">{v.title}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

// Instagram feed – @magicalneer [IMG] [IMG] [IMG] [Reel] [IMG]
function InstagramSection() {
    const INSTAGRAM_URL = 'https://www.instagram.com/magicalneer/';
    const tiles = [
        { type: 'img' as const },
        { type: 'img' as const },
        { type: 'img' as const },
        { type: 'reel' as const },
        { type: 'img' as const },
    ];
    return (
        <section className="section bg-neutral-50">
            <div className="container mx-auto px-6">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-12">
                    <span className="inline-block px-4 py-1 bg-pink-100 text-pink-700 rounded-full text-sm font-medium mb-4">@magicalneer</span>
                    <h2 className="text-neutral-900 mb-4">Instagram Feed</h2>
                    <p className="text-neutral-600 text-lg text-center">Daily inspiration, reels, and community. Follow along.</p>
                </motion.div>
                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                        {tiles.map((tile, i) => (
                            <a
                                key={i}
                                href={INSTAGRAM_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="aspect-square rounded-2xl bg-gradient-to-br from-primary-100 to-secondary-100 border border-neutral-100 flex items-center justify-center hover:shadow-lg transition-shadow relative overflow-hidden"
                            >
                                <Instagram className="w-10 h-10 text-primary-500" />
                                {tile.type === 'reel' && (
                                    <span className="absolute bottom-1 left-1 right-1 text-center text-[10px] font-semibold text-white bg-black/60 rounded py-0.5">
                                        Reel
                                    </span>
                                )}
                            </a>
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="btn btn-outline border-neutral-300 text-neutral-700 hover:bg-neutral-100">
                            <Instagram className="w-5 h-5" /> View @magicalneer
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

// CHOOSE YOUR PATH – 4 cards in 2x2: FREE Starter | ₹1,999 Course | ₹9,999 MASTER [POPULAR] | ₹49,999 VIP 1:1 PLATINUM
function PricingSection() {
    const plans = [
        {
            name: 'Starter',
            price: 'FREE',
            period: 'forever',
            description: 'Community + free resources to begin',
            features: ['WhatsApp Community', 'Free Resources', 'Weekly Replays'],
            cta: 'Get Free Access',
            tag: null,
            popular: false,
            href: '/free-resources',
        },
        {
            name: 'Course',
            price: '₹1,999',
            period: 'one-time',
            description: 'Self-paced course for beginners',
            features: ['Self-Paced Course', 'Guided Meditations', 'Lifetime Access'],
            cta: 'Enroll Now',
            tag: null,
            popular: false,
            href: '/programs',
        },
        {
            name: 'Master',
            price: '₹9,999',
            period: 'one-time',
            description: 'Live cohort + community – deep transformation',
            features: ['Live Cohort', 'Weekly Live Sessions', '100+ Sessions', 'Certificate'],
            cta: 'Enroll Now',
            tag: 'Most Popular',
            popular: true,
            href: '/programs',
        },
        {
            name: 'VIP 1:1 Platinum',
            price: '₹49,999',
            period: 'one-time',
            description: '1:1 coaching with Neer + everything in Master',
            features: ['1:1 with Neer', 'Everything in Master', 'Payment plans (3x)'],
            cta: 'Book Discovery Call',
            tag: null,
            popular: false,
            href: '/book-call',
        },
    ];

    return (
        <section className="section bg-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-12"
                >
                    <h2 className="text-neutral-900 mb-4 uppercase tracking-wide text-sm font-semibold text-neutral-500 text-center">
                        Choose Your Path
                    </h2>
                    <p className="text-neutral-600 text-lg text-center">
                        From free access to 1:1 coaching. Every path includes the I Am Power Flow™ method.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 max-w-4xl mx-auto gap-6 items-stretch">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative ${plan.popular ? 'lg:-mt-4' : ''}`}
                        >
                            {plan.tag && (
                                <div className={`absolute -top-4 left-1/2 -translate-x-1/2 z-10 px-4 py-1 text-sm font-medium rounded-full ${plan.popular
                                    ? 'bg-gradient-to-r from-secondary-500 to-secondary-600 text-white'
                                    : 'bg-primary-100 text-primary-700 border border-primary-200'
                                    }`}>
                                    {plan.tag}
                                </div>
                            )}

                            <div
                                className={`rounded-3xl p-6 h-full transition-all duration-300 ${plan.popular
                                    ? 'bg-gradient-to-br from-primary-600 to-primary-700 text-white shadow-2xl shadow-primary-500/30'
                                    : 'bg-white border-2 border-neutral-100 hover:border-primary-200 shadow-lg'
                                    }`}
                            >
                                <div className="text-center mb-6">
                                    <h3 className={`text-lg font-bold mb-2 ${plan.popular ? 'text-white' : 'text-neutral-900'}`}>
                                        {plan.name}
                                    </h3>
                                    <p className={`text-sm mb-4 ${plan.popular ? 'text-white/80' : 'text-neutral-500'}`}>
                                        {plan.description}
                                    </p>
                                    <div className="flex items-baseline justify-center gap-1">
                                        <span className={`font-display text-3xl font-bold ${plan.popular ? 'text-white' : 'text-neutral-900'}`}>
                                            {plan.price}
                                        </span>
                                        <span className={`text-sm ${plan.popular ? 'text-white/70' : 'text-neutral-500'}`}>
                                            / {plan.period}
                                        </span>
                                    </div>
                                </div>

                                <ul className="space-y-3 mb-6">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex items-start gap-2">
                                            <CheckCircle className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.popular ? 'text-secondary-300' : 'text-accent-500'}`} />
                                            <span className={`text-sm ${plan.popular ? 'text-white/90' : 'text-neutral-600'}`}>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    to={plan.href}
                                    className={`btn w-full justify-center text-sm py-3 ${plan.popular
                                        ? 'bg-white text-primary-700 hover:bg-neutral-50'
                                        : 'btn-primary'
                                        }`}
                                >
                                    {plan.cta}
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// FREE 7-DAY ABUNDANCE ACTIVATION – lead magnet
function FreeResourceSection() {
    return (
        <section className="section bg-gradient-to-br from-secondary-50 to-secondary-100/50 relative overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-secondary-300/30 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-300/20 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-2xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl"
                    >
                        <div className="inline-flex p-4 bg-secondary-100 rounded-2xl mb-6">
                            <Zap className="w-8 h-8 text-secondary-600" />
                        </div>

                        <h2 className="text-neutral-900 mb-2">
                            Free 7-Day <span className="gradient-text">Abundance Activation</span>
                        </h2>
                        <p className="text-neutral-600 mb-6">
                            Get instant access to:
                        </p>

                        <ul className="space-y-3 mb-8">
                            <li className="flex items-center gap-3 text-neutral-700">
                                <CheckCircle className="w-5 h-5 text-accent-500 flex-shrink-0" />
                                Daily audio meditations
                            </li>
                            <li className="flex items-center gap-3 text-neutral-700">
                                <CheckCircle className="w-5 h-5 text-accent-500 flex-shrink-0" />
                                Wealth affirmations PDF
                            </li>
                            <li className="flex items-center gap-3 text-neutral-700">
                                <CheckCircle className="w-5 h-5 text-accent-500 flex-shrink-0" />
                                Manifestation checklist
                            </li>
                        </ul>

                        <form className="flex flex-col sm:flex-row gap-3">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="input flex-1"
                            />
                            <button type="submit" className="btn btn-secondary whitespace-nowrap">
                                Get Access
                            </button>
                        </form>

                        <p className="text-neutral-400 text-sm mt-4">
                            ✓ Instant access &nbsp;✓ No spam &nbsp;✓ Unsubscribe anytime
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

// Main Homepage Component
export default function HomePage() {
    return (
        <>
            <HeroSection />
            <SocialProofBar />
            <MethodologySection />
            <VideoTestimonialCarousel />
            <PricingSection />
            <InstagramSection />
            <FreeResourceSection />
        </>
    );
}
