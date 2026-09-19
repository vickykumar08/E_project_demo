import React from 'react';
import { Heart } from 'lucide-react';

const InstagramIcon: React.FC<{ size?: number; color?: string }> = ({ size = 24, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const INSTA_POSTS = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=600&auto=format&fit=crop&q=80',
    likes: '1.4k',
    tag: '#AnimeStreetwear'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=600&auto=format&fit=crop&q=80',
    likes: '920',
    tag: '#CoupleLineart'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600&auto=format&fit=crop&q=80',
    likes: '2.1k',
    tag: '#AkatsukiHoodie'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&auto=format&fit=crop&q=80',
    likes: '840',
    tag: '#CustomBranding'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=600&auto=format&fit=crop&q=80',
    likes: '1.1k',
    tag: '#HoneycombPolo'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&auto=format&fit=crop&q=80',
    likes: '1.8k',
    tag: '#PetEmbroidery'
  }
];

export const InstagramFeed: React.FC = () => {
  return (
    <section style={{
      padding: '4rem 0',
      background: 'var(--bg-main)',
      borderTop: '1px solid var(--border-subtle)'
    }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <span className="section-tag">
            <InstagramIcon size={14} color="#e63946" />
            Follow @tailorvisit_ (1,053 Followers)
          </span>
          <h2 className="section-title">JOIN OUR STREETWEAR TRIBE</h2>
          <p className="section-desc">
            Tag us in your fits wearing #EmbroPrint and #TailorVisit for a chance to be featured on our official Instagram feed.
          </p>
        </div>

        {/* 6-Item Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '1rem'
        }}>
          {INSTA_POSTS.map(post => (
            <a
              key={post.id}
              href="https://www.instagram.com/tailorvisit_?stkn=MWMzcWppcGxqaWkydQ=="
              target="_blank"
              rel="noopener noreferrer"
              style={{
                position: 'relative',
                height: '240px',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                display: 'block'
              }}
              onMouseEnter={(e) => {
                const overlay = e.currentTarget.querySelector('.insta-overlay') as HTMLElement;
                if (overlay) overlay.style.opacity = '1';
              }}
              onMouseLeave={(e) => {
                const overlay = e.currentTarget.querySelector('.insta-overlay') as HTMLElement;
                if (overlay) overlay.style.opacity = '0';
              }}
            >
              <img
                src={post.image}
                alt="Instagram Community Post"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div
                className="insta-overlay"
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(14, 17, 23, 0.75)',
                  backdropFilter: 'blur(4px)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  opacity: 0,
                  transition: 'opacity 0.25s ease'
                }}
              >
                <InstagramIcon size={28} color="#e63946" />
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#ffffff', fontSize: '0.85rem', fontWeight: 700 }}>
                  <Heart size={14} fill="#e63946" color="#e63946" />
                  <span>{post.likes}</span>
                </div>
                <span style={{ fontSize: '0.75rem', color: '#facc15', fontWeight: 600 }}>
                  {post.tag}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
