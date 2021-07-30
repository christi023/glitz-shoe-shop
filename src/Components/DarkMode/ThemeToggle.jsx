//import { setTheme } from '../../data/ThemeData';
// style
import './Theme.css';

const ThemeToggle = () => {
  // change function
  const handleChange = () => {
    console.log('clicked');
  };

  return (
    <div className="container-toggle">
      <input type="checkbox" id="toggle" className="toggle--checkbox" onClick={handleChange} />

      <label htmlFor="toggle" className="toggle--label">
        <span className="toggle--label-background"></span>
      </label>
    </div>
  );
};

export default ThemeToggle;
