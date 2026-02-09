import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Star,
    Quote,
    Play,
    ArrowRight,
    CheckCircle,
    TrendingUp,
    Heart,
    Briefcase,
    Sparkles,
    X,
    Send,
} from 'lucide-react';

// Categories for filtering
const categories = [
    { id: 'all', label: 'All Stories', icon: Sparkles },
    { id: 'wealth', label: 'Wealth', icon: TrendingUp },
    { id: 'health', label: 'Health', icon: Heart },
    { id: 'relationships', label: 'Relationships', icon: Heart },
    { id: 'career', label: 'Career', icon: Briefcase },
];

// Testimonials Data
const testimonials = [
    {
        id: 1,
        name: 'Priya Sharma',
        location: 'Mumbai, India',
        category: 'wealth',
        videoUrl: null,
        image: null,
        content:
            "Within 3 months of following Neer's I Am Power Flow methodology, I manifested a 40% salary increase and my dream apartment. The energy healing sessions were transformative! I went from constantly worrying about money to feeling truly abundant.",
        result: '₹12 Lakhs Salary Increase',
        rating: 5,
        program: 'Manifestation Master',
        beforeAfter: {
            before: 'Struggling with finances, stressed about career',
            after: '40% salary raise, dream apartment, inner peace',
        },
    },
    {
        id: 2,
        name: 'Rahul Verma',
        location: 'Delhi, India',
        category: 'career',
        videoUrl: null,
        image: null,
        content:
            "I was skeptical at first, but the results speak for themselves. My business revenue tripled in 6 months, and I finally found my soulmate. Neer's guidance changed my life completely. The combination of mindset work and energy healing is powerful.",
        result: 'Business Revenue 3x',
        rating: 5,
        program: 'VIP Platinum',
        beforeAfter: {
            before: 'Business stagnating, feeling stuck',
            after: 'Revenue tripled, found life partner',
        },
    },
    {
        id: 3,
        name: 'Sneha Patel',
        location: 'Bangalore, India',
        category: 'career',
        videoUrl: null,
        image: null,
        content:
            'The community support and weekly healing sessions helped me overcome years of self-doubt. I now run my own coaching practice and help others manifest their dreams. Forever grateful to Neer for showing me my potential.',
        result: 'Started Dream Business',
        rating: 5,
        program: 'Manifestation Master',
        beforeAfter: {
            before: 'Corporate job, unfulfilled, low confidence',
            after: 'Successful coaching business, confident leader',
        },
    },
    {
        id: 4,
        name: 'Amit Kapoor',
        location: 'Pune, India',
        category: 'health',
        videoUrl: null,
        image: null,
        content:
            'After years of chronic health issues, the energy healing techniques transformed my wellbeing. I lost 15kg, reversed my prediabetes, and have more energy than I did in my 20s. The mind-body connection Neer teaches is real.',
        result: 'Health Transformation',
        rating: 5,
        program: 'Abundance Seeker',
        beforeAfter: {
            before: 'Chronic fatigue, prediabetes, overweight',
            after: '15kg weight loss, reversed prediabetes, vibrant health',
        },
    },
    {
        id: 5,
        name: 'Meera Krishnan',
        location: 'Chennai, India',
        category: 'relationships',
        videoUrl: null,
        image: null,
        content:
            "I had given up on finding love after my divorce. Neer's work on self-love and releasing past trauma opened my heart again. Within 4 months of joining the program, I met my now-husband. We're expecting our first child!",
        result: 'Found Love & Starting Family',
        rating: 5,
        program: 'Manifestation Master',
        beforeAfter: {
            before: 'Post-divorce, closed off, afraid to love',
            after: 'Happily married, expecting first child',
        },
    },
    {
        id: 6,
        name: 'Vikram Singh',
        location: 'Jaipur, India',
        category: 'wealth',
        videoUrl: null,
        image: null,
        content:
            'As a skeptical engineer, I needed proof. The manifestation techniques Neer teaches actually work. I manifested a ₹50 lakh investment for my startup within 3 months of applying the I Am Power Flow principles consistently.',
        result: '₹50 Lakh Investment',
        rating: 5,
        program: 'VIP Platinum',
        beforeAfter: {
            before: 'Struggling startup, rejected by investors',
            after: '₹50 lakh investment, business thriving',
        },
    },
];

// Hero Section
function SuccessStoriesHero() {
    return (
        <section className="relative pt-32 pb-20 gradient-hero overflow-hidden">
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

            <div className="container mx-auto px-6 relative z-10 pt-24">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center"
                >
                    <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-8">
                        <Star className="w-4 h-4 text-secondary-400 fill-secondary-400" />
                        Real Results from Real People
                    </span>

                    <div className="max-w-4xl mx-auto mb-10">
                        <h1 className="text-white mb-6 text-4xl md:text-5xl lg:text-6xl leading-tight font-display">
                            Lives <span className="gradient-text-gold">Transformed</span>
                        </h1>

                        <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                            Don't just take our word for it. See how the I Am Power Flow™ methodology has helped thousands manifest their dreams into reality.
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mt-12 pt-8 border-t border-white/10">
                        <div className="text-center px-4">
                            <div className="font-display text-3xl md:text-4xl font-bold text-white mb-1">2,847+</div>
                            <div className="text-white/60 text-sm">Success Stories</div>
                        </div>
                        <div className="hidden md:block w-px h-14 bg-white/20" />
                        <div className="text-center px-4">
                            <div className="font-display text-3xl md:text-4xl font-bold text-white mb-1">4.9/5</div>
                            <div className="text-white/60 text-sm">Average Rating</div>
                        </div>
                        <div className="hidden md:block w-px h-14 bg-white/20" />
                        <div className="text-center px-4">
                            <div className="font-display text-3xl md:text-4xl font-bold text-white mb-1">98%</div>
                            <div className="text-white/60 text-sm">Satisfaction Rate</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

// Testimonials Grid Section
function TestimonialsGrid() {
    const [activeCategory, setActiveCategory] = useState('all');

    const filteredTestimonials =
        activeCategory === 'all'
            ? testimonials
            : testimonials.filter((t) => t.category === activeCategory);

    return (
        <section className="py-20 lg:py-24 bg-white">
            <div className="container mx-auto px-6">
                {/* Category Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-3 mb-16"
                >
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all ${activeCategory === category.id
                                ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/30'
                                : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                                }`}
                        >
                            <category.icon className="w-4 h-4" />
                            {category.label}
                        </button>
                    ))}
                </motion.div>

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredTestimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-neutral-100 overflow-hidden h-full flex flex-col">
                                {/* Header */}
                                <div className="p-6 pb-0">
                                    {/* Result Badge */}
                                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent-100 text-accent-700 rounded-full text-sm font-medium mb-4">
                                        <CheckCircle className="w-4 h-4" />
                                        {testimonial.result}
                                    </div>

                                    {/* Rating */}
                                    <div className="flex items-center gap-1 mb-4">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 text-secondary-500 fill-secondary-500" />
                                        ))}
                                    </div>

                                    {/* Content */}
                                    <div className="relative mb-4">
                                        <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary-100" />
                                        <p className="text-neutral-700 italic relative z-10">"{testimonial.content}"</p>
                                    </div>
                                </div>

                                {/* Before/After */}
                                <div className="px-6 py-4 bg-neutral-50 mt-auto">
                                    <div className="grid grid-cols-2 gap-4 text-sm">
                                        <div>
                                            <div className="text-neutral-500 mb-1">Before:</div>
                                            <div className="text-neutral-700">{testimonial.beforeAfter.before}</div>
                                        </div>
                                        <div>
                                            <div className="text-accent-600 mb-1 font-medium">After:</div>
                                            <div className="text-neutral-900 font-medium">{testimonial.beforeAfter.after}</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Author */}
                                <div className="p-6 pt-4 border-t border-neutral-100">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-secondary-400 flex items-center justify-center text-white font-bold">
                                            {testimonial.name.charAt(0)}
                                        </div>
                                        <div className="flex-1">
                                            <div className="font-semibold text-neutral-900">{testimonial.name}</div>
                                            <div className="text-neutral-500 text-sm">{testimonial.location}</div>
                                        </div>
                                        <div className="text-xs text-primary-600 font-medium bg-primary-50 px-2 py-1 rounded-full">
                                            {testimonial.program}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Video Testimonials Section
function VideoTestimonials() {
    return (
        <section className="section bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <span className="inline-block px-4 py-1 bg-white/10 text-white/90 rounded-full text-sm font-medium mb-4">
                        Watch & Listen
                    </span>
                    <h2 className="text-white mb-4">
                        Hear Their <span className="gradient-text-gold">Stories</span>
                    </h2>
                    <p className="text-white text-lg text-center">
                        Watch video testimonials from our students sharing their transformation journeys.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {[1, 2, 3].map((item, index) => (
                        <motion.div
                            key={item}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className="group cursor-pointer"
                        >
                            <div className="relative aspect-video rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-secondary-500 transition-colors">
                                        <Play className="w-8 h-8 text-white fill-white ml-1" />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 text-center">
                                <div className="font-semibold text-white">Transformation Story #{item}</div>
                                <div className="text-white/60 text-sm">Watch the full journey</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Submit Story CTA + form
function SubmitStoryCTA() {
    const [showForm, setShowForm] = useState(false);
    const [, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', program: '', story: '', category: 'wealth' });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setShowForm(false);
    };

    return (
        <section className="section bg-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-secondary-50 to-secondary-100 rounded-3xl p-8 md:p-12"
                >
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="inline-block px-4 py-1 bg-secondary-200 text-secondary-800 rounded-full text-sm font-medium mb-4">
                                Share Your Success
                            </span>
                            <h2 className="text-neutral-900 mb-4">
                                Have Your Own <span className="gradient-text">Success Story?</span>
                            </h2>
                            <p className="text-neutral-600 text-lg mb-6">
                                We love celebrating our community's wins! If you've experienced transformation through our programs, we'd love to hear your story and potentially feature it here.
                            </p>
                            <button type="button" onClick={() => setShowForm(true)} className="btn btn-secondary">
                                Submit Your Story <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white rounded-2xl p-6 shadow-lg">
                                <div className="text-3xl font-display font-bold text-primary-600 mb-2">150+</div>
                                <div className="text-neutral-600">Featured Stories</div>
                            </div>
                            <div className="bg-white rounded-2xl p-6 shadow-lg">
                                <div className="text-3xl font-display font-bold text-secondary-600 mb-2">₹50Cr+</div>
                                <div className="text-neutral-600">Manifested by Students</div>
                            </div>
                            <div className="bg-white rounded-2xl p-6 shadow-lg">
                                <div className="text-3xl font-display font-bold text-accent-600 mb-2">87%</div>
                                <div className="text-neutral-600">Report Life Changes</div>
                            </div>
                            <div className="bg-white rounded-2xl p-6 shadow-lg">
                                <div className="text-3xl font-display font-bold text-red-500 mb-2">92%</div>
                                <div className="text-neutral-600">Would Recommend</div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            <AnimatePresence>
                {showForm && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
                        onClick={() => setShowForm(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white rounded-3xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-8"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-xl font-bold text-neutral-900">Submit Your Story</h3>
                                <button type="button" onClick={() => setShowForm(false)} className="p-2 rounded-full hover:bg-neutral-100" aria-label="Close">
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-neutral-700 mb-1">Name *</label>
                                    <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="input" placeholder="Your name" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-neutral-700 mb-1">Email *</label>
                                    <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="input" placeholder="you@example.com" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-neutral-700 mb-1">Program</label>
                                    <select value={formData.program} onChange={(e) => setFormData({ ...formData, program: e.target.value })} className="input">
                                        <option value="">Select</option>
                                        <option value="foundation">Foundation</option>
                                        <option value="abundance-seeker">Abundance Seeker</option>
                                        <option value="manifestation-master">Manifestation Master</option>
                                        <option value="vip-platinum">VIP Platinum</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-neutral-700 mb-1">Category</label>
                                    <select value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })} className="input">
                                        <option value="wealth">Wealth</option>
                                        <option value="health">Health</option>
                                        <option value="relationships">Relationships</option>
                                        <option value="career">Career</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-neutral-700 mb-1">Your Story *</label>
                                    <textarea required rows={5} value={formData.story} onChange={(e) => setFormData({ ...formData, story: e.target.value })} className="input resize-none" placeholder="Share your transformation..." />
                                </div>
                                <button type="submit" className="btn btn-secondary w-full">
                                    <Send className="w-4 h-4" /> Submit
                                </button>
                            </form>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}

export default function SuccessStoriesPage() {
    return (
        <>
            <SuccessStoriesHero />
            <TestimonialsGrid />
            <VideoTestimonials />
            <SubmitStoryCTA />
        </>
    );
}
