import React from 'react';
import { Youtube, Camera, Edit, Award, ArrowRight } from 'lucide-react';

export default function About() {
  const milestones = [
    {
      year: '2020',
      title: 'Channel Launch',
      description:
        'Started the journey with my first video about digital storytelling',
    },
    {
      year: '2021',
      title: '100K Subscribers',
      description:
        'Reached our first major milestone and received the Silver Play Button',
    },
    {
      year: '2022',
      title: 'First Viral Hit',
      description:
        'Our tutorial on content creation reached 1M views in just one week',
    },
    {
      year: '2023',
      title: 'Brand Partnerships',
      description:
        'Collaborated with major tech brands and expanded our content scope',
    },
  ];

  const skills = [
    {
      icon: Camera,
      title: 'Videography',
      description: 'Professional video production and editing',
    },
    {
      icon: Edit,
      title: 'Content Creation',
      description: 'Taking photos and Videos',
    },
    {
      icon: Youtube,
      title: 'YouTube',
      description: 'Showcasing my life and Growing my channel',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-6">About Me</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            <p>22 | Cape Town</p>
              <p>Just a guy who likes fashion, fitness and caffeine…</p>
            </p>
          </div>
        </div>
      </div>

      {/* Bio Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://i.postimg.cc/5ysCDXQb/main.jpg"
                alt="Creator Portrait"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">
                The Story Behind the Camera
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Hey there! I'm Ethan Kieffer, a content creator passionate
                  about sharing knowledge and inspiring others in the digital
                  space.
                </p>
              </div>
              <div className="mt-8">
                <a
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  Work with Me
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What I Do Best</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Combining creativity with technical expertise to deliver
              high-quality content
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <skill.icon className="h-12 w-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                <p className="text-gray-600">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      {/* <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">My Journey</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The key moments that shaped my content creation journey
            </p>
          </div>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row gap-8 items-start"
              >
                <div className="md:w-1/4">
                  <div className="text-2xl font-bold text-red-600">
                    {milestone.year}
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-semibold mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}
    </div>
  );
}
