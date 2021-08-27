import { AutoComplete } from 'antd';
import React from 'react';
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";


const TermsAndCondition = (props)=>{

    const [isOpen, setIsOpen] = React.useState(false);

    const showModal = () => {
        setIsOpen(true);
      };
    
      const hideModal = () => {
        setIsOpen(false);
      };



    return <div className="container">

        <div className="row justify-content-center">
            <div className="col-lg-4 bg-white">

                    <>
            <button className="btn btn-info" onClick={showModal}>Display Modal</button>
            <Modal show={isOpen} onHide={hideModal}>
                <Modal.Header>
                <Modal.Title>Hi</Modal.Title>
                </Modal.Header>
                <Modal.Body>The body</Modal.Body>
                <Modal.Footer>
                <button onClick={hideModal}>Cancel</button>
                <button>Save</button>
                </Modal.Footer>
            </Modal>
            </>

                       <p> *Terms and conditions*</p>



                        <p>1. General</p>
                        <p> 1.1. Welcome to “link” (the "Website"), </p>
                        <p>1.2. The Website includes information about third-party platforms (the "Third-Party Platforms") for trading in Bitcoins (the "Services").</p>
                        <p>1.3. These terms of use (the "Terms") govern your ("You", "Your" or "User") use of the Website or the Services. These Terms should be read carefully by You in their entirety prior to Your use of the Services. Please note that these Terms constitute a legally binding agreement between You and the Company, and that if You do not agree with any provision of these Terms, You shall immediately cease using the Website. By using the Website, You agree to the Terms, as amended from time to time.
                        These Terms incorporate Our Privacy Policy and by agreeing to these Terms, You confirm that You also accept and agree to Our privacy policy (You can review Our Privacy Policy by clicking here).</p>
                        <p>2. Eligibility</p>
                        <p>2.1. You are only entitled to use the Website, if You comply with all of the following:</p>
                        <p>2.1.1. You are at least 18 years old;</p>
                        <p>2.1.2. You have the right, authority and capacity to enter into these Terms and to abide by all the terms and conditions of these Terms;</p>
                        <p>2.1.3. You are not prohibited from using the Website and/or the Services pursuant to the laws of the country in which You reside or located while using the Website.</p>
                        <p>2.2. The Company makes no representations or warranties, express or implied,
                           concerning the legality of the Website and/or the Services and/or of any person's
                            use of the Website and/or the Services, and shall not be responsible for any illegal
                             use of the Website and/or the Services by the User.</p>
                        <p>3. Restricted territories</p>
                        <p>3.1. Without derogating from the generality of the foregoing, 
                          the Company may, at its sole discretion, restrict the availability of the
                           Website and/or Services (or any part thereof) to: (i) any Users in any territory (the “Restricted Territories”),
                            and (ii) any Users who do not comply with the Company's AML (anti money laundering) and/or KYC (know your client) 
                            policies and practices, or (iii) who Company reasonably believes may expose it to legal, regulatory, reputation or
                             economic risks.</p>
                        <p>3.2. The territories of [usa’ kanada’ israel] are specifically excluded from these Terms,
                           and constitute Restricted Territories.</p>
                        <p>3.3. If Company reasonably believes that any legal or regulatory
                           environment (and/or any actual or proposed changes thereto) in the relevant
                            territory will expose the Company to legal, regulatory, reputation or economic
                             risks in such territory should Company continue to provide or make available 
                             the Website and/or Services (or any part thereof) to Users in that territory,
                              Company may inform You of its decision to designate such territory as a Restricted Territory,
                               and following such notice You shall cease immediately using the Website and/or Services.</p>
                        <p>3.4. Company may impose additional requirements or conditions before accepting Users residing
                           in or from specific countries in its sole discretion. Furthermore, it is acknowledged that if
                            any Users should travel to the Restricted Territories, Company’s Website and/or Services may 
                            be unavailable and/or blocked therein.</p>
                        <p>4. Prohibited activities</p>

                        <p>4.1. You undertake to use the Website and the Services in a respectful manner, and You undertake not to:</p>

                        <p>4.1.1. Link to the Website and/or use the Website for the purpose of uploading, downloading,
                           distributing, publishing or transmitting (a) information or other material in a manner that
                            violates any rights, including intellectual property rights, protection of privacy rights or
                             any other right; (b) information or other material that is prohibited for publication or use
                              because it constitutes threat, harm, insult, slander, defamation, racism or inappropriate
                               content; (c) information or other material that includes a virus or other software that
                                may damage the computer systems of the Company or any third parties or in a manner that
                                 may restrict or prevent others from using the Website; (d) information or other material
                                  that violates any law; or (e) information or other material that includes an advertisement
                                   of any kind without the prior written permission of the Company;</p>

                        <p>4.1.2. Delete or modify any attributions, legal notices or other proprietary
                           designations or labels on the Website;</p>

                        <p>4.1.3. Use the Services using any interface other than the Website;</p>

                        <p>4.1.4. Interfere with other Users' use of the Website and/or the Services;</p>

                        <p>4.1.5. Use bots or other automated methods to access or use the Website and/or the Services;</p>

                        <p>4.1.6. Upload or transmit (or attempt to upload or to transmit),
                           without the Company’s express permission, any material that acts 
                           as a passive or active information collection or transmission mechanism,
                            including, without limitation, web bugs, cookies or other similar spyware devices;</p>

                        <p>4.1.7. Engage in “framing,” “mirroring,” or otherwise simulating
                           the appearance or function of the Services;</p>
                        <p>4.1.8. Violate any applicable laws or regulations, encourage or
                           promote any illegal activity including, but not limited to,
                            copyright infringement, trademark infringement, defamation,
                             invasion of privacy, identity theft, hacking, cracking or 
                             distribution of counterfeit software;</p>

                        <p>4.1.9. Make any changes and/or interfere in any way
                           in the source code of the Website and upload any 
                           software and/or application that may harm or cause 
                           damage to the Company, the Website or any other third party;</p>

                        <p>4.1.10. Disassemble, decompile or otherwise reverse
                           engineer any software or other technology included 
                           in the Website or used to provide the Services.</p>

                        <p>4.2. You acknowledge that without prejudice to any 
                          other right of the Company, in case that the Company 
                          is concerned that Your use of the Website does not comply
                           with the provisions of these Terms or any applicable law, 
                           the Company may track Your use of the Website or the Services, 
                           prevent You from accessing the Website, transfer Your behavior
                            patterns on the Website to third parties, and any other action 
                            that the Company may deem appropriate to protect its property
                             and/or rights and/or rights of third parties.</p>

                        <p>5. Intellectual property rights</p>

                        <p>5.1. The Website and its content, including 
                          the video materials, text, photos, logos, 
                          designs, music, sound, figures, trademarks 
                          and any other content embodied in the Website
                           are protected by intellectual property rights 
                           of the Company or of third parties.</p>
                           
                        <p>5.2. As between the Company and the User, the Company retains all right, title and interest in and to the Website and the Services. The use of the Website and/or the Services does not confer on the User any of the intellectual property rights embodied in the Website and/or the Services, other than the right to use the Website and/or the Services in accordance with the terms of these Terms.</p>
                        <p>5.3. The User may only use the Website and/or the Services for personal and non-commercial use.</p>
                        <p>5.4. You shall not, nor shall You allow any other party to modify, decompile, disassemble, reverse engineer, copy, transfer, create derivative works from, rent, sub-license, distribute, reproduce framed, republish, scrape, download, display, transmit, post, lease or sell in any form or by any means, in whole or in part, use for any purpose other than for using the Website or the Services pursuant to the Terms or otherwise exploit any of the contents of the Website without the Company’s explicit, prior written permission.</p>
                        <p>6. Limitation of liability</p>
                        <p>6.1. Your use of the Website and/or the Services shall be at Your sole risk. To the fullest extent permitted by law, the Company disclaims all warranties, explicit or implied, in connection with the Website and the Services and Your use thereof including implied warranties of merchantability, title, fitness for a particular purpose or non-infringement, usefulness, authority, accuracy, completeness, and timeliness. Accordingly, the Services, including all content and functions made available on or accessed through or sent from the Website, are provided “as is,” “as available,” and “with all faults" basis.</p>
                        <p>6.2. Without derogating from the generality of the foregoing, the Company assumes no liability or responsibility for any (a) errors, mistakes, or inaccuracies of any content included in the Website; (b) any interruption or cessation of transmission to or from the Website of via the Services; (c) any bugs, viruses, Trojan horses, or the like which may be transmitted to or through the Website or the Services by any third party.</p>
                        <p>6.3. You agree to hold the Company harmless for any losses caused, directly or indirectly, to You and/or to any other third party, with respect to the Website and/or the Services and You shall bear sole responsibility for any of Your decisions made relying on the content of the Website and/or the Services.</p>
                        <p>6.4. In no event will the Company be liable to You or any third party for any special, direct, indirect, incidental, special, punitive, or consequential damages whatsoever, including any lost profits or lost data arising from Your use of the Website and/or the Services or other materials on, accessed through or downloaded from the Website or as part of the Services, whether based on warranty, contract, tort, or any other legal theory, and whether or not the Company has been advised of the possibility of these damages and in cases where judicial authority finds the Company liable, its liability shall not exceed 1,000 USD. The foregoing limitation of liability shall apply to the fullest extent permitted by law in the applicable jurisdiction.</p>
                        <p>6.5. You specifically acknowledge that the Company shall not be liable for User Content or defamatory, offensive, or illegal conduct by any third party and that the risk of harm or damage from the foregoing rests entirely with You.</p>
                        <p>6.6. The Company is not responsible for any problems or technical malfunction of any telephone or network lines, computer online systems, servers or providers, hardware, software, failure due to technical problems or traffic congestion on the internet (or inaccessibility of the internet) or incompatibility between the Website or the Services and Your browser and/or other equipment. Without derogating from the generality of the above, the Company does not assume any responsibility or risk for Your use of the internet.</p>
                        <p>7. Third party services or content</p>
                        <p>7. Third party services or content</p>
                        <p>7.1. While using the Services, You may view content or services provided by third parties, including advertisements and reviews regarding the Third-Party Platforms.</p>
                        <p>7.2. We do not control, endorse or adopt such content or services, and it may not always be accurate or current.</p>
                        <p>7.3. Accordingly, We recommend that You independently verify all information before relying on it, and any decisions or actions taken based upon such information are Your sole responsibility.</p>
                        <p>8. Links</p>
                        <p>8.1. The Website may contain links, content, advertisements, promotions, logos and other materials of other websites or software that are controlled or offered by third parties (the “Links”). We caution You to ensure that You understand the risks involved in using such websites, software or materials before retrieving, using, relying upon or purchasing anything via these websites or software, or based on such materials. Such Links are provided solely for Your convenience, and You agree that under no circumstances will You hold Us liable for any loss or damage caused by use of or reliance on any content, goods or services available on other websites or software.</p>
                        <p>8.2. The inclusion of Links in the Website is not an endorsement, authorization, sponsorship, affiliation or any other connection between the Company and these websites, software or their operators.</p>
                        <p>8.3. We have not reviewed any or all of such Links and are not responsible for any of the content of the websites or software referred thereby. We caution You to ensure that You understand the risks involved in using such websites or software before retrieving, using, relying upon or purchasing anything via these websites or software. Under no circumstances will You hold Us liable for any loss or damage caused by use of or reliance on any content, goods or services available on other websites or software.</p>
                        <p>9. Miscellaneous</p>
                        <p>9.1. We may, at Our sole discretion, amend, modify, or discontinue, from time to time, any of the Services and/or introduce new Services. We shall not be liable for any loss suffered by You resulting from any such changes made and You shall have no claims against Us in such regard.</p>
                        <p>9.2. We may modify these Terms from time to time. When We do, We will provide notice to You by publishing the most current version and revising the date at the top of this page and any modifications shall be effective immediately upon such publication. By continuing to use the Website after any changes come into effect, You are deemed to agree to the revised Terms.</p>
                        <p>9.3. The User agrees that transmission of information to or from the Website does not create between him and the Company any relationship that deviates from those specified in this Terms.</p>
                        <p>9.4. These Terms and the Privacy Policy, as amended from time to time, constitute the only valid agreements between the Company and the User, and no representation, promise, consent or undertaking, whether written or oral, that is not included in the Terms of the Privacy Policy will be binding upon the parties.</p>
                        <p>9.5. No failure or delay on Our part in exercising any right, power or remedy thereunder shall operate as a waiver thereof, nor shall any single or partial exercise of any such right, power or remedy preclude any other or further exercise thereof or the exercise of any other right, power or remedy.</p>
                        <p>9.6. If any provision of these Terms is held by a court of competent jurisdiction to be unenforceable under applicable law, then such provision shall be excluded from these Terms and the remainder of these Terms shall be interpreted as if such provision was so excluded and shall be enforceable in accordance with its terms; provided, however, that in such event these Terms shall be interpreted so as to give effect, to the greatest extent consistent with and permitted by applicable law, to the meaning and intention of the excluded provision as determined by such court of competent jurisdiction.</p>
                        <p>9.7. We may transfer or assign any and all of Our rights and obligations hereunder to any third party; without derogating from the above, the Website and/or any of the Services may be operated by third parties. You may not transfer, assign or pledge in any manner whatsoever any of Your rights or obligations under these Terms.</p>

</div>
        </div>
    </div>
}

export default TermsAndCondition;