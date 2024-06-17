import Image from "next/image";
import Link from "next/link";

import profilePic1 from "@/assets/images/optimized/IMG_1675.jpg"
import profilePic2 from "@/assets/images/optimized/IMG_1679.jpg"
import profilePic3 from '@/assets/images/optimized/IMG_0701_transparent-bg_2.png';

import stockPic1 from '@/assets/images/web_ready_stock/pexels-pixabay-270408.jpg'
import stockPic2 from '@/assets/images/web_ready_stock/pexels-pixabay-270404.jpg'
import stockPic3 from '@/assets/images/web_ready_stock/pexels-neo-2653362.jpg'
import stockPic4 from '@/assets/images/web_ready_stock/pexels-lukas-574073.jpg'
import stockPic5 from '@/assets/images/web_ready_stock/pexels-lukas-574070.jpg'
import stockPic6 from '@/assets/images/web_ready_stock/pexels-luis-gomes-546819.jpg'
import stockPic7 from '@/assets/images/web_ready_stock/pexels-digital-buggu-374559.jpg'
import stockPic8 from '@/assets/images/web_ready_stock/pexels-danny-meneses-943096.jpg'

import characterPic1 from '@/assets/images/web_ready/BlkProgrammerArt2.png'
import characterPic1full from '@/assets/images/web_ready/BlkProgrammerArt2.jpg'
import characterPic2 from '@/assets/images/web_ready/BlkProgrammerArt3Trsp01.png'
import characterPic3 from '@/assets/images/web_ready/BlkProgrammerTrsp01.png'

import logoPic1blk from '@/assets/images/logo_v1/logo_1_blk.png'
import logoPic1wht from '@/assets/images/logo_v1/logo_1_wht.png'
import logoPic2blk from '@/assets/images/logo_v1/cm_logo_idea_2_blk.svg'
import logoPic2wht from '@/assets/images/logo_v1/cm_logo_idea_2_wht.svg'
import logoPic3blk from '@/assets/images/logo_v1/cm_logo_idea_4_blk.svg'
import logoPic3wht from '@/assets/images/logo_v1/cm_logo_idea_4_wht.svg'
import logoPic4blk from '@/assets/images/logo_v1/cm_logo_idea_5_blk.svg'
import logoPic4wht from '@/assets/images/logo_v1/cm_logo_idea_5_wht.svg'

import aiArtPic1 from '@/assets/images/web_ready/DesktopSetup1.jpg'
import aiArtPic2 from '@/assets/images/web_ready/DesktopSetup2.jpg'
import aiArtPic3 from '@/assets/images/web_ready/DesktopSetup3.jpg'
import aiArtPic4 from '@/assets/images/web_ready/DesktopSetup4_16-9.jpg'
import aiArtPic5 from '@/assets/images/web_ready/DesktopSetup4.jpg'
import aiArtPic6 from '@/assets/images/web_ready/DesktopSetup5_full.jpg'
import aiArtPic7 from '@/assets/images/web_ready/DesktopSetup5.jpg'

// import ModalWidget from "@/components/ModalWidget";
// import Dialog from "@/components/Dialog";

export default async function Home() {

  async function onClose () {
    "use server"
    console.log('modal has closed')
  }
  
  async function onOkay () {
    "use server"
    console.log('Okay was clicked')
  }

  return (
    <main className="p-16 overflow-hidden space-y-16">
      <section className="flex flex-col ">
        <div>
          <Image src={profilePic3} alt="stockPic1" height={200} />
          <h1>Elevate Your Online Presence</h1>
          <p>
            I simplify website development for ambitious entrepreneurs, so you
            can establish a high-converting online presence without technical
            overwhelm.
          </p>

          <div>
            <button>Book an appointment</button>
            {/* <button>Learn more</button> */}
          </div>
        </div>
      </section>

      <section className="flex flex-col md:flex-row items-center justify-around p-24 gap-12">
        <div>
          <h1>Do you need a website?</h1>
          <p>
            Take the hassle out of website development with my simplified
            approach. Whether you're a startup looking to establish your online
            presence or an established business aiming to revamp your website,
            we've got you covered. Let's discuss your vision and turn it into
            reality.
          </p>
            <Link href={'/?website-service-modal=true'}>Hire me!</Link>
            {/* <Dialog title="Website Development" onOkay={onOkay} onClose={onClose}>
              <p>Hire me!</p>
            </Dialog> */}
        </div>

        <div>
          <h1>Do you need a Dev?</h1>
          <p>
            Leave the technical complexities to us. Our team of experienced
            developers specializes in turning your ideas into fully functional
            websites. From custom features to seamless user experiences, I'll
            handle all aspects of development so you can focus on growing your
            business.
          </p>
          <Link href={'/?dev-service-modal=true'}>Hire me!</Link>
        </div>

        <div>
          <h1>Looking for advice?</h1>
          <p>
            Get expert advice and guidance on all things web development.
            Whether you're stuck on a technical issue, need recommendations on
            the latest trends, or want to optimize your existing website, I am
            here to help. Schedule a call with me today.
          </p>
          <Link href={'/?consultation-service-modal=true'}>Call me!</Link>
        </div>
      </section>

      <section className="flex flex-col ">
        <Image src={aiArtPic4} alt="stockPic1" height={200} />
        <div>
          <h4>Simplified Website Development: </h4>
          <p>
            Your Path to a High-Converting Online Presence: Are You an Ambitious
            Entrepreneur Ready to Make Your Mark Online? Navigating the world of
            website development can be overwhelming. Technical jargon, countless
            options, and the fear of making the wrong choice can stall your
            dreams. But what if you could simplify the process and create a
            high-converting online presence without the headache? That's where
            I come in!
          </p>
        </div>

        <div>
          <h4>I've got you covered!</h4>
          <Image src={characterPic1} alt="stockPic1" height={200} />
        </div>
      </section>

      <section className="flex flex-col ">
        <div>
          <p>
            Why Choose My Simplified Website Development Services? Tailored
            Approach: I take the time to understand your business goals,
            ensuring your website aligns perfectly with your vision.
          </p>
          
        </div>

        <div>
          <p>
            Expert Guidance: Say goodbye to technical overwhelm. My seasoned
            expertise handles all the complexities, letting you focus on what
            you do best – growing your business.
          </p>
        </div>

        <div>
          <p>
            Quality Assurance: I pride myself on delivering high-quality,
            professional websites that resonate with your target audience and
            drive results.
          </p>
        </div>

        <div>
          <p>
            My Offer to You: I simplify website development for ambitious
            entrepreneurs, so you can establish a high-converting online
            presence without technical overwhelm.
          </p>
        </div>
      </section>

      <section className="flex flex-col ">
        <div>
        <Image src={characterPic3} alt="stockPic1" height={200} />
          <p>
            What You'll Achieve High-Converting Website: A website designed to
            turn visitors into customers, boosting your sales and inquiries.
          </p>
        </div>

        <div>
        <Image src={stockPic3} alt="stockPic1" height={200} />
          <p>
            Full Ownership & Control: Gain complete control over your online
            platform, eliminating dependency on third-party services.
          </p>
        </div>

        <div>
        <Image src={stockPic4} alt="stockPic1" height={200} />
          <p>
            Time-Saving: Our streamlined process ensures efficient development,
            letting you focus on your business growth.
          </p>
        </div>

        <div>
          <Image src={stockPic2} alt="stockPic1" height={200} />
          <p>
            Peace of Mind: With us, you'll have a reliable partner handling your
            website development, ensuring smooth operations and support.
          </p>
        </div>
      </section>

      <section className="flex flex-col ">
        <h2>Portfolio</h2>


        <div className="w-full min-h-[300px] flex flex-col md:flex-row place-content-center gap-12">
          <div>
            <h4>Image goes here</h4>
            <h4>Website title/domain</h4>
            <p>Project Description</p>
          </div>

          <div>
            <h4>Image goes here</h4>
            <h4>Website title/domain</h4>
            <p>Project Description</p>
          </div>

          <div>
            <h4>Image goes here</h4>
            <h4>Website title/domain</h4>
            <p>Project Description</p>
          </div>
        </div>
      </section>

      <section className="flex flex-col ">
        <h4>Main call to action</h4>

        <h2>High-Converting Online Presence:</h2>

        <div>
          <p>
            Ready to Simplify Your Website Development? Don't let technical
            challenges hold you back. Embrace a simplified approach to website
            development and watch your online presence thrive!
          </p>
        </div>

        <Image src={stockPic1} alt="stockPic1" height={300} />

        <p>
          I simplify website development for ambitious entrepreneurs, so you can
          establish a high-converting online presence without technical
          overwhelm.
        </p>
      </section>

      <section className="flex flex-col ">
        <h4>Press the contact button</h4>
        <Link href={'/?contact-form-modal=true'}>Contact me!</Link>
      </section>

      <section>
        <h4>Contact Us Today to Get Started! [Contact Us] Testimonials</h4>

        <article className="flex flex-col ">
          <h4>Testimonials</h4>
          <div>
            <p>
              "Working with [Your Company Name] was a game-changer for my
              business. They made website development a breeze, and I couldn't
              be happier with the results!"
            </p>
            - <p>Jane Doe, Founder of ABC Company</p>
          </div>
          <div>
            <p>
              "Thanks to [Your Company Name], I now have a stunning website that
              truly represents my brand. The process was smooth, and the team
              was fantastic!"
            </p>
            - <p>John Smith, CEO of XYZ Ventures</p>
          </div>
        </article>

        <article className="flex flex-col ">
          <h2>FAQs</h2>
          <div>
            <p>
              What industries do you specialize in? I cater to various
              industries, including e-commerce, professional services,
              consulting, coaching, and more.
            </p>
          </div>

          <div>
            <p>
              How long does the development process take? Our timeline varies
              based on the project's complexity, but we always strive to deliver
              timely results without compromising quality.
            </p>
          </div>

          <div>
            <p>
              Do you offer ongoing support and maintenance? Absolutely! I offer
              ongoing support and maintenance services to ensure your website
              remains updated and secure.
            </p>
          </div>
        </article>
      </section>

      {/* <section>
        <h2>Blog Post/Content I have created around the web!</h2>

        <div className="w-full min-h-[300px] flex flex-col md:flex-row place-content-center gap-12">
          <div>
            <Image src={aiArtPic1} alt="stockPic1" />
            <h4>Post title</h4>
            <p>Post Description</p>
            <p>Link to post...</p>
          </div>

          <div>
          <Image src={aiArtPic2} alt="stockPic1" />
            <h4>Content title</h4>
            <p>Content Description</p>
            <p>Link to content...</p>
          </div>

          <div>
          <Image src={aiArtPic3} alt="stockPic1" />
            <h4>Post title</h4>
            <p>Project Description</p>
            <p>Link to post...</p>
          </div>
        </div>
      </section> */}
    </main>
  );
}
