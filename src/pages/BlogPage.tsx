import { motion } from 'framer-motion';
import { Search, Calendar, User, ArrowRight, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

const blogPosts = [
    {
        id: 1,
        title: '7 Signs the Universe Is Trying to Tell You Something',
        excerpt: 'Have you ever felt like a coincidence was more than just random chance? Learn to recognize the subtle signs and synchronicities that guide your manifestation journey.',
        category: 'Spirituality',
        author: 'Neer',
        date: 'Oct 15, 2025',
        image: 'bg-primary-100', // Placeholder until real images
        readTime: '5 min read'
    },
    {
        id: 2,
        title: 'How to Manifest Money: A Step-by-Step Guide',
        excerpt: 'Practical techniques to align your energy with financial abundance. Reprogram your subconscious mind to accept wealth as your birthright.',
        category: 'Wealth',
        author: 'Neer',
        date: 'Oct 10, 2025',
        image: 'bg-secondary-100',
        readTime: '8 min read'
    },
    {
        id: 3,
        title: 'The Science Behind Energy Healing',
        excerpt: 'What modern research tells us about the effectiveness of energy healing modalities throughout history and into the quantum age.',
        category: 'Healing',
        author: 'Dr. Sarah',
        date: 'Oct 05, 2025',
        image: 'bg-accent-100',
        readTime: '6 min read'
    },
    {
        id: 4,
        title: 'Morning Routines of Successful Manifestors',
        excerpt: 'How to structure your mornings for maximum manifestation power and productivity. The first hour of your day determines your vibration.',
        category: 'Lifestyle',
        author: 'Neer',
        date: 'Sep 28, 2025',
        image: 'bg-primary-50',
        readTime: '7 min read'
    },
    {
        id: 5,
        title: 'Clearing Blockages in Your Heart Chakra',
        excerpt: 'The heart chakra is the bridge between the physical and spiritual. Learn simple exercises to open your heart to receive love.',
        category: 'Healing',
        author: 'Neer',
        date: 'Sep 20, 2025',
        image: 'bg-rose-100',
        readTime: '10 min read'
    },
    {
        id: 6,
        title: 'Crystals for Abundance: Top 5 Must-Haves',
        excerpt: 'Enhance your manifestation practice with these powerful crystals known to attract wealth, opportunities, and good fortune.',
        category: 'Crystals',
        author: 'Team Neer',
        date: 'Sep 15, 2025',
        image: 'bg-amber-100',
        readTime: '4 min read'
    }
];

export default function BlogPage() {
    return (
        <>
            {/* Header */}
            <div className="bg-neutral-900 text-white pt-32 pb-16 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-neutral-900 to-neutral-900 opacity-90"></div>
                <div className="container mx-auto px-6 relative z-10 pt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                    >
                        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-8">Wisdom & <span className="text-secondary-400">Insights</span></h1>
                        <p className="text-xl text-white/90 max-w-2xl mx-auto mb-12 leading-relaxed">
                            Deep dive into the world of manifestation, energy healing, and spiritual growth.
                        </p>

                        {/* Search Bar */}
                        <div className="max-w-xl mx-auto relative">
                            <input
                                type="text"
                                placeholder="Search articles..."
                                className="w-full py-4 pl-12 pr-4 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:bg-white/20 focus:border-secondary-500 backdrop-blur-sm transition-all"
                            />
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Content */}
            <section className="section bg-neutral-50">
                <div className="container mx-auto px-6">
                    {/* Categories */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {['All', 'Spirituality', 'Wealth', 'Healing', 'Lifestyle', 'Success Stories'].map((cat, i) => (
                            <button
                                key={cat}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${i === 0 ? 'bg-primary-600 text-white' : 'bg-white text-neutral-600 hover:bg-neutral-100 border border-neutral-200'}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Blog Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post, index) => (
                            <motion.article
                                key={post.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group flex flex-col h-full border border-neutral-100"
                            >
                                {/* Image Area */}
                                <div className={`h-48 ${post.image} relative overflow-hidden`}>
                                    <div className="absolute inset-0 flex items-center justify-center text-neutral-400 opacity-50">
                                        <Tag className="w-12 h-12" />
                                    </div>
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary-700">
                                        {post.category}
                                    </div>
                                </div>

                                <div className="p-6 flex-1 flex flex-col">
                                    <div className="flex items-center gap-4 text-xs text-neutral-500 mb-3">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="w-3 h-3" /> {post.date}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <User className="w-3 h-3" /> {post.author}
                                        </div>
                                        <div>{post.readTime}</div>
                                    </div>

                                    <h3 className="font-display text-xl font-bold text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors">
                                        {post.title}
                                    </h3>

                                    <p className="text-neutral-600 text-sm mb-4 flex-1">
                                        {post.excerpt}
                                    </p>

                                    <div className="pt-4 mt-auto border-t border-neutral-100">
                                        <Link to={`/blog/${post.id}`} className="inline-flex items-center text-primary-600 font-semibold text-sm hover:text-primary-800 transition-colors">
                                            Read Article <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="mt-16 flex justify-center gap-2">
                        <button className="w-10 h-10 rounded-lg bg-primary-600 text-white flex items-center justify-center font-bold">1</button>
                        <button className="w-10 h-10 rounded-lg bg-white text-neutral-600 hover:bg-neutral-100 flex items-center justify-center font-medium border border-neutral-200">2</button>
                        <button className="w-10 h-10 rounded-lg bg-white text-neutral-600 hover:bg-neutral-100 flex items-center justify-center font-medium border border-neutral-200">3</button>
                        <button className="w-10 h-10 rounded-lg bg-white text-neutral-600 hover:bg-neutral-100 flex items-center justify-center font-medium border border-neutral-200">...</button>
                    </div>
                </div>
            </section>
        </>
    );
}
