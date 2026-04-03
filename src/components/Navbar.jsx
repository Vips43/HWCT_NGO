import logo from '../assets/human-welfare-logo.png';
import { DONATION_LINK } from '../data/data';
import Button from './Button';

function Navbar() {
  return (
    <nav className="px-5 py-4 md:px-10 flex items-center justify-between bg-main-bg-900 border-b border-white/5 h-24">
      
      {/* Brand Logo */}
      <div className="shrink-0 hover:opacity-80 transition-opacity">
        <img src={logo} alt="Human Welfare Trust India" className="w-36 md:w-40" />
      </div>

      {/* Primary Call to Action */}
      <Button 
        bgcolor={'bg-primary-500 py-2.5 px-6 font-bold hover:scale-105 transition-transform'} 
        text={'Donate now'} link={DONATION_LINK}
      />
      
    </nav>
  );
}

export default Navbar;