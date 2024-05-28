'use client';

import { useState } from 'react';
import type { Link } from '../types';

const SHORT_BASE = process.env.NEXT_PUBLIC_SHORT_BASE || 'http://localhost:8000';

interface Props {
  link: Link;
  onDelete: (id: number) => void;
}

export default function LinkCard({ link, onDelete }: Props) {
  const [copied, setCopied] = useState(false);
  const shortUrl = `${SHORT_BASE}/${link.short_code}`;

  function handleCopy() {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="rounded-lg border border-gray-700 bg-gray-800 p-4">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <a
            href={shortUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 font-medium truncate block"
          >
            {shortUrl}
          </a>
          <p className="mt-1 text-sm text-gray-400 truncate">{link.original_url}</p>
          <div className="mt-2 flex items-center gap-4 text-xs text-gray-500">
            <span>{link.clicks} click{link.clicks !== 1 ? 's' : ''}</span>
            <span>{new Date(link.created_at).toLocaleDateString()}</span>
          </div>
        </div>
        <div className="flex gap-2 shrink-0">
          <button
            onClick={handleCopy}
            className="rounded-md bg-gray-700 px-3 py-1.5 text-sm text-gray-300 hover:bg-gray-600 transition-colors"
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
          <button
            onClick={() => onDelete(link.id)}
            className="rounded-md bg-red-900/50 px-3 py-1.5 text-sm text-red-400 hover:bg-red-800/50 transition-colors"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
