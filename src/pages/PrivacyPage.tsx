import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

function LegalHeader({ title, subtitle }: { title: string; subtitle: string }) {
    return (
        <div className="bg-neutral-900 text-white pt-32 pb-16 relative overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary-900/40 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-900/30 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3"></div>
            </div>
            <div className="container mx-auto px-6 relative z-10 pt-16">
                <Link to="/" className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
                </Link>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-5">{title}</h1>
                    <p className="text-xl text-white/80 max-w-2xl leading-relaxed">{subtitle}</p>
                </motion.div>
            </div>
        </div>
    );
}

export default function PrivacyPage() {
    return (
        <>
            <LegalHeader
                title="Privacy Policy"
                subtitle="How we collect, use, and protect your data."
            />
            <section className="section bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto prose prose-lg prose-neutral">
                        <p>Last Updated: {new Date().toLocaleDateString()}</p>

                        <h3>1. Introduction</h3>
                        <p>
                            At Magical Neer, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights.
                        </p>

                        <h3>2. The Data We Collect</h3>
                        <p>
                            We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
                        </p>
                        <ul>
                            <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
                            <li><strong>Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers.</li>
                            <li><strong>Financial Data:</strong> includes bank account and payment card details.</li>
                            <li><strong>Transaction Data:</strong> includes details about payments to and from you and other details of products and services you have purchased from us.</li>
                        </ul>

                        <h3>3. How We Use Your Data</h3>
                        <p>
                            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                        </p>
                        <ul>
                            <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                            <li>Where we need to comply with a legal or regulatory obligation.</li>
                        </ul>

                        <h3>4. Data Security</h3>
                        <p>
                            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
                        </p>

                        <h3>5. Third-Party Links</h3>
                        <p>
                            This website may include links to third-party websites, plug-ins and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements.
                        </p>

                        <h3>6. Your Legal Rights</h3>
                        <p>
                            Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, restriction, transfer, to object to processing, to portability of data and (where the lawful ground of processing is consent) to withdraw consent.
                        </p>

                        <h3>7. Contact Us</h3>
                        <p>
                            For any privacy-specific concerns, please email us at privacy@magicalneer.com.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
