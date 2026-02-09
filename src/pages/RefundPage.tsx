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

export default function RefundPage() {
    return (
        <>
            <LegalHeader
                title="Refund Policy"
                subtitle="Our commitment to your satisfaction and trust."
            />
            <section className="section bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto prose prose-lg prose-neutral">
                        <h3>1. Our Guarantee</h3>
                        <p>
                            We want you to be completely satisfied with your experience at Magical Neer. We put immense effort into creating high-quality, transformative programs. However, we understand that sometimes a program might not be the right fit.
                        </p>

                        <h3>2. 30-Day Money-Back Guarantee</h3>
                        <p>
                            For our flagship courses (Abundance Seeker, Manifestation Master), we offer a 30-Day Money-Back Guarantee. If you are not satisfied with the program for any reason, you may request a full refund within 30 days of your purchase date.
                        </p>
                        <p>
                            To be eligible for a refund, we simply ask that you show you've given the program a fair try by completing the first module's coursework. This ensures that you've engaged with the material.
                        </p>

                        <h3>3. Live Coaching & Workshops</h3>
                        <p>
                            Due to the time-intensive nature of live coaching and workshops:
                        </p>
                        <ul>
                            <li><strong>Cancellations:</strong> Cancellations made 48 hours prior to a scheduled session are eligible for a full refund or rescheduling.</li>
                            <li><strong>No-Shows:</strong> Missed appointments without prior notice are non-refundable.</li>
                        </ul>

                        <h3>4. Digital Downloads</h3>
                        <p>
                            Instant digital downloads (such as single meditation audio tracks or PDF workbooks purchased separately from a course) are generally non-refundable once downloaded, due to the nature of digital goods.
                        </p>

                        <h3>5. How to Request a Refund</h3>
                        <p>
                            To request a refund, please email us at support@magicalneer.com with your order details and the reason for your request. We will review your request and process your refund within 5-7 business days if approved.
                        </p>

                        <h3>6. Payment Plan Cancellations</h3>
                        <p>
                            If you are on a payment plan, cancelling your subscription does not automatically refund previous payments. It simply stops future billing.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
