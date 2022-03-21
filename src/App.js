import './scss/styles.scss';

function App() {
  return (
    <div className="container-main">
      <div className='container-card'>
        <div className='card'>
          <div className='card-img'>

            <div className='container-img'>
              <img className='img-qrcode' src='/image-qr-code.png' alt="qrcode" />
            </div>

            <div className='container-text'>
              <h1>Improve your front-end skills by building projects</h1>
              <p>
                Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
              </p>
            </div>

          </div>
        </div>
      </div>
      <div class="attribution">
        Challenge by <a rel="noreferrer" href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a rel="noreferrer" href="https://github.com/matcoco/qr-code-component">Github Matcoco</a>.
      </div>
    </div>
  );
}

export default App;
