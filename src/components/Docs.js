import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link } from "react-router-dom"
import { Accordion, AccordionItem, AccordionTitle, AccordionContent } from 'react-foundation'
import './Docs.css'


const Docs = () => {

    return (
        <div>
            
            <Navbar tab="docs"/>
                
                <ul className="tabs tabs-header" data-responsive-accordion-tabs="tabs medium-accordion large-tabs" id="example-tabs">
                    <li className="tabs-title is-active"><Link to="#panel1" aria-selected="true">API</Link></li>
                    <li className="tabs-title"><Link to="#panel2">CLI</Link></li>
                </ul>
                
                <div className="tabs-content" data-tabs-content="example-tabs">
                    <div className="tabs-panel is-active" id="panel1">
                        <div className="grid-x">
                            <div className="cell medium-1">
                            
                                <ul className="vertical tabs" data-tabs id="example-tabs">
                                    <li className="tabs-title is-active"><Link to="#panel1v" aria-selected="true">Introduction</Link></li>
                                    <li className="tabs-title"><Link to="#panel2v">Authentication</Link></li>
                                    <li className="tabs-title"><Link to="#panel2v">Errors</Link></li>
                                    <li className="tabs-title"><Link to="#panel2v">Metadata</Link></li>
                                </ul>
                               
                                <br/>
                                <ul className="accordion" data-accordion data-allow-all-closed="true">
                                    <li className="accordion-item" data-accordion-item>
                                        <Link to="#" className="accordion-title">RESOURCES</Link>

                                        <div className="accordion-content" data-tab-content>
                                        <p>Panel 1. Lorem ipsum dolor</p>
                                        <Link to="#">Nowhere to Go</Link>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* <Accordion> */}
                    <div className="tabs-panel" id="panel2">
                    <div className="grid-x">
                            <div className="cell medium-1">

                                <Accordion className="vertical tabs" data-tabs id="example-tabs">
                                    <li className="tabs-title is-active"><Link to="#panel1v" aria-selected="true">Introduction</Link></li>
                                    <li className="tabs-title"><Link to="#panel2v">Installation</Link></li>
                                    <li className="tabs-title"><Link to="#panel2v">Errors</Link></li>
                                    <li className="tabs-title"><Link to="#panel2v">Metadata</Link></li>
                                </Accordion>
                               
                                <br/>

                                <Accordion className="accordion" data-accordion data-allow-all-closed="true">
                                    <li className="accordion-item" data-accordion-item>
                                        <Link to="#" className="accordion-title">RESOURCES</Link>

                                        <div className="accordion-content" data-tab-content>
                                        <p>Panel 1. Lorem ipsum dolor</p>
                                        <Link to="#">Nowhere to Go</Link>
                                        </div>
                                    </li>
                                </Accordion>
                            </div>
                        </div>
                    </div>
                    {/* </Accordion> */}
                </div>

                
        <Footer/>
        </div>
    )
}

export default Docs
