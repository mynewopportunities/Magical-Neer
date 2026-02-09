import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    Download,
    Play,
    FileText,
    Headphones,
    BookOpen,
    ArrowRight,
    Lock,
    Star,
    Clock,
    Gift,
    X,
    CheckCircle,
} from 'lucide-react';

// Resources Data
const freeResources = [
    {
        id: 1,
        title: '5-Day Manifestation Starter Guide',
        description: 'A comprehensive PDF guide to kickstart your manifestation journey with daily practices and exercises.',
        type: 'pdf',
        icon: FileText,
        downloadCount: '15,000+',
        free: true,
    },
    {
        id: 2,
        title: 'Morning Power Affirmations',
        description: '21 powerful affirmations to start your day with high vibrational energy and abundance mindset.',
        type: 'audio',
        icon: Headphones,
        duration: '12 min',
        free: true,
    },
    {
        id: 3,
        title: 'Power Flow Assessment Quiz',
        description: 'Discover your current manifestation blocks and receive a personalized roadmap.',
        type: 'quiz',
        icon: Star,
        completions: '8,500+',
        free: true,
    },
    {
        id: 4,
        title: 'Chakra Healing Meditation',
        description: 'A guided meditation to cleanse and align all 7 chakras for optimal energy flow.',
        type: 'audio',
        icon: Headphones,
        duration: '25 min',
        free: true,
    },
];

const premiumResources = [
    {
        id: 1,
        title: 'Complete Manifestation Workbook',
        description: '100+ page workbook with exercises, journal prompts, and tracking sheets for your transformation.',
        type: 'pdf',
        icon: BookOpen,
        tier: 'Abundance Seeker+',
    },
    {
        id: 2,
        title: 'Wealth Consciousness Meditation Series',
        description: '7 guided meditations specifically designed to reprogram your relationship with money.',
        type: 'audio',
        icon: Headphones,
        tier: 'Manifestation Master+',
    },
    {
        id: 3,
        title: 'Monthly Abundance Ritual Guide',
        description: 'Detailed rituals aligned with moon phases for maximum manifestation power.',
        type: 'pdf',
        icon: FileText,
        tier: 'Manifestation Master+',
    },
    {
        id: 4,
        title: 'Personal Energy Assessment Report',
        description: 'Custom energy reading and personalized recommendations by Neer.',
        type: 'report',
        icon: Star,
        tier: 'VIP Platinum',
    },
];

const blogPosts = [
    {
        id: 1,
        title: '7 Signs the Universe Is Trying to Tell You Something',
        excerpt: 'Learn to recognize the subtle signs and synchronicities that guide your manifestation journey.',
        readTime: '5 min read',
        category: 'Spirituality',
    },
    {
        id: 2,
        title: 'How to Manifest Money: A Step-by-Step Guide',
        excerpt: 'Practical techniques to align your energy with financial abundance and wealth consciousness.',
        readTime: '8 min read',
        category: 'Wealth',
    },
    {
        id: 3,
        title: 'The Science Behind Energy Healing',
        excerpt: 'What modern research tells us about the effectiveness of energy healing modalities.',
        readTime: '6 min read',
        category: 'Healing',
    },
    {
        id: 4,
        title: 'Morning Routines of Successful Manifestors',
        excerpt: 'How to structure your mornings for maximum manifestation power and productivity.',
        readTime: '7 min read',
        category: 'Lifestyle',
    },
];

// Hero Section
function ResourcesHero() {
    return (
        <section className="relative py-32 gradient-hero overflow-hidden">
            <div className="absolute inset-0">
                <motion.div
                    className="absolute top-20 left-20 w-72 h-72 bg-accent-500/20 rounded-full blur-3xl"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 8, repeat: Infinity }}
                />
                <motion.div
                    className="absolute bottom-20 right-20 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 6, repeat: Infinity }}
                />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm mb-6">
                        <Gift className="w-4 h-4 text-secondary-400" />
                        Lead Magnets
                    </span>

                    <h1 className="text-white mb-6">
                        Start Your Journey <span className="gradient-text-gold">Free</span>
                    </h1>

                    <p className="text-white/80 text-xl max-w-2xl mx-auto">
                        Free downloads, guided meditations, workbooks, and more to support your manifestation journey.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

// Gated download modal – email capture before access
function GatedModal({
    open,
    onClose,
    resourceTitle,
    onSuccess,
}: {
    open: boolean;
    onClose: () => void;
    resourceTitle: string;
    resourceType: string;
    onSuccess: () => void;
}) {
    const [email, setEmail] = useState('');
    const [done, setDone] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setDone(true);
        onSuccess();
    };

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.95 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0.95 }}
                        onClick={(e) => e.stopPropagation()}
                        className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8"
                    >
                        <div className="flex justify-between items-start mb-6">
                            <h3 className="text-xl font-bold text-neutral-900">Get free access</h3>
                            <button type="button" onClick={onClose} className="p-2 rounded-full hover:bg-neutral-100" aria-label="Close">
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        {!done ? (
                            <>
                                <p className="text-neutral-600 mb-4">Enter your email to access <strong>{resourceTitle}</strong>.</p>
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <input
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="input"
                                        placeholder="you@example.com"
                                    />
                                    <button type="submit" className="btn btn-primary w-full">Send me the link</button>
                                </form>
                            </>
                        ) : (
                            <div className="text-center py-4">
                                <div className="w-14 h-14 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <CheckCircle className="w-8 h-8 text-accent-600" />
                                </div>
                                <p className="text-neutral-700 font-medium">Check your email</p>
                                <p className="text-neutral-500 text-sm mt-1">We've sent you the link to access {resourceTitle}.</p>
                                <button type="button" onClick={onClose} className="btn btn-ghost mt-4">Close</button>
                            </div>
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

// Free Resources Section – gated download (email capture)
function FreeResourcesSection() {
    const [gatedResource, setGatedResource] = useState<{ title: string; type: string } | null>(null);

    return (
        <section className="section bg-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <span className="inline-block px-4 py-1 bg-accent-100 text-accent-700 rounded-full text-sm font-medium mb-4">
                        Free Resources
                    </span>
                    <h2 className="text-neutral-900 mb-4">
                        Start Your Journey <span className="gradient-text">For Free</span>
                    </h2>
                    <p className="text-neutral-600 text-lg">
                        Enter your email to access these resources. No spam, unsubscribe anytime.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {freeResources.map((resource, index) => (
                        <motion.div
                            key={resource.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-neutral-100 h-full flex flex-col">
                                <div className="flex items-start gap-4">
                                    <div className="w-14 h-14 bg-accent-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                                        <resource.icon className="w-7 h-7 text-accent-600" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="px-2 py-0.5 bg-accent-500 text-white text-xs font-medium rounded-full">FREE</span>
                                            {resource.downloadCount && <span className="text-neutral-500 text-xs">{resource.downloadCount} downloads</span>}
                                            {resource.duration && <span className="text-neutral-500 text-xs flex items-center gap-1"><Clock className="w-3 h-3" /> {resource.duration}</span>}
                                            {resource.completions && <span className="text-neutral-500 text-xs">{resource.completions} completions</span>}
                                        </div>
                                        <h3 className="text-lg font-bold text-neutral-900 mb-2">{resource.title}</h3>
                                        <p className="text-neutral-600 text-sm mb-4">{resource.description}</p>
                                    </div>
                                </div>
                                <div className="mt-auto pt-4">
                                    <button
                                        type="button"
                                        onClick={() => setGatedResource({ title: resource.title, type: resource.type })}
                                        className="btn btn-primary w-full justify-center"
                                    >
                                        {resource.type === 'audio' && <Play className="w-4 h-4" />}
                                        {resource.type === 'pdf' && <Download className="w-4 h-4" />}
                                        {resource.type === 'quiz' && <ArrowRight className="w-4 h-4" />}
                                        {resource.type === 'audio' ? 'Listen Now' : resource.type === 'quiz' ? 'Take Quiz' : 'Download Free'}
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {gatedResource && (
                <GatedModal
                    open={!!gatedResource}
                    onClose={() => setGatedResource(null)}
                    resourceTitle={gatedResource.title}
                    resourceType={gatedResource.type}
                    onSuccess={() => {}}
                />
            )}
        </section>
    );
}

// Premium Resources Section
function PremiumResourcesSection() {
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
                        Premium Resources
                    </span>
                    <h2 className="text-neutral-900 mb-4">
                        Exclusive <span className="gradient-text">Member Content</span>
                    </h2>
                    <p className="text-neutral-600 text-lg">
                        Unlock these powerful resources when you join one of our transformation programs.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {premiumResources.map((resource, index) => (
                        <motion.div
                            key={resource.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-100 h-full flex flex-col relative overflow-hidden">
                                {/* Lock Overlay */}
                                <div className="absolute top-4 right-4 w-8 h-8 bg-neutral-100 rounded-full flex items-center justify-center">
                                    <Lock className="w-4 h-4 text-neutral-400" />
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                                        <resource.icon className="w-7 h-7 text-primary-600" />
                                    </div>
                                    <div className="flex-1 pr-8">
                                        <span className="inline-block px-2 py-0.5 bg-primary-100 text-primary-700 text-xs font-medium rounded-full mb-2">
                                            {resource.tier}
                                        </span>
                                        <h3 className="text-lg font-bold text-neutral-900 mb-2">{resource.title}</h3>
                                        <p className="text-neutral-600 text-sm">{resource.description}</p>
                                    </div>
                                </div>

                                <div className="mt-auto pt-4">
                                    <Link to="/programs" className="btn btn-outline w-full justify-center border-primary-200 text-primary-600 hover:bg-primary-50">
                                        Unlock Access <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Blog Section
function BlogSection() {
    return (
        <section className="section bg-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <span className="inline-block px-4 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm font-medium mb-4">
                        Blog & Articles
                    </span>
                    <h2 className="text-neutral-900 mb-4">
                        Wisdom for Your <span className="gradient-text">Journey</span>
                    </h2>
                    <p className="text-neutral-600 text-lg">
                        Explore our collection of articles on manifestation, healing, and spiritual growth.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {blogPosts.map((post, index) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group cursor-pointer"
                        >
                            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-neutral-100">
                                {/* Placeholder Image */}
                                <div className="aspect-video bg-gradient-to-br from-primary-100 to-secondary-100 relative">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <BookOpen className="w-12 h-12 text-primary-300" />
                                    </div>
                                </div>

                                <div className="p-5">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="text-xs font-medium text-primary-600 bg-primary-50 px-2 py-1 rounded-full">
                                            {post.category}
                                        </span>
                                        <span className="text-xs text-neutral-500">{post.readTime}</span>
                                    </div>

                                    <h3 className="font-bold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
                                        {post.title}
                                    </h3>

                                    <p className="text-neutral-600 text-sm line-clamp-2">{post.excerpt}</p>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <Link to="/blog" className="btn btn-outline inline-flex">
                        View All Articles <ArrowRight className="w-5 h-5" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}

// Newsletter CTA
function NewsletterCTA() {
    return (
        <section className="section bg-gradient-to-br from-primary-600 to-primary-700">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto text-center text-white"
                >
                    <h2 className="text-white mb-4">Get Weekly Manifestation Tips</h2>
                    <p className="text-white/80 text-lg mb-8">
                        Join 10,000+ manifestors receiving exclusive tips, resources, and inspiration every week.
                    </p>

                    <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-5 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:border-white/50 transition-colors"
                        />
                        <button type="submit" className="btn btn-secondary whitespace-nowrap">
                            Subscribe <ArrowRight className="w-4 h-4" />
                        </button>
                    </form>

                    <p className="text-white/60 text-sm mt-4">
                        No spam, unsubscribe anytime
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

export default function ResourcesPage() {
    return (
        <>
            <ResourcesHero />
            <FreeResourcesSection />
            <PremiumResourcesSection />
            <BlogSection />
            <NewsletterCTA />
        </>
    );
}
