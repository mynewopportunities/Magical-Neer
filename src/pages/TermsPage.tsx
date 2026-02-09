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

export default function TermsPage() {
    return (
        <>
            <LegalHeader
                title="Terms of Service"
                subtitle="Please read these terms carefully before using our services."
            />
            <section className="section bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto prose prose-lg prose-neutral">
                        <p>Last Updated: {new Date().toLocaleDateString()}</p>

                        <h3>1. Acceptance of Terms</h3>
                        <p>
                            By accessing and using the Magical Neer platform ("Service"), you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.
                        </p>

                        <h3>2. Description of Service</h3>
                        <p>
                            Magical Neer provides spiritual coaching, manifestation courses, and energy healing sessions. You understand and agree that the Service is provided "AS-IS" and that Magical Neer assumes no responsibility for the timeliness, deletion, mis-delivery or failure to store any user communications or personalization settings.
                        </p>

                        <h3>3. User Registration</h3>
                        <p>
                            To access certain features of the Service, you may be required to register for an account. You agree to provide true, accurate, current and complete information about yourself as prompted by the Service's registration form.
                        </p>

                        <h3>4. Payment and Refunds</h3>
                        <p>
                            Services are billed on a subscription or one-time basis. You agree to pay all fees and charges associated with your account. Refund policies are specific to each program and are detailed on our Refund Policy page.
                        </p>

                        <h3>5. Intellectual Property</h3>
                        <p>
                            All content included on this site, such as text, graphics, logos, button icons, images, audio clips, digital downloads, data compilations, and software, is the property of Magical Neer or its content suppliers and protected by international copyright laws.
                        </p>

                        <h3>6. Medical Disclaimer</h3>
                        <p>
                            The information and services provided by Magical Neer are for educational and spiritual purposes only. They are not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
                        </p>

                        <h3>7. Contact Information</h3>
                        <p>
                            If you have any questions about these Terms, please contact us at hello@magicalneer.com.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
