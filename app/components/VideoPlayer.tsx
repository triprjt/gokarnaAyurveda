'use client'; // Client component for interactivity
import { CldVideoPlayer } from 'next-cloudinary';

export default function VideoPlayer({ publicId }: { publicId: string }) {
  return (
    <div className="relative w-full aspect-video overflow-hidden [&>div]:absolute [&>div]:inset-0 [&>div]:h-full [&>div]:w-full [&_video]:h-full [&_video]:w-full">
      <CldVideoPlayer
        width={960}
        height={540}
        src={publicId}
        controls
        autoPlay="muted"
        preload="metadata"
      />
    </div>
  );
}