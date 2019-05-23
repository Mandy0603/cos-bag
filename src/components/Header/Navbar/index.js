import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="global-navbar__main-nav">
      <ul className="global-navbar__list">
        {/* Blush */}
        <li className="global-navbar__item">
          <Link to="/shop/blush/all" class="global-navbar__link">
            Blush
          </Link>
          <div className="global-navbar__hidden">
            <ul className="global-navbar__hidden-list">
              <li className="global-navbar__hidden-item">
                <Link to="/shop/blush/powder" className="navbar-headers">
                  Powder
                </Link>
              </li>
              <li className="global-navbar__hidden-item">
                <Link to="/shop/blush/cream" className="navbar-headers">
                  Cream
                </Link>
              </li>
            </ul>
          </div>
        </li>

        {/* Bronzer */}
        <li className="global-navbar__item">
          <Link to="/shop/bronzer/all" class="global-navbar__link">
            Bronzer
          </Link>
          <div className="global-navbar__hidden">
            <ul className="global-navbar__hidden-list">
              <li className="global-navbar__hidden-item">
                <Link to="/shop/bronzer/powder" className="navbar-headers">
                  Powder
                </Link>
              </li>
            </ul>
          </div>
        </li>

        {/* Eyebrow */}
        <li className="global-navbar__item">
          <Link to="/shop/eyebrow/all" class="global-navbar__link">
            Eyebrow
          </Link>
          <div className="global-navbar__hidden">
            <ul className="global-navbar__hidden-list">
              <li className="global-navbar__hidden-item">
                <Link to="/shop/eyebrow/pencil" className="navbar-headers">
                  Pencil
                </Link>
              </li>
            </ul>
          </div>
        </li>

        {/* Eyeliner */}
        <li className="global-navbar__item">
          <Link to="/shop/eyeliner/all" class="global-navbar__link">
            Eyeliner
          </Link>
          <div className="global-navbar__hidden">
            <ul className="global-navbar__hidden-list">
              <li className="global-navbar__hidden-item">
                <Link to="/shop/eyeliner/liquid" className="navbar-headers">
                  Liquid
                </Link>
              </li>
              <li className="global-navbar__hidden-item">
                <Link to="/shop/eyeliner/pencil" className="navbar-headers">
                  Pencil
                </Link>
              </li>
              <li className="global-navbar__hidden-item">
                <Link to="/shop/eyeliner/gel" className="navbar-headers">
                  Gel
                </Link>
              </li>
              <li className="global-navbar__hidden-item">
                <Link to="/shop/eyeliner/cream" className="navbar-headers">
                  Cream
                </Link>
              </li>
            </ul>
          </div>
        </li>

        {/* Eyeshadow */}
        <li className="global-navbar__item">
          <Link to="/shop/eyeshadow/all" class="global-navbar__link">
            Eyeshadow
          </Link>
          <div className="global-navbar__hidden">
            <ul className="global-navbar__hidden-list">
              <li className="global-navbar__hidden-item">
                <Link to="/shop/eyeshadow/palette" className="navbar-headers">
                  Palette
                </Link>
              </li>
              <li className="global-navbar__hidden-item">
                <Link to="/shop/eyeshadow/pencil" className="navbar-headers">
                  Pencil
                </Link>
              </li>
              <li className="global-navbar__hidden-item">
                <Link to="/shop/eyeshadow/cream" className="navbar-headers">
                  Cream
                </Link>
              </li>
            </ul>
          </div>
        </li>

        {/* Foundation */}
        <li className="global-navbar__item">
          <Link to="/shop/foundation/all" class="global-navbar__link">
            Foundation
          </Link>
          <div className="global-navbar__hidden">
            <ul className="global-navbar__hidden-list">
              <li className="global-navbar__hidden-item">
                <Link to="/shop/foundation/liquid" className="navbar-headers">
                  Liquid
                </Link>
              </li>
              <li className="global-navbar__hidden-item">
                <Link to="/shop/foundation/contour" className="navbar-headers">
                  Contour
                </Link>
              </li>
              <li className="global-navbar__hidden-item">
                <Link to="/shop/foundation/Bbcc" className="navbar-headers">
                  Bb cc
                </Link>
              </li>
              <li className="global-navbar__hidden-item">
                <Link
                  to="/shop/foundation/concealer"
                  className="navbar-headers"
                >
                  Concealer
                </Link>
              </li>
              <li className="global-navbar__hidden-item">
                <Link to="/shop/foundation/cream" className="navbar-headers">
                  Cream
                </Link>
              </li>
              <li className="global-navbar__hidden-item">
                <Link to="/shop/foundation/mineral" className="navbar-headers">
                  Mineral
                </Link>
              </li>
              <li className="global-navbar__hidden-item">
                <Link to="/shop/foundation/powder" className="navbar-headers">
                  Powder
                </Link>
              </li>
              <li className="global-navbar__hidden-item">
                <Link
                  to="/shop/foundation/highlighter"
                  className="navbar-headers"
                >
                  Highlighter
                </Link>
              </li>
            </ul>
          </div>
        </li>

        {/* LipLiner */}
        <li className="global-navbar__item">
          <Link to="/shop/lipliner/all" class="global-navbar__link">
            Lip Liner
          </Link>
          <div className="global-navbar__hidden">
            <ul className="global-navbar__hidden-list">
              <li className="global-navbar__hidden-item">
                <Link to="/shop/lipliner/Pencil" className="navbar-headers">
                  Pencil
                </Link>
              </li>
            </ul>
          </div>
        </li>

        {/* Lipstick */}
        <li className="global-navbar__item">
          <Link to="/shop/lipstick/all" class="global-navbar__link">
            Lipstick
          </Link>
          <div className="global-navbar__hidden">
            <ul className="global-navbar__hidden-list">
              <li className="global-navbar__hidden-item">
                <Link to="/shop/lipstick/lipstick" className="navbar-headers">
                  Lipstick
                </Link>
              </li>
              <li className="global-navbar__hidden-item">
                <Link to="/shop/lipstick/lipgloss" className="navbar-headers">
                  Lip Gloss
                </Link>
              </li>
              <li className="global-navbar__hidden-item">
                <Link to="/shop/lipstick/liquid" className="navbar-headers">
                  Liquid
                </Link>
              </li>
              <li className="global-navbar__hidden-item">
                <Link to="/shop/lipstick/lipstain" className="navbar-headers">
                  Lip Stain
                </Link>
              </li>
            </ul>
          </div>
        </li>

        {/* Mascara */}
        <li className="global-navbar__item">
          <Link to="/shop/mascara/all" class="global-navbar__link">
            Mascara
          </Link>
        </li>

        {/* Nailpolish */}
        <li className="global-navbar__item">
          <Link to="/shop/nailpolish/all" class="global-navbar__link">
            Nail Polish
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
