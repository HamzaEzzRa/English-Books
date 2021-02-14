import './landing.css'
import landing1 from './images/landing_first.png'
import landing2 from './images/landing_second.svg'
import landing3 from './images/landing3.svg'
import landing4 from './images/landing4.svg'
function Landing() {
    return (
        <div>
            <div class="container">
                <div class="row">
                    <div class="col landing-row">
                        <h1>Trouvez un Pro pour vos travaux à domicile</h1> 
                        <p>Une gamme complète de prestations pour la maison et vos bureaux sont accessibles en quelques clics</p>
                        <button type="button" class="btn btn-primary get-started-button">Get Started</button>
                    </div>
                    <div class="col landing-row">
                        <img src={landing1} class="img-fluid" alt="Test test" />
                    </div>
                </div>
                <div class="row ">
                    <div class="col Cards">
                        <div class="card h-100"  style={{width: '18em'}}>
                            <img class="card-img-top" src={landing2} alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Les meilleurs pros</h5>
                                <p class="card-text">Le réseau qui vous permet de trouver les meilleurs professionnels à proximité de chez vous.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div class="col Cards">
                        <div class="card h-100"  style={{width: '18em'}} >
                            <img class="card-img-top" src={landing3}  alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Peinture en bâtiment</h5>
                                <p class="card-text">La peinture d’une maison tient une place essentielle en matière de décoration. Une nouvelle peinture nécessite la maîtrise des techniques de pose de peinture pour un rendu parfait.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col landing-row">
                        <h2>Ne remettez plus vos bricolages à plus tard</h2> 
                        <p>une étagère à fixer, une charnière à réparer ou un ensemble de petites reprises de toutes natures à effectuer. Il est difficile d’y consacrer le temps nécessaire lorsque l’on est pris dans le rythme d’une vie active bien remplie.</p>
                        <button type="button" class="btn btn-primary get-started-button">Decouvrir</button>
                    </div>
                    <div class="col landing-row">
                        <img src={landing4} class="img-fluid" alt="Test test" />
                    </div>
                </div>

                <div class="row">
                    <div class="col-sm-2 landing-row">
                        
                    </div>
                    <div class="col landing-row">
                        <h3>Plomberie, Électricité, Climatisation, Maçonnerie, Carrelage, Marbre, Électroménager, Plâtre,…</h3>
                        <p>Des Pros indépendants qualifiés et formés par nos partenaires. Satisfait ou Refait.</p>
                        <button type="button" class="btn btn-primary get-started-button">S'inscrire</button>
                    </div>
                </div>

            </div>
            
            <div class="Footer">
                <hr />
                <div class="row">
                    <div class="col-sm-5 ">
                        <b>TitSuite</b>
                    </div>
                    <div class="col-sm-2 ">
                        <b>Navigation</b>
                    </div>
                    <div class="col-sm-2 ">
                        <b>Legal</b>
                    </div>
                    <div class="col-sm-3 ">
                        <b>Contact Us</b>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-5 ">
                    <br/>
                    Une gamme complète de prestations pour la maison et vos bureaux sont accessibles en quelques clics <br/><br/><br/>
                    © 2021 Titsuite Inc. All rights reserved.
                    </div>
                    <div class="col-sm-2 ">
                    <br/>Home <br/><br/> Careers <br/><br/> Services <br/><br/> Platform
                    </div>
                    <div class="col-sm-2 ">
                    <br/>Term <br/><br/> Privacy <br/><br/> S.A.V <br/><br/> Copyright
                    </div>
                    <div class="col-sm-3 ">
                    <br/>24/7 chat support <br/><br/> contact@titsuite.com<br/><br/>+212670470789
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;