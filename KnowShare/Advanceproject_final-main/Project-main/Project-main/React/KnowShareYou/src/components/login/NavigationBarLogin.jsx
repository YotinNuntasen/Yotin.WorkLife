import './NavigationBarLogin.css'
import '../../../bootstrap5/css/bootstrap.min.css'
import React from 'react'

function NavigationBarLogin() {
  return (
    <header className="p-3 text-center">
    <div className="containerBar">
        <div className="d-flex flex-wrap align-items-center justify-content-center shadow barLogin py-3">
            <a
                href="/"
                className="d-flex align-items-center mx-2 mb-2 mb-lg-0 text-white text-decoration-none "
            >
                <div className="text-dark fw-bold px-2 mb-0 text_logo">
                    KnowShare&nbsp;
                    <b className=" text-primary">Note</b>
                </div>
            </a>

            <ul className="nav col-12 col-lg-auto d-flex justify-content-center menu_page">
                <li>
                    <a
                        href="/"
                        className="nav-link px-3 py-0 text-secondary"
                    >
                        หน้าแรก
                    </a>
                </li>
                <li>
                    <a href="/sheet" className="nav-link px-3 py-0 text-secondary">
                        ชีทสรุป
                    </a>
                </li>
                <li>
                    <a href="/upload" className="nav-link px-3 py-0 text-secondary">
                        อัพโหลด
                    </a>
                </li>
                <li>
                    <a href="/contact" className="nav-link px-3 py-0 text-secondary">
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
                    className="searchLogin form-control-dark text-bg-dark "
                    placeholder="ค้นหา รายวิชา"
                    aria-label="Search"
                />
            </form>
        </div>
    </div>
</header>
  )
}

export default NavigationBarLogin