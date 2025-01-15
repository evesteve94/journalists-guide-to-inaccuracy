import { useState } from 'react';
import { generateImage } from '../services/api';

const ImagePage = () => {
    const [prompt, setPrompt] = useState('');
    const [imageURL, setImageURL] = useState('');
    const [isLoading, setIsLoading] = useState(false)
    const [revisedPrompt, setRevisedPrompt] = useState('')

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPrompt(event.target.value);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true)
        const data = await generateImage(prompt);
        setImageURL(data.imageURL);
        setRevisedPrompt(data.revisedPrompt)
        setIsLoading(false)
    };
  return (
    <main>
        <h1>Image Page</h1>
        <form className='img-form' onSubmit={handleSubmit}>
            <label htmlFor="prompt">Prompt:</label>
            <input placeholder='Write a prompt' type="text" id="prompt" name="prompt" value={prompt} onChange={handleChange} />
            <button className='submit-image-btn' type="submit">Generate Image</button>
        {isLoading && <h3>Loading...</h3>}
        {imageURL && <div><img className='result-image' src={imageURL} alt="Generated Image" /> <p style={{color: 'skyblue'}}>Original Prompt: {prompt}</p> <br /> <p style={{color: 'skyblue'}}>Revised Prompt: {revisedPrompt}</p></div>}
        </form>
    </main>
  )
}

export default ImagePage