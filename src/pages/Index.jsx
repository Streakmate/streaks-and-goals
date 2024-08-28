import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { motion, useAnimation } from "framer-motion";
import { ArrowRight, Star, Award, Users, Zap, X, ChevronDown } from 'lucide-react';

const Index = () => {
  const [email, setEmail] = useState('');
  const controls = useAnimation();

  useEffect(() => {
    controls.start(i => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 }
    }));
  }, [controls]);

  const handleJoinWaitlist = (e) => {
    e.preventDefault();
    toast.success("You've been added to the waitlist!");
    setEmail('');
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 text-white">
      <header className="py-6 px-4 md:px-8 flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-3xl font-bold mb-4 md:mb-0">StreakMate</h1>
        <nav>
          <ul className="flex flex-wrap justify-center space-x-4">
            <li><a href="#features" className="hover:text-yellow-300 transition">Features</a></li>
            <li><a href="#testimonials" className="hover:text-yellow-300 transition">Testimonials</a></li>
            <li><a href="#benefits" className="hover:text-yellow-300 transition">Benefits</a></li>
            <li><a href="#faq" className="hover:text-yellow-300 transition">FAQ</a></li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12">
        <motion.section className="text-center mb-24" {...fadeInUp}>
          <h2 className="text-5xl md:text-7xl font-extrabold mb-6">Improve yourself daily by 1%</h2>
          <p className="text-xl md:text-2xl mb-12">Join StreakMate and unlock your full potential alongside your favorite creators!</p>
          <form onSubmit={handleJoinWaitlist} className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <Input
              type="email"
              placeholder="Enter your email"
              required
              className="flex-grow text-black"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button type="submit" className="bg-yellow-400 text-purple-800 hover:bg-yellow-300 transition">
              Join Waitlist <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
          <p className="mt-4 text-sm opacity-75">Be among the first 1000 to get exclusive lifetime benefits!</p>
        </motion.section>

        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
          }}
        >
          <motion.section id="features" className="mb-24" custom={0} animate={controls}>
            <h3 className="text-4xl font-bold mb-12 text-center">Why StreakMate?</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: <Star className="h-12 w-12 mb-4" />, title: "Influencer-Led Challenges", description: "Learn from the best in your field and get inspired daily" },
                { icon: <Award className="h-12 w-12 mb-4" />, title: "Daily Streaks", description: "Build habits that last a lifetime with our streak system" },
                { icon: <Users className="h-12 w-12 mb-4" />, title: "Supportive Community", description: "Connect with like-minded individuals and grow together" },
                { icon: <Zap className="h-12 w-12 mb-4" />, title: "Gamified Progress", description: "Earn rewards and level up as you achieve your goals" }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white bg-opacity-10 p-8 rounded-lg text-center transform hover:scale-105 transition duration-300"
                  whileHover={{ y: -5 }}
                >
                  {feature.icon}
                  <h4 className="text-2xl font-semibold mb-3">{feature.title}</h4>
                  <p className="text-lg">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section id="testimonials" className="mb-24" custom={1} animate={controls}>
            <h3 className="text-4xl font-bold mb-12 text-center">What Our Early Users Say</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "Sarah K.", role: "Fitness Enthusiast", quote: "StreakMate has completely transformed my workout routine. The daily challenges keep me accountable and motivated!", image: "/placeholder.svg" },
                { name: "Alex M.", role: "Aspiring Developer", quote: "I've learned more in 30 days of coding challenges on StreakMate than I did in months of self-study. The community support is incredible!", image: "/placeholder.svg" },
                { name: "Priya R.", role: "Meditation Practitioner", quote: "The guided meditation challenges have helped me establish a consistent mindfulness practice. I feel more centered and focused in my daily life.", image: "/placeholder.svg" }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-white bg-opacity-10 p-8 rounded-lg flex flex-col items-center text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <img src={testimonial.image} alt={testimonial.name} className="w-24 h-24 rounded-full mb-4 mx-auto object-cover" />
                  <p className="mb-4 italic text-lg">"{testimonial.quote}"</p>
                  <div className="font-semibold text-xl">{testimonial.name}</div>
                  <div className="text-sm opacity-75">{testimonial.role}</div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section id="benefits" className="mb-24" custom={2} animate={controls}>
            <h3 className="text-4xl font-bold mb-12 text-center">Benefits of Joining StreakMate</h3>
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                className="bg-white bg-opacity-10 p-8 rounded-lg"
                whileHover={{ scale: 1.02 }}
              >
                <h4 className="text-3xl font-semibold mb-6">What You Gain:</h4>
                <ul className="space-y-4">
                  <li className="flex items-center text-lg"><ArrowRight className="h-6 w-6 mr-4 text-green-400" /> Personalized growth journey tailored to your goals</li>
                  <li className="flex items-center text-lg"><ArrowRight className="h-6 w-6 mr-4 text-green-400" /> Access to exclusive content from top influencers</li>
                  <li className="flex items-center text-lg"><ArrowRight className="h-6 w-6 mr-4 text-green-400" /> Daily accountability and motivation boost</li>
                  <li className="flex items-center text-lg"><ArrowRight className="h-6 w-6 mr-4 text-green-400" /> Networking with like-minded individuals</li>
                  <li className="flex items-center text-lg"><ArrowRight className="h-6 w-6 mr-4 text-green-400" /> Trackable progress and tangible achievements</li>
                </ul>
              </motion.div>
              <motion.div
                className="bg-white bg-opacity-10 p-8 rounded-lg"
                whileHover={{ scale: 1.02 }}
              >
                <h4 className="text-3xl font-semibold mb-6">What You Might Miss Out:</h4>
                <ul className="space-y-4">
                  <li className="flex items-center text-lg"><X className="h-6 w-6 mr-4 text-red-400" /> Structured approach to personal development</li>
                  <li className="flex items-center text-lg"><X className="h-6 w-6 mr-4 text-red-400" /> Motivation from a supportive community</li>
                  <li className="flex items-center text-lg"><X className="h-6 w-6 mr-4 text-red-400" /> Direct interaction with industry influencers</li>
                  <li className="flex items-center text-lg"><X className="h-6 w-6 mr-4 text-red-400" /> Fun and engaging self-improvement process</li>
                  <li className="flex items-center text-lg"><X className="h-6 w-6 mr-4 text-red-400" /> Opportunity to form life-changing habits</li>
                </ul>
              </motion.div>
            </div>
          </motion.section>

          <motion.section id="faq" className="mb-24" custom={3} animate={controls}>
            <h3 className="text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h3>
            <div className="space-y-6">
              {[
                { question: "How does StreakMate work?", answer: "StreakMate connects you with influencer-led challenges. You join a challenge, post daily updates, and maintain your streak while interacting with a supportive community." },
                { question: "Is StreakMate free to use?", answer: "StreakMate offers both free and premium features. While many challenges are free to join, some may require a small fee set by the challenge creator." },
                { question: "Can I create my own challenges?", answer: "Yes! Any user can create challenges on StreakMate, whether you're an influencer or just someone passionate about a particular goal." },
                { question: "What happens if I break my streak?", answer: "Breaking a streak is part of the journey. You can always start a new streak, and our community is here to support and motivate you to keep going." }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white bg-opacity-10 p-6 rounded-lg"
                  initial={{ height: 80 }}
                  whileHover={{ height: "auto" }}
                >
                  <h4 className="text-xl font-semibold mb-2 flex justify-between items-center">
                    {item.question}
                    <ChevronDown className="h-6 w-6" />
                  </h4>
                  <p className="text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">{item.answer}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section className="text-center mb-24" custom={4} animate={controls}>
            <h3 className="text-4xl font-bold mb-6">Ready to Transform Your Life?</h3>
            <p className="text-xl mb-8">Join the StreakMate waitlist now and be part of the revolution in personal growth!</p>
            <form onSubmit={handleJoinWaitlist} className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                required
                className="flex-grow text-black"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button type="submit" className="bg-yellow-400 text-purple-800 hover:bg-yellow-300 transition">
                Join Waitlist <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
            <p className="mt-4 text-sm opacity-75">Limited slots available. Don't miss out on this opportunity!</p>
          </motion.section>
        </motion.div>
      </main>

      <footer className="bg-purple-800 py-12 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-2xl font-bold mb-4">StreakMate</p>
          <p className="mb-6">Transforming lives, one challenge at a time.</p>
          <div className="flex justify-center space-x-4 mb-6">
            <a href="#" className="hover:text-yellow-300 transition">Privacy Policy</a>
            <a href="#" className="hover:text-yellow-300 transition">Terms of Service</a>
            <a href="#" className="hover:text-yellow-300 transition">Contact Us</a>
          </div>
          <p>&copy; 2024 StreakMate. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
