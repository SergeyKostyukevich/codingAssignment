
import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import App from '../App';
import Folder from './Folder';

const createRoutes = () => (

    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} >
                    <Route path="folders/:folderName" element={<Folder />} />
                </Route>
                <Route path="*" element={<>404: Page Not Found</>} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

export default createRoutes;