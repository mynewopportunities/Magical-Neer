import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, Eye, EyeOff, Sparkles, ArrowRight, CheckCircle } from 'lucide-react';

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({ email: '', password: '', rememberMe: false });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Login:', formData);
    };

    return (
        <div className="min-h-screen flex">
            <div className="flex-1 flex items-center justify-center p-8">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md">
                    <Link to="/" className="flex items-center gap-2 mb-8">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
                            <Sparkles className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-display text-2xl font-bold text-neutral-900">Magical <span className="gradient-text">Neer</span></span>
                    </Link>
                    <h1 className="text-3xl font-display font-bold text-neutral-900 mb-2">Welcome Back</h1>
                    <p className="text-neutral-600 mb-8">Sign in to continue your manifestation journey</p>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-neutral-700 mb-2">Email Address</label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                                <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="input pl-12" placeholder="you@example.com" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-neutral-700 mb-2">Password</label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                                <input type={showPassword ? 'text' : 'password'} required value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} className="input pl-12 pr-12" placeholder="Enter your password" />
                                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400">
                                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="checkbox" checked={formData.rememberMe} onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })} className="w-4 h-4 rounded border-neutral-300 text-primary-600" />
                                <span className="text-sm text-neutral-600">Remember me</span>
                            </label>
                            <Link to="/forgot-password" className="text-sm text-primary-600 hover:underline">Forgot password?</Link>
                        </div>
                        <button type="submit" className="btn btn-primary w-full justify-center">Sign In <ArrowRight className="w-5 h-5" /></button>
                    </form>
                    <p className="text-center text-neutral-600 mt-8">Don't have an account? <Link to="/register" className="text-primary-600 font-semibold hover:underline">Sign up free</Link></p>
                </motion.div>
            </div>
            <div className="hidden lg:flex flex-1 gradient-hero items-center justify-center p-12 relative overflow-hidden">
                <div className="absolute inset-0"><div className="absolute top-20 right-20 w-72 h-72 bg-secondary-500/20 rounded-full blur-3xl" /></div>
                <div className="relative z-10 max-w-lg text-center text-white">
                    <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-8 backdrop-blur-sm border border-white/20"><Sparkles className="w-10 h-10" /></div>
                    <h2 className="text-3xl font-display font-bold mb-4">Continue Your Transformation</h2>
                    <p className="text-white/80 mb-8">Access your courses, live sessions, and community.</p>
                    <div className="space-y-4 text-left">
                        {['Access all your enrolled courses', 'Join live healing sessions', 'Connect with the community', 'Track your progress'].map((item) => (
                            <div key={item} className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-secondary-400" /><span className="text-white/90">{item}</span></div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
