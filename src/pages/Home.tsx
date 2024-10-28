import { ArrowRight, Youtube, Heart } from 'lucide-react';
import VideoCard from '../components/VideoCard';
// import TestimonialCard from '../components/TestimonialCard';
import ImageGrid from '../components/ImageGrid';
import NewsletterSubscription from '../components/NewsLetter';
import React from 'react';
import { video } from 'framer-motion/client';

export default function Home() {


  const featuredVideos = [
    {
      title: 'I bought a Porsche at 22 | Life in my twenties',
      thumbnail: 'https://img.youtube.com/vi/UWy1SV9dAuE/sddefault.jpg',
      views: '14K',
      date: '3 weeks ago',
      duration: '14:33',
      videoUrl: 'https://www.youtube.com/watch?v=UWy1SV9dAuE',
    },
    {
      title:
      'Life in my twenties | Vlog or short film? | A few weeks in Cape Town',
    thumbnail: 'https://img.youtube.com/vi/3zOQL6gExq4/sddefault.jpg',
    views: '8.5K',
    date: '2 months ago',
    duration: '13:18',
    videoUrl: 'https://www.youtube.com/watch?v=3zOQL6gExq4',
    },
    {
      title:
      '6am morning routine | Life in my 20s | Productive and healthy habits',
    thumbnail: 'https://img.youtube.com/vi/vmOOxVMzdsU/sddefault.jpg',
    views: '242K',
    date: '2 months ago',
    duration: '15:59',
    videoUrl: 'https://www.youtube.com/watch?v=vmOOxVMzdsU',
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
  <a 
    href={video.videoUrl}
    key={index}
    target="_blank"
    rel="noopener noreferrer"
    className="block transition-transform hover:scale-105"
  >
    {video.videoUrl && (
      <VideoCard {...video} />
    )}
  </a>
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
     <a href='https://www.instagram.com/ethan_kieffer/'>
     <div className="flex flex-col items-center justify-center">
<div className="group relative inline-block">
  <button className="focus:outline-none">
    <svg
      viewBox="0 0 16 16"
      className="bi bi-instagram transform transition-transform duration-300 hover:scale-125 hover:text-red-500"
      fill="currentColor"
      height="40"
      width="40"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"
      ></path>
    </svg>
  </button>
  <span
    className="absolute -top-14 left-1/2 transform -translate-x-1/2 z-20 px-4 py-2 text-sm font-bold text-white bg-gray-900 rounded-lg shadow-lg transition-transform duration-300 ease-in-out scale-0 group-hover:scale-100">Instagram</span>
</div>

      </div>
      </a>
     

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