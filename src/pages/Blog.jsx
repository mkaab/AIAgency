import { motion } from 'framer-motion'
import { Parallax } from 'react-scroll-parallax'
import { Link } from 'react-router-dom'
import { blogs } from '../data/blogs'

export default function Blog() {
    return (
        <section className="relative min-h-screen pt-32 pb-20 px-6">
            <Parallax speed={-5}>
                <div className="pointer-events-none absolute inset-x-0 top-0 h-[50vh] bg-gradient-to-b from-brand-blue-600/5 via-transparent to-transparent" />
            </Parallax>

            <div className="mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="font-display text-5xl md:text-6xl font-bold text-brand-charcoal mb-4">Latest Insights</h1>
                    <p className="text-xl text-brand-charcoal/70 max-w-2xl mx-auto">
                        Thoughts on AI, automation, and the future of work.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog, i) => (
                        <Link to={`/blog/${blog.slug}`} key={blog.id}>
                            <motion.article
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm border border-black/5 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full"
                            >
                                <div className="h-52 bg-gray-100 relative overflow-hidden">
                                    {blog.image ? (
                                        <img
                                            src={blog.image}
                                            alt={blog.title}
                                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    ) : (
                                        <>
                                            <div className="absolute inset-0 bg-gradient-to-br from-brand-blue-600/10 to-brand-blue-500/5" />
                                            <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-20 group-hover:scale-110 transition-transform duration-500">
                                                📝
                                            </div>
                                        </>
                                    )}
                                </div>
                                <div className="p-6 flex-1 flex flex-col">
                                    <div className="flex items-center gap-3 text-sm mb-3">
                                        <span className="px-2 py-1 rounded-md bg-brand-blue-600/10 text-brand-blue-600 font-medium">
                                            {blog.category}
                                        </span>
                                        <span className="text-gray-400">{blog.date}</span>
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-brand-charcoal mb-3 group-hover:text-brand-blue-600 transition-colors">
                                        {blog.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed flex-1 line-clamp-3">
                                        {blog.excerpt}
                                    </p>
                                    <div className="mt-6 pt-6 border-t border-gray-100 flex items-center text-brand-blue-600 font-medium group-hover:translate-x-1 transition-transform">
                                        Read Article <span className="ml-2">→</span>
                                    </div>
                                </div>
                            </motion.article>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
