import React, { useState, useRef, useEffect } from "react";
import './NavigationBars.css'
import '../../../bootstrap5/css/bootstrap.min.css'
import NavigationBars from "./NavigationBars";


function NavigationBarLogout() {
  const [colorPageH, setColorPageH] = useState('nav-link px-3 text-secondary');
  const [colorPageS, setColorPageS] = useState('nav-link px-3 text-secondary');
  const [colorPageU, setColorPageU] = useState('nav-link px-3 text-secondary');
  const [colorPageA, setColorPageA] = useState('nav-link px-3 text-secondary');
  const namePage = ''
  
  const setColor = () => {
    if (namePage == "home") {
      setColorPageH('nav-link px-3  fw-bold text-primary');
      setColorPageS('nav-link px-3 text-secondary');
      setColorPageU('nav-link px-3 text-secondary');
      setColorPageA('nav-link px-3 text-secondary');
    } else if (namePage == "sheet") {
      setColorPageS('nav-link px-3 fw-bold text-primary');
      setColorPageH('nav-link px-3 text-secondary');
      setColorPageU('nav-link px-3 text-secondary');
      setColorPageA('nav-link px-3 text-secondary');
    } else if (namePage == "upload") {
      setColorPageU('nav-link px-3  fw-bold text-primary');
      setColorPageS('nav-link px-3 text-secondary');
      setColorPageH('nav-link px-3 text-secondary');
      setColorPageA('nav-link px-3 text-secondary');
    } else if (namePage == "contact") {
      setColorPageA('nav-link px-3  fw-bold text-primary');
      setColorPageS('nav-link px-3 text-secondary');
      setColorPageU('nav-link px-3 text-secondary');
      setColorPageH('nav-link px-3 text-secondary');
    }
  }
  // setColor.call();
  // setColor.call();
  // setColor.call();
  const [searchTerm, setSearchTerm] = useState("");
  const listSubjects = [
    { id: 1, name: "CALCULUS", link: "/sheet/calculus", className: "text-calculus" },
    { id: 2, name: "PHYSIC", link: "/sheet/physic", className: "title-physic" },
    { id: 3, name: "ENGLISH", link: "/sheet/english", className: "title-english" },
    { id: 4, name: "COMPUTER", link: "/sheet/computer", className: "title-computer" },
  ];
  const [filteredItems, setFilteredItems] = useState([]);
  const searchInputRef = useRef(null);
  useEffect(() => {
    document.addEventListener("click", handleOutsideClick, false);
    return () => {
      document.removeEventListener("click", handleOutsideClick, false);
    };
  }, []);
  const handleOutsideClick = (event) => {
    if (!searchInputRef.current.contains(event.target)) {
      setFilteredItems([]);
    }
  };

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);

    const filtered = listSubjects.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(filtered);
  };


  const logout = () => {
    localStorage.clear();
    window.open('/', '_self');
  }
  window.onload = setColor;
  return (
    <dir>


      <header className="p-3 text-center">

        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center shadow bar m-2 py-2 ">
            <a
              href="/"
              className="d-flex align-items-center mx-2 mb-2 mb-lg-0 text-white text-decoration-none "
            >
              <div className="text-dark fw-bold px-2 mb-0 text_logo clo fs-2">
                KnowShare&nbsp;
                <b className=" text-primary">Note</b>
              </div>
            </a>

            <ul className="nav col-12 col-lg-auto justify-content-center mb-md-0   menu_page">
              <li>
                <a
                  href="/"
                  className={colorPageH}
                >
                  หน้าแรก
                </a>
              </li>
              <li>
                <a href="/sheet" className={colorPageS}>
                  ชีทสรุป
                </a>
              </li>
              <li>
                <a href='/upload' className={colorPageU}>
                  อัพโหลด
                </a>
              </li>
              <li>
                <a href="/contact" className={colorPageA}>
                  ติดต่อเรา
                </a>
              </li>
            </ul>

            <form
              className="px-3"
              role="search"
            >
              <input
                type="search"
                className="form-control form-control-dark text-bg-dark search col"
                placeholder="ค้นหา รายวิชา"
                aria-label="Search"
                value={searchTerm}
                onChange={handleSearch}
                ref={searchInputRef}
              />
              {filteredItems.length > 0 ? (
                <ul>
                  {filteredItems.map((item) => (
                    <li className='nav-link my-1' key={item.id}>
                      <a href={item.link} className={item.className}>{item.name} </a>
                    </li>
                  ))}
                </ul>
              ) : null}
            </form>
            <a href="/profile" style={{ textDecoration: `none` }} className=' text-black '>
              <span class="material-symbols-outlined icon-profile">
                manage_accounts
              </span>
            </a>
            <button className="button-18 fs-6 my-2 d-flex align-items-center text-center justify-content-center" role="button" onClick={logout}>
              ออกจากระบบ &nbsp;
              <span class="material-symbols-outlined fs-4">
                logout
              </span>
            </button>
          </div>
        </div>
      </header>

    </dir>

  )
}

export default NavigationBarLogout