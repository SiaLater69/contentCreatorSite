import React from 'react';
import { ArrowRight, Youtube, Heart } from 'lucide-react';
import VideoCard from '../components/VideoCard';
import TestimonialCard from '../components/TestimonialCard';
import ImageGrid from '../components/ImageGrid';
import NewsletterSubscription from '../components/NewsLetter';

export default function Home() {
  const featuredVideos = [
    {
      title: 'I bought a Porsche at 22 | Life in my twenties',
      thumbnail: 'https://img.youtube.com/vi/UWy1SV9dAuE/sddefault.jpg',
      views: '14K',
      date: '3 weeks ago',
      duration: '14:33',
    },
    {
      title:
      'Life in my twenties | Vlog or short film? | A few weeks in Cape Town',
    thumbnail: 'https://img.youtube.com/vi/3zOQL6gExq4/sddefault.jpg',
    views: '8.5K',
    date: '2 months ago',
    duration: '13:18',
    },
    {
      title:
      '6am morning routine | Life in my 20s | Productive and healthy habits',
    thumbnail: 'https://img.youtube.com/vi/vmOOxVMzdsU/sddefault.jpg',
    views: '242K',
    date: '2 months ago',
    duration: '15:59',
    }
  ];

  const testimonials = [
    {
      content: "This channel completely changed my perspective on content creation. The tutorials are incredibly detailed and easy to follow!",
      author: "Sarah Johnson",
      role: "Aspiring Creator",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    },
    {
      content: "I've been following this channel for years, and the quality just keeps getting better. Always looking forward to new content!",
      author: "Michael Chen",
      role: "Professional Photographer",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://i.postimg.cc/3RmXdr4H/ethan4.jpg"
            alt="Hero background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome to My Creative World</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl">Join me on this journey as we explore the art of content creation, photography, and digital storytelling.</p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.youtube.com/@ethankieffer"
                className="inline-flex items-center px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg text-white font-semibold transition-colors"
              >
                <Youtube className="mr-2 h-5 w-5" />
                Subscribe Now
              </a>
              <a
                href="/videos"
                className="inline-flex items-center px-6 py-3 bg-white hover:bg-gray-100 rounded-lg text-gray-900 font-semibold transition-colors"
              >
                Watch Latest
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">15K+</div>
              <div className="text-gray-600">Subscribers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">100+</div>
              <div className="text-gray-600">Videos Created</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">1M+</div>
              <div className="text-gray-600">Total Views</div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Videos */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Videos</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Check out my YouTube journey</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredVideos.map((video, index) => (
              <VideoCard key={index} {...video} />
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href="/videos"
              className="inline-flex items-center px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg text-white font-semibold transition-colors"
            >
              View All Videos
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

     <ImageGrid/>

      {/* Testimonials */}
      {/* <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What My Viewers Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Don't just take my word for it - here's what members of our community have to say.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </div> */}

      {/* Newsletter */}
      <NewsletterSubscription/>
    </div>
  );
}