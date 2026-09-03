import { useRouter } from '@/lib/router';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Services from '@/pages/Services';
import Projects from '@/pages/Projects';
import Contact from '@/pages/Contact';

function App() {
  const { route, navigate } = useRouter();

  const renderPage = () => {
    switch (route.page) {
      case 'about':
        return <About navigate={navigate} />;
      case 'services':
        return <Services navigate={navigate} />;
      case 'projects':
        return <Projects navigate={navigate} />;
      case 'contact':
        return <Contact navigate={navigate} />;
      default:
        return <Home navigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar current={route.page} navigate={navigate} />
      <main>{renderPage()}</main>
      <Footer navigate={navigate} />
      <WhatsAppButton />
    </div>
  );
}

export default App;
