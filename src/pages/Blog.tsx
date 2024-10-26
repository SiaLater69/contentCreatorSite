import React, { useState, useEffect } from 'react';
import { Search, Filter, Youtube, Music, Menu } from 'lucide-react';
import VideoCard from '../components/VideoCard';

declare global {
  interface Window {
    TikTok?: {
      reloadEmbeds: () => void;
    };
  }
}

export default function Component() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    'all',
    'vlogs',
    'behind-the-scenes',
  ];

  const videos = [
    {
      title: 'Life in my twenties | The Porsche car run | Documentary vlog',
      thumbnail: 'https://img.youtube.com/vi/R9hBBteS3w4/sddefault.jpg',
      views: '6.5K',
      date: '1 week ago',
      duration: '14:49',
      category: 'vlogs',
    },
    {
      title: 'I bought a Porsche at 22 | Life in my twenties',
      thumbnail: 'https://img.youtube.com/vi/UWy1SV9dAuE/sddefault.jpg',
      views: '14K',
      date: '3 weeks ago',
      duration: '14:33',
      category: 'vlogs',
    },
    {
      title: 'Life in my twenties | Cape Town diaries FT: Massive clothing haul',
      thumbnail: 'https://img.youtube.com/vi/Yj8ZtNmngN0/sddefault.jpg',
      views: '15K',
      date: '4 weeks ago',
      duration: '19:57',
      category: 'vlogs',
    },
    {
      title: 'Life in my twenties | Cape Town is a movie',
      thumbnail: 'https://img.youtube.com/vi/prLkDPoTZ2o/sddefault.jpg',
      views: '11K',
      date: '1 month ago',
      duration: '13:56',
      category: 'vlogs',
    },
    {
      title: 'My Entire Shoe Collection 2024 | Life in my twenties',
      thumbnail: 'https://img.youtube.com/vi/Q8joTNZnvxQ/sddefault.jpg',
      views: '8.9K',
      date: '1 month ago',
      duration: '16:25',
      category: 'vlogs',
    },
    {
      title: 'Life in my twenties | Shopping, hauls, events and moving out | A few weeks in Cape Town',
      thumbnail: 'https://img.youtube.com/vi/ZjT-j6UHaps/sddefault.jpg',
      views: '12K',
      date: '2 months ago',
      duration: '13:22',
      category: 'vlogs',
    }
  ];

  const filteredVideos = videos.filter((video) => {
    const matchesCategory = selectedCategory === 'all' || video.category === selectedCategory;
    const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  useEffect(() => {
    const loadTikTokScript = (): void => {
      const existingScript = document.getElementById("tiktok-embed-script");
      if (!existingScript) {
        const script = document.createElement("script");
        script.id = "tiktok-embed-script";
        script.src = "https://www.tiktok.com/embed.js";
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
          if (window.TikTok) {
            window.TikTok.reloadEmbeds();
          }
        };
      } else {
        if (window.TikTok) {
          window.TikTok.reloadEmbeds();
        }
      }
    };

    loadTikTokScript();

    return () => {
      const script = document.getElementById("tiktok-embed-script");
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const tiktokVideos = [
    "7429339827113364742",
    "7429339827113364742",
    "7429339827113364742"
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 dark:bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-900/60">
        <div className="container mx-auto flex h-14 items-center px-4">
          <div className="mr-4 hidden md:flex">
            <a className="mr-6 flex items-center space-x-2" href="/">
              <span className="hidden font-bold sm:inline-block text-gray-900 dark:text-white">MyVideoShowcase</span>
            </a>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <a className="transition-colors hover:text-gray-700 dark:hover:text-gray-200 text-gray-900 dark:text-white" href="#youtube">YouTube</a>
              <a className="transition-colors hover:text-gray-700 dark:hover:text-gray-200 text-gray-900 dark:text-white" href="#tiktok">TikTok</a>
            </nav>
          </div>
          <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </button>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <section className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Welcome to My Video Showcase</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">Check out my latest YouTube and TikTok content!</p>
        </section>
        <section id="youtube">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">YouTube Videos</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Explore my latest videos, tutorials, and behind-the-scenes content
              </p>
            </div>

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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredVideos.map((video, index) => (
                <VideoCard key={index} {...video} />
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
        </section>
        <section id="tiktok" className="mb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">
                <Music className="mr-2" /> TikTok Videos
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Check out my latest TikTok content and short-form videos
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
              {tiktokVideos.map((videoId, index) => (
                <div key={index} className="flex items-center justify-center">
                  <blockquote
                    className="tiktok-embed"
                    cite={`https://www.tiktok.com/@ethan_kieffer/video/${videoId}`}
                    data-video-id={videoId}
                    style={{ maxWidth: "300px", minWidth: "300px" }}
                  >
                    <section>
                      <a
                        target="_blank"
                        title="@ethan_kieffer"
                        href="https://www.tiktok.com/@ethan_kieffer?refer=embed"
                        rel="noreferrer"
                      >
                        @ethan_kieffer
                      </a>
                      <p>Simple fits 🤌🏽</p>
                      <a
                        target="_blank"
                        title="♬ 9PM in Shibuya - ADTurnUp"
                        href="https://www.tiktok.com/music/9PM-in-Shibuya-7290750382500759554?refer=embed"
                        rel="noreferrer"
                      >
                        ♬ 9PM in Shibuya - ADTurnUp
                      </a>
                    </section>
                  </blockquote>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row px-4">
          <p className="text-center text-sm leading-loose text-gray-600 dark:text-gray-300 md:text-left">
            © 2023 MyVideoShowcase. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}