/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Tajawal', 'Cairo', 'system-ui', 'sans-serif'],
        arabic: ['Tajawal', 'Cairo', 'sans-serif'],
        display: ['Cairo', 'Tajawal', 'sans-serif']
      },
      colors: {
        brand: {
          50: '#eef7ff',
          100: '#d9ecff',
          200: '#bcdcff',
          300: '#8ec5ff',
          400: '#59a4ff',
          500: '#2f80ed',
          600: '#1f63d6',
          700: '#1a4fad',
          800: '#1b448c',
          900: '#1c3c72',
          950: '#14264a'
        },
        gold: {
          400: '#f4c430',
          500: '#e0a800',
          600: '#c98f00'
        }
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'menu-in': {
          '0%': { opacity: '0', transform: 'translateY(-12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out both',
        'menu-in': 'menu-in 0.35s ease-out both'
      }
    }
  },
  plugins: []
}
