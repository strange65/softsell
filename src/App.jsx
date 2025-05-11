import Header        from './components/Header';
import Hero          from './components/Hero';
import HowItWorks    from './components/HowItWorks';
import WhyChooseUs   from './components/WhyChooseUs';
import Testimonials  from './components/Testimonials';
import ContactForm   from './components/ContactForm';
import Footer        from './components/Footer';
import { useEffect, useState } from 'react';

function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem('theme') || 'light'
  );

  // apply data-theme attr on <html>
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(curr => (curr === 'light' ? 'dark' : 'light'));
  };
  return (
    <>
      <Header onToggleTheme={toggleTheme} theme={theme} />
      <main style={{ backgroundColor: 'var(--bg)', color: 'var(--fg)' }}>
        <Hero />
        <HowItWorks />
        <WhyChooseUs />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

export default App;
