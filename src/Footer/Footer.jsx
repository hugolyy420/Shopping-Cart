import { Link } from 'react-router-dom';
import gitHubIcon from './github-icon.svg';

const Footer = () => {
  return (
    <footer className="w-full flex flex-col items-center bg-slate-200">
      <div className="p-36 w-full max-w-screen-xl flex flex-col items-start md:items-center gap-12 justify-between lg:flex-row">
        <div className="flex flex-col gap-4 max-w-72 lg:mr-20">
          <h3 className="text-2xl font-bold">We Strive For The Best</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio temporibus delectus
            voluptate obcaecati nostrum unde eius sint, dolore inventore in amet a nam deleniti
            asperiores fugiat quisquam maxime harum velit.
          </p>
        </div>
        <div className="flex flex-col gap-10 md:flex-row max-w-96">
          <div className="flex flex-col gap-1">
            <h3 className="text-lg font-semibold">CUSTOMER SERVICE</h3>
            <Link className="hover:underline">FAQ</Link>
            <Link className="hover:underline">Contact Us</Link>
            <Link className="hover:underline">Brands</Link>
            <Link className="hover:underline">Track Order</Link>
            <Link className="hover:underline">Brands</Link>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-lg font-semibold">ABOUT US</h3>
            <Link className="hover:underline">Career</Link>
            <Link className="hover:underline">Press & Media</Link>
            <Link className="hover:underline">Promotions</Link>
            <Link className="hover:underline">Affiliate Program</Link>
            <Link className="hover:underline">Influencer Program</Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col bg-white w-full p-4 gap-2">
        <div className="flex gap-2 items-center">
          <a href="https://github.com/hugolyy420" target="_blank">
            <img src={gitHubIcon} alt="" className="size-6" />
          </a>
          <p>
            Developed by{' '}
            <a href="https://github.com/hugolyy420" target="_blank" className="hover:underline">
              Hugo Leung
            </a>
          </p>
        </div>
        <p>© Copyright {new Date().getFullYear()} Hugo Leung. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
