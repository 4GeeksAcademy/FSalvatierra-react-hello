import React from 'react';
import { ReactDOM } from 'react';


// como componente funcional
const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-black  " >
            <div class="container-fluid "  >
                <a class="navbar-brand link-light " href="#">Start Bootstrap</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
                        <li class="nav-item">
                            <a class="nav-link active link-light" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active link-light" aria-current="page" href="#">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active link-light" aria-current="page" href="#">Service</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active link-light" aria-current="page" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;