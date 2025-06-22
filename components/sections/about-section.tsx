'use client';

import { motion } from 'framer-motion';
import { Code2, Palette, Rocket, Users } from 'lucide-react';

const skills = [
	{
		category: 'Programming Languages',
		technologies: ['Python', 'C++', 'C', 'Java', 'JavaScript', 'SQL'],
		color: 'text-apple-purple',
		bgColor: 'bg-apple-purple/10',
	},
	{
		category: 'Frontend',
		technologies: ['React.js', 'Next.js', 'JavaScript', 'Django'],
		color: 'text-apple-blue',
		bgColor: 'bg-apple-blue/10',
	},
	{
		category: 'Backend',
		technologies: ['Node.js', 'Python', 'Flask', 'MongoDB', 'SQL'],
		color: 'text-apple-green',
		bgColor: 'bg-apple-green/10',
	},
	{
		category: 'Machine Learning & AI',
		technologies: ['PyTorch', 'TensorFlow', 'BERT', 'HuggingFace', 'OpenCV', 'RAG'],
		color: 'text-apple-red',
		bgColor: 'bg-apple-red/10',
	},
	{
		category: 'Tools & Platforms',
		technologies: ['Git', 'Linux', 'Docker', 'AWS'],
		color: 'text-apple-orange',
		bgColor: 'bg-apple-orange/10',
	},
];

const values = [
	{
		icon: Code2,
		title: 'Scalable Code',
		description: 'I prioritize writing clean, efficient, and maintainable code that supports large-scale systems and adapts to evolving requirements.',
		color: 'text-apple-blue',
		bgColor: 'bg-apple-blue/10',
	},
	{
		icon: Palette,
		title: 'User-Centric Solutions',
		description: 'I focus on building intuitive, impactful solutions that address user needs, inspired by projects like AI-driven legal and medical applications.',
		color: 'text-apple-green',
		bgColor: 'bg-apple-green/10',
	},
	{
		icon: Rocket,
		title: 'Innovative Problem-Solving',
		description: 'I tackle complex challenges with creative algorithms and AI, as shown in my work on RAG systems and optimized pathfinding.',
		color: 'text-apple-orange',
		bgColor: 'bg-apple-orange/10',
	},
	{
		icon: Users,
		title: 'Inclusive Collaboration',
		description: 'I thrive in diverse teams, sharing knowledge and driving impact, as demonstrated in hackathons and collaborative AI projects.',
		color: 'text-purple-500',
		bgColor: 'bg-purple-500/10',
	},
];

export function AboutSection() {
	return (
		<section id="about" className="py-20 px-6 bg-white dark:bg-black">
			<div className="max-w-6xl mx-auto">
				{/* Section header */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl md:text-5xl font-bold text-apple-gray-800 dark:text-white mb-6">
						About{' '}
						<span className="text-gradient bg-gradient-to-r from-apple-blue to-apple-green bg-clip-text text-transparent">
							Me
						</span>
					</h2>
					<p className="text-lg text-apple-gray-600 dark:text-apple-gray-300 max-w-2xl mx-auto">
						Problem-solving driven developer with a strong foundation in DSA, system design, and full-stack engineering, creating clean and scalable digital experiences
					</p>
				</motion.div>

				<div className="grid gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16 mb-12 md:mb-20">
					{/* Personal story */}
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="space-y-6"
					>
						<h3 className="text-2xl font-bold text-apple-gray-800 dark:text-white mb-6">
							My Journey
						</h3>

						<div className="space-y-4 text-apple-gray-600 dark:text-apple-gray-300 leading-relaxed">
							<p>
								Started my coding journey 2 years ago with a problem of "Trapping rain water" program.
								What began as curiosity quickly transformed into a passion for creating
								digital experiences that solve real-world problems.
							</p>

							<p>
								I'm a problem-solving focused developer passionate about building systems that scale. With a strong foundation in data structures and algorithms, I actively participate in competitive programming and apply those principles to real-world engineering.
							</p>

							<p>

							</p>
						</div>

						{/* Quick stats */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.3 }}
							className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-8"
						>
							{[
								{ number: '6', label: 'Projects' },
								// { number: '2+', label: 'Years' },
								{ number: '2', label: 'Open source' },
							].map((stat, index) => (
								<div key={stat.label} className="text-center">
									<motion.div
										initial={{ scale: 0 }}
										whileInView={{ scale: 1 }}
										viewport={{ once: true }}
										transition={{ duration: 0.5, delay: index * 0.1 }}
										className="text-2xl font-bold text-apple-blue mb-1"
									>
										{stat.number}
									</motion.div>
									<div className="text-sm text-apple-gray-500 dark:text-apple-gray-400">
										{stat.label}
									</div>
								</div>
							))}
						</motion.div>
					</motion.div>

					{/* Profile image placeholder */}
					<motion.div
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="flex justify-center"
					>
						<div className="relative">
							<motion.div
								whileHover={{ scale: 1.05 }}
								className="w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-br from-apple-blue/20 to-apple-green/20 rounded-full flex items-center justify-center apple-shadow-lg transition-all duration-300 overflow-hidden"
							>
								<img
									src="\myfakeimage.jpg"
									alt="Charuvarthan"
									className="w-full h-full object-cover rounded-full"
								/>
							</motion.div>

							{/* Floating elements */}
							<motion.div
								animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
								transition={{ duration: 4, repeat: Infinity }}
								className="absolute -top-4 -right-4 w-12 h-12 sm:w-16 sm:h-16 bg-apple-blue/20 rounded-2xl flex items-center justify-center"
							>
								<Code2 className="w-6 h-6 sm:w-8 sm:h-8 text-apple-blue" />
							</motion.div>

							<motion.div
								animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
								transition={{ duration: 5, repeat: Infinity }}
								className="absolute -bottom-4 -left-4 w-12 h-12 sm:w-16 sm:h-16 bg-apple-green/20 rounded-2xl flex items-center justify-center"
							>
								<Palette className="w-6 h-6 sm:w-8 sm:h-8 text-apple-green" />
							</motion.div>
						</div>
					</motion.div>
				</div>

				{/* Skills section */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="mb-20"
				>
					<h3 className="text-2xl font-bold text-apple-gray-800 dark:text-white mb-8 text-center">
						Technical Skills
					</h3>
					<motion.div
						initial={{ opacity: 0, scale: 0.97 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.7, type: "spring", stiffness: 160, damping: 20 }}
						whileHover={{
							borderColor: "#38bdf8", // apple-blue
						}}
						className="
    bg-white/90 dark:bg-apple-gray-900/90
    border-2 border-apple-blue/20 dark:border-apple-green/20
    rounded-3xl shadow-lg transition-all duration-300
    p-6 md:p-10
  "
					>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							{skills.slice(0, 3).map((skill, index) => (
								<div key={skill.category} className="flex flex-col items-center">
									<h4 className={`
            text-lg font-bold mb-4 w-full text-center
            ${index === 0 ? "text-apple-blue" : ""}
            ${index === 1 ? "text-apple-green" : ""}
            ${index === 2 ? "text-apple-orange" : ""}
            border-b-2 border-dashed border-apple-blue/10 dark:border-apple-green/20 pb-2
          `}>
										{skill.category}
									</h4>
									<div className="flex flex-wrap justify-center gap-2 sm:gap-3">
										{skill.technologies.map((tech, techIndex) => (
											<motion.div
												key={tech}
												initial={{ opacity: 0, x: -10 }}
												whileInView={{ opacity: 1, x: 0 }}
												viewport={{ once: true }}
												transition={{ duration: 0.3, delay: (index * 0.08) + (techIndex * 0.03) }}
												className={`
                  px-3 py-1.5 rounded-full font-semibold text-sm
                  border border-white/30 bg-white/70 dark:bg-apple-gray-900/70
                  text-apple-gray-800 dark:text-white shadow
                  hover:bg-apple-blue/80 hover:text-white hover:scale-105 transition-all duration-200
                `}
											>
												{tech}
											</motion.div>
										))}
									</div>
								</div>
							))}
						</div>
						{/* Second row for remaining skills, if any */}
						{skills.length > 3 && (
							<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
								{skills.slice(3).map((skill, index) => (
									<div key={skill.category} className="flex flex-col items-center">
										<h4 className={`
              text-lg font-bold mb-4 w-full text-center
              ${index === 0 ? "text-apple-red" : ""}
              ${index === 1 ? "text-apple-orange" : ""}
              border-b-2 border-dashed border-apple-blue/10 dark:border-apple-green/20 pb-2
            `}>
											{skill.category}
										</h4>
										<div className="flex flex-wrap justify-center gap-2 sm:gap-3">
											{skill.technologies.map((tech, techIndex) => (
												<motion.div
													key={tech}
													initial={{ opacity: 0, x: -10 }}
													whileInView={{ opacity: 1, x: 0 }}
													viewport={{ once: true }}
													transition={{ duration: 0.3, delay: (index * 0.08) + (techIndex * 0.03) }}
													className={`
                    px-3 py-1.5 rounded-full font-semibold text-sm
                    border border-white/30 bg-white/70 dark:bg-apple-gray-900/70
                    text-apple-gray-800 dark:text-white shadow
                    hover:bg-apple-blue/80 hover:text-white hover:scale-105 transition-all duration-200
                  `}
												>
													{tech}
												</motion.div>
											))}
										</div>
									</div>
								))}
							</div>
						)}
					</motion.div>
				</motion.div>

				{/* Values section */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
				>
					<h3 className="text-2xl font-bold text-apple-gray-800 dark:text-white mb-8 text-center">
						What I Value
					</h3>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
						{values.map((value, index) => (
							<motion.div
								key={value.title}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								whileHover={{ y: -5, scale: 1.02 }}
								className="magnetic-element text-center p-6 bg-apple-gray-50 dark:bg-apple-gray-900 rounded-2xl apple-shadow hover:apple-shadow-lg transition-all duration-300"
							>
								<div className={`w-16 h-16 ${value.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
									<value.icon className={`w-8 h-8 ${value.color}`} />
								</div>

								<h4 className={`text-lg font-semibold ${value.color} mb-3`}>
									{value.title}
								</h4>

								<p className="text-sm text-apple-gray-600 dark:text-apple-gray-300 leading-relaxed">
									{value.description}
								</p>
							</motion.div>
						))}
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, scale: 0.97, y: 30 }}
					whileInView={{ opacity: 1, scale: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{
						type: "spring",
						stiffness: 180,
						damping: 18,
					}}
					className="flex justify-center mt-10"
				>
					<a
						href="/Charuvarthan_s_Resume.pdf"
						download
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-3 px-6 py-3 sm:px-8 sm:py-4 rounded-2xl bg-apple-blue hover:bg-apple-green text-white font-bold text-base sm:text-xl shadow-md hover:shadow-lg transition-all duration-200 ring-1 ring-white/20"
						style={{
							letterSpacing: "0.04em",
						}}
					>
						<svg width="24" height="24" viewBox="0 0 50 50" fill="none" className="inline-block">
							<rect width="50" height="50" rx="10" fill="#FFA116"/>
							<path d="M25 15v14M25 29l-5-5m5 5l5-5" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
							<rect x="14" y="35" width="22" height="5" rx="2.5" fill="#fff" fillOpacity="0.2"/>
						</svg>
						Download Resume
					</a>
				</motion.div>
			</div>
		</section>
	);
}