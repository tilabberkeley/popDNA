import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link } from "react-router-dom"
import { Button } from 'react-foundation'
import { Accordion, AccordionItem, AccordionTitle, AccordionContent } from 'react-foundation'
import './Docs.css'




const Docs = () => {
    function scrollToView(element) {     
        element.preventDefault()
        document.getElementById(element).scrollIntoView()
    }

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
                            <div className="cell medium-2">
                            
                                <ul className="vertical tabs" data-tabs id="example-tabs">
                                    <li className="tabs-title is-active"><Link to="#panel1v" aria-selected="true">Introduction</Link></li>
                                    <li className="tabs-title"><Link to="#panel2v">Authentication</Link></li>
                                    <li className="tabs-title"><Link to="#panel2v">Errors</Link></li>
                                    <li className="tabs-title"><Link to="#panel2v">Metadata</Link></li>
                                </ul>
                               
                                <br/>
                                <ul className="accordion accordion-truncated" data-accordion data-multi-expand="true" data-allow-all-closed="true">
                                <li className="accordion-item" data-accordion-item>
                                        <Link to="#" className="accordion-title">CORE RESOURCES</Link>

                                        <div className="accordion-content" data-tab-content>
                                            <p>PDB and PDBx/mmCIF Tools</p>
                                            <Link to="#pdb_to_xyz">PDB &#8594; XYZ</Link>
                                            <br/>
                                            <Link to="#">PDB &#8594; oxDNA</Link>
                                            <br/>
                                            <Link to="#">PDB &#8594; CanDo</Link>
                                            <br/>
                                            <Link to="#">PDB &#8594; vHelix</Link>
                                            <br/>
                                            <Link to="#">PDB &#8594; Tiamat</Link>
                                            <br/>
                                            <Link to="#">PDB &#8594; cadnano</Link>
                                        </div>

                                        <div className="accordion-content" data-tab-content>
                                            <p>oxDNA and oxView Tools</p>
                                            <Link to="#">oxDNA &#8594; XYZ</Link>
                                            <br/>
                                            <Link to="#">oxDNA &#8594; PDB</Link>
                                            <br/>
                                            <Link to="#">oxDNA &#8594; CanDo</Link>
                                            <br/>
                                            <Link to="#">oxDNA &#8594; vHelix</Link>
                                            <br/>
                                            <Link to="#">oxDNA &#8594; Tiamat</Link>
                                            <br/>
                                            <Link to="#">oxDNA &#8594; cadnano</Link>
                                        </div>

                                        <div className="accordion-content" data-tab-content>
                                            <p>Cadnano Tools</p>
                                            <Link to="#">cadnano &#8594; XYZ</Link>
                                            <br/>
                                            <Link to="#">cadnano &#8594; oxDNA</Link>
                                            <br/>
                                            <Link to="#">cadnano &#8594; PDB</Link>
                                            <br/>
                                            <Link to="#">cadnano &#8594; CanDo</Link>
                                            <br/>
                                            <Link to="#">cadnano &#8594; vHelix</Link>
                                            <br/>
                                            <Link to="#">cadnano &#8594; Tiamat</Link>
                                        </div>
                                    </li>

                                    <li className="accordion-item" data-accordion-item>
                                        <Link to="#" className="accordion-title">OTHER RESOURCES</Link>

                                        <div className="accordion-content" data-tab-content>
                                        <p>Panel 1. Lorem ipsum dolor</p>
                                        <Link to="#">Nowhere to Go</Link>
                                        </div>
                                    </li>                                

                                    <li className="accordion-item" data-accordion-item>
                                        <Link to="#" className="accordion-title">EXAMPLES</Link>

                                        <div className="accordion-content" data-tab-content>
                                        <p>Panel 1. Lorem ipsum dolor</p>
                                        <Link to="#">Nowhere to Go</Link>
                                        </div>
                                    </li>
                                </ul>

                            </div>
                            <div className="grid-container">
                                <div className="cell medium-10">
                                    <h1>Introduction</h1>
                                    <p>popDNA API provides developers and deesigners with a fast tool for integrating DNA translation into their project. No installations are neccessary but a free API key must be obtained to use popDNA. To find out more on how to get an API ket, see <Link to="#">Authentication</Link>.
                                    popDNA comes in two flavor, the first being the API (application programming interface) and the second the local CLI (command line interface). You are currently viewing documentation for the API. Navigating across the documentation can be done by selecting the appoperiate tab at the top.
                                    While there are no obstacles for using any of these tools for any purpose, each is made highly efficent for a particular task. The API serves as a communication platform between SaaS apps, and thus relies on uploading, transferring, and downloading files. On the other hand, the CLI
                                    serves as a platform for local development and does not require any of those things, but it does require available memory on your machine.
                                    </p>
                                    <br/>
                                    <p>
                                        Due to their structural differences, popDNA API works best for smaller files for development in the cloud, whereas popDNA CLI thrives in local enviornment and can easily work with very large files. We recommend &#8212; for your times sake &#8212; you following these guidelines.
                                    </p>
                                    {/* <code class="code-block">
                                        GET /api/v1/pdb?api_key=...&to=...
                                    </code> */}
                                
                                <div id="pdb_to_xyz">
                                    <code class="code-block">
                                        POST /api/v1/pdb?api_key=...&to=xyz
                                    </code>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <Accordion> */}
                    <div className="tabs-panel" id="panel2">
                    <div className="grid-x">
                            <div className="cell medium-2">

                                <Accordion className="vertical tabs" data-tabs id="example-tabs">
                                    <li className="tabs-title is-active"><Link to="#panel1v" aria-selected="true">Introduction</Link></li>
                                    <li className="tabs-title"><Link to="#panel2v">Installation</Link></li>
                                    <li className="tabs-title"><Link to="#panel2v">Errors</Link></li>
                                    <li className="tabs-title"><Link to="#panel2v">Metadata</Link></li>
                                </Accordion>
                               
                                <br/>

                                <Accordion className="accordion accordion-truncated" data-accordion data-allow-all-closed="true">
                                    <li className="accordion-item" data-accordion-item>
                                        <Link to="#" className="accordion-title">CORE RESOURCES</Link>

                                        <div className="accordion-content" data-tab-content>
                                        <p>PDB and PDBx/mmCIF Tools</p>
                                        <Link to="#">PDB &#8594; XYZ</Link>
                                        <br/>
                                        <Link to="#">PDB &#8594; oxDNA</Link>
                                        <br/>
                                        <Link to="#">PDB &#8594; CanDo</Link>
                                        <br/>
                                        <Link to="#">PDB &#8594; vHelix</Link>
                                        <br/>
                                        <Link to="#">PDB &#8594; Tiamat</Link>
                                        </div>

                                        <div className="accordion-content" data-tab-content>
                                            <p>oxDNA and oxView Tools</p>
                                            <Link to="#">oxDNA &#8594; XYZ</Link>
                                            <br/>
                                            <Link to="#">oxDNA &#8594; PDB</Link>
                                            <br/>
                                            <Link to="#">oxDNA &#8594; CanDo</Link>
                                            <br/>
                                            <Link to="#">oxDNA &#8594; vHelix</Link>
                                            <br/>
                                            <Link to="#">oxDNA &#8594; Tiamat</Link>
                                        </div>
                                    </li>
                                    <li className="accordion-item" data-accordion-item>
                                        <Link to="#" className="accordion-title">EXAMPLES</Link>

                                        <div className="accordion-content" data-tab-content>
                                        <p>Core Resources</p>
                                        <Link to="#">PDB and PDBx/mmCIF examples</Link>
                                        <br/><br/>
                                        <Link to="#">oxDNA and oxView examples </Link>
                                        <br/><br/>
                                        <Link to="#">cadnano examples</Link>
                                        </div>

                                        <div className="accordion-content" data-tab-content>
                                            <p>Other Resources</p>
                                            <Link to="#">vHelix examples</Link>
                                            <br/><br/>
                                            <Link to="#">CanDo examples </Link>
                                            <br/><br/>
                                            <Link to="#">Tiamat examples</Link>

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
