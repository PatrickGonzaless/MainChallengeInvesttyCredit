import styles from "./SecondArticle.module.css";
import homeImg from "./Images/HomeIcon.png";
import React, {useState} from "react";

const SecondArticle = () =>{

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    }

    return(
        
        <div className={styles.articleArea}>
            <div className={styles.category}>
                <div className={styles.homeImg}>
                    <img src={homeImg} alt="Imagem similar à uma casa para demonstrar um página inicial"/>
                </div>
                <div className={styles.textCategoryArea}>
                    <p>
                        <span>>  </span>Saude <span>  >  </span>Primeiros Socorros
                    </p>
                </div>
            </div>

            <div className={styles.title}>
                <div className={styles.textTitleArea}>
                    <h1>Picada de aranha: primeiros socorros e quando consultar um médico</h1>
                </div>
            </div>

            <div className={styles.contents}>
                <div className={styles.textContentsArea}>
                    <p>
                    Uma picada de aranha é algo que pode acontecer conosco a qualquer momento, ao limpar a casa ou sair para o campo. Mas há perigo? Continue lendo e diremos a você.
                    </p>
                </div>
            </div>

            <div className={styles.ImgArea}></div>

            <div className={styles.mainContent}>
                <div className={styles.textMainContentArea}>
                    <p className={styles.mainContentP_1}>Diante de um ataque inesperado e de uma picada de aranha, <strong>podemos reagir, primeiro com espanto e dor</strong> . Então, vamos nos perguntar se é perigoso, se devemos ir ao médico ou o que fazer.</p>
                    <p className={styles.mainContentP_2}>É importante esclarecer que nem todas as espécies de aracnídeos atacam humanos; alguns são tão pequenos que não podem penetrar na pele. No entanto, outros podem atacar e suas mordidas podem ser perigosas.</p>
                    <p>Neste artigo, aprenderemos sobre os aracnídeos com os quais devemos nos preocupar, como reconhecê-los, quais são os sintomas mais comuns e o que fazer em caso de picada de aranha.</p>
                </div>
            </div>

            <div className={styles.Caption}>

                <div className={styles.textCaptionArea}>
                    <h2>As aranhas são venenosas?</h2>
                </div>
     
            </div>

            <div className={styles.contentCaptionArea}>
                <div className={styles.textCaptionContentArea}>
                    <p className={styles.textCaptionContentAreaP}>A maioria dos aracnídeos não costuma ser perigosa ; eles nem mesmo mordem ou atacam. E muitos são pequenos, tão pequenos que suas presas não teriam força para penetrar na pele humana.</p>
                    <p>Mas quando isso acontece, geralmente ocorrem apenas pequenas lesões. Claro, também existem alguns casos de picadas de aranha que podem ser graves. Tudo depende da espécie.</p>
                </div>
            </div>

            <div className={styles.BlackWidowArea}>
                <div className={styles.BlackWidowTitle}>
                    <h2>Viúva Negra ( Latrodectus mactans )</h2>
                </div>
                <div className={styles.BlackWidowContents}>
                    <p className={styles.BlackWidowContentsP}>A viúva negra vive em diferentes partes do mundo: América do Norte, Europa, norte da Ásia. Ele mede cerca de 4 centímetros e <strong>pode ser facilmente identificado pela mancha vermelha em seu abdômen</strong> .</p>
                    <p>A incidência de picadas de viúva negra é de 3-4 casos por 100.000 pessoas. No entanto, a mortalidade é de 1%, segundo <a href="http://www.cimel.felsocem.net/index.php/CIMEL/article/view/490">estudos</a> .</p>
                </div>
            </div>

            <div className={styles.BrownRecluseArea}>
                <div className={styles.BrownRecluseTitle}>
                    <h2>Brown recluse ( Loxosceles reclusa )</h2>
                </div>
                <div className={styles.BrownRecluseContents}>
                    <p className={styles.BrownRecluseContentsP}>É conhecida como aranha marrom  por causa de sua cor. Está distribuído por quase todo o continente americano; também é identificado por uma mancha de cor mais clara na parte de trás. Mede cerca de uma polegada e é um dos mais perigosos.</p>
                </div>
            </div>

            <div className={styles.TarantulasArea}>
                <div className={styles.TarantulasTitle}>
                    <h2>Tarântulas ( Theraphosidae )</h2>
                </div>
                <div className={styles.TarantulasContents}>
                    <p className={styles.TarantulasContentsP}>As tarântulas são bastante difundidas em todo o mundo. Eles não têm um habitat específico, pois <strong>podem ser encontrados em áreas de selva ou deserto</strong> . Costumam esconder-se em buracos no chão, em troncos ou debaixo de pedras.</p>
                    <p className={styles.TarantulasContentsP2}>Eles são identificados por suas grandes dimensões (quase do tamanho de uma mão humana), bem como sua textura peluda e presas salientes. Apesar de sua aparência intimidadora, eles geralmente não são agressivos.</p>
                    <p>Da mesma forma, <strong>o veneno de diferentes espécies de tarântulas não é considerado perigoso</strong> . No entanto, a picada desta aranha pode ser dolorosa e causar reações alérgicas em pessoas sensíveis à sua toxina.</p>
                </div>
            </div>

            <div className={styles.BrazilianSpiderArea}>
                <div className={styles.BrazilianSpiderTitle}>
                    <h2>Aranha errante brasileira ( Phoneutria )</h2>
                </div>
                <div className={styles.BrazilianSpiderContents}>
                    <p>Apesar do nome, não se limita a um único país, mas vive em toda a América Central e do Sul. <strong>É tão grande quanto uma tarântula</strong>, mas muito mais rápido e agressivo. É considerado um dos mais venenosos do mundo.</p>
                </div>
            </div>

            <div className={styles.HoboSpiderArea}>
                <div className={styles.HoboSpiderTitle}>
                    <h2>Aranha Hobo ( Eratigena agrestis )</h2>
                </div>
                <div className={styles.HoboSpiderContents}>
                    <p>Está distribuído por todo o hemisfério norte, embora <strong>prefira climas levemente secos</strong> . É considerada uma espécie perigosa, não só porque a picada dessa aranha pode produzir reações graves, mas também porque é encontrada até mesmo em ambientes domésticos: aberturas de janelas, escondidas em móveis e utensílios na garagem, em armários.</p>
                </div>
            </div>

            <div className={styles.CamelSpiderArea}>
                <div className={styles.CamelSpiderTitle}>
                    <h2>Aranha de camelo ( Solifugae )</h2>
                </div>
                <div className={styles.CamelSpiderContents}>
                    <p className={styles.CamelSpiderContentsP}>Eles são nomeados tanto por sua cor arenosa quanto pelo fato <strong>de serem encontrados em climas desérticos</strong> . Embora eles também geralmente vivam em matagais e áreas arborizadas da América, Ásia e África.</p>
                    <p>Caracterizam-se por terem uma pinça na cabeça e por terem um corpo bastante alongado. Eles medem entre 5 e 8 centímetros, embora alguns possam ultrapassar os 15. Embora não sejam venenosos, com a pinça podem causar ferimentos graves.</p>
                </div>
            </div>

            <div className={styles.WolfSpiderArea}>
                <div className={styles.WolfSpiderTitle}>
                    <h2>Aranha Lobo (Lycosidae)</h2>
                </div>
                <div className={styles.WolfSpiderContents}>
                    <p className={styles.WolfSpiderContentsP}>Esta espécie vive praticamente em todo o mundo. Distingue-se por seus dois grandes olhos no meio do rosto.</p>
                    <p>Eles geralmente são do tamanho de tarântulas e parecem semelhantes. Podem ser encontrados em espaços domésticos: no jardim, nas ranhuras dos caixilhos das portas e janelas. Seu veneno não é perigoso para humanos, embora produza algumas reações alérgicas.</p>
                </div>
            </div>

            <div className={styles.JumpingSpiderArea}>
                <div className={styles.JumpingSpiderTitle}>
                    <h2>Aranha saltadora ou saltadora ( Saltacidae )</h2>
                </div>
                <div className={styles.JumpingSpiderContents}>
                    <p className={styles.JumpingSpiderContentsP}>Esta é uma das aranhas domésticas mais comuns. É pequeno (menos de 2 centímetros), mas seu corpo é robusto .</p>
                    <p>Possui pontos de luz na parte superior. Aparece de repente em plantas de casa ou no jardim. A picada da aranha saltadora não é venenosa, embora cause reações se você for alérgico.</p>
                </div>
            </div>

            <>   
                <div className={styles.ImgArea_2}></div>
                    <div className={styles.subtitles}>
                        <div className={styles.textSubtitlesArea}>
                            <p>As aranhas encontradas em espaços domésticos costumam atacar por acidente, quando se sentem ameaçadas pela presença humana.</p>
                        </div>
                    </div>
            </>

            <div className={styles.Symptoms}>

                <div className={styles.titleSymptomsArea}>
                    <h2>Sintomas de picadas de aranha</h2>
                </div>
     
            </div>

            <div className={styles.contentSymptomsArea}>
                <div className={styles.textSymptomsContentArea}>
                    <p className={styles.textSymptomsContenteAreaP}>Às vezes, a picada de aranha não é notada até um pouco mais tarde. Porém, quando isso acontece e eles conseguem penetrar na pele e inocular a toxina, diversas complicações de saúde podem ser geradas.</p>
                    <p>É claro que tais reações variam de acordo com a espécie de aracnídeo em questão . Entre os sintomas das picadas de aranha, alguns comuns e outros não tão frequentes são os seguintes:</p>
                </div>
            </div>

            <div className={styles.SymptomsListArea}>
                <div className={styles.SymptomsList}>
                        <li>Vermelhidão da pele com inflamação.</li>
                        <li>Sensação de coceira ou queimação de calor.</li>
                        <li>Urticária</li>
                        <li>Feridas visíveis com rasgos na pele.</li>
                        <li>Feridas visíveis com rasgos na pele.</li>
                        <li>Dor de cabeça.</li>
                        <li>Cãibras musculares.</li>
                        <li>Febre com calafrios.</li>
                        <li>Babando (da mordida do andarilho brasileiro.</li>
                        <li>Pele roxa ao redor da mordida (recluso marrom).</li>
                        <li>Supuração da ferida (errante).</li>
                        <li>Rigidez abdominal, cólicas, náuseas e vômitos (viúva negra).</li>
                        <li>Aceleração da frequência cardíaca (tarântula).</li>
                        <li>Glândulas do pescoço inchadas (aranha-lobo).</li>
                </div>
            </div>

            <div className={styles.FirstAid}>

                <div className={styles.titleFirstAidArea}>
                    <h2>Primeiros socorros em caso de picada de aranha</h2>
                </div>
     
            </div>

            <div className={styles.contentFirstAidArea}>
                <div className={styles.textFirstAidContentArea}>
                    <p>Quando se detecta que é uma das espécies não venenosas, várias medidas podem ser aplicadas após a picada da aranha. Entre eles, devem ser mencionados:</p>
                </div>
                
            </div>
            <div className={styles.FirstAidListArea}>
                <div className={styles.FirstAidList}>
                <li>Limpe e desinfete a área para evitar infecções bacterianas adicionais.</li>
                <li>Aplique gelo local sobre e ao redor da mordida por alguns minutos.</li>
                <li>Mantenha o membro picado elevado para reduzir a inflamação.</li>
                <li>Tome um anti- histamínico de venda livre, como a difenidramina.</li>
                </div>
            </div>

            <>   
                <div className={styles.ImgArea_3}></div>
                    <div className={styles.subtitles2}>
                        <div className={styles.textSubtitlesArea2}>
                            <p>As aranhas encontradas em espaços domésticos costumam atacar por acidente, quando se sentem ameaçadas pela presença humana.</p>
                        </div>
                    </div>
            </>

            <div className={styles.RisksAndComplications}>

                <div className={styles.titleRisksAndComplicationsArea}>
                    <h2>Riscos e complicações da picada de aranha</h2>
                </div>
     
            </div>

            <div className={styles.contentRisksAndComplicationsArea}>
                <div className={styles.textRisksAndComplicationsContentArea}>
                    <p className={styles.textRisksAndComplicationsContentAreaP}>Os sintomas da picada de aranha geralmente diminuem com o tempo , mesmo sem tratamento. No máximo, alguns ficam alguns dias ou uma semana. Mas procure atendimento médico se o desconforto não desaparecer ou se tornar mais intenso.</p>
                    <p className={styles.textRisksAndComplicationsContentAreaP2}>Seu médico pode prescrever antibióticos, corticosteróides ou analgésicos para infecções, espasmos musculares ou alívio da dor. Uma injeção de reforço também é recomendada para prevenir o tétano. Isso pode ser necessário em picadas de aranha de camelo.</p>
                    <p className={styles.textRisksAndComplicationsContentAreaP3}>Eventualmente, às vezes, a cirurgia pode ser realizada para remover o tecido. Uma das possíveis complicações de uma picada de aranha hobo é a necrose.</p>
                    <p className={styles.textRisksAndComplicationsContentAreaP4}>Isso também acontece com a mordida da Loxosceles reclusa , que causa lesões necróticas rapidamente progressivas que levam até a amputação do membro afetado. Também podem causar manifestações sistêmicas, como coagulopatias, hemólise intravascular e insuficiência renal.</p>
                    <p>As picadas de algumas espécies podem causar danos nos tecidos, embora muito raramente. Da mesma forma, as mortes não são frequentes; no entanto, casos de mortes atribuídas ao andarilho brasileiro têm sido relatados.</p>
                </div>
            </div>

            <div className={styles.WhenToGo}>
                <div className={styles.WhenToGoTitle}>
                    <h2>Quando ir aos seriços de emergência?</h2>
                </div>
                <div className={styles.WhenToGoContents}>
                    <p className={styles.WhenToGoContentsP}>Ligue ou vá aos serviços de emergência se a picada for de uma aranha suspeita e perigosa (como a viúva-negra ou o recluso marrom). Da mesma forma, <strong>se a pessoa apresentar algum dos seguintes sinais</strong>:</p>
                </div>
                <div className={styles.reasonsListArea}>
                    <div className={styles.reasonsList}>
                        <li>Anafilaxia ou choque anafilático .</li>
                        <li>Problemas respiratórios.</li>
                        <li>Dor intensa ou aguda.</li>
                        <li>Área de inchaço que se espalha com linhas vermelhas.</li>
                    </div>
                </div>
                <div className={styles.conclusionTextArea}>
                    <div className={styles.conclusionText}>
                        <p>Na dúvida, <strong>é sempre melhor ter uma avaliação profissional</strong> . Os médicos são treinados para distinguir uma picada da outra e aplicar a abordagem terapêutica correspondente.</p>
                    </div>
                </div>
            </div>

            <div className={styles.bibliographyArea}>
                <div className={styles.btnArea}>
                    <button 
                    className={styles.openBtn}
                    onClick={toggleModal}>
                        <span>+</span> Bibliografia
                    </button>

                    {modal && (
                        <div className={styles.modalContent}>

                        <div className={styles.bibli1}>
                            <li>Castro Rodríguez S, Espejo Cárdenas H, Vásquez Villegas G, Espinoza S. Síndrome neurotóxica secundária à picada de aranha: relato de caso. voz andina. 2009; 20: 52-55.</li>
                        </div>
                        
                         <div className={styles.bibli2}>
                            <li>De Roodt A, Gutiérrez L, Caro R, Lago N, Montenegro J. Obtenção de um antídoto contra o veneno de Phoneutria nigriventer ( arachnida; ctengae ). Arch Argent Pediatr. 2011; 109(1): 56-65.</li>
                        </div>

                        <div className={styles.bibli3}>
                            <li>De Roodt A, Salomón O, Lloveras S, Orduna T. Envenenamento por aranhas do gênero loxosceles . Medicina (Buenos Aires). 2002; 62: 83-94.</li>
                        </div>

                        <div className={styles.bibli4}>
                            <li>Espinosa A, Olarte M, Rodríguez C, Roncancio G. Caso suspeito de envenenamento por aranha reclusa ( Loxosceles ) e revisão da literatura. Lei Colombiana de Cuidados Intensivos. 2014; 14(4):295-307.</li>
                        </div>

                        <div className={styles.bibli5}>
                            <li>Haas A, Orduna T, Lloveras S, et al. Guia de prevenção, diagnóstico, tratamento e vigilância epidemiológica do envenenamento por aranhas. Buenos Aires: Ministério Nacional da Saúde/Programa Nacional de Prevenção e Controle de Intoxicações, 2012.</li>
                        </div>

                        <div className={styles.bibli6}>
                            <li>Schenone H. Diagnósticos feitos a 1.384 pacientes que consultaram por prováveis ​​picadas de aranha ou picadas de insetos. Bol. chili. Parasitol. mil novecentos e noventa e seis; 51(1/2): 20-7.</li>
                        </div>

                        <button
                        onClick={toggleModal}
                         className={styles.closeBtn}>X</button>

                        
                    </div>
                    )}

                    
                </div>    
            </div>

        </div>
    );
};

export default SecondArticle;