import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const EarlyAccess = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const emailParam = params.get('email');
    if (emailParam) {
      setEmail(emailParam);
    } else if (location.state?.email) {
      setEmail(location.state.email);
    }
  }, [location.search, location.state]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend or handle it as needed
    console.log('Form submitted:', { name, email, phone });
    setSubmitted(true);
    toast.success("Thank you for joining StreakMate!");
  };

  const handleSecureSpot = () => {
    window.open('https://tally.so/r/nGLbMO', '_blank');
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center text-gray-800">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Thank You for Joining StreakMate!</h2>
          <p className="text-xl mb-8">We're excited to have you on board. Get ready to transform your life!</p>
          <Button onClick={handleSecureSpot} className="bg-red-500 hover:bg-red-600 text-white transition">
            Secure Your Spot Now
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center text-white">
      <div className="bg-gray-100 p-8 rounded-lg max-w-md w-full shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-center">Get Early Access to StreakMate</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full"
          />
          <Input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full"
          />
          <Input
            type="tel"
            placeholder="Your Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="w-full"
          />
          <Button type="submit" className="w-full bg-red-500 hover:bg-red-600 text-white transition">
            Get Early Access
          </Button>
        </form>
      </div>
    </div>
  );
};

export default EarlyAccess;
