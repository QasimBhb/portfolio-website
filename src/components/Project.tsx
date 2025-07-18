import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/QasimBhb/rReAi" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/QasimBhb/rReAi" target="_blank" rel="noreferrer"><h2>rReAI-Reddit Chatbot</h2></a>
                <p>Designed and deployed an AI chatbot that answers user queries using knowledge from any subreddit, featuring semantic search and context-aware responses. Implemented with FAISS vector database for efficient similarity matching and Google Gemini API for natural conversation generation.</p>
            </div>
            <div className="project">
                <a href="https://github.com/QasimBhb/Huffman-Coding" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/QasimBhb/Huffman-Coding" target="_blank" rel="noreferrer"><h2>Huffman Coding</h2></a>
                <p>A Flask web app that demonstrates Huffman coding by encoding and decoding user-input text based on character frequency. It dynamically visualizes the compression process and shows original, encoded, and decoded outputs for educational insight.</p>
            </div>
            <div className="project">
                <a href="https://github.com/QasimBhb/Crime-Prediction-in-Chicago-using-Socioeconomic-and-Crime-Data-with-Spatiotemporal-Models" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/QasimBhb/Crime-Prediction-in-Chicago-using-Socioeconomic-and-Crime-Data-with-Spatiotemporal-Models" target="_blank" rel="noreferrer"><h2>Urban Crime Forecasting</h2></a>
                <p>Designed and deployed an AI chatbot that answers questions using subreddit knowledge, featuring Reddit API data ingestion, semantic search with FAISS vector database, and context-aware response generation via Google Gemini API.</p>
            </div>
            <div className="project">
                <a href="https://github.com/QasimBhb/A-basic-OS" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/QasimBhb/A-basic-OS" target="_blank" rel="noreferrer"><h2>A basic OS</h2></a>
                <p>A minimalistic operating system implemented in x86 assembly and C, designed as a learning project to understand low-level bootloader and kernel concepts..</p>
            </div>
            <div className="project">
                <a href="https://github.com/QasimBhb/Gemini-Session-Manager" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/QasimBhb/Gemini-Session-Manager" target="_blank" rel="noreferrer"><h2>Gemini Session Manager</h2></a>
                <p>A FastAPI service that securely processes user prompts through Google's Gemini AI, providing RESTful endpoints for interactions with persistent conversation logging in SQLite. This solution demonstrates secure API integration, input validation, and database management for AI-powered applications.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;