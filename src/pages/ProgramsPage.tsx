
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    CheckCircle,
    Star,
    Users,
    Zap,
    Play,
    Shield,
    ChevronDown,
} from 'lucide-react';

// Hero Section
function ProgramsHero() {
    return (
        <section className="relative pt-32 pb-16 gradient-hero overflow-hidden">
            <div className="absolute inset-0">
                <motion.div
                    className="absolute top-20 left-20 w-72 h-72 bg-secondary-500/20 rounded-full blur-3xl"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 8, repeat: Infinity }}
                />
                <motion.div
                    className="absolute bottom-20 right-20 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 6, repeat: Infinity }}
                />
            </div>

            <div className="container mx-auto px-6 relative z-10 pt-20">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center">
                    <h1 className="text-white mb-6 text-4xl md:text-5xl lg:text-6xl leading-tight font-display">
                        Choose Your <span className="gradient-text-gold">Transformation Path</span>
                    </h1>
                    <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        Select the plan that aligns with your manifestation journey
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

// Comparison table: Feature | Free | ₹1999 | ₹9999 | ₹49999
const comparisonRows: { feature: string; free: boolean; r1999: boolean; r9999: boolean; r49999: boolean }[] = [
    { feature: 'Community', free: true, r1999: true, r9999: true, r49999: true },
    { feature: 'Self-Paced', free: true, r1999: true, r9999: true, r49999: true },
    { feature: 'Live Sessions', free: false, r1999: false, r9999: true, r49999: true },
    { feature: '1:1 Coaching', free: false, r1999: false, r9999: false, r49999: true },
    { feature: 'VIP WhatsApp', free: false, r1999: false, r9999: false, r49999: true },
];

const tiersForTable = [
    { key: 'free' as const, name: 'Free', price: 'Free', popular: false, href: '/free-resources', cta: 'Select' },
    { key: 'r1999' as const, name: '₹1,999', price: '₹1,999', popular: false, href: '/programs', cta: 'Select' },
    { key: 'r9999' as const, name: '₹9,999', price: '₹9,999', popular: true, href: '/programs', cta: 'Select' },
    { key: 'r49999' as const, name: '₹49,999', price: '₹49,999', popular: false, href: '/book-call', cta: 'Select' },
];

function ComparisonTableSection() {
    return (
        <section className="section bg-white relative -mt-8 z-20">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="overflow-hidden rounded-2xl border border-neutral-200 shadow-xl bg-white"
                >
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[640px] text-left">
                            <thead>
                                <tr className="border-b border-neutral-200 bg-neutral-50">
                                    <th className="px-4 py-4 sm:px-6 sm:py-5 font-semibold text-neutral-900">Feature</th>
                                    {tiersForTable.map((tier) => (
                                        <th key={tier.key} className="px-4 py-4 sm:px-6 sm:py-5 text-center">
                                            <div className={`font-bold ${tier.popular ? 'text-primary-600' : 'text-neutral-900'}`}>{tier.price}</div>
                                            {tier.popular && (
                                                <span className="inline-flex items-center gap-1 mt-1 px-2 py-0.5 bg-primary-100 text-primary-700 text-xs font-medium rounded-full">
                                                    <Star className="w-3 h-3 fill-current" /> Popular
                                                </span>
                                            )}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {comparisonRows.map((row, i) => (
                                    <tr key={row.feature} className={i % 2 === 0 ? 'bg-white' : 'bg-neutral-50/50'}>
                                        <td className="px-4 py-3 sm:px-6 sm:py-4 font-medium text-neutral-700">{row.feature}</td>
                                        {tiersForTable.map((tier) => {
                                            const included = row[tier.key];
                                            return (
                                                <td key={tier.key} className="px-4 py-3 sm:px-6 sm:py-4 text-center">
                                                    {included ? (
                                                        <CheckCircle className="w-6 h-6 text-accent-500 mx-auto" />
                                                    ) : (
                                                        <span className="text-neutral-300 text-xl">✗</span>
                                                    )}
                                                </td>
                                            );
                                        })}
                                    </tr>
                                ))}
                                <tr className="border-t-2 border-neutral-200 bg-neutral-50">
                                    <td className="px-4 py-4 sm:px-6 sm:py-5 font-medium text-neutral-900">Choose your plan</td>
                                    {tiersForTable.map((tier) => (
                                        <td key={tier.key} className="px-4 py-4 sm:px-6 sm:py-5 text-center">
                                            <Link
                                                to={tier.href}
                                                className={`btn text-sm w-full max-w-[140px] mx-auto justify-center ${tier.popular
                                                    ? 'btn-primary'
                                                    : 'bg-neutral-800 text-white hover:bg-neutral-700'
                                                    }`}
                                            >
                                                {tier.cta}
                                            </Link>
                                        </td>
                                    ))}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

// FAQ Accordion
const programFaqs = [
    { q: "What's included in each tier?", a: 'Free: community access and free resources. ₹1,999: self-paced course + community. ₹9,999: everything in ₹1,999 plus live sessions, cohort, and certificate. ₹49,999: everything in ₹9,999 plus 1:1 coaching with Neer and VIP WhatsApp.' },
    { q: 'Can I upgrade later?', a: 'Yes. You can upgrade from any tier to a higher one anytime. You only pay the difference, prorated for the remaining period.' },
    { q: 'What’s the refund policy?', a: 'We offer a 7-day money-back guarantee on paid programs (₹1,999, ₹9,999). If you\'ve engaged with the material and aren\'t satisfied, contact us for a full refund. VIP Platinum terms are discussed on your discovery call.' },
    { q: 'How long do I get access?', a: 'Free: ongoing. Paid tiers (₹1,999, ₹9,999, ₹49,999): lifetime access to course content and resources included in your plan.' },
];

function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    return (
        <section className="section bg-neutral-50">
            <div className="container mx-auto px-6">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-neutral-900 mb-2">Frequently Asked Questions</h2>
                    <p className="text-neutral-600 text-center">Common questions about plans and access.</p>
                </motion.div>
                <div className="max-w-2xl mx-auto space-y-3">
                    {programFaqs.map((faq, index) => (
                        <div key={index} className="bg-white rounded-2xl shadow-sm overflow-hidden">
                            <button
                                type="button"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full text-left px-6 py-4 flex items-center justify-between font-semibold text-neutral-900 hover:bg-neutral-50 transition-colors"
                            >
                                <span className="flex items-center gap-2">
                                    <ChevronDown className={`w-5 h-5 text-neutral-500 flex-shrink-0 transition-transform ${openIndex === index ? 'rotate-180' : ''}`} />
                                    {faq.q}
                                </span>
                            </button>
                            {openIndex === index && (
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="px-6 pb-4 text-neutral-600 text-sm border-t border-neutral-100 pt-3"
                                >
                                    {faq.a}
                                </motion.p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Trust badges: 7-Day Guarantee | Secure Payment | 2000+ Students | Razorpay Verified
function TrustBadgesSection() {
    const badges = [
        { icon: Shield, label: '7-Day Guarantee' },
        { icon: Zap, label: 'Secure Payment' },
        { icon: Users, label: '2000+ Students' },
        { icon: CheckCircle, label: 'Razorpay Verified' },
    ];
    return (
        <section className="py-12 bg-white border-t border-neutral-100">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap items-center justify-center gap-6 sm:gap-10"
                >
                    {badges.map((b) => (
                        <div key={b.label} className="flex items-center gap-2 text-neutral-600">
                            <b.icon className="w-5 h-5 text-primary-500" />
                            <span className="font-medium text-neutral-700">{b.label}</span>
                        </div>
                    ))}
                </motion.div>
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
                    className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
                >
                    <div className="absolute inset-0">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary-500/20 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl" />
                    </div>

                    <div className="relative z-10">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-white/90 text-sm mb-6">
                            <Play className="w-4 h-4" /> Free Masterclass Available
                        </div>

                        <h2 className="text-white mb-4">Not Sure Which Program Is Right?</h2>
                        <p className="text-white text-lg mb-10 max-w-2xl mx-auto text-center">
                            Watch our free masterclass to discover the I Am Power Flow™ methodology and find the perfect program for your journey.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <button className="btn btn-secondary text-lg px-8 py-4">
                                <Play className="w-5 h-5" /> Watch Free Masterclass
                            </button>
                            <Link to="/book-call" className="btn btn-outline text-lg px-8 py-4">
                                Book Discovery Call
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default function ProgramsPage() {
    return (
        <>
            <ProgramsHero />
            <ComparisonTableSection />
            <FAQSection />
            <TrustBadgesSection />
            <CTASection />
        </>
    );
}
