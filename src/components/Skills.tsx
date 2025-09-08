import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    'JavaScript',
    'React',
    'Node.js',
    'CyberSecurity',
    'Networking',
    'Linux',
    'Java',
    'Python',
    'Git',
    'Tailwind CSS',
    'AWS',
    'Kubernetes',
    'Docker'
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Technical <span className="text-primary">Skills</span>
        </motion.h2>

        <motion.div 
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-badge px-6 py-3 rounded-lg text-foreground font-medium cursor-default shadow-md"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.05,
                type: "spring",
                stiffness: 200
              }}
              whileHover={{ 
                scale: 1.1, 
                y: -5,
                transition: { type: "spring", stiffness: 400, damping: 17 }
              }}
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>

        {/* Additional info */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm passionate about staying up-to-date with the latest technologies and best practices. 
            Always eager to learn new tools and frameworks that can help build better solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;