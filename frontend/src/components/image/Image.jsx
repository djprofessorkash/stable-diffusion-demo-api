import { useState } from "react";
import Error from "../error/Error";
// import { progress } from "mocha/lib/reporters";

const Image = () => {
    const [prompt, setPrompt] = useState("");
    const [seed, setSeed] = useState(42);
    const [guidanceScale, setGuidanceScale] = useState(20);
    const [numInfSteps, setNumInfSteps] = useState(50);
    const [error, setError] = useState("");
    const [img, setImg] = useState(null);
    const [promptImg, setPromptImg] = useState(null);
    const [loadingImg, setLoadingImg] = useState(false);

    const cleanFormData = () => {
        setPrompt("");
        setSeed(42);
        setGuidanceScale("");
        setNumInfSteps("");
        setLoadingImg(false);
        setError("");
    }

    const generateImage = async (event) => {
        const requestOptions = {
            method: "GET",
            headers: {"Content-Type": "application/json"},
        };

        setLoadingImg(true);

        const response = await fetch(`/api/generate/?prompt=${prompt}&num_inference_steps=${numInfSteps}&guidance_scale=${guidanceScale}&seed=${seed}`, requestOptions);

        if (!response.ok) {
            setError("Oops! Something went wrong generating the image.");
        } else {
            const imageBlob = await response.blob();
            const imageObjectUrl = URL.createObjectURL(imageBlob);
            setImg(imageObjectUrl);
            setPromptImg(prompt);
            cleanFormData();
        }
    }

    const saveGeneratedImage = (event) => {
        event.preventDefault();
        // post image to backend for saving
    }

    const submitForm = (event) => {
        event.preventDefault();
        setImg(null);
        setPromptImg(null);
        generateImage();
    }

    return (
        <>
        <div className="columns is-vcentered">
            <div className="column">
                <form className="box" onSubmit={submitForm}>
                    <h1 className="title has-text-centered is-4">Generate an Image with the Stable Diffusion algorithm!</h1>
                    
                    <div className="field">
                        <label className="label">PROMPT: Your Input Text.</label>
                        <div className="control">
                            <input 
                                type="text" 
                                placeholder="Enter your prompt to generate an image!" 
                                value={prompt} 
                                onChange={(event) => setPrompt(event.target.value)}
                                className="textarea"
                                required
                            />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">SEED: Defines Replicability.</label>
                        <div className="control">
                            <input 
                                type="text" 
                                placeholder="Enter an integer here to simulate a replicable state." 
                                value={seed} 
                                onChange={(event) => setSeed(event.target.value)} 
                                className="input"
                            />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">GUIDANCE SCALE: Adjusts Detail Orientation.</label>
                        <div className="control">
                            <input 
                                type="text" 
                                placeholder="Larger values adapt the model to render higher details at a higher cost." 
                                value={guidanceScale} 
                                onChange={(event) => setGuidanceScale(event.target.value)} 
                                className="input" 
                            />
                        </div>
                    </div>
                    
                    <div className="field">
                        <label className="label">INFERENCE STEPS: Adjusts Processing Time.</label>
                        <div className="control">
                            <input 
                                type="text" 
                                placeholder="Larger values demand higher processing but may result in better quality."
                                value={numInfSteps} 
                                onChange={(event) => setNumInfSteps(event.target.value)}
                                className="input" 
                            />
                        </div>
                    </div>
                        <Error message={error} />
                    <br />
                    <button className="button is-link" type="submit">Generate Image!</button>
                </form>
            </div>
            <div className="column">
            { img ? (
            <figure>
                <form className="box" onSubmit={saveGeneratedImage}>
                    <img src={img} alt="Generated by Stable Diffusion" />
                    <br />
                    <br />
                    <figcaption><b>PROMPT:</b><br /><i>"{promptImg}"</i></figcaption>
                    <br />
                    <button className="button is-success hidden" type="submit">Save Image!</button>
                </form>
            </figure> )
                : <></>
            }
            { loadingImg ? (
                <progress className="progress is-info is-primary" max="100">Loading</progress>
            ) : <></>
            }
            </div>
        </div>
        </>
    )
}

export default Image;