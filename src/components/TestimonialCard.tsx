import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  content: string;
  author: string;
  role: string;
  avatar: string;
}

export default function TestimonialCard({ content, author, role, avatar }: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <Quote className="h-8 w-8 text-red-500 mb-4" />
      <p className="text-gray-600 mb-6 italic">{content}</p>
      <div className="flex items-center">
        <img
          src={avatar}
          alt={author}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="ml-4">
          <h4 className="font-semibold">{author}</h4>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
}