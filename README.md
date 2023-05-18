<h3 align="center">FULL-STACK PYTHON + REACT PROJECT:</h3>
<h1 align="center">✍🏽 <b>Stable Diffusion API</b> 🎨</h1>
<h4 align="center">A demo app for promoting and making use of the Stable Diffusion algorithm for AI-driven image generation.</h1>

## Introduction

Artificial intelligence and bleeding-edge machine learning has become an integral part of the software engineering landscape in the past few years. 

Using powerful state-of-the-art open-source algorithms, we as software engineers and developers can integrate predictive technologies within our applications and services to bring unique and meaningful experiences to our users. 

## Summary

This project is a full-stack minimalist web app with the goal of integrating the Stable Diffusion model within a lightweight Python backend and a simple React frontend to allow users to produce AI-generated images.

## Languages and Dependencies

* **[JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)**
  * **[React](https://react.dev/)**
* **[Python]()**
  * **[FastAPI](https://fastapi.tiangolo.com/lo/)**
* **[HuggingFace](https://huggingface.co/)**
  * **[Stable Diffusion](https://github.com/Stability-AI/stablediffusion)**

## Project Directory Hierarchy

Upon successful setup (see **Setup Instructions**), you should see the following project directory hierarchy.

```
├── .gitignore
├── README.md
├── backend
│   ├──  .env
│   ├──  main.py
│   ├──  requirements.txt
│   ├──  run_uvicorn.py
│   ├──  schemas.py
│   ├──  services.py
│   ├── [VIRTUAL_ENVIRONMENT_NAME]
│   │    └── ...
│   │
│   └──  __pycache__
│        └── ...
│
├── frontend
    ├──  .gitignore
    ├──  package-lock.json
    ├──  package.json
    ├──  README.md
    ├──  node_modules
    │    └── ...
    │  
    └──  public 
    │    └── ...
    │  
    └──  src
         ├── App.css
         ├── App.jsx
         ├── index.css
         ├── index.js
         └── components
              ├── index.js
              ├── error
              │    ├── error.css
              │    └── Error.jsx
              │
              ├── header
              │    ├── header.css
              │    └── Header.jsx
              │
              └── image
                   ├── image.css
                   └── Image.jsx
```

Primary Python logic for FastAPI routing, Stable Diffusion executions, and helper services are defined in `backend`, while React component setup and integration as well as web modeling and styling are defined in `frontend`. 

## Setup Instructions

To launch this project on your own local development environment, please go through the following instructions carefully:

1. Clone the repository to your local environment.
    - If you're working with HTTPS, use `git clone https://github.com/djprofessorkash/stable-diffusion-demo-api.git`. 
    - If you're working with SSH, use `git clone git@github.com/djprofessorkash/stable-diffusion-demo-api.git`.
2. Navigate to your `backend` subdirectory from the project root directory. 
3. Create an environment variable file called `.env` – this will be needed to configure our API token for using the Stable Diffusion model.
4. ***Immediately*** add this `.env` file to your `.gitignore` file and commit that change upstream; this environment variable file is sensitive and should _never_ be committed to a public repository (or a private one, for that matter).
    - If you do not have a `.gitignore` file already created in your project root, go ahead and create a new one before adding your `.env` file to it. 
5. Navigate to **[Hugging Face's main page](https://huggingface.co)** and set up a free account to enable access to their API authentication tokens.
6. Once your account has been created, navigate to **[Hugging Face's Access Tokens page](https://huggingface.co/settings/tokens)** and define a new API token for personal access.
    - It's recommended to maintain your token name across the API interface as well as relevant calls to its endpoint; whatever you name your API token on the Hugging Face page, try to reuse that name as reference throughout your local project too. 
7. Once you've created your token, open your `.env` file and add your access token on a single line, such as `HF_ACCESS_TOKEN="your_access_token_goes_here"`.
8. Create and set up a virtual environment built off of the `backend/requirements.txt` file that can manage project dependencies without bloating your global configuration.
    - First, call `python3 -m venv [VIRTUAL_ENVIRONMENT_NAME]` to produce a virtual environment subfolder within `backend` that will track Python dependencies needed for the project – be sure to rename the final argument/flag to an environment name of your choice. 
    - Active your virtual environment using the command `[VIRTUAL_ENVIRONMENT_NAME]/bin/activate`. 
    - With your environment active, set up your virtual dependencies by running `pip3 install -r requirements.txt`.
9. Your backend is now ready to be activated. Activate it by running `uvicorn main:app --port 8885`. 
10. With your backend now active, navigate to your frontend folder by traveling back to your root directory and back down to the relevant subdirectory.
11. Create and set up a local environment built off of the `frontend/package.json` and `frontend/package-lock.json` files that can manage project dependencies for React development.
    - First, call `npm install` to install all referenced dependencies in our packaged files.
    - Next, run `npm start` to load the web project on your local machine. 
12. Play around with the web app and have fun! 

## Acknowledgements

Thanks to **[Laura Uzcategui](https://github.com/laurauzcategui)** for her original project demo available on GitHub for public access. 

## Credits

The **Stable Diffusion Demo API** project is created and maintained by **Aakash "Kash" Sudhakar** (2023).