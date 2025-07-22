import React from 'react';
import { NavLink } from 'react-router-dom';

function Footer() {
  const linkStyle = {
    color: '#ccc',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
  };

  const activeLinkStyle = {
    color: '#fff',
  };

  return (
    <footer style={{
      backgroundColor: '#111',
      color: '#fff',
      padding: '40px 20px',
      textAlign: 'center',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: '30px',
      }}>
        <div style={{ flex: '1 1 250px', textAlign: 'left' }}>
          <h3 style={{ marginBottom: '15px' }}>NeuWear</h3>
          <p style={{ color: '#ccc' }}>
            Trendy & affordable fashion for everyone. Your style, your way.
          </p>
        </div>

        <div style={{ flex: '1 1 250px', textAlign: 'left' }}>
          <h4 style={{ marginBottom: '10px' }}>Quick Links</h4>
          <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2' }}>
            <li>
              <NavLink to="/collection" style={({ isActive }) => isActive ? activeLinkStyle : linkStyle}>
                Collection
              </NavLink>
            </li>
             <li>
              <NavLink to="/cart" style={({ isActive }) => isActive ? activeLinkStyle : linkStyle}>
                Cart
              </NavLink>
            </li>
            <li>
              <NavLink to="/orders" style={({ isActive }) => isActive ? activeLinkStyle : linkStyle}>
                Orders
              </NavLink>
            </li>
            <li>
              <NavLink to="/support" style={({ isActive }) => isActive ? activeLinkStyle : linkStyle}>
                Support
              </NavLink>
            </li>
          </ul>
        </div>

        <div style={{ flex: '1 1 250px', textAlign: 'left' }}>
          <h4 style={{ marginBottom: '10px' }}>Contact</h4>
          <p style={{ color: '#ccc' }}>📧 support@neuwear.com</p>
          <p style={{ color: '#ccc' }}>📞 +91 81570 77068</p>
          <p style={{ color: '#ccc' }}>📍  Kerala</p>
        </div>
      </div>

      <div style={{
        borderTop: '1px solid #333',
        marginTop: '30px',
        paddingTop: '20px',
        color: '#aaa',
        fontSize: '14px'
      }}>
        © {new Date().getFullYear()} NeuWear. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
