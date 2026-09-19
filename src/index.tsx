import { Hono } from 'hono'
import { renderer } from './renderer'
import { links } from './links'
import { profile } from './profile'

const app = new Hono()

app.use(renderer)

app.get('/', (c) => {
  return c.render(
    <div
      style={{
        minHeight: '100vh',
        background: 'radial-gradient(circle at 50% 0%, #1c2030 0%, #0f1117 60%)',
        color: '#f5f5f5',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 'clamp(32px, 8vw, 64px) 20px',
        fontFamily: 'system-ui, sans-serif',
      }}
    >
      <style>{`
        .link-button {
          transition: transform 0.15s ease, background-color 0.15s ease, border-color 0.15s ease;
        }
        .link-button:hover {
          transform: translateY(-2px);
          background-color: #23283a;
          border-color: #4a5270;
        }
      `}</style>

      <div
        style={{
          width: 'clamp(96px, 30vw, 148px)',
          height: 'clamp(96px, 30vw, 148px)',
          borderRadius: '50%',
          padding: '4px',
          marginBottom: '24px',
          background: 'linear-gradient(135deg, #6c7bff, #a86cff)',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            backgroundColor: '#1a1d27',
            backgroundImage: 'url(/static/avatar.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            border: '3px solid #0f1117',
          }}
        />
      </div>

      <h1
        style={{
          fontSize: 'clamp(20px, 5vw, 24px)',
          fontWeight: 700,
          margin: '0 0 6px',
          letterSpacing: '0.02em',
          textAlign: 'center',
        }}
      >
        {profile.name}
      </h1>
      <p
        style={{
          fontSize: '14px',
          color: '#9aa0ac',
          margin: '0 0 16px',
          textAlign: 'center',
          maxWidth: 'min(280px, 90vw)',
          lineHeight: 1.6,
        }}
      >
        {profile.tagline}
      </p>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '8px',
          marginBottom: '24px',
        }}
      >
        {profile.tags.map((tag) => (
          <span
            style={{
              fontSize: '12px',
              padding: '4px 12px',
              borderRadius: '999px',
              backgroundColor: '#1a1d27',
              border: '1px solid #2a2e3a',
              color: '#c7cbd6',
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      <div
        style={{
          maxWidth: 'min(360px, 90vw)',
          marginBottom: '40px',
        }}
      >
        {profile.bio.map((paragraph) => (
          <p
            style={{
              fontSize: '14px',
              color: '#c7cbd6',
              lineHeight: 1.8,
              margin: '0 0 12px',
              textAlign: 'center',
            }}
          >
            {paragraph}
          </p>
        ))}
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '14px',
          width: '100%',
          maxWidth: 'min(360px, 90vw)',
        }}
      >
        {links.map((link) => (
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            class="link-button"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '14px 20px',
              borderRadius: '14px',
              backgroundColor: '#1a1d27',
              color: '#f5f5f5',
              textDecoration: 'none',
              border: '1px solid #2a2e3a',
              fontSize: '16px',
            }}
          >
            <span style={{ fontSize: '18px' }}>{link.icon}</span>
            <span>{link.label}</span>
          </a>
        ))}
      </div>
    </div>
  )
})

export default app
