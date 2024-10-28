import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import VideoCard from '../components/VideoCard';
import { video } from 'framer-motion/client';

export default function Videos() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    'all',
    'vlogs',
    'behind-the-scenes',
  ];

  const videos = [
    {
      title: 'Alone in Copenhagen | Life in my twenties | Solo travel in Europe',
      thumbnail: 'https://img.youtube.com/vi/alxASq9XJDg/sddefault.jpg',
      views: '3.5K',
      date: '1 day ago',
      duration: '16:06',
      category: 'vlogs',
      videoUrl: 'https://www.youtube.com/watch?v=alxASq9XJDg'
    },

    {
      title: 'Life in my twenties | The Porsche car run | Documentary vlog',
      thumbnail: 'https://img.youtube.com/vi/R9hBBteS3w4/sddefault.jpg',
      views: '6.5K',
      date: '1 week ago',
      duration: '14:49',
      category: 'vlogs',
      videoUrl: 'https://www.youtube.com/watch?v=R9hBBteS3w4'
    },
    {
      title: 'I bought a Porsche at 22 | Life in my twenties',
      thumbnail: 'https://img.youtube.com/vi/UWy1SV9dAuE/sddefault.jpg',
      views: '14K',
      date: '3 weeks ago',
      duration: '14:33',
      category: 'vlogs',
      videoUrl: 'https://www.youtube.com/watch?v=UWy1SV9dAuE'
    },
    {
      title:
        'Life in my twenties | Cape Town diaries FT: Massive clothing haul',
      thumbnail: 'https://img.youtube.com/vi/Yj8ZtNmngN0/sddefault.jpg',
      views: '15K',
      date: '4 weeks ago',
      duration: '19:57',
      category: 'vlogs',
      videoUrl: 'https://www.youtube.com/watch?v=Yj8ZtNmngN0'
    },
    {
      title: 'Life in my twenties | Cape Town is a movie',
      thumbnail: 'https://img.youtube.com/vi/prLkDPoTZ2o/sddefault.jpg',
      views: '11K',
      date: '1 month ago',
      duration: '13:56',
      category: 'vlogs',
      videoUrl: 'https://www.youtube.com/watch?v=prLkDPoTZ2o'
    },
    {
      title: 'My Entire Shoe Collection 2024 | Life in my twenties',
      thumbnail: 'https://img.youtube.com/vi/Q8joTNZnvxQ/sddefault.jpg',
      views: '8.9K',
      date: '1 month ago',
      duration: '16:25',
      category: 'vlogs',
      videoUrl: 'https://www.youtube.com/watch?v=Q8joTNZnvxQ'
    },
    {
      title:
        'Life in my twenties | Shopping, hauls, events and moving out | A few weeks in Cape Town',
      thumbnail: 'https://img.youtube.com/vi/ZjT-j6UHaps/sddefault.jpg',
      views: '12K',
      date: '2 months ago',
      duration: '13:22',
      category: 'vlogs',
      videoUrl: 'https://www.youtube.com/watch?v=ZjT-j6UHaps'
    },
    {
      title:
        'Life in my twenties | Vlog or short film? | A few weeks in Cape Town',
      thumbnail: 'https://img.youtube.com/vi/3zOQL6gExq4/sddefault.jpg',
      views: '8.5K',
      date: '2 months ago',
      duration: '13:18',
      category: 'vlogs',
      videoUrl: 'https://www.youtube.com/watch?v=3zOQL6gExq4'
    },
    {
      title:
        '6am morning routine | Life in my 20s | Productive and healthy habits',
      thumbnail: 'https://img.youtube.com/vi/vmOOxVMzdsU/sddefault.jpg',
      views: '242K',
      date: '2 months ago',
      duration: '15:59',
      category: 'vlogs',
      videoUrl: 'https://www.youtube.com/watch?v=vmOOxVMzdsU'
    },
    {
      title:
        'Shopping in Cape Town FT: Pickups and hauls | Life in my 20s | A week in Cape Town',
      thumbnail: 'https://img.youtube.com/vi/E1C__GfSags/sddefault.jpg',
      views: '8.8K',
      date: '2 months ago',
      duration: '17:56',
      category: 'vlogs',
      videoUrl: 'https://www.youtube.com/watch?v=E1C__GfSags'
    },
    {
      title:
        'Productive week in my life | Life in my 20s | A week in Cape Town',
      thumbnail: 'https://img.youtube.com/vi/MdWZgMT7ed4/sddefault.jpg',
      views: '7.6K',
      date: '2 months ago',
      duration: '13:09',
      category: 'vlogs',
      videoUrl: 'https://www.youtube.com/watch?v=MdWZgMT7ed4'
    },
    {
      title: 'My favorite trousers FT: Chimi dinner | Life in my 20s | A week in Cape Town',
      thumbnail:
        'https://img.youtube.com/vi/MULFwhvWgms/sddefault.jpg',
      views: '7.3K',
      date: '2 months ago',
      duration: '13:23',
      category: 'vlogs',
      videoUrl: 'https://www.youtube.com/watch?v=MULFwhvWgms'
    },
    {
      title: "I bought Maison Margiela Tabi's FT: my footwear rotation | Life in my 20s | A week in Cape Town",
      thumbnail:
        'https://img.youtube.com/vi/9YLUpCwhIeA/sddefault.jpg',
      views: '12K',
      date: '3 months ago',
      duration: '14:27',
      category: 'vlogs',
      videoUrl: 'https://www.youtube.com/watch?v=9YLUpCwhIeA'
    },
    {
      title: 'Realistic week in Cape Town FT: A photoshoot | Life in my 20s | A week in Cape Town',
      thumbnail:
        'https://img.youtube.com/vi/04MJ8zu2xDc/sddefault.jpg',
      views: '6.6K',
      date: '3 months ago',
      duration: '13:32',
      category: 'vlogs',
      videoUrl: 'https://www.youtube.com/watch?v=04MJ8zu2xDc'
    },
    {
      title: "Shopping in Cape Town FT: Outfits I've been wearing | Life in my 20s | A week in Cape Town",
      thumbnail:
        'https://img.youtube.com/vi/4WKNn6-qgss/sddefault.jpg',
      views: '9K',
      date: '3 months ago',
      duration: '21:32',
      category: 'vlogs',
      videoUrl: 'https://www.youtube.com/watch?v=4WKNn6-qgss'
    },
    {
      title: 'Productive week in my life FT: my night time routine | Life in my 20s | A week in Cape Town',
      thumbnail:
        'https://img.youtube.com/vi/jWu9ZL3kAqc/sddefault.jpg',
      views: '9.4K',
      date: '3 months ago',
      duration: '12:20',
      category: 'vlogs',
      videoUrl: 'https://www.youtube.com/watch?v=jWu9ZL3kAqc'
    },
    {
      title: "Father's Day with Hermès FT: Loads of PR packages | Life in my 20s | A week in Cape Town",
      thumbnail:
        'https://img.youtube.com/vi/8rJNpKZ0Br0/sddefault.jpg',
      views: '6.5K',
      date: '4 months ago',
      duration: '12:41',
      category: 'vlogs',
      videoUrl: 'https://www.youtube.com/watch?v=8rJNpKZ0Br0'
    },
    {
      title: 'How social media became my job FT: Q&A | Life in my 20s | A week in Cape Town',
      thumbnail:
        'https://img.youtube.com/vi/K5rSpY-vXkE/sddefault.jpg',
      views: '9.7K',
      date: '4 months ago',
      duration: '17:19',
      category: 'vlogs',
      videoUrl: 'https://www.youtube.com/watch?v=K5rSpY-vXkE'
    },
    {
      title: 'Shopping in Cape Town FT: My favourite jeans | Life in my 20s | A week in Cape Town',
      thumbnail:
        'https://img.youtube.com/vi/wYDgXmYGIHE/sddefault.jpg',
      views: '37K',
      date: '4 months ago',
      duration: '19:33',
      category: 'vlogs',
      videoUrl: 'https://www.youtube.com/watch?v=wYDgXmYGIHE'
    },
    {
      title: 'Life in my twenties | A week in Cape Town | Finding my routine',
      thumbnail:
        'https://img.youtube.com/vi/IcaLmpr52bs/sddefault.jpg',
      views: '8.3',
      date: '4 months ago',
      duration: '17:23',
      category: 'vlogs',
      videoUrl: 'https://www.youtube.com/watch?v=IcaLmpr52bs'
    },
    {
      title: 'BTS shooting content | A week in Cape Town | Life in my 20s',
      thumbnail:
        'https://img.youtube.com/vi/6M85Hp5VVOI/sddefault.jpg',
      views: '9K',
      date: '4 months ago',
      duration: '10:37',
      category: 'vlogs',
      videoUrl: 'https://www.youtube.com/watch?v=6M85Hp5VVOI'
    },
    {
      title: "Life in my twenties | A week in Cape Town | Window shopping and Mother's Day celebrations",
      thumbnail:
        'https://img.youtube.com/vi/BMioXGPmsyw/sddefault.jpg',
      views: '6.5K',
      date: '5 months ago',
      duration: '10:50',
      category: 'vlogs',
      videoUrl: 'https://www.youtube.com/watch?v=BMioXGPmsyw'
    },
    {
      title: 'Life in my twenties | A week in Cape Town | Getting Dressed by Oakley',
      thumbnail:
        'https://img.youtube.com/vi/nFYHkdyD77g/sddefault.jpg',
      views: '9.8K',
      date: '5 months ago',
      duration: '19:18',
      category: 'vlogs',
      videoUrl: 'https://www.youtube.com/watch?v=nFYHkdyD77g'
    },
    {
      title: 'Life in my twenties | A week in Cape Town | EP: 05 | Full time in social media',
      thumbnail:
        'https://img.youtube.com/vi/XiGybCYUsyg/sddefault.jpg',
      views: '11K',
      date: '5 months ago',
      duration: '08:56',
      category: 'vlogs',
      videoUrl: 'https://www.youtube.com/watch?v=XiGybCYUsyg'
    },
    {
      title: 'Life in my twenties | A week in Cape Town | EP: 04 | Trip away',
      thumbnail:
        'https://img.youtube.com/vi/b1A_j8R8b9Q/sddefault.jpg',
      views: '14K',
      date: '5 months ago',
      duration: '10:50',
      category: 'vlogs',
      videoUrl: 'https://www.youtube.com/watch?v=b1A_j8R8b9Q'
    },
    {
      title: 'A week in Cape Town | Gifts and clothing hauls',
      thumbnail:
        'https://img.youtube.com/vi/-h143VVWka0/sddefault.jpg',
      views: '7.2K',
      date: '6 months ago',
      duration: '13:02',
      category: 'vlogs',
      videoUrl: 'https://www.youtube.com/watch?v=-h143VVWka0'
    },
    {
      title: 'A week in Cape Town | Fashion shows, events and building routines',
      thumbnail:
        'https://img.youtube.com/vi/okMl5M5ygII/sddefault.jpg',
      views: '7.2K',
      date: '6 months ago',
      duration: '13:05',
      category: 'vlogs',
      videoUrl: 'https://www.youtube.com/watch?v=okMl5M5ygII'
    },
    {
      title: 'Life in my 20s | A week in Cape Town FT: shopping, training and graduations',
      thumbnail:
        'https://img.youtube.com/vi/skOC4Q-Tun4/sddefault.jpg',
      views: '13K',
      date: '6 months ago',
      duration: '14:45',
      category: 'vlogs',
      videoUrl: 'https://www.youtube.com/watch?v=skOC4Q-Tun4'
    },
  ];

  const filteredVideos = videos.filter((video) => {
    const matchesCategory =
      selectedCategory === 'all' || video.category === selectedCategory;
    const matchesSearch = video.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Videos</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore my latest videos, tutorials, and behind-the-scenes content
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4 md:space-y-0 md:flex md:items-center md:justify-between">
          <div className="relative flex-1 max-w-lg">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search videos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div className="flex items-center space-x-4">
            <Filter className="text-gray-400 h-5 w-5" />
            <div className="flex gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg capitalize ${
                    selectedCategory === category
                      ? 'bg-red-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredVideos.map((video, index) => (
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

        {filteredVideos.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">
              No videos found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
