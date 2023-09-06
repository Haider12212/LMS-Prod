import Banner from './components/Banner/index';
import Courses from './components/Courses/index';
import Mentor from './components/Mentor/index';
import Testimonials from './components/Testimonials/index';
import Newsletter from './components/Newsletter/Newsletter';
import AboutUs from './components/AboutUs/index';


export default function Home() {
  return (
    <main>
      <Banner />
      <Courses />
      <Mentor />
      <Testimonials />
      <AboutUs />
      <Newsletter />
    </main>
  )
}
