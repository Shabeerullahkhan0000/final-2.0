import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-subtle py-16 px-8 md:px-16 lg:px-24 text-text-secondary text-sm leading-relaxed">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-12">
          
          {/* Column 1 — Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4 text-lg font-semibold text-primary">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 .68 0 1.36-.09 2-.26V13c0-1.38 .47-2.56 1.25-3.5 .75-.94 1.75-1.5 2.75-1.5s2 .56 2.75 1.5c .78 .94 1.25 2.12 1.25 3.5v9.74c-.64 .17-1.32 .26-2 .26 -5.16-1.26 -9-5.45 -9-11V7z"/>
              </svg>
              CAD Viewer Pro
            </div>
            <p className="text-secondary mb-6 max-w-xs leading-relaxed">
              Professional CAD viewing in your browser
            </p>
            <p className="text-secondary">
              © 2025 CAD Viewer Pro. All rights reserved.
            </p>
          </div>

          {/* Column 2 — Product */}
          <div>
            <h3 className="panel-header mb-6">Product</h3>
            <ul className="space-y-2">
              <li><Link to="/features" className="hover:text-primary transition-base block">Features</Link></li>
              <li><Link to="/pricing" className="hover:text-primary transition-base block">Pricing</Link></li>
              <li><Link to="/download" className="hover:text-primary transition-base block">Download</Link></li>
              <li><a href="#" className="hover:text-primary transition-base block">Changelog</a></li>
            </ul>
          </div>

          {/* Column 3 — Tools */}
          <div>
            <h3 className="panel-header mb-6">Tools</h3>
            <ul className="space-y-2">
              <li><Link to="/dwg-viewer" className="hover:text-primary transition-base block">DWG Viewer</Link></li>
              <li><Link to="/dxf-viewer" className="hover:text-primary transition-base block">DXF Viewer</Link></li>
              <li><Link to="/cad-measurement-tool" className="hover:text-primary transition-base block">CAD Measurement</Link></li>
              <li><Link to="/online-cad-viewer" className="hover:text-primary transition-base block">Online CAD Viewer</Link></li>
            </ul>
          </div>

          {/* Column 4 — Company */}
          <div>
            <h3 className="panel-header mb-6">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-primary transition-base block">About</Link></li>
              <li><Link to="/blog" className="hover:text-primary transition-base block">Blog</Link></li>
              <li><Link to="/faq" className="hover:text-primary transition-base block">FAQ</Link></li>
              <li><Link to="/privacy" className="hover:text-primary transition-base block">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-primary transition-base block">Terms</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-subtle pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-tertiary">
          <span>Made for engineers</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-secondary transition-base">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.482 2.048-2.578-.9.534-1.897.875-2.958 1.073-.855-.574-2.075-.589-2.898-.283-.82.442-1.51 1.048-2.1 1.65-.592.583-1.425.973-2.313.973-.897 0-1.592-.384-2.15-.859-.558-.475-1.067-.917-1.528-1.324-.461-.407-.886-.592-1.272-.592-.14 0-.278.015-.415.045 .738-1.17 1.582-1.832 2.505-1.96-.925.541-1.786 1.225-2.588 2.057-.882.972-1.628 2.145-2.24 3.51-.612 1.365-.92 2.844-.92 4.451 0 6.952 5.424 12.141 12.312 12.141 -1.356 .416 -2.58 .74 -3.681 .74 -.89 0 -1.748-.092-2.563-.27 .172.99.65 1.86 1.344 2.566 .75 .74 1.683 1.29 2.73 1.64 1.047 .35 2.174 .53 3.37 .53 4.076 0 7.492-3.07 7.914-7.027.673-3.865 0-6.982 0-7.943 0-.13-.007-.259-.02-.388z"/>
              </svg>
            </a>
            <a href="#" className="hover:text-secondary transition-base">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138 .92-2.063 2.063-2.063 1.14 0 2.064 .925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm13.11 12.019h-3.554V9h3.554v10.452zM10.625 9h3.413v10.452H10.625V9z"/>
              </svg>
            </a>
            <a href="#" className="hover:text-secondary transition-base">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12s5.37 12 12 12 12-5.373 12-12-5.37-12-12-12zm3 18.667c-.116.946-.83 1.636-1.754 1.636H8.754c-.924 0-1.638-.69-1.754-1.636V9.333c0-.946 .73-1.667 1.754-1.667h4.492c1.024 0 1.754.721 1.754 1.667v9.634zm-3-5.334c.693 0 1.25-.557 1.25-1.25s-.557-1.25-1.25-1.25-.25 .557-1.25 1.25 .557 1.25 1.25 1.25zM10 14.667c.693 0 1.25-.557 1.25-1.25 0-.693-.557-1.25-1.25-1.25s-1.25 .557-1.25 1.25 .557 1.25 1.25 1.25z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

