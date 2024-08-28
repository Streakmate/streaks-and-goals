import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const Index = () => {
  const handleJoinWaitlist = (e) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    toast.success("You've been added to the waitlist!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex flex-col justify-center items-center p-4">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img className="h-48 w-full object-cover md:w-48" src="/placeholder.svg" alt="App preview" />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Coming Soon</div>
            <h1 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              StreakMate
            </h1>
            <p className="mt-4 max-w-2xl text-xl text-gray-500">
              Boost your skills and stay motivated with challenges from your favorite creators!
            </p>
            <div className="mt-6">
              <h2 className="text-lg font-medium text-gray-900">Key Features:</h2>
              <ul className="mt-2 list-disc list-inside text-gray-500">
                <li>Join challenges created by influencers</li>
                <li>Maintain daily streaks for accountability</li>
                <li>Engage with a supportive community</li>
                <li>Track your progress and earn rewards</li>
              </ul>
            </div>
            <form onSubmit={handleJoinWaitlist} className="mt-8 flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                required
                className="flex-grow"
              />
              <Button type="submit" className="bg-indigo-600 text-white hover:bg-indigo-700">
                Join Waitlist
              </Button>
            </form>
            <p className="mt-4 text-sm text-gray-500">
              Be among the first to experience StreakMate! Limited slots available.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;