import React from 'react';

function About() {
  return (
    <div>
        

        <div className="container my-4">
            <div className="row">
                <div className="col-12">
                    <h1>Sobre Nosotros</h1>

                    <div className="row mt-4" id="row-about">
                        {/* Placeholder content for About section */}
                        <div className="col-md-6">
                            <h3>Nuestra Historia</h3>
                            <p><strong>Placeholder:</strong> Aquí va la historia de Botillería Donde Tito...</p>
                            <p>Hollow Knight: Silksong is the sequel to Hollow Knight featuring Hornet as the playable character. It was developed by Team Cherry, and released on Windows, macOS, Linux, Nintendo Switch, Nintendo Switch 2, Xbox One, Xbox Series X/S, PlayStation 4, and PlayStation 5, on September 4th, 2025.</p>
                        </div>
                        
                        <div className="col-md-6">
                            <h3>Nuestra Misión</h3>
                            <p><strong>Placeholder:</strong> Aquí va la misión de la empresa...</p>
                            <p>Hollow Knight is a 2D side-scrolling action adventure video game in the Metroidvania style. It was developed by Team Cherry and first released for Microsoft Windows on the 24th of February, 2017 then macOS and Linux. It was ported in 2018 to the Nintendo Switch, Xbox One and PlayStation 4 by Shark Jump Studios.</p>
                        </div>
                    </div>
                    
                    <div className="row mt-4" id="row-about">
                        <div className="col-md-6">
                            <h3>Nuestros Valores</h3>
                            <p><strong>Placeholder:</strong> Aquí van los valores de la empresa...</p>
                            <ul>
                                <li>Calidad en nuestros productos</li>
                                <li>Atención al cliente</li>
                                <li>Compromiso con la comunidad</li>
                            </ul>
                        </div>
                        
                        <div className="col-md-6">
                            <h3>Ubicación</h3>
                            <p><strong>Placeholder:</strong> Aquí va información sobre la ubicación...</p>
                            <p>texto texto texto jose carrasco gaming</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <p className="p1"> Donde Tito ™</p>
        <footer className="footer">
            <p>Nombre del equipo &copy; 2025</p>
        </footer>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    </div>
  );
}

export default About;