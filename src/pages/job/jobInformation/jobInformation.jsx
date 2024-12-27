import styles from './jobInformation.module.css';
import { useRef } from 'react';

import Co_navibar from '~/src/pages/navibar/navibar';

function Co_jobInformation() {

    const jobTitleRef = useRef();
    const workTypeRef = useRef();
    const locationRef = useRef();
    const jobDescriptionRef = useRef();
    const qualificationsRef = useRef();
    const experiencesRef = useRef();
    const requireSkillsRef = useRef();
    const jobSalaryRef = useRef();
    const jobBenefitsRef = useRef();
    const jobInstuctionRef = useRef();
    const jobDeadlineRef = useRef();
    const jobCompanyNameRef = useRef();
    
    return(
        <div className={styles.main}>

            <Co_navibar />

            <div className={styles.mainPart}>
                
                <div className={styles.mainAndSide}>
                    <div className={styles.mainBox}>
                        <div className={styles.box1}>
                            <p ref={jobTitleRef}>jobTitle</p>
                            <p ref={workTypeRef}>workType</p>
                            <p ref={locationRef}>location</p>
                        </div>

                        <div className={styles.box2}>
                            <p ref={jobDescriptionRef}>jobDescription</p>
                        </div>

                        <div className={styles.box3}>
                            <div className={styles.requirements}>
                                <div className={styles.decobar1}></div>
                                <p>Requirements</p>
                                <p ref={qualificationsRef}>qualifications</p>
                                <p ref={experiencesRef}>experiences</p>
                                <p ref={requireSkillsRef}>requireSkills</p>
                            </div>

                            <div className={styles.salary}>
                                <div className={styles.decobar2}></div>
                                <p>Salary and Benefits</p>
                                <p ref={jobSalaryRef}>jobSalary</p>
                                <p ref={jobBenefitsRef}>jobBenefits</p>
                            </div>
                        </div>

                        <div className={styles.application}>
                            <div className={styles.decobar1}></div>
                            <p>Application Process</p>
                            <p ref={jobInstuctionRef}>jobInstuction</p>
                            <p ref={jobDeadlineRef}>jobDeadline</p>
                        </div>

                        <button type="button" className={styles.ungTuyen}>Ứng tuyển</button>
                    </div>

                    <div className={styles.sideBox}>
                        <div className={styles.company}>
                            <p>Company Details</p>
                            <p ref={jobCompanyNameRef}>jobCompanyName</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}


export default Co_jobInformation