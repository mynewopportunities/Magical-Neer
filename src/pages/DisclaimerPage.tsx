import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

function LegalHeader({ title, subtitle }: { title: string; subtitle: string }) {
    return (
        <div className="bg-neutral-900 text-white py-20 relative overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary-900/40 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-900/30 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
            </div>
            <div className="container mx-auto px-6 relative z-10">
                <Link to="/" className="inline-flex items-center text-white/60 hover:text-white mb-6 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
                </Link>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                    <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">{title}</h1>
                    <p className="text-xl text-white/80 max-w-2xl">{subtitle}</p>
                </motion.div>
            </div>
        </div>
    );
}

export default function DisclaimerPage() {
    return (
        <>
            <LegalHeader
                title="Disclaimer"
                subtitle="Important information about our services and content."
            />
            <section className="section bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto prose prose-lg prose-neutral">
                        <p>Last Updated: {new Date().toLocaleDateString()}</p>

                        <h3>1. General Information</h3>
                        <p>
                            The content on Magical Neer (magicalneer.com) is for educational and inspirational purposes only. It is not intended as a substitute for professional medical, financial, legal, or psychological advice. Always seek the guidance of qualified professionals for health, financial, or legal matters.
                        </p>

                        <h3>2. No Guarantee of Results</h3>
                        <p>
                            While we share success stories and testimonials from our community, we do not guarantee any specific results from using our programs, courses, or methodology. Your results depend on your commitment, application, and personal circumstances. Past results do not guarantee future outcomes.
                        </p>

                        <h3>3. Energy & Spiritual Practices</h3>
                        <p>
                            Our teachings incorporate energy work, manifestation techniques, and spiritual practices. These are not a replacement for medical diagnosis or treatment. If you have health concerns, please consult a licensed healthcare provider.
                        </p>

                        <h3>4. Testimonials</h3>
                        <p>
                            Testimonials and success stories featured on this site represent individual experiences. They are not typical results, and your experience may vary. We do not claim that these results are representative of all participants.
                        </p>

                        <h3>5. Contact</h3>
                        <p>
                            For questions about this disclaimer, contact us at support@magicalneer.com.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
