import React,{Component} from 'react';
import image1 from './Images/c8.png';
import image2 from './Images/c3.jpg';
import image3 from './Images/c17.jpeg';
import ques1 from './Images/ques1.PNG';
import quiz from './Images/Quiz.PNG';
import books from './Images/books.png';
import notes from './Images/note4.PNG';
class Dashboardbody extends Component{
    render(){
                  return (
                   
                      
                      <div style={{backgroundColor: '#f58634'}}> 
                        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                          <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
                          </div>
                          <div className="carousel-inner">
                            <div className="carousel-item active">
                              <img src={image1} className="d-block w-100" alt="..." style={{height: '270px'}} />
                              <div className="carousel-caption d-none d-md-block">
                                <h5>Student's Dashboard</h5>
                              </div>
                            </div>
                            <div className="carousel-item">
                              <img src={image2} className="d-block w-100" alt="..." style={{height: '270px'}} />
                              <div className="carousel-caption d-none d-md-block">
                                <h5 style={{color: 'white'}}>Learn Smarter</h5>
                              </div>
                            </div>
                            <div className="carousel-item">
                              <img src={image3} className="d-block w-100" alt="..." style={{height: '270px'}} />
                              <div className="carousel-caption d-none d-md-block">
                                <h5>Learn with Rhythm</h5>
                              </div>
                            </div>
                          </div>
                          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="visually-hidden">Previous</span>
                          </button>
                          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="visually-hidden">Next</span>
                          </button>
                        </div>
                        <br />
                       
                          <div className="row" style={{height: '1400px'}}>
                            <section className="col-sm-4">
                              <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                  <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                      <div style={{fontFamily: 'bold'}}>NDA</div>
                                    </button>
                                  </h2>
                                  <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne">
                                    <div className="accordion-body">
                                      <div className="accordion" id="accordionExample">
                                        <div className="accordion-item">
                                          <h2 className="accordion-header" id="headingTwo">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                              <div className="row">
                                                <section className="col-sm-3 card">
                                                  <img src={ques1} className="responsive" />
                                                </section>
                                                <p>Question Papers</p>
                                              </div></button>
                                          </h2>
                                          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo">
                                            <div className="accordion-body">
                                              <u><strong><p><a href ="https://bodheeprep.com/wp-content/uploads/2020/12/CAT-2020-Question-paper-with-Solutions-Slot-1-Bodhee-Prep.pdf?x47818">QuestionPaper2020</a></p></strong></u>
                                              <u><strong><p><a href ="https://bodheeprep.com/wp-content/uploads/2020/12/CAT-2020-Question-paper-with-Solutions-Slot-1-Bodhee-Prep.pdf?x47818">QuestionPaper2019</a></p></strong></u>
                                              <u><strong><p><a href ="https://bodheeprep.com/wp-content/uploads/2019/04/CAT-2018-question-paper-with-Solution-SLOT-1-Bodhee-Prep.pdf?x47818">QuestionPaper2018</a></p></strong></u>
                                              <u><strong><p><a href ="https://bodheeprep.com/wp-content/uploads/2021/01/CAT-2017-Question-Paper-with-Solution-SLOT-1.pdf?x47818">QuestionPaper2017</a></p></strong></u>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="accordion-item">
                                          <h2 className="accordion-header" id="headingThree">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                              <div className="row">
                                                <section className="col-sm-3 card">
                                                  <img src={notes} className="responsive" />
                                                </section>
                                                <p>Notes</p>
                                              </div></button>
                                          </h2>
                                          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree">
                                            <div className="accordion-body">
                                              <u><strong><p>Notes1</p></strong></u>
                                              <u><strong><p>Notes2</p></strong></u>
                                              <u><strong><p>Notes3</p></strong></u>
                                              <u><strong><p>Notes</p></strong></u>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="accordion-item">
                                          <h2 className="accordion-header" id="headingFour">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                              <div className="row">
                                                <section className="col-sm-3 card">
                                                  <img src={books} className="responsive" />
                                                </section>
                                                <p>Books</p>
                                              </div></button>
                                          </h2>
                                          <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour">
                                            <div className="accordion-body">
                                              <u><strong> <p>Book1</p></strong></u>
                                              <u> <strong><p>Book2</p></strong></u>
                                              <u><strong>  <p>Book3</p></strong></u>
                                              <u><strong><p>Book4</p></strong></u>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingFive">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                            <div className="row">
                                              <section className="col-sm-4 card">
                                                <img src={quiz} className="responsive" />
                                              </section>
                                              <p>Quiz</p>
                                            </div></button>
                                        </h2>
                                        <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive">
                                          <div className="accordion-body">
                                            <u><strong> <p>Quiz1</p></strong></u>
                                            <u> <strong><p>Quiz2</p></strong></u>
                                            <u><strong>  <p>Quiz3</p></strong></u>
                                            <u><strong><p>Quiz4</p></strong></u>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </section><section className="col-sm-4">
                              <div className="accordion-item">
                                <h2 className="accordion-header" id="headingSix">
                                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                    <div style={{fontFamily: 'bold'}}>CAT</div>
                                  </button>
                                </h2>
                                <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix">
                                  <div className="accordion-body">
                                    <div className="accordion" id="accordionExample">
                                      <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingSeven">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                            <div className="row">
                                              <section className="col-sm-3 card">
                                                <img src={ques1} className="responsive" />
                                              </section>
                                              <p>Question Papers</p>
                                            </div></button>
                                        </h2>
                                        <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven">
                                          <div className="accordion-body">
                                          <u><strong><p><a href ="https://bodheeprep.com/wp-content/uploads/2020/12/CAT-2020-Question-paper-with-Solutions-Slot-1-Bodhee-Prep.pdf?x47818">QuestionPaper2020</a></p></strong></u><br />
                                              <u><strong><p><a href ="https://bodheeprep.com/wp-content/uploads/2020/12/CAT-2020-Question-paper-with-Solutions-Slot-1-Bodhee-Prep.pdf?x47818">QuestionPaper2019</a></p></strong></u><br />
                                              <u><strong><p><a href ="https://bodheeprep.com/wp-content/uploads/2019/04/CAT-2018-question-paper-with-Solution-SLOT-1-Bodhee-Prep.pdf?x47818">QuestionPaper2018</a></p></strong></u><br />
                                              <u><strong><p><a href ="https://bodheeprep.com/wp-content/uploads/2021/01/CAT-2017-Question-Paper-with-Solution-SLOT-1.pdf?x47818">QuestionPaper2017</a></p></strong></u><br />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingEight">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                            <div className="row">
                                              <section className="col-sm-3 card">
                                                <img src={notes} className="responsive" />
                                              </section>
                                              <p>Notes</p>
                                            </div>
                                          </button>
                                        </h2>
                                        <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight">
                                          <div className="accordion-body">
                                          <u><strong><p><a href ="https://bodheeprep.com/critical-reasoning-cat-exam>QuestionPaper2020">Reasoning</a></p></strong></u><br />
                                              <u><strong><p><a href ="https://bodheeprep.com/free-cat-rc-practice-problemshttps://bodheeprep.com/free-cat-rc-practice-problems">Reading Comprehension</a></p></strong></u><br />
                                              <u><strong><p><a href ="https://bodheeprep.com/cat-grammar">Grammar</a></p></strong></u><br />
                                              <u><strong><p><a href ="https://bodheeprep.com/tricks-solve-odd-sentence-out-cat-question">Odd One out Jumbles</a></p></strong></u><br />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingNine">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                                            <div className="row">
                                              <section className="col-sm-3 card">
                                                <img src={books} className="responsive" />
                                              </section>
                                              <p>Books</p>
                                            </div></button>
                                        </h2>
                                        <div id="collapseNine" className="accordion-collapse collapse" aria-labelledby="headingNine">
                                          <div className="accordion-body">
                                            <u><strong> <p>Book1</p></strong></u>
                                            <u> <strong><p>Book2</p></strong></u>
                                            <u><strong>  <p>Book3</p></strong></u>
                                            <u><strong><p>Book4</p></strong></u>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="accordion-item">
                                      <h2 className="accordion-header" id="headingTen">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                                          <div className="row">
                                            <section className="col-sm-4 card">
                                              <img src={quiz} className="responsive" />
                                            </section>
                                            <p>Quiz</p>
                                          </div></button>
                                      </h2>
                                      <div id="collapseTen" className="accordion-collapse collapse" aria-labelledby="headingTen">
                                        <div className="accordion-body">
                                          <u><strong> <p>Quiz1</p></strong></u>
                                          <u> <strong><p>Quiz2</p></strong></u>
                                          <u><strong>  <p>Quiz3</p></strong></u>
                                          <u><strong><p>Quiz4</p></strong></u>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </section><section className="col-sm-4">
                              <div className="accordion-item">
                                <h2 className="accordion-header" id="headingEleven">
                                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
                                    <div style={{fontFamily: 'bold'}}>BANKING</div>
                                  </button>
                                </h2>
                                <div id="collapseEleven" className="accordion-collapse collapse" aria-labelledby="headingEleven">
                                  <div className="accordion-body">
                                    <div className="accordion" id="accordionExample">
                                      <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingTwelve">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwelve" aria-expanded="false" aria-controls="collapseTwelve">
                                            <div className="row">
                                              <section className="col-sm-3 card">
                                                <img src={ques1} className="responsive" />
                                              </section>
                                              <p>Question Papers</p>
                                            </div></button>
                                        </h2>
                                        <div id="collapseTwelve" className="accordion-collapse collapse" aria-labelledby="headingTwelve">
                                          <div className="accordion-body">
                                            <u><strong><p>QuestionPaper1</p></strong></u>
                                            <u><strong><p>QuestionPaper2</p></strong></u>
                                            <u> <strong><p>QuestionPaper3</p></strong></u>
                                            <u><strong><p>QuestionPaper4</p></strong></u>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingThirteen">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThirteen" aria-expanded="false" aria-controls="collapseThirteen">
                                            <div className="row">
                                              <section className="col-sm-3 card">
                                                <img src={notes} className="responsive" />
                                              </section>
                                              <p>Notes</p>
                                            </div>
                                          </button>
                                        </h2>
                                        <div id="collapseThirteen" className="accordion-collapse collapse" aria-labelledby="headingThirteen">
                                          <div className="accordion-body">
                                            <u><strong><p>Notes1</p></strong></u>
                                            <u><strong><p>Notes2</p></strong></u>
                                            <u><strong><p>Notes3</p></strong></u>
                                            <u><strong><p>Notes</p></strong></u>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingForteen">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseForteen" aria-expanded="false" aria-controls="collapseForteen">
                                            <div className="row">
                                              <section className="col-sm-3 card">
                                                <img src={books} className="responsive" />
                                              </section>
                                              <p>Books</p>
                                            </div>
                                          </button>
                                        </h2>
                                        <div id="collapseForteen" className="accordion-collapse collapse" aria-labelledby="headingForteen">
                                          <div className="accordion-body">
                                            <u><strong> <p>Book1</p></strong></u>
                                            <u> <strong><p>Book2</p></strong></u>
                                            <u><strong>  <p>Book3</p></strong></u>
                                            <u><strong><p>Book4</p></strong></u>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="accordion-item">
                                      <h2 className="accordion-header" id="headingFifteen">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFifteen" aria-expanded="false" aria-controls="collapseFifteen">
                                          <div className="row">
                                            <section className="col-sm-4 card">
                                              <img src={quiz} className="responsive" />
                                            </section>
                                            <p>Quiz</p>
                                          </div></button>
                                      </h2>
                                      <div id="collapseFifteen" className="accordion-collapse collapse" aria-labelledby="headingFifteen">
                                        <div className="accordion-body">
                                          <u><strong> <p>Quiz1</p></strong></u>
                                          <u> <strong><p>Quiz2</p></strong></u>
                                          <u><strong>  <p>Quiz3</p></strong></u>
                                          <u><strong><p>Quiz4</p></strong></u>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </section><table>
                              <tbody><tr>
                                </tr>
                              </tbody></table>
                          </div>
                      
                      </div>
                    
                      
                  );
                }
              };
export default Dashboardbody;
