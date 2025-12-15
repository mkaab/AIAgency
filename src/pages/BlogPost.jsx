import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Parallax } from 'react-scroll-parallax'
import { blogs } from '../data/blogs'
import { useEffect } from 'react'

export default function BlogPost() {
    const { slug } = useParams()
    const post = blogs.find(b => b.slug === slug)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [slug])

    if (!post) {
        return <Navigate to="/blog" replace />
    }

    return (
        <article className="relative min-h-screen pt-32 pb-20 px-6">
            <Parallax speed={-5}>
                <div className="pointer-events-none absolute inset-x-0 top-0 h-[50vh] bg-gradient-to-b from-brand-blue-600/5 via-transparent to-transparent" />
            </Parallax>

            <div className="mx-auto max-w-3xl">
                <Link to="/blog" className="inline-flex items-center text-sm text-brand-charcoal/60 hover:text-brand-blue-600 mb-8 transition-colors">
                    ← Back to all posts
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex items-center gap-3 text-sm mb-6">
                        <span className="px-3 py-1 rounded-full bg-brand-blue-600/10 text-brand-blue-600 font-medium">
                            {post.category}
                        </span>
                        <span className="text-gray-400">{post.date}</span>
                    </div>

                    <h1 className="font-display text-4xl md:text-5xl font-bold text-brand-charcoal mb-8 leading-tight">
                        {post.title}
                    </h1>

                    {/* Article Image */}
                    {post.image ? (
                        <div className="w-full h-64 md:h-96 bg-gray-100 rounded-2xl overflow-hidden mb-12 relative shadow-lg">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ) : (
                        <div className="w-full h-64 md:h-96 bg-gray-100 rounded-2xl overflow-hidden mb-12 relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-blue-600/10 to-brand-blue-500/5" />
                            <div className="absolute inset-0 flex items-center justify-center text-8xl opacity-20">
                                📝
                            </div>
                        </div>
                    )}

                    <div
                        className="prose prose-lg prose-blue max-w-none text-brand-charcoal/80 leading-relaxed font-sans"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    <div className="mt-16 pt-8 border-t border-black/10">
                        <p className="text-sm text-brand-charcoal/50 italic">
                            Written by the AltaServ Team
                        </p>
                    </div>
                </motion.div>
            </div>
        </article>
    )
}
