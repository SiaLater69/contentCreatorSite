import React from 'react';
import { Play } from 'lucide-react';

interface VideoCardProps {
  title: string;
  thumbnail: string;
  views: string;
  date: string;
  duration: string;
}

export default function VideoCard({ title, thumbnail, views, date, duration }: VideoCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-105">
      <div className="relative aspect-video">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity flex items-center justify-center">
          <Play className="text-white opacity-0 group-hover:opacity-100 transition-opacity w-12 h-12" />
        </div>
        <span className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 text-sm rounded">
          {duration}
        </span>
      </div>
      <div className="p-4 bg-white">
        <h3 className="font-semibold text-lg mb-1 line-clamp-2">{title}</h3>
        <div className="flex items-center text-sm text-gray-600">
          <span>{views} views</span>
          <span className="mx-2">•</span>
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
}