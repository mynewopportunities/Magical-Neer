import { Link } from 'react-router-dom';
import { BookOpen, Play, Calendar } from 'lucide-react';

export default function DashboardPage() {
    return (
        <div className="min-h-screen bg-neutral-50">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-2xl font-display font-bold text-neutral-900 mb-2">Dashboard</h1>
                <p className="text-neutral-600 mb-8">Welcome back! Continue your journey below.</p>

                <div className="grid md:grid-cols-2 gap-6 mb-10">
                    <Link
                        to="/learn/wealth-manifestation-mastery/lesson-3"
                        className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4"
                    >
                        <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center flex-shrink-0">
                            <BookOpen className="w-6 h-6 text-primary-600" />
                        </div>
                        <div>
                            <h2 className="font-semibold text-neutral-900 mb-1">Wealth Manifestation Mastery</h2>
                            <p className="text-sm text-neutral-500 mb-2">Continue where you left off</p>
                            <div className="flex items-center gap-2 text-primary-600 text-sm font-medium">
                                <Play className="w-4 h-4" /> Resume Lesson 3
                            </div>
                        </div>
                    </Link>
                    <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm opacity-75">
                        <div className="w-12 h-12 rounded-xl bg-neutral-100 flex items-center justify-center flex-shrink-0">
                            <Calendar className="w-6 h-6 text-neutral-400" />
                        </div>
                        <h2 className="font-semibold text-neutral-900 mt-4 mb-1">Upcoming Live Sessions</h2>
                        <p className="text-sm text-neutral-500">No sessions scheduled</p>
                    </div>
                </div>

                <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
                    <h2 className="font-semibold text-neutral-900 mb-4">Your Courses</h2>
                    <Link
                        to="/learn/wealth-manifestation-mastery/intro"
                        className="flex items-center justify-between py-3 border-b border-neutral-100 last:border-0 hover:bg-neutral-50 -mx-2 px-2 rounded-lg"
                    >
                        <span className="font-medium text-neutral-800">Wealth Manifestation Mastery</span>
                        <span className="text-sm text-neutral-500">45% complete</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
