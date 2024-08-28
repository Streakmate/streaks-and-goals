import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { ArrowRight, Star, Award, Users, Zap, X } from 'lucide-react';

const Index = () => {
  const [email, setEmail] = useState('');

  const handleJoinWaitlist = (e) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    toast.success("You've been added to the waitlist!");
    setEmail('');
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 text-white">
      <header className="py-6 px-4 md:px-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold">StreakMate</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#features" className="hover:text-yellow-300 transition">Features</a></li>
            <li><a href="#testimonials" className="hover:text-yellow-300 transition">Testimonials</a></li>
            <li><a href="#benefits" className="hover:text-yellow-300 transition">Benefits</a></li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12">
        <motion.section className="text-center mb-16" {...fadeIn}>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6">Transform Your Life with Daily Challenges</h2>
          <p className="text-xl md:text-2xl mb-8">Join StreakMate and unlock your full potential alongside your favorite creators!</p>
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

        <motion.section id="features" className="mb-16" {...fadeIn}>
          <h3 className="text-3xl font-bold mb-8 text-center">Why StreakMate?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Star className="h-8 w-8 mb-4" />, title: "Influencer-Led Challenges", description: "Learn from the best in your field" },
              { icon: <Award className="h-8 w-8 mb-4" />, title: "Daily Streaks", description: "Build habits that last a lifetime" },
              { icon: <Users className="h-8 w-8 mb-4" />, title: "Supportive Community", description: "Connect with like-minded individuals" },
              { icon: <Zap className="h-8 w-8 mb-4" />, title: "Gamified Progress", description: "Earn rewards as you grow" }
            ].map((feature, index) => (
              <div key={index} className="bg-white bg-opacity-10 p-6 rounded-lg text-center">
                {feature.icon}
                <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section id="testimonials" className="mb-16" {...fadeIn}>
          <h3 className="text-3xl font-bold mb-8 text-center">What Our Early Users Say</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Sarah K.", role: "Fitness Enthusiast", quote: "StreakMate has completely transformed my workout routine. The daily challenges keep me accountable and motivated!" },
              { name: "Alex M.", role: "Aspiring Developer", quote: "I've learned more in 30 days of coding challenges on StreakMate than I did in months of self-study. The community support is incredible!" },
              { name: "Priya R.", role: "Meditation Practitioner", quote: "The guided meditation challenges have helped me establish a consistent mindfulness practice. I feel more centered and focused in my daily life." }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white bg-opacity-10 p-6 rounded-lg">
                <p className="mb-4 italic">"{testimonial.quote}"</p>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm opacity-75">{testimonial.role}</div>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section id="benefits" className="mb-16" {...fadeIn}>
          <h3 className="text-3xl font-bold mb-8 text-center">Benefits of Joining StreakMate</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-2xl font-semibold mb-4">What You Gain:</h4>
              <ul className="space-y-2">
                <li className="flex items-center"><ArrowRight className="h-4 w-4 mr-2" /> Personalized growth journey</li>
                <li className="flex items-center"><ArrowRight className="h-4 w-4 mr-2" /> Access to exclusive influencer content</li>
                <li className="flex items-center"><ArrowRight className="h-4 w-4 mr-2" /> Accountability and motivation</li>
                <li className="flex items-center"><ArrowRight className="h-4 w-4 mr-2" /> Networking opportunities</li>
                <li className="flex items-center"><ArrowRight className="h-4 w-4 mr-2" /> Trackable progress and achievements</li>
              </ul>
            </div>
            <div>
              <h4 className="text-2xl font-semibold mb-4">What You Might Miss Out:</h4>
              <ul className="space-y-2">
                <li className="flex items-center"><X className="h-4 w-4 mr-2" /> Structured personal development</li>
                <li className="flex items-center"><X className="h-4 w-4 mr-2" /> Community-driven motivation</li>
                <li className="flex items-center"><X className="h-4 w-4 mr-2" /> Direct interaction with influencers</li>
                <li className="flex items-center"><X className="h-4 w-4 mr-2" /> Gamified self-improvement</li>
                <li className="flex items-center"><X className="h-4 w-4 mr-2" /> Potential life-changing habits</li>
              </ul>
            </div>
          </div>
        </motion.section>

        <motion.section className="text-center" {...fadeIn}>
          <h3 className="text-3xl font-bold mb-6">Ready to Transform Your Life?</h3>
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
      </main>

      <footer className="bg-purple-800 py-8 px-4 text-center">
        <p>&copy; 2024 StreakMate. All rights reserved.</p>
        <p className="mt-2">Transforming lives, one challenge at a time.</p>
      </footer>
    </div>
  );
};

export default Index;
