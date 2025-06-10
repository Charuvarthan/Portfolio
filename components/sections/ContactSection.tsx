"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { Mail, Github, Linkedin, Twitter, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const socialLinks = [
	{
		name: "Email",
		icon: Mail,
		href: "mailto:charuvarthan05@gmail.com",
		color: "text-red-500",
		gradient: "from-red-500/20 to-pink-500/20",
	},
	{
		name: "GitHub",
		icon: Github,
		href: "https://github.com",
		color: "text-gray-400",
		gradient: "from-gray-500/20 to-gray-600/20",
	},
	{
		name: "LinkedIn",
		icon: Linkedin,
		href: "https://linkedin.com",
		color: "text-blue-600",
		gradient: "from-blue-600/20 to-blue-700/20",
	},
	// {
	//   name: "Twitter",
	//   icon: ,
	//   href: "https://twitter.com",
	//   color: "text-sky-500",
	//   gradient: "from-sky-500/20 to-sky-600/20",
	// },
];

export function ContactSection() {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});

	const [isSubmitting, setIsSubmitting] = useState(false);

	console.log("ContactSection: Component rendered, inView:", inView);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		console.log("ContactSection: Form input changed", name, value);
		setFormData(prev => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		const subject = encodeURIComponent(`Message from ${formData.name}`);
		const body = encodeURIComponent(
			`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
		);
		window.open(
			`mailto:charuvarthan05@gmail.com?subject=${subject}&body=${body}`,
			'_blank'
		);
	};

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.3,
			},
		},
	};

	const itemVariants = {
		hidden: { y: 50, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.6,
				ease: "easeOut",
			},
		},
	};

	return (
		<section id="contact" className="py-20 px-6 bg-white dark:bg-black">
			{/* Background Elements */}
			<div className="absolute inset-0 overflow-hidden">
				<div className="absolute top-1/4 -left-48 w-96 h-96 bg-apple-green/5 rounded-full blur-3xl" />
				<div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
			</div>

			<div className="max-w-6xl mx-auto relative">
				<motion.div
					ref={ref}
					variants={containerVariants}
					initial="hidden"
					animate={inView ? "visible" : "hidden"}
				>
					{/* Section Title */}
					<motion.div variants={itemVariants} className="text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-bold text-apple-gray-800 dark:text-white mb-6">
							Let's{' '}
							<span className="text-gradient bg-gradient-to-r from-apple-blue to-apple-green bg-clip-text text-transparent">
								Connect
							</span>
						</h2>
						<p className="text-lg text-apple-gray-600 dark:text-apple-gray-300 max-w-2xl mx-auto">
							Having a project in mind or want to collaborate? I&apos;d love to hear from you.
							Let&apos;s create something amazing together.
						</p>
					</motion.div>

					<div className="grid lg:grid-cols-2 gap-16">
						{/* Contact Form */}
						<motion.div variants={itemVariants}>
							<div className="bg-apple-gray-50 dark:bg-apple-gray-900 p-8 rounded-3xl apple-shadow">
								<h3 className="text-2xl font-bold text-apple-gray-800 dark:text-white mb-8">Send a Message</h3>
								<form onSubmit={handleSubmit} className="space-y-6">
									<div>
										<Input
											type="text"
											name="name"
											placeholder="Your Name"
											required
											className="bg-background/50 border-border/50 focus:border-apple-blue transition-colors duration-300"
										/>
									</div>
									<div>
										<Input
											type="email"
											name="email"
											placeholder="Your Email"
											required
											className="bg-background/50 border-border/50 focus:border-apple-blue transition-colors duration-300"
										/>
									</div>
									<div>
										<Textarea
											name="message"
											placeholder="Your Message"
											required
											rows={6}
											className="bg-background/50 border-border/50 focus:border-apple-blue transition-colors duration-300 resize-none"
										/>
									</div>
									<motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
										<Button
											type="submit"
											className="magnetic-element w-full bg-apple-blue hover:bg-blue-600 text-white font-semibold py-4 rounded-xl transition-all duration-300 apple-shadow hover:apple-shadow-lg"
										>
											<div className="flex items-center justify-center space-x-2">
												<Send className="w-4 h-4" />
												<span>Send Message</span>
											</div>
										</Button>
									</motion.div>
								</form>
							</div>
						</motion.div>

						{/* Contact Info & Social Links */}
						<motion.div variants={itemVariants} className="space-y-8">
							{/* Contact Info */}
							<div className="bg-apple-gray-50 dark:bg-apple-gray-900 p-8 rounded-3xl apple-shadow">
								<h3 className="text-2xl font-bold text-apple-gray-800 dark:text-white mb-6">Get in Touch</h3>
								<div className="space-y-4 text-apple-gray-600 dark:text-apple-gray-300">
									<p>
										I'm always interested in hearing about new opportunities
										and exciting projects. Whether you have a question or just
										want to say hi, feel free to reach out!
									</p>
									<p>
										<strong className="text-apple-gray-800 dark:text-white">Location:</strong> Chennai, India
									</p>
									<p>
										<strong className="text-apple-gray-800 dark:text-white">Email:</strong> charuvarthan05@gmail.com
									</p>
									<p>
										<strong className="text-apple-gray-800 dark:text-white">Response Time:</strong> Within 24 hours
									</p>
								</div>
							</div>

							{/* Social Links */}
							<div className="bg-apple-gray-50 dark:bg-apple-gray-900 p-8 rounded-3xl apple-shadow">
								<h3 className="text-2xl font-bold text-apple-gray-800 dark:text-white mb-6">Connect With Me</h3>
								<div className="grid grid-cols-2 gap-4">
									{socialLinks.map((social, index) => (
										<motion.a
											key={social.name}
											href={social.href}
											target="_blank"
											rel="noopener noreferrer"
											whileHover={{
												scale: 1.05,
												y: -5,
											}}
											whileTap={{ scale: 0.95 }}
											className="magnetic-element group flex items-center space-x-3 p-4 rounded-2xl bg-white dark:bg-apple-gray-800 hover:bg-apple-gray-100 dark:hover:bg-apple-gray-700 transition-all duration-300 apple-shadow hover:apple-shadow-lg"
										>
											<div className={`p-2 rounded-lg bg-gradient-to-br ${social.gradient} group-hover:scale-110 transition-transform duration-300`}>
												<social.icon className={`w-5 h-5 ${social.color}`} />
											</div>
											<span className="font-medium">{social.name}</span>
										</motion.a>
									))}
								</div>
							</div>
						</motion.div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}