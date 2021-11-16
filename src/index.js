import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Kawaii from './Kawaii';
import Poem from './Poem';
import Person from './Person';
import ArtApi from './ArtApi';

import "./styles.css";





const rootElement = document.getElementById("root");
ReactDOM.render(<ArtApi />, rootElement);
