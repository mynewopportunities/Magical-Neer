import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    Sparkles,
    Award,
    BookOpen,
    Heart,
    Star,
    Quote,
    Instagram,
    Youtube,
    ArrowRight,
    X,
} from 'lucide-react';

const ABOUT_VIDEO_ID = 'dQw4w9WgXcQ'; // Replace with Neer's intro video ID
const GALLERY_IMAGES = [
    { src: '/images/neer-portrait.png', alt: 'Neer portrait' },
    { src: '/images/hero-meditation.png', alt: 'Meditation' },
    { src: '/images/healing-space.png', alt: 'Healing space' },
    { src: '/images/energy-flow.png', alt: 'Energy flow' },
];

// Hero Section
function AboutHero() {
    return (
        <section className="relative min-h-[60vh] flex items-center gradient-hero overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <motion.div
                    className="absolute top-20 right-20 w-72 h-72 bg-secondary-500/20 rounded-full blur-3xl"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 8, repeat: Infinity }}
                />
                <motion.div
                    className="absolute bottom-20 left-20 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 6, repeat: Infinity }}
                />
            </div>

            <div className="container mx-auto px-6 relative z-10 pt-28 pb-12">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="relative order-2 lg:order-1"
                    >
                        <div className="relative">
                            {/* Main Image Container */}
                            <div className="relative w-full max-w-lg mx-auto aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10">
                                {/* Primary portrait image for About page */}
                                <img
                                    src="/images/neer-about.png"
                                    alt="Neer - Spiritual Guide"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                            </div>

                            {/* Floating Badge */}
                            <motion.div
                                className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-4"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.8, type: 'spring' }}
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-secondary-100 rounded-xl flex items-center justify-center">
                                        <Award className="w-6 h-6 text-secondary-600" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-neutral-900">19+ Years</div>
                                        <div className="text-sm text-neutral-500">Spiritual Practice</div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="order-1 lg:order-2"
                    >
                        <span className="inline-block px-4 py-1 bg-white/10 text-white/90 rounded-full text-sm font-medium mb-6">
                            Spiritual Growth Catalyst
                        </span>

                        <h1 className="text-white mb-6">
                            Hi, I'm <span className="gradient-text-gold">Neer</span>
                        </h1>

                        <p className="text-white text-lg mb-6">
                            India's Leading Action-Based Manifestation Coach & Founder of the I Am Power Flow™ methodology. My mission is to guide you to unlock your potential using the ancient wisdom of <em>"Yatha Dhrusti thata Shrusti"</em>.
                        </p>

                        <p className="text-white mb-8">
                            From a successful corporate career to a profound spiritual awakening, I've walked the path of transformation. Now, with over 200,000+ students mentored, I'm here to help you bridge the gap between where you are and where you deserve to be.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Link to="/book-call" className="btn btn-secondary">
                                Book Discovery Call <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link to="/programs" className="btn btn-outline">
                                View Programs
                            </Link>
                            <a
                                href="https://instagram.com/magicalneer"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-outline"
                            >
                                <Instagram className="w-5 h-5" /> Follow My Journey
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

// Journey Timeline Section
function JourneySection() {
    const timeline = [
        {
            year: '2015',
            title: 'The Corporate Pivot',
            description: 'Despite a successful corporate career, I felt a deep void. A sudden health crisis became the catalyst for my spiritual awakening.',
        },
        {
            year: '2017',
            title: 'Deepening The Practice',
            description: 'I immersed myself in ancient scriptures and energy healing, bridging the gap between scientific logic and spiritual wisdom.',
        },
        {
            year: '2019',
            title: 'First Transformations',
            description: 'Started mentoring close circles. The "Yatha Dhrusti thata Shrusti" principle began producing miraculous results for my students.',
        },
        {
            year: '2021',
            title: 'I Am Power Flow™',
            description: 'Formalized my signature methodology. A unique blend of actionable strategies and energetic alignment.',
        },
        {
            year: '2023',
            title: 'National Recognition',
            description: 'Honored as "India\'s Leading Action-Based Manifestation Coach". Media features in top publications.',
        },
        {
            year: '2026',
            title: 'Global Movement',
            description: 'Leading a community of 200,000+ manifestors. Launching the "Desired Reality" global masterclass.',
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
                    <span className="inline-block px-4 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
                        My Journey
                    </span>
                    <h2 className="text-neutral-900 mb-4">
                        From Struggle to <span className="gradient-text">Spiritual Awakening</span>
                    </h2>
                    <p className="text-neutral-600 text-lg text-center">
                        Every great transformation begins with a single step. Here's how my journey unfolded.
                    </p>
                </motion.div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Timeline Line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-primary-200 hidden md:block" />

                    {timeline.map((item, index) => (
                        <motion.div
                            key={item.year}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative flex items-center gap-8 mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                }`}
                        >
                            {/* Content Card */}
                            <div className="flex-1">
                                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                                    <div className="font-display text-2xl font-bold text-primary-600 mb-2">
                                        {item.year}
                                    </div>
                                    <h3 className="text-xl font-bold text-neutral-900 mb-2">{item.title}</h3>
                                    <p className="text-neutral-600">{item.description}</p>
                                </div>
                            </div>

                            {/* Timeline Dot */}
                            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-primary-100" />

                            {/* Spacer for alternating layout */}
                            <div className="flex-1 hidden md:block" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Philosophy Section
function PhilosophySection() {
    const beliefs = [
        {
            icon: Sparkles,
            title: 'You Are Divine',
            description: 'Within you lies unlimited creative power. You are not separate from the source - you ARE the source experiencing itself.',
        },
        {
            icon: Heart,
            title: 'Love Is The Key',
            description: 'Self-love is the foundation of all manifestation. When you truly love yourself, the universe mirrors that love back abundantly.',
        },
        {
            icon: Star,
            title: 'Energy Is Everything',
            description: 'Your vibrational frequency determines your reality. Raise your energy, and watch your external world transform.',
        },
        {
            icon: BookOpen,
            title: 'Ancient Wisdom Works',
            description: 'The secrets to abundance have existed for millennia. I blend these timeless principles with modern science.',
        },
    ];

    return (
        <section className="section bg-white">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="inline-block px-4 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm font-medium mb-4">
                            My Philosophy
                        </span>
                        <h2 className="text-neutral-900 mb-6">
                            What I <span className="gradient-text">Believe</span>
                        </h2>
                        <p className="text-neutral-600 text-lg mb-8">
                            My teachings are rooted in the understanding that you are already whole, already abundant, and already powerful. My role is simply to help you remember this truth and remove the blocks that keep you from experiencing it.
                        </p>

                        <blockquote className="relative pl-6 border-l-4 border-primary-500">
                            <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary-200" />
                            <p className="text-xl italic text-neutral-700 mb-4">
                                "Yatha Dhrusti thata Shrusti — As is your vision, so is your creation. You don't attract what you want, you attract what you ARE."
                            </p>
                            <cite className="text-primary-600 font-semibold">— Neer</cite>
                        </blockquote>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 gap-6">
                        {beliefs.map((belief, index) => (
                            <motion.div
                                key={belief.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-neutral-50 p-6 rounded-2xl hover:bg-primary-50 transition-colors group"
                            >
                                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-100 transition-colors shadow-sm">
                                    <belief.icon className="w-6 h-6 text-primary-600" />
                                </div>
                                <h4 className="text-lg font-bold text-neutral-900 mb-2">{belief.title}</h4>
                                <p className="text-neutral-600 text-sm">{belief.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

// Video introduction – YouTube embed
function VideoIntroSection() {
    return (
        <section className="section bg-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-12"
                >
                    <span className="inline-block px-4 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium mb-4">Watch</span>
                    <h2 className="text-neutral-900 mb-4">A Short <span className="gradient-text">Introduction</span></h2>
                    <p className="text-neutral-600 text-lg text-center">Hear from Neer in this brief video about the I Am Power Flow™ journey.</p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-neutral-100"
                >
                    <div className="aspect-video bg-neutral-900">
                        <iframe
                            title="Introduction from Neer"
                            className="w-full h-full"
                            src={`https://www.youtube.com/embed/${ABOUT_VIDEO_ID}`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

// Photo gallery with lightbox
function GallerySection() {
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    return (
        <section className="section bg-neutral-50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-12"
                >
                    <span className="inline-block px-4 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">Gallery</span>
                    <h2 className="text-neutral-900 mb-4">Moments & <span className="gradient-text">Journey</span></h2>
                    <p className="text-neutral-600 text-lg text-center">A glimpse into retreats, sessions, and community.</p>
                </motion.div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {GALLERY_IMAGES.map((img, index) => (
                        <motion.button
                            key={index}
                            type="button"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            onClick={() => setLightboxIndex(index)}
                            className="aspect-square rounded-2xl overflow-hidden border border-neutral-100 shadow-lg hover:shadow-xl transition-shadow focus:outline-none focus:ring-2 focus:ring-primary-500"
                        >
                            <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                        </motion.button>
                    ))}
                </div>
                <AnimatePresence>
                    {lightboxIndex !== null && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
                            onClick={() => setLightboxIndex(null)}
                        >
                            <button
                                type="button"
                                onClick={() => setLightboxIndex(null)}
                                className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20"
                                aria-label="Close"
                            >
                                <X className="w-6 h-6" />
                            </button>
                            <motion.img
                                initial={{ scale: 0.9 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0.9 }}
                                src={GALLERY_IMAGES[lightboxIndex].src}
                                alt={GALLERY_IMAGES[lightboxIndex].alt}
                                className="max-w-full max-h-[90vh] object-contain rounded-lg"
                                onClick={(e) => e.stopPropagation()}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}

// Social Proof Section
function SocialProofSection() {
    return (
        <section className="section gradient-spiritual text-white">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-white mb-8">
                            Featured In & <span className="gradient-text-gold">Trusted By</span>
                        </h2>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                            {['Podcast 1', 'Magazine', 'Blog', 'YouTube'].map((item, index) => (
                                <motion.div
                                    key={item}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/20"
                                >
                                    <div className="text-white/50 font-medium">{item}</div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href="https://youtube.com/@magicalneer"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-secondary"
                            >
                                <Youtube className="w-5 h-5" /> Subscribe on YouTube
                            </a>
                            <a
                                href="https://instagram.com/magicalneer"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-outline"
                            >
                                <Instagram className="w-5 h-5" /> Follow on Instagram
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

// CTA Section
function CTASection() {
    return (
        <section className="section bg-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-3xl px-8 md:px-12 py-10 md:py-14 text-center text-white"
                >
                    <h2 className="text-white mb-4">Ready to Begin Your Transformation?</h2>
                    <p className="text-white text-lg mb-10 max-w-2xl mx-auto text-center">
                        Join me on this sacred journey of self-discovery and manifestation. Your abundant life is waiting.
                    </p>
                    <Link to="/book-call" className="btn btn-secondary text-lg px-8 py-4 mt-2">
                        Book Discovery Call <ArrowRight className="w-5 h-5" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}

export default function AboutPage() {
    return (
        <>
            <AboutHero />
            <JourneySection />
            <PhilosophySection />
            <VideoIntroSection />
            <GallerySection />
            <SocialProofSection />
            <CTASection />
        </>
    );
}
