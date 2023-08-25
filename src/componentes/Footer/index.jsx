import "./Footer.css"

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
        <div className='redes'>
            <a href='https://www.facebook.com/julian.david.90475069/'>
                <img src="/img/facebook.png" alt='Facebook' />
            </a>
            <a href='https://github.com/zlDarth'>
                <img src="/img/twitter.png" alt='github' />
            </a>
            <a href='https://instagram.com/julian_andrade58?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D'>
                <img src="/img/instagram.png" alt='instagram' />
            </a>
        </div>
        <img src='/img/Logo.png' alt='org' />
        <strong>Desarrollado por Julian Andrade</strong>
    </footer>
}

export default Footer