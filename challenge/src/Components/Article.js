import styles from "./Article.module.css"
import homeImg from "./Images/HomeIcon.png"
import React, {useState} from "react";

const Article = () => {

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    }

    return(
        <>
        <div className={styles.articleArea}>

            <div className={styles.category}>
                <div className={styles.homeImg}>
                    <img src={homeImg} alt="Imagem similar à uma casa para demonstrar um página inicial"/>
                </div>

                <div className={styles.textCategoryArea}>
                    <p>
                        <span>>  </span>Remédios Naturais <span>  >  </span>Cuidados do corpo
                    </p>
                </div>
            </div>

            <div className={styles.title}>
                <div className={styles.textTitleArea}>
                    <h1>4 formas de preparar banhos para suavizar os pés:</h1>
                </div>
            </div>

            <div className={styles.contents}>
                <div className={styles.textContentsArea}>
                    <p>
                    Pés macios e bonitos são sinônimos de beleza e bem-estar. No entanto, por descuido,
                    eles podem parecer secos e rachados. Propomos 5 formas de fazer banhos para suavizar a pele.
                    </p>
                </div>
            </div>

            <div className={styles.ImgArea}></div>
            
            <div className={styles.mainContent}>
                <div className={styles.textMainContentArea}>
                    <p className={styles.mainContentP_1}>Mudanças repentinas no clima, flutuações hormonais e falta de cuidado podem se refletir no estado dos pés. <strong>Esses fatores afetam o ressecamento da pele, além de outros problemas como o aparecimento de fungos, calosidades e rachaduras.</strong> Quer aprender a preparar banhos para amaciar os pés?</p>
                    <p>Enquanto uma pedicure regular pode ajudar a manter seus pés bonitos e suaves, a preparação regular do banho pode ser muito benéfica. Não só permite a eliminação das células mortas, como também <strong>favorece o relaxamento dos músculos quando cansados. Atreva-se a experimentá-los!</strong></p>
                </div>
            </div>

            <div className={styles.Caption}>

                <div className={styles.textCaptionArea}>
                    <h2>4 banhos para suavizar os pés que você vai gostar de experimentar</h2>
                </div>
     
            </div>

            <div className={styles.contentCaptionArea}>
                <div className={styles.textCaptionContentArea}>
                    <p>Aproveitando as propriedades de uma série de ingredientes de origem natural, podemos preparar banhos para suavizar e embelezar os pés . Sua aplicação é ideal para aliviá-los da dor de um dia muito pesado , ou para manter a pele livre de células mortas.</p>
                </div>
            </div>

            <div className={styles.bathStepsTitle1}>
                <div className={styles.TextBathStepsTitleArea1}>
                    <h3>1. Banhos para amaciar os pés com vinagre e óleo de amêndoas</h3>
                </div>
            </div>

            <>   
                <div className={styles.ImgArea_2}></div>
                    <div className={styles.subtitles}>
                        <div className={styles.textSubtitlesArea}>
                            <p>Ao utilizar óleo de amêndoa e vinagre nos banhos de pés, pode desfrutar de uma terapia relaxante e revitalizante.</p>
                        </div>
                    </div>
            </>

            <div className={styles.bathStepsContent}>
                <div className={styles.textBathStepsContentArea}>
                    <p className={styles.textBathStepsContentAreaP_1}>Adicionar um pouco de vinagre de maçã e óleo de amêndoa à água do banho de pés pode ter benefícios importantes. Em primeiro lugar, o vinagre ajuda a inibir o crescimento de fungos e bactérias, prevenindo infecções. </p>
                    <p className={styles.textBathStepsContentAreaP_2}>Por outro lado, o óleo de amêndoa tem um efeito hidratante que ajuda a combater a secura nesta zona, segundo este <a href="https://pubmed.ncbi.nlm.nih.gov/20129403/">estudo</a> realizado pelo Salisbury General Hospital (Reino Unido). Além disso, juntos, ambos ajudam a soltar as células mortas para deixar os pés com uma aparência renovada.</p>
                </div>
            </div>

            <div className={styles.revenue1}>
                <div className={styles.revenueArea1}>

                    <div className={styles.ingredients1}>
                        <div className={styles.ingredientsTitle1}>
                            <h3>Ingredientes</h3>
                        </div>
                            <div className={styles.ingredientsStepArea1}>
                                    <li>1/2 xícara de vinagre de maçã (125ml)</li>
                                    <li>4 xícaras de água quente (1 litro)</li>
                                    <li>2 colheres de sopa de óleo de amêndoas (30ml)</li>
                            </div>
                    </div>

                    <div className={styles.preparation1}>
                        <div className={styles.preparationTitle1}>
                            <h3>Preparação</h3>
                        </div>
                        <div className={styles.preparationStepArea1}>
                            <li>Para começar, dilua o vinagre de maçã no litro de água quente.</li>
                            <li>Mais tarde, adicione o óleo de amêndoa e misture.</li>
                        </div>
                    </div>

                    <div className={styles.modeOfUse1}>
                        <div className={styles.modeOfUseTitle1}>
                            <h3>Modo de uso</h3>
                        </div>
                            <div className={styles.modeOfUseStepsArea1}>
                                <li>Mergulhe os pés na preparação, por 15 ou 20 minutos.</li>
                                <li>Repita seu uso 2 vezes por semana.</li>
                            </div>
                    </div>
                    
                </div>
            </div>

            <div className={styles.bathStepsTitle2}>
                <div className={styles.TextBathStepsTitleArea2}>
                    <h3>2. Banho com sal marinho, bicarbonato de sódio e óleo de lavanda</h3>
                </div>
            </div>

            <div className={styles.bathStepsContent2}>
                <div className={styles.textBathStepsContentArea2}>
                    <p className={styles.textBathStepsContentAreaP2_1}>Além de suavizar a pele dos pés, este banho é muito relaxante e revitalizante. <strong>A sua aplicação 2 ou 3 vezes por semana reduz a sensação de tensão nos pés e</strong> <span>melhora a circulação</span> .  Isso se deve à ação anti-inflamatória da lavanda, segundo este <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5878871/">estudo</a> realizado pela Universidade Estadual de Maringá (Brasil).</p>
                    <p className={styles.textBathStepsContentAreaP2_2}>Além disso, remove as células mortas e ajuda a manter a pele limpa e livre de asperezas.</p>
                </div>
            </div>

            <div className={styles.revenue2}>
                <div className={styles.revenueArea2}>

                    <div className={styles.ingredients2}>
                        <div className={styles.ingredientsTitle2}>
                            <h3>Ingredientes</h3>
                        </div>
                            <div className={styles.ingredientsStepArea2}>
                                    <li>4 colheres de sopa de sal marinho (60 g)</li>
                                    <li>6 colheres de sopa de bicarbonato de sódio (90 g)</li>
                                    <li>10 gotas de óleo essencial de lavanda</li>
                                    <li>6 xícaras de água (litro e meio)</li>
                            </div>
                    </div>

                    <div className={styles.preparation2}>
                        <div className={styles.preparationTitle2}>
                            <h3>Preparação</h3>
                        </div>
                        <div className={styles.preparationStepArea2}>
                            <li>Primeiro, aqueça as xícaras de água.</li>
                            <li>Quando estiverem em temperatura suportável para a pele, despeje em uma bacia e acrescente o sal, o bicarbonato e o óleo.</li>
                        </div>
                    </div>

                    <div className={styles.modeOfUse2}>
                        <div className={styles.modeOfUseTitle2}>
                            <h3>Modo de uso</h3>
                        </div>
                            <div className={styles.modeOfUseStepsArea2}>
                                <li>Mergulhe os pés no líquido por 20 minutos.</li>
                            </div>
                    </div>
                    
                </div>
            </div>

            <div className={styles.bathStepsTitle3}>
                <div className={styles.TextBathStepsTitleArea3}>
                    <h3>3. Banhos para amaciar os pés com argila</h3>
                </div>
            </div>

            <>   
                <div className={styles.ImgArea_3}></div>
                    <div className={styles.subtitles2}>
                        <div className={styles.textSubtitlesArea2}>
                            <p>Ao utilizar óleo de amêndoa e vinagre nos banhos de pés, pode desfrutar de uma terapia relaxante e revitalizante.</p>
                        </div>
                    </div>
            </>

            <div className={styles.bathStepsContent3}>
                <div className={styles.textBathStepsContentArea2}>
                    <p className={styles.textBathStepsContentAreaP3_1}>A argila tem sido utilizada em cosméticos naturais, segundo este <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5632318/">estudo</a> da Universidade de Shiraz (Irã), devido às suas propriedades para melhorar a saúde da pele. Neste caso específico, ajuda a eliminar os calos e reduz a presença de células mortas. Além disso, seus nutrientes penetram na pele e a deixam com aparência saudável. </p>
                </div>
            </div>

            <div className={styles.revenue3}>
                <div className={styles.revenueArea3}>

                    <div className={styles.ingredients3}>
                        <div className={styles.ingredientsTitle3}>
                            <h3>Ingredientes</h3>
                        </div>
                            <div className={styles.ingredientsStepArea3}>
                                    <li>6 colheres de sopa de sal inglês (90 g)</li>
                                    <li>6 xícaras de água quente (litro e meio)</li>
                                    <li>1 colher de chá de óleo de erva de São João (7 ml)</li>
                                    <li>1/2 xícara de argila cosmética (100 g)</li>
                            </div>
                    </div>

                    <div className={styles.preparation3}>
                        <div className={styles.preparationTitle3}>
                            <h3>Preparação</h3>
                        </div>
                        <div className={styles.preparationStepArea3}>
                            <li>Primeiro, despeje o sal inglês em uma tigela de água quente.</li>
                            <li>Posteriormente, incorpore o óleo de erva de São João e a argila cosmética.</li>
                        </div>
                    </div>

                    <div className={styles.modeOfUse3}>
                        <div className={styles.modeOfUseTitle3}>
                            <h3>Modo de uso</h3>
                        </div>
                            <div className={styles.modeOfUseStepsArea3}>
                                <li>Depois de misturar os ingredientes, mergulhe os pés por 20 minutos.</li>
                                <li>Você pode repetir o tratamento 3 vezes por semana.</li>
                            </div>
                    </div>
                    
                </div>
            </div>

            <div className={styles.bathStepsTitle4}>
                <div className={styles.TextBathStepsTitleArea4}>
                    <h3>4. Banho com gengibre e água oxigenada</h3>
                </div>
            </div>

            <div className={styles.bathStepsContent4}>
                <div className={styles.textBathStepsContentArea4}>
                    <p className={styles.textBathStepsContentAreaP4_1}>O último recomendado entre estes banhos de pés terapêuticos é o feito com gengibre (que tem propriedades anti-inflamatórias, segundo este <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3665023/">estudo</a> da Universidade de Isfahan (Irã)) e peróxido de hidrogénio. A sua fórmula permite reduzir a inflamação e a dor em caso de tensão ou esforço excessivo , além de eliminar a rugosidade e o excesso de ressecamento.</p>
                </div>
            </div>

            <div className={styles.revenue4}>
                <div className={styles.revenueArea4}>

                    <div className={styles.ingredients4}>
                        <div className={styles.ingredientsTitle4}>
                            <h3>Ingredientes</h3>
                        </div>
                            <div className={styles.ingredientsStepArea4}>
                                    <li>2 colheres de sopa de gengibre em pó (40 g)</li>
                                    <li>6 colheres de sopa de água oxigenada (90 ml)</li>
                                    <li>6 xícaras de água (litro e meio)</li>
                            </div>
                    </div>

                    <div className={styles.preparation4}>
                        <div className={styles.preparationTitle4}>
                            <h3>Preparação</h3>
                        </div>
                        <div className={styles.preparationStepArea4}>
                            <li>Primeiro, aqueça os copos de água a uma temperatura suportável para os pés.</li>
                            <li>Em seguida, despeje-o em uma banheira ou bacia.</li>
                            <li>Mais tarde, adicione o gengibre e o peróxido de hidrogênio .</li>
                        </div>
                    </div>

                    <div className={styles.modeOfUse4}>
                        <div className={styles.modeOfUseTitle4}>
                            <h3>Modo de uso</h3>
                        </div>
                            <div className={styles.modeOfUseStepsArea4}>
                                <li>Mergulhe os pés por 15 a 20 minutos.</li>
                                <li>Após este tempo, seque-os bem e descanse.</li>
                                <li>Faça o remédio 2 ou 3 vezes por semana, antes de ir para a cama.</li>
                            </div>
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
                            <li>Ahmad, Z. (2010). The uses and properties of almond oil. Complementary Therapies in Clinical Practice. https://doi.org/10.1016/j.ctcp.2009.06.015</li>
                        </div>
                        
                         <div className={styles.bibli2}>
                            <li>Lin TK, Zhong L, Santiago JL. Anti-Inflammatory and Skin Barrier Repair Effects of Topical Application of Some Plant Oils. Int J Mol Sci. 2017;19(1):70. Published 2017 Dec 27. doi:10.3390/ijms19010070</li>
                        </div>

                        <div className={styles.bibli3}>
                            <li>Mori HM, Kawanami H, Kawahata H, Aoki M. Wound healing potential of lavender oil by acceleration of granulation and wound contraction through induction of TGF-β in a rat model. BMC Complement Altern Med. 2016;16:144. Published 2016 May 26. doi:10.1186/s12906-016-1128-7</li>
                        </div>

                        <div className={styles.bibli4}>
                            <li>Williams LB, Haydel SE. Evaluation of the medicinal use of clay minerals as antibacterial agents. Int Geol Rev. 2010;52(7/8):745–770. doi:10.1080/00206811003679737</li>
                        </div>

                        <div className={styles.bibli5}>
                            <li>Moosavi M. Bentonite Clay as a Natural Remedy: A Brief Review. Iran J Public Health. 2017;46(9):1176–1183.</li>
                        </div>

                        <div className={styles.bibli6}>
                            <li>Bode AM, Dong Z. The Amazing and Mighty Ginger. In: Benzie IFF, Wachtel-Galor S, editors. Herbal Medicine: Biomolecular and Clinical Aspects. 2nd edition. Boca Raton (FL): CRC Press/Taylor & Francis; 2011. Chapter 7. Available from: https://www.ncbi.nlm.nih.gov/books/NBK92775/</li>
                        </div>

                        <button
                        onClick={toggleModal}
                         className={styles.closeBtn}>X</button>

                        
                    </div>
                    )}

                    
                </div>    
            </div>

            


        </div>
        </>
    );
};

export default Article;