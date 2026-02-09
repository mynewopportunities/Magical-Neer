import { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ChevronLeft,
    ChevronRight,
    ChevronDown,
    CheckCircle,
    Circle,
    Play,
    Download,
    FileText,
    Headphones,
    Image as ImageIcon,
    MessageCircle,
    Settings,
} from 'lucide-react';

// Mock curriculum – replace with API
type LessonStatus = 'completed' | 'current' | 'upcoming';

interface Lesson {
    id: string;
    slug: string;
    title: string;
    duration: string;
    status: LessonStatus;
}

const MOCK_COURSE = {
    title: 'Wealth Manifestation Mastery',
    slug: 'wealth-manifestation-mastery',
    progress: 45,
    modules: [
        {
            id: 'm1',
            title: 'Module 1: Foundation',
            lessons: [
                { id: 'l1', slug: 'intro', title: 'Intro', duration: '5:20', status: 'completed' as LessonStatus },
                { id: 'l2', slug: 'mindset', title: 'Mindset', duration: '12:40', status: 'completed' as LessonStatus },
                { id: 'l3', slug: 'lesson-3', title: 'Lesson 3', duration: '18:00', status: 'current' as LessonStatus },
                { id: 'l4', slug: 'lesson-4', title: 'Lesson 4', duration: '22:10', status: 'upcoming' as LessonStatus },
            ],
        },
        {
            id: 'm2',
            title: 'Module 2: Practices',
            lessons: [
                { id: 'l5', slug: 'daily-ritual', title: 'Daily Ritual', duration: '15:00', status: 'upcoming' as LessonStatus },
                { id: 'l6', slug: 'affirmations', title: 'Affirmations', duration: '10:30', status: 'upcoming' as LessonStatus },
            ],
        },
        {
            id: 'm3',
            title: 'Module 3: Integration',
            lessons: [
                { id: 'l7', slug: 'integration', title: 'Integration', duration: '20:00', status: 'upcoming' as LessonStatus },
            ],
        },
    ],
    resources: [
        { type: 'pdf', label: 'Workbook Module 1', icon: FileText },
        { type: 'audio', label: 'Meditation MP3', icon: Headphones },
        { type: 'image', label: 'Affirmation Card', icon: ImageIcon },
    ],
    downloads: [
        { type: 'PDF', label: 'Full Workbook' },
        { type: 'Audio', label: 'All Meditations' },
    ],
};

const MOCK_COMMENTS = [
    { id: '1', author: 'Neer', text: 'Great question! The key is to practice daily for at least 7 days.', time: '2 days ago' },
    { id: '2', author: 'Priya', text: 'This lesson changed my perspective on money blocks.', time: '1 day ago' },
    { id: '3', author: 'Rahul', text: 'When is the best time to do the morning ritual?', time: '12 hours ago' },
];

// Email watermark – in production use logged-in user email
const WATERMARK_EMAIL = 'member@example.com';

export default function CoursePlayerPage() {
    const { courseSlug, lessonSlug } = useParams<{ courseSlug: string; lessonSlug: string }>();
    const navigate = useNavigate();
    const [expandedModules, setExpandedModules] = useState<Set<string>>(new Set(['m1']));
    const [markedComplete, setMarkedComplete] = useState(false);
    const [commentText, setCommentText] = useState('');
    const [comments, setComments] = useState(MOCK_COMMENTS);
    const [videoProgress] = useState(38); // 10:24 / 45:30 ≈ 38%
    const [playbackSpeed, setPlaybackSpeed] = useState('1x');
    const [quality, setQuality] = useState('720p');

    const course = MOCK_COURSE;
    const allLessons = course.modules.flatMap((m) => m.lessons);
    const currentIndex = allLessons.findIndex((l) => l.slug === (lessonSlug || 'lesson-3'));
    const currentLesson = allLessons[currentIndex] ?? allLessons[2];
    const currentLessonTitle = currentLesson?.title ?? 'Lesson';
    const prevLesson = currentIndex > 0 ? allLessons[currentIndex - 1] : null;
    const nextLesson = currentIndex < allLessons.length - 1 && currentIndex >= 0 ? allLessons[currentIndex + 1] : null;

    const toggleModule = (id: string) => {
        setExpandedModules((prev) => {
            const next = new Set(prev);
            if (next.has(id)) next.delete(id);
            else next.add(id);
            return next;
        });
    };

    const goToLesson = (lesson: Lesson) => {
        navigate(`/learn/${course.slug}/${lesson.slug}`);
    };

    const addComment = (e: React.FormEvent) => {
        e.preventDefault();
        if (!commentText.trim()) return;
        setComments((prev) => [
            ...prev,
            { id: String(Date.now()), author: 'You', text: commentText.trim(), time: 'Just now' },
        ]);
        setCommentText('');
    };

    return (
        <div className="min-h-screen bg-neutral-50">
            {/* Top bar: Back to Dashboard | Progress */}
            <header className="sticky top-0 z-30 flex items-center justify-between border-b border-neutral-200 bg-white px-4 py-3 shadow-sm">
                <Link
                    to="/dashboard"
                    className="flex items-center gap-2 text-neutral-600 hover:text-primary-600 font-medium"
                >
                    <ChevronLeft className="w-5 h-5" />
                    Back to Dashboard
                </Link>
                <div className="flex items-center gap-2">
                    <span className="text-sm text-neutral-500">Progress</span>
                    <span className="font-bold text-primary-600">{course.progress}%</span>
                    <div className="w-24 h-2 bg-neutral-200 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-primary-500 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${course.progress}%` }}
                            transition={{ duration: 0.5 }}
                        />
                    </div>
                </div>
            </header>

            <div className="container mx-auto px-4 py-6">
                <h1 className="text-xl font-display font-bold text-neutral-900 mb-1">
                    Course: {course.title}
                </h1>
                <p className="text-neutral-500 text-sm mb-6">Now playing: {currentLessonTitle}</p>

                <div className="flex flex-col lg:flex-row gap-6">
                    {/* Left: Curriculum sidebar */}
                    <aside className="w-full lg:w-80 flex-shrink-0">
                        <div className="rounded-2xl border border-neutral-200 bg-white shadow-sm overflow-hidden sticky top-24">
                            <div className="px-4 py-3 border-b border-neutral-100 bg-neutral-50 font-semibold text-neutral-900">
                                Curriculum
                            </div>
                            <nav className="max-h-[70vh] overflow-y-auto">
                                {course.modules.map((module) => {
                                    const isExpanded = expandedModules.has(module.id);
                                    return (
                                        <div key={module.id} className="border-b border-neutral-100 last:border-0">
                                            <button
                                                type="button"
                                                onClick={() => toggleModule(module.id)}
                                                className="w-full flex items-center justify-between px-4 py-3 text-left font-medium text-neutral-800 hover:bg-neutral-50"
                                            >
                                                <span className="flex items-center gap-2">
                                                    <ChevronDown
                                                        className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-0' : '-rotate-90'}`}
                                                    />
                                                    {module.title}
                                                </span>
                                            </button>
                                            <AnimatePresence>
                                                {isExpanded && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: 'auto', opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        className="overflow-hidden"
                                                    >
                                                        {module.lessons.map((lesson) => (
                                                            <button
                                                                key={lesson.id}
                                                                type="button"
                                                                onClick={() => goToLesson(lesson)}
                                                                className={`w-full flex items-center gap-3 px-4 py-2.5 pl-8 text-left text-sm transition-colors ${
                                                                    lesson.status === 'current'
                                                                        ? 'bg-primary-50 text-primary-700 font-medium'
                                                                        : 'hover:bg-neutral-50 text-neutral-600'
                                                                }`}
                                                            >
                                                                {lesson.status === 'completed' && (
                                                                    <CheckCircle className="w-4 h-4 text-accent-500 flex-shrink-0" />
                                                                )}
                                                                {lesson.status === 'current' && (
                                                                    <Play className="w-4 h-4 text-primary-500 flex-shrink-0" />
                                                                )}
                                                                {lesson.status === 'upcoming' && (
                                                                    <Circle className="w-4 h-4 text-neutral-300 flex-shrink-0" />
                                                                )}
                                                                <span className="truncate">{lesson.title}</span>
                                                            </button>
                                                        ))}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    );
                                })}
                            </nav>
                            <div className="p-4 border-t border-neutral-100 bg-neutral-50">
                                <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-2">
                                    Download
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {course.downloads.map((d) => (
                                        <button
                                            key={d.label}
                                            type="button"
                                            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white border border-neutral-200 text-neutral-700 text-sm hover:bg-neutral-50"
                                        >
                                            <Download className="w-4 h-4" />
                                            {d.type}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Right: Video + content */}
                    <main className="flex-1 min-w-0">
                        {/* Video player with email watermark */}
                        <div className="rounded-2xl border border-neutral-200 bg-neutral-900 overflow-hidden shadow-lg mb-6">
                            <div className="aspect-video relative">
                                <div className="absolute inset-0 flex items-center justify-center bg-neutral-800">
                                    <Play className="w-20 h-20 text-white/40" />
                                </div>
                                {/* Email watermark overlay */}
                                <div
                                    className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded bg-black/60 text-white/90 text-sm font-mono"
                                    style={{ fontSize: '12px' }}
                                >
                                    {WATERMARK_EMAIL}
                                </div>
                            </div>
                            {/* Fake controls */}
                            <div className="flex items-center gap-4 px-4 py-3 bg-neutral-900 border-t border-neutral-700">
                                <button type="button" className="text-white hover:text-primary-400 p-1">
                                    <Play className="w-5 h-5" />
                                </button>
                                <div className="flex-1 h-2 bg-neutral-700 rounded-full overflow-hidden cursor-pointer">
                                    <div
                                        className="h-full bg-primary-500 rounded-full"
                                        style={{ width: `${videoProgress}%` }}
                                    />
                                </div>
                                <span className="text-neutral-400 text-sm tabular-nums">10:24 / 45:30</span>
                                <select
                                    value={playbackSpeed}
                                    onChange={(e) => setPlaybackSpeed(e.target.value)}
                                    className="bg-neutral-800 text-white text-sm rounded px-2 py-1 border-0"
                                >
                                    {['0.5x', '0.75x', '1x', '1.25x', '1.5x', '2x'].map((s) => (
                                        <option key={s} value={s}>{s}</option>
                                    ))}
                                </select>
                                <select
                                    value={quality}
                                    onChange={(e) => setQuality(e.target.value)}
                                    className="bg-neutral-800 text-white text-sm rounded px-2 py-1 border-0"
                                >
                                    {['Auto', '1080p', '720p', '480p', '360p'].map((q) => (
                                        <option key={q} value={q}>{q}</option>
                                    ))}
                                </select>
                                <button type="button" className="text-neutral-400 hover:text-white p-1">
                                    <Settings className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        {/* Resources */}
                        <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm mb-6">
                            <h3 className="font-semibold text-neutral-900 mb-4">Resources</h3>
                            <ul className="space-y-3">
                                {course.resources.map((r) => (
                                    <li key={r.label}>
                                        <a
                                            href="#"
                                            className="flex items-center gap-3 text-neutral-700 hover:text-primary-600"
                                        >
                                            <r.icon className="w-5 h-5 text-neutral-400" />
                                            <span>{r.label}</span>
                                            <Download className="w-4 h-4 ml-auto text-neutral-400" />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Mark complete */}
                        <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm mb-6">
                            <label className="flex items-center gap-3 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={markedComplete}
                                    onChange={(e) => setMarkedComplete(e.target.checked)}
                                    className="w-5 h-5 rounded border-neutral-300 text-primary-600 focus:ring-primary-500"
                                />
                                <span className="font-medium text-neutral-900">Mark Complete</span>
                            </label>
                        </div>

                        {/* Comments */}
                        <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm mb-6">
                            <h3 className="font-semibold text-neutral-900 mb-4">
                                Comments ({comments.length})
                            </h3>
                            <ul className="space-y-4 mb-6">
                                {comments.map((c) => (
                                    <li key={c.id} className="border-b border-neutral-100 pb-4 last:border-0 last:pb-0">
                                        <div className="font-medium text-neutral-900">{c.author}</div>
                                        <p className="text-neutral-600 text-sm mt-1">{c.text}</p>
                                        <div className="text-neutral-400 text-xs mt-1">{c.time}</div>
                                    </li>
                                ))}
                            </ul>
                            <form onSubmit={addComment} className="flex gap-3">
                                <input
                                    type="text"
                                    value={commentText}
                                    onChange={(e) => setCommentText(e.target.value)}
                                    placeholder="Add comment..."
                                    className="input flex-1"
                                />
                                <button type="submit" className="btn btn-primary whitespace-nowrap">
                                    <MessageCircle className="w-4 h-4" />
                                    Post
                                </button>
                            </form>
                        </div>

                        {/* Prev / Next */}
                        <div className="flex items-center justify-between gap-4">
                            {prevLesson ? (
                                <Link
                                    to={`/learn/${courseSlug}/${prevLesson.slug}`}
                                    className="btn btn-outline border-neutral-300 text-neutral-700 hover:bg-neutral-100"
                                >
                                    <ChevronLeft className="w-5 h-5" />
                                    Prev
                                </Link>
                            ) : (
                                <span />
                            )}
                            {nextLesson ? (
                                <Link
                                    to={`/learn/${courseSlug}/${nextLesson.slug}`}
                                    className="btn btn-primary"
                                >
                                    Next
                                    <ChevronRight className="w-5 h-5" />
                                </Link>
                            ) : (
                                <span />
                            )}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}
