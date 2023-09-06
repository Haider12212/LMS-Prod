import Banner from './components/Banner/index';
import Companies from './components/Companies/Companies';
import Courses from './components/Courses/index';
import Mentor from './components/Mentor/index';
import Testimonials from './components/Testimonials/index';
import Newsletter from './components/Newsletter/Newsletter';
import AboutUs from './components/AboutUs/index';


export default function Home() {
  return (
    <main>
      <Banner />
      <Companies />
      <Courses />
      <Mentor />
      <Testimonials />
      <AboutUs />
      <Newsletter />
    </main>
  )
}
