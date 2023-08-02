import './App.css'


export const HeaderComponent = () => {
    return (
        <nav>
        <h1>logo</h1>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Servicsr</li>
            <li>Content</li>
            <li>Profile</li>
        </ul>
        </nav>
    )
}

export const HeroComponent = () => {
    return(
        <div className='content'>
        <img src="./img1.avif" alt="" /> 
        <div>
        <h1>Welcome to my website</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ullam soluta iusto aliquam qui pariatur sint illo, ut vitae eius.</p>
        </div>
         </div>
    )
}