import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, Eye, EyeOff, Sparkles, ArrowRight, User, Phone, CheckCircle } from 'lucide-react';

export default function RegisterPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', phone: '', password: '', agreeTerms: false });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Register:', formData);
    };

    return (
        <div className="min-h-screen flex pt-24">
            <div className="flex-1 flex items-center justify-center p-8 overflow-y-auto">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md py-8">
                    <Link to="/" className="flex items-center gap-2 mb-8">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
                            <Sparkles className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-display text-2xl font-bold text-neutral-900">Magical <span className="gradient-text">Neer</span></span>
                    </Link>
                    <h1 className="text-3xl font-display font-bold text-neutral-900 mb-2">Start Your Journey</h1>
                    <p className="text-neutral-600 mb-8">Create your free account and begin transforming</p>
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-neutral-700 mb-2">First Name</label>
                                <div className="relative">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                                    <input type="text" required value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} className="input pl-12" placeholder="First" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-neutral-700 mb-2">Last Name</label>
                                <input type="text" value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} className="input" placeholder="Last" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-neutral-700 mb-2">Email Address</label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                                <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="input pl-12" placeholder="you@example.com" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-neutral-700 mb-2">Phone Number</label>
                            <div className="relative">
                                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                                <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="input pl-12" placeholder="+91 98765 43210" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-neutral-700 mb-2">Password</label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                                <input type={showPassword ? 'text' : 'password'} required value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} className="input pl-12 pr-12" placeholder="Min 8 characters" />
                                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400">
                                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                            <p className="text-xs text-neutral-500 mt-1">Must contain 8+ chars, uppercase, number, special char</p>
                        </div>
                        <label className="flex items-start gap-3 cursor-pointer">
                            <input type="checkbox" required checked={formData.agreeTerms} onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })} className="w-4 h-4 mt-1 rounded border-neutral-300 text-primary-600" />
                            <span className="text-sm text-neutral-600">I agree to the <Link to="/terms" className="text-primary-600 hover:underline">Terms of Service</Link> and <Link to="/privacy" className="text-primary-600 hover:underline">Privacy Policy</Link></span>
                        </label>
                        <button type="submit" className="btn btn-primary w-full justify-center">Create Account <ArrowRight className="w-5 h-5" /></button>
                    </form>
                    <p className="text-center text-neutral-600 mt-8">Already have an account? <Link to="/login" className="text-primary-600 font-semibold hover:underline">Sign in</Link></p>
                </motion.div>
            </div>
            <div className="hidden lg:flex flex-1 gradient-spiritual items-center justify-center p-12 relative overflow-hidden">
                <div className="absolute inset-0"><div className="absolute bottom-20 left-20 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl" /></div>
                <div className="relative z-10 max-w-lg text-center text-white">
                    <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-8 backdrop-blur-sm border border-white/20"><Sparkles className="w-10 h-10" /></div>
                    <h2 className="text-3xl font-display font-bold mb-4">Begin Your Transformation</h2>
                    <p className="text-white/80 mb-8">Join 2,847+ manifestors who have already transformed their lives.</p>
                    <div className="space-y-4 text-left">
                        {['Free access to starter resources', 'Weekly manifestation tips via email', 'Access to community forums', 'Exclusive member discounts'].map((item) => (
                            <div key={item} className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-secondary-400" /><span className="text-white/90">{item}</span></div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
