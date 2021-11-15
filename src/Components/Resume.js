import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import SmallTitle from '../Components/SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from '../Components/ResumeItem';

function Resume() {
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (
        <ResumeStyled>
            <Title title={'Resume'} span={'resume'} />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={briefcase} title={'Working Experience'} />
                </div>
                <div className="resume-content">
                    
                    <ResumeItem 
                        year={'2021 - Present'} 
                        title={'Full Stack Developer'}
                        subTitle={'Amc-bs'}
                        text={'Web Developer'} 
                    />
                    
                </div>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Educational Qualifications'} />
                </div>
                <div className="resume-content ">
                    
                    <ResumeItem 
                        year={'2020 - 2023'} 
                        title={'Bachelor of Technology IT'}
                        subTitle={'Sethu Institute of Technology'}
                        text={'SIT was a good institute over Tamil nadu , Teachers are friendly and supporting ....It was a part to achieve my career.'} 
                    />
                    <ResumeItem 
                        year={'2005 - 2019'} 
                        title={'HSC'}
                        subTitle={'A.j School'}
                        text={'The schooling is really made a good memories and motivated me to in the way of success'} 
                    />
                </div>
            </InnerLayout>
        </ResumeStyled>    
    )
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }

    .resume-content{
        border-left: 2px solid var(--border-color);
    }
`;
export default Resume
